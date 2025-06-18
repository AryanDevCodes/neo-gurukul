
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock } from 'lucide-react';

const DailyRoutine = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const routineItems = [
    {
      id: 'morning-prayer',
      time: '6:00 AM',
      title: 'Morning Prayer & Meditation',
      description: 'Start with Gayatri Mantra and 10 minutes of meditation',
      points: 10,
      category: 'spiritual'
    },
    {
      id: 'yoga',
      time: '6:30 AM',
      title: 'Yoga & Pranayama',
      description: 'Sun salutations and breathing exercises',
      points: 15,
      category: 'physical'
    },
    {
      id: 'math',
      time: '8:00 AM',
      title: 'Mathematics',
      description: 'Vedic Mathematics and Modern Algebra',
      points: 20,
      category: 'academic'
    },
    {
      id: 'sanskrit',
      time: '9:30 AM',
      title: 'Sanskrit Studies',
      description: 'Learn 5 new words and practice slokas',
      points: 15,
      category: 'cultural'
    },
    {
      id: 'science',
      time: '11:00 AM',
      title: 'Science & Nature',
      description: 'Environmental science with Ayurvedic principles',
      points: 20,
      category: 'academic'
    },
    {
      id: 'values',
      time: '2:00 PM',
      title: 'Values Practice',
      description: 'Practice one virtue: Today is Compassion (Karuna)',
      points: 10,
      category: 'values'
    },
    {
      id: 'arts',
      time: '3:30 PM',
      title: 'Arts & Culture',
      description: 'Classical music or traditional dance',
      points: 15,
      category: 'cultural'
    },
    {
      id: 'reflection',
      time: '8:00 PM',
      title: 'Evening Reflection',
      description: 'Journal writing and gratitude practice',
      points: 10,
      category: 'spiritual'
    }
  ];

  const toggleTask = (taskId: string) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(id => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      spiritual: 'border-l-purple-500 bg-purple-50',
      physical: 'border-l-green-500 bg-green-50',
      academic: 'border-l-blue-500 bg-blue-50',
      cultural: 'border-l-orange-500 bg-orange-50',
      values: 'border-l-red-500 bg-red-50'
    };
    return colors[category as keyof typeof colors] || 'border-l-gray-500 bg-gray-50';
  };

  const totalPoints = routineItems.reduce((sum, item) => 
    completedTasks.includes(item.id) ? sum + item.points : sum, 0
  );

  return (
    <div className="space-y-4">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Today's Routine
            <div className="text-sm font-normal bg-gradient-to-r from-orange-500 to-green-500 text-white px-3 py-1 rounded-full">
              {totalPoints} points earned
            </div>
          </CardTitle>
          <CardDescription>
            Complete your daily activities to earn dharma points and grow holistically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {routineItems.map((item) => {
            const isCompleted = completedTasks.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-4 rounded-lg border-l-4 ${getCategoryColor(item.category)} transition-all duration-300 ${
                  isCompleted ? 'opacity-75 bg-green-100' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm font-medium text-gray-600">{item.time}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h4 className={`font-semibold ${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p className="text-xs text-orange-600 font-medium mt-2">+{item.points} points</p>
                  </div>
                  <Button
                    variant={isCompleted ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => toggleTask(item.id)}
                    className={isCompleted ? 'bg-green-100 text-green-700 border-green-300' : ''}
                  >
                    {isCompleted ? <Check size={16} /> : 'Mark Done'}
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyRoutine;
