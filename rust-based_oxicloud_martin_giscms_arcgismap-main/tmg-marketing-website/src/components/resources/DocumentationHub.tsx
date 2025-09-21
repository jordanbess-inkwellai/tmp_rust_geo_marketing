'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  DocumentTextIcon,
  CommandLineIcon,
  CubeIcon,
  ChartBarIcon,
  ClockIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const documentationCategories = [
  {
    id: 'api',
    name: 'API Reference',
    icon: CodeBracketIcon,
    description: 'Complete API documentation with interactive examples',
    count: 45,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'sdks',
    name: 'SDKs & Libraries',
    icon: CubeIcon,
    description: 'Language-specific SDKs and integration libraries',
    count: 12,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'guides',
    name: 'Developer Guides',
    icon: BookOpenIcon,
    description: 'Step-by-step implementation guides',
    count: 28,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'tools',
    name: 'Tools & Utilities',
    icon: WrenchScrewdriverIcon,
    description: 'Developer tools and utility documentation',
    count: 15,
    color: 'from-orange-500 to-red-600'
  }
];

const apiEndpoints = {
  api: [
    { 
      name: 'Authentication', 
      description: 'User authentication and authorization methods',
      endpoint: '/auth',
      method: 'POST',
      updated: '2 days ago',
      rating: 4.9
    },
    { 
      name: 'Data Management', 
      description: 'Create, read, update, delete spatial datasets',
      endpoint: '/data',
      method: 'GET/POST/PUT/DELETE',
      updated: '1 week ago',
      rating: 4.8
    },
    { 
      name: 'Map Rendering', 
      description: 'High-performance map tile generation and rendering',
      endpoint: '/maps',
      method: 'GET',
      updated: '3 days ago',
      rating: 4.9
    },
    { 
      name: 'Spatial Queries', 
      description: 'Advanced spatial analysis and query operations',
      endpoint: '/spatial',
      method: 'POST',
      updated: '1 day ago',
      rating: 4.7
    }
  ],
  sdks: [
    { 
      name: 'JavaScript SDK', 
      description: 'Complete JavaScript/TypeScript SDK with examples',
      endpoint: 'npm install @company/js-sdk',
      method: 'NPM',
      updated: '1 week ago',
      rating: 4.8
    },
    { 
      name: 'Python SDK', 
      description: 'Python library for data analysis and visualization',
      endpoint: 'pip install company-python-sdk',
      method: 'PIP',
      updated: '3 days ago',
      rating: 4.9
    },
    { 
      name: 'Java SDK', 
      description: 'Enterprise Java SDK for large-scale applications',
      endpoint: 'Maven/Gradle dependency',
      method: 'MAVEN',
      updated: '5 days ago',
      rating: 4.7
    },
    { 
      name: 'C# .NET SDK', 
      description: '.NET Core SDK for Windows applications',
      endpoint: 'NuGet package install',
      method: 'NUGET',
      updated: '1 week ago',
      rating: 4.6
    }
  ],
  guides: [
    { 
      name: 'Quick Start Guide', 
      description: 'Get up and running in 15 minutes',
      endpoint: 'getting-started',
      method: 'GUIDE',
      updated: '2 days ago',
      rating: 4.9
    },
    { 
      name: 'Data Integration', 
      description: 'Connect and import your existing data sources',
      endpoint: 'data-integration',
      method: 'GUIDE',
      updated: '1 week ago',
      rating: 4.8
    },
    { 
      name: 'Custom Visualizations', 
      description: 'Create custom maps and data visualizations',
      endpoint: 'custom-viz',
      method: 'GUIDE',
      updated: '4 days ago',
      rating: 4.7
    },
    { 
      name: 'Performance Optimization', 
      description: 'Best practices for high-performance applications',
      endpoint: 'performance',
      method: 'GUIDE',
      updated: '3 days ago',
      rating: 4.8
    }
  ],
  tools: [
    { 
      name: 'CLI Tool', 
      description: 'Command-line interface for automation and scripting',
      endpoint: 'npm install -g @company/cli',
      method: 'CLI',
      updated: '1 week ago',
      rating: 4.7
    },
    { 
      name: 'VS Code Extension', 
      description: 'IDE extension with syntax highlighting and snippets',
      endpoint: 'VS Code Marketplace',
      method: 'EXTENSION',
      updated: '5 days ago',
      rating: 4.8
    },
    { 
      name: 'Postman Collection', 
      description: 'Pre-configured API requests for testing',
      endpoint: 'Postman workspace',
      method: 'COLLECTION',
      updated: '3 days ago',
      rating: 4.6
    },
    { 
      name: 'Data Validator', 
      description: 'Validate spatial data formats and schemas',
      endpoint: 'online-validator',
      method: 'TOOL',
      updated: '2 days ago',
      rating: 4.9
    }
  ]
};

