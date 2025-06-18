
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ॐ</span>
              </div>
              <h3 className="text-2xl font-bold">Neo-Gurukul</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Reviving Bharat's wisdom through modern technology. Where Dharma meets Design, 
              and Technology meets Tradition.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                <span>📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                <span>📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                <span>🌐</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Curriculum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Vedic Texts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Sanskrit Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            "यत्र विद्या तत्र धर्म, यत्र धर्म तत्र जय:" - Where there is knowledge, there is righteousness; where there is righteousness, there is victory.
          </p>
          <p className="text-gray-500">
            © 2024 Neo-Gurukul. Crafted with ❤️ for Bharat's Future. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
