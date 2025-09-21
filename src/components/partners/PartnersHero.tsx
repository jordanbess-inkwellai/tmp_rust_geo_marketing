'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  HandRaisedIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Technology Partners', value: '250+', icon: CpuChipIcon },
  { label: 'Certified Resellers', value: '180+', icon: BuildingStorefrontIcon },
  { label: 'Countries Served', value: '45+', icon: GlobeAltIcon },
  { label: 'API Integrations', value: '500+', icon: SparklesIcon }
];

const benefits = [
  'Seamless data integration across platforms',
  'Certified partner support worldwide',
  'Comprehensive API ecosystem',
  'Revenue sharing opportunities'
];

export default function PartnersHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Animated Network Connections */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`,
              height: '100%',
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: i * 0.2, duration: 1 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6"
          >
            <HandRaisedIcon className="w-4 h-4 mr-2" />
            Partner Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Build Together,
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Grow Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Join our thriving ecosystem of technology partners, certified resellers, and solution providers. 
            Together, we're transforming how organizations visualize, analyze, and collaborate with geospatial data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center group">
              Become a Partner
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800/30 transition-colors">
              Explore Integrations
            </button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-blue-100">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}