'use client';

import { motion } from 'framer-motion';

interface LoadingStateProps {
  variant?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingState({ 
  variant = 'spinner', 
  size = 'md',
  text
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  if (variant === 'skeleton') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-secondary-200 rounded w-3/4"></div>
        <div className="h-4 bg-secondary-200 rounded"></div>
        <div className="h-4 bg-secondary-200 rounded w-5/6"></div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="h-32 bg-secondary-200 rounded-lg"></div>
          <div className="h-32 bg-secondary-200 rounded-lg"></div>
          <div className="h-32 bg-secondary-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} bg-primary-600 rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
        {text && <span className="ml-3 text-secondary-600">{text}</span>}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          className={`${sizeClasses[size]} bg-primary-600 rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {text && <span className="ml-3 text-secondary-600">{text}</span>}
      </div>
    );
  }

  // Default spinner
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-secondary-200 border-t-primary-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {text && <p className="mt-4 text-secondary-600">{text}</p>}
    </div>
  );
}