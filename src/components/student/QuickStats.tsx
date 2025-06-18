
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface QuickStatsProps {
  data: {
    name: string;
    class: string;
    streak: number;
    totalValues: number;
    weeklyGoal: number;
  };
}

const QuickStats = ({ data }: QuickStatsProps) => {
  const progressPercentage = (data.totalValues / data.weeklyGoal) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-orange-800">Learning Streak</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-900">{data.streak}</div>
          <p className="text-xs text-orange-700">consecutive days</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-green-800">Values Points</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-900">{data.totalValues}</div>
          <p className="text-xs text-green-700">this week</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-blue-800">Weekly Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-blue-700">{Math.round(progressPercentage)}% complete</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-purple-800">Current Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-900">{data.class}</div>
          <p className="text-xs text-purple-700">Vidyarthi</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickStats;
