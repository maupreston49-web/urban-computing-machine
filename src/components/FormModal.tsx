import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

export type FormType =
  | 'bookTrail'
  | 'planTrek'
  | 'viewRoutes'
  | 'scheduleCall'
  | 'downloadBrochure';

type Field = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  component?: 'textarea';
};

type FormContent = {
  title: string;
  description: string;
  cta: string;
  successMessage: string;
  fields: Field[];
};

const formContent: Record<FormType, FormContent> = {
  bookTrail: {
    title: 'Book a Guided Trail',
    description:
      "Share a few details and we'll match you with the perfect TrekSnout guide and adventure plan.",
    cta: 'Submit Request',
    successMessage:
      'Thanks! Our trail coordinators will reach out shortly with availability and a recommended adventure plan.',
    fields: [
      { label: 'Your Name', name: 'name', placeholder: 'Alex Rivers', required: true },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
      { label: "Dog's Name", name: 'dogName', placeholder: 'Scout', required: true },
      { label: 'Preferred Adventure Date', name: 'date', type: 'date', required: true },
      {
        label: 'Trail Goals',
        name: 'goals',
        component: 'textarea',
        placeholder: 'Tell us about energy level, favorite activities, and any goals for the trek.',
      },
    ],
  },
  planTrek: {
    title: 'Plan Your First Trek',
    description:
      'Let’s tailor the perfect introductory adventure based on your dog’s curiosity, stamina, and comfort.',
    cta: 'Plan My Trek',
    successMessage:
      'Awesome! Expect a curated first-trek itinerary plus recommended prep tips in your inbox soon.',
    fields: [
      { label: 'Your Name', name: 'name', placeholder: 'Jordan Blake', required: true },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
      { label: "Dog's Age", name: 'age', placeholder: '2 years' },
      {
        label: 'What excites your dog?',
        name: 'interests',
        component: 'textarea',
        placeholder: 'Scavenger hunts, water play, agility challenges…',
      },
    ],
  },
  viewRoutes: {
    title: 'View Sample Routes',
    description:
      'We’ll send over a curated pack of TrekSnout routes that match your pup’s pace and personality.',
    cta: 'Send Me Routes',
    successMessage:
      'Routes are on the way! Check your inbox for curated adventures and pro tips.',
    fields: [
      { label: 'Your Name', name: 'name', placeholder: 'Taylor Fox' },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
      {
        label: 'Preferred Adventure Style',
        name: 'style',
        placeholder: 'Scenic strolls, high-energy hikes, scent work, etc.',
      },
    ],
  },
  scheduleCall: {
    title: 'Schedule a Trek Planning Call',
    description:
      'Pick a time that works for you and a TrekSnout guide will hop on a call to answer every question.',
    cta: 'Request Call',
    successMessage:
      'Thanks! We’ll follow up shortly with call options tailored to your schedule.',
    fields: [
      { label: 'Your Name', name: 'name', placeholder: 'Morgan Lee', required: true },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
      { label: 'Phone', name: 'phone', type: 'tel', placeholder: '(555) 123-4567' },
      {
        label: 'Preferred Call Window',
        name: 'availability',
        placeholder: 'Weekday evenings, weekend mornings, etc.',
      },
    ],
  },
  downloadBrochure: {
    title: 'Download the TrekSnout Brochure',
    description:
      'Drop your details and we’ll email a brochure packed with program highlights and pricing.',
    cta: 'Email Me the Brochure',
    successMessage:
      'Your brochure is on the way! Keep an eye on your inbox for a download link and extra resources.',
    fields: [
      { label: 'Your Name', name: 'name', placeholder: 'Riley Summers' },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com', required: true },
      {
        label: 'Tell us what you’re curious about',
        name: 'questions',
        component: 'textarea',
        placeholder: 'Training goals, travel logistics, pricing tiers…',
      },
    ],
  },
};

interface FormModalProps {
  formType: FormType | null;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ formType, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!formType) {
      return undefined;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = originalOverflow;
    };
  }, [formType, onClose]);

  useEffect(() => {
    if (formType) {
      setSubmitted(false);
    }
  }, [formType]);

  const content = useMemo(() => (formType ? formContent[formType] : null), [formType]);

  if (!formType || !content) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/50 px-4 py-6 backdrop-blur">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formType}-title`}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-secondary/10 bg-bg px-6 py-5">
          <div>
            <h2 id={`${formType}-title`} className="text-xl font-semibold text-secondary">
              {content.title}
            </h2>
            <p className="mt-1 text-sm text-secondary/70">{content.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-secondary/60 transition hover:bg-secondary/10 hover:text-secondary"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          {submitted ? (
            <div className="space-y-6 text-center">
              <p className="text-base text-secondary">{content.successMessage}</p>
              <Button className="w-full" onClick={onClose}>
                Close
              </Button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {content.fields.map((field) => {
                const commonProps = {
                  id: field.name,
                  name: field.name,
                  required: field.required,
                  placeholder: field.placeholder,
                  className:
                    'w-full rounded-2xl border border-secondary/10 bg-white px-4 py-3 text-sm text-secondary shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                };

                return (
                  <label key={field.name} className="block text-left text-sm font-medium text-secondary">
                    <span className="mb-1 block">{field.label}</span>
                    {field.component === 'textarea' ? (
                      <textarea rows={4} {...commonProps} />
                    ) : (
                      <input type={field.type ?? 'text'} {...commonProps} />
                    )}
                  </label>
                );
              })}
              <Button type="submit" className="w-full">
                {content.cta}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
