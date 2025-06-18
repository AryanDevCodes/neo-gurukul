
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, MessageSquare, Star, MapPin, Clock, Camera, Music } from 'lucide-react';

const CommunityHub = () => {
  const [selectedEvent, setSelectedEvent] = useState('guru-purnima');

  const upcomingEvents = [
    {
      id: 'guru-purnima',
      title: 'Guru Purnima Celebration',
      date: '2024-07-21',
      time: '6:00 AM - 8:00 PM',
      location: 'Main Gurukul Campus',
      category: 'Religious Festival',
      participants: 250,
      description: 'Annual celebration honoring the guru-disciple tradition',
      activities: ['Guru Vandana', 'Cultural Programs', 'Feast', 'Award Ceremony']
    },
    {
      id: 'sanskrit-competition',
      title: 'All-India Sanskrit Poetry Competition',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Cultural Auditorium',
      category: 'Academic Competition',
      participants: 120,
      description: 'Inter-school Sanskrit poetry recitation and composition contest',
      activities: ['Poetry Recitation', 'Original Composition', 'Drama Performance', 'Awards']
    },
    {
      id: 'yoga-marathon',
      title: 'International Yoga Day Marathon',
      date: '2024-06-21',
      time: '5:00 AM - 12:00 PM',
      location: 'Outdoor Yoga Garden',
      category: 'Health & Wellness',
      participants: 500,
      description: '7-hour continuous yoga practice session',
      activities: ['Surya Namaskara', 'Pranayama', 'Meditation', 'Community Lunch']
    }
  ];

  const communityForums = [
    {
      title: 'Sanskrit Learning Circle',
      members: 245,
      posts: 1256,
      description: 'Discussion forum for Sanskrit students and enthusiasts',
      latestPost: 'Advanced Grammar Questions - Week 15',
      moderator: 'Dr. Rama Shastri'
    },
    {
      title: 'Philosophy & Dharma',
      members: 189,
      posts: 876,
      description: 'Deep discussions on Vedantic philosophy and dharmic living',
      latestPost: 'Understanding Karma in Modern Context',
      moderator: 'Acharya Vidyananda'
    },
    {
      title: 'Parent Connect',
      members: 156,
      posts: 432,
      description: 'Platform for parents to connect and share experiences',
      latestPost: 'Home Practice Routines - Tips & Tricks',
      moderator: 'Parent Council'
    },
    {
      title: 'Cultural Arts & Crafts',
      members: 167,
      posts: 234,
      description: 'Share traditional arts, crafts, and cultural practices',
      latestPost: 'Rangoli Patterns for Diwali',
      moderator: 'Master Artisan Ravi'
    }
  ];

  const culturalPrograms = [
    {
      program: 'Classical Music Academy',
      instructor: 'Pandit Ravi Shankar Jr.',
      students: 45,
      sessions: 'Tue, Thu, Sat',
      level: 'Beginner to Advanced'
    },
    {
      program: 'Bharatanatyam Dance',
      instructor: 'Smt. Meera Devi',
      students: 32,
      sessions: 'Mon, Wed, Fri',
      level: 'All Levels'
    },
    {
      program: 'Traditional Crafts Workshop',
      instructor: 'Master Craftsman Suresh',
      students: 28,
      sessions: 'Weekends',
      level: 'Beginner'
    },
    {
      program: 'Vedic Astronomy Club',
      instructor: 'Dr. Surya Prakash',
      students: 22,
      sessions: 'Saturday Evenings',
      level: 'Intermediate'
    }
  ];

  const achievements = [
    {
      student: 'Priya Sharma',
      achievement: 'National Sanskrit Competition - 1st Place',
      date: '2024-01-10',
      category: 'Academic Excellence'
    },
    {
      student: 'Arjun Kumar',
      achievement: 'Yoga Championship - Regional Winner',
      date: '2024-01-05',
      category: 'Physical Wellness'
    },
    {
      student: 'Meditation Group',
      achievement: 'Community Service - 100 Hours Completed',
      date: '2023-12-20',
      category: 'Service'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Religious Festival': 'bg-orange-100 text-orange-800',
      'Academic Competition': 'bg-blue-100 text-blue-800',
      'Health & Wellness': 'bg-green-100 text-green-800',
      'Cultural Program': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            🏛️ Community Hub & Cultural Events
          </h1>
          <p className="text-gray-600 text-lg">
            Fostering community bonds through cultural celebrations, forums, and collaborative learning
          </p>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Programs</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedEvent === event.id 
                        ? 'ring-2 ring-orange-500 bg-white shadow-lg' 
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                    onClick={() => setSelectedEvent(event.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="mt-2">{event.description}</CardDescription>
                        </div>
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-gray-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-500" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.activities.map((activity, actIndex) => (
                            <Badge key={actIndex} variant="outline" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Register
                        </Button>
                        <Button variant="outline">
                          Share Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                      <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600">Interactive calendar view</p>
                      <Button className="mt-3" variant="outline" size="sm">
                        View Full Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center p-3 bg-orange-50 rounded">
                      <div className="text-2xl font-bold text-orange-600">12</div>
                      <div className="text-sm text-gray-600">Events This Month</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-green-600">450</div>
                      <div className="text-sm text-gray-600">Total Participants</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-sm text-gray-600">Cultural Programs</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forums" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityForums.map((forum, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{forum.title}</CardTitle>
                        <CardDescription>{forum.description}</CardDescription>
                      </div>
                      <MessageSquare size={20} className="text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Members:</span>
                        <p className="font-medium">{forum.members}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Posts:</span>
                        <p className="font-medium">{forum.posts}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 text-sm">Latest Post:</span>
                      <p className="font-medium text-sm">{forum.latestPost}</p>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 text-sm">Moderator:</span>
                      <p className="font-medium text-sm">{forum.moderator}</p>
                    </div>

                    <Button className="w-full" variant="outline">
                      Join Discussion
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cultural" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {culturalPrograms.map((program, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Music size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{program.program}</CardTitle>
                        <CardDescription>Instructor: {program.instructor}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Students:</span>
                        <p className="font-medium">{program.students}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Level:</span>
                        <p className="font-medium">{program.level}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 text-sm">Schedule:</span>
                      <p className="font-medium text-sm">{program.sessions}</p>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Achievements & Recognition</CardTitle>
                <CardDescription>Celebrating our community's accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <Award size={20} className="text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.achievement}</h4>
                        <p className="text-sm text-gray-600">{achievement.student}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{achievement.category}</Badge>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Photo Gallery</CardTitle>
                <CardDescription>Memories from our community events and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-12 bg-gray-50 rounded-lg">
                  <Camera size={64} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Photo Gallery</h3>
                  <p className="text-gray-600 mb-4">
                    Browse through our collection of memorable moments and events
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    View Photo Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityHub;
