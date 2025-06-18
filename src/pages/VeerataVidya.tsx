
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Sword, Users, Clock, Star, Award, Calendar, Target } from 'lucide-react';

const VeerataVidya = () => {
  const [selectedLevel, setSelectedLevel] = useState('foundational');

  const martialArts = [
    {
      name: 'Kalaripayattu',
      origin: 'Kerala',
      description: 'Ancient martial art - mother of all martial arts',
      level: 'Foundational',
      sessions: 24,
      instructor: 'Guru Ravi Nair'
    },
    {
      name: 'Silambam',
      origin: 'Tamil Nadu',
      description: 'Traditional staff combat and weapon training',
      level: 'Intermediate',
      sessions: 18,
      instructor: 'Master Karthik'
    },
    {
      name: 'Gatka',
      origin: 'Punjab',
      description: 'Sikh martial art with weapons and tactics',
      level: 'Advanced',
      sessions: 20,
      instructor: 'Sardar Jasbir Singh'
    },
    {
      name: 'Malkhamb',
      origin: 'Maharashtra',
      description: 'Physical conditioning on wooden pole',
      level: 'Foundational',
      sessions: 16,
      instructor: 'Pandit Suresh Yadav'
    }
  ];

  const vyuhas = [
    {
      name: 'Chakra Vyuha',
      description: 'Circular formation for defense and strategy',
      difficulty: 'Advanced',
      students: 'Groups of 15-20'
    },
    {
      name: 'Garuda Vyuha',
      description: 'Eagle formation for swift attacks',
      difficulty: 'Intermediate',
      students: 'Groups of 12-15'
    },
    {
      name: 'Makara Vyuha',
      description: 'Crocodile formation for tactical advantage',
      difficulty: 'Advanced',
      students: 'Groups of 18-25'
    }
  ];

  const courses = [
    {
      level: 'Foundational',
      ageGroup: '8-14 years',
      frequency: '3 sessions/week',
      duration: '6 months',
      modules: [
        'Discipline & Body Awareness',
        'Basic Self-Defence Techniques',
        'Yoga for Combat Readiness',
        'Mental Conditioning',
        'Indigenous Martial Arts Introduction'
      ]
    },
    {
      level: 'Intermediate',
      ageGroup: '14-18 years',
      frequency: '4 sessions/week',
      duration: '8 months',
      modules: [
        'Dhanurveda Theory & Practice',
        'Strategic Formations (Vyuhas)',
        'Historical Case Studies',
        'Team Coordination',
        'Weapon Handling (Traditional)'
      ]
    },
    {
      level: 'Advanced',
      ageGroup: '18+ years',
      frequency: '5 sessions/week',
      duration: '12 months',
      modules: [
        'Combat Archery & Advanced Weapons',
        'Modern Self-Defence Integration',
        'Leadership & Tactical Command',
        'Security & Emergency Response',
        'Disaster Readiness Training'
      ]
    }
  ];

  const instructors = [
    {
      name: 'Colonel Vikram Singh (Retd.)',
      specialization: 'Military Tactics & Strategy',
      experience: '25 years Indian Army',
      certifications: ['NCC Master Trainer', 'Combat Instructor']
    },
    {
      name: 'Guru Kalari Chandrasenan',
      specialization: 'Traditional Kalaripayattu',
      experience: '30 years practice',
      certifications: ['Kerala Kalaripayattu Academy', 'Traditional Gurukul Graduate']
    },
    {
      name: 'Master Silambam Murugan',
      specialization: 'Silambam & Tamil Martial Arts',
      experience: '22 years',
      certifications: ['World Silambam Association', 'Traditional Arts Council']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            🛡️ Veerata Vidya - Dharmic Self-Defence & War Tactics
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            "Dharmo rakṣati rakṣitaḥ" - Where Shaastra (spiritual knowledge) meets Shastra (martial skills)
          </p>
          <div className="mt-4 p-4 bg-orange-100 rounded-lg border border-orange-200">
            <p className="text-orange-800 font-medium">
              "Na shastra vinā shaastram, na shaastram vinā shastram"
            </p>
            <p className="text-orange-700 text-sm mt-1">
              Wisdom without strength is fragile. Strength without wisdom is dangerous.
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="vyuhas">Battle Formations</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {martialArts.map((art, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{art.name}</CardTitle>
                    <CardDescription>{art.origin}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-3">{art.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Level:</span>
                        <Badge variant="outline">{art.level}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Sessions:</span>
                        <span>{art.sessions}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Instructor:</span>
                        <p className="font-medium">{art.instructor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <div className="space-y-6">
              {courses.map((course, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{course.level} Level</CardTitle>
                        <CardDescription>Age Group: {course.ageGroup}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-orange-100 text-orange-800 mb-2">
                          {course.frequency}
                        </Badge>
                        <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target size={16} className="mr-2" />
                      Core Modules:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Shield size={14} className="text-orange-500" />
                          <span className="text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vyuhas" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Ancient Battle Formations (Vyuhas)</CardTitle>
                <CardDescription>Strategic formations from Mahabharata and military texts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {vyuhas.map((vyuha, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg border">
                      <h4 className="font-bold text-lg mb-2">{vyuha.name}</h4>
                      <p className="text-sm text-gray-700 mb-3">{vyuha.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Difficulty:</span>
                          <Badge variant={vyuha.difficulty === 'Advanced' ? 'destructive' : 'secondary'}>
                            {vyuha.difficulty}
                          </Badge>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Group Size:</span> {vyuha.students}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((instructor, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{instructor.name}</CardTitle>
                    <CardDescription>{instructor.specialization}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium">Experience:</span>
                      <p className="text-sm text-gray-700">{instructor.experience}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Certifications:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {instructor.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrollment" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Enrollment Information</CardTitle>
                <CardDescription>Join the Veerata Vidya program and embrace the warrior-scholar tradition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Requirements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Medical fitness certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Signed Martial Ethics Agreement
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Commitment to non-violence principles
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Parent/Guardian consent (for minors)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Safety Measures:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield size={14} className="text-green-500" />
                        Qualified first aid on premises
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield size={14} className="text-green-500" />
                        Insurance coverage for all activities
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield size={14} className="text-green-500" />
                        Graduated progression system
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield size={14} className="text-green-500" />
                        Strict code of conduct enforcement
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600" size="lg">
                    Apply for Veerata Vidya Program
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

export default VeerataVidya;
