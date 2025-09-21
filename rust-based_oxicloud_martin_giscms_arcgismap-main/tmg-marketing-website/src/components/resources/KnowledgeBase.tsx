'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon,
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const knowledgeCategories = [
  {
    id: 'faq',
    name: 'Frequently Asked Questions',
    icon: QuestionMarkCircleIcon,
    count: 85,
    description: 'Common questions and quick answers',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    icon: WrenchScrewdriverIcon,
    count: 42,
    description: 'Solutions to common technical issues',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    icon: LightBulbIcon,
    count: 38,
    description: 'Expert recommendations and guidelines',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'how-to',
    name: 'How-To Guides',
    icon: BookOpenIcon,
    count: 56,
    description: 'Step-by-step implementation guides',
    color: 'from-purple-500 to-pink-600'
  }
];

const popularArticles = [
  {
    title: 'How to optimize map rendering performance?',
    category: 'Best Practices',
    views: '24.5K',
    helpful: '94%',
    updated: '2 days ago',
    readTime: '5 min',
    summary: 'Learn techniques to improve map rendering speed and reduce memory usage in your applications.'
  },
  {
    title: 'Authentication errors and solutions',
    category: 'Troubleshooting',
    views: '18.2K',
    helpful: '97%',
    updated: '1 week ago',
    readTime: '8 min',
    summary: 'Common authentication issues and their step-by-step solutions with code examples.'
  },
  {
    title: 'Setting up your first geospatial project',
    category: 'How-To Guides',
    views: '32.1K',
    helpful: '92%',
    updated: '3 days ago',
    readTime: '12 min',
    summary: 'Complete walkthrough from project setup to deploying your first geospatial application.'
  },
  {
    title: 'What data formats are supported?',
    category: 'FAQ',
    views: '15.8K',
    helpful: '89%',
    updated: '1 day ago',
    readTime: '3 min',
    summary: 'Comprehensive list of supported geospatial data formats and import requirements.'
  }
];

const faqItems = [
  {
    question: 'How do I get started with the platform?',
    answer: 'Start by creating a free account, then follow our Quick Start Guide. You\'ll be able to create your first map in under 15 minutes with our interactive tutorials.',
    category: 'Getting Started',
    helpful: 156
  },
  {
    question: 'What are the API rate limits?',
    answer: 'Rate limits vary by plan: Free (1,000 requests/hour), Pro (10,000 requests/hour), Enterprise (custom limits). See our pricing page for detailed information.',
    category: 'API',
    helpful: 89
  },
  {
    question: 'Can I integrate with my existing database?',
    answer: 'Yes, we support connections to PostgreSQL, MySQL, MongoDB, and many other databases. Check our integration documentation for specific setup instructions.',
    category: 'Integration',
    helpful: 134
  },
  {
    question: 'Is there offline functionality available?',
    answer: 'Yes, our platform supports offline map tiles and data caching. You can configure offline capabilities through our SDKs for mobile and web applications.',
    category: 'Features',
    helpful: 78
  },
  {
    question: 'How is my data secured?',
    answer: 'We use enterprise-grade security including SOC 2 compliance, end-to-end encryption, and regular security audits. Your data is protected both in transit and at rest.',
    category: 'Security',
    helpful: 92
  }
];

const quickLinks = [
  { title: 'Platform Status', description: 'Real-time system status and uptime', icon: '🟢' },
  { title: 'Service Limits', description: 'API limits and usage quotas', icon: '📊' },
  { title: 'Billing FAQ', description: 'Common billing and subscription questions', icon: '💳' },
  { title: 'Data Privacy', description: 'How we protect and handle your data', icon: '🔒' },
  { title: 'Performance Tips', description: 'Optimize your application performance', icon: '⚡' },
  { title: 'Error Codes', description: 'Complete list of API error codes', icon: '🚨' }
];

export default function KnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Knowledge Base
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Find answers to common questions, troubleshoot issues, and discover best practices 
            to get the most out of our platform.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knowledge base..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-0 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </motion.div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {knowledgeCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm'
              }`}
            >
              <category.icon className={`w-8 h-8 mb-4 ${
                activeCategory === category.id ? 'text-white' : 'text-blue-600'
              }`} />
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className={`text-sm mb-3 ${
                activeCategory === category.id ? 'text-white/80' : 'text-gray-600'
              }`}>
                {category.description}
              </p>
              <div className={`text-sm font-medium ${
                activeCategory === category.id ? 'text-white' : 'text-blue-600'
              }`}>
                {category.count} articles
              </div>
            </motion.button>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Most Helpful Articles
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center ml-3 text-green-600">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{article.helpful} helpful</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{article.summary}</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-4 flex-shrink-0" />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div>{article.views} views</div>
                  </div>
                  <div className="text-xs">Updated {article.updated}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        {activeCategory === 'faq' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h3>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {faq.category}
                        </span>
                        <span className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" />
                          {faq.helpful} found helpful
                        </span>
                      </div>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Links */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Quick Access
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-start">
                  <div className="text-2xl mr-4">{link.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {link.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white"
        >
          <LightBulbIcon className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get personalized assistance from our experts 
            who know the platform inside and out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center">
              Contact Support
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Feature
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}