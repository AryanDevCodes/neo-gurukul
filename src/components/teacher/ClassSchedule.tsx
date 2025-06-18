
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Video, Plus, Edit } from 'lucide-react';

const ClassSchedule = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const schedule = [
    {
      day: 'Monday',
      date: '2024-01-22',
      classes: [
        {
          time: '9:00 AM - 10:30 AM',
          subject: 'Sanskrit Grammar',
          level: 'Beginner',
          students: 15,
          type: 'In-Person',
          room: 'Gurukul Hall A'
        },
        {
          time: '11:00 AM - 12:30 PM',
          subject: 'Bhagavad Gita Study',
          level: 'Intermediate',
          students: 22,
          type: 'Hybrid',
          room: 'Main Hall + Online'
        },
        {
          time: '2:00 PM - 3:30 PM',
          subject: 'Meditation Practice',
          level: 'All Levels',
          students: 30,
          type: 'In-Person',
          room: 'Meditation Garden'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: '2024-01-23',
      classes: [
        {
          time: '9:00 AM - 10:30 AM',
          subject: 'Yoga Philosophy',
          level: 'Advanced',
          students: 18,
          type: 'Online',
          room: 'Virtual Classroom'
        },
        {
          time: '11:00 AM - 12:30 PM',
          subject: 'Vedic Mathematics',
          level: 'Intermediate',
          students: 12,
          type: 'In-Person',
          room: 'Study Room B'
        }
      ]
    },
    {
      day: 'Wednesday',
      date: '2024-01-24',
      classes: [
        {
          time: '9:00 AM - 10:30 AM',
          subject: 'Sanskrit Grammar',
          level: 'Beginner',
          students: 15,
          type: 'In-Person',
          room: 'Gurukul Hall A'
        },
        {
          time: '2:00 PM - 3:30 PM',
          subject: 'Ancient Text Study',
          level: 'Advanced',
          students: 8,
          type: 'Seminar',
          room: 'Library Discussion Room'
        }
      ]
    },
    {
      day: 'Thursday',
      date: '2024-01-25',
      classes: [
        {
          time: '11:00 AM - 12:30 PM',
          subject: 'Bhagavad Gita Study',
          level: 'Intermediate',
          students: 22,
          type: 'Hybrid',
          room: 'Main Hall + Online'
        },
        {
          time: '2:00 PM - 3:30 PM',
          subject: 'Cultural Context Workshop',
          level: 'All Levels',
          students: 25,
          type: 'Workshop',
          room: 'Cultural Center'
        }
      ]
    },
    {
      day: 'Friday',
      date: '2024-01-26',
      classes: [
        {
          time: '9:00 AM - 10:30 AM',
          subject: 'Yoga Philosophy',
          level: 'Advanced',
          students: 18,
          type: 'Online',
          room: 'Virtual Classroom'
        },
        {
          time: '11:00 AM - 12:30 PM',
          subject: 'Sanskrit Conversation',
          level: 'Intermediate',
          students: 10,
          type: 'Discussion Circle',
          room: 'Round Table Room'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Parent-Teacher Conference',
      date: '2024-01-28',
      time: '10:00 AM - 4:00 PM',
      type: 'Meeting'
    },
    {
      title: 'Sanskrit Poetry Competition',
      date: '2024-02-02',
      time: '2:00 PM - 5:00 PM',
      type: 'Event'
    },
    {
      title: 'Guru Purnima Celebration',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      type: 'Festival'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'In-Person': return 'bg-green-100 text-green-800';
      case 'Online': return 'bg-blue-100 text-blue-800';
      case 'Hybrid': return 'bg-purple-100 text-purple-800';
      case 'Workshop': return 'bg-orange-100 text-orange-800';
      case 'Seminar': return 'bg-yellow-100 text-yellow-800';
      case 'Discussion Circle': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'All Levels': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Class Schedule Management</CardTitle>
              <CardDescription>Organize and manage your teaching schedule</CardDescription>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus size={16} className="mr-2" />
              Schedule New Class
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>This Week's Classes</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous Week</Button>
                  <Button variant="outline" size="sm">Next Week</Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {schedule.map((day, dayIndex) => (
            <Card key={dayIndex} className="bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{day.day}</CardTitle>
                    <CardDescription>{day.date}</CardDescription>
                  </div>
                  <Badge variant="outline">{day.classes.length} classes</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {day.classes.map((class_, classIndex) => (
                  <div key={classIndex} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{class_.subject}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock size={14} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{class_.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getTypeColor(class_.type)}>
                          {class_.type}
                        </Badge>
                        <Badge className={getLevelColor(class_.level)}>
                          {class_.level}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-gray-500" />
                        <span>{class_.students} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-gray-500" />
                        <span>{class_.room}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        {class_.type === 'Online' || class_.type === 'Hybrid' ? (
                          <>
                            <Video size={14} className="mr-1" />
                            Join Class
                          </>
                        ) : (
                          'Start Class'
                        )}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Today's Summary */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Today's Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600">Classes Today</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">67</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">6h</div>
                <div className="text-sm text-gray-600">Teaching Hours</div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                  <p className="text-xs text-gray-600">{event.time}</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {event.type}
                  </Badge>
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
                Create Makeup Class
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                Send Class Reminder
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                View Attendance Reports
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                Export Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
