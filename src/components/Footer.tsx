import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-2 text-sm">
          <p className="text-base font-semibold">TrekSnout</p>
          <p className="text-white/70">Trail-crafted adventures for dogs in love with the wild.</p>
          <p className="text-white/50">© {new Date().getFullYear()} TrekSnout. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="mailto:hello@treksnout.com" className="hover:text-white">
            hello@treksnout.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
