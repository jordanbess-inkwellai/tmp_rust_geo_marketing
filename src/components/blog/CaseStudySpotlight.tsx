'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  TruckIcon,
  HomeModernIcon,
  GlobeAmericasIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const caseStudies = [
  {
    id: 1,
    title: 'Smart City Infrastructure: San Francisco\'s Digital Twin',
    subtitle: 'How San Francisco built a comprehensive digital twin for urban planning and emergency response',
    client: 'City of San Francisco',
    industry: 'Smart Cities',
    publishDate: '2024-01-20',
    readTime: '12 min read',
    featured: true,
    icon: BuildingOfficeIcon,
    color: 'from-blue-500 to-cyan-600',
    image: '/api/placeholder/600/400',
    challenge: 'Managing complex urban infrastructure across 47 square miles with limited visibility into real-time conditions',
    solution: 'Comprehensive digital twin platform integrating IoT sensors, traffic data, and infrastructure monitoring',
    results: [
      { metric: '45%', description: 'Reduction in emergency response time' },
      { metric: '60%', description: 'Improvement in traffic flow optimization' },
      { metric: '$12M', description: 'Annual savings in infrastructure maintenance' },
      { metric: '25%', description: 'Decrease in carbon emissions' }
    ],
    tags: ['Digital Twin', 'Smart Cities', 'IoT Integration', 'Emergency Response'],
    testimonial: {
      quote: 'This platform has revolutionized how we manage our city. The real-time insights and predictive capabilities have made us more responsive and efficient than ever before.',
      author: 'Maria Rodriguez',
      position: 'Director of Digital Innovation',
      company: 'City of San Francisco'
    }
  },
  {
    id: 2,
    title: 'Global Supply Chain Optimization for Fortune 500 Retailer',
    subtitle: 'Transforming logistics operations with real-time geospatial intelligence and predictive analytics',
    client: 'Global Retail Corporation',
    industry: 'Retail & Logistics',
    publishDate: '2024-01-18',
    readTime: '15 min read',
    featured: true,
    icon: TruckIcon,
    color: 'from-green-500 to-emerald-600',
    image: '/api/placeholder/600/400',
    challenge: 'Managing 10,000+ delivery routes across 50 countries with rising fuel costs and customer expectations',
    solution: 'AI-powered route optimization platform with real-time tracking and predictive delivery windows',
    results: [
      { metric: '35%', description: 'Reduction in delivery costs' },
      { metric: '90%', description: 'On-time delivery rate improvement' },
      { metric: '2.5M', description: 'Tons of CO2 emissions reduced annually' },
      { metric: '99.2%', description: 'Customer satisfaction score' }
    ],
    tags: ['Supply Chain', 'Route Optimization', 'Predictive Analytics', 'Sustainability'],
    testimonial: {
      quote: 'The platform\'s ability to adapt to real-time conditions and optimize our entire supply chain has exceeded our expectations. We\'ve achieved cost savings we never thought possible.',
      author: 'James Chen',
      position: 'VP of Global Logistics',
      company: 'Confidential Fortune 500 Retailer'
    }
  },
  {
    id: 3,
    title: 'Renewable Energy Grid Management for Utility Provider',
    subtitle: 'Optimizing renewable energy distribution across a smart grid network using advanced geospatial modeling',
    client: 'Pacific Energy Solutions',
    industry: 'Energy & Utilities',
    publishDate: '2024-01-15',
    readTime: '10 min read',
    featured: false,
    icon: BoltIcon,
    color: 'from-yellow-500 to-orange-600',
    image: '/api/placeholder/600/400',
    challenge: 'Balancing renewable energy sources across a complex grid while maintaining reliability and efficiency',
    solution: 'Smart grid management platform with predictive weather modeling and demand forecasting',
    results: [
      { metric: '40%', description: 'Increase in renewable energy utilization' },
      { metric: '25%', description: 'Reduction in grid downtime' },
      { metric: '$8M', description: 'Annual operational savings' },
      { metric: '30%', description: 'Improvement in load balancing efficiency' }
    ],
    tags: ['Smart Grid', 'Renewable Energy', 'Predictive Modeling', 'Sustainability'],
    testimonial: {
      quote: 'This solution has transformed our approach to renewable energy management. We can now maximize clean energy usage while maintaining grid stability.',
      author: 'Dr. Sarah Kim',
      position: 'Chief Technology Officer',
      company: 'Pacific Energy Solutions'
    }
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
};

export default function CaseStudySpotlight() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <ChartBarIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Customer Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations worldwide are transforming their operations and achieving 
            remarkable results with our geospatial intelligence platform.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  {/* Header with Gradient */}
                  <div className={`h-40 bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <StarIcon className="w-4 h-4 mr-2" />
                        Featured Case Study
                      </div>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <study.icon className="w-20 h-20 text-white/20" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title & Meta */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {study.subtitle}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {study.readTime}
                        </span>
                        <span>{formatDate(study.publishDate)}</span>
                        <span className="flex items-center">
                          <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                          {study.client}
                        </span>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <ShieldCheckIcon className="w-5 h-5 mr-2 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <BoltIcon className="w-5 h-5 mr-2 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors duration-300">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                          <div className="text-gray-600 text-sm leading-tight">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-4 italic">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{study.testimonial.author}</div>
                          <div className="text-gray-600 text-xs">
                            {study.testimonial.position}, {study.testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tags & CTA */}
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-500">
                          <ArrowTrendingUpIcon className="w-4 h-4 mr-2" />
                          Measurable Impact
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          Read Full Case Study
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Additional Case Study */}
        {regularStudies.length > 0 && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Success Stories</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore additional case studies showcasing innovative implementations across various industries.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {regularStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="lg:flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center mr-4`}>
                          <study.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{study.subtitle}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                        <span>{study.client}</span>
                        <span>{formatDate(study.publishDate)}</span>
                        <span>{study.readTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-80">
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.slice(0, 4).map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-blue-600 mb-1">{result.metric}</div>
                            <div className="text-gray-600 text-xs leading-tight">{result.description}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center w-full group-hover:translate-x-2 transition-transform duration-300">
                          View Complete Study
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-8">
            <UserGroupIcon className="w-16 h-16 text-green-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Ready to Write Your Success Story?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Join hundreds of organizations that have transformed their operations with our platform. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Schedule a Demo
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Browse All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}