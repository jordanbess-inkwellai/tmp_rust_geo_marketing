'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  AcademicCapIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  LightBulbIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const resourceCategories = [
  {
    id: 'documentation',
    name: 'Documentation',
    icon: DocumentTextIcon,
    count: '150+ docs',
    description: 'Comprehensive API docs and technical references',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'tutorials',
    name: 'Tutorials',
    icon: AcademicCapIcon,
    count: '85+ guides',
    description: 'Step-by-step learning paths and how-to guides',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'webinars',
    name: 'Webinars',
    icon: VideoCameraIcon,
    count: '60+ videos',
    description: 'Live sessions and recorded training content',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'knowledge',
    name: 'Knowledge Base',
    icon: LightBulbIcon,
    count: '200+ articles',
    description: 'FAQs, troubleshooting, and best practices',
    color: 'from-orange-500 to-red-600'
  }
];

const quickAccess = [
  {
    title: 'Getting Started Guide',
    description: 'New to our platform? Start here for a complete overview',
    icon: '🚀',
    time: '15 min read',
    popular: true
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation with code examples',
    icon: '📖',
    time: 'Reference',
    popular: true
  },
  {
    title: 'Platform Tutorial',
    description: 'Interactive tutorial for your first implementation',
    icon: '🎯',
    time: '30 min',
    popular: true
  },
  {
    title: 'Troubleshooting Guide',
    description: 'Common issues and solutions',
    icon: '🔧',
    time: '10 min read',
    popular: false
  }
];

const searchSuggestions = [
  'API authentication',
  'Data visualization',
  'Getting started',
  'Troubleshooting',
  'Integration guide',
  'Best practices'
];

export default function ResourcesHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
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
            <BookOpenIcon className="w-4 h-4 mr-2" />
            Resource Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Learn, Build,
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Comprehensive documentation, tutorials, and resources to help you master our platform 
            and build amazing geospatial solutions.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search documentation, tutorials, guides..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Search
              </button>
            </div>

            {/* Search Suggestions */}
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-200 mt-2 z-10"
              >
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-3">Popular searches:</div>
                  <div className="flex flex-wrap gap-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition-colors"
                        onClick={() => setSearchQuery(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {quickAccess.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer group ${
                  item.popular ? 'ring-2 ring-blue-400/50' : ''
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-xs">{item.time}</span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className={`bg-gradient-to-r ${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{category.name}</h3>
                <div className="text-blue-200 text-center font-medium mb-3">{category.count}</div>
                <p className="text-blue-200 text-center text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}