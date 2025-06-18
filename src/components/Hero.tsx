
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-green-100/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff9933" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Symbol */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white text-4xl font-bold">ॐ</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent leading-tight">
          Neo-Gurukul
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
          Reviving Bharat's Wisdom through Modern Technology
        </p>
        
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where Dharma meets Design. Where Technology meets Tradition. 
          An innovative educational platform blending ancient Indian wisdom with 21st-century learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-2xl">🧠</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Hybrid Curriculum</h3>
            <p className="text-sm text-gray-600">STEM + Vedic Knowledge + Values</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">🧘‍♂️</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Mind-Body Integration</h3>
            <p className="text-sm text-gray-600">Yoga, Meditation & Holistic Growth</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🌐</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Accessible Platform</h3>
            <p className="text-sm text-gray-600">Web & Mobile, Inclusive Learning</p>
          </div>
        </div>

        <button 
          onClick={scrollToFeatures}
          className="mt-12 animate-bounce text-orange-500 hover:text-orange-600 transition-colors duration-300"
          aria-label="Scroll to features"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
