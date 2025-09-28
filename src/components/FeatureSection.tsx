import React from 'react';
import { Compass, HeartPulse, MapPin, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: MapPin,
    title: 'GPS Tracked Routes',
    description:
      'Follow every step from your phone with live updates, photos, and fun field notes from your guide.',
  },
  {
    icon: Compass,
    title: 'Custom Adventure Plans',
    description:
      'We study your dog’s energy, interests, and training goals to build the perfect itinerary for each outing.',
  },
  {
    icon: HeartPulse,
    title: 'Health-Aware Guides',
    description:
      'Certified handlers monitor hydration, heart rate, and recovery so every trek ends on a high note.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-First Gear',
    description:
      'Trail-tested boots, reflective harnesses, and trail snacks are included—no packing list required.',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section id="adventures" className="bg-bg py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Adventure ops designed for wagging tails"
          description="Whether your pup craves splashy creek sprints or mindful forest sniffaris, TrekSnout brings the right mix of thrill, enrichment, and training finesse."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-3xl border border-secondary/10 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary">{title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
