-- Enhanced database schema for media files and educational content

-- Media files table for storing video lectures, books, documents
CREATE TABLE IF NOT EXISTS media_files (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL, -- 'video', 'audio', 'document', 'book', 'image'
    file_size BIGINT,
    duration INTEGER, -- for video/audio in seconds
    thumbnail_url TEXT,
    uploaded_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    category VARCHAR(100), -- 'lecture', 'supplementary', 'assessment', 'reference'
    tags TEXT[], -- for searchability
    is_public BOOLEAN DEFAULT false,
    download_allowed BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_media_files_course ON media_files(course_id);
CREATE INDEX IF NOT EXISTS idx_media_files_type ON media_files(file_type);
CREATE INDEX IF NOT EXISTS idx_media_files_uploader ON media_files(uploaded_by);
CREATE INDEX IF NOT EXISTS idx_media_files_category ON media_files(category);

-- Playlists for organizing video lectures
CREATE TABLE IF NOT EXISTS playlists (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Junction table for playlist items
CREATE TABLE IF NOT EXISTS playlist_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    playlist_id UUID REFERENCES playlists(id) ON DELETE CASCADE,
    media_file_id UUID REFERENCES media_files(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(playlist_id, media_file_id)
);

-- User media progress tracking
CREATE TABLE IF NOT EXISTS user_media_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    media_file_id UUID REFERENCES media_files(id) ON DELETE CASCADE,
    progress_seconds INTEGER DEFAULT 0,
    completed BOOLEAN DEFAULT false,
    last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id, media_file_id)
);

-- Row Level Security (RLS) Policies

-- Media files policies
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

-- Users can view public media or media from their enrolled courses
CREATE POLICY "Users can view accessible media files" ON media_files
    FOR SELECT USING (
        is_public = true OR 
        uploaded_by = auth.uid() OR
        EXISTS (
            SELECT 1 FROM enrollments 
            WHERE enrollments.student_id = auth.uid() 
            AND enrollments.course_id = media_files.course_id
        ) OR
        EXISTS (
            SELECT 1 FROM courses 
            WHERE courses.id = media_files.course_id 
            AND courses.teacher_id = auth.uid()
        )
    );

-- Teachers can upload media to their courses
CREATE POLICY "Teachers can upload media files" ON media_files
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM courses 
            WHERE courses.id = media_files.course_id 
            AND courses.teacher_id = auth.uid()
        )
    );

-- Teachers can update their own media files
CREATE POLICY "Teachers can update their media files" ON media_files
    FOR UPDATE USING (
        uploaded_by = auth.uid() OR
        EXISTS (
            SELECT 1 FROM courses 
            WHERE courses.id = media_files.course_id 
            AND courses.teacher_id = auth.uid()
        )
    );

-- Playlists policies
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view accessible playlists" ON playlists
    FOR SELECT USING (
        is_public = true OR 
        created_by = auth.uid() OR
        EXISTS (
            SELECT 1 FROM enrollments 
            WHERE enrollments.student_id = auth.uid() 
            AND enrollments.course_id = playlists.course_id
        )
    );

CREATE POLICY "Teachers can manage playlists" ON playlists
    FOR ALL USING (created_by = auth.uid());

-- User progress policies
ALTER TABLE user_media_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own progress" ON user_media_progress
    FOR ALL USING (user_id = auth.uid());

-- Storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media-files', 'media-files', false);

-- Storage policies for media files
CREATE POLICY "Authenticated users can upload media files" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'media-files' AND 
        auth.role() = 'authenticated'
    );

CREATE POLICY "Users can view accessible media files" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'media-files' AND (
            auth.uid()::text = (storage.foldername(name))[1] OR
            EXISTS (
                SELECT 1 FROM media_files 
                WHERE media_files.file_url LIKE '%' || name || '%'
                AND (
                    media_files.is_public = true OR
                    media_files.uploaded_by = auth.uid() OR
                    EXISTS (
                        SELECT 1 FROM enrollments 
                        WHERE enrollments.student_id = auth.uid() 
                        AND enrollments.course_id = media_files.course_id
                    )
                )
            )
        )
    );

CREATE POLICY "Users can update their own media files" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'media-files' AND 
        auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can delete their own media files" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'media-files' AND 
        auth.uid()::text = (storage.foldername(name))[1]
    );