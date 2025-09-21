'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  SparklesIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const coreValues = [
  {
    icon: LightBulbIcon,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technology and creative problem-solving to push the boundaries of what\'s possible in geospatial intelligence.',
    principles: [
      'Encourage experimentation and calculated risk-taking',
      'Invest in research and emerging technologies',
      'Foster a culture of continuous learning and improvement'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration & Respect',
    description: 'We believe that diverse perspectives and inclusive teamwork create the strongest solutions and most innovative breakthroughs.',
    principles: [
      'Value every team member\'s unique contributions',
      'Promote open communication and transparent feedback',
      'Build bridges across disciplines and departments'
    ],
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity & Trust',
    description: 'We operate with complete transparency, ethical practices, and unwavering commitment to our customers\' success and data security.',
    principles: [
      'Maintain the highest standards of data privacy',
      'Deliver on promises with consistent reliability',
      'Practice honest communication in all relationships'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: SparklesIcon,
    title: 'Excellence in Execution',
    description: 'We pursue perfection in everything we do, from code quality and user experience to customer support and product reliability.',
    principles: [
      'Set ambitious goals and exceed expectations',
      'Pay attention to details that matter to users',
      'Continuously refine and optimize our solutions'
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'We\'re committed to solving problems that matter, creating positive change for communities and the environment worldwide.',
    principles: [
      'Consider the broader impact of our technology',
      'Support sustainable development and environmental protection',
      'Enable positive change in underserved communities'
    ],
    color: 'from-emerald-500 to-cyan-600'
  },
  {
    icon: AcademicCapIcon,
    title: 'Continuous Learning',
    description: 'We foster a growth mindset, encouraging curiosity, skill development, and knowledge sharing across our entire organization.',
    principles: [
      'Invest in professional development and training',
      'Share knowledge and mentor team members',
      'Stay current with industry trends and best practices'
    ],
    color: 'from-red-500 to-rose-600'
  }
];

export default function CoreValues() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make, every product we build, and every relationship we form. 
            They're not just words on a wall — they're the foundation of our culture.
          </p>
        </motion.div>

        {/* Values Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-20 h-20 flex items-center justify-center">
              <HeartIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Values-Driven Organization
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our values aren't abstract concepts — they're practical guidelines that influence how we hire, 
            how we build products, how we treat customers, and how we grow as a company. Every team member 
            embodies these values, creating a cohesive culture that drives our success.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02] border border-gray-100 h-full">
                {/* Value Header */}
                <div className="flex items-start mb-6">
                  <div className={`bg-gradient-to-br ${value.color} rounded-xl w-14 h-14 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>

                {/* Principles */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    How We Practice This
                  </h4>
                  <ul className="space-y-2">
                    {value.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center"
        >
          <div className="flex justify-center mb-6">
            <HandRaisedIcon className="w-12 h-12 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Values in Action</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              These values aren't just internal guidelines — they shape how we serve our customers, 
              contribute to open source projects, participate in the geospatial community, and work 
              toward a more sustainable future.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Remote-First Culture</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="opacity-90">Time for Innovation</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Open Source</div>
                <div className="opacity-90">Community Contributions</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Do These Values Resonate With You?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation, 
            collaboration, and making a positive impact through geospatial technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              View Open Positions
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Learn About Our Culture
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}