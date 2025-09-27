import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import MissionTypes from './components/sections/MissionTypes';
import SpecialPrograms from './components/sections/SpecialPrograms';
import Facility from './components/sections/Facility';
import ServiceArea from './components/sections/ServiceArea';
import GettingStarted from './components/sections/GettingStarted';
import WhyItWorks from './components/sections/WhyItWorks';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
      <WhyChooseUs />
      <MissionTypes />
      <SpecialPrograms />
      <Facility />
      <ServiceArea />
      <GettingStarted />
      <WhyItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;