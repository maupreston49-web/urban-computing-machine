import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, Dog, Clock, MessageSquare } from 'lucide-react';

interface AssessmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssessmentForm({ isOpen, onClose }: AssessmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Schedule Free Assessment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close form"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment Request Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest! We'll contact you within 24 hours to schedule your free assessment.
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Tell us about your dog and we'll create a personalized assessment plan. 
                  This consultation helps us understand your dog's unique needs and goals.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-emerald-800">
                      <p className="font-medium mb-1">What to expect:</p>
                      <ul className="space-y-1 text-emerald-700">
                        <li>• 15-20 minute phone consultation</li>
                        <li>• Discussion of your dog's behavior and needs</li>
                        <li>• Personalized mission recommendations</li>
                        <li>• No obligation to book services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <form
                name="assessment-request"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="form-name" value="assessment-request" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                {/* Owner Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="h-5 w-5 text-emerald-600" />
                    Owner Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="(904) 555-0123"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address (for service area verification)
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="123 Main St, Jacksonville, FL 32201"
                      />
                    </div>
                  </div>
                </div>

                {/* Dog Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Dog className="h-5 w-5 text-emerald-600" />
                    Dog Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-1">
                        Dog's Name *
                      </label>
                      <input
                        type="text"
                        id="dogName"
                        name="dogName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Buddy"
                      />
                    </div>
                    <div>
                      <label htmlFor="dogAge" className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        id="dogAge"
                        name="dogAge"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="3 years"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dogBreed" className="block text-sm font-medium text-gray-700 mb-1">
                        Breed
                      </label>
                      <input
                        type="text"
                        id="dogBreed"
                        name="dogBreed"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Golden Retriever"
                      />
                    </div>
                    <div>
                      <label htmlFor="dogWeight" className="block text-sm font-medium text-gray-700 mb-1">
                        Weight
                      </label>
                      <input
                        type="text"
                        id="dogWeight"
                        name="dogWeight"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="65 lbs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dogTemperament" className="block text-sm font-medium text-gray-700 mb-1">
                      Temperament & Behavior Notes
                    </label>
                    <textarea
                      id="dogTemperament"
                      name="dogTemperament"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Describe your dog's personality, energy level, any behavioral concerns, or special needs..."
                    />
                  </div>
                </div>

                {/* Service Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    Service Preferences
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What type of service are you most interested in? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="high-drive-missions"
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">High-Drive Missions (for energetic dogs)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="hunt-track"
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">Hunt & Track Adventures</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="traditional-walks"
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">Traditional Walks</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="gentle-explorations"
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">Gentle Explorations (for senior/shy dogs)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          value="not-sure"
                          className="mr-3 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">Not sure - would like recommendations</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Any specific questions, concerns, or goals for your dog's training and adventures..."
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Submitting...
                      </>
                    ) : (
                      'Request Free Assessment'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
