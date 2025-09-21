'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  PuzzlePieceIcon,
  CloudIcon,
  CommandLineIcon,
  DocumentTextIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon,
  CubeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const apiStats = [
  { label: 'API Endpoints', value: '150+', icon: CodeBracketIcon },
  { label: 'Third-party Apps', value: '500+', icon: PuzzlePieceIcon },
  { label: 'Developers', value: '25K+', icon: CommandLineIcon },
  { label: 'API Calls/Month', value: '50M+', icon: CloudIcon }
];

const apiCategories = [
  {
    id: 'core',
    name: 'Core APIs',
    icon: CodeBracketIcon,
    description: 'Essential platform APIs for data management and visualization',
    endpoints: 45,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'geospatial',
    name: 'Geospatial APIs',
    icon: CubeIcon,
    description: 'Specialized geospatial analysis and mapping APIs',
    endpoints: 38,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'analytics',
    name: 'Analytics APIs',
    icon: SparklesIcon,
    description: 'Advanced analytics and reporting capabilities',
    endpoints: 32,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'integration',
    name: 'Integration APIs',
    icon: PuzzlePieceIcon,
    description: 'Third-party platform connections and webhooks',
    endpoints: 35,
    color: 'from-orange-500 to-red-600'
  }
];

const popularApis = {
  core: [
    { name: 'Data Management API', description: 'Create, read, update, delete spatial datasets', usage: '98%' },
    { name: 'Authentication API', description: 'Secure user authentication and authorization', usage: '95%' },
    { name: 'User Management API', description: 'User accounts, roles, and permissions', usage: '89%' },
    { name: 'Project API', description: 'Project creation and collaboration tools', usage: '87%' }
  ],
  geospatial: [
    { name: 'Map Rendering API', description: 'High-performance map tile generation', usage: '94%' },
    { name: 'Spatial Query API', description: 'Complex spatial queries and analysis', usage: '91%' },
    { name: 'Geocoding API', description: 'Address to coordinate conversion', usage: '86%' },
    { name: 'Routing API', description: 'Optimal path calculation and navigation', usage: '78%' }
  ],
  analytics: [
    { name: 'Dashboard API', description: 'Custom dashboard creation and widgets', usage: '92%' },
    { name: 'Reporting API', description: 'Automated report generation', usage: '85%' },
    { name: 'Metrics API', description: 'Real-time performance metrics', usage: '82%' },
    { name: 'Export API', description: 'Data export in multiple formats', usage: '79%' }
  ],
  integration: [
    { name: 'Webhook API', description: 'Real-time event notifications', usage: '88%' },
    { name: 'Sync API', description: 'Data synchronization with external systems', usage: '84%' },
    { name: 'Import API', description: 'Bulk data import from various sources', usage: '81%' },
    { name: 'Third-party Connectors', description: 'Pre-built platform integrations', usage: '76%' }
  ]
};

const developerResources = [
  {
    title: 'API Documentation',
    description: 'Comprehensive guides, examples, and reference materials',
    icon: DocumentTextIcon,
    features: ['Interactive API explorer', 'Code examples', 'Authentication guides', 'Rate limiting info'],
    cta: 'Explore Docs'
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official SDKs for popular programming languages',
    icon: CubeIcon,
    features: ['JavaScript/TypeScript', 'Python', 'Java', 'C# .NET'],
    cta: 'Download SDKs'
  },
  {
    title: 'Developer Console',
    description: 'Manage API keys, monitor usage, and test endpoints',
    icon: CommandLineIcon,
    features: ['API key management', 'Usage analytics', 'Testing sandbox', 'Rate limit monitoring'],
    cta: 'Access Console'
  },
  {
    title: 'Sample Applications',
    description: 'Complete example applications and starter templates',
    icon: PlayIcon,
    features: ['React dashboard', 'Mobile app template', 'Python scripts', 'Integration examples'],
    cta: 'View Samples'
  }
];

const partnerApps = [
  {
    name: 'DataFlow Pro',
    category: 'Data Integration',
    logo: '🔄',
    description: 'Advanced ETL pipelines for geospatial data processing',
    rating: 4.8,
    downloads: '12K+',
    developer: 'DataFlow Solutions',
    features: ['Automated workflows', 'Real-time processing', 'Error handling']
  },
  {
    name: 'MapAnalytics Plus',
    category: 'Analytics',
    logo: '📊',
    description: 'Advanced spatial analytics and machine learning tools',
    rating: 4.9,
    downloads: '8.5K+',
    developer: 'Analytics Corp',
    features: ['ML algorithms', 'Predictive modeling', 'Custom reports']
  },
  {
    name: 'MobileGIS Field',
    category: 'Mobile',
    logo: '📱',
    description: 'Field data collection and offline synchronization',
    rating: 4.7,
    downloads: '15K+',
    developer: 'Field Solutions',
    features: ['Offline mode', 'GPS tracking', 'Photo capture']
  }
];

export default function APIEcosystem() {
  const [activeCategory, setActiveCategory] = useState('core');

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
            API Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Build powerful applications with our comprehensive API suite. From core platform 
            functionality to advanced geospatial operations, everything you need is at your fingertips.
          </motion.p>
        </div>

        {/* API Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {apiStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* API Categories */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            API Categories
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {apiCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm'
                }`}
              >
                <category.icon className={`w-8 h-8 mb-4 ${
                  activeCategory === category.id ? 'text-white' : 'text-blue-600'
                }`} />
                <h4 className="font-semibold mb-2">{category.name}</h4>
                <p className={`text-sm mb-4 ${
                  activeCategory === category.id ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                <div className={`text-2xl font-bold ${
                  activeCategory === category.id ? 'text-white' : 'text-blue-600'
                }`}>
                  {category.endpoints}
                </div>
                <div className={`text-sm ${
                  activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  endpoints
                </div>
              </motion.button>
            ))}
          </div>

          {/* Popular APIs */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Popular {apiCategories.find(cat => cat.id === activeCategory)?.name}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularApis[activeCategory as keyof typeof popularApis]?.map((api, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-gray-900">{api.name}</h5>
                    <div className="flex items-center">
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        {api.usage} usage
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{api.description}</p>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
                    View Documentation
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Developer Resources */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Developer Resources
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developerResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{resource.title}</h4>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {resource.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {resource.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Applications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Featured Partner Applications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{app.logo}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{app.name}</h4>
                    <div className="text-blue-600 font-medium">{app.category}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{app.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(app.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{app.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{app.downloads} downloads</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">by {app.developer}</div>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white"
        >
          <CodeBracketIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Start Building Today</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing geospatial applications with our APIs. 
            Get started with our comprehensive documentation and developer tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get API Key
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}