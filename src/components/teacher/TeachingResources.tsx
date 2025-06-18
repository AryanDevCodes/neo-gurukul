
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Download, Upload, Star, Eye } from 'lucide-react';

const TeachingResources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      id: 'gita-slides',
      title: 'Bhagavad Gita Chapter Presentations',
      type: 'presentation',
      category: 'Philosophy',
      description: 'Complete slide deck for all 18 chapters with Sanskrit verses',
      downloads: 234,
      rating: 4.9,
      size: '45 MB',
      format: 'PPT',
      tags: ['Interactive', 'Sanskrit', 'Commentary']
    },
    {
      id: 'sanskrit-worksheets',
      title: 'Sanskrit Practice Worksheets',
      type: 'document',
      category: 'Language',
      description: 'Comprehensive grammar exercises and writing practice',
      downloads: 189,
      rating: 4.7,
      size: '12 MB',
      format: 'PDF',
      tags: ['Practice', 'Grammar', 'Beginner']
    },
    {
      id: 'meditation-videos',
      title: 'Guided Meditation Series',
      type: 'video',
      category: 'Spiritual Practice',
      description: 'Step-by-step meditation guides for students',
      downloads: 156,
      rating: 4.8,
      size: '2.1 GB',
      format: 'MP4',
      tags: ['Audio-Visual', 'Practice', 'Mindfulness']
    },
    {
      id: 'yoga-anatomy',
      title: 'Yoga Anatomy Charts',
      type: 'image',
      category: 'Yoga',
      description: 'Visual guides showing proper yoga postures and benefits',
      downloads: 298,
      rating: 4.6,
      size: '25 MB',
      format: 'PNG',
      tags: ['Visual', 'Reference', 'Health']
    },
    {
      id: 'vedic-math-tools',
      title: 'Vedic Mathematics Calculator',
      type: 'interactive',
      category: 'Mathematics',
      description: 'Digital tools for teaching ancient calculation methods',
      downloads: 87,
      rating: 4.5,
      size: '8 MB',
      format: 'Web App',
      tags: ['Interactive', 'Calculator', 'Modern']
    },
    {
      id: 'story-collections',
      title: 'Panchatantra Story Collection',
      type: 'document',
      category: 'Literature',
      description: 'Illustrated moral stories with teaching guides',
      downloads: 167,
      rating: 4.9,
      size: '30 MB',
      format: 'PDF',
      tags: ['Stories', 'Moral Values', 'Illustrated']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'Philosophy', name: 'Philosophy', count: 1 },
    { id: 'Language', name: 'Sanskrit', count: 1 },
    { id: 'Spiritual Practice', name: 'Meditation', count: 1 },
    { id: 'Yoga', name: 'Yoga', count: 1 },
    { id: 'Mathematics', name: 'Mathematics', count: 1 },
    { id: 'Literature', name: 'Literature', count: 1 }
  ];

  const filteredResources = resources.filter(resource => 
    activeCategory === 'all' || resource.category === activeCategory
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'presentation': return FileText;
      case 'document': return BookOpen;
      case 'video': return Video;
      case 'image': return Eye;
      case 'interactive': return Star;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'presentation': return 'bg-blue-100 text-blue-800';
      case 'document': return 'bg-green-100 text-green-800';
      case 'video': return 'bg-purple-100 text-purple-800';
      case 'image': return 'bg-pink-100 text-pink-800';
      case 'interactive': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Teaching Resources Library</CardTitle>
              <CardDescription>Access and share educational materials for your courses</CardDescription>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Upload size={16} className="mr-2" />
              Upload Resource
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Category Filters */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 'bg-orange-500 hover:bg-orange-600' : ''}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          return (
            <Card key={resource.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon size={20} className="text-orange-600" />
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.format}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    {resource.rating}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Downloads:</span>
                    <p className="font-medium">{resource.downloads}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Size:</span>
                    <p className="font-medium">{resource.size}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                    <Download size={16} className="mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Collection */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Featured Collection: Complete Sanskrit Learning Kit</CardTitle>
          <CardDescription>Everything you need to teach Sanskrit from beginner to advanced level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📚 Study Materials</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Devanagari script guide</li>
                <li>• Grammar reference sheets</li>
                <li>• Vocabulary flashcards</li>
                <li>• Practice worksheets</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🎥 Audio-Visual</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pronunciation videos</li>
                <li>• Chanting recordings</li>
                <li>• Interactive lessons</li>
                <li>• Cultural context videos</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">✅ Assessment Tools</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Progress tracking sheets</li>
                <li>• Quiz templates</li>
                <li>• Rubrics for evaluation</li>
                <li>• Achievement certificates</li>
              </ul>
            </div>
          </div>
          <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
            <Download size={16} className="mr-2" />
            Download Complete Collection (156 MB)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachingResources;
