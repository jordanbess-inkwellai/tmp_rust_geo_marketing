'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  SparklesIcon,
  UserGroupIcon,
  HeartIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const reasons = [
  {
    icon: RocketLaunchIcon,
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest technologies in geospatial intelligence, machine learning, and distributed systems.',
    details: [
      'Build systems processing petabytes of geospatial data',
      'Work with advanced ML/AI algorithms and computer vision',
      'Use modern tech stack: React, TypeScript, Python, Rust, Kubernetes'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'Your work will help solve critical challenges in climate change, urban planning, and disaster response.',
    details: [
      'Enable better environmental monitoring and protection',
      'Support disaster response and humanitarian efforts',
      'Contribute to smart city planning and development'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: AcademicCapIcon,
    title: 'Continuous Learning',
    description: 'Invest in your growth with comprehensive learning programs and research opportunities.',
    details: [
      '$3,000+ annual learning budget for courses and conferences',
      'Collaborate with leading researchers and academics',
      'Attend top industry conferences like FOSS4G and SIGGRAPH'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation Freedom',
    description: 'Dedicate 20% of your time to passion projects and experimental ideas that could shape our future.',
    details: [
      'Monthly innovation showcases and hackathons',
      'Freedom to explore cutting-edge research topics',
      'Direct path from prototype to production features'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: UserGroupIcon,
    title: 'World-Class Team',
    description: 'Collaborate with exceptional engineers, researchers, and domain experts from top companies.',
    details: [
      'Team members from Google, NASA, Apple, MIT, Stanford',
      'Regular knowledge sharing sessions and tech talks',
      'Mentorship programs and peer learning opportunities'
    ],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: SparklesIcon,
    title: 'Ownership & Autonomy',
    description: 'Take ownership of important projects and make decisions that impact millions of users.',
    details: [
      'Lead entire product features from conception to launch',
      'Direct communication with customers and stakeholders',
      'Flexible work arrangements and self-directed projects'
    ],
    color: 'from-pink-500 to-rose-600'
  }
];

const achievements = [
  {
    icon: TrophyIcon,
    title: 'Industry Recognition',
    stats: '25+ Awards',
    description: 'Recognized as leaders in geospatial innovation'
  },
  {
    icon: AcademicCapIcon,
    title: 'Research Impact',
    stats: '50+ Publications',
    description: 'Contributing to academic research and open source'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    stats: '75+ Countries',
    description: 'Serving organizations worldwide'
  },
  {
    icon: HeartIcon,
    title: 'Team Satisfaction',
    stats: '95% Rating',
    description: 'Consistently high employee satisfaction scores'
  }
];

export default function WhyWorkHere() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a mission-driven company where your work has global impact and your growth 
            is our priority. Discover why top talent chooses to build their careers with us.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-start mb-6">
                  <div className={`bg-gradient-to-br ${reason.color} rounded-xl w-14 h-14 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{reason.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Track Record
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.stats}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employee Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <HeartIcon className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-2xl font-medium leading-relaxed mb-8">
              "This is the most innovative and supportive environment I've ever worked in. 
              The combination of cutting-edge technology, meaningful impact, and amazing 
              colleagues makes every day exciting and rewarding."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                DR
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Dr. Rachel Martinez</div>
                <div className="text-blue-200">Principal Research Scientist</div>
                <div className="text-blue-300 text-sm">Joined from Stanford AI Lab</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Growth Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Your Growth Journey
          </h3>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Onboarding Excellence</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive 30-day onboarding with dedicated mentor, 
                  technical training, and gradual project integration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Continuous Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Regular 1:1s, skill development plans, conference attendance, 
                  and cross-team collaboration opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership Pathways</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Clear advancement opportunities, leadership training, 
                  and paths to technical or management excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}