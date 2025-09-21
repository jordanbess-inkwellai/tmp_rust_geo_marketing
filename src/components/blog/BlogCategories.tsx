'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  NewspaperIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const blogCategories = [
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    icon: CpuChipIcon,
    description: 'Cutting-edge AI applications in geospatial analysis, computer vision, and predictive modeling.',
    articleCount: 45,
    color: 'from-purple-500 to-indigo-600',
    recentTopics: ['Neural Networks', 'Computer Vision', 'Deep Learning', 'Predictive Analytics']
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    icon: ChartBarIcon,
    description: 'Real-world implementations and success stories from our customers across various industries.',
    articleCount: 32,
    color: 'from-green-500 to-emerald-600',
    recentTopics: ['Disaster Response', 'Urban Planning', 'Agriculture', 'Environmental']
  },
  {
    id: 'technical',
    name: 'Technical Deep Dives',
    icon: BeakerIcon,
    description: 'In-depth technical content on system architecture, data processing, and engineering challenges.',
    articleCount: 28,
    color: 'from-blue-500 to-cyan-600',
    recentTopics: ['Distributed Systems', 'Real-time Processing', 'Cloud Architecture', 'APIs']
  },
  {
    id: 'industry-insights',
    name: 'Industry Insights',
    icon: GlobeAltIcon,
    description: 'Market trends, industry analysis, and thought leadership in the geospatial technology sector.',
    articleCount: 38,
    color: 'from-orange-500 to-red-600',
    recentTopics: ['Market Trends', 'Future of GIS', 'Regulations', 'Standards']
  },
  {
    id: 'product-updates',
    name: 'Product Updates',
    icon: RocketLaunchIcon,
    description: 'Latest features, releases, and roadmap updates for our geospatial intelligence platform.',
    articleCount: 22,
    color: 'from-indigo-500 to-purple-600',
    recentTopics: ['New Features', 'Platform Updates', 'Beta Releases', 'Roadmap']
  },
  {
    id: 'tutorials',
    name: 'Tutorials & Guides',
    icon: AcademicCapIcon,
    description: 'Step-by-step guides, best practices, and how-to content for developers and analysts.',
    articleCount: 41,
    color: 'from-teal-500 to-green-600',
    recentTopics: ['Getting Started', 'Best Practices', 'Workflows', 'Integration']
  },
  {
    id: 'research',
    name: 'Research Papers',
    icon: BuildingOfficeIcon,
    description: 'Academic research, white papers, and scientific publications from our research team.',
    articleCount: 15,
    color: 'from-rose-500 to-pink-600',
    recentTopics: ['Climate Science', 'Remote Sensing', 'Algorithms', 'Peer Review']
  },
  {
    id: 'news',
    name: 'Company News',
    icon: NewspaperIcon,
    description: 'Company announcements, partnerships, events, and community updates.',
    articleCount: 19,
    color: 'from-yellow-500 to-orange-600',
    recentTopics: ['Announcements', 'Partnerships', 'Events', 'Awards']
  }
];

export default function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore by Category</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into specific topics that interest you. From technical tutorials 
            to industry insights, find the content that matches your expertise and curiosity.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {blogCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setSelectedCategory(category.id)}
              onHoverEnd={() => setSelectedCategory(null)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-105">
                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {category.articleCount} articles
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {category.description}
                </p>

                {/* Recent Topics */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">
                    Recent Topics
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {category.recentTopics.map((topic, idx) => (
                      <span key={idx} className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-2 py-1 rounded text-xs transition-colors duration-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Details */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: selectedCategory ? 1 : 0, 
            height: selectedCategory ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {selectedCategory && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              {(() => {
                const category = blogCategories.find(c => c.id === selectedCategory);
                if (!category) return null;
                
                return (
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{category.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                        Browse {category.name}
                      </button>
                      <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                        Subscribe to Updates
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Content by the Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">240+</div>
              <div className="opacity-90 text-sm">Total Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90 text-sm">Expert Authors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="opacity-90 text-sm">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="opacity-90 text-sm">Content Categories</div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            Use our advanced search or suggest new topics you'd like us to cover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Advanced Search
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Suggest a Topic
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}