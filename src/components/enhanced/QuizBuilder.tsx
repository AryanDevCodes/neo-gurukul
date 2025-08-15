import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Eye, Save, Play } from 'lucide-react';

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  subject: string;
  timeLimit: number; // in minutes
  questions: Question[];
  totalPoints: number;
}

const QuizBuilder = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    id: '',
    title: '',
    description: '',
    subject: '',
    timeLimit: 30,
    questions: [],
    totalPoints: 0
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: '',
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    explanation: '',
    difficulty: 'medium',
    points: 1
  });

  const [isPreview, setIsPreview] = useState(false);

  const addQuestion = () => {
    if (!currentQuestion.question.trim()) return;

    const newQuestion: Question = {
      ...currentQuestion,
      id: Date.now().toString()
    };

    setQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
      totalPoints: prev.totalPoints + newQuestion.points
    }));

    // Reset current question
    setCurrentQuestion({
      id: '',
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      explanation: '',
      difficulty: 'medium',
      points: 1
    });
  };

  const removeQuestion = (questionId: string) => {
    const questionToRemove = quiz.questions.find(q => q.id === questionId);
    setQuiz(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId),
      totalPoints: prev.totalPoints - (questionToRemove?.points || 0)
    }));
  };

  const updateOption = (index: number, value: string) => {
    setCurrentQuestion(prev => ({
      ...prev,
      options: prev.options?.map((opt, i) => i === index ? value : opt) || []
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Quiz Header */}
      <Card className="edu-card">
        <CardHeader>
          <CardTitle className="edu-gradient-text">Interactive Quiz Builder</CardTitle>
          <CardDescription>Create engaging assessments with multiple question types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Quiz Title</label>
              <Input
                placeholder="Enter quiz title..."
                value={quiz.title}
                onChange={(e) => setQuiz(prev => ({ ...prev, title: e.target.value }))}
                className="edu-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input
                placeholder="e.g., Sanskrit, Philosophy, History"
                value={quiz.subject}
                onChange={(e) => setQuiz(prev => ({ ...prev, subject: e.target.value }))}
                className="edu-input"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Describe what this quiz covers..."
              value={quiz.description}
              onChange={(e) => setQuiz(prev => ({ ...prev, description: e.target.value }))}
              className="edu-input min-h-[80px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Limit (minutes)</label>
              <Input
                type="number"
                value={quiz.timeLimit}
                onChange={(e) => setQuiz(prev => ({ ...prev, timeLimit: parseInt(e.target.value) || 30 }))}
                className="edu-input"
              />
            </div>
            <div className="flex items-end">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {quiz.questions.length} Questions
              </Badge>
            </div>
            <div className="flex items-end">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {quiz.totalPoints} Points
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Builder */}
      <Card className="edu-card">
        <CardHeader>
          <CardTitle>Add New Question</CardTitle>
          <div className="flex gap-2">
            <select
              value={currentQuestion.type}
              onChange={(e) => setCurrentQuestion(prev => ({ 
                ...prev, 
                type: e.target.value as Question['type'],
                options: e.target.value === 'multiple-choice' ? ['', '', '', ''] : undefined
              }))}
              className="edu-input"
            >
              <option value="multiple-choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              <option value="short-answer">Short Answer</option>
              <option value="essay">Essay</option>
            </select>
            <select
              value={currentQuestion.difficulty}
              onChange={(e) => setCurrentQuestion(prev => ({ 
                ...prev, 
                difficulty: e.target.value as Question['difficulty']
              }))}
              className="edu-input"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <Input
              type="number"
              min="1"
              max="10"
              value={currentQuestion.points}
              onChange={(e) => setCurrentQuestion(prev => ({ 
                ...prev, 
                points: parseInt(e.target.value) || 1
              }))}
              className="edu-input w-24"
              placeholder="Points"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Question</label>
            <Textarea
              placeholder="Enter your question here..."
              value={currentQuestion.question}
              onChange={(e) => setCurrentQuestion(prev => ({ ...prev, question: e.target.value }))}
              className="edu-input min-h-[100px]"
            />
          </div>

          {/* Multiple Choice Options */}
          {currentQuestion.type === 'multiple-choice' && (
            <div className="space-y-3">
              <label className="text-sm font-medium">Answer Options</label>
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <span className="text-sm font-medium w-8">{String.fromCharCode(65 + index)}.</span>
                  <Input
                    placeholder={`Option ${String.fromCharCode(65 + index)}`}
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className="edu-input flex-1"
                  />
                  <input
                    type="radio"
                    name="correct-answer"
                    value={option}
                    onChange={(e) => setCurrentQuestion(prev => ({ ...prev, correctAnswer: e.target.value }))}
                    className="w-4 h-4 text-primary"
                  />
                </div>
              ))}
            </div>
          )}

          {/* True/False */}
          {currentQuestion.type === 'true-false' && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Correct Answer</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="true-false"
                    value="true"
                    onChange={(e) => setCurrentQuestion(prev => ({ ...prev, correctAnswer: e.target.value }))}
                    className="w-4 h-4 text-primary"
                  />
                  True
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="true-false"
                    value="false"
                    onChange={(e) => setCurrentQuestion(prev => ({ ...prev, correctAnswer: e.target.value }))}
                    className="w-4 h-4 text-primary"
                  />
                  False
                </label>
              </div>
            </div>
          )}

          {/* Short Answer / Essay */}
          {(currentQuestion.type === 'short-answer' || currentQuestion.type === 'essay') && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Sample Answer / Keywords</label>
              <Textarea
                placeholder="Provide a sample answer or key points..."
                value={currentQuestion.correctAnswer}
                onChange={(e) => setCurrentQuestion(prev => ({ ...prev, correctAnswer: e.target.value }))}
                className="edu-input"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Explanation (Optional)</label>
            <Textarea
              placeholder="Explain the correct answer..."
              value={currentQuestion.explanation}
              onChange={(e) => setCurrentQuestion(prev => ({ ...prev, explanation: e.target.value }))}
              className="edu-input"
            />
          </div>

          <Button onClick={addQuestion} className="edu-button-primary">
            <Plus size={16} className="mr-2" />
            Add Question
          </Button>
        </CardContent>
      </Card>

      {/* Questions List */}
      {quiz.questions.length > 0 && (
        <Card className="edu-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Quiz Questions ({quiz.questions.length})</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsPreview(!isPreview)}
                  className="flex items-center gap-2"
                >
                  <Eye size={16} />
                  {isPreview ? 'Edit Mode' : 'Preview'}
                </Button>
                <Button className="edu-button-secondary">
                  <Save size={16} className="mr-2" />
                  Save Quiz
                </Button>
                <Button className="edu-button-primary">
                  <Play size={16} className="mr-2" />
                  Publish
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {quiz.questions.map((question, index) => (
              <Card key={question.id} className="p-4 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">Q{index + 1}.</span>
                    <Badge className={getDifficultyColor(question.difficulty)}>
                      {question.difficulty}
                    </Badge>
                    <Badge variant="outline">{question.points} pts</Badge>
                    <Badge variant="outline">{question.type}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQuestion(question.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
                
                <p className="mb-3 text-foreground">{question.question}</p>
                
                {question.type === 'multiple-choice' && question.options && (
                  <div className="space-y-2">
                    {question.options.map((option, optIndex) => (
                      <div 
                        key={optIndex} 
                        className={`p-2 rounded border ${
                          option === question.correctAnswer 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                            : 'bg-muted border-border'
                        }`}
                      >
                        {String.fromCharCode(65 + optIndex)}. {option}
                      </div>
                    ))}
                  </div>
                )}
                
                {question.type === 'true-false' && (
                  <div className="text-sm">
                    <strong>Correct Answer:</strong> {question.correctAnswer}
                  </div>
                )}
                
                {question.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded dark:bg-blue-900/20 dark:border-blue-800">
                    <strong className="text-sm">Explanation:</strong>
                    <p className="text-sm mt-1">{question.explanation}</p>
                  </div>
                )}
              </Card>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizBuilder;