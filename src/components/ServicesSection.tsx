import React from 'react';
import { Clock, Car, MapPin, Users, HeartPulse, Shield, Home, Stethoscope } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  {
    icon: Clock,
    title: '24/7 Scheduling',
    description: 'Book sessions that fit your life, any time of day',
  },
  {
    icon: Car,
    title: 'Pickup & Drop-off Included',
    description: 'Complete service with transportation for every mission',
  },
  {
    icon: MapPin,
    title: '100-Acre Private Facility',
    description: 'Spring-fed pond for swim training and confidence building',
  },
  {
    icon: Users,
    title: 'Flexible Locations',
    description: 'Neighborhood walks and facility adventures available',
  },
  {
    icon: HeartPulse,
    title: 'Specialized Expertise',
    description: 'High-drive working breeds and complex behavior cases',
  },
  {
    icon: Shield,
    title: 'Real-time GPS Tracking',
    description: 'Live location sharing and updates during every service',
  },
  {
    icon: Home,
    title: 'All-Day Boarding Available',
    description: 'Full facility access with pond, activities, and supervision',
  },
  {
    icon: Stethoscope,
    title: 'Vet Transportation',
    description: 'Convenient pickup and drop-off for vet appointments',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Pet Parents Choose TrekSnout"
          title="Comprehensive dog adventure services with the expertise and facilities your pet deserves"
          description="From flexible scheduling to specialized care, we provide everything your dog needs for safe, enriching adventures."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-3xl border border-secondary/10 bg-gradient-to-br from-bg to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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

export default ServicesSection;
