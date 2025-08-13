import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Clock, Users, Star, BookOpen } from 'lucide-react'
import { Course } from '@/lib/supabase'
import { motion } from 'framer-motion'

interface CourseCardProps {
  course: Course & {
    teacher: { name: string; avatar_url?: string }
    enrollments_count: number
  }
  isEnrolled?: boolean
  onEnroll?: (courseId: string) => void
  onUnenroll?: (courseId: string) => void
  isLoading?: boolean
}

const CourseCard = ({ 
  course, 
  isEnrolled = false, 
  onEnroll, 
  onUnenroll, 
  isLoading = false 
}: CourseCardProps) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200'
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <Badge className={levelColors[course.level]}>
              {course.level}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.8</span>
            </div>
          </div>
          
          <CardTitle className="text-lg leading-tight">
            {course.title}
          </CardTitle>
          
          <CardDescription className="line-clamp-2">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={course.teacher.avatar_url} />
                <AvatarFallback className="text-xs">
                  {course.teacher.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="truncate">{course.teacher.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration_weeks} weeks</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.enrollments_count}</span>
              </div>
            </div>
            
            <div className="text-right">
              {course.price === 0 ? (
                <span className="font-semibold text-green-600">Free</span>
              ) : (
                <span className="font-semibold">₹{course.price}</span>
              )}
            </div>
          </div>

          <div className="pt-2">
            {isEnrolled ? (
              <div className="space-y-2">
                <Button className="w-full" variant="default">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
                <Button 
                  className="w-full" 
                  variant="outline" 
                  onClick={() => onUnenroll?.(course.id)}
                  disabled={isLoading}
                >
                  Unenroll
                </Button>
              </div>
            ) : (
              <Button 
                className="w-full" 
                onClick={() => onEnroll?.(course.id)}
                disabled={isLoading}
              >
                {isLoading ? 'Enrolling...' : course.price === 0 ? 'Enroll Free' : `Enroll - ₹${course.price}`}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CourseCard