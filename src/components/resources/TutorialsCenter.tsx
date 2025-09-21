'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  MapIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const learningPaths = [
  {
    id: 'beginner',
    name: 'Getting Started',
    level: 'Beginner',
    duration: '4-6 hours',
    modules: 8,
    description: 'Perfect for newcomers to geospatial development',
    color: 'from-green-500 to-emerald-600',
    icon: '🚀',
    students: '12.5K',
    rating: 4.8,
    completion: 85
  },
  {
    id: 'intermediate',
    name: 'Advanced Integration',
    level: 'Intermediate',
    duration: '8-10 hours',
    modules: 12,
    description: 'Deep dive into advanced platform features',
    color: 'from-blue-500 to-indigo-600',
    icon: '⚡',
    students: '8.2K',
    rating: 4.9,
    completion: 78
  },
  {
    id: 'advanced',
    name: 'Enterprise Solutions',
    level: 'Advanced',
    duration: '12-15 hours',
    modules: 16,
    description: 'Build scalable enterprise geospatial applications',
    color: 'from-purple-500 to-pink-600',
    icon: '🏢',
    students: '4.7K',
    rating: 4.7,
    completion: 72
  },
  {
    id: 'specialized',
    name: 'Industry Specializations',
    level: 'Specialized',
    duration: '6-8 hours',
    modules: 10,
    description: 'Industry-specific use cases and implementations',
    color: 'from-orange-500 to-red-600',
    icon: '🎯',
    students: '6.1K',
    rating: 4.8,
    completion: 80
  }
];

const tutorialCategories = [
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    icon: AcademicCapIcon,
    count: 24,
    description: 'Core concepts and basic operations'
  },
  {
    id: 'visualization',
    name: 'Data Visualization',
    icon: ChartBarIcon,
    count: 18,
    description: 'Creating maps and visual representations'
  },
  {
    id: 'spatial',
    name: 'Spatial Analysis',
    icon: MapIcon,
    count: 16,
    description: 'Advanced spatial queries and analysis'
  },
  {
    id: 'integration',
    name: 'System Integration',
    icon: CogIcon,
    count: 12,
    description: 'Connecting with external systems and APIs'
  }
];

const featuredTutorials = {
  fundamentals: [
    {
      title: 'Your First Map Application',
      description: 'Build a simple map application from scratch',
      duration: '25 min',
      difficulty: 'Beginner',
      students: '15.2K',
      rating: 4.9,
      thumbnail: '🗺️'
    },
    {
      title: 'Understanding Spatial Data',
      description: 'Learn the basics of geospatial data formats',
      duration: '18 min',
      difficulty: 'Beginner',
      students: '12.8K',
      rating: 4.7,
      thumbnail: '📊'
    },
    {
      title: 'Platform Authentication',
      description: 'Secure authentication and API access',
      duration: '15 min',
      difficulty: 'Beginner',
      students: '11.4K',
      rating: 4.8,
      thumbnail: '🔐'
    }
  ],
  visualization: [
    {
      title: 'Custom Map Styling',
      description: 'Create beautiful custom map styles',
      duration: '32 min',
      difficulty: 'Intermediate',
      students: '9.7K',
      rating: 4.8,
      thumbnail: '🎨'
    },
    {
      title: 'Interactive Dashboards',
      description: 'Build interactive geospatial dashboards',
      duration: '45 min',
      difficulty: 'Intermediate',
      students: '8.3K',
      rating: 4.9,
      thumbnail: '📈'
    },
    {
      title: 'Real-time Data Visualization',
      description: 'Display live data streams on maps',
      duration: '38 min',
      difficulty: 'Advanced',
      students: '6.2K',
      rating: 4.6,
      thumbnail: '⚡'
    }
  ],
  spatial: [
    {
      title: 'Spatial Queries Mastery',
      description: 'Advanced spatial query techniques',
      duration: '42 min',
      difficulty: 'Intermediate',
      students: '7.1K',
      rating: 4.7,
      thumbnail: '🔍'
    },
    {
      title: 'Geospatial Analysis Workflows',
      description: 'Build complex analysis pipelines',
      duration: '55 min',
      difficulty: 'Advanced',
      students: '5.4K',
      rating: 4.8,
      thumbnail: '⚙️'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize spatial operations for speed',
      duration: '35 min',
      difficulty: 'Advanced',
      students: '4.8K',
      rating: 4.9,
      thumbnail: '🚀'
    }
  ],
  integration: [
    {
      title: 'REST API Integration',
      description: 'Connect with external REST APIs',
      duration: '28 min',
      difficulty: 'Intermediate',
      students: '8.9K',
      rating: 4.6,
      thumbnail: '🔗'
    },
    {
      title: 'Database Integration',
      description: 'Connect and sync with databases',
      duration: '36 min',
      difficulty: 'Intermediate',
      students: '7.5K',
      rating: 4.8,
      thumbnail: '🗄️'
    },
    {
      title: 'Webhook Implementation',
      description: 'Real-time data updates with webhooks',
      duration: '22 min',
      difficulty: 'Advanced',
      students: '5.2K',
      rating: 4.7,
      thumbnail: '📡'
    }
  ]
};

export default function TutorialsCenter() {
  const [activeCategory, setActiveCategory] = useState('fundamentals');
  const [activePath, setActivePath] = useState('beginner');

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Learning Center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Master our platform with structured learning paths, interactive tutorials, 
            and hands-on exercises designed to accelerate your development journey.
          </motion.p>
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Learning Paths
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  activePath === path.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActivePath(path.id)}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{path.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(path.level)}`}>
                    {path.level}
                  </span>
                </div>

                <p className="text-gray-600 text-center text-sm mb-6">{path.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-gray-900 font-medium">{path.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Modules</span>
                    <span className="text-gray-900 font-medium">{path.modules}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Students</span>
                    <span className="text-gray-900 font-medium">{path.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{path.rating}</span>
                  </div>
                  <div className="text-sm text-gray-500">{path.completion}% complete avg</div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium group-hover:bg-blue-700">
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tutorial Categories */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Browse by Category
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tutorialCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm'
                }`}
              >
                <category.icon className={`w-8 h-8 mb-4 ${
                  activeCategory === category.id ? 'text-white' : 'text-blue-600'
                }`} />
                <h4 className="font-semibold mb-2">{category.name}</h4>
                <p className={`text-sm mb-3 ${
                  activeCategory === category.id ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                <div className={`text-sm font-medium ${
                  activeCategory === category.id ? 'text-white' : 'text-blue-600'
                }`}>
                  {category.count} tutorials
                </div>
              </motion.button>
            ))}
          </div>

          {/* Featured Tutorials */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-8">
              Featured {tutorialCategories.find(cat => cat.id === activeCategory)?.name} Tutorials
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTutorials[activeCategory as keyof typeof featuredTutorials]?.map((tutorial, index) => (
                <div
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-gray-200"
                >
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">
                    <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                    <div className="absolute top-4 right-4">
                      <PlayIcon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <StarIcon className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{tutorial.rating}</span>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {tutorial.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white"
        >
          <AcademicCapIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have accelerated their geospatial development skills 
            with our comprehensive learning resources and expert-led tutorials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
              Start Free Course
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View All Tutorials
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}