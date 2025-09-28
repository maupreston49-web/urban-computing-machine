import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: 'What gear do you provide?',
    answer:
      'We outfit every dog with a reflective harness, GPS tracker, booties when terrain calls for it, and seasonal extras like cooling bandanas or trail coats.',
  },
  {
    question: 'Can pet parents join the adventure?',
    answer:
      'Absolutely! We offer co-treks on weekends. During weekday outings you can follow along via the TrekSnout app with live updates and route maps.',
  },
  {
    question: 'Do you work with reactive or anxious dogs?',
    answer:
      'Yes. Our certified guides introduce new environments gradually using positive reinforcement and small group ratios. We’ll partner with your trainer if you have one.',
  },
  {
    question: 'How does scheduling work?',
    answer:
      'Choose recurring weekly treks or book à la carte adventures. We send confirmations, packing reminders, and estimated return times before each outing.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQs"
          title="Answers before you hit the trail"
          description="Have more questions? Reach out anytime and we’ll set up a quick call to plan your pup’s first trek."
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="rounded-2xl border border-secondary/15 bg-white p-4 md:p-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-secondary">{faq.question}</span>
                  <span className="text-2xl font-semibold text-primary">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-secondary/70">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
