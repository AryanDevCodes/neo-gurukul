
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Users, Calendar as CalendarIcon, MessageSquare, Star, MapPin, Clock, Camera, Music, Award, Search, Bell, Filter, Share2, Heart, Bookmark, Play, Download, Globe, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, addDays } from 'date-fns';

const CommunityHub = () => {
  const [selectedEvent, setSelectedEvent] = useState('guru-purnima');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Vikram Samvat conversion utility
  const getVikramSamvatDate = (gregorianDate: Date) => {
    const vikramYear = gregorianDate.getFullYear() + 57;
    const months = [
      'Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha',
      'Shravana', 'Bhadrapada', 'Ashwina', 'Kartika',
      'Margashirsha', 'Pausha', 'Magha', 'Phalguna'
    ];
    const month = months[gregorianDate.getMonth()];
    return `${gregorianDate.getDate()} ${month}, ${vikramYear} VS`;
  };

  const upcomingEvents = [
    {
      id: 'guru-purnima',
      title: 'Guru Purnima Celebration',
      date: '2024-07-21',
      time: '6:00 AM - 8:00 PM',
      location: 'Main Gurukul Campus',
      category: 'Religious Festival',
      participants: 250,
      registered: 180,
      description: 'Annual celebration honoring the guru-disciple tradition',
      activities: ['Guru Vandana', 'Cultural Programs', 'Feast', 'Award Ceremony'],
      vikramDate: '5 Shravana, 2081 VS',
      organizer: 'Gurukul Cultural Committee',
      price: 'Free',
      tags: ['traditional', 'spiritual', 'community'],
      media: ['live-stream', 'photography', 'recordings']
    },
    {
      id: 'sanskrit-competition',
      title: 'All-India Sanskrit Poetry Competition',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Cultural Auditorium',
      category: 'Academic Competition',
      participants: 120,
      registered: 95,
      description: 'Inter-school Sanskrit poetry recitation and composition contest',
      activities: ['Poetry Recitation', 'Original Composition', 'Drama Performance', 'Awards'],
      vikramDate: '3 Phalguna, 2080 VS',
      organizer: 'Sanskrit Department',
      price: '₹500 Registration',
      tags: ['academic', 'competition', 'sanskrit'],
      media: ['live-stream', 'photography']
    },
    {
      id: 'yoga-marathon',
      title: 'International Yoga Day Marathon',
      date: '2024-06-21',
      time: '5:00 AM - 12:00 PM',
      location: 'Outdoor Yoga Garden',
      category: 'Health & Wellness',
      participants: 500,
      registered: 420,
      description: '7-hour continuous yoga practice session',
      activities: ['Surya Namaskara', 'Pranayama', 'Meditation', 'Community Lunch'],
      vikramDate: '7 Jyeshtha, 2081 VS',
      organizer: 'Yoga & Wellness Center',
      price: 'Free',
      tags: ['health', 'yoga', 'wellness'],
      media: ['live-stream', 'recordings']
    },
    {
      id: 'kalaripayattu-workshop',
      title: 'Traditional Kalaripayattu Workshop',
      date: '2024-03-10',
      time: '7:00 AM - 11:00 AM',
      location: 'Veerata Vidya Center',
      category: 'Martial Arts',
      participants: 60,
      registered: 45,
      description: 'Learn ancient Kerala martial art form',
      activities: ['Basic Movements', 'Weapon Training', 'Combat Techniques', 'Philosophy'],
      vikramDate: '26 Phalguna, 2080 VS',
      organizer: 'Veerata Vidya Department',
      price: '₹1200',
      tags: ['martial-arts', 'traditional', 'self-defense'],
      media: ['photography', 'recordings']
    }
  ];

  const communityForums = [
    {
      title: 'Sanskrit Learning Circle',
      members: 245,
      posts: 1256,
      description: 'Discussion forum for Sanskrit students and enthusiasts',
      latestPost: 'Advanced Grammar Questions - Week 15',
      moderator: 'Dr. Rama Shastri',
      category: 'Academic',
      isVerified: true,
      activeMembers: 89,
      weeklyPosts: 45
    },
    {
      title: 'Philosophy & Dharma',
      members: 189,
      posts: 876,
      description: 'Deep discussions on Vedantic philosophy and dharmic living',
      latestPost: 'Understanding Karma in Modern Context',
      moderator: 'Acharya Vidyananda',
      category: 'Spiritual',
      isVerified: true,
      activeMembers: 67,
      weeklyPosts: 32
    },
    {
      title: 'Parent Connect',
      members: 156,
      posts: 432,
      description: 'Platform for parents to connect and share experiences',
      latestPost: 'Home Practice Routines - Tips & Tricks',
      moderator: 'Parent Council',
      category: 'Community',
      isVerified: false,
      activeMembers: 78,
      weeklyPosts: 28
    },
    {
      title: 'Cultural Arts & Crafts',
      members: 167,
      posts: 234,
      description: 'Share traditional arts, crafts, and cultural practices',
      latestPost: 'Rangoli Patterns for Diwali',
      moderator: 'Master Artisan Ravi',
      category: 'Creative',
      isVerified: true,
      activeMembers: 45,
      weeklyPosts: 15
    },
    {
      title: 'Veerata Vidya Practitioners',
      members: 89,
      posts: 156,
      description: 'Martial arts techniques and philosophical discussions',
      latestPost: 'Ancient Battle Formations - Modern Applications',
      moderator: 'Guru Yodha Singh',
      category: 'Martial Arts',
      isVerified: true,
      activeMembers: 34,
      weeklyPosts: 12
    },
    {
      title: 'Global Gurukul Network',
      members: 334,
      posts: 567,
      description: 'Connect with gurukuls and practitioners worldwide',
      latestPost: 'Virtual Darshan - Technology in Traditional Learning',
      moderator: 'Digital Outreach Team',
      category: 'Global',
      isVerified: true,
      activeMembers: 123,
      weeklyPosts: 34
    }
  ];

  const culturalPrograms = [
    {
      program: 'Classical Music Academy',
      instructor: 'Pandit Ravi Shankar Jr.',
      students: 45,
      sessions: 'Tue, Thu, Sat',
      level: 'Beginner to Advanced',
      duration: '6 months',
      certification: 'Available',
      onlineMode: true
    },
    {
      program: 'Bharatanatyam Dance',
      instructor: 'Smt. Meera Devi',
      students: 32,
      sessions: 'Mon, Wed, Fri',
      level: 'All Levels',
      duration: '1 year',
      certification: 'Available',
      onlineMode: true
    },
    {
      program: 'Traditional Crafts Workshop',
      instructor: 'Master Craftsman Suresh',
      students: 28,
      sessions: 'Weekends',
      level: 'Beginner',
      duration: '3 months',
      certification: 'Available',
      onlineMode: false
    },
    {
      program: 'Vedic Astronomy Club',
      instructor: 'Dr. Surya Prakash',
      students: 22,
      sessions: 'Saturday Evenings',
      level: 'Intermediate',
      duration: '4 months',
      certification: 'Available',
      onlineMode: true
    },
    {
      program: 'Digital Sanskrit Scripting',
      instructor: 'Prof. Tech Vidya',
      students: 67,
      sessions: 'Online - Flexible',
      level: 'All Levels',
      duration: '2 months',
      certification: 'Available',
      onlineMode: true
    },
    {
      program: 'Ancient Ayurveda Healing',
      instructor: 'Vaidya Chakrapani',
      students: 38,
      sessions: 'Daily Morning',
      level: 'Beginner to Advanced',
      duration: '8 months',
      certification: 'Available',
      onlineMode: false
    }
  ];

  const achievements = [
    {
      student: 'Priya Sharma',
      achievement: 'National Sanskrit Competition - 1st Place',
      date: '2024-01-10',
      category: 'Academic Excellence',
      vikramDate: '27 Pausha, 2080 VS',
      points: 500
    },
    {
      student: 'Arjun Kumar',
      achievement: 'Yoga Championship - Regional Winner',
      date: '2024-01-05',
      category: 'Physical Wellness',
      vikramDate: '22 Pausha, 2080 VS',
      points: 450
    },
    {
      student: 'Meditation Group',
      achievement: 'Community Service - 100 Hours Completed',
      date: '2023-12-20',
      category: 'Service',
      vikramDate: '6 Pausha, 2080 VS',
      points: 300
    },
    {
      student: 'Rahul Patel',
      achievement: 'Kalaripayattu Black Belt Certification',
      date: '2024-01-15',
      category: 'Martial Arts',
      vikramDate: '2 Magha, 2080 VS',
      points: 600
    }
  ];

  const newsUpdates = [
    {
      title: 'New Digital Library Launched',
      date: '2024-01-20',
      category: 'Technology',
      excerpt: 'Access thousands of ancient texts digitally with Sanskrit OCR support',
      vikramDate: '7 Magha, 2080 VS'
    },
    {
      title: 'International Gurukul Exchange Program',
      date: '2024-01-18',
      category: 'Global',
      excerpt: 'Students can now participate in exchange programs with partner institutions worldwide',
      vikramDate: '5 Magha, 2080 VS'
    },
    {
      title: 'Virtual Reality Meditation Chambers',
      date: '2024-01-15',
      category: 'Innovation',
      excerpt: 'Experience immersive meditation in recreated ancient ashram environments',
      vikramDate: '2 Magha, 2080 VS'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Religious Festival': 'bg-orange-100 text-orange-800',
      'Academic Competition': 'bg-blue-100 text-blue-800',
      'Health & Wellness': 'bg-green-100 text-green-800',
      'Cultural Program': 'bg-purple-100 text-purple-800',
      'Martial Arts': 'bg-red-100 text-red-800',
      'Technology': 'bg-cyan-100 text-cyan-800',
      'Global': 'bg-indigo-100 text-indigo-800',
      'Innovation': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const categories = ['all', 'Religious Festival', 'Academic Competition', 'Health & Wellness', 'Martial Arts', 'Cultural Program'];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            🏛️ Sangha Kendra & Cultural Events
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Fostering community bonds through cultural celebrations, forums, and collaborative learning
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarIcon size={16} />
              <span>Today: {format(new Date(), 'dd MMM yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>Vikram Samvat: {getVikramSamvatDate(new Date())}</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search events, forums, or programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter size={16} />
                      Category
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category === 'all' ? 'All Categories' : category}
                        </Button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                <Button variant="outline" className="gap-2">
                  <Bell size={16} />
                  Notifications
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="cultural">Programs</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {filteredEvents.map((event, index) => (
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
                        <div className="flex-1">
                          <CardTitle className="text-xl flex items-center gap-2">
                            {event.title}
                            {event.media.includes('live-stream') && <Play size={16} className="text-red-500" />}
                          </CardTitle>
                          <CardDescription className="mt-2">{event.description}</CardDescription>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                            <span>{event.vikramDate}</span>
                            <span>•</span>
                            <span>by {event.organizer}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Heart size={14} />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Bookmark size={14} />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Share2 size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon size={16} className="text-gray-500" />
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
                          <span>{event.registered}/{event.participants}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{event.price}</span>
                        <div className="flex items-center gap-2">
                          {event.media.map((media, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {media}
                            </Badge>
                          ))}
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
                        {event.media.includes('live-stream') && (
                          <Button variant="outline" className="gap-2">
                            <Play size={16} />
                            Watch Live
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Vikram Samvat Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border pointer-events-auto"
                    />
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm font-medium">Current Vikram Samvat</p>
                      <p className="text-lg font-bold text-orange-600">
                        {getVikramSamvatDate(new Date())}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center p-3 bg-orange-50 rounded">
                      <div className="text-2xl font-bold text-orange-600">15</div>
                      <div className="text-sm text-gray-600">Events This Month</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-green-600">1,250</div>
                      <div className="text-sm text-gray-600">Total Participants</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-gray-600">Cultural Programs</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="text-2xl font-bold text-purple-600">890</div>
                      <div className="text-sm text-gray-600">Forum Members</div>
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          {forum.title}
                          {forum.isVerified && <Star size={16} className="text-yellow-500" />}
                        </CardTitle>
                        <CardDescription>{forum.description}</CardDescription>
                        <Badge variant="outline" className="mt-2">
                          {forum.category}
                        </Badge>
                      </div>
                      <MessageSquare size={20} className="text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Members:</span>
                        <p className="font-medium">{forum.members}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Posts:</span>
                        <p className="font-medium">{forum.posts}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Active:</span>
                        <p className="font-medium">{forum.activeMembers}</p>
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

                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline">
                        Join Discussion
                      </Button>
                      <Button size="sm" variant="ghost" className="px-2">
                        <Bell size={16} />
                      </Button>
                    </div>
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
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {program.program}
                          {program.onlineMode && <Globe size={16} className="text-blue-500" />}
                        </CardTitle>
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
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <p className="font-medium">{program.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Mode:</span>
                        <p className="font-medium flex items-center gap-1">
                          {program.onlineMode ? (
                            <>
                              <Smartphone size={12} />
                              Online/Hybrid
                            </>
                          ) : (
                            'In-Person'
                          )}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-600 text-sm">Schedule:</span>
                      <p className="font-medium text-sm">{program.sessions}</p>
                    </div>

                    {program.certification && (
                      <Badge variant="outline" className="text-xs">
                        <Award size={12} className="mr-1" />
                        Certification Available
                      </Badge>
                    )}

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
                <CardDescription>Celebrating our community's accomplishments with traditional dating system</CardDescription>
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
                        <p className="text-xs text-gray-500">Vikram Samvat: {achievement.vikramDate}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{achievement.category}</Badge>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                        <p className="text-sm font-medium text-orange-600">{achievement.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Interactive Calendar</CardTitle>
                  <CardDescription>View events in both Gregorian and Vikram Samvat systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border pointer-events-auto"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Calendar Features</CardTitle>
                  <CardDescription>Traditional and modern calendar integration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded">
                      <CalendarIcon size={20} className="text-orange-600" />
                      <div>
                        <p className="font-medium">Vikram Samvat Integration</p>
                        <p className="text-sm text-gray-600">Traditional Hindu calendar system</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
                      <Star size={20} className="text-green-600" />
                      <div>
                        <p className="font-medium">Festival Tracking</p>
                        <p className="text-sm text-gray-600">Automatic Hindu festival dates</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                      <Globe size={20} className="text-blue-600" />
                      <div>
                        <p className="font-medium">Multi-timezone Support</p>
                        <p className="text-sm text-gray-600">Global gurukul coordination</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Download size={16} className="mr-2" />
                    Export Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsUpdates.map((news, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{news.vikramDate}</span>
                    </div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <CardDescription>{news.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityHub;
