'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const colorClasses = {
  blue: 'border-blue-600 border-t-transparent',
  white: 'border-white border-t-transparent',
  gray: 'border-gray-400 border-t-transparent'
};

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        border-2 
        rounded-full 
        animate-spin 
        ${className}
      `}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Compound component for full-page loading
export function FullPageLoading({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="text-gray-600 mt-4 font-medium">{message}</p>
      </div>
    </div>
  );
}

// Compound component for inline loading
export function InlineLoading({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner size="lg" className="mr-3" />
      <span className="text-gray-600 font-medium">{message}</span>
    </div>
  );
}