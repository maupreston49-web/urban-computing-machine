import React from 'react';
import Button from './Button';
import type { FormType } from './FormModal';

interface CallToActionProps {
  onOpenForm: (form: FormType) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenForm }) => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,193,7,0.2),_transparent_65%)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to see your dog light up the trail?</h2>
        <p className="text-base text-white/80">
          Book a complimentary Trail Match session. We’ll learn about your dog, answer questions, and send a personalized adventure plan.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => onOpenForm('scheduleCall')}>Schedule a Call</Button>
          <Button
            variant="ghost"
            className="border border-white/30"
            onClick={() => onOpenForm('downloadBrochure')}
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
