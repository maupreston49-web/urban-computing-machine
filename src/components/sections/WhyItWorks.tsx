import React from 'react';
import { Brain, Clock, Briefcase } from 'lucide-react';

const principles = [
  {
    icon: Brain,
    title: 'Mental Needs Matter',
    description: 'Most behavior challenges trace back to unmet mental needs'
  },
  {
    icon: Clock,
    title: 'Efficient Mental Exercise',
    description: '15 minutes of nose work can equal an hour of walking in mental fatigue'
  },
  {
    icon: Briefcase,
    title: 'Working Breeds Need Jobs',
    description: 'Structured missions channel that drive productively'
  }
];

export default function WhyItWorks() {
  return (
    <section id="about" className="py-16 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why It Works
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our approach is based on understanding canine psychology and meeting dogs' fundamental needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-500 rounded-full">
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="opacity-90">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}