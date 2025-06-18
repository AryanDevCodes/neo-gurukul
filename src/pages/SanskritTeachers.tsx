
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Clock, Users, BookOpen } from 'lucide-react';

const SanskritTeachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Rama Shastri',
      title: 'Sanskrit Vidwan',
      specialization: 'Panini Grammar & Vedic Texts',
      experience: '25 years',
      rating: 4.9,
      students: 156,
      subjects: ['Advanced Sanskrit Grammar', 'Ashtadhyayi', 'Vedic Sanskrit'],
      availability: 'Mon, Wed, Fri',
      description: 'Expert in classical Sanskrit grammar with deep knowledge of Panini Sutras'
    },
    {
      id: 2,
      name: 'Acharya Vidya Prakash',
      title: 'Vedic Scholar',
      specialization: 'Rig Veda & Sama Veda',
      experience: '30 years',
      rating: 4.8,
      students: 203,
      subjects: ['Vedic Chanting', 'Rig Veda Mantras', 'Vedic Pronunciation'],
      availability: 'Tue, Thu, Sat',
      description: 'Renowned Vedic scholar specializing in proper pronunciation and chanting'
    },
    {
      id: 3,
      name: 'Pandit Surya Narayan',
      title: 'Sanskrit Acharya',
      specialization: 'Classical Literature',
      experience: '20 years',
      rating: 4.7,
      students: 128,
      subjects: ['Kavya Shastra', 'Raghuvamsha', 'Meghaduta'],
      availability: 'Daily',
      description: 'Expert in Sanskrit poetry and classical literature compositions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Sanskrit & Ancient Languages Teachers 📜
          </h1>
          <p className="text-gray-600 text-lg">
            Learn from masters of the sacred Sanskrit language and ancient texts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-orange-100 text-orange-600 text-lg font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{teacher.name}</CardTitle>
                    <CardDescription className="text-sm mb-2">{teacher.title}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-current" />
                        <span>{teacher.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{teacher.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{teacher.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Specialization:</h4>
                  <p className="text-sm text-gray-700">{teacher.specialization}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <BookOpen size={14} className="mr-2" />
                    Subjects:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-1">Availability:</h4>
                  <p className="text-sm text-gray-600">{teacher.availability}</p>
                </div>

                <p className="text-sm text-gray-700">{teacher.description}</p>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600">
                    Book Session
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanskritTeachers;
