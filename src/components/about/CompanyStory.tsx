'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const storyMilestones = [
  {
    year: '2018',
    title: 'The Spark of Innovation',
    icon: LightBulbIcon,
    description: 'Founded by three PhD researchers who witnessed firsthand the challenges of working with geospatial data in academic and enterprise environments.',
    details: 'After years of struggling with fragmented tools and complex workflows, our founders envisioned a unified platform that could democratize spatial analysis.'
  },
  {
    year: '2019',
    title: 'First Product Launch',
    icon: RocketLaunchIcon,
    description: 'Released our MVP to a select group of research institutions and received overwhelming positive feedback from early adopters.',
    details: 'The initial product focused on simplifying data visualization and basic spatial queries, serving 50+ researchers across 5 universities.'
  },
  {
    year: '2020',
    title: 'Growing the Team',
    icon: UserGroupIcon,
    description: 'Expanded from 3 founders to a team of 25 passionate engineers, designers, and geospatial experts from around the world.',
    details: 'Our remote-first culture attracted top talent from leading tech companies and research institutions, forming the foundation of our innovative team.'
  },
  {
    year: '2021',
    title: 'Enterprise Breakthrough',
    icon: SparklesIcon,
    description: 'Secured our first major enterprise clients and achieved significant platform scalability improvements to handle massive datasets.',
    details: 'This year marked our transition from an academic tool to a enterprise-grade platform, processing over 1TB of geospatial data daily.'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    icon: GlobeAltIcon,
    description: 'Established international presence with offices in Europe and Asia, serving customers across 6 continents.',
    details: 'Our platform now supports multiple languages and regional data formats, making geospatial technology accessible to diverse global communities.'
  }
];

export default function CompanyStory() {
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
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From a small research project to a global platform trusted by thousands of organizations. 
            Discover the journey that shaped our mission to transform geospatial technology.
          </motion.p>
        </div>

        {/* Story Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12 mb-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              "Every great innovation starts with a problem that needs solving."
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2018, our founders were working on environmental research projects that required complex 
              geospatial analysis. They spent more time wrestling with data formats, integration challenges, 
              and toolchain complexity than actually analyzing the data and deriving insights.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This frustration sparked an idea: What if there was a platform that made geospatial technology 
              as accessible as a spreadsheet, but as powerful as the most advanced GIS systems? That vision 
              became the foundation of our company.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <milestone.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{milestone.description}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.details}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gray-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Today and Tomorrow</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today, we're proud to serve over 10,000 organizations worldwide, from cutting-edge startups 
              to Fortune 500 companies and leading research institutions. Our platform processes petabytes 
              of geospatial data, enabling breakthrough discoveries and business innovations daily.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But we're just getting started. Our vision extends beyond today's challenges to tomorrow's 
              opportunities. We're building the infrastructure for a world where spatial intelligence 
              drives every important decision, where geographic barriers dissolve, and where the power 
              of location data is accessible to everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}