
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { User, BookOpen, Award, MessageSquare, Calendar, TrendingUp } from 'lucide-react';

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState('arjun');

  const children = [
    {
      id: 'arjun',
      name: 'Arjun Sharma',
      avatar: '👦',
      grade: 'Class 7',
      age: 12,
      courses: ['Sanskrit Grammar', 'Bhagavad Gita Study', 'Yoga Practice'],
      overallProgress: 78,
      streak: 15,
      nextClass: 'Sanskrit Grammar - Tomorrow 9:00 AM'
    },
    {
      id: 'priya',
      name: 'Priya Sharma',
      avatar: '👧',
      grade: 'Class 5',
      age: 10,
      courses: ['Basic Sanskrit', 'Moral Stories', 'Art & Culture'],
      overallProgress: 85,
      streak: 12,
      nextClass: 'Moral Stories - Today 2:00 PM'
    }
  ];

  const currentChild = children.find(child => child.id === selectedChild) || children[0];

  const academicProgress = [
    { subject: 'Sanskrit Reading', progress: 85, grade: 'A', trend: 'up' },
    { subject: 'Philosophy Understanding', progress: 72, grade: 'B+', trend: 'up' },
    { subject: 'Meditation Practice', progress: 90, grade: 'A+', trend: 'stable' },
    { subject: 'Cultural Knowledge', progress: 68, grade: 'B', trend: 'up' },
    { subject: 'Values Application', progress: 88, grade: 'A', trend: 'up' }
  ];

  const recentActivities = [
    {
      date: '2024-01-18',
      activity: 'Completed Chapter 2 of Bhagavad Gita',
      type: 'achievement',
      points: '+15 points'
    },
    {
      date: '2024-01-17',
      activity: 'Participated in Sanskrit conversation class',
      type: 'participation',
      points: '+10 points'
    },
    {
      date: '2024-01-16',
      activity: 'Earned "Dedicated Learner" badge',
      type: 'badge',
      points: '+25 points'
    },
    {
      date: '2024-01-15',
      activity: 'Submitted moral values reflection essay',
      type: 'assignment',
      points: '+20 points'
    }
  ];

  const teacherMessages = [
    {
      teacher: 'Pandit Ramesh Kumar',
      subject: 'Sanskrit Grammar',
      message: 'Arjun is showing excellent progress in Devanagari script. Keep encouraging daily practice.',
      date: '2024-01-17',
      priority: 'normal'
    },
    {
      teacher: 'Dr. Meera Patel',
      subject: 'Philosophy Studies',
      message: 'Please ensure Arjun completes the reflection questions from today\'s Gita discussion.',
      date: '2024-01-16',
      priority: 'action'
    }
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Conference', date: '2024-01-25', time: '3:00 PM' },
    { event: 'Sanskrit Poetry Recitation', date: '2024-02-02', time: '10:00 AM' },
    { event: 'Cultural Festival Participation', date: '2024-02-15', time: '9:00 AM' }
  ];

  const valuesDevelopment = [
    { value: 'Honesty (Satya)', level: 90, description: 'Shows truthfulness in daily interactions' },
    { value: 'Compassion (Karuna)', level: 85, description: 'Demonstrates kindness to others' },
    { value: 'Discipline (Niyama)', level: 75, description: 'Following daily spiritual practices' },
    { value: 'Respect (Samman)', level: 88, description: 'Shows respect to teachers and elders' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Parent Portal 👨‍👩‍👧‍👦
          </h1>
          <p className="text-gray-600 text-lg">
            Monitor your child's spiritual and academic growth journey
          </p>
        </div>

        {/* Child Selection */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              {children.map((child) => (
                <Button
                  key={child.id}
                  variant={selectedChild === child.id ? "default" : "outline"}
                  onClick={() => setSelectedChild(child.id)}
                  className={`${selectedChild === child.id ? 'bg-orange-500 hover:bg-orange-600' : ''} flex items-center gap-2`}
                >
                  <span className="text-lg">{child.avatar}</span>
                  {child.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Child Overview */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{currentChild.avatar}</div>
                  <div>
                    <CardTitle className="text-2xl">{currentChild.name}</CardTitle>
                    <CardDescription>{currentChild.grade} • {currentChild.age} years old</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{currentChild.overallProgress}%</div>
                    <div className="text-sm text-gray-600">Overall Progress</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{currentChild.streak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{currentChild.courses.length}</div>
                    <div className="text-sm text-gray-600">Active Courses</div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-sm mb-1">Next Class:</h4>
                  <p className="text-sm text-gray-700">{currentChild.nextClass}</p>
                </div>
              </CardContent>
            </Card>

            {/* Academic Progress */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Subject-wise learning progress and grades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {academicProgress.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.subject}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{subject.grade}</Badge>
                        <TrendingUp size={16} className={subject.trend === 'up' ? 'text-green-500' : 'text-gray-400'} />
                      </div>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                    <div className="text-sm text-gray-600">{subject.progress}% completed</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Values Development */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Values Development</CardTitle>
                <CardDescription>Character building and moral growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {valuesDevelopment.map((value, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{value.value}</span>
                      <span className="text-sm text-gray-600">{value.level}%</span>
                    </div>
                    <Progress value={value.level} className="h-2" />
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest achievements and learning milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{activity.activity}</p>
                      <p className="text-xs text-gray-600">{activity.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">{activity.type}</Badge>
                      <p className="text-xs text-green-600 font-medium">{activity.points}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Teacher Messages */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare size={20} />
                  Teacher Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teacherMessages.map((message, index) => (
                  <div key={index} className={`p-3 rounded-lg ${message.priority === 'action' ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-sm">{message.teacher}</p>
                      {message.priority === 'action' && (
                        <Badge variant="destructive" className="text-xs">Action Required</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{message.subject}</p>
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.date}</p>
                  </div>
                ))}
                <Button className="w-full" variant="outline" size="sm">
                  <MessageSquare size={14} className="mr-1" />
                  Message Teachers
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar size={20} />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-sm">{event.event}</p>
                    <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Schedule Parent Meeting
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  View Assignment Calendar
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Download Progress Report
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Update Contact Info
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
