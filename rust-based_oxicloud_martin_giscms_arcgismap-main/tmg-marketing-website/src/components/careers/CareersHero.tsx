'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  UsersIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowRightIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    icon: BriefcaseIcon,
    value: '35+',
    label: 'Open Positions',
    description: 'Across all departments'
  },
  {
    icon: UsersIcon,
    value: '500+',
    label: 'Team Members',
    description: 'In 25+ countries'
  },
  {
    icon: GlobeAltIcon,
    value: '6',
    label: 'Continents',
    description: 'Remote-first culture'
  },
  {
    icon: SparklesIcon,
    value: '95%',
    label: 'Satisfaction',
    description: 'Employee happiness rating'
  }
];

export default function CareersHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                We're Hiring!
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shape the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                Geospatial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join a team of world-class engineers, researchers, and innovators who are building 
              the infrastructure for a more spatially intelligent world. Your work will have 
              global impact and help solve some of humanity's greatest challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
              >
                View Open Positions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Learn About Our Culture
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                      <stat.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Join Our Global Team
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Engineering</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    15 openings
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Product & Design</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    8 openings
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Data & Research</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    7 openings
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Business & Operations</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    5 openings
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <GlobeAltIcon className="w-4 h-4 mr-2" />
                  Remote-friendly • Flexible hours • Global team
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <SparklesIcon className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-12 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl shadow-lg flex items-center justify-center"
            >
              <RocketLaunchIcon className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120V20C240 60 480 40 720 20C960 0 1200 20 1440 40V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}