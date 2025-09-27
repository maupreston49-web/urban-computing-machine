import React from 'react';
import { Zap, Search, Route, Heart, Clock } from 'lucide-react';

const missions = [
  {
    icon: Zap,
    title: 'High-Drive Missions',
    description: 'Leadership tasks and structured challenges that give working breeds a job',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Search,
    title: 'Hunt & Track Adventures',
    description: 'Scent games and search patterns that deliver deep mental fatigue',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Route,
    title: 'Traditional Walks',
    description: 'Purposeful, structured neighborhood sessions for any dog',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Heart,
    title: 'Gentle Explorations',
    description: 'Low-impact enrichment for seniors or shy pups',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Clock,
    title: 'All-Day Boarding',
    description: 'Full day at our 100-acre facility with pond access, structured activities, and socialization',
    color: 'bg-amber-100 text-amber-600'
  }
];

export default function MissionTypes() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Signature Mission Types
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Every dog has unique needs. Our mission-based approach ensures your pet gets the right type of adventure and training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className={`p-3 sm:p-4 rounded-full ${mission.color} flex-shrink-0`}>
                  <mission.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{mission.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-emerald-50 p-4 sm:p-6 lg:p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">All-Day Boarding Package</h4>
                <p className="text-sm sm:text-base text-gray-600">Full day at our private facility with pond access, structured activities, and supervised socialization</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Vet Transportation</h4>
                <p className="text-sm sm:text-base text-gray-600">Pick up, transport to your scheduled vet appointment, and drop off service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}