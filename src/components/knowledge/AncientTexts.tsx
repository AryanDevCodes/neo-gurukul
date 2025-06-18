
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Download, Play, Star, Volume2 } from 'lucide-react';

interface AncientTextsProps {
  searchQuery: string;
}

const AncientTexts = ({ searchQuery }: AncientTextsProps) => {
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const ancientTexts = [
    {
      id: 'bhagavad-gita',
      title: 'Bhagavad Gita',
      sanskrit: 'भगवद्गीता',
      category: 'Philosophy',
      chapters: 18,
      verses: 700,
      description: 'The eternal dialogue between Prince Arjuna and Lord Krishna',
      difficulty: 'Intermediate',
      audioAvailable: true,
      translationsAvailable: ['English', 'Hindi', 'Tamil', 'Bengali']
    },
    {
      id: 'ramayana',
      title: 'Ramayana',
      sanskrit: 'रामायणम्',
      category: 'Epic',
      chapters: 7,
      verses: 24000,
      description: 'The heroic journey of Lord Rama',
      difficulty: 'Advanced',
      audioAvailable: true,
      translationsAvailable: ['English', 'Hindi', 'Tamil']
    },
    {
      id: 'upanishads',
      title: 'Principal Upanishads',
      sanskrit: 'उपनिषत्',
      category: 'Philosophy',
      chapters: 108,
      verses: 'Various',
      description: 'The philosophical foundation of Vedantic thought',
      difficulty: 'Advanced',
      audioAvailable: true,
      translationsAvailable: ['English', 'Hindi']
    },
    {
      id: 'yoga-sutras',
      title: 'Yoga Sutras',
      sanskrit: 'योगसूत्र',
      category: 'Spiritual Practice',
      chapters: 4,
      verses: 196,
      description: 'Patanjali\'s guide to the eight-fold path of yoga',
      difficulty: 'Intermediate',
      audioAvailable: false,
      translationsAvailable: ['English', 'Hindi']
    },
    {
      id: 'vedas',
      title: 'Rig Veda (Selections)',
      sanskrit: 'ऋग्वेद',
      category: 'Hymns',
      chapters: 10,
      verses: 'Selected 108',
      description: 'Ancient hymns to the divine forces of nature',
      difficulty: 'Advanced',
      audioAvailable: true,
      translationsAvailable: ['English', 'Hindi']
    },
    {
      id: 'panchatantra',
      title: 'Panchatantra',
      sanskrit: 'पञ्चतन्त्र',
      category: 'Stories',
      chapters: 5,
      verses: 'Various',
      description: 'Moral stories and fables for practical wisdom',
      difficulty: 'Beginner',
      audioAvailable: true,
      translationsAvailable: ['English', 'Hindi', 'Tamil', 'Bengali']
    }
  ];

  const filteredTexts = ancientTexts.filter(text =>
    text.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    text.sanskrit.includes(searchQuery) ||
    text.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <CardTitle>Ancient Sacred Texts</CardTitle>
          <CardDescription>
            Explore the original Sanskrit texts with modern translations and commentary
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTexts.map((text) => (
          <Card key={text.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Book size={20} />
                    {text.title}
                  </CardTitle>
                  <p className="text-2xl text-orange-600 font-medium mt-1">{text.sanskrit}</p>
                </div>
                <Badge className={getDifficultyColor(text.difficulty)}>
                  {text.difficulty}
                </Badge>
              </div>
              <CardDescription>{text.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Category:</span>
                  <p className="text-gray-600">{text.category}</p>
                </div>
                <div>
                  <span className="font-medium">Chapters:</span>
                  <p className="text-gray-600">{text.chapters}</p>
                </div>
                <div>
                  <span className="font-medium">Verses:</span>
                  <p className="text-gray-600">{text.verses}</p>
                </div>
                <div>
                  <span className="font-medium">Audio:</span>
                  <p className="text-gray-600">{text.audioAvailable ? '✓ Available' : '✗ Not yet'}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-sm">Available in:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {text.translationsAvailable.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                  <Book size={16} className="mr-1" />
                  Read
                </Button>
                {text.audioAvailable && (
                  <Button size="sm" variant="outline">
                    <Volume2 size={16} />
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Text Preview */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Featured: Bhagavad Gita Chapter 2, Verse 47</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Sanskrit Original:</h4>
              <p className="text-lg text-orange-700 font-medium">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br/>
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">English Translation:</h4>
              <p className="text-gray-700">
                You have the right to perform your prescribed duty, but not to the fruits of actions. 
                Never consider yourself the cause of the results, nor be attached to not doing your duty.
              </p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Modern Commentary:</h4>
            <p className="text-gray-600">
              This verse teaches the principle of Nishkama Karma - performing one's duty without attachment 
              to results. In modern context, this applies to students focusing on learning rather than grades, 
              professionals dedicating themselves to work excellence rather than just outcomes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AncientTexts;
