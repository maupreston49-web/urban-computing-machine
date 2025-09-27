import React from 'react';
import { Trees, Waves, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Trees,
    title: '100-acre private property',
    description: 'Safe, off-street adventures in a controlled environment'
  },
  {
    icon: Waves,
    title: 'Spring-fed pond',
    description: 'Natural swimming area for confidence work and exercise'
  },
  {
    icon: Shield,
    title: 'Controlled environments',
    description: 'Perfect spaces for decompression and specialized behavior work'
  }
];

export default function Facility() {
  return (
    <section id="facility" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Facility Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our private facility provides the perfect environment for safe, effective dog training and adventures.
          </p>
          <div className="mt-4 inline-block bg-emerald-100 px-4 py-2 rounded-full">
            <span className="text-emerald-800 font-semibold">All-Day Boarding Packages Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-100 rounded-full">
                  <highlight.icon className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">All-Day Boarding Package</h3>
            <p className="text-gray-600 mb-6">
              Your dog enjoys a full day at our private 100-acre facility with access to our spring-fed pond, 
              structured activities, and supervised socialization with other dogs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                <span>Supervised pond activities</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                <span>Structured play sessions</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                <span>Mental stimulation activities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white p-6 rounded-xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&h=400" 
              alt="Dogs playing at our facility" 
              className="rounded-lg w-full max-w-2xl h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}