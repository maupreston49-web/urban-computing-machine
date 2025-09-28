import React from 'react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    quote:
      'Scout comes home centered, tired, and proud after every trek. TrekSnout even sends us scent games to try between outings.',
    author: 'Lina & Scout',
  },
  {
    quote:
      'Our rescue pup was nervous around new environments. The guides eased him in with calm confidence—we saw a huge shift in two weeks.',
    author: 'Amir & Nala',
  },
  {
    quote:
      'The GPS updates and highlight reels are incredible. I feel like I’m along for the adventure even when I’m at work.',
    author: 'Jess & Bodhi',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Trail Notes"
          title="Stories from TrekSnout families"
          description="We love hearing about the afterglow naps, the newfound confidence, and the shared rituals that form after each adventure."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="flex h-full flex-col justify-between rounded-3xl border border-secondary/10 bg-bg p-6">
              <blockquote className="text-sm text-secondary/80">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-secondary">{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
