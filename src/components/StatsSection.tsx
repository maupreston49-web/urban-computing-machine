import React from 'react';

const stats = [
  {
    value: '18',
    label: 'Trail ecosystems explored every month',
  },
  {
    value: '92%',
    label: 'Dogs showing improved recall after 3 treks',
  },
  {
    value: '12',
    label: 'Certified canine guides on staff',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-secondary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Trail-tested results you can track.</h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70 md:text-base">
            Every TrekSnout outing blends enrichment, positive reinforcement, and sensory play. We
            capture data from the field so you can see the progress.
          </p>
        </div>
        <dl className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <dt className="text-3xl font-semibold text-accent">{stat.value}</dt>
              <dd className="mt-3 text-sm text-white/80">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsSection;
