'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  BuildingOfficeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const successMetrics = [
  {
    metric: 'Average Revenue Growth',
    value: '247%',
    description: 'Partner revenue increase in first 18 months',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-600'
  },
  {
    metric: 'Customer Satisfaction',
    value: '98.5%',
    description: 'Average customer satisfaction score across partners',
    icon: StarIcon,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    metric: 'Partner Retention',
    value: '94%',
    description: 'Partners continuing partnership year-over-year',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    metric: 'Market Expansion',
    value: '156%',
    description: 'Average market expansion achieved by partners',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-600'
  }
];

const successStories = [
  {
    company: 'TechFlow Solutions',
    logo: '🔧',
    industry: 'System Integration',
    location: 'United States',
    partnerSince: '2021',
    tier: 'Platinum Partner',
    challenge: 'TechFlow needed to expand their GIS capabilities to serve large enterprise clients with complex spatial data requirements.',
    solution: 'Leveraged our platform and partner program to build a comprehensive geospatial practice with certified professionals.',
    results: [
      { metric: 'Revenue Growth', value: '+340%' },
      { metric: 'Team Expansion', value: '8 → 24 people' },
      { metric: 'Client Base', value: '+180% growth' },
      { metric: 'Certifications', value: '12 professionals' }
    ],
    testimonial: "Partnering with them transformed our business. The comprehensive training, technical support, and sales enablement tools helped us become the leading GIS integrator in our region.",
    spokesperson: "Sarah Chen, CEO"
  },
  {
    company: 'DataVision Analytics',
    logo: '📊',
    industry: 'Data Analytics',
    location: 'United Kingdom',
    partnerSince: '2020',
    tier: 'Gold Partner',
    challenge: 'DataVision wanted to add geospatial analytics to their existing business intelligence services for government clients.',
    solution: 'Utilized our specialized training programs and API ecosystem to integrate geospatial capabilities into their existing platform.',
    results: [
      { metric: 'Revenue Growth', value: '+285%' },
      { metric: 'New Markets', value: '3 countries' },
      { metric: 'Client Retention', value: '97%' },
      { metric: 'Project Success', value: '100%' }
    ],
    testimonial: "The partner program exceeded our expectations. Not only did we successfully enter the geospatial market, but we've become a trusted advisor to government agencies across Europe.",
    spokesperson: "James Morrison, CTO"
  },
  {
    company: 'APAC GeoServices',
    logo: '🌏',
    industry: 'Consulting',
    location: 'Singapore',
    partnerSince: '2022',
    tier: 'Gold Partner',
    challenge: 'A startup consulting firm looking to establish credibility and compete with larger, established GIS consulting companies.',
    solution: 'Leveraged our brand recognition, training programs, and lead sharing to rapidly build their consulting practice.',
    results: [
      { metric: 'Revenue Growth', value: '+420%' },
      { metric: 'Staff Growth', value: '3 → 18 people' },
      { metric: 'Enterprise Clients', value: '25 clients' },
      { metric: 'Market Share', value: 'Top 3 in region' }
    ],
    testimonial: "As a new company, the partner program gave us instant credibility and access to resources that would have taken years to develop independently. We're now competing successfully with industry giants.",
    spokesperson: "Li Wei, Founder"
  }
];

const partnerAwards = [
  {
    year: '2024',
    award: 'Partner of the Year',
    recipient: 'GeoTech Solutions',
    category: 'Innovation Excellence',
    achievement: 'Developed breakthrough IoT-GIS integration platform'
  },
  {
    year: '2024',
    award: 'Growth Partner',
    recipient: 'DataFlow Systems',
    category: 'Revenue Achievement',
    achievement: 'Achieved 500% revenue growth in 12 months'
  },
  {
    year: '2023',
    award: 'Technical Excellence',
    recipient: 'Spatial Analytics Pro',
    category: 'Implementation Quality',
    achievement: 'Perfect implementation success rate across 50+ projects'
  },
  {
    year: '2023',
    award: 'Regional Leader',
    recipient: 'EuroGIS Partners',
    category: 'Market Expansion',
    achievement: 'Successful expansion into 8 European countries'
  }
];

const industryFocus = [
  {
    industry: 'Government & Public Sector',
    partners: 45,
    successRate: '96%',
    avgGrowth: '+180%',
    icon: '🏛️',
    keyAchievements: ['Smart city implementations', 'Emergency response systems', 'Infrastructure management']
  },
  {
    industry: 'Energy & Utilities',
    partners: 32,
    successRate: '94%',
    avgGrowth: '+220%',
    icon: '⚡',
    keyAchievements: ['Pipeline monitoring', 'Grid optimization', 'Asset management']
  },
  {
    industry: 'Transportation & Logistics',
    partners: 28,
    successRate: '97%',
    avgGrowth: '+265%',
    icon: '🚛',
    keyAchievements: ['Route optimization', 'Fleet management', 'Supply chain visibility']
  },
  {
    industry: 'Healthcare & Life Sciences',
    partners: 24,
    successRate: '98%',
    avgGrowth: '+310%',
    icon: '🏥',
    keyAchievements: ['Epidemiology mapping', 'Facility planning', 'Emergency preparedness']
  }
];

export default function PartnerSuccess() {
  const [activeStory, setActiveStory] = useState(0);

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
            Partner Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how our partners are transforming their businesses and achieving 
            remarkable growth with our comprehensive partner program and platform.
          </motion.p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`bg-gradient-to-r ${metric.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Success Stories */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Featured Success Stories
          </motion.h3>

          {/* Story Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {successStories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeStory === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {story.company}
              </button>
            ))}
          </div>

          {/* Active Story */}
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story Details */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{successStories[activeStory].logo}</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{successStories[activeStory].company}</h4>
                    <div className="text-blue-600 font-medium">{successStories[activeStory].industry}</div>
                    <div className="text-gray-500 text-sm">
                      {successStories[activeStory].location} • Partner since {successStories[activeStory].partnerSince}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {successStories[activeStory].tier}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                    <p className="text-gray-600">{successStories[activeStory].challenge}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                    <p className="text-gray-600">{successStories[activeStory].solution}</p>
                  </div>

                  <div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <ChatBubbleLeftIcon className="w-8 h-8 text-blue-600 mb-4" />
                      <blockquote className="text-gray-700 italic mb-4">
                        "{successStories[activeStory].testimonial}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        — {successStories[activeStory].spokesperson}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h5 className="font-semibold text-gray-900 mb-6">Results Achieved</h5>
                <div className="grid grid-cols-2 gap-6">
                  {successStories[activeStory].results.map((result, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner Awards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Partner Recognition Awards
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <TrophyIcon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{award.award} {award.year}</div>
                    <div className="text-blue-600 font-medium">{award.recipient}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {award.category}
                  </span>
                </div>
                <p className="text-gray-600">{award.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Success */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Success Across Industries
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFocus.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{industry.industry}</h4>
                  <div className="text-blue-600 font-bold text-2xl">{industry.partners}</div>
                  <div className="text-gray-500 text-sm">Active Partners</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-sm font-medium text-green-600">{industry.successRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg Growth</span>
                    <span className="text-sm font-medium text-blue-600">{industry.avgGrowth}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Key Achievements</h5>
                  <ul className="space-y-1">
                    {industry.keyAchievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
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
          <TrophyIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of our thriving partner ecosystem and write your own success story. 
            Our proven program and comprehensive support will help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
              Start Your Journey
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View All Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}