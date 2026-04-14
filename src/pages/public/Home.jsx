import React from 'react';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import FeaturesSection from './components/FeaturesSection';
import CtaSection from './components/CtaSection';

const Home = () => {
  return (
    <div className='bg-white text-text-primary'>
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};

export default Home;
