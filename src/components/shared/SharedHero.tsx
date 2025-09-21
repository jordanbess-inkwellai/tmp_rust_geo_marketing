'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SharedHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  cta?: {
    primary?: {
      text: string;
      href: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      href: string;
      onClick?: () => void;
    };
  };
  stats?: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  variant?: 'default' | 'gradient' | 'dark' | 'light';
  backgroundPattern?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SharedHero({
  title,
  subtitle,
  description,
  badge,
  badgeIcon,
  cta,
  stats,
  variant = 'default',
  backgroundPattern = false,
  className = '',
  children
}: SharedHeroProps) {
  const variants = {
    default: 'bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900',
    gradient: 'bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-900',
    dark: 'bg-secondary-900',
    light: 'bg-secondary-50 text-secondary-900',
  };

  const textColor = variant === 'light' ? 'text-secondary-900' : 'text-white';
  const subtitleColor = variant === 'light' ? 'text-secondary-700' : 'text-secondary-300';
  const badgeStyle = variant === 'light' 
    ? 'bg-primary-100 text-primary-700' 
    : 'bg-white/10 backdrop-blur-sm text-white';

  return (
    <section className={`relative min-h-[600px] flex items-center ${variants[variant]} ${className}`}>
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12" />
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${badgeStyle}`}
            >
              {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
              {badge}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColor}`}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl md:text-2xl font-medium mb-4 ${subtitleColor}`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${subtitleColor}`}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {cta.primary && (
                <a
                  href={cta.primary.href}
                  onClick={cta.primary.onClick}
                  className={variant === 'light' ? 'btn-primary' : 'btn bg-white text-primary-700 hover:bg-primary-50'}
                >
                  {cta.primary.text}
                </a>
              )}
              {cta.secondary && (
                <a
                  href={cta.secondary.href}
                  onClick={cta.secondary.onClick}
                  className={variant === 'light' ? 'btn-outline' : 'btn-outline border-white text-white hover:bg-white/10'}
                >
                  {cta.secondary.text}
                </a>
              )}
            </motion.div>
          )}

          {/* Custom Children */}
          {children}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`text-center p-6 rounded-xl ${
                  variant === 'light' 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
              >
                <div className={`text-3xl font-bold mb-1 ${variant === 'light' ? 'text-primary-600' : 'text-white'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium mb-1 ${variant === 'light' ? 'text-secondary-700' : 'text-white/90'}`}>
                  {stat.label}
                </div>
                {stat.description && (
                  <div className={`text-xs ${variant === 'light' ? 'text-secondary-500' : 'text-white/70'}`}>
                    {stat.description}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}