import React from 'react';
import { Calendar, Target, Smartphone } from 'lucide-react';
import { useAssessmentForm } from '../../contexts/AssessmentFormContext';

const steps = [
  {
    icon: Calendar,
    number: '1',
    title: 'Book your free assessment',
    description: 'Schedule a consultation to discuss your dog\'s needs and goals'
  },
  {
    icon: Target,
    number: '2',
    title: 'Choose your mission type or program',
    description: 'Select the perfect adventure based on your dog\'s breed, age, and temperament'
  },
  {
    icon: Smartphone,
    number: '3',
    title: 'Get real-time updates',
    description: 'Receive GPS tracking link and detailed post-session progress notes'
  }
];

export default function GettingStarted() {
  const { openForm } = useAssessmentForm();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to give your dog the adventure and training they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="p-3 bg-emerald-100 rounded-full inline-block">
                  <step.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto border-l-4 border-emerald-500">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🐾</span>
              <div className="text-left">
                <p className="text-gray-700 mb-4">
                  Ready to give your dog a mission they'll love? Book your free assessment today.
                </p>
                <button 
                  onClick={openForm}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  Schedule Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}