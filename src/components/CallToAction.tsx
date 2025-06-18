
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  const userTypes = [
    {
      title: 'Students',
      description: 'Begin your journey of holistic learning',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
      action: 'Start Learning'
    },
    {
      title: 'Teachers (Acharyas)',
      description: 'Guide the next generation with wisdom',
      icon: '👨‍🏫',
      color: 'from-green-500 to-green-600',
      action: 'Join as Acharya'
    },
    {
      title: 'Parents',
      description: 'Support your child\'s complete development',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-purple-500 to-purple-600',
      action: 'Enroll Child'
    },
    {
      title: 'Institutions',
      description: 'Partner with us to transform education',
      icon: '🏛️',
      color: 'from-orange-500 to-orange-600',
      action: 'Partner With Us'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-100 via-white to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the movement to revive Bharatiya knowledge systems and create tomorrow's enlightened leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {userTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:-translate-y-4">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <Button 
                  className={`w-full bg-gradient-to-r ${type.color} hover:shadow-lg transition-all duration-300 text-white font-semibold`}
                >
                  {type.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Education?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students, teachers, and parents who are already experiencing the Neo-Gurukul difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
