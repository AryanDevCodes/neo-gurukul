
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Book, BookOpen, Play, Headphones } from 'lucide-react';
import AncientTexts from '../components/knowledge/AncientTexts';
import SanskritLearning from '../components/knowledge/SanskritLearning';
import AudioVisual from '../components/knowledge/AudioVisual';
import ModernCommentary from '../components/knowledge/ModernCommentary';

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState('texts');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'texts',
      name: 'Ancient Texts',
      icon: Book,
      description: 'Sacred scriptures with translations',
      count: '108 texts'
    },
    {
      id: 'sanskrit',
      name: 'Sanskrit Learning',
      icon: BookOpen,
      description: 'Interactive language lessons',
      count: '50+ lessons'
    },
    {
      id: 'audiovisual',
      name: 'Audio-Visual',
      icon: Play,
      description: 'Videos, podcasts, and recordings',
      count: '200+ media'
    },
    {
      id: 'commentary',
      name: 'Modern Commentary',
      icon: Headphones,
      description: 'Contemporary analysis and interpretation',
      count: '150+ articles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Knowledge Repository 📚
          </h1>
          <p className="text-gray-600 text-lg">
            Explore the timeless wisdom of ancient India with modern learning tools
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search texts, teachings, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeTab === category.id
                    ? 'ring-2 ring-orange-500 bg-white shadow-lg scale-105'
                    : 'bg-white/70 hover:bg-white/90 hover:scale-102'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <IconComponent 
                      size={24} 
                      className={activeTab === category.id ? 'text-orange-600' : 'text-gray-600'} 
                    />
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {category.count}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {activeTab === 'texts' && <AncientTexts searchQuery={searchQuery} />}
          {activeTab === 'sanskrit' && <SanskritLearning />}
          {activeTab === 'audiovisual' && <AudioVisual searchQuery={searchQuery} />}
          {activeTab === 'commentary' && <ModernCommentary searchQuery={searchQuery} />}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
