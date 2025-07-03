
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const EnhancedFeatures = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const features = [
    {
      icon: '📚',
      title: 'AI-Powered Knowledge Repository',
      description: 'Ancient texts with AI-generated insights, audio-visual content, and personalized Sanskrit-English resources',
      color: 'from-orange-500 to-red-500',
      category: 'knowledge',
      tags: ['AI', 'Ancient Texts', 'Multilingual'],
      benefits: ['24/7 Access', 'Voice Navigation', 'Offline Mode']
    },
    {
      icon: '🛡️',
      title: 'Veerata Vidya Program',
      description: 'Complete self-defense training combining Dhanurveda principles with modern martial arts',
      color: 'from-red-500 to-pink-500',
      category: 'physical',
      tags: ['Self-Defense', 'Traditional', 'Character Building'],
      benefits: ['Certified Training', 'Safety First', 'Confidence Building']
    },
    {
      icon: '🔐',
      title: 'Smart Role-Based Access',
      description: 'AI-customized experiences for students, Acharyas, parents, and administrators with predictive features',
      color: 'from-blue-500 to-indigo-500',
      category: 'technology',
      tags: ['Security', 'Personalization', 'Analytics'],
      benefits: ['Privacy Protected', 'Custom Dashboards', 'Real-time Updates']
    },
    {
      icon: '🕐',
      title: 'Vedic Time Management Engine',
      description: 'Gurukul-inspired daily routines optimized with modern productivity science and circadian rhythms',
      color: 'from-green-500 to-emerald-500',
      category: 'lifestyle',
      tags: ['Productivity', 'Health', 'Balance'],
      benefits: ['Better Focus', 'Stress Reduction', 'Peak Performance']
    },
    {
      icon: '📊',
      title: 'Holistic Analytics Dashboard',
      description: 'Track moral, emotional, cognitive, and physical development with AI-powered insights and recommendations',
      color: 'from-purple-500 to-pink-500',
      category: 'assessment',
      tags: ['Analytics', 'Growth Tracking', 'AI Insights'],
      benefits: ['Progress Visualization', 'Predictive Analysis', 'Personalized Goals']
    },
    {
      icon: '🎮',
      title: 'Gamified Dharma Values',
      description: 'Interactive achievements tied to real-life Dharma activities with community challenges and rewards',
      color: 'from-yellow-500 to-orange-500',
      category: 'engagement',
      tags: ['Gamification', 'Values', 'Community'],
      benefits: ['Motivation Boost', 'Peer Learning', 'Real-world Impact']
    },
    {
      icon: '🌟',
      title: 'AI Learning Companion',
      description: 'Personalized AI tutor respecting individual pace, learning styles, and cultural background',
      color: 'from-teal-500 to-cyan-500',
      category: 'technology',
      tags: ['AI Tutor', 'Personalized', 'Adaptive'],
      benefits: ['24/7 Support', 'Instant Feedback', 'Cultural Sensitivity']
    },
    {
      icon: '🌍',
      title: 'Global Gurukul Network',
      description: 'Connect with students and teachers worldwide while preserving local cultural traditions',
      color: 'from-indigo-500 to-purple-500',
      category: 'community',
      tags: ['Global', 'Networking', 'Cultural Exchange'],
      benefits: ['World Connections', 'Cultural Learning', 'Language Practice']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Features', icon: '🌟' },
    { id: 'knowledge', name: 'Knowledge', icon: '📚' },
    { id: 'technology', name: 'Technology', icon: '🔧' },
    { id: 'physical', name: 'Physical', icon: '🛡️' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🕐' },
    { id: 'assessment', name: 'Assessment', icon: '📊' },
    { id: 'engagement', name: 'Engagement', icon: '🎮' },
    { id: 'community', name: 'Community', icon: '🌍' }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-white via-orange-25 to-green-25">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge technology meets ancient wisdom to create a transformative learning ecosystem 
            that prepares students for both spiritual growth and modern challenges
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${activeCategory === category.id 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                : 'border-orange-300 hover:bg-orange-50'
              } transition-all duration-300`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white transform hover:-translate-y-3 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Key Benefits:</h4>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">Experience the Future of Education</h3>
            <p className="mb-6 opacity-90">Join thousands of students already transforming their lives</p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Start Your Journey Today →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;