const popularDocs = [
  {
    title: 'Getting Started with the API',
    description: 'Complete guide to making your first API call',
    category: 'API Reference',
    readTime: '10 min',
    views: '15.2K',
    rating: 4.9,
    updated: '2 days ago'
  },
  {
    title: 'JavaScript SDK Quick Start',
    description: 'Set up the JavaScript SDK in your project',
    category: 'SDKs',
    readTime: '8 min',
    views: '12.8K',
    rating: 4.8,
    updated: '1 week ago'
  },
  {
    title: 'Data Import Best Practices',
    description: 'Optimize your data import process',
    category: 'Guides',
    readTime: '15 min',
    views: '9.7K',
    rating: 4.7,
    updated: '3 days ago'
  },
  {
    title: 'Authentication & Security',
    description: 'Secure your API integrations',
    category: 'API Reference',
    readTime: '12 min',
    views: '11.4K',
    rating: 4.8,
    updated: '1 day ago'
  }
];

export default function DocumentationHub() {
  const [activeCategory, setActiveCategory] = useState('api');

  const getMethodColor = (method: string) => {
    const colors = {
      'GET': 'bg-green-100 text-green-800',
      'POST': 'bg-blue-100 text-blue-800',
      'PUT': 'bg-yellow-100 text-yellow-800',
      'DELETE': 'bg-red-100 text-red-800',
      'GET/POST/PUT/DELETE': 'bg-purple-100 text-purple-800',
      'NPM': 'bg-red-100 text-red-800',
      'PIP': 'bg-blue-100 text-blue-800',
      'MAVEN': 'bg-orange-100 text-orange-800',
      'NUGET': 'bg-purple-100 text-purple-800',
      'GUIDE': 'bg-indigo-100 text-indigo-800',
      'CLI': 'bg-gray-100 text-gray-800',
      'EXTENSION': 'bg-blue-100 text-blue-800',
      'COLLECTION': 'bg-green-100 text-green-800',
      'TOOL': 'bg-cyan-100 text-cyan-800'
    };
    return colors[method as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

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
            Documentation Hub
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technical documentation, API references, and developer guides 
            to help you integrate and build with our platform.
          </motion.p>
        </div>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentationCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <category.icon className={`w-8 h-8 mb-4 ${
                activeCategory === category.id ? 'text-white' : 'text-blue-600'
              }`} />
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className={`text-sm mb-3 ${
                activeCategory === category.id ? 'text-white/80' : 'text-gray-600'
              }`}>
                {category.description}
              </p>
              <div className={`text-sm font-medium ${
                activeCategory === category.id ? 'text-white' : 'text-blue-600'
              }`}>
                {category.count} items
              </div>
            </motion.button>
          ))}
        </div>

        {/* Documentation Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {documentationCategories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiEndpoints[activeCategory as keyof typeof apiEndpoints]?.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {doc.name}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{doc.description}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{doc.rating}</span>
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>

                <div className="mb-4">
                  <code className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-800 font-mono">
                    {doc.endpoint}
                  </code>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(doc.method)}`}>
                    {doc.method}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {doc.updated}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Popular Documentation */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Most Popular Documentation
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {doc.category}
                      </span>
                      <div className="flex items-center ml-3">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{doc.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {doc.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-4 flex-shrink-0" />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {doc.readTime}
                    </div>
                    <div className="flex items-center">
                      <ChartBarIcon className="w-4 h-4 mr-1" />
                      {doc.views} views
                    </div>
                  </div>
                  <div className="text-xs">Updated {doc.updated}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}