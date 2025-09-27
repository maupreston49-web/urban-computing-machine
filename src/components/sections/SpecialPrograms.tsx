import React from 'react';
import { Gift, Users, Brain } from 'lucide-react';

const programs = [
  {
    icon: Gift,
    title: 'Thinking of Adopting?',
    subtitle: 'Free 10 days of basic command training and decompression for newly adopted dogs.',
    features: [
      'Foundation commands: sit, down, stay, place, recall',
      'Leash manners and calm greetings',
      'Confidence‑building exposures in low‑stress environments',
      'Caregiver coaching with simple daily homework',
      'A customized starter plan after the initial assessment',
      'Rescue proof required'
    ],
    buttonText: 'Learn More About Adoption Program',
    accent: 'emerald'
  },
  {
    icon: Users,
    title: 'Current Fosters',
    subtitle: 'Current fosters receive one free day per week of walks and mission‑based stimulation training.',
    features: [],
    buttonText: 'Foster Program Details',
    accent: 'blue'
  },
  {
    icon: Brain,
    title: 'Specialized Behavior Plan',
    subtitle: 'Designed for dogs with behavioral issues such as reactivity, anxiety, fear, or over‑arousal.',
    features: [
      'Training walks with controlled setups and threshold‑aware routing',
      'Catered environments: quiet, low‑stimulus spaces or structured exposure as appropriate',
      'Focus areas: disengagement, impulse control, calm defaults, and recovery',
      'Handler coaching and weekly progress notes',
      'Coordination with your vet or trainer if requested',
      'Pricing: by quote after consult'
    ],
    buttonText: 'Schedule Behavior Consultation',
    accent: 'purple'
  }
];

export default function SpecialPrograms() {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored programs for specific situations and needs, from new adoptions to complex behavioral challenges.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-${program.accent}-100`}>
                      <program.icon className={`h-6 w-6 text-${program.accent}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{program.subtitle}</p>
                  <button className={`bg-${program.accent}-600 text-white px-6 py-2 rounded-lg hover:bg-${program.accent}-700 transition-colors`}>
                    {program.buttonText}
                  </button>
                </div>
                
                {program.features.length > 0 && (
                  <div className="lg:w-2/3">
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className={`w-2 h-2 bg-${program.accent}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}