'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HomeIcon,
  SparklesIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const benefitCategories = [
  {
    title: 'Health & Wellness',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-600',
    benefits: [
      {
        title: 'Premium Health Insurance',
        description: '100% coverage for employees, 80% for family',
        icon: ShieldCheckIcon
      },
      {
        title: 'Mental Health Support',
        description: 'Free therapy sessions and wellness programs',
        icon: HeartIcon
      },
      {
        title: 'Fitness & Wellness',
        description: '$100/month gym membership or wellness stipend',
        icon: SparklesIcon
      },
      {
        title: 'Annual Health Check',
        description: 'Comprehensive health screenings covered',
        icon: ShieldCheckIcon
      }
    ]
  },
  {
    title: 'Financial Benefits',
    icon: CurrencyDollarIcon,
    color: 'from-green-500 to-emerald-600',
    benefits: [
      {
        title: 'Competitive Salary',
        description: 'Top-tier compensation packages',
        icon: CurrencyDollarIcon
      },
      {
        title: 'Equity Package',
        description: 'Meaningful ownership in company growth',
        icon: TrophyIcon
      },
      {
        title: 'Performance Bonuses',
        description: 'Annual and project-based bonus opportunities',
        icon: SparklesIcon
      },
      {
        title: 'Retirement Savings',
        description: '401(k) with 6% company matching',
        icon: ShieldCheckIcon
      }
    ]
  },
  {
    title: 'Learning & Growth',
    icon: AcademicCapIcon,
    color: 'from-purple-500 to-indigo-600',
    benefits: [
      {
        title: 'Learning Budget',
        description: '$3,000+ annual professional development',
        icon: AcademicCapIcon
      },
      {
        title: 'Conference Attendance',
        description: 'Industry conferences and workshops covered',
        icon: UserGroupIcon
      },
      {
        title: 'Internal Training',
        description: 'Regular tech talks and skill workshops',
        icon: SparklesIcon
      },
      {
        title: 'Certification Support',
        description: 'Professional certifications and courses',
        icon: TrophyIcon
      }
    ]
  },
  {
    title: 'Work-Life Balance',
    icon: ClockIcon,
    color: 'from-blue-500 to-cyan-600',
    benefits: [
      {
        title: 'Unlimited PTO',
        description: 'Flexible time off with minimum requirements',
        icon: ClockIcon
      },
      {
        title: 'Flexible Hours',
        description: 'Work when you\'re most productive',
        icon: SparklesIcon
      },
      {
        title: 'Remote Work',
        description: 'Work from anywhere in the world',
        icon: GlobeAltIcon
      },
      {
        title: 'Sabbatical Program',
        description: '3-month sabbatical after 5 years',
        icon: HeartIcon
      }
    ]
  },
  {
    title: 'Equipment & Workspace',
    icon: HomeIcon,
    color: 'from-yellow-500 to-orange-600',
    benefits: [
      {
        title: 'Home Office Setup',
        description: '$2,000 equipment stipend for remote work',
        icon: HomeIcon
      },
      {
        title: 'Latest Tech',
        description: 'MacBook Pro, monitors, and accessories',
        icon: SparklesIcon
      },
      {
        title: 'Co-working Spaces',
        description: '$300/month allowance for co-working',
        icon: UserGroupIcon
      },
      {
        title: 'Office Perks',
        description: 'Snacks, drinks, and comfortable workspace',
        icon: HeartIcon
      }
    ]
  },
  {
    title: 'Family & Community',
    icon: UserGroupIcon,
    color: 'from-indigo-500 to-purple-600',
    benefits: [
      {
        title: 'Parental Leave',
        description: '16 weeks paid leave for new parents',
        icon: HeartIcon
      },
      {
        title: 'Family Support',
        description: 'Childcare assistance and family events',
        icon: UserGroupIcon
      },
      {
        title: 'Volunteer Time',
        description: '40 hours paid volunteer time annually',
        icon: SparklesIcon
      },
      {
        title: 'Team Events',
        description: 'Regular team building and social events',
        icon: TrophyIcon
      }
    ]
  }
];

export default function BenefitsPerks() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our people with comprehensive benefits that support your health, 
            growth, and financial well-being. Your success is our success.
          </p>
        </motion.div>

        {/* Benefits Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Total Benefits Package Value
            </h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$15K+</div>
                <div className="text-gray-600">Annual Benefits Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Health Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$3K+</div>
                <div className="text-gray-600">Learning Budget</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {benefitCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-br ${category.color} rounded-xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Benefits List */}
                <div className="space-y-6">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Additional Perks
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Free Lunch Fridays', description: 'Weekly team lunch delivered' },
              { title: 'Book Allowance', description: '$50/month for books and audiobooks' },
              { title: 'Commute Benefits', description: 'Public transport or bike allowances' },
              { title: 'Pet Insurance', description: 'Coverage for your furry family' },
              { title: 'Language Learning', description: 'Duolingo Plus and language classes' },
              { title: 'Ergonomic Support', description: 'Standing desk and ergonomic equipment' },
              { title: 'Internet Stipend', description: '$50/month for high-speed internet' },
              { title: 'Annual Retreat', description: 'Company-wide destination retreat' }
            ].map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{perk.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            How We Compare
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Benefit</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Our Company</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600">Industry Average</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-900">Health Insurance Coverage</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">100% / 80%</td>
                  <td className="py-4 px-6 text-center text-gray-600">80% / 60%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Learning & Development Budget</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">$3,000+</td>
                  <td className="py-4 px-6 text-center text-gray-600">$1,200</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Paid Time Off</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">Unlimited</td>
                  <td className="py-4 px-6 text-center text-gray-600">15-20 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Parental Leave</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">16 weeks</td>
                  <td className="py-4 px-6 text-center text-gray-600">8-12 weeks</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Remote Work Equipment</td>
                  <td className="py-4 px-6 text-center text-green-600 font-semibold">$2,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">$800-1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}