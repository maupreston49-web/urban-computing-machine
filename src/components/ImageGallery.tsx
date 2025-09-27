import React from 'react';
import ScrollImage from './ScrollImage';

const images = [
  {
    src: '/images/dog-1.jpg',
    alt: 'Happy dog with GPS tracker during outdoor adventure',
    caption: 'Every adventure includes real-time GPS tracking for your peace of mind',
    className: 'max-w-md mx-auto'
  },
  {
    src: '/images/dog-2.jpg',
    alt: 'Two dogs playing in water during adventure mission',
    caption: 'Purpose-filled missions that combine exercise, training, and pure joy',
    className: 'max-w-lg mx-auto'
  },
  {
    src: '/images/dog-3.jpg',
    alt: 'Two focused dogs ready for their next adventure mission',
    caption: 'Professional training with specialized equipment for every breed and temperament',
    className: 'max-w-sm mx-auto'
  }
];

export default function ImageGallery() {
  return (
    <div className="space-y-16 py-8">
      {images.map((image, index) => (
        <ScrollImage
          key={index}
          src={image.src}
          alt={image.alt}
          caption={image.caption}
          className={image.className}
          delay={index * 200}
        />
      ))}
    </div>
  );
}
