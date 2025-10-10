import React, { useState } from 'react';
import Button from './Button';
import WeatherWidget from './WeatherWidget';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,150,136,0.25),_transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Trailblaze with TrekSnout
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Adventures built for curious canines and their favorite humans.
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              TrekSnout crafts guided outdoor experiences that spark confidence, sharpen instincts,
              and forge unbreakable bonds between pups and their people. Check today&apos;s weather
              conditions to plan the perfect adventure for your furry friend.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="shadow-primary/30" onClick={() => setIsFormOpen(true)}>
                Plan Your First Trek
              </Button>
              <Button variant="ghost" className="border border-white/30">
                Check Weather Conditions
              </Button>
            </div>
            <dl className="grid grid-cols-2 gap-6 pt-6 sm:max-w-lg">
              <div>
                <dt className="text-sm text-white/60">Miles logged this season</dt>
                <dd className="text-2xl font-semibold">1,240+</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Happy trail waggers</dt>
                <dd className="text-2xl font-semibold">310+</dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <WeatherWidget />
          </div>
        </div>
      </section>
      
      <BookingForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default Hero;
