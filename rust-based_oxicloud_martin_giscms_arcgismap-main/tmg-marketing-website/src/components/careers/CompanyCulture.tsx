'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UsersIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

const cultureValues = [
  {
    icon: GlobeAltIcon,
    title: 'Remote-First Culture',
    description: 'We\'ve been remote-first since day one, building systems and culture around distributed collaboration.',
    stats: '25+ Countries',
    highlights: [
      'Flexible timezone collaboration',
      'Async-first communication',
      'Global team meetups'
    ]
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation Mindset',
    description: 'We encourage bold thinking, calculated risks, and learning from failures to drive breakthrough innovations.',
    stats: '20% Innovation Time',
    highlights: [
      'Monthly hackathons',
      'Patent applications supported',
      'Research publication encouraged'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Inclusive Community',
    description: 'We celebrate diverse perspectives and ensure every voice is heard in shaping our products and culture.',
    stats: '50% Diverse Leadership',
    highlights: [
      'Employee resource groups',
      'Bias-free hiring practices',
      'Inclusive decision making'
    ]
  },
  {
    icon: HeartIcon,
    title: 'Work-Life Harmony',
    description: 'We believe sustainable productivity comes from respecting boundaries and supporting personal growth.',
    stats: '95% Satisfaction',
    highlights: [
      'Unlimited PTO policy',
      'Mental health support',
      'Family-friendly policies'
    ]
  }
];

const cultureMoments = [
  {
    title: 'Global Team Retreat 2023',
    description: 'Annual in-person gathering in Costa Rica with team building, strategy sessions, and cultural exchange.',
    image: '/images/culture/team-retreat.jpg',
    tags: ['Team Building', 'Strategy', 'Fun']
  },
  {
    title: 'Innovation Week',
    description: 'Company-wide innovation challenge resulted in 3 new product features and 12 patent applications.',
    image: '/images/culture/innovation-week.jpg',
    tags: ['Innovation', 'Patents', 'Collaboration']
  },
  {
    title: 'Diversity & Inclusion Summit',
    description: 'Quarterly D&I events with guest speakers, workshops, and open dialogue sessions.',
    image: '/images/culture/diversity-summit.jpg',
    tags: ['Diversity', 'Learning', 'Community']
  }
];

const teamTestimonials = [
  {
    name: 'Sarah Kim',
    role: 'Senior Software Engineer',
    location: 'Seoul, South Korea',
    quote: 'The flexibility to work from anywhere while collaborating with brilliant minds globally is incredible. I\'ve grown more in 2 years here than in my entire previous career.',
    avatar: 'SK'
  },
  {
    name: 'Miguel Santos',
    role: 'Product Designer',
    location: 'São Paulo, Brazil',
    quote: 'Our design team spans 4 continents, yet we work together seamlessly. The diversity of perspectives makes our products better and more inclusive.',
    avatar: 'MS'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Research Scientist',
    location: 'London, UK',
    quote: 'I can pursue cutting-edge research while knowing my work will have real-world impact. The academic freedom with startup energy is perfect.',
    avatar: 'AP'
  }
];

const workEnvironment = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Open Communication',
    description: 'Regular all-hands, transparent OKRs, and open-door policy with leadership'
  },
  {
    icon: SparklesIcon,
    title: 'Continuous Learning',
    description: 'Tech talks, conference attendance, internal workshops, and learning stipends'
  },
  {
    icon: HandRaisedIcon,
    title: 'Employee Voice',
    description: 'Regular surveys, suggestion systems, and employee-led initiative programs'
  },
  {
    icon: HomeIcon,
    title: 'Flexible Workspace',
    description: 'Home office stipends, co-working allowances, and flexible work arrangements'
  }
];

export default function CompanyCulture() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built more than just a company — we've created a global community where 
            innovation thrives, diversity is celebrated, and every team member can do their best work.
          </p>
        </motion.div>

        {/* Culture Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {cultureValues.map((value, index) => (
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
                    {React.createElement(value.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {value.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {value.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Moments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Culture in Action
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {cultureMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <SparklesIcon className="w-16 h-16 text-white opacity-50" />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {moment.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{moment.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {moment.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Voices from Our Team
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-500" />
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Work Environment
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workEnvironment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Culture by the Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="opacity-90 text-sm">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 5%</div>
              <div className="opacity-90 text-sm">Annual Turnover</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="opacity-90 text-sm">Glassdoor Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90 text-sm">Would Recommend</div>
            </div>
          </div>
        </motion.div>

        {/* Join Culture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Culture?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience firsthand what it's like to be part of a team that values innovation, 
            inclusivity, and personal growth above all else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Browse Open Positions
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Learn More About Benefits
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}