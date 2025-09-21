'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    type: 'Partner Application',
    icon: UserGroupIcon,
    title: 'Become a Partner',
    description: 'Apply to join our partner program and start your journey',
    action: 'Apply Now',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    type: 'Sales Inquiry',
    icon: BuildingOfficeIcon,
    title: 'Reseller Opportunities',
    description: 'Explore opportunities to become an authorized reseller',
    action: 'Learn More',
    color: 'from-green-500 to-emerald-600'
  },
  {
    type: 'Technical Integration',
    icon: GlobeAltIcon,
    title: 'Technology Partnership',
    description: 'Discuss API integrations and technical partnerships',
    action: 'Get Started',
    color: 'from-purple-500 to-pink-600'
  },
  {
    type: 'Consultation',
    icon: ChatBubbleLeftRightIcon,
    title: 'Partner Consultation',
    description: 'Schedule a call to discuss partnership opportunities',
    action: 'Schedule Call',
    color: 'from-orange-500 to-red-600'
  }
];

const contactMethods = [
  {
    method: 'Email',
    icon: EnvelopeIcon,
    value: 'partners@company.com',
    description: 'Send us your partnership inquiry',
    available: '24/7'
  },
  {
    method: 'Phone',
    icon: PhoneIcon,
    value: '+1 (555) 123-4567',
    description: 'Speak with our partner team',
    available: 'Mon-Fri 9AM-6PM EST'
  },
  {
    method: 'Live Chat',
    icon: ChatBubbleLeftRightIcon,
    value: 'Chat with us',
    description: 'Get instant answers to your questions',
    available: 'Mon-Fri 9AM-6PM EST'
  },
  {
    method: 'Schedule Meeting',
    icon: CalendarDaysIcon,
    value: 'Book a meeting',
    description: 'Schedule a video call with our team',
    available: 'Available 24/7'
  }
];

const partnerTeam = [
  {
    name: 'Michael Rodriguez',
    role: 'VP of Channel Partnerships',
    email: 'michael.r@company.com',
    phone: '+1 (555) 123-4501',
    expertise: 'Strategic partnerships, enterprise relationships',
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Johnson',
    role: 'Partner Program Manager',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4502',
    expertise: 'Partner onboarding, training programs',
    avatar: '👩‍💼'
  },
  {
    name: 'David Chen',
    role: 'Technical Partner Lead',
    email: 'david.c@company.com',
    phone: '+1 (555) 123-4503',
    expertise: 'API integrations, technical partnerships',
    avatar: '👨‍💻'
  }
];

const supportResources = [
  {
    title: 'Partner Portal',
    description: 'Access training materials, sales tools, and support resources',
    items: ['Training modules', 'Sales enablement', 'Marketing materials', 'Support tickets']
  },
  {
    title: 'Technical Documentation',
    description: 'Comprehensive guides for integration and development',
    items: ['API documentation', 'SDK libraries', 'Code samples', 'Best practices']
  },
  {
    title: 'Marketing Support',
    description: 'Co-marketing opportunities and promotional materials',
    items: ['Brand guidelines', 'Case studies', 'Press releases', 'Event support']
  },
  {
    title: 'Training & Certification',
    description: 'Professional development and certification programs',
    items: ['Online courses', 'Virtual workshops', 'Certification exams', 'Continuing education']
  }
];

export default function PartnerContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    partnershipType: '',
    companySize: '',
    currentSolutions: '',
    timeline: '',
    message: ''
  });

  const [selectedContactType, setSelectedContactType] = useState('Partner Application');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

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
            Partner with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to join our partner ecosystem? Get in touch with our partner team to explore 
            opportunities and start your partnership journey with us.
          </motion.p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedContactType(option.type)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                selectedContactType === option.type
                  ? 'bg-gradient-to-br ' + option.color + ' text-white shadow-lg scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <option.icon className={`w-8 h-8 mb-4 ${
                selectedContactType === option.type ? 'text-white' : 'text-blue-600'
              }`} />
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className={`text-sm mb-4 ${
                selectedContactType === option.type ? 'text-white/80' : 'text-gray-600'
              }`}>
                {option.description}
              </p>
              <div className={`text-sm font-medium ${
                selectedContactType === option.type ? 'text-white' : 'text-blue-600'
              }`}>
                {option.action} →
              </div>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select partnership type</option>
                  <option value="reseller">Reseller Partner</option>
                  <option value="consulting">Consulting Partner</option>
                  <option value="technology">Technology Partner</option>
                  <option value="education">Education Partner</option>
                  <option value="regional">Regional Partner</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (0-1 month)</option>
                    <option value="short">Short term (1-3 months)</option>
                    <option value="medium">Medium term (3-6 months)</option>
                    <option value="long">Long term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="currentSolutions" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Solutions/Expertise
                </label>
                <textarea
                  id="currentSolutions"
                  name="currentSolutions"
                  value={formData.currentSolutions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your current solutions, expertise, or relevant experience..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your partnership goals and how we can work together..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Submit Partnership Inquiry
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <method.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{method.method}</div>
                      <div className="text-blue-600 font-medium">{method.value}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                      <div className="text-sm text-green-600">{method.available}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Partner Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Partner Team</h3>
              <div className="space-y-6">
                {partnerTeam.map((member, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mr-4">{member.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-blue-600 font-medium">{member.role}</div>
                      <div className="text-sm text-gray-600 mb-2">{member.expertise}</div>
                      <div className="text-sm text-gray-600">
                        <div>{member.email}</div>
                        <div>{member.phone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supportResources.map((resource, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                    <ul className="space-y-1">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}