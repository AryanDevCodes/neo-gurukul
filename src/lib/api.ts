// Java Backend API Configuration
const API_BASE_URL = 'http://localhost:8080/api';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  gradeLevel?: string;
  specialization?: string;
  bio?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacher: { name: string; avatar_url?: string };
  category: string;
  price: number;
  duration_weeks: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  image_url?: string;
  enrollments_count: number;
}

export interface Enrollment {
  id: string;
  course_id: string;
  progress: number;
  course: Course;
}

// API functions will be implemented to connect to Java backend
export const api = {
  auth: {
    login: async (email: string, password: string) => { /* Java backend call */ },
    register: async (userData: any) => { /* Java backend call */ },
    logout: async () => { /* Java backend call */ }
  },
  courses: {
    getAll: async () => { /* Java backend call */ },
    getById: async (id: number) => { /* Java backend call */ },
    enroll: async (courseId: number) => { /* Java backend call */ }
  }
};