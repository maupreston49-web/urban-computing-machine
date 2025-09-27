import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Riverside',
  'Ortega',
  'San Marco',
  'Beaches',
  'Ponte Vedra',
  'Orange Park',
  'Fernandina Beach'
];

export default function ServiceArea() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Jacksonville metro including:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center bg-emerald-50 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                <span className="text-emerald-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gray-50 p-6 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1573160813959-7673e85d9b24?auto=format&fit=crop&w=600&h=400" 
              alt="Jacksonville area map" 
              className="rounded-lg w-full max-w-lg h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}