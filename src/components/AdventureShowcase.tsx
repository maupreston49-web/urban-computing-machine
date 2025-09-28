import React from 'react';
import SectionHeading from './SectionHeading';

const adventures = [
  {
    title: 'Sunrise Scout',
    description: 'Golden hour trailblazing with mindful scent mapping and obedience refreshers.',
    color: 'from-primary/15 via-bg to-white',
  },
  {
    title: 'River Dash',
    description: 'Splashy creek intervals paired with hydrotherapy stretches for joint health.',
    color: 'from-accent/20 via-bg to-white',
  },
  {
    title: 'Summit Sprint',
    description: 'Elevation training, agility obstacles, and confidence drills for sporty pups.',
    color: 'from-secondary/10 via-bg to-white',
  },
];

const AdventureShowcase: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Signature Treks"
          title="Pick your pup&apos;s vibe"
          description="We swap routes weekly to keep experiences fresh while focusing on skill building, sensory exploration, and pure dog joy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {adventures.map((adventure) => (
            <article
              key={adventure.title}
              className={`group relative overflow-hidden rounded-3xl border border-secondary/10 bg-gradient-to-br ${adventure.color} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="absolute -right-12 top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:scale-110" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-secondary">{adventure.title}</h3>
                <p className="mt-3 text-sm text-secondary/70">{adventure.description}</p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  See itinerary
                  <span className="ml-2 text-lg">→</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureShowcase;
