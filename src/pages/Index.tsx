
import React from 'react';
import InteractiveHero from '../components/InteractiveHero';
import EnhancedFeatures from '../components/EnhancedFeatures';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <InteractiveHero />
      <EnhancedFeatures />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
