
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Book, BookOpen } from 'lucide-react';

const LearningModules = () => {
  const modules = [
    {
      id: 'vedic-math',
      title: 'Vedic Mathematics',
      description: 'Ancient calculation techniques made simple',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      category: 'STEM + Vedic',
      color: 'from-blue-500 to-blue-600',
      icon: '🔢'
    },
    {
      id: 'bhagavad-gita',
      title: 'Bhagavad Gita Stories',
      description: 'Life lessons through Krishna\'s teachings',
      progress: 60,
      totalLessons: 18,
      completedLessons: 11,
      category: 'Values + Philosophy',
      color: 'from-purple-500 to-purple-600',
      icon: '📖'
    },
    {
      id: 'ayurveda-science',
      title: 'Ayurveda & Modern Science',
      description: 'Traditional healing meets modern medicine',
      progress: 40,
      totalLessons: 15,
      completedLessons: 6,
      category: 'Science + Tradition',
      color: 'from-green-500 to-green-600',
      icon: '🌿'
    },
    {
      id: 'sanskrit-basics',
      title: 'Sanskrit Fundamentals',
      description: 'The mother of all languages',
      progress: 85,
      totalLessons: 20,
      completedLessons: 17,
      category: 'Language + Culture',
      color: 'from-orange-500 to-orange-600',
      icon: '📜'
    },
    {
      id: 'yoga-science',
      title: 'Yoga & Body Science',
      description: 'Understanding the body through yoga',
      progress: 30,
      totalLessons: 10,
      completedLessons: 3,
      category: 'Physical + Spiritual',
      color: 'from-teal-500 to-teal-600',
      icon: '🧘‍♂️'
    },
    {
      id: 'environmental-dharma',
      title: 'Environmental Dharma',
      description: 'Our duty towards Mother Earth',
      progress: 55,
      totalLessons: 8,
      completedLessons: 4,
      category: 'Ecology + Ethics',
      color: 'from-emerald-500 to-emerald-600',
      icon: '🌍'
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Hybrid Learning Modules</CardTitle>
          <CardDescription>
            Blend ancient wisdom with modern knowledge for holistic development
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="text-3xl">{module.icon}</div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                  {module.category}
                </span>
              </div>
              <CardTitle className="text-lg">{module.title}</CardTitle>
              <CardDescription className="text-sm">{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{module.completedLessons}/{module.totalLessons} lessons</span>
                </div>
                <Progress value={module.progress} className="h-2" />
                <p className="text-xs text-gray-600">{module.progress}% complete</p>
              </div>
              
              <Button 
                className={`w-full bg-gradient-to-r ${module.color} hover:opacity-90 text-white`}
                size="sm"
              >
                {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access to Recent Lessons */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen size={20} />
            Continue Where You Left Off
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg hover:bg-orange-50 cursor-pointer transition-colors">
              <h4 className="font-semibold text-gray-800">Vedic Math: Division Techniques</h4>
              <p className="text-sm text-gray-600 mt-1">Learn the Nikhilam method for fast division</p>
              <p className="text-xs text-orange-600 mt-2">Lesson 10 • 15 min remaining</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
              <h4 className="font-semibold text-gray-800">Gita: Chapter 2 Summary</h4>
              <p className="text-sm text-gray-600 mt-1">The eternal nature of the soul</p>
              <p className="text-xs text-purple-600 mt-2">Lesson 12 • 12 min remaining</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningModules;
