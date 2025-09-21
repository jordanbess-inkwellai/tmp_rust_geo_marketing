'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    type: 'Technical Support',
    icon: WrenchScrewdriverIcon,
    title: 'Get Technical Help',
    description: 'Need help with implementation or troubleshooting?',
    action: 'Contact Support',
    color: 'from-blue-500 to-indigo-600',
    availability: '24/7 Support'
  },
  {
    type: 'Training Request',
    icon: AcademicCapIcon,
    title: 'Custom Training',
    description: 'Request personalized training for your team',
    action: 'Request Training',
    color: 'from-green-500 to-emerald-600',
    availability: 'Business Hours'
  },
  {
    type: 'Documentation Request',
    icon: BookOpenIcon,
    title: 'Request Documentation',
    description: 'Need specific documentation or guides?',
    action: 'Submit Request',
    color: 'from-purple-500 to-pink-600',
    availability: '48hr Response'
  },
  {
    type: 'Community Help',
    icon: ChatBubbleLeftRightIcon,
    title: 'Community Forums',
    description: 'Get help from our community of experts',
    action: 'Ask Community',
    color: 'from-orange-500 to-red-600',
    availability: 'Always Active'
  }
];

const supportChannels = [
  {
    channel: 'Live Chat',
    description: 'Instant help for quick questions',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    icon: ChatBubbleLeftRightIcon
  },
  {
    channel: 'Email Support',
    description: 'Detailed technical assistance',
    availability: 'support@company.com',
    responseTime: '< 4 hours',
    icon: EnvelopeIcon
  },
  {
    channel: 'Phone Support',
    description: 'Direct conversation with experts',
    availability: '+1 (555) 123-HELP',
    responseTime: 'Mon-Fri Business Hours',
    icon: PhoneIcon
  },
  {
    channel: 'Priority Support',
    description: 'Enterprise customers get priority',
    availability: 'Enterprise Portal',
    responseTime: '< 1 hour SLA',
    icon: ClockIcon
  }
];

export default function ResourcesContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requestType: '',
    priority: '',
    message: ''
  });

  const [selectedType, setSelectedType] = useState('Technical Support');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
            Need Help or Resources?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our expert support team is here to help you succeed. Whether you need technical assistance, 
            custom training, or specific documentation, we've got you covered.
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
              onClick={() => setSelectedType(option.type)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                selectedType === option.type
                  ? 'bg-gradient-to-br ' + option.color + ' text-white shadow-lg scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <option.icon className={`w-8 h-8 mb-4 ${
                selectedType === option.type ? 'text-white' : 'text-blue-600'
              }`} />
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className={`text-sm mb-4 ${
                selectedType === option.type ? 'text-white/80' : 'text-gray-600'
              }`}>
                {option.description}
              </p>
              <div className={`text-xs ${
                selectedType === option.type ? 'text-white/70' : 'text-gray-500'
              }`}>
                {option.availability}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
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
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                    Request Type *
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select request type</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="training">Training Request</option>
                    <option value="documentation">Documentation Request</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Need assistance</option>
                    <option value="high">High - Blocking issue</option>
                    <option value="urgent">Urgent - Production down</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide as much detail as possible about your request..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>

          {/* Support Information */}
          <div className="space-y-8">
            {/* Support Channels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Channels</h3>
              <div className="space-y-4">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                        <channel.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{channel.channel}</h4>
                        <p className="text-gray-600 text-sm mb-2">{channel.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Available:</span>
                            <span className="text-gray-900 font-medium ml-2">{channel.availability}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Response:</span>
                            <span className="text-green-600 font-medium ml-2">{channel.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resource Request Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips for Faster Support</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  Include specific error messages and stack traces when reporting issues
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  Provide your platform version and environment details
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  Share code snippets or configuration files when relevant
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  Check our documentation and community forums first
                </li>
              </ul>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Resources</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">System Status Page</span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Service Level Agreement</span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Enterprise Support Portal</span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}