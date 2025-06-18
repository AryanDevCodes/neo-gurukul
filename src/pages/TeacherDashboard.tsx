
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Calendar, MessageSquare, Award, TrendingUp, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseManagement from '../components/teacher/CourseManagement';
import StudentProgress from '../components/teacher/StudentProgress';
import TeachingResources from '../components/teacher/TeachingResources';
import ClassSchedule from '../components/teacher/ClassSchedule';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Active Students', value: '47', icon: Users, color: 'text-blue-600' },
    { title: 'Courses Teaching', value: '6', icon: BookOpen, color: 'text-green-600' },
    { title: 'Classes This Week', value: '18', icon: Calendar, color: 'text-orange-600' },
    { title: 'Pending Reviews', value: '12', icon: MessageSquare, color: 'text-purple-600' }
  ];

  const recentActivity = [
    { student: 'Arjun Sharma', action: 'Completed Bhagavad Gita Chapter 2', time: '2 hours ago' },
    { student: 'Priya Patel', action: 'Submitted Sanskrit assignment', time: '4 hours ago' },
    { student: 'Rahul Kumar', action: 'Asked question in Philosophy forum', time: '6 hours ago' },
    { student: 'Meera Singh', action: 'Achieved Mantra Mastery badge', time: '1 day ago' }
  ];

  const upcomingClasses = [
    { subject: 'Sanskrit Grammar', time: '9:00 AM', students: 15, level: 'Beginner' },
    { subject: 'Bhagavad Gita Study', time: '11:00 AM', students: 22, level: 'Intermediate' },
    { subject: 'Yoga Philosophy', time: '2:00 PM', students: 18, level: 'Advanced' },
    { subject: 'Vedic Mathematics', time: '4:00 PM', students: 12, level: 'Intermediate' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'courses', name: 'Course Management', icon: BookOpen },
    { id: 'students', name: 'Student Progress', icon: Users },
    { id: 'resources', name: 'Teaching Resources', icon: Award },
    { id: 'schedule', name: 'Class Schedule', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
                Acharya Portal 🎓
              </h1>
              <p className="text-gray-600 text-lg">
                Guide your students on their journey of wisdom and knowledge
              </p>
            </div>
            <Button asChild variant="outline" className="border-orange-300 hover:bg-orange-50">
              <Link to="/teacher-specializations">
                <UserCheck size={16} className="mr-2" />
                View All Teachers
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                  >
                    <IconComponent size={16} className="mr-2" />
                    {tab.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardDescription>{stat.title}</CardDescription>
                        <IconComponent size={20} className={stat.color} />
                      </div>
                      <CardTitle className="text-3xl">{stat.value}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Classes */}
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Today's Classes</CardTitle>
                  <CardDescription>Your teaching schedule for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{class_.subject}</h4>
                        <p className="text-sm text-gray-600">{class_.time} • {class_.students} students</p>
                      </div>
                      <Badge variant="outline">{class_.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Student Activity</CardTitle>
                  <CardDescription>Latest updates from your students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium text-sm">{activity.student}</p>
                      <p className="text-sm text-gray-700">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Other Tabs */}
        {activeTab === 'courses' && <CourseManagement />}
        {activeTab === 'students' && <StudentProgress />}
        {activeTab === 'resources' && <TeachingResources />}
        {activeTab === 'schedule' && <ClassSchedule />}
      </div>
    </div>
  );
};

export default TeacherDashboard;
