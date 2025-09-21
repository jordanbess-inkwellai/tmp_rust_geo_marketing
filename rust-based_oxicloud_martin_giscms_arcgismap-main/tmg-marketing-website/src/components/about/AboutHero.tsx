'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const companyStats = [
  {
    icon: UserGroupIcon,
    value: '500+',
    label: 'Team Members',
    description: 'Passionate professionals worldwide'
  },
  {
    icon: GlobeAltIcon,
    value: '50+',
    label: 'Countries Served',
    description: 'Global reach and impact'
  },
  {
    icon: BuildingOfficeIcon,
    value: '10K+',
    label: 'Enterprise Clients',
    description: 'Organizations trust our platform'
  },
  {
    icon: TrophyIcon,
    value: '15+',
    label: 'Industry Awards',
    description: 'Recognition for innovation'
  }
];

export default function AboutHero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6"
          >
            <SparklesIcon className="w-4 h-4 mr-2" />
            About Our Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transforming the World
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Through Geospatial Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            We're on a mission to democratize geospatial technology and empower organizations 
            worldwide to make better decisions through the power of location intelligence. 
            Founded by a team of passionate engineers, we believe that spatial data holds 
            the key to solving some of humanity's greatest challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <HeartIcon className="w-5 h-5 mr-2 text-red-400" />
              <span className="font-medium">Passion-Driven</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <GlobeAltIcon className="w-5 h-5 mr-2 text-green-400" />
              <span className="font-medium">Global Impact</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <SparklesIcon className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-medium">Innovation First</span>
            </div>
          </motion.div>
        </div>

        {/* Company Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-200 mb-2">{stat.label}</div>
              <div className="text-blue-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}