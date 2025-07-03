
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveHero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [stats, setStats] = useState({ students: 0, teachers: 0, courses: 0 });

  const inspirationalQuotes = [
    {
      text: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः",
      translation: "The Guru is Brahma, Vishnu, and Maheshwara",
      author: "Guru Stotra"
    },
    {
      text: "विद्या ददाति विनयं विनयाद्याति पात्रताम्",
      translation: "Knowledge bestows humility, from humility comes worthiness",
      author: "Hitopadesha"
    },
    {
      text: "सा विद्या या विमुक्तये",
      translation: "That is knowledge which liberates",
      author: "Vishnu Purana"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate stats on load
    const timer = setTimeout(() => {
      setStats({ students: 10000, teachers: 500, courses: 150 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced Background with Moving Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-transparent to-green-100/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 bg-green-200 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Enhanced Logo with Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
              <span className="text-white text-5xl font-bold">ॐ</span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-green-400 rounded-full opacity-20 blur animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent leading-tight animate-fade-in">
          Neo-Gurukul
        </h1>
        
        {/* Dynamic Quote Section */}
        <div className="mb-6 h-20 flex items-center justify-center">
          <div key={currentQuote} className="animate-fade-in text-center max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-800 mb-2 font-semibold">
              {inspirationalQuotes[currentQuote].text}
            </p>
            <p className="text-lg text-gray-600 italic">
              {inspirationalQuotes[currentQuote].translation}
            </p>
            <p className="text-sm text-orange-600 mt-1">
              - {inspirationalQuotes[currentQuote].author}
            </p>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where Dharma meets Design. Where Technology meets Tradition. 
          An innovative educational platform blending ancient Indian wisdom with 21st-century learning.
        </p>

        {/* Interactive Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
            <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.students.toLocaleString()}+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.teachers}+</div>
            <div className="text-sm text-gray-600">Acharyas</div>
          </div>
          <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
            <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.courses}+</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
            asChild
          >
            <Link to="/register">🚀 Begin Your Journey</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-10 py-5 text-lg font-semibold transition-all duration-300 animate-fade-in"
            onClick={scrollToFeatures}
          >
            📚 Explore Curriculum
          </Button>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Hybrid Learning</h3>
            <p className="text-sm text-gray-600">STEM + Vedic Wisdom</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🧘‍♂️</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Mind-Body Unity</h3>
            <p className="text-sm text-gray-600">Yoga & Meditation</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Veerata Vidya</h3>
            <p className="text-sm text-gray-600">Self-Defense & Values</p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🌐</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Global Access</h3>
            <p className="text-sm text-gray-600">Learn Anywhere</p>
          </div>
        </div>

        <button 
          onClick={scrollToFeatures}
          className="animate-bounce text-orange-500 hover:text-orange-600 transition-colors duration-300"
          aria-label="Scroll to features"
        >
          <ArrowDown size={36} />
        </button>
      </div>
    </section>
  );
};

export default InteractiveHero;
