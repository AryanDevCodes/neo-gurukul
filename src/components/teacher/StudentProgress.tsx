
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, TrendingUp, Award, MessageSquare, Calendar } from 'lucide-react';

const StudentProgress = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const students = [
    {
      id: 'arjun',
      name: 'Arjun Sharma',
      avatar: '👨‍🎓',
      course: 'Bhagavad Gita Fundamentals',
      progress: 75,
      lastActive: '2 hours ago',
      streak: 15,
      achievements: ['Sanskrit Scholar', 'Meditation Master'],
      performance: 'Excellent'
    },
    {
      id: 'priya',
      name: 'Priya Patel',
      avatar: '👩‍🎓',
      course: 'Sanskrit Grammar',
      progress: 60,
      lastActive: '1 day ago',
      streak: 8,
      achievements: ['Grammar Expert'],
      performance: 'Good'
    },
    {
      id: 'rahul',
      name: 'Rahul Kumar',
      avatar: '👨‍🎓',
      course: 'Yoga Philosophy',
      progress: 45,
      lastActive: '3 hours ago',
      streak: 22,
      achievements: ['Yoga Practitioner', 'Philosophy Seeker'],
      performance: 'Average'
    },
    {
      id: 'meera',
      name: 'Meera Singh',
      avatar: '👩‍🎓',
      course: 'Vedic Mathematics',
      progress: 90,
      lastActive: '30 minutes ago',
      streak: 30,
      achievements: ['Math Wizard', 'Vedic Calculator', 'Top Performer'],
      performance: 'Excellent'
    }
  ];

  const detailedProgress = {
    assignments: [
      { title: 'Chapter 2 Analysis', status: 'Completed', grade: 'A+', date: '2024-01-15' },
      { title: 'Sanskrit Translation', status: 'Submitted', grade: 'Pending', date: '2024-01-18' },
      { title: 'Philosophy Essay', status: 'In Progress', grade: 'N/A', date: '2024-01-20' }
    ],
    attendance: [
      { date: '2024-01-15', status: 'Present', topic: 'Dharma Concepts' },
      { date: '2024-01-16', status: 'Present', topic: 'Karma Yoga' },
      { date: '2024-01-17', status: 'Absent', topic: 'Bhakti Principles' },
      { date: '2024-01-18', status: 'Present', topic: 'Meditation Practice' }
    ],
    skills: [
      { skill: 'Sanskrit Reading', level: 85 },
      { skill: 'Philosophy Understanding', level: 70 },
      { skill: 'Meditation Practice', level: 92 },
      { skill: 'Discussion Participation', level: 78 }
    ]
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Average': return 'bg-yellow-100 text-yellow-800';
      case 'Needs Improvement': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Submitted': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Present': return 'bg-green-100 text-green-800';
      case 'Absent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Student Progress Tracking</CardTitle>
          <CardDescription>Monitor and guide your students' learning journey</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student List */}
        <div className="lg:col-span-2 space-y-4">
          {students.map((student) => (
            <Card 
              key={student.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedStudent === student.id 
                  ? 'ring-2 ring-orange-500 bg-white shadow-lg' 
                  : 'bg-white/70 hover:bg-white/90'
              }`}
              onClick={() => setSelectedStudent(student.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{student.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <CardDescription>{student.course}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getPerformanceColor(student.performance)}>
                    {student.performance}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Course Progress</span>
                    <span>{student.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full" 
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Last Active:</span>
                    <p className="font-medium">{student.lastActive}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Streak:</span>
                    <p className="font-medium">{student.streak} days</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Achievements:</span>
                    <p className="font-medium">{student.achievements.length}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {student.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <MessageSquare size={14} className="mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline">
                    <TrendingUp size={14} className="mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Progress Sidebar */}
        <div className="space-y-4">
          {selectedStudent && (
            <>
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Assignments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {detailedProgress.assignments.map((assignment, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{assignment.title}</p>
                        <Badge className={getStatusColor(assignment.status)} variant="secondary">
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Grade: {assignment.grade}</span>
                        <span>{assignment.date}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Skill Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {detailedProgress.skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.skill}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Attendance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {detailedProgress.attendance.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div>
                        <p className="text-sm font-medium">{record.topic}</p>
                        <p className="text-xs text-gray-600">{record.date}</p>
                      </div>
                      <Badge className={getStatusColor(record.status)} variant="secondary">
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
