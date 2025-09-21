'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UsersIcon,
  AcademicCapIcon,
  SparklesIcon,
  ClockIcon,
  HandRaisedIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const cultureValues = [
  {
    icon: GlobeAltIcon,
    title: 'Remote-First & Global',
    description: 'We\'ve been remote-first since day one, with team members across 6 continents working together seamlessly.',
    details: [
      'Flexible working hours across all time zones',
      'Annual team meetups in different global locations',
      'Robust digital collaboration tools and processes'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation Time',
    description: 'Every team member gets 20% of their time dedicated to passion projects, learning, and experimental ideas.',
    details: [
      'Monthly innovation showcases for sharing projects',
      'Funding available for promising experimental ideas',
      'Cross-team collaboration encouraged'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: AcademicCapIcon,
    title: 'Continuous Learning',
    description: 'We invest heavily in our team\'s growth with comprehensive learning and development programs.',
    details: [
      '$3,000 annual learning budget per team member',
      'Conference attendance and speaking opportunities',
      'Internal mentorship and knowledge sharing programs'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: UsersIcon,
    title: 'Inclusive Collaboration',
    description: 'We celebrate diversity and ensure every voice is heard in our decision-making processes.',
    details: [
      '50% diversity across all leadership positions',
      'Employee resource groups and communities',
      'Bias-free hiring and promotion processes'
    ],
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: HeartIcon,
    title: 'Work-Life Harmony',
    description: 'We believe in sustainable productivity and support our team\'s well-being and personal growth.',
    details: [
      'Unlimited PTO with minimum vacation requirements',
      'Mental health and wellness programs',
      'Sabbatical opportunities after 5 years'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: SparklesIcon,
    title: 'Impact-Driven Work',
    description: 'Every project we work on has clear connections to real-world positive impact and meaningful outcomes.',
    details: [
      'Quarterly impact reviews for all projects',
      'Pro-bono work for environmental and social causes',
      'Open source contributions encouraged and supported'
    ],
    color: 'from-emerald-500 to-cyan-600'
  }
];

const perks = [
  {
    category: 'Flexibility',
    icon: ClockIcon,
    items: [
      'Work from anywhere in the world',
      'Flexible hours that work for you',
      'Async-first communication',
      'No mandatory meetings before 10am'
    ]
  },
  {
    category: 'Growth',
    icon: AcademicCapIcon,
    items: [
      '$3,000 annual learning budget',
      'Conference and workshop attendance',
      'Internal mentorship programs',
      'Career development planning'
    ]
  },
  {
    category: 'Wellness',
    icon: HeartIcon,
    items: [
      'Comprehensive health insurance',
      'Mental health support',
      'Fitness and wellness stipends',
      'Unlimited PTO policy'
    ]
  },
  {
    category: 'Community',
    icon: UsersIcon,
    items: [
      'Annual company retreats',
      'Regular team building events',
      'Employee resource groups',
      'Volunteer time off program'
    ]
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Senior Software Engineer',
    quote: 'The innovation time policy led me to develop what became our most popular feature. Having the freedom to explore ideas is incredible.',
    location: 'San Francisco, CA'
  },
  {
    name: 'Priya Patel',
    role: 'Product Designer',
    quote: 'I\'ve never worked somewhere that so genuinely cares about work-life balance. The flexibility allows me to do my best work.',
    location: 'London, UK'
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Data Scientist',
    quote: 'The learning budget helped me get certified in ML, and now I\'m leading our AI initiatives. Growth opportunities are unlimited here.',
    location: 'Barcelona, Spain'
  }
];

export default function TeamCulture() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team Culture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built more than just a company — we've created a global community of passionate individuals 
            who are reshaping the future of geospatial technology together.
          </p>
        </motion.div>

        {/* Culture Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 mb-16 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HandRaisedIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Culture That Empowers Innovation
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From day one, we knew that building revolutionary geospatial technology required more than just 
              great engineers — it required a culture that celebrates curiosity, supports risk-taking, and 
              values every individual's unique perspective.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our remote-first, inclusive, and innovation-focused culture has attracted top talent from around 
              the world and created an environment where breakthrough ideas flourish. We measure success not 
              just in revenue or features shipped, but in the growth, happiness, and impact of our team members.
            </p>
          </div>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02] border border-gray-200 h-full">
                <div className="flex items-start mb-6">
                  <div className={`bg-gradient-to-br ${value.color} rounded-xl w-14 h-14 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            What Our Team Says
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-500 mb-4" />
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
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

        {/* Perks & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Perks & Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                    <perk.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{perk.category}</h4>
                </div>
                <ul className="space-y-2">
                  {perk.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white mb-16"
        >
          <div className="flex justify-center mb-6">
            <HomeIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Distributed Across the Globe</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Our team spans 6 continents and 25+ countries, bringing together diverse perspectives 
              and experiences that make our products stronger and our culture richer.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="opacity-90">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Time Zones</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="opacity-90">Languages Spoken</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Global Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Culture Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-12">
            Culture by the Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '95%', label: 'Employee Satisfaction', description: 'Annual survey results' },
              { value: '< 5%', label: 'Annual Turnover', description: 'Industry-leading retention' },
              { value: '4.8/5', label: 'Glassdoor Rating', description: 'Based on 200+ reviews' },
              { value: '100%', label: 'Recommend to Friends', description: 'Would recommend as workplace' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}