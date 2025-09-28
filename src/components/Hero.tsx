import React from 'react';
import Button from './Button';
import type { FormType } from './FormModal';

interface HeroProps {
  onOpenForm: (form: FormType) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
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
            and forge unbreakable bonds between pups and their people. From sunrise river walks to
            moonlit ridge hikes, every journey is tailored to your dog&apos;s personality.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="shadow-primary/30" onClick={() => onOpenForm('planTrek')}>
              Plan Your First Trek
            </Button>
            <Button
              variant="ghost"
              className="border border-white/30"
              onClick={() => onOpenForm('viewRoutes')}
            >
              View Sample Routes
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
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-bg p-6 text-secondary shadow-2xl shadow-primary/10">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
            <div className="relative space-y-4">
              <h3 className="text-xl font-semibold">Today&apos;s Feature Route</h3>
              <p className="text-sm text-secondary/70">
                The Riverlight Loop combines shaded shoreline strolls, obstacle play, and scent-based
                hide &amp; seek stations. Perfect for high-energy pups ready to level up.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  4.5 mile guided trek with agility intervals
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  Real-time GPS updates &amp; biometrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  Post-adventure skill recap for pet parents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
