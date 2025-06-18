
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Neo-Gurukul bridges the gap between ancient Indian educational philosophy rooted in 
              <span className="font-semibold text-orange-600"> Sanatan Dharma</span> and modern technological advancement. 
              We believe in nurturing not just academic excellence, but complete human development.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Cultural Reawakening:</span> Reconnect youth with Bharat's spiritual heritage
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">21st-Century Skills:</span> Digital literacy and design thinking capabilities
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Mental Well-being:</span> Prioritize emotional intelligence and holistic growth
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Accessible Dharma:</span> Universal access to sacred knowledge through technology
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-green-500 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-4">Impact Goals</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-sm opacity-90">Students Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Expert Acharyas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Partner Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Value-Based Learning</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
