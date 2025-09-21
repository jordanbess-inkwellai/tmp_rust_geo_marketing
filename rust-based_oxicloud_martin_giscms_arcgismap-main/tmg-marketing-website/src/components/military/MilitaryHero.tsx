'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  EyeIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

export default function MilitaryHero() {
  const capabilities = [
    { icon: ShieldCheckIcon, text: 'TS/SCI Ready' },
    { icon: GlobeAltIcon, text: 'GEOINT Analysis' },
    { icon: EyeIcon, text: 'Multi-INT Fusion' },
    { icon: CommandLineIcon, text: 'C2 Integration' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform skew-y-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Classification Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium"
            >
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              UNCLASSIFIED // FOUO
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Next-Generation
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                GEOINT Platform
              </span>
              for Defense Operations
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-secondary-300 leading-relaxed max-w-2xl"
            >
              Advanced geospatial intelligence platform designed for military operations, 
              intelligence analysis, and homeland security missions. Built with Rust for 
              mission-critical reliability and performance.
            </motion.p>

            {/* Key Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                >
                  <capability.icon className="w-8 h-8 text-primary-400 mb-2" />
                  <span className="text-sm text-center font-medium">{capability.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg">
                Request Security Briefing
              </button>
              <button className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Download Technical Overview
              </button>
            </motion.div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-secondary-400 border-l-2 border-yellow-500/50 pl-4"
            >
              <strong className="text-yellow-400">SECURITY NOTE:</strong> 
              This platform supports classified environments up to TS/SCI. 
              Contact our cleared personnel for classified demonstrations.
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary-500/20 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Content Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                {/* System Status Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">OXICLOUD SYSTEM ONLINE</span>
                  </div>
                  <div className="text-xs text-secondary-400">
                    SIPR // NIPR READY
                  </div>
                </div>

                {/* Mock System Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-300">Multi-INT Processing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-secondary-600 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-green-500 to-primary-500 rounded-full animate-pulse" />
                      </div>
                      <span className="text-green-400 text-sm font-mono">87%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondary-300">GEOINT Analysis</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-secondary-600 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-primary-500 rounded-full" />
                      </div>
                      <span className="text-green-400 text-sm font-mono">99%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondary-300">C2 Integration</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-secondary-600 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-primary-500 rounded-full animate-pulse" />
                      </div>
                      <span className="text-green-400 text-sm font-mono">76%</span>
                    </div>
                  </div>
                </div>

                {/* Classification Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-secondary-500 text-center">
                  CLASSIFICATION: UNCLASSIFIED // FOUO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll for Capabilities</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}