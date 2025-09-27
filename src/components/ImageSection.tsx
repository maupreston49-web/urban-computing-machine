import React from 'react';
import ScrollImage from './ScrollImage';

interface ImageSectionProps {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  className?: string;
  bgColor?: 'white' | 'gray' | 'emerald';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ImageSection({ 
  title, 
  subtitle, 
  image, 
  className = '',
  bgColor = 'white',
  maxWidth = 'md'
}: ImageSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    emerald: 'bg-emerald-50'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  return (
    <div className={`py-16 ${bgClasses[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-lg">
            {subtitle}
          </p>
        </div>
        <ScrollImage
          src={image.src}
          alt={image.alt}
          caption={image.caption}
          className={`${maxWidthClasses[maxWidth]} mx-auto`}
          delay={0}
        />
      </div>
    </div>
  );
}
