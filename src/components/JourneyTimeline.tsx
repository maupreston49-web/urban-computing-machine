import React from 'react';
import SectionHeading from './SectionHeading';

const steps = [
  {
    title: 'Meet & Trail Match',
    description: 'Share your pup’s energy level, curiosities, and goals so we can design a balanced trek.',
  },
  {
    title: 'Gear Fitting & Onboarding',
    description: 'We kit your dog with TrekSnout safety gear and run mini confidence drills before departure.',
  },
  {
    title: 'Guided Adventure',
    description: 'Live updates stream to your phone while our guides combine play, training, and exploration.',
  },
  {
    title: 'Field Report & Aftercare',
    description: 'Receive photos, skill highlights, and tailored at-home enrichment tips for the week ahead.',
  },
];

const JourneyTimeline: React.FC = () => {
  return (
    <section id="itinerary" className="bg-bg py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="Every TrekSnout outing follows a proven rhythm"
          description="From onboarding to aftercare, we keep you looped in with real-time updates and clear next steps."
        />
        <ol className="relative border-l border-secondary/20 pl-6 md:pl-10">
          {steps.map((step, index) => (
            <li key={step.title} className="mb-10 last:mb-0">
              <div className="absolute -left-[25px] flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-base font-semibold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-secondary/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JourneyTimeline;
