'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  ClockIcon,
  HomeIcon,
  UsersIcon,
  WifiIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const remoteFeatures = [
  {
    icon: GlobeAltIcon,
    title: 'Work from Anywhere',
    description: 'True location independence with team members across 25+ countries and 6 continents.',
    details: [
      'No geographic restrictions',
      'Support for visa and relocation assistance',
      'Time zone overlap requirements based on role'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Flexible Hours',
    description: 'Core collaboration hours with flexibility to work when you\'re most productive.',
    details: [
      '4-hour core overlap with your team',
      'Async-first communication culture',
      'Respect for work-life boundaries'
    ]
  },
  {
    icon: HomeIcon,
    title: 'Home Office Support',
    description: 'Complete setup for your ideal remote workspace with ongoing support.',
    details: [
      '$2,000 initial equipment budget',
      '$500 annual upgrade allowance',
      'Ergonomic furniture and accessories'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Remote Team Building',
    description: 'Regular virtual and in-person events to maintain strong team connections.',
    details: [
      'Annual company retreat',
      'Quarterly team meetups',
      'Weekly virtual coffee chats'
    ]
  }
];

const remoteStats = [
  { label: 'Remote Team Members', value: '85%', description: 'Work fully remote' },
  { label: 'Countries', value: '25+', description: 'Global presence' },
  { label: 'Time Zones', value: '15+', description: 'Around the clock' },
  { label: 'Satisfaction', value: '94%', description: 'Remote work rating' }
];

const collaborationTools = [
  {
    category: 'Communication',
    tools: [
      { name: 'Slack', description: 'Team messaging and channels' },
      { name: 'Zoom', description: 'Video conferencing and meetings' },
      { name: 'Loom', description: 'Async video updates' }
    ]
  },
  {
    category: 'Project Management',
    tools: [
      { name: 'Linear', description: 'Issue tracking and sprints' },
      { name: 'Notion', description: 'Documentation and wikis' },
      { name: 'Figma', description: 'Design collaboration' }
    ]
  },
  {
    category: 'Development',
    tools: [
      { name: 'GitHub', description: 'Code collaboration and reviews' },
      { name: 'VS Code', description: 'Live Share for pair programming' },
      { name: 'Docker', description: 'Consistent dev environments' }
    ]
  }
];

export default function RemoteWorkPolicy() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Remote Work Policy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been remote-first since day one. Our distributed team spans the globe, 
            working together seamlessly to build the future of geospatial intelligence.
          </p>
        </motion.div>

        {/* Remote Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
              Remote Work by the Numbers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {remoteStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Remote Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {remoteFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
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

        {/* Collaboration Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Remote Collaboration Stack
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {collaborationTools.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <WifiIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{tool.name}</div>
                        <div className="text-gray-600 text-sm">{tool.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remote Work Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Remote Work Best Practices
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CalendarDaysIcon,
                title: 'Structured Schedule',
                description: 'Maintain consistent work hours with clear availability'
              },
              {
                icon: ChatBubbleLeftRightIcon,
                title: 'Proactive Communication',
                description: 'Over-communicate progress and blockers transparently'
              },
              {
                icon: UsersIcon,
                title: 'Team Connection',
                description: 'Participate in team events and informal interactions'
              },
              {
                icon: HomeIcon,
                title: 'Dedicated Workspace',
                description: 'Create a professional, distraction-free work environment'
              }
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <guideline.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{guideline.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{guideline.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipment & Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <CurrencyDollarIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Remote Work Stipends</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              We provide comprehensive financial support to ensure you have everything needed 
              for productive remote work, from equipment to connectivity and workspace costs.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">$2,000</div>
                <div className="opacity-90 text-sm">Initial Equipment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$300</div>
                <div className="opacity-90 text-sm">Monthly Co-working</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$100</div>
                <div className="opacity-90 text-sm">Internet Stipend</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$500</div>
                <div className="opacity-90 text-sm">Annual Upgrades</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remote Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Remote Work Success Stories
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "Working remotely from New Zealand while collaborating with teammates in San Francisco, 
              London, and São Paulo has been seamless. The async-first culture and excellent tooling 
              make it feel like we're all in the same room."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                AT
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Alex Thompson</div>
                <div className="text-blue-600 text-sm">Senior DevOps Engineer</div>
                <div className="text-gray-500 text-xs">Auckland, New Zealand</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}