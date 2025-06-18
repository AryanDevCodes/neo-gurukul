
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Knowledge Repository',
      description: 'Ancient texts with commentaries, audio-visual content, and Sanskrit-English resources',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🔐',
      title: 'Role-Based Access',
      description: 'Customized experiences for students, teachers (Acharyas), parents, and administrators',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '🧾',
      title: 'Timetable Engine',
      description: 'Gurukul-inspired daily routines balanced with modern educational requirements',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track moral, emotional, and cognitive development with progressive indicators',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎮',
      title: 'Gamified Values',
      description: 'Achievements tied to real-life Dharma activities like truthfulness and compassion',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌟',
      title: 'Personalized Learning',
      description: 'AI-assisted learning journeys respecting individual pace and learning styles',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology meets ancient wisdom to create a transformative learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
