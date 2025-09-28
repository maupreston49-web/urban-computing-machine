import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'Adventures', href: '#adventures' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-secondary/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-secondary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            TS
          </span>
          TrekSnout
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-secondary/80 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-secondary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Book a Trail</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-secondary/20 p-2 text-secondary md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-secondary/10 bg-bg px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-secondary/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 hover:bg-primary/10 hover:text-secondary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="mt-6 w-full">Book a Trail</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
