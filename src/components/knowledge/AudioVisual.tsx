
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Headphones, Video, Clock, Star, Download } from 'lucide-react';

interface AudioVisualProps {
  searchQuery: string;
}

const AudioVisual = ({ searchQuery }: AudioVisualProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const mediaContent = [
    {
      id: 'gita-recitation',
      title: 'Bhagavad Gita Recitation',
      type: 'audio',
      duration: '4h 30m',
      language: 'Sanskrit',
      narrator: 'Pandit Jasraj',
      description: 'Complete recitation of all 18 chapters',
      difficulty: 'Intermediate',
      rating: 4.9,
      views: '125K',
      tags: ['Classical', 'Philosophy', 'Meditation']
    },
    {
      id: 'ramayana-storytelling',
      title: 'Ramayana for Children',
      type: 'video',
      duration: '45m',
      language: 'Hindi/English',
      narrator: 'Devdutt Pattanaik',
      description: 'Animated stories from the great epic',
      difficulty: 'Beginner',
      rating: 4.8,
      views: '89K',
      tags: ['Stories', 'Animation', 'Family']
    },
    {
      id: 'upanishad-commentary',
      title: 'Upanishads Explained',
      type: 'video',
      duration: '2h 15m',
      language: 'English',
      narrator: 'Swami Sarvapriyananda',
      description: 'Deep dive into Vedantic philosophy',
      difficulty: 'Advanced',
      rating: 4.9,
      views: '234K',
      tags: ['Philosophy', 'Advanced', 'Vedanta']
    },
    {
      id: 'mantra-chanting',
      title: 'Healing Mantras Collection',
      type: 'audio',
      duration: '1h 20m',
      language: 'Sanskrit',
      narrator: 'Uma Mohan',
      description: 'Therapeutic mantras for daily practice',
      difficulty: 'Beginner',
      rating: 4.7,
      views: '167K',
      tags: ['Mantras', 'Healing', 'Meditation']
    },
    {
      id: 'yoga-philosophy',
      title: 'Yoga Sutras Discourse',
      type: 'video',
      duration: '3h 45m',
      language: 'English/Sanskrit',
      narrator: 'Sadhguru',
      description: 'Patanjali\'s yoga philosophy explained',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: '312K',
      tags: ['Yoga', 'Philosophy', 'Practice']
    },
    {
      id: 'vedic-chants',
      title: 'Vedic Hymns & Chants',
      type: 'audio',
      duration: '2h 30m',
      language: 'Sanskrit',
      narrator: 'Traditional Singers',
      description: 'Ancient hymns in their original form',
      difficulty: 'Advanced',
      rating: 4.6,
      views: '78K',
      tags: ['Vedic', 'Classical', 'Ritual']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: mediaContent.length },
    { id: 'audio', name: 'Audio', count: mediaContent.filter(m => m.type === 'audio').length },
    { id: 'video', name: 'Video', count: mediaContent.filter(m => m.type === 'video').length },
    { id: 'beginner', name: 'Beginner', count: mediaContent.filter(m => m.difficulty === 'Beginner').length },
    { id: 'advanced', name: 'Advanced', count: mediaContent.filter(m => m.difficulty === 'Advanced').length }
  ];

  const filteredContent = mediaContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || 
                           item.type === activeCategory || 
                           item.difficulty.toLowerCase() === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    return type === 'video' ? Video : Headphones;
  };

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
          <CardTitle>Audio-Visual Library</CardTitle>
          <CardDescription>
            Immerse yourself in ancient wisdom through curated audio and video content
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

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => {
          const TypeIcon = getTypeIcon(item.type);
          return (
            <Card key={item.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon size={20} className="text-orange-600" />
                    <Badge className={getDifficultyColor(item.difficulty)}>
                      {item.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    {item.rating}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{item.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">{item.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Narrator:</span>
                    <span className="font-medium">{item.narrator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-medium">{item.views}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                    <Play size={16} className="mr-1" />
                    Play
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Playlist */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones size={20} />
            Featured Playlist: Daily Spiritual Practice
          </CardTitle>
          <CardDescription>
            A curated collection for your morning routine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: 'Gayatri Mantra (108 times)', duration: '12 min', type: 'Mantra' },
              { title: 'Hanuman Chalisa', duration: '8 min', type: 'Devotional' },
              { title: 'Om Meditation', duration: '15 min', type: 'Meditation' },
              { title: 'Shanti Path', duration: '5 min', type: 'Prayer' }
            ].map((track, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Button size="sm" variant="ghost">
                    <Play size={14} />
                  </Button>
                  <div>
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-gray-600">{track.type} • {track.duration}</p>
                  </div>
                </div>
                <Clock size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
            <Play size={16} className="mr-2" />
            Play Full Playlist (40 min)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AudioVisual;
