import React from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="uppercase tracking-[0.3em] text-xs font-semibold text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-secondary">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-secondary/70">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
