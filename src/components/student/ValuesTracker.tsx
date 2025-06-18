
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ValuesTracker = () => {
  const [selectedValue, setSelectedValue] = useState('ahimsa');

  const values = [
    {
      id: 'ahimsa',
      name: 'Ahimsa (Non-violence)',
      sanskrit: 'अहिंसा',
      description: 'Practice compassion towards all living beings',
      level: 4,
      maxLevel: 5,
      points: 80,
      maxPoints: 100,
      dailyTasks: [
        'Helped a friend in need',
        'Chose vegetarian meal',
        'Spoke kindly to everyone',
        'Avoided harmful actions'
      ],
      weeklyGoal: 'Practice one act of kindness daily',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'satya',
      name: 'Satya (Truthfulness)',
      sanskrit: 'सत्य',
      description: 'Always speak and live in truth',
      level: 3,
      maxLevel: 5,
      points: 65,
      maxPoints: 100,
      dailyTasks: [
        'Told the truth even when difficult',
        'Kept promises made',
        'Avoided exaggeration',
        'Admitted mistakes honestly'
      ],
      weeklyGoal: 'Practice honesty in all interactions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'dharma',
      name: 'Dharma (Righteousness)',
      sanskrit: 'धर्म',
      description: 'Follow the path of righteousness',
      level: 3,
      maxLevel: 5,
      points: 70,
      maxPoints: 100,
      dailyTasks: [
        'Completed homework on time',
        'Helped parents with chores',
        'Followed school rules',
        'Made ethical choices'
      ],
      weeklyGoal: 'Do the right thing even when no one is watching',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'seva',
      name: 'Seva (Service)',
      sanskrit: 'सेवा',
      description: 'Selfless service to others',
      level: 2,
      maxLevel: 5,
      points: 45,
      maxPoints: 100,
      dailyTasks: [
        'Volunteered at local temple',
        'Helped elderly neighbor',
        'Cleaned common areas',
        'Tutored younger student'
      ],
      weeklyGoal: 'Perform one act of service without expecting return',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'gratitude',
      name: 'Kritajna (Gratitude)',
      sanskrit: 'कृतज्ञ',
      description: 'Express gratitude for all blessings',
      level: 4,
      maxLevel: 5,
      points: 85,
      maxPoints: 100,
      dailyTasks: [
        'Thanked parents and teachers',
        'Appreciated friends\' help',
        'Grateful for food and shelter',
        'Acknowledged nature\'s gifts'
      ],
      weeklyGoal: 'Write in gratitude journal daily',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const currentValue = values.find(v => v.id === selectedValue) || values[0];

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Values Development Tracker</CardTitle>
          <CardDescription>
            Develop character through daily practice of timeless values
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {values.map((value) => (
          <Card 
            key={value.id}
            className={`cursor-pointer transition-all duration-300 ${
              selectedValue === value.id 
                ? 'ring-2 ring-orange-500 bg-white shadow-lg' 
                : 'bg-white/70 hover:bg-white/90'
            }`}
            onClick={() => setSelectedValue(value.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{value.sanskrit}</div>
              <h3 className="font-semibold text-sm mb-2">{value.name}</h3>
              <div className="space-y-2">
                <Progress value={(value.level / value.maxLevel) * 100} className="h-2" />
                <p className="text-xs text-gray-600">Level {value.level}/{value.maxLevel}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed View of Selected Value */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{currentValue.name}</span>
              <span className="text-2xl">{currentValue.sanskrit}</span>
            </CardTitle>
            <CardDescription>{currentValue.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Level</span>
                <span>Level {currentValue.level}/{currentValue.maxLevel}</span>
              </div>
              <Progress value={(currentValue.level / currentValue.maxLevel) * 100} className="h-3" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress Points</span>
                <span>{currentValue.points}/{currentValue.maxPoints}</span>
              </div>
              <Progress value={(currentValue.points / currentValue.maxPoints) * 100} className="h-2" />
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Weekly Goal</h4>
              <p className="text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
                {currentValue.weeklyGoal}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Daily Practice Checklist</CardTitle>
            <CardDescription>Track your daily practice of {currentValue.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentValue.dailyTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                    defaultChecked={Math.random() > 0.5} // Random for demo
                  />
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <Button 
                className={`w-full bg-gradient-to-r ${currentValue.color} hover:opacity-90 text-white`}
              >
                Log Today's Practice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Badges */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm font-semibold">Truth Seeker</p>
              <p className="text-xs text-gray-600">7-day honesty streak</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-3xl mb-2">🌿</div>
              <p className="text-sm font-semibold">Compassion Champion</p>
              <p className="text-xs text-gray-600">Level 4 Ahimsa</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-3xl mb-2">🙏</div>
              <p className="text-sm font-semibold">Grateful Heart</p>
              <p className="text-xs text-gray-600">30-day gratitude journal</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-sm font-semibold">Dharma Warrior</p>
              <p className="text-xs text-gray-600">Righteous choices</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ValuesTracker;
