import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aynfhqgslyjdfuysedtp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5bmZocWdzbHlqZGZ1eXNlZHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MzEzOTksImV4cCI6MjA1NTAwNzM5OX0.fZQ-vhEEHa-3kLo1tC3CaYKxDaRzJ8T5xJfMFTxXa_4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'teacher' | 'parent' | 'admin'
  avatar_url?: string
  grade?: string
  specialization?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  teacher_id: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  image_url?: string
  duration_weeks: number
  price: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Enrollment {
  id: string
  student_id: string
  course_id: string
  progress: number
  completed_at?: string
  enrolled_at: string
  course: Course & {
    teacher: { name: string; avatar_url?: string }
  }
}

export interface LearningModule {
  id: string
  course_id: string
  title: string
  content: string
  order_index: number
  video_url?: string
  duration_minutes: number
  is_completed: boolean
  created_at: string
}

export interface Assessment {
  id: string
  course_id: string
  title: string
  questions: Array<{
    id: string
    question: string
    options: string[]
    correct_answer: number
    explanation?: string
  }>
  passing_score: number
  time_limit_minutes: number
  created_at: string
}

export interface StudentProgress {
  id: string
  student_id: string
  course_id: string
  module_id: string
  completed_at?: string
  score?: number
  time_spent_minutes: number
}

export interface ForumPost {
  id: string
  author_id: string
  title: string
  content: string
  category: string
  likes_count: number
  replies_count: number
  is_pinned: boolean
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description: string
  start_date: string
  end_date: string
  location?: string
  is_virtual: boolean
  organizer_id: string
  max_participants?: number
  current_participants: number
  category: string
  created_at: string
}