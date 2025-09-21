'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  UserPlusIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const jobCategories = [
  {
    icon: RocketLaunchIcon,
    title: 'Engineering',
    description: 'Build the next generation of geospatial intelligence platforms',
    openings: 12,
    color: 'from-blue-500 to-indigo-600',
    roles: [
      'Senior Full-Stack Engineer',
      'DevOps Engineer',
      'Mobile App Developer',
      'Machine Learning Engineer'
    ]
  },
  {
    icon: SparklesIcon,
    title: 'Product & Design',
    description: 'Shape user experiences that make complex data intuitive and actionable',
    openings: 5,
    color: 'from-purple-500 to-pink-600',
    roles: [
      'Senior Product Manager',
      'UX/UI Designer',
      'Product Marketing Manager',
      'Technical Writer'
    ]
  },
  {
    icon: AcademicCapIcon,
    title: 'Data & Research',
    description: 'Drive scientific breakthroughs in spatial analysis and data processing',
    openings: 8,
    color: 'from-green-500 to-emerald-600',
    roles: [
      'Senior Data Scientist',
      'Research Scientist',
      'GIS Specialist',
      'Geospatial Analyst'
    ]
  },
  {
    icon: BriefcaseIcon,
    title: 'Business & Operations',
    description: 'Scale our global operations and drive strategic partnerships',
    openings: 6,
    color: 'from-yellow-500 to-orange-600',
    roles: [
      'Sales Engineer',
      'Customer Success Manager',
      'Business Development',
      'Marketing Manager'
    ]
  }
];

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Compensation',
    description: 'Top-tier salaries, equity packages, and performance bonuses'
  },
  {
    icon: GlobeAltIcon,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and global collaboration'
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning & Growth',
    description: '$3,000 annual learning budget plus conference attendance'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation Time',
    description: '20% time for passion projects and experimental ideas'
  },
  {
    icon: ClockIcon,
    title: 'Work-Life Balance',
    description: 'Unlimited PTO, mental health support, and wellness programs'
  },
  {
    icon: MapPinIcon,
    title: 'Global Impact',
    description: 'Work on projects that solve real-world challenges worldwide'
  }
];

const hiringProcess = [
  {
    step: '01',
    title: 'Application Review',
    description: 'We review your application and portfolio within 48 hours',
    duration: '1-2 days'
  },
  {
    step: '02',
    title: 'Initial Screen',
    description: 'Casual conversation with our recruiting team about your background',
    duration: '30 minutes'
  },
  {
    step: '03',
    title: 'Technical Interview',
    description: 'Deep dive into your technical skills and problem-solving approach',
    duration: '60-90 minutes'
  },
  {
    step: '04',
    title: 'Team Interview',
    description: 'Meet your potential teammates and discuss collaboration style',
    duration: '45 minutes'
  },
  {
    step: '05',
    title: 'Final Interview',
    description: 'Leadership conversation about company fit and career goals',
    duration: '30 minutes'
  }
];

export default function JoinUs() {
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
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <UserPlusIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Help us build the future of geospatial intelligence. We're looking for passionate individuals 
            who want to make a real impact through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center">
              View All Openings
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Join Our Talent Network
            </button>
          </div>
        </motion.div>

        {/* Job Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Open Positions by Category
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02] border border-gray-200 h-full">
                  <div className="flex items-start mb-6">
                    <div className={`bg-gradient-to-br ${category.color} rounded-xl w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {category.openings} openings
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Example Roles
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.roles.map((role, idx) => (
                        <div key={idx} className="text-gray-700 text-sm leading-relaxed flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      View All {category.title} Jobs
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Why Join Our Team?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hiring Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Hiring Process
          </h3>
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {hiringProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-bold text-lg">{process.step}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{process.title}</h4>
                          <span className="text-blue-600 text-sm font-medium">{process.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Shape the Future?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Join a team of world-class engineers, researchers, and innovators who are building 
              the infrastructure for a more spatially intelligent world. Your work will have 
              global impact and help solve some of humanity's greatest challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Apply Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Schedule a Chat
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Questions About Working With Us?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out to our talent team for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:careers@tmg-geo.com" className="text-blue-600 hover:text-blue-700 font-medium">
              careers@tmg-geo.com
            </a>
            <span className="text-gray-400 hidden sm:block">•</span>
            <a href="https://linkedin.com/company/tmg-geo" className="text-blue-600 hover:text-blue-700 font-medium" target="_blank" rel="noopener noreferrer">
              Follow us on LinkedIn
            </a>
            <span className="text-gray-400 hidden sm:block">•</span>
            <a href="/blog/working-at-tmg" className="text-blue-600 hover:text-blue-700 font-medium">
              Read about our culture
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}