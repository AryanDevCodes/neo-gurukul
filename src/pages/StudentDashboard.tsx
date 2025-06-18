
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import DailyRoutine from '../components/student/DailyRoutine';
import LearningModules from '../components/student/LearningModules';
import ValuesTracker from '../components/student/ValuesTracker';
import QuickStats from '../components/student/QuickStats';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('routine');

  const studentData = {
    name: "Arjun Sharma",
    class: "Grade 8",
    streak: 15,
    totalValues: 85,
    weeklyGoal: 100
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Namaste, {studentData.name}! 🙏
          </h1>
          <p className="text-gray-600 mt-2">Continue your journey of knowledge and dharma</p>
        </div>

        {/* Quick Stats */}
        <QuickStats data={studentData} />

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 bg-white/70 p-1 rounded-lg backdrop-blur-sm">
            <Button
              variant={activeTab === 'routine' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('routine')}
              className={activeTab === 'routine' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              Daily Routine
            </Button>
            <Button
              variant={activeTab === 'learning' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('learning')}
              className={activeTab === 'learning' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              Learning Modules
            </Button>
            <Button
              variant={activeTab === 'values' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('values')}
              className={activeTab === 'values' ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              Values Tracker
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'routine' && <DailyRoutine />}
          {activeTab === 'learning' && <LearningModules />}
          {activeTab === 'values' && <ValuesTracker />}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
