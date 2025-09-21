'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  AcademicCapIcon,
  CogIcon,
  GlobeAltIcon,
  StarIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const partnerTiers = [
  {
    id: 'premier',
    name: 'Premier Partners',
    badge: '⭐',
    count: 45,
    description: 'Elite partners with proven expertise and dedicated support',
    benefits: ['Dedicated account manager', 'Priority support', 'Co-marketing opportunities', 'Advanced training']
  },
  {
    id: 'certified',
    name: 'Certified Partners',
    badge: '✅',
    count: 120,
    description: 'Qualified partners with validated expertise and certifications',
    benefits: ['Technical certification', 'Partner portal access', 'Sales enablement', 'Lead sharing']
  },
  {
    id: 'solution',
    name: 'Solution Partners',
    badge: '🔧',
    count: 85,
    description: 'Specialized partners focused on specific industry solutions',
    benefits: ['Solution certification', 'Technical resources', 'Joint go-to-market', 'Reference opportunities']
  }
];

const partnerTypes = [
  {
    id: 'consulting',
    name: 'Consulting Partners',
    icon: BuildingOfficeIcon,
    count: 95,
    description: 'Professional services and implementation specialists',
    specialties: ['Implementation', 'Custom Development', 'Training', 'Strategy Consulting']
  },
  {
    id: 'technology',
    name: 'Technology Partners',
    icon: CogIcon,
    count: 78,
    description: 'Software vendors with integrated solutions',
    specialties: ['Software Integration', 'Platform Extensions', 'API Development', 'Third-party Tools']
  },
  {
    id: 'education',
    name: 'Education Partners',
    icon: AcademicCapIcon,
    count: 42,
    description: 'Universities and training organizations',
    specialties: ['Curriculum Development', 'Student Programs', 'Research Collaboration', 'Certification Training']
  },
  {
    id: 'regional',
    name: 'Regional Partners',
    icon: GlobeAltIcon,
    count: 135,
    description: 'Local partners serving specific geographic regions',
    specialties: ['Local Support', 'Regional Sales', 'Cultural Adaptation', 'Market Entry']
  }
];

const featuredPartners = [
  {
    name: 'GeoSolutions Inc.',
    type: 'Premier Consulting',
    logo: '🌐',
    location: 'Global',
    specialties: ['Enterprise GIS', 'Data Migration', 'Custom Dashboards'],
    description: 'Leading GIS consulting firm with 15+ years of experience in enterprise implementations.',
    certifications: ['Advanced Implementation', 'Data Architecture', 'Security Specialist']
  },
  {
    name: 'DataSync Technologies',
    type: 'Certified Technology',
    logo: '🔄',
    location: 'North America',
    specialties: ['Real-time Integration', 'IoT Platforms', 'Analytics'],
    description: 'Specialists in real-time data integration and IoT platform development.',
    certifications: ['API Integration', 'IoT Specialist', 'Cloud Architecture']
  },
  {
    name: 'MapTech University',
    type: 'Education Partner',
    logo: '🎓',
    location: 'United States',
    specialties: ['GIS Curriculum', 'Student Licensing', 'Research Projects'],
    description: 'Leading university program in geospatial technologies and research.',
    certifications: ['Education Excellence', 'Research Partnership', 'Curriculum Design']
  },
  {
    name: 'APAC Spatial Solutions',
    type: 'Premier Regional',
    logo: '🗾',
    location: 'Asia-Pacific',
    specialties: ['Regional Deployment', 'Localization', 'Government Solutions'],
    description: 'Premier partner serving government and enterprise clients across APAC region.',
    certifications: ['Regional Excellence', 'Government Solutions', 'Multi-language Support']
  }
];

export default function CertifiedPartners() {
  const [activeType, setActiveType] = useState('consulting');

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
            Certified Partner Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Work with trusted experts who have proven expertise in implementing, customizing, 
            and supporting our platform across diverse industries and use cases.
          </motion.p>
        </div>

        {/* Partner Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{tier.badge}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{tier.count}</div>
                <p className="text-gray-600">{tier.description}</p>
              </div>
              <div className="space-y-3">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Types */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {partnerTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveType(type.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeType === type.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm'
                }`}
              >
                <type.icon className={`w-8 h-8 mb-4 ${
                  activeType === type.id ? 'text-white' : 'text-blue-600'
                }`} />
                <h3 className="font-semibold mb-2">{type.name}</h3>
                <div className={`text-2xl font-bold mb-2 ${
                  activeType === type.id ? 'text-white' : 'text-blue-600'
                }`}>
                  {type.count}
                </div>
                <p className={`text-sm ${
                  activeType === type.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {type.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Partner Specialties */}
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {partnerTypes.find(type => type.id === activeType)?.name} Specialties
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partnerTypes.find(type => type.id === activeType)?.specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-4 text-center"
                >
                  <div className="font-medium text-blue-900">{specialty}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Partners */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Featured Partners
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{partner.logo}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{partner.name}</h4>
                      <div className="text-blue-600 font-medium">{partner.type}</div>
                      <div className="text-gray-500 text-sm">{partner.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                    <StarIcon className="w-5 h-5 fill-current" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{partner.description}</p>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-3">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-3">Certifications</h5>
                  <div className="space-y-2">
                    {partner.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-2" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Connect with Partner
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Program CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white"
        >
          <UsersIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Partner Network?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expand your business opportunities and provide exceptional value to your clients 
            with our comprehensive partner program and world-class support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}