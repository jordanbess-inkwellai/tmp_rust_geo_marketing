'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ClockIcon,
  StarIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const technicalGuides = [
  {
    id: 1,
    title: 'Enterprise Architecture Guide',
    description: 'Comprehensive guide for implementing geospatial solutions at enterprise scale',
    type: 'Whitepaper',
    pages: 48,
    downloads: '8.2K',
    rating: 4.9,
    readTime: '2 hours',
    category: 'Architecture',
    tags: ['Enterprise', 'Scalability', 'Best Practices'],
    thumbnail: '🏢',
    updated: '2024-02-15'
  },
  {
    id: 2,
    title: 'Performance Optimization Handbook',
    description: 'Advanced techniques for optimizing geospatial data processing and visualization',
    type: 'Technical Guide',
    pages: 32,
    downloads: '12.1K',
    rating: 4.8,
    readTime: '90 min',
    category: 'Performance',
    tags: ['Optimization', 'Speed', 'Memory'],
    thumbnail: '⚡',
    updated: '2024-03-01'
  },
  {
    id: 3,
    title: 'Security Implementation Guide',
    description: 'Complete security framework for protecting geospatial applications and data',
    type: 'Whitepaper',
    pages: 56,
    downloads: '6.8K',
    rating: 4.9,
    readTime: '2.5 hours',
    category: 'Security',
    tags: ['Security', 'Compliance', 'Encryption'],
    thumbnail: '🔐',
    updated: '2024-01-20'
  },
  {
    id: 4,
    title: 'API Integration Patterns',
    description: 'Design patterns and best practices for integrating with geospatial APIs',
    type: 'Technical Guide',
    pages: 28,
    downloads: '15.3K',
    rating: 4.7,
    readTime: '75 min',
    category: 'Integration',
    tags: ['APIs', 'Integration', 'Patterns'],
    thumbnail: '🔗',
    updated: '2024-02-28'
  },
  {
    id: 5,
    title: 'Data Migration Strategies',
    description: 'Step-by-step guide for migrating spatial data from legacy systems',
    type: 'Implementation Guide',
    pages: 36,
    downloads: '9.7K',
    rating: 4.6,
    readTime: '2 hours',
    category: 'Data Management',
    tags: ['Migration', 'Data', 'Legacy Systems'],
    thumbnail: '🔄',
    updated: '2024-03-05'
  },
  {
    id: 6,
    title: 'Mobile Development Guide',
    description: 'Building responsive geospatial applications for mobile platforms',
    type: 'Technical Guide',
    pages: 44,
    downloads: '11.5K',
    rating: 4.8,
    readTime: '2.5 hours',
    category: 'Mobile',
    tags: ['Mobile', 'React Native', 'Flutter'],
    thumbnail: '📱',
    updated: '2024-02-10'
  }
];

const categories = [
  { id: 'all', name: 'All Guides', count: technicalGuides.length },
  { id: 'Architecture', name: 'Architecture', count: 1 },
  { id: 'Performance', name: 'Performance', count: 1 },
  { id: 'Security', name: 'Security', count: 1 },
  { id: 'Integration', name: 'Integration', count: 1 },
  { id: 'Data Management', name: 'Data Management', count: 1 },
  { id: 'Mobile', name: 'Mobile', count: 1 }
];

export default function TechnicalGuides() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Technical Guides & Whitepapers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            In-depth technical documentation, implementation guides, and industry insights 
            to help you build robust geospatial solutions.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Technical Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{guide.thumbnail}</div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {guide.type}
                  </span>
                  <div className="flex items-center mt-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{guide.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{guide.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {guide.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white text-gray-600 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <DocumentTextIcon className="w-4 h-4 mr-2" />
                    {guide.pages} pages
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {guide.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                    {guide.downloads} downloads
                  </div>
                  <div className="flex items-center">
                    <TagIcon className="w-4 h-4 mr-2" />
                    {guide.category}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center">
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center">
                  <EyeIcon className="w-4 h-4 mr-2" />
                  Preview
                </button>
              </div>

              {/* Updated Date */}
              <div className="text-xs text-gray-500 mt-4 text-center">
                Updated {new Date(guide.updated).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white mt-16"
        >
          <DocumentTextIcon className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
          <h3 className="text-3xl font-bold mb-4">Access Our Complete Technical Library</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get unlimited access to all technical guides, whitepapers, and implementation resources. 
            Perfect for teams and enterprises building at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center">
              Browse All Resources
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Custom Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}