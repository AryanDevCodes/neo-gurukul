
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, MapPin } from 'lucide-react';

const TeacherSpecializations = () => {
  const specializations = [
    {
      id: 'sanskrit',
      title: 'Sanskrit & Ancient Languages',
      description: 'Masters of classical Sanskrit, Vedic texts, and ancient Indian languages',
      teachers: 12,
      subjects: ['Sanskrit Grammar', 'Vedic Texts', 'Panini Sutras', 'Chhandas (Prosody)'],
      route: '/teachers/sanskrit'
    },
    {
      id: 'philosophy',
      title: 'Indian Philosophy & Darshan',
      description: 'Experts in various schools of Indian philosophical thought',
      teachers: 8,
      subjects: ['Advaita Vedanta', 'Sankhya', 'Yoga Philosophy', 'Nyaya-Vaisheshika'],
      route: '/teachers/philosophy'
    },
    {
      id: 'scriptures',
      title: 'Sacred Scriptures & Texts',
      description: 'Scholars specializing in interpretation of holy texts',
      teachers: 15,
      subjects: ['Bhagavad Gita', 'Upanishads', 'Ramayana', 'Mahabharata'],
      route: '/teachers/scriptures'
    },
    {
      id: 'yoga',
      title: 'Yoga & Meditation',
      description: 'Certified yoga instructors and meditation masters',
      teachers: 10,
      subjects: ['Hatha Yoga', 'Pranayama', 'Meditation', 'Yoga Philosophy'],
      route: '/teachers/yoga'
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda & Wellness',
      description: 'Traditional Ayurvedic doctors and wellness experts',
      teachers: 6,
      subjects: ['Ayurvedic Medicine', 'Panchakosha', 'Herbs & Nutrition', 'Lifestyle Sciences'],
      route: '/teachers/ayurveda'
    },
    {
      id: 'arts',
      title: 'Traditional Arts & Culture',
      description: 'Masters of classical Indian arts and cultural practices',
      teachers: 9,
      subjects: ['Classical Music', 'Classical Dance', 'Vedic Astronomy', 'Traditional Crafts'],
      route: '/teachers/arts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Teacher Specializations 👨‍🏫
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our expert Acharyas specialized in different fields of ancient wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec) => (
            <Card key={spec.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{spec.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {spec.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    <Users size={12} className="mr-1" />
                    {spec.teachers}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <BookOpen size={14} className="mr-2" />
                    Core Subjects:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.subjects.map((subject, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                  <Link to={spec.route}>
                    View Teachers
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSpecializations;
