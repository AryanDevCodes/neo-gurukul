
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Users, Clock, BookOpen, Play } from 'lucide-react';

const CourseManagement = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'bhagavad-gita-101',
      title: 'Bhagavad Gita - Fundamentals',
      description: 'Introduction to the eternal dialogue between Krishna and Arjuna',
      level: 'Beginner',
      duration: '12 weeks',
      students: 22,
      lessons: 18,
      completed: 6,
      status: 'Active'
    },
    {
      id: 'sanskrit-grammar',
      title: 'Sanskrit Grammar Mastery',
      description: 'Comprehensive study of Sanskrit grammar and composition',
      level: 'Intermediate',
      duration: '16 weeks',
      students: 15,
      lessons: 24,
      completed: 10,
      status: 'Active'
    },
    {
      id: 'yoga-philosophy',
      title: 'Yoga Philosophy & Practice',
      description: 'Exploring Patanjali\'s Yoga Sutras and practical applications',
      level: 'Advanced',
      duration: '20 weeks',
      students: 18,
      lessons: 30,
      completed: 15,
      status: 'Active'
    },
    {
      id: 'vedic-math',
      title: 'Vedic Mathematics',
      description: 'Ancient mathematical techniques for modern problem-solving',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 12,
      lessons: 15,
      completed: 3,
      status: 'Starting Soon'
    }
  ];

  const lessonPlan = [
    { week: 1, topic: 'Introduction to Dharma', completed: true },
    { week: 2, topic: 'The Battlefield of Life', completed: true },
    { week: 3, topic: 'Karma Yoga - Path of Action', completed: true },
    { week: 4, topic: 'Jnana Yoga - Path of Knowledge', completed: false },
    { week: 5, topic: 'Bhakti Yoga - Path of Devotion', completed: false },
    { week: 6, topic: 'Raja Yoga - Path of Meditation', completed: false }
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Starting Soon': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Course Management</CardTitle>
              <CardDescription>Create and manage your teaching courses</CardDescription>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus size={16} className="mr-2" />
              Create New Course
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course List */}
        <div className="lg:col-span-2 space-y-4">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedCourse === course.id 
                  ? 'ring-2 ring-orange-500 bg-white shadow-lg' 
                  : 'bg-white/70 hover:bg-white/90'
              }`}
              onClick={() => setSelectedCourse(course.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="mt-1">{course.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge className={getStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-500" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-500" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${(course.completed / course.lessons) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {course.completed}/{course.lessons} lessons completed
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <Play size={14} className="mr-1" />
                      Teach
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Details Sidebar */}
        <div className="space-y-4">
          {selectedCourse && (
            <>
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Lesson Plan</CardTitle>
                  <CardDescription>Weekly curriculum overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {lessonPlan.map((lesson, index) => (
                    <div key={index} className={`p-3 rounded-lg ${lesson.completed ? 'bg-green-50' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Week {lesson.week}</p>
                          <p className="text-sm text-gray-600">{lesson.topic}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full ${lesson.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full" variant="outline" size="sm">
                    View Student Progress
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    Create Assignment
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    Schedule Live Session
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    Upload Resources
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseManagement;
