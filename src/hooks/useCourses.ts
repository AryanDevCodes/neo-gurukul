import { useState, useEffect } from 'react';
import { Course, Enrollment } from '@/lib/api';
import { useAuthContext } from '@/contexts/AuthContext';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [myCourses, setMyCourses] = useState<Enrollment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  // Fetch courses from Java backend
  useEffect(() => {
    // Implementation to fetch from Java backend
    // Mock data for now
    setCourses([
      {
        id: '1',
        title: 'Introduction to Sanskrit',
        description: 'Learn the basics of Sanskrit language',
        teacher: { name: 'Dr. Sharma', avatar_url: '' },
        category: 'sanskrit',
        price: 99,
        duration_weeks: 8,
        level: 'beginner',
        image_url: '',
        enrollments_count: 150
      }
    ]);
  }, []);

  const enrollInCourse = async (courseId: string) => {
    // Implementation for Java backend enrollment
    console.log('Enrolling in course:', courseId);
  };

  const unenrollFromCourse = async (courseId: string) => {
    // Implementation for Java backend unenrollment
    console.log('Unenrolling from course:', courseId);
  };

  return {
    courses,
    myCourses,
    isLoading,
    error,
    enrollInCourse,
    unenrollFromCourse,
    isEnrolling: false,
    isUnenrolling: false
  };
}