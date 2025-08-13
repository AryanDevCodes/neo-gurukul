import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts'
import { TrendingUp, BookOpen, Clock, Award, Target, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const LearningAnalytics = () => {
  const weeklyProgress = [
    { day: 'Mon', hours: 2.5, completion: 85 },
    { day: 'Tue', hours: 3.2, completion: 92 },
    { day: 'Wed', hours: 1.8, completion: 78 },
    { day: 'Thu', hours: 4.1, completion: 95 },
    { day: 'Fri', hours: 2.7, completion: 88 },
    { day: 'Sat', hours: 3.8, completion: 94 },
    { day: 'Sun', hours: 2.2, completion: 82 }
  ]

  const subjectDistribution = [
    { name: 'Sanskrit', value: 35, color: '#ff6b35' },
    { name: 'Philosophy', value: 25, color: '#4ecdc4' },
    { name: 'Yoga', value: 20, color: '#45b7d1' },
    { name: 'Ayurveda', value: 15, color: '#96ceb4' },
    { name: 'Arts', value: 5, color: '#feca57' }
  ]

  const skillRadar = [
    { skill: 'Sanskrit Reading', current: 85, target: 90 },
    { skill: 'Meditation', current: 92, target: 95 },
    { skill: 'Philosophy', current: 78, target: 85 },
    { skill: 'Mantra Chanting', current: 88, target: 90 },
    { skill: 'Yoga Practice', current: 82, target: 88 },
    { skill: 'Ayurveda Knowledge', current: 75, target: 80 }
  ]

  const achievements = [
    { title: 'Mantra Master', description: '100 mantras memorized', earned: true, date: '2025-01-10' },
    { title: 'Sanskrit Scholar', description: '500 Sanskrit words learned', earned: true, date: '2025-01-08' },
    { title: 'Meditation Milestone', description: '30 days consecutive meditation', earned: true, date: '2025-01-05' },
    { title: 'Philosophy Seeker', description: 'Complete 5 philosophy courses', earned: false, progress: 60 },
    { title: 'Dharma Practitioner', description: '1000 dharma points earned', earned: false, progress: 85 }
  ]

  const learningGoals = [
    { goal: 'Complete Sanskrit Fundamentals', progress: 85, deadline: '2025-02-15' },
    { goal: 'Master 108 Mantras', progress: 72, deadline: '2025-03-01' },
    { goal: 'Read Bhagavad Gita', progress: 45, deadline: '2025-04-01' },
    { goal: 'Yoga Certification', progress: 65, deadline: '2025-03-15' }
  ]

  const stats = [
    { title: 'Total Hours', value: '156', icon: Clock, trend: '+12%' },
    { title: 'Courses Completed', value: '8', icon: BookOpen, trend: '+2' },
    { title: 'Current Streak', value: '15 days', icon: TrendingUp, trend: 'New record!' },
    { title: 'Dharma Points', value: '2,450', icon: Award, trend: '+180' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/50">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learning Analytics
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your dharmic learning journey with detailed insights and progress analysis
          </p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardDescription>{stat.title}</CardDescription>
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-green-600">{stat.trend}</div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>

        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Weekly Learning Hours</CardTitle>
                  <CardDescription>Your study time over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                  <CardDescription>Time spent across different subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subjectDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {subjectDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Skill Development Radar</CardTitle>
                <CardDescription>Your current skill levels vs target goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillRadar}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="Current" dataKey="current" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                    <Radar name="Target" dataKey="target" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.1} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{goal.goal}</CardTitle>
                        <Badge variant="outline">
                          <Target className="w-4 h-4 mr-1" />
                          {goal.deadline}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-card/50 backdrop-blur-sm ${achievement.earned ? 'border-yellow-400 bg-yellow-50/50' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Award className={`w-5 h-5 ${achievement.earned ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                          {achievement.title}
                        </CardTitle>
                        {achievement.earned && (
                          <Badge className="bg-yellow-500 text-white">Earned</Badge>
                        )}
                      </div>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {achievement.earned ? (
                        <div className="text-sm text-muted-foreground">
                          Earned on {achievement.date}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Learning Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800">Peak Learning Time</h4>
                    <p className="text-sm text-blue-700">You're most productive between 9-11 AM. Schedule challenging topics during this time.</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800">Strength Area</h4>
                    <p className="text-sm text-green-700">Meditation and mindfulness practices are your strongest areas. Consider becoming a mentor.</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800">Improvement Opportunity</h4>
                    <p className="text-sm text-orange-700">Sanskrit vocabulary could use more attention. Try flashcards during breaks.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">🎯 Focus This Week</h4>
                    <p className="text-sm text-muted-foreground">Complete Sanskrit Grammar Module 3 to stay on track for your certification goal.</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">📚 New Course Suggestion</h4>
                    <p className="text-sm text-muted-foreground">Based on your progress, "Advanced Meditation Techniques" would complement your current learning path.</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">🏆 Next Achievement</h4>
                    <p className="text-sm text-muted-foreground">You're 150 points away from "Dharma Master" badge. Keep up the daily practice!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LearningAnalytics