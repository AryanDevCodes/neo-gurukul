
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, User, ThumbsUp, Share, Bookmark } from 'lucide-react';

interface ModernCommentaryProps {
  searchQuery: string;
}

const ModernCommentary = ({ searchQuery }: ModernCommentaryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const commentaries = [
    {
      id: 'gita-leadership',
      title: 'Bhagavad Gita for Modern Leadership',
      author: 'Dr. Radhakrishnan Pillai',
      category: 'Business & Leadership',
      readTime: '15 min',
      publishDate: '2024-01-15',
      excerpt: 'How Krishna\'s teachings to Arjuna can guide contemporary business leaders through ethical decision-making and crisis management.',
      tags: ['Leadership', 'Ethics', 'Management'],
      likes: 234,
      views: '5.2K',
      difficulty: 'Intermediate'
    },
    {
      id: 'yoga-mental-health',
      title: 'Yoga Philosophy and Mental Wellness',
      author: 'Dr. Swati Desai',
      category: 'Health & Wellness',
      readTime: '12 min',
      publishDate: '2024-01-12',
      excerpt: 'Exploring how Patanjali\'s eight-fold path offers practical solutions for modern mental health challenges and stress management.',
      tags: ['Mental Health', 'Yoga', 'Wellness'],
      likes: 187,
      views: '3.8K',
      difficulty: 'Beginner'
    },
    {
      id: 'dharma-sustainability',
      title: 'Dharma and Environmental Sustainability',
      author: 'Prof. Vandana Shiva',
      category: 'Environment',
      readTime: '18 min',
      publishDate: '2024-01-10',
      excerpt: 'Ancient Indian concept of dharma provides a framework for understanding our responsibility towards environmental conservation and sustainable living.',
      tags: ['Environment', 'Sustainability', 'Ethics'],
      likes: 312,
      views: '7.1K',
      difficulty: 'Intermediate'
    },
    {
      id: 'vedic-science-modern',
      title: 'Vedic Mathematics in Digital Age',
      author: 'Dr. Bharati Krishna Tirtha',
      category: 'Science & Technology',
      readTime: '22 min',
      publishDate: '2024-01-08',
      excerpt: 'How ancient Vedic mathematical techniques can enhance computational thinking and problem-solving in modern technology and AI.',
      tags: ['Mathematics', 'Technology', 'Innovation'],
      likes: 156,
      views: '4.3K',
      difficulty: 'Advanced'
    },
    {
      id: 'karma-workplace',
      title: 'Karma Yoga in the Modern Workplace',
      author: 'Swami Sarvapriyananda',
      category: 'Philosophy',
      readTime: '14 min',
      publishDate: '2024-01-05',
      excerpt: 'Applying the principles of selfless action and detachment from results in professional life for greater satisfaction and success.',
      tags: ['Philosophy', 'Work-Life', 'Spirituality'],
      likes: 278,
      views: '6.4K',
      difficulty: 'Intermediate'
    },
    {
      id: 'ayurveda-nutrition',
      title: 'Ayurvedic Principles for Modern Nutrition',
      author: 'Dr. Deepak Chopra',
      category: 'Health & Wellness',
      readTime: '16 min',
      publishDate: '2024-01-03',
      excerpt: 'Integrating ancient Ayurvedic wisdom with contemporary nutritional science for optimal health and well-being.',
      tags: ['Ayurveda', 'Nutrition', 'Health'],
      likes: 203,
      views: '5.7K',
      difficulty: 'Beginner'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: commentaries.length },
    { id: 'Business & Leadership', name: 'Leadership', count: 1 },
    { id: 'Health & Wellness', name: 'Wellness', count: 2 },
    { id: 'Environment', name: 'Environment', count: 1 },
    { id: 'Science & Technology', name: 'Science', count: 1 },
    { id: 'Philosophy', name: 'Philosophy', count: 1 }
  ];

  const filteredCommentaries = commentaries.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Modern Commentary & Analysis</CardTitle>
          <CardDescription>
            Contemporary insights and applications of ancient wisdom for today's challenges
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Category Filters */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-orange-500 hover:bg-orange-600' : ''}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCommentaries.map((article) => (
          <Card key={article.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <Badge className={getDifficultyColor(article.difficulty)}>
                  {article.difficulty}
                </Badge>
                <Badge variant="outline">{article.category}</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight">
                {article.title}
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{article.excerpt}</p>
              
              <div className="flex flex-wrap gap-1">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={14} />
                    {article.likes}
                  </div>
                  <div>{article.views} views</div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Bookmark size={14} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share size={14} />
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                <BookOpen size={16} className="mr-2" />
                Read Full Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Discussion */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Community Discussion: Ancient Wisdom in AI Era</CardTitle>
          <CardDescription>Join the conversation about integrating timeless principles with emerging technologies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Discussion Topic:</h4>
            <p className="text-gray-700 mb-3">
              "How can the principles of Dharma guide ethical AI development and ensure technology serves humanity's higher purpose?"
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span>Started by: Dr. Raj Patel</span>
              <span>47 responses</span>
              <span>Last activity: 2 hours ago</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-sm font-medium">Latest Response by Priya Sharma:</p>
              <p className="text-sm text-gray-700 mt-1">
                "The concept of 'Ahimsa' in AI could mean ensuring our algorithms don't cause harm to any section of society..."
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm font-medium">Response by Prof. Kumar:</p>
              <p className="text-sm text-gray-700 mt-1">
                "Vedic mathematics offers computational principles that could make AI more efficient and intuitive..."
              </p>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Join Discussion
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModernCommentary;
