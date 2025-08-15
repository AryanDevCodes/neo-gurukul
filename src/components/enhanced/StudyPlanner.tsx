import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, Target, CheckCircle, Circle, BookOpen, AlertCircle } from 'lucide-react';
import { format, addDays, startOfWeek, endOfWeek } from 'date-fns';

interface StudyTask {
  id: string;
  title: string;
  subject: string;
  type: 'reading' | 'practice' | 'revision' | 'assignment' | 'test';
  duration: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  completed: boolean;
  progress: number;
  tags: string[];
}

interface StudySession {
  id: string;
  date: Date;
  duration: number;
  tasksCompleted: number;
  focusScore: number;
}

const StudyPlanner = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState<StudyTask[]>([
    {
      id: '1',
      title: 'Read Bhagavad Gita Chapter 3',
      subject: 'Philosophy',
      type: 'reading',
      duration: 45,
      difficulty: 'medium',
      priority: 'high',
      dueDate: new Date(),
      completed: false,
      progress: 0,
      tags: ['scripture', 'karma-yoga']
    },
    {
      id: '2',
      title: 'Sanskrit Grammar Practice',
      subject: 'Sanskrit',
      type: 'practice',
      duration: 30,
      difficulty: 'hard',
      priority: 'medium',
      dueDate: addDays(new Date(), 1),
      completed: true,
      progress: 100,
      tags: ['grammar', 'practice']
    },
    {
      id: '3',
      title: 'Vedic Mathematics Assignment',
      subject: 'Mathematics',
      type: 'assignment',
      duration: 60,
      difficulty: 'medium',
      priority: 'high',
      dueDate: addDays(new Date(), 2),
      completed: false,
      progress: 30,
      tags: ['assignment', 'calculations']
    }
  ]);

  const [sessions] = useState<StudySession[]>([
    {
      id: '1',
      date: new Date(),
      duration: 120,
      tasksCompleted: 3,
      focusScore: 85
    },
    {
      id: '2',
      date: addDays(new Date(), -1),
      duration: 90,
      tasksCompleted: 2,
      focusScore: 92
    }
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed, progress: !task.completed ? 100 : 0 }
        : task
    ));
  };

  const updateTaskProgress = (taskId: string, progress: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, progress, completed: progress === 100 }
        : task
    ));
  };

  const getTasksByDate = (date: Date) => {
    return tasks.filter(task => 
      format(task.dueDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reading': return <BookOpen size={16} />;
      case 'practice': return <Target size={16} />;
      case 'revision': return <Circle size={16} />;
      case 'assignment': return <AlertCircle size={16} />;
      case 'test': return <CheckCircle size={16} />;
      default: return <Circle size={16} />;
    }
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => 
    addDays(startOfWeek(currentWeek), i)
  );

  const totalTasksToday = getTasksByDate(selectedDate).length;
  const completedTasksToday = getTasksByDate(selectedDate).filter(task => task.completed).length;
  const todayProgress = totalTasksToday > 0 ? (completedTasksToday / totalTasksToday) * 100 : 0;

  const weeklyStats = {
    totalStudyTime: sessions.reduce((acc, session) => acc + session.duration, 0),
    averageFocus: sessions.length > 0 ? sessions.reduce((acc, session) => acc + session.focusScore, 0) / sessions.length : 0,
    tasksCompleted: sessions.reduce((acc, session) => acc + session.tasksCompleted, 0)
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Progress</p>
                <p className="text-2xl font-bold">{Math.round(todayProgress)}%</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
            <Progress value={todayProgress} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Study Time</p>
                <p className="text-2xl font-bold">{Math.round(weeklyStats.totalStudyTime / 60)}h</p>
              </div>
              <Clock className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Focus Score</p>
                <p className="text-2xl font-bold">{Math.round(weeklyStats.averageFocus)}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasks Completed</p>
                <p className="text-2xl font-bold">{weeklyStats.tasksCompleted}</p>
              </div>
              <Calendar className="h-8 w-8 text-edu-knowledge" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Calendar View */}
      <Card className="edu-card">
        <CardHeader>
          <CardTitle className="edu-gradient-text">Weekly Study Schedule</CardTitle>
          <CardDescription>
            {format(startOfWeek(currentWeek), 'MMM d')} - {format(endOfWeek(currentWeek), 'MMM d, yyyy')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => {
              const dayTasks = getTasksByDate(day);
              const isSelected = format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
              const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
              
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  <CardContent className="p-3">
                    <div className="text-center mb-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        {format(day, 'EEE')}
                      </p>
                      <p className={`text-lg font-semibold ${
                        isToday ? 'text-primary' : 'text-foreground'
                      }`}>
                        {format(day, 'd')}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      {dayTasks.slice(0, 3).map((task) => (
                        <div 
                          key={task.id}
                          className={`text-xs p-1 rounded text-center ${
                            task.completed 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' 
                              : getPriorityColor(task.priority)
                          }`}
                        >
                          {task.title.length > 15 ? task.title.substring(0, 15) + '...' : task.title}
                        </div>
                      ))}
                      {dayTasks.length > 3 && (
                        <div className="text-xs text-muted-foreground text-center">
                          +{dayTasks.length - 3} more
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Day Tasks */}
      <Card className="edu-card">
        <CardHeader>
          <CardTitle>Tasks for {format(selectedDate, 'EEEE, MMMM d')}</CardTitle>
          <CardDescription>
            {completedTasksToday}/{totalTasksToday} tasks completed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {getTasksByDate(selectedDate).length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar size={48} className="mx-auto mb-4 opacity-50" />
              <p>No tasks scheduled for this day</p>
            </div>
          ) : (
            getTasksByDate(selectedDate).map((task) => (
              <Card key={task.id} className={`p-4 border ${task.completed ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleTaskCompletion(task.id)}
                      className="p-0 h-6 w-6"
                    >
                      {task.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </Button>
                    <div>
                      <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {task.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{task.subject}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getTypeIcon(task.type)}
                      {task.type}
                    </Badge>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge variant="outline">
                      <Clock size={12} className="mr-1" />
                      {task.duration}m
                    </Badge>
                  </div>
                </div>
                
                {!task.completed && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <Progress value={task.progress} className="h-2" />
                    <div className="flex gap-2">
                      {[25, 50, 75, 100].map((value) => (
                        <Button
                          key={value}
                          variant="outline"
                          size="sm"
                          onClick={() => updateTaskProgress(task.id, value)}
                          className="text-xs"
                        >
                          {value}%
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {task.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyPlanner;