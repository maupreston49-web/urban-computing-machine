import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useAssessmentForm } from '../../contexts/AssessmentFormContext';

export default function Hero() {
  const { openForm } = useAssessmentForm();

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            TrekSnout
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 font-semibold mb-3 sm:mb-4 px-2">
            Jacksonville's premier dog adventures that train while they play
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Give your dog a purpose‑filled outing. Every session blends exercise, obedience, 
            and nose‑brain work tailored to breed, age, and temperament — with real‑time GPS 
            location shared during every service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={openForm}
              className="w-full sm:w-auto bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Book Free Assessment
            </button>
            <button className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-50 transition-colors active:bg-emerald-100">
              Learn More
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-sm text-gray-600 mb-8 sm:mb-0">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
              <span>24/7 Scheduling Available</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
              <span>Serving Jacksonville Metro</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white rounded-xl shadow-lg max-w-3xl mx-auto border-l-4 border-amber-400">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">✨</span>
              <p className="text-sm sm:text-base text-gray-700 text-left leading-relaxed">
                Every outing has a clear mission and built‑in obedience refreshers. 
                We bring the tools, toys, and expertise — you enjoy a calmer, happier dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}