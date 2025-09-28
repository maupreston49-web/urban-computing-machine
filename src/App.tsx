import React, { useState } from 'react';
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
import FormModal, { FormType } from './components/FormModal';

const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);

  const handleOpenForm = (form: FormType) => {
    setActiveForm(form);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-bg text-secondary">
      <Header onOpenForm={handleOpenForm} />
      <main>
        <Hero onOpenForm={handleOpenForm} />
        <Partners />
        <FeatureSection />
        <AdventureShowcase />
        <StatsSection />
        <JourneyTimeline />
        <Testimonials />
        <FAQ />
        <CallToAction onOpenForm={handleOpenForm} />
      </main>
      <Footer />
      <FormModal formType={activeForm} onClose={handleCloseForm} />
    </div>
  );
};

export default App;
