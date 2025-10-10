import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    dogEnergyLevel: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    specialNeeds: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Netlify Forms
      const formDataToSubmit = new FormData();
      
      // Add form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });
      
      // Add form name for Netlify
      formDataToSubmit.append('form-name', 'trail-match-booking');
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString()
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            dogName: '',
            dogBreed: '',
            dogAge: '',
            dogEnergyLevel: '',
            preferredDate: '',
            preferredTime: '',
            location: '',
            specialNeeds: '',
            goals: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // You could add error handling UI here
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary">Book Your Trail Match Session</h2>
              <p className="text-sm text-secondary/70">Let's create the perfect adventure for your dog</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary/10 transition-colors"
            aria-label="Close form"
            title="Close form"
          >
            <X className="h-4 w-4 text-secondary/70" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Booking Confirmed!</h3>
              <p className="text-secondary/70">We'll contact you within 24 hours to schedule your Trail Match session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" name="trail-match-booking" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="trail-match-booking" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Your Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-secondary mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Jacksonville area"
                    />
                  </div>
                </div>
              </div>

              {/* Dog Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary">About Your Dog</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="dogName" className="block text-sm font-medium text-secondary mb-1">
                      Dog's Name *
                    </label>
                    <input
                      type="text"
                      id="dogName"
                      name="dogName"
                      value={formData.dogName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your dog's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="dogBreed" className="block text-sm font-medium text-secondary mb-1">
                      Breed
                    </label>
                    <input
                      type="text"
                      id="dogBreed"
                      name="dogBreed"
                      value={formData.dogBreed}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Breed or mix"
                    />
                  </div>
                  <div>
                    <label htmlFor="dogAge" className="block text-sm font-medium text-secondary mb-1">
                      Age
                    </label>
                    <select
                      id="dogAge"
                      name="dogAge"
                      value={formData.dogAge}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select age</option>
                      <option value="puppy">Puppy (under 1 year)</option>
                      <option value="young">Young Adult (1-3 years)</option>
                      <option value="adult">Adult (3-7 years)</option>
                      <option value="senior">Senior (7+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dogEnergyLevel" className="block text-sm font-medium text-secondary mb-1">
                      Energy Level
                    </label>
                    <select
                      id="dogEnergyLevel"
                      name="dogEnergyLevel"
                      value={formData.dogEnergyLevel}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select energy level</option>
                      <option value="low">Low - Calm and relaxed</option>
                      <option value="moderate">Moderate - Active but not hyper</option>
                      <option value="high">High - Very active and energetic</option>
                      <option value="very-high">Very High - Extremely energetic</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary">Preferences</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-secondary mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-secondary mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (6-10 AM)</option>
                      <option value="midday">Midday (10 AM-2 PM)</option>
                      <option value="afternoon">Afternoon (2-6 PM)</option>
                      <option value="evening">Evening (6-8 PM)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-secondary mb-1">
                    What are your goals for your dog?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g., Build confidence, improve recall, socialization, exercise..."
                  />
                </div>
                <div>
                  <label htmlFor="specialNeeds" className="block text-sm font-medium text-secondary mb-1">
                    Special Needs or Considerations
                  </label>
                  <textarea
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    rows={2}
                    className="w-full rounded-lg border border-secondary/20 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Any health conditions, fears, or special requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-3 pt-6 border-t border-secondary/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-sm font-medium text-secondary/70 hover:text-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    'Book Trail Match Session'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
