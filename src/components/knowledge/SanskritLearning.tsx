
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Volume2, BookOpen, Award } from 'lucide-react';

const SanskritLearning = () => {
  const [selectedLesson, setSelectedLesson] = useState('devanagari');

  const learningModules = [
    {
      id: 'devanagari',
      title: 'Devanagari Script',
      sanskrit: 'देवनागरी',
      level: 'Beginner',
      progress: 75,
      lessons: 12,
      completed: 9,
      description: 'Master the sacred script of Sanskrit',
      skills: ['Writing', 'Reading', 'Pronunciation']
    },
    {
      id: 'basic-grammar',
      title: 'Basic Grammar',
      sanskrit: 'व्याकरण',
      level: 'Beginner',
      progress: 45,
      lessons: 20,
      completed: 9,
      description: 'Fundamental grammar rules and structures',
      skills: ['Nouns', 'Verbs', 'Cases']
    },
    {
      id: 'mantras',
      title: 'Sacred Mantras',
      sanskrit: 'मन्त्र',
      level: 'Intermediate',
      progress: 60,
      lessons: 15,
      completed: 9,
      description: 'Learn and understand powerful mantras',
      skills: ['Chanting', 'Meaning', 'Application']
    },
    {
      id: 'poetry',
      title: 'Sanskrit Poetry',
      sanskrit: 'संस्कृत काव्य',
      level: 'Advanced',
      progress: 25,
      lessons: 18,
      completed: 4,
      description: 'Explore the beauty of Sanskrit literature',
      skills: ['Meters', 'Composition', 'Analysis']
    }
  ];

  const dailyWords = [
    { word: 'नमस्ते', transliteration: 'Namaste', meaning: 'I bow to you', audio: true },
    { word: 'धन्यवाद', transliteration: 'Dhanyavaad', meaning: 'Thank you', audio: true },
    { word: 'शान्ति', transliteration: 'Shaanti', meaning: 'Peace', audio: true },
    { word: 'ज्ञान', transliteration: 'Gyaan', meaning: 'Knowledge', audio: true },
    { word: 'गुरु', transliteration: 'Guru', meaning: 'Teacher', audio: true }
  ];

  const currentModule = learningModules.find(m => m.id === selectedLesson) || learningModules[0];

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Interactive Sanskrit Learning</CardTitle>
          <CardDescription>
            Learn the divine language step by step with modern teaching methods
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Modules */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold">Learning Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningModules.map((module) => (
              <Card 
                key={module.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedLesson === module.id 
                    ? 'ring-2 ring-orange-500 bg-white shadow-lg' 
                    : 'bg-white/70 hover:bg-white/90'
                }`}
                onClick={() => setSelectedLesson(module.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <Badge variant="outline">{module.level}</Badge>
                  </div>
                  <p className="text-orange-600 font-medium">{module.sanskrit}</p>
                  <CardDescription className="text-sm">{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{module.completed}/{module.lessons} lessons</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {module.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Module View */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={20} />
                {currentModule.title} - Current Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Today's Focus: Lesson {currentModule.completed + 1}</h4>
                {currentModule.id === 'devanagari' && (
                  <div className="space-y-3">
                    <p>Learn the consonants: क, ख, ग, घ, ङ</p>
                    <div className="grid grid-cols-5 gap-4 text-center">
                      {['क', 'ख', 'ग', 'घ', 'ङ'].map((char, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-2xl text-orange-600 font-bold">{char}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {['ka', 'kha', 'ga', 'gha', 'nga'][index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 mt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Play size={16} className="mr-1" />
                    Start Lesson
                  </Button>
                  <Button variant="outline">
                    <Volume2 size={16} className="mr-1" />
                    Practice Audio
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Daily Sanskrit Words */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Daily Sanskrit Words</CardTitle>
              <CardDescription>Expand your vocabulary daily</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {dailyWords.map((word, index) => (
                <div key={index} className="bg-orange-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-orange-700">{word.word}</div>
                      <div className="text-sm text-gray-600">{word.transliteration}</div>
                      <div className="text-xs text-gray-500">{word.meaning}</div>
                    </div>
                    {word.audio && (
                      <Button size="sm" variant="ghost">
                        <Volume2 size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award size={20} />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                <div className="text-2xl">🏆</div>
                <div>
                  <div className="font-semibold text-sm">Script Master</div>
                  <div className="text-xs text-gray-600">Completed Devanagari basics</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                <div className="text-2xl">📿</div>
                <div>
                  <div className="font-semibold text-sm">Mantra Initiate</div>
                  <div className="text-xs text-gray-600">Learned 5 basic mantras</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                <div className="text-2xl">⭐</div>
                <div>
                  <div className="font-semibold text-sm">Daily Learner</div>
                  <div className="text-xs text-gray-600">7-day learning streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Practice */}
          <Card className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline" size="sm">
                Flash Cards
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                Pronunciation Quiz
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                Writing Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SanskritLearning;
