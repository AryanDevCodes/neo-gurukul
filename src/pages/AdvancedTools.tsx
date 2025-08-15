import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Target, 
  Users, 
  Calendar, 
  BookOpen, 
  BarChart3,
  Video,
  MessageSquare,
  Zap,
  Trophy,
  Clock,
  TrendingUp
} from 'lucide-react';
import QuizBuilder from '../components/enhanced/QuizBuilder';
import StudyPlanner from '../components/enhanced/StudyPlanner';
import VirtualClassroom from '../components/enhanced/VirtualClassroom';

const AdvancedTools = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tools = [
    {
      id: 'quiz',
      name: 'Interactive Quiz Builder',
      description: 'Create engaging assessments with multiple question types, automatic grading, and detailed analytics',
      icon: Brain,
      category: 'Assessment',
      features: ['Multiple question types', 'Auto-grading', 'Analytics dashboard', 'Time limits'],
      color: 'bg-blue-500'
    },
    {
      id: 'planner',
      name: 'AI Study Planner',
      description: 'Personalized study schedules with progress tracking, goal setting, and performance analytics',
      icon: Target,
      category: 'Planning',
      features: ['Smart scheduling', 'Progress tracking', 'Goal setting', 'Performance insights'],
      color: 'bg-green-500'
    },
    {
      id: 'classroom',
      name: 'Virtual Classroom',
      description: 'Live video sessions with interactive tools, screen sharing, and collaborative features',
      icon: Users,
      category: 'Collaboration',
      features: ['HD video calls', 'Screen sharing', 'Interactive whiteboard', 'File sharing'],
      color: 'bg-purple-500'
    },
    {
      id: 'analytics',
      name: 'Learning Analytics',
      description: 'Comprehensive insights into learning patterns, progress trends, and performance metrics',
      icon: BarChart3,
      category: 'Analytics',
      features: ['Progress tracking', 'Performance metrics', 'Learning insights', 'Custom reports'],
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '2,847', icon: Users, change: '+12%' },
    { label: 'Courses Completed', value: '1,234', icon: Trophy, change: '+18%' },
    { label: 'Study Hours', value: '45,678', icon: Clock, change: '+8%' },
    { label: 'Success Rate', value: '94.2%', icon: TrendingUp, change: '+3.2%' }
  ];

  const recentActivity = [
    { user: 'Arjun Sharma', action: 'Completed Sanskrit Quiz', time: '2 min ago', score: '95%' },
    { user: 'Priya Patel', action: 'Joined Virtual Classroom', time: '15 min ago', type: 'session' },
    { user: 'Rahul Kumar', action: 'Created Study Plan', time: '1 hour ago', plan: 'Bhagavad Gita Study' },
    { user: 'Meera Singh', action: 'Achieved Learning Goal', time: '2 hours ago', goal: 'Sanskrit Basics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold edu-gradient-text mb-4">
            Advanced Learning Tools 🚀
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive suite of educational tools powered by modern technology to enhance the learning experience
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 size={16} />
              Overview
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain size={16} />
              Quiz Builder
            </TabsTrigger>
            <TabsTrigger value="planner" className="flex items-center gap-2">
              <Target size={16} />
              Study Planner
            </TabsTrigger>
            <TabsTrigger value="classroom" className="flex items-center gap-2">
              <Video size={16} />
              Classroom
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp size={16} />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="edu-card-hover">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className="text-sm text-green-600 flex items-center mt-1">
                            <TrendingUp size={12} className="mr-1" />
                            {stat.change}
                          </p>
                        </div>
                        <IconComponent className="h-8 w-8 text-primary opacity-75" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {tools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={tool.id} className="edu-card-hover group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg ${tool.color} text-white`}>
                            <IconComponent size={24} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{tool.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">{tool.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base mt-2">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Zap size={12} className="text-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button 
                          onClick={() => setActiveTab(tool.id)} 
                          className="w-full edu-button-primary group-hover:shadow-glow transition-all duration-300"
                        >
                          Launch Tool
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="text-primary" size={20} />
                  Recent Platform Activity
                </CardTitle>
                <CardDescription>Latest interactions and achievements across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium">{activity.user}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{activity.time}</p>
                        {activity.score && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                            {activity.score}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quiz">
            <QuizBuilder />
          </TabsContent>

          <TabsContent value="planner">
            <StudyPlanner />
          </TabsContent>

          <TabsContent value="classroom">
            <VirtualClassroom />
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="edu-gradient-text">Learning Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive insights into learning patterns and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <BarChart3 size={64} className="mx-auto text-primary opacity-50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics Coming Soon</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We're building comprehensive analytics tools to help track learning progress, 
                  identify areas for improvement, and optimize educational outcomes.
                </p>
                <Button className="edu-button-primary">
                  Request Early Access
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdvancedTools;