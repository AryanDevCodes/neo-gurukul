import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  BookOpen,
  Users,
  Clock,
  Award,
  Cpu,
  Network,
  Activity,
  Layers,
  Bot,
  Sparkles,
  Globe,
  Database,
  Shield
} from 'lucide-react';

const NeuralDashboard = () => {
  const [neuralActivity, setNeuralActivity] = useState(85);
  const [learningVelocity, setLearningVelocity] = useState(92);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => Math.min(100, prev + Math.random() * 2 - 1));
      setLearningVelocity(prev => Math.min(100, prev + Math.random() * 3 - 1.5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const neuralMetrics = [
    { 
      title: 'Neural Pathways', 
      value: '2,847', 
      change: '+23%', 
      icon: Brain, 
      color: 'text-cyber-purple',
      gradient: 'gradient-cyber'
    },
    { 
      title: 'Quantum Links', 
      value: '156', 
      change: '+15%', 
      icon: Network, 
      color: 'text-cyber-cyan',
      gradient: 'gradient-dharma'
    },
    { 
      title: 'Knowledge Nodes', 
      value: '94.2%', 
      change: '+8%', 
      icon: Database, 
      color: 'text-cyber-green',
      gradient: 'gradient-matrix'
    },
    { 
      title: 'Consciousness Level', 
      value: '7.8/10', 
      change: '+2.1', 
      icon: Sparkles, 
      color: 'text-cyber-gold',
      gradient: 'gradient-hologram'
    }
  ];

  const activeCourses = [
    {
      title: 'Advanced Sanskrit Neural Processing',
      progress: 78,
      nextSession: '2h 15m',
      difficulty: 'Quantum',
      modules: 12,
      completed: 9,
      instructor: 'AI Master Vyasa',
      techStack: ['Neural Interface', 'Quantum Computing', 'Sanskrit NLP']
    },
    {
      title: 'Dharmic Algorithm Design',
      progress: 45,
      nextSession: '1d 4h',
      difficulty: 'Advanced',
      modules: 8,
      completed: 4,
      instructor: 'Sage Narada 2.0',
      techStack: ['Blockchain', 'Ethics Engine', 'Smart Contracts']
    },
    {
      title: 'Consciousness Computing Fundamentals',
      progress: 92,
      nextSession: '6h 30m',
      difficulty: 'Expert',
      modules: 15,
      completed: 14,
      instructor: 'Quantum Buddha',
      techStack: ['Quantum Consciousness', 'Neural Networks', 'Meditation API']
    }
  ];

  const achievements = [
    { name: 'Neural Pioneer', description: 'First to complete quantum consciousness module', rarity: 'Legendary' },
    { name: 'Dharma Coder', description: 'Built 10 ethical AI systems', rarity: 'Epic' },
    { name: 'Sanskrit Hacker', description: 'Decoded ancient texts using AI', rarity: 'Rare' },
    { name: 'Meditation Master', description: 'Achieved 1000 hours of digital meditation', rarity: 'Epic' }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-matrix opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-neural opacity-10"></div>

      <div className="container mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-cyber bg-gradient-cyber bg-clip-text text-transparent">
              Neural Command Center
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monitor your consciousness evolution in real-time
          </p>
        </motion.div>

        {/* Real-time Neural Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <Card className="glassmorphism border-primary/20 hover:shadow-cyber transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyber">
                <Activity className="w-5 h-5 animate-neural-pulse" />
                Neural Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-orbitron font-bold mb-2 text-cyber-purple">
                {neuralActivity.toFixed(1)}%
              </div>
              <Progress value={neuralActivity} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Real-time consciousness processing rate
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-secondary/20 hover:shadow-neon transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-dharma">
                <Zap className="w-5 h-5 animate-neural-pulse" />
                Learning Velocity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-orbitron font-bold mb-2 text-cyber-cyan">
                {learningVelocity.toFixed(1)}%
              </div>
              <Progress value={learningVelocity} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Knowledge absorption acceleration
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Neural Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {neuralMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-hologram)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="glassmorphism border-primary/10 text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${metric.gradient} flex items-center justify-center shadow-cyber`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-2xl font-orbitron font-bold ${metric.color} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{metric.title}</div>
                  <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glassmorphism">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Neural Courses
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Evolution Path
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Mind Collective
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Digital Karma
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-6"
            >
              {activeCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glassmorphism border-primary/20 hover:shadow-neon transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className={`
                              ${course.difficulty === 'Quantum' ? 'text-purple-400 border-purple-400/30' : ''}
                              ${course.difficulty === 'Advanced' ? 'text-cyan-400 border-cyan-400/30' : ''}
                              ${course.difficulty === 'Expert' ? 'text-green-400 border-green-400/30' : ''}
                            `}>
                              {course.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {course.completed}/{course.modules} modules
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-orbitron font-bold mb-2 text-cyber">
                            {course.title}
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Bot className="w-4 h-4" />
                              {course.instructor}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Next: {course.nextSession}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {course.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Neural Progress</span>
                              <span className="text-cyber font-mono">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Button className="gradient-cyber hover:shadow-cyber text-white border-0">
                            <Cpu className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                          <Button variant="outline" size="sm" className="neon-border">
                            <Globe className="w-4 h-4 mr-2" />
                            VR Session
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glassmorphism border-primary/20 hover:shadow-hologram transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full gradient-hologram flex items-center justify-center shadow-cyber">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-orbitron font-bold text-cyber">
                              {achievement.name}
                            </h3>
                            <Badge variant="outline" className={`text-xs
                              ${achievement.rarity === 'Legendary' ? 'text-purple-400 border-purple-400/30' : ''}
                              ${achievement.rarity === 'Epic' ? 'text-orange-400 border-orange-400/30' : ''}
                              ${achievement.rarity === 'Rare' ? 'text-blue-400 border-blue-400/30' : ''}
                            `}>
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NeuralDashboard;