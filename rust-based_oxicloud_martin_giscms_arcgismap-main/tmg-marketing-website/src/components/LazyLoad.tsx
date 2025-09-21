'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';

interface LazyLoadProps {
  children: ReactNode;
  height?: string | number;
  offset?: number;
  placeholder?: ReactNode;
  className?: string;
}

export function LazyLoad({ 
  children, 
  height = 'auto', 
  offset = 100, 
  placeholder,
  className = '' 
}: LazyLoadProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `${offset}px`,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [offset]);

  useEffect(() => {
    if (isInView) {
      // Small delay to ensure smooth loading
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const defaultPlaceholder = (
    <div className="animate-pulse bg-secondary-200 rounded-lg" style={{ height }}>
      <div className="flex items-center justify-center h-full">
        <div className="text-secondary-400 text-sm">Loading...</div>
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className={className} style={{ minHeight: height }}>
      {isLoaded ? children : (placeholder || defaultPlaceholder)}
    </div>
  );
}

// Specialized lazy loading components for common use cases
export function LazySection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <LazyLoad 
      height="400px" 
      offset={150}
      className={className}
      placeholder={
        <div className="animate-pulse space-y-4 p-8">
          <div className="h-8 bg-secondary-200 rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-secondary-200 rounded w-2/3 mx-auto"></div>
          <div className="h-4 bg-secondary-200 rounded w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-32 bg-secondary-200 rounded"></div>
                <div className="h-4 bg-secondary-200 rounded w-3/4"></div>
                <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      {children}
    </LazyLoad>
  );
}

export function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; 
  className?: string;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  const placeholder = (
    <div 
      className={`animate-pulse bg-secondary-200 ${className}`}
      style={{ width, height }}
    >
      <div className="flex items-center justify-center h-full">
        <svg 
          className="w-8 h-8 text-secondary-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    </div>
  );

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-secondary-100 text-secondary-500 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && placeholder}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width || 400}
          height={height || 300}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          style={{ position: isLoaded ? 'static' : 'absolute' }}
        />
      )}
    </div>
  );
}