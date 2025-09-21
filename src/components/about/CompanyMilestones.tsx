'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  UsersIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon,
  HeartIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const milestones = [
  {
    category: 'Product & Technology',
    icon: LightBulbIcon,
    color: 'from-blue-500 to-indigo-600',
    achievements: [
      {
        year: '2019',
        title: 'First Patent Granted',
        description: 'Received our first patent for real-time geospatial data processing algorithms.'
      },
      {
        year: '2020',
        title: 'Cloud Platform Launch',
        description: 'Successfully launched our cloud-based geospatial intelligence platform.'
      },
      {
        year: '2021',
        title: 'AI Integration',
        description: 'Integrated machine learning capabilities for automated spatial pattern recognition.'
      },
      {
        year: '2022',
        title: 'Real-time Processing',
        description: 'Achieved sub-second processing times for massive geospatial datasets.'
      },
      {
        year: '2023',
        title: 'Mobile SDK Release',
        description: 'Released comprehensive mobile SDKs for iOS and Android platforms.'
      }
    ]
  },
  {
    category: 'Business Growth',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-600',
    achievements: [
      {
        year: '2019',
        title: 'Series A Funding',
        description: 'Raised $5M Series A led by top-tier venture capital firms.'
      },
      {
        year: '2020',
        title: '100th Customer',
        description: 'Celebrated our 100th customer milestone across 15 countries.'
      },
      {
        year: '2021',
        title: 'Series B Funding',
        description: 'Completed $25M Series B round to accelerate global expansion.'
      },
      {
        year: '2022',
        title: 'Enterprise Breakthrough',
        description: 'Signed first Fortune 500 customers and achieved $10M ARR.'
      },
      {
        year: '2023',
        title: 'Unicorn Valuation',
        description: 'Achieved $1B+ valuation following Series C funding round.'
      }
    ]
  },
  {
    category: 'Team & Culture',
    icon: UsersIcon,
    color: 'from-purple-500 to-pink-600',
    achievements: [
      {
        year: '2019',
        title: 'Remote-First Culture',
        description: 'Established fully distributed team culture with global talent.'
      },
      {
        year: '2020',
        title: 'Best Places to Work',
        description: 'Named to "Best Places to Work in Tech" by multiple publications.'
      },
      {
        year: '2021',
        title: 'Diversity Milestone',
        description: 'Achieved 50% diversity in technical roles and leadership positions.'
      },
      {
        year: '2022',
        title: 'Global Offices',
        description: 'Opened offices in London, Tokyo, and São Paulo.'
      },
      {
        year: '2023',
        title: '500+ Employees',
        description: 'Grew to over 500 team members across 25+ countries.'
      }
    ]
  },
  {
    category: 'Industry Recognition',
    icon: TrophyIcon,
    color: 'from-yellow-500 to-orange-600',
    achievements: [
      {
        year: '2019',
        title: 'Innovation Award',
        description: 'Won "Most Innovative Geospatial Solution" at FOSS4G conference.'
      },
      {
        year: '2020',
        title: 'Tech50 Recognition',
        description: 'Named to Forbes "Tech50" list of most promising startups.'
      },
      {
        year: '2021',
        title: 'Industry Leadership',
        description: 'CEO named "Geospatial Executive of the Year" by industry association.'
      },
      {
        year: '2022',
        title: 'Product Excellence',
        description: 'Platform voted "Best Enterprise GIS Solution" by user community.'
      },
      {
        year: '2023',
        title: 'Sustainability Leader',
        description: 'Recognized as "Sustainability Technology Leader" for environmental impact.'
      }
    ]
  }
];

const stats = [
  { label: 'Countries Served', value: '75+', icon: GlobeAltIcon },
  { label: 'Enterprise Customers', value: '1,000+', icon: BuildingOfficeIcon },
  { label: 'Data Points Processed', value: '1T+', icon: ChartBarIcon },
  { label: 'Awards Received', value: '25+', icon: TrophyIcon },
  { label: 'Team Members', value: '500+', icon: UsersIcon },
  { label: 'Open Source Contributions', value: '100+', icon: HeartIcon }
];

export default function CompanyMilestones() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Milestones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our first lines of code to becoming a global leader in geospatial intelligence, 
            every milestone represents our commitment to innovation and excellence.
          </p>
        </motion.div>

        {/* Current Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
              Where We Stand Today
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Milestone Categories */}
        <div className="space-y-16">
          {milestones.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-br ${category.color} rounded-xl w-16 h-16 flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className={`absolute left-8 top-0 w-1 h-full bg-gradient-to-b ${category.color} rounded-full opacity-20`}></div>
                
                {/* Achievements */}
                <div className="space-y-8">
                  {category.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex items-start"
                    >
                      {/* Timeline Node */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-6 flex-shrink-0 shadow-lg`}>
                        {achievement.year}
                      </div>
                      
                      {/* Content */}
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <AcademicCapIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">What's Next</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Our journey is far from over. We're working on groundbreaking innovations in 
              spatial AI, quantum computing applications, and next-generation visualization 
              technologies that will shape the future of geospatial intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-xl font-bold mb-2">2024</div>
                <div className="text-sm opacity-90">Quantum GIS Algorithms</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-xl font-bold mb-2">2025</div>
                <div className="text-sm opacity-90">AR/VR Spatial Interface</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-xl font-bold mb-2">2026</div>
                <div className="text-sm opacity-90">Global IPO Launch</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recognition Wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Recent Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { award: 'Best Enterprise Software', org: 'TechCrunch', year: '2023' },
              { award: 'Innovation Excellence', org: 'Gartner', year: '2023' },
              { award: 'Top Workplace Culture', org: 'Glassdoor', year: '2023' },
              { award: 'Sustainability Leader', org: 'Green Tech', year: '2023' }
            ].map((recognition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{recognition.award}</div>
                <div className="text-gray-600 text-xs">{recognition.org} • {recognition.year}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}