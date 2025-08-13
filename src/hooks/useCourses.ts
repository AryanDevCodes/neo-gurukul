import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase, type Course, type Enrollment } from '@/lib/supabase'
import { useAuthContext } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'

export function useCourses() {
  const { user } = useAuthContext()
  const queryClient = useQueryClient()

  const {
    data: courses = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          teacher:users!courses_teacher_id_fkey(name, avatar_url),
          enrollments_count:enrollments(count)
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as (Course & {
        teacher: { name: string; avatar_url?: string }
        enrollments_count: number
      })[]
    }
  })

  const {
    data: myCourses = [],
  } = useQuery({
    queryKey: ['my-courses', user?.id],
    queryFn: async () => {
      if (!user) return []
      
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(
            *,
            teacher:users!courses_teacher_id_fkey(name, avatar_url)
          )
        `)
        .eq('student_id', user.id)
        .order('enrolled_at', { ascending: false })

      if (error) throw error
      return data as Enrollment[]
    },
    enabled: !!user && user.role === 'student'
  })

  const enrollMutation = useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error('Must be logged in to enroll')
      
      const { data, error } = await supabase
        .from('enrollments')
        .insert([
          {
            student_id: user.id,
            course_id: courseId,
            enrolled_at: new Date().toISOString(),
            progress: 0
          }
        ])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-courses'] })
      toast.success('Successfully enrolled in course!')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to enroll in course')
    }
  })

  const unenrollMutation = useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error('Must be logged in')
      
      const { error } = await supabase
        .from('enrollments')
        .delete()
        .eq('student_id', user.id)
        .eq('course_id', courseId)

      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-courses'] })
      toast.success('Successfully unenrolled from course')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to unenroll from course')
    }
  })

  return {
    courses,
    myCourses,
    isLoading,
    error,
    enrollInCourse: enrollMutation.mutate,
    unenrollFromCourse: unenrollMutation.mutate,
    isEnrolling: enrollMutation.isPending,
    isUnenrolling: unenrollMutation.isPending
  }
}