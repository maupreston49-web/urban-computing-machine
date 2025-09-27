import React, { useState, useEffect, useRef } from 'react';

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  delay?: number;
}

export default function ScrollImage({ 
  src, 
  alt, 
  className = '', 
  caption,
  delay = 0 
}: ScrollImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [delay, hasAnimated]);

  return (
    <div 
      ref={imgRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
    >
      <div className="relative group">
        <div className="overflow-hidden rounded-xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6 rounded-b-xl">
            <p className="text-sm font-medium leading-relaxed">{caption}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
      </div>
    </div>
  );
}
