import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Filter, BookOpen, Star, TrendingUp, Zap } from 'lucide-react'
import { useCourses } from '@/hooks/useCourses'
import { useAuthContext } from '@/contexts/AuthContext'
import CourseCard from '@/components/courses/CourseCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import { motion } from 'framer-motion'

const Courses = () => {
  const { user } = useAuthContext()
  const { courses, myCourses, isLoading, enrollInCourse, unenrollFromCourse, isEnrolling } = useCourses()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'sanskrit', label: 'Sanskrit' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'yoga', label: 'Yoga & Meditation' },
    { value: 'scriptures', label: 'Sacred Scriptures' },
    { value: 'ayurveda', label: 'Ayurveda' },
    { value: 'arts', label: 'Traditional Arts' },
    { value: 'mathematics', label: 'Vedic Mathematics' }
  ]

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  const enrolledCourseIds = new Set(myCourses.map(enrollment => enrollment.course_id))

  const isEnrolledInCourse = (courseId: string) => enrolledCourseIds.has(courseId)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-matrix opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-neural opacity-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Futuristic Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-cyber bg-gradient-cyber bg-clip-text text-transparent">
              Neural Learning Hub
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover quantum-enhanced courses where ancient wisdom meets cutting-edge technology. 
            Your consciousness evolution starts here.
          </p>
          
          {user && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="glassmorphism border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <BookOpen className="w-5 h-5 animate-neural-pulse" />
                    <span className="font-semibold">Active Neural Links</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-orbitron font-bold text-cyber">{myCourses.length}</div>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-secondary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center gap-2 text-secondary">
                    <TrendingUp className="w-5 h-5 animate-neural-pulse" />
                    <span className="font-semibold">Consciousness Level</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-orbitron font-bold text-cyber-cyan">
                    {myCourses.length > 0 ? Math.round(myCourses.reduce((acc, course) => acc + course.progress, 0) / myCourses.length) : 0}%
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-accent/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Star className="w-5 h-5 animate-neural-pulse" />
                    <span className="font-semibold">Dharma Points</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-orbitron font-bold text-cyber-gold">
                    {myCourses.length * 100}
                  </div>
                </CardContent>
              </Card>

              <Card className="glassmorphism border-destructive/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center gap-2 text-destructive">
                    <Zap className="w-5 h-5 animate-neural-pulse" />
                    <span className="font-semibold">Neural Energy</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-orbitron font-bold text-cyber-pink">
                    {Math.min(100, myCourses.length * 15)}%
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>

        {/* Advanced Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="glassmorphism border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search neural pathways..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 glassmorphism border-primary/30"
                  />
                </div>
                
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 rounded-md border border-primary/30 glassmorphism"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 rounded-md border border-primary/30 glassmorphism"
                  >
                    {levels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  
                  <Button variant="outline" className="neon-border">
                    <Filter className="w-4 h-4 mr-2" />
                    Neural Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
        <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 glassmorphism">
              <TabsTrigger value="all">Neural Pathways</TabsTrigger>
              <TabsTrigger value="enrolled">Active Links</TabsTrigger>
              <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">All Courses ({filteredCourses.length})</h2>
                <Badge variant="outline">{filteredCourses.length} results</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard
                      course={course}
                      isEnrolled={isEnrolledInCourse(course.id)}
                      onEnroll={enrollInCourse}
                      onUnenroll={unenrollFromCourse}
                      isLoading={isEnrolling}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enrolled" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Courses ({myCourses.length})</h2>
              </div>
              
              {myCourses.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start your learning journey by enrolling in courses
                    </p>
                    <Button onClick={() => setSearchTerm('')}>
                      Browse Courses
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myCourses.map((enrollment, index) => (
                    <motion.div
                      key={enrollment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CourseCard
                        course={{ ...enrollment.course, enrollments_count: 0 }}
                        isEnrolled={true}
                        onUnenroll={unenrollFromCourse}
                        isLoading={isEnrolling}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="recommended" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recommended for You</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.slice(0, 6).map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard
                      course={course}
                      isEnrolled={isEnrolledInCourse(course.id)}
                      onEnroll={enrollInCourse}
                      onUnenroll={unenrollFromCourse}
                      isLoading={isEnrolling}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default Courses