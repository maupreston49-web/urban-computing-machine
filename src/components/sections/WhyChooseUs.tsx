import React from 'react';
import { Clock, Truck, Waves, MapPin, Award, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Scheduling',
    description: 'Book sessions that fit your life, any time of day'
  },
  {
    icon: Truck,
    title: 'Pickup & Drop-off Included',
    description: 'Complete service with transportation for every mission'
  },
  {
    icon: Waves,
    title: '100-Acre Private Facility',
    description: 'Spring-fed pond for swim and confidence work'
  },
  {
    icon: MapPin,
    title: 'Flexible Locations',
    description: 'Neighborhood walks and facility adventures available'
  },
  {
    icon: Award,
    title: 'Specialized Expertise',
    description: 'High-drive working breeds and complex behavior cases'
  },
  {
    icon: Smartphone,
    title: 'Real-time GPS Tracking',
    description: 'Live location sharing during every service'
  },
  {
    icon: Clock,
    title: 'All-Day Boarding Available',
    description: 'Full facility access with pond, activities, and supervision'
  },
  {
    icon: Truck,
    title: 'Vet Transportation',
    description: 'Convenient pickup and drop-off for vet appointments'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Why Pet Parents Choose TrekSnout
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We provide comprehensive dog adventure services with the expertise and facilities your pet deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-emerald-100 rounded-full flex-shrink-0">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 ml-3 sm:ml-4">{feature.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}