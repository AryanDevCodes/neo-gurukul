
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
