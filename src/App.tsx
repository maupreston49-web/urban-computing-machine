import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import FeatureSection from './components/FeatureSection';
import AdventureShowcase from './components/AdventureShowcase';
import StatsSection from './components/StatsSection';
import JourneyTimeline from './components/JourneyTimeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-secondary">
      <Header />
      <main>
        <Hero />
        <Partners />
        <FeatureSection />
        <AdventureShowcase />
        <StatsSection />
        <JourneyTimeline />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
