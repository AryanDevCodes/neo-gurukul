
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Heart, Users, Brain, Target, Award, Calendar, TrendingUp } from 'lucide-react';

const AssessmentSystem = () => {
  const [selectedStudent, setSelectedStudent] = useState('arjun');

  const holisticDimensions = [
    {
      dimension: 'Buddhi (Intellectual)',
      icon: Brain,
      color: 'blue',
      aspects: ['Sanskrit Proficiency', 'Logical Reasoning', 'Memory & Retention', 'Analytical Thinking'],
      weight: 25
    },
    {
      dimension: 'Hridaya (Emotional/Spiritual)',
      icon: Heart,
      color: 'pink',
      aspects: ['Compassion & Empathy', 'Spiritual Practice', 'Emotional Regulation', 'Devotion & Reverence'],
      weight: 25
    },
    {
      dimension: 'Karma (Action/Practical)',
      icon: Target,
      color: 'green',
      aspects: ['Practical Application', 'Seva (Service)', 'Daily Routine Discipline', 'Skill Demonstration'],
      weight: 25
    },
    {
      dimension: 'Sangha (Social/Community)',
      icon: Users,
      color: 'orange',
      aspects: ['Peer Interaction', 'Leadership Qualities', 'Collaborative Learning', 'Cultural Participation'],
      weight: 25
    }
  ];

  const assessmentMethods = [
    {
      type: 'Traditional Gurukul Methods',
      methods: [
        'Guru-Shishya Dialogue Assessment',
        'Practical Demonstration (Pratyaksha)',
        'Oral Recitation & Memory Tests',
        'Character Observation (Sheela Pariksha)',
        'Peer Learning Evaluation'
      ]
    },
    {
      type: 'Modern Educational Assessment',
      methods: [
        'Portfolio-based Assessment',
        'Project-based Learning Evaluation',
        'Competency-based Progress Tracking',
        'Self-reflection Journals',
        'Digital Learning Analytics'
      ]
    },
    {
      type: 'Holistic Integration',
      methods: [
        'Multi-dimensional Report Cards',
        'Values-based Rubrics',
        'Cultural Competency Assessments',
        'Life Skills Evaluation',
        'Spiritual Growth Tracking'
      ]
    }
  ];

  const studentProgress = {
    arjun: {
      name: 'Arjun Sharma',
      class: 'Grade 8',
      overallScore: 87,
      dimensions: {
        buddhi: { score: 92, grade: 'A+', trend: 'up' },
        hridaya: { score: 85, grade: 'A', trend: 'stable' },
        karma: { score: 88, grade: 'A', trend: 'up' },
        sangha: { score: 83, grade: 'A-', trend: 'up' }
      },
      recentAssessments: [
        { subject: 'Sanskrit Grammar', type: 'Traditional', score: 94, date: '2024-01-15' },
        { subject: 'Bhagavad Gita Analysis', type: 'Modern', score: 89, date: '2024-01-12' },
        { subject: 'Meditation Practice', type: 'Practical', score: 91, date: '2024-01-10' },
        { subject: 'Group Project Leadership', type: 'Social', score: 86, date: '2024-01-08' }
      ]
    }
  };

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      pink: 'bg-pink-100 text-pink-800',
      green: 'bg-green-100 text-green-800',
      orange: 'bg-orange-100 text-orange-800'
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '📈' : trend === 'down' ? '📉' : '➡️';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            📊 Holistic Assessment & Evaluation System
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive evaluation combining ancient wisdom with modern assessment techniques
          </p>
        </div>

        <Tabs defaultValue="framework" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="framework">Assessment Framework</TabsTrigger>
            <TabsTrigger value="methods">Evaluation Methods</TabsTrigger>
            <TabsTrigger value="progress">Student Progress</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="framework" className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Four-Dimensional Assessment Framework</CardTitle>
                <CardDescription>
                  Based on the holistic development principles of ancient Gurukul system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {holisticDimensions.map((dimension, index) => {
                    const IconComponent = dimension.icon;
                    return (
                      <Card key={index} className="border-2 border-gray-100">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${getColorClass(dimension.color)}`}>
                              <IconComponent size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{dimension.dimension}</CardTitle>
                              <Badge variant="outline">{dimension.weight}% weightage</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-2">Assessment Areas:</h4>
                          <div className="space-y-1">
                            {dimension.aspects.map((aspect, aspectIndex) => (
                              <div key={aspectIndex} className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                {aspect}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {assessmentMethods.map((category, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.methods.map((method, methodIndex) => (
                        <div key={methodIndex} className="p-3 bg-gray-50 rounded-lg border">
                          <div className="flex items-start gap-2">
                            <BookOpen size={16} className="text-orange-500 mt-0.5" />
                            <span className="text-sm font-medium">{method}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Student Overview */}
              <div className="lg:col-span-2">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{studentProgress[selectedStudent].name}</CardTitle>
                        <CardDescription>{studentProgress[selectedStudent].class}</CardDescription>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600">
                          {studentProgress[selectedStudent].overallScore}%
                        </div>
                        <div className="text-sm text-gray-600">Overall Score</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {holisticDimensions.map((dimension, index) => {
                        const dimensionKey = dimension.dimension.split(' ')[0].toLowerCase();
                        const progress = studentProgress[selectedStudent].dimensions[dimensionKey];
                        const IconComponent = dimension.icon;
                        
                        return (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <IconComponent size={16} className="text-gray-600" />
                                <span className="font-medium text-sm">{dimension.dimension}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary">{progress.grade}</Badge>
                                <span className="text-sm">{getTrendIcon(progress.trend)}</span>
                              </div>
                            </div>
                            <Progress value={progress.score} className="h-2" />
                            <div className="text-right text-sm text-gray-600 mt-1">
                              {progress.score}%
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Assessments */}
              <div>
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Assessments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {studentProgress[selectedStudent].recentAssessments.map((assessment, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{assessment.subject}</h4>
                          <Badge 
                            variant={assessment.score >= 90 ? 'default' : assessment.score >= 80 ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {assessment.score}%
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{assessment.type}</span>
                          <span>{assessment.date}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    Progress Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Detailed progress tracking across all four dimensions with trend analysis.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Generate Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award size={20} />
                    Competency Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Issue digital certificates for completed competencies and achievements.
                  </p>
                  <Button className="w-full" variant="outline">
                    View Certificates
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={20} />
                    Assessment Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule and track upcoming assessments and evaluation milestones.
                  </p>
                  <Button className="w-full" variant="outline">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AssessmentSystem;
