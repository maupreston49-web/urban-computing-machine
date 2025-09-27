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
import { AssessmentFormProvider } from './contexts/AssessmentFormContext';
import AssessmentForm from './components/AssessmentForm';
import { useAssessmentForm } from './contexts/AssessmentFormContext';
import ImageSection from './components/ImageSection';

function AppContent() {
  const { isFormOpen, closeForm } = useAssessmentForm();

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
      
      {/* First Image - After Hero */}
      <ImageSection
        title="GPS Tracking Technology"
        subtitle="Stay connected to every adventure"
        image={{
          src: "/images/dog-1.jpg",
          alt: "Happy dog with GPS tracker during outdoor adventure",
          caption: "Real-time GPS tracking keeps you connected to every adventure"
        }}
        bgColor="white"
        maxWidth="md"
      />

      <WhyChooseUs />
      
      {/* Second Image - After WhyChooseUs */}
      <ImageSection
        title="Water Adventures"
        subtitle="Building confidence through play"
        image={{
          src: "/images/dog-2.jpg",
          alt: "Two dogs playing in water during adventure mission",
          caption: "Water adventures that build confidence and create lasting memories"
        }}
        bgColor="gray"
        maxWidth="lg"
      />

      <MissionTypes />
      <SpecialPrograms />
      <Facility />
      <ServiceArea />
      <GettingStarted />
      
      {/* Third Image - After GettingStarted */}
      <ImageSection
        title="Adventure Ready"
        subtitle="Professional equipment and focus"
        image={{
          src: "/images/dog-3.jpg",
          alt: "Two focused dogs ready for their next adventure mission",
          caption: "Professional equipment and training for every breed and adventure level"
        }}
        bgColor="white"
        maxWidth="sm"
      />

      <WhyItWorks />
      <FAQ />
      <Footer />
      <AssessmentForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}

function App() {
  return (
    <AssessmentFormProvider>
      <AppContent />
    </AssessmentFormProvider>
  );
}

export default App;