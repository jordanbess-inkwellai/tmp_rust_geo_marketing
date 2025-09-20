'use client';

import { useState, useEffect } from 'react';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { trackSecurityBriefingRequest, trackDemoRequest } from '@/components/Analytics';

const stats = [
  { label: 'OGC API Compliance', value: '100%', description: 'Standards compliant' },
  { label: 'Deployment Time', value: '< 24hrs', description: 'vs. 12+ months' },
  { label: 'Cost Reduction', value: '90%', description: 'vs. traditional solutions' },
  { label: 'Security Clearance', value: 'TS/SCI', description: 'Capable personnel' },
];

const rotatingTexts = [
  'Command & Control',
  'Situational Awareness',
  'GEOINT Analysis',
  'Real-time Collaboration',
  'Mission Planning',
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative hero-bg overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent" />

      <div className="relative container-custom section-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span>Defense & GEOINT Solutions</span>
            </div>

            {/* Main headline */}
            <h1 className="text-white mb-6">
              Next-Generation
              <br />
              <span className="text-gradient">
                {rotatingTexts[currentTextIndex]}
              </span>
              <br />
              Platform
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
              Open standards-based geospatial intelligence platform built with Rust for
              unmatched performance, security, and interoperability. Deploy in weeks, not years.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                className="btn-primary group"
                onClick={() => {
                  trackSecurityBriefingRequest();
                  // Scroll to contact form
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Security Briefing
                <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                className="btn-outline group bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary-900"
                onClick={() => {
                  trackDemoRequest('hero_watch_demo');
                  // This could open a modal or redirect to demo page
                }}
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>NIST Cybersecurity Framework</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>FISMA Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>OGC API Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-primary-300 mb-1">{stat.label}</div>
                <div className="text-xs text-secondary-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section with key capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Comprehensive Geospatial Intelligence Suite
            </h3>
            <p className="text-secondary-300 max-w-3xl mx-auto">
              From real-time FMV analysis to climate data processing, our platform delivers
              enterprise-grade capabilities with commercial ease-of-use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              'OGC APIs',
              'FMV/KLV',
              'DTED/DEM',
              'Climate Data',
              'MCP/AI',
              '3D Visualization'
            ].map((capability, index) => (
              <div
                key={capability}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="text-sm font-medium text-white">{capability}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}