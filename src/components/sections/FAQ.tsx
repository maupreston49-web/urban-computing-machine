import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do you handle puppies and seniors?',
    answer: 'Yes — missions are tailored by age and ability. We have special gentle exploration programs for seniors and age-appropriate activities for puppies.'
  },
  {
    question: 'Are you insured?',
    answer: 'Yes — fully licensed and insured for your peace of mind and your pet\'s safety.'
  },
  {
    question: 'Can you coordinate with my trainer or vet?',
    answer: 'Absolutely — just loop us in after booking. We work collaboratively with your existing care team to ensure consistent training approaches.'
  },
  {
    question: 'How does the GPS tracking work?',
    answer: 'You\'ll receive a live GPS link before each session starts, allowing you to track your dog\'s adventure in real-time. You\'ll also get detailed progress notes after each session.'
  },
  {
    question: 'What makes TrekSnout different from regular dog walking?',
    answer: 'Every outing has a specific mission with built-in training elements. We focus on mental stimulation, obedience reinforcement, and breed-specific activities rather than just exercise.'
  },
  {
    question: 'What does the all-day boarding package include?',
    answer: 'Your dog spends the full day at our private 100-acre facility with access to our spring-fed pond, structured activities, supervised socialization, and mental stimulation exercises. Perfect for busy days when your dog needs more than a walk.'
  },
  {
    question: 'Do you provide transportation to vet appointments?',
    answer: 'Yes! Simply schedule your vet appointment and we\'ll handle pickup, transportation, and drop-off. Just coordinate with us after booking your appointment.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Find answers to common questions about our services and approach.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-start sm:items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-2 leading-relaxed">{faq.question}</span>
                <div className="flex-shrink-0 ml-2">
                  {openIndex === index ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}