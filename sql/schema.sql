-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(20) CHECK (role IN ('student', 'teacher', 'parent', 'admin')) NOT NULL,
  avatar_url TEXT,
  grade VARCHAR(50),
  specialization VARCHAR(100),
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR(100) NOT NULL,
  level VARCHAR(20) CHECK (level IN ('beginner', 'intermediate', 'advanced')) NOT NULL,
  image_url TEXT,
  duration_weeks INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  progress DECIMAL(5,2) DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  completed_at TIMESTAMP WITH TIME ZONE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, course_id)
);

-- Learning modules table
CREATE TABLE learning_modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  video_url TEXT,
  duration_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student progress table
CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  module_id UUID REFERENCES learning_modules(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE,
  score DECIMAL(5,2) CHECK (score >= 0 AND score <= 100),
  time_spent_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, course_id, module_id)
);

-- Assessments table
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  questions JSONB NOT NULL,
  passing_score DECIMAL(5,2) NOT NULL DEFAULT 70,
  time_limit_minutes INTEGER DEFAULT 60,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assessment attempts table
CREATE TABLE assessment_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
  score DECIMAL(5,2) NOT NULL,
  answers JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  time_taken_minutes INTEGER
);

-- Forum posts table
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  likes_count INTEGER DEFAULT 0,
  replies_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum replies table
CREATE TABLE forum_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  is_virtual BOOLEAN DEFAULT false,
  organizer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  category VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Event participants table
CREATE TABLE event_participants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  attended BOOLEAN DEFAULT false,
  UNIQUE(event_id, user_id)
);

-- Achievements table
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NOT NULL,
  criteria JSONB NOT NULL,
  points_reward INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User achievements table
CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Daily routine table
CREATE TABLE daily_routines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  task_name VARCHAR(255) NOT NULL,
  task_description TEXT,
  category VARCHAR(50) NOT NULL,
  points INTEGER DEFAULT 0,
  completed_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_courses_teacher_id ON courses(teacher_id);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_student_progress_student_id ON student_progress(student_id);
CREATE INDEX idx_forum_posts_author_id ON forum_posts(author_id);
CREATE INDEX idx_forum_posts_category ON forum_posts(category);
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_daily_routines_user_id ON daily_routines(user_id);
CREATE INDEX idx_daily_routines_completed_date ON daily_routines(completed_date);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_routines ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Public profiles are viewable" ON users FOR SELECT USING (true);

-- Courses policies
CREATE POLICY "Anyone can view active courses" ON courses FOR SELECT USING (is_active = true);
CREATE POLICY "Teachers can manage their own courses" ON courses FOR ALL USING (teacher_id = auth.uid());

-- Enrollments policies
CREATE POLICY "Students can view their enrollments" ON enrollments FOR SELECT USING (student_id = auth.uid());
CREATE POLICY "Students can enroll in courses" ON enrollments FOR INSERT WITH CHECK (student_id = auth.uid());
CREATE POLICY "Students can update their enrollment progress" ON enrollments FOR UPDATE USING (student_id = auth.uid());

-- Learning modules policies
CREATE POLICY "Anyone can view learning modules" ON learning_modules FOR SELECT USING (true);
CREATE POLICY "Teachers can manage modules for their courses" ON learning_modules FOR ALL USING (
  course_id IN (SELECT id FROM courses WHERE teacher_id = auth.uid())
);

-- Student progress policies
CREATE POLICY "Students can view their own progress" ON student_progress FOR SELECT USING (student_id = auth.uid());
CREATE POLICY "Students can update their own progress" ON student_progress FOR ALL USING (student_id = auth.uid());
CREATE POLICY "Teachers can view progress for their courses" ON student_progress FOR SELECT USING (
  course_id IN (SELECT id FROM courses WHERE teacher_id = auth.uid())
);

-- Forum policies
CREATE POLICY "Anyone can view forum posts" ON forum_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create posts" ON forum_posts FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update their posts" ON forum_posts FOR UPDATE USING (author_id = auth.uid());

-- Daily routines policies
CREATE POLICY "Users can manage their own routines" ON daily_routines FOR ALL USING (user_id = auth.uid());

-- Insert sample data
INSERT INTO users (id, email, name, role, specialization) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'teacher@dharma.edu', 'Acharya Vishnu', 'teacher', 'Sanskrit & Philosophy'),
  ('550e8400-e29b-41d4-a716-446655440001', 'student@dharma.edu', 'Arjun Sharma', 'student', NULL);

INSERT INTO courses (id, title, description, teacher_id, category, level, duration_weeks, price) VALUES
  ('550e8400-e29b-41d4-a716-446655440100', 'Sanskrit Fundamentals', 'Learn the basics of Sanskrit language and script', '550e8400-e29b-41d4-a716-446655440000', 'sanskrit', 'beginner', 8, 0),
  ('550e8400-e29b-41d4-a716-446655440101', 'Bhagavad Gita Study', 'Deep dive into the teachings of the Bhagavad Gita', '550e8400-e29b-41d4-a716-446655440000', 'philosophy', 'intermediate', 12, 199),
  ('550e8400-e29b-41d4-a716-446655440102', 'Meditation Mastery', 'Advanced meditation techniques from ancient traditions', '550e8400-e29b-41d4-a716-446655440000', 'yoga', 'advanced', 6, 149);

INSERT INTO learning_modules (course_id, title, content, order_index, duration_minutes) VALUES
  ('550e8400-e29b-41d4-a716-446655440100', 'Introduction to Sanskrit', 'Overview of Sanskrit history and importance', 1, 45),
  ('550e8400-e29b-41d4-a716-446655440100', 'Devanagari Script', 'Learning to read and write Sanskrit script', 2, 60),
  ('550e8400-e29b-41d4-a716-446655440101', 'Understanding Dharma', 'The concept of dharma in Hindu philosophy', 1, 50);

INSERT INTO achievements (title, description, icon, criteria, points_reward) VALUES
  ('First Steps', 'Complete your first lesson', 'graduation-cap', '{"lessons_completed": 1}', 10),
  ('Sanskrit Scholar', 'Learn 500 Sanskrit words', 'book-open', '{"sanskrit_words": 500}', 100),
  ('Meditation Master', 'Complete 30 days of meditation', 'brain', '{"meditation_days": 30}', 150);