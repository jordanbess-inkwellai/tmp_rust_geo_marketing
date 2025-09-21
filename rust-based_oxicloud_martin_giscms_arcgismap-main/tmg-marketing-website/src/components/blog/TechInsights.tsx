'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ClockIcon,
  EyeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const techInsights = [
  {
    id: 1,
    title: 'Building Real-time Geospatial APIs with WebSockets and PostGIS',
    excerpt: 'Learn how to architect high-performance APIs that handle millions of spatial queries per second with live data updates.',
    author: 'Alex Rodriguez',
    authorRole: 'Platform Architect',
    publishDate: '2024-01-22',
    readTime: '18 min read',
    views: '15.2K',
    difficulty: 'Advanced',
    category: 'Backend Architecture',
    tags: ['WebSockets', 'PostGIS', 'Real-time', 'Scaling'],
    icon: CloudIcon,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 2,
    title: 'Optimizing Satellite Image Processing with GPU Computing',
    excerpt: 'Deep dive into CUDA programming for accelerating computer vision algorithms on massive satellite imagery datasets.',
    author: 'Dr. Maria Santos',
    authorRole: 'Computer Vision Lead',
    publishDate: '2024-01-19',
    readTime: '22 min read',
    views: '11.8K',
    difficulty: 'Expert',
    category: 'Computer Vision',
    tags: ['CUDA', 'GPU Computing', 'Satellite Imagery', 'Performance'],
    icon: CpuChipIcon,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Implementing Distributed Spatial Joins at Petabyte Scale',
    excerpt: 'How we built a distributed system that performs complex spatial operations across petabytes of geographic data.',
    author: 'James Liu',
    authorRole: 'Principal Engineer',
    publishDate: '2024-01-17',
    readTime: '25 min read',
    views: '8.9K',
    difficulty: 'Expert',
    category: 'Distributed Systems',
    tags: ['Distributed Computing', 'Spatial Joins', 'Big Data', 'Architecture'],
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    title: 'Advanced TypeScript Patterns for Geospatial Web Applications',
    excerpt: 'Explore sophisticated TypeScript patterns and techniques for building type-safe geospatial applications.',
    author: 'Emily Chen',
    authorRole: 'Frontend Architect',
    publishDate: '2024-01-15',
    readTime: '14 min read',
    views: '19.4K',
    difficulty: 'Intermediate',
    category: 'Frontend Development',
    tags: ['TypeScript', 'Web Development', 'Geospatial', 'Best Practices'],
    icon: CodeBracketIcon,
    color: 'from-orange-500 to-red-600'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-700';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-700';
    case 'Advanced':
      return 'bg-orange-100 text-orange-700';
    case 'Expert':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
};

export default function TechInsights() {
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
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <CodeBracketIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Deep Dives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth technical content for developers, architects, and engineers building 
            the next generation of geospatial applications and systems.
          </p>
        </motion.div>

        {/* Technical Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techInsights.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-[1.02]">
                {/* Header with Icon */}
                <div className={`h-32 bg-gradient-to-br ${article.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <article.icon className="w-16 h-16 text-white/30" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Meta */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{article.author}</div>
                        <div className="text-gray-500 text-xs">{article.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-sm mb-1">{formatDate(article.publishDate)}</div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <AcademicCapIcon className="w-4 h-4 mr-1" />
                        Technical
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Read Tutorial
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Technical Resources CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-8">
            <CodeBracketIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Looking for More Technical Content?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Explore our comprehensive technical documentation, API references, code examples, 
              and developer guides. Join thousands of developers building with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Browse All Technical Articles
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                View Developer Docs
              </button>
            </div>
          </div>
        </motion.div>

        {/* Technical Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Technical Content Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '85+', label: 'Technical Articles', description: 'In-depth tutorials and guides' },
              { value: '500K+', label: 'Code Examples', description: 'Lines of production code shared' },
              { value: '25+', label: 'Open Source', description: 'Libraries and tools released' },
              { value: '15K+', label: 'Developer Community', description: 'Active technical readers' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}