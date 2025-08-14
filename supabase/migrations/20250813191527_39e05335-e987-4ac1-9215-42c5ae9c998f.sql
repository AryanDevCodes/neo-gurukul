-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media-files', 'media-files', true);

-- Create courses table first (referenced by media_files)
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT DEFAULT 'general',
  instructor_id UUID REFERENCES auth.users(id),
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create media_files table
CREATE TABLE public.media_files (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('video', 'audio', 'image', 'book', 'document')),
  file_size BIGINT,
  duration INTEGER,
  thumbnail_url TEXT,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  category TEXT DEFAULT 'lecture',
  tags TEXT[] DEFAULT '{}',
  is_public BOOLEAN DEFAULT false,
  download_allowed BOOLEAN DEFAULT true,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user_media_progress table
CREATE TABLE public.user_media_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  media_file_id UUID REFERENCES public.media_files(id) ON DELETE CASCADE,
  progress_seconds INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, media_file_id)
);

-- Create playlists table
CREATE TABLE public.playlists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create playlist_items table
CREATE TABLE public.playlist_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  playlist_id UUID REFERENCES public.playlists(id) ON DELETE CASCADE,
  media_file_id UUID REFERENCES public.media_files(id) ON DELETE CASCADE,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(playlist_id, media_file_id)
);

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_media_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlist_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for courses
CREATE POLICY "Public courses are viewable by everyone" ON public.courses
  FOR SELECT USING (is_public = true);

CREATE POLICY "Users can view their own courses" ON public.courses
  FOR SELECT USING (auth.uid() = instructor_id);

CREATE POLICY "Users can create their own courses" ON public.courses
  FOR INSERT WITH CHECK (auth.uid() = instructor_id);

CREATE POLICY "Users can update their own courses" ON public.courses
  FOR UPDATE USING (auth.uid() = instructor_id);

-- RLS Policies for media_files
CREATE POLICY "Public media files are viewable by everyone" ON public.media_files
  FOR SELECT USING (is_public = true);

CREATE POLICY "Users can view their own media files" ON public.media_files
  FOR SELECT USING (auth.uid() = uploaded_by);

CREATE POLICY "Users can create their own media files" ON public.media_files
  FOR INSERT WITH CHECK (auth.uid() = uploaded_by);

CREATE POLICY "Users can update their own media files" ON public.media_files
  FOR UPDATE USING (auth.uid() = uploaded_by);

CREATE POLICY "Users can delete their own media files" ON public.media_files
  FOR DELETE USING (auth.uid() = uploaded_by);

-- RLS Policies for user_media_progress
CREATE POLICY "Users can view their own progress" ON public.user_media_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON public.user_media_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" ON public.user_media_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for playlists
CREATE POLICY "Public playlists are viewable by everyone" ON public.playlists
  FOR SELECT USING (is_public = true);

CREATE POLICY "Users can view their own playlists" ON public.playlists
  FOR SELECT USING (auth.uid() = created_by);

CREATE POLICY "Users can create their own playlists" ON public.playlists
  FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own playlists" ON public.playlists
  FOR UPDATE USING (auth.uid() = created_by);

-- RLS Policies for playlist_items
CREATE POLICY "Users can view playlist items of public playlists" ON public.playlist_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.playlists 
      WHERE playlists.id = playlist_items.playlist_id 
      AND (playlists.is_public = true OR playlists.created_by = auth.uid())
    )
  );

CREATE POLICY "Users can manage their own playlist items" ON public.playlist_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.playlists 
      WHERE playlists.id = playlist_items.playlist_id 
      AND playlists.created_by = auth.uid()
    )
  );

-- Storage policies for media-files bucket
CREATE POLICY "Public media files are accessible by everyone" ON storage.objects
  FOR SELECT USING (bucket_id = 'media-files');

CREATE POLICY "Users can upload to their own folder" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'media-files' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update their own files" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'media-files' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete their own files" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'media-files' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Create indexes for better performance
CREATE INDEX idx_media_files_course_id ON public.media_files(course_id);
CREATE INDEX idx_media_files_uploaded_by ON public.media_files(uploaded_by);
CREATE INDEX idx_media_files_category ON public.media_files(category);
CREATE INDEX idx_media_files_file_type ON public.media_files(file_type);
CREATE INDEX idx_user_media_progress_user_id ON public.user_media_progress(user_id);
CREATE INDEX idx_playlists_created_by ON public.playlists(created_by);
CREATE INDEX idx_playlist_items_playlist_id ON public.playlist_items(playlist_id);

-- Create function to automatically update updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_media_files_updated_at
  BEFORE UPDATE ON public.media_files
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_playlists_updated_at
  BEFORE UPDATE ON public.playlists
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();