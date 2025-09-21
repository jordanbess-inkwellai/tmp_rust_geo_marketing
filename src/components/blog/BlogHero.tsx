'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const blogStats = [
  {
    icon: DocumentTextIcon,
    value: '200+',
    label: 'Articles',
    description: 'In-depth technical content'
  },
  {
    icon: LightBulbIcon,
    value: '50+',
    label: 'Case Studies',
    description: 'Real-world implementations'
  },
  {
    icon: ChartBarIcon,
    value: '1M+',
    label: 'Monthly Views',
    description: 'Industry readership'
  },
  {
    icon: GlobeAltIcon,
    value: '100+',
    label: 'Countries',
    description: 'Global audience reach'
  }
];

const featuredTopics = [
  'Satellite Imagery Analysis',
  'Machine Learning',
  'Climate Modeling',
  'Urban Planning',
  'Disaster Response',
  'Environmental Monitoring'
];

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Industry Insights & Technical Excellence
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Geospatial Intelligence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, technical breakthroughs, and real-world applications 
              in geospatial technology. From satellite imagery analysis to AI-powered mapping, 
              explore insights from our team of experts.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles, case studies, tutorials..."
                className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-300"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Featured Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-gray-500 text-sm mb-4">Popular Topics:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {featuredTopics.map((topic, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {topic}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {blogStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
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