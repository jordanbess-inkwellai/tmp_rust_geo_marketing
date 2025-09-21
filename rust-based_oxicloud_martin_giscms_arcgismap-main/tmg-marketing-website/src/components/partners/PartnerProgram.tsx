'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  GiftIcon,
  HeartIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const programTiers = [
  {
    name: 'Silver Partner',
    level: 'Entry Level',
    requirements: ['$50K annual commitment', '2 certified professionals', '5 successful implementations'],
    benefits: [
      'Basic partner portal access',
      'Standard training materials',
      'Email support',
      'Co-marketing opportunities',
      '15% partner discount',
      'Quarterly business reviews'
    ],
    color: 'from-gray-400 to-gray-600',
    icon: '🥈'
  },
  {
    name: 'Gold Partner',
    level: 'Professional',
    requirements: ['$150K annual commitment', '5 certified professionals', '15 successful implementations'],
    benefits: [
      'Advanced partner portal',
      'Priority training access',
      'Phone & email support',
      'Joint go-to-market programs',
      '20% partner discount',
      'Monthly business reviews',
      'Lead sharing program',
      'Technical pre-sales support'
    ],
    color: 'from-yellow-400 to-yellow-600',
    icon: '🥇',
    popular: true
  },
  {
    name: 'Platinum Partner',
    level: 'Elite',
    requirements: ['$500K annual commitment', '10 certified professionals', '50 successful implementations'],
    benefits: [
      'Executive partner portal',
      'Custom training programs',
      '24/7 dedicated support',
      'Strategic partnership programs',
      '25% partner discount',
      'Weekly business reviews',
      'Exclusive lead access',
      'Joint product development',
      'Executive advisory board',
      'Global marketing support'
    ],
    color: 'from-purple-400 to-purple-600',
    icon: '💎'
  }
];

const programBenefits = [
  {
    icon: AcademicCapIcon,
    title: 'Training & Certification',
    description: 'Comprehensive training programs to build expertise',
    features: [
      'Technical certification tracks',
      'Sales training programs',
      'Virtual and in-person workshops',
      'Ongoing education credits'
    ]
  },
  {
    icon: ChartBarIcon,
    title: 'Sales & Marketing',
    description: 'Tools and support to accelerate your sales success',
    features: [
      'Lead sharing and referrals',
      'Co-marketing campaigns',
      'Sales enablement tools',
      'Marketing development funds'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Technical Support',
    description: 'Expert technical assistance when you need it most',
    features: [
      'Dedicated support channels',
      'Pre-sales technical support',
      'Implementation assistance',
      'Product roadmap access'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'Recognition & Rewards',
    description: 'Celebrate success with exclusive recognition programs',
    features: [
      'Annual partner awards',
      'Partner spotlight opportunities',
      'Industry conference speaking',
      'Success story features'
    ]
  }
];

const partnerJourney = [
  {
    step: '1',
    title: 'Application',
    description: 'Submit your partner application with business details and references',
    duration: '1-2 weeks',
    icon: '📝'
  },
  {
    step: '2',
    title: 'Review & Approval',
    description: 'Our team reviews your application and conducts qualification interviews',
    duration: '2-3 weeks',
    icon: '🔍'
  },
  {
    step: '3',
    title: 'Onboarding',
    description: 'Complete training programs and certification requirements',
    duration: '4-6 weeks',
    icon: '🎓'
  },
  {
    step: '4',
    title: 'Launch',
    description: 'Begin selling with full partner benefits and support',
    duration: 'Ongoing',
    icon: '🚀'
  }
];

const partnerResources = [
  {
    category: 'Sales Tools',
    icon: ChartBarIcon,
    items: ['Sales playbooks', 'ROI calculators', 'Demo environments', 'Pricing guidelines']
  },
  {
    category: 'Marketing Assets',
    icon: SparklesIcon,
    items: ['Brand guidelines', 'Presentation templates', 'Case studies', 'White papers']
  },
  {
    category: 'Technical Resources',
    icon: UserGroupIcon,
    items: ['Implementation guides', 'API documentation', 'Testing environments', 'Support escalation']
  },
  {
    category: 'Training Materials',
    icon: AcademicCapIcon,
    items: ['Video tutorials', 'Certification courses', 'Best practices guides', 'Workshop materials']
  }
];

export default function PartnerProgram() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Partner Program
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our comprehensive partner program designed to accelerate your success. 
            From training and certification to sales support and rewards, we provide everything you need to thrive.
          </motion.p>
        </div>

        {/* Program Tiers */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Partner Tiers
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 scale-105' 
                    : 'bg-gray-50'
                } hover:shadow-lg transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-blue-600 font-medium">{tier.level}</div>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h5 className="font-semibold text-gray-900 mb-4">Requirements</h5>
                  <ul className="space-y-2">
                    {tier.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">Benefits</h5>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <StarIcon className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Program Benefits
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Journey */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Your Partner Journey
          </motion.h3>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerJourney.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200"
                >
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-blue-600 font-medium text-sm">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Resources */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Partner Resources
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <resource.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{resource.category}</h4>
                </div>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
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
          <HeartIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful partners who are transforming their business 
            with our comprehensive program and world-class support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}