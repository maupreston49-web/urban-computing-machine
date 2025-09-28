import React from 'react';

const partners = ['Trail & Paw Co.', 'Evergreen Parks', 'Summit Snacks', 'AquaPup Gear'];

const Partners: React.FC = () => {
  return (
    <section className="bg-bg py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
          Trusted by outdoor outfitters
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-medium text-secondary/60">
          {partners.map((partner) => (
            <span key={partner} className="whitespace-nowrap">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
