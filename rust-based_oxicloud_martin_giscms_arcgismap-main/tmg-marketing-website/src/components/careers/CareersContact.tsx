'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { 
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon
} from '@radix-ui/react-icons';

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Send us your questions or application directly',
    contact: 'careers@tmg-geo.com',
    cta: 'Send Email',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Schedule a Chat',
    description: 'Book a 15-minute informal conversation with our talent team',
    contact: 'Available Mon-Fri, 9am-5pm PT',
    cta: 'Book Meeting',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: UserGroupIcon,
    title: 'Join Our Community',
    description: 'Connect with current employees and get insider insights',
    contact: 'Slack Community & Discord',
    cta: 'Join Now',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Virtual Office Hours',
    description: 'Drop-in sessions with hiring managers and team leads',
    contact: 'Every Friday, 2-4pm PT',
    cta: 'Join Session',
    color: 'from-orange-500 to-red-600'
  }
];

const recruitingTeam = [
  {
    name: 'Sarah Johnson',
    role: 'Head of Talent',
    specialty: 'Engineering & Technical Roles',
    avatar: 'SJ',
    email: 'sarah.johnson@tmg-geo.com',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Senior Technical Recruiter',
    specialty: 'Data Science & Research',
    avatar: 'MR',
    email: 'michael.rodriguez@tmg-geo.com',
    linkedin: 'https://linkedin.com/in/michaelrodriguez'
  },
  {
    name: 'Emily Chen',
    role: 'People Operations Manager',
    specialty: 'Product, Design & Business',
    avatar: 'EC',
    email: 'emily.chen@tmg-geo.com',
    linkedin: 'https://linkedin.com/in/emilychen'
  }
];

const faqs = [
  {
    question: 'Do you sponsor work visas?',
    answer: 'Yes! We sponsor H-1B, O-1, and other work visas for exceptional candidates. We also provide relocation assistance.'
  },
  {
    question: 'What\'s your remote work policy?',
    answer: 'We\'re fully remote-first with optional co-working spaces. 85% of our team works remotely with flexible hours.'
  },
  {
    question: 'How long is the hiring process?',
    answer: 'Typically 5-7 days from application to offer. We respect your time and provide updates throughout the process.'
  },
  {
    question: 'Do you hire entry-level candidates?',
    answer: 'Yes! We have internship programs and entry-level roles across all departments, especially for new graduates.'
  }
];

export default function CareersContact() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about working with us? Want to learn more about our culture? 
            Our talent team is here to help you find the perfect opportunity.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{method.description}</p>
                <p className="text-blue-600 font-medium text-sm mb-6">{method.contact}</p>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center group-hover:bg-blue-600 group-hover:text-white">
                  {method.cta}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruiting Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Meet Our Recruiting Team
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {recruitingTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {member.avatar}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6">{member.specialty}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <EnvelopeIcon className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <LinkedInLogoIcon className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-start mb-3">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Follow Our Journey
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/company/tmg-geo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <LinkedInLogoIcon className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://twitter.com/tmg_geo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <TwitterLogoIcon className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://github.com/tmg-geo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <GitHubLogoIcon className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your Journey?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Whether you're actively looking for a new role or just curious about opportunities, 
              we'd love to hear from you. Join thousands of talented individuals who are 
              building the future of geospatial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                View All Positions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Join Talent Network
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <EnvelopeIcon className="w-4 h-4 mr-2" />
              careers@tmg-geo.com
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2" />
              Global Remote • San Francisco HQ
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2" />
              +1 (555) 123-4567
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}