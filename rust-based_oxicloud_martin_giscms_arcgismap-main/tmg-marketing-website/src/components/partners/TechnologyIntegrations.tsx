'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapIcon,
  CloudIcon,
  CubeIcon,
  ChartBarIcon,
  CpuChipIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const integrationCategories = [
  {
    id: 'gis',
    name: 'GIS & Mapping',
    icon: MapIcon,
    count: 45,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'cloud',
    name: 'Cloud Platforms',
    icon: CloudIcon,
    count: 28,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'analytics',
    name: 'Analytics & BI',
    icon: ChartBarIcon,
    count: 35,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: ServerIcon,
    count: 42,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'iot',
    name: 'IoT & Sensors',
    icon: CpuChipIcon,
    count: 32,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'mobile',
    name: 'Mobile & Web',
    icon: DevicePhoneMobileIcon,
    count: 25,
    color: 'from-green-500 to-emerald-600'
  }
];

const featuredIntegrations = {
  gis: [
    { name: 'Esri ArcGIS', logo: '🗺️', description: 'Complete ArcGIS integration with real-time sync', status: 'Active' },
    { name: 'QGIS', logo: '🌍', description: 'Open-source GIS platform integration', status: 'Active' },
    { name: 'MapBox', logo: '🗾', description: 'Custom mapping and location services', status: 'Active' },
    { name: 'Google Earth Engine', logo: '🌎', description: 'Planetary-scale geospatial analysis', status: 'Beta' }
  ],
  cloud: [
    { name: 'AWS', logo: '☁️', description: 'Complete AWS services integration', status: 'Active' },
    { name: 'Microsoft Azure', logo: '🔷', description: 'Azure cloud platform integration', status: 'Active' },
    { name: 'Google Cloud', logo: '🌐', description: 'GCP services and ML integration', status: 'Active' },
    { name: 'Kubernetes', logo: '⚙️', description: 'Container orchestration platform', status: 'Active' }
  ],
  analytics: [
    { name: 'Tableau', logo: '📊', description: 'Advanced data visualization platform', status: 'Active' },
    { name: 'Power BI', logo: '📈', description: 'Microsoft business intelligence suite', status: 'Active' },
    { name: 'R & Python', logo: '🐍', description: 'Statistical computing environments', status: 'Active' },
    { name: 'Apache Spark', logo: '⚡', description: 'Large-scale data processing engine', status: 'Active' }
  ],
  databases: [
    { name: 'PostgreSQL/PostGIS', logo: '🐘', description: 'Spatial database extensions', status: 'Active' },
    { name: 'MongoDB', logo: '🍃', description: 'NoSQL document database', status: 'Active' },
    { name: 'Oracle Spatial', logo: '🔴', description: 'Enterprise spatial database', status: 'Active' },
    { name: 'Redis', logo: '🔥', description: 'In-memory data structure store', status: 'Active' }
  ],
  iot: [
    { name: 'IoT Core', logo: '🔗', description: 'Device connectivity and management', status: 'Active' },
    { name: 'MQTT Brokers', logo: '📡', description: 'Real-time IoT messaging', status: 'Active' },
    { name: 'LoRaWAN', logo: '📶', description: 'Long-range IoT networking', status: 'Active' },
    { name: 'Sensor Networks', logo: '📊', description: 'Environmental sensor integration', status: 'Beta' }
  ],
  mobile: [
    { name: 'React Native', logo: '📱', description: 'Cross-platform mobile development', status: 'Active' },
    { name: 'Flutter', logo: '🎯', description: 'Google mobile UI framework', status: 'Active' },
    { name: 'Progressive Web Apps', logo: '🌐', description: 'Web-based mobile experiences', status: 'Active' },
    { name: 'Native iOS/Android', logo: '📲', description: 'Native mobile app SDKs', status: 'Active' }
  ]
};

export default function TechnologyIntegrations() {
  const [activeCategory, setActiveCategory] = useState('gis');

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
            Technology Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with the tools and platforms your team already uses. Our extensive integration library 
            ensures seamless data flow across your entire technology stack.
          </motion.p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {integrationCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`p-6 rounded-xl text-center transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <category.icon className={`w-8 h-8 mx-auto mb-3 ${
                activeCategory === category.id ? 'text-white' : 'text-gray-600'
              }`} />
              <div className="font-semibold text-sm mb-1">{category.name}</div>
              <div className={`text-xs ${
                activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
              }`}>
                {category.count} integrations
              </div>
            </motion.button>
          ))}
        </div>

        {/* Featured Integrations */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIntegrations[activeCategory as keyof typeof featuredIntegrations]?.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-3">{integration.logo}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    integration.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Learn more
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center p-6"
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Universal Connectivity</h3>
            <p className="text-gray-600">
              Connect to any data source, cloud platform, or analysis tool with our comprehensive API library.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CubeIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Pre-built Connectors</h3>
            <p className="text-gray-600">
              Leverage hundreds of pre-built connectors and integrations to get up and running in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Sync</h3>
            <p className="text-gray-600">
              Keep all your systems in perfect sync with real-time data synchronization and event streaming.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}