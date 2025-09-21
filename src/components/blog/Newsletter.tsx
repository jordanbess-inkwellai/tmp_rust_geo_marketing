'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BellIcon,
  RssIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const newsletterTopics = [
  {
    icon: ChartBarIcon,
    title: 'Industry Insights',
    description: 'Latest trends and analysis in geospatial technology'
  },
  {
    icon: SparklesIcon,
    title: 'Product Updates',
    description: 'New features, improvements, and platform announcements'
  },
  {
    icon: StarIcon,
    title: 'Success Stories',
    description: 'Customer spotlights and real-world implementations'
  },
  {
    icon: GlobeAltIcon,
    title: 'Technical Deep Dives',
    description: 'Advanced tutorials and developer resources'
  }
];

const recentIssues = [
  {
    id: 1,
    title: 'The Future of Digital Twins in Smart Cities',
    date: '2024-01-22',
    excerpt: 'Exploring how digital twin technology is revolutionizing urban planning and infrastructure management.',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Satellite Imagery Processing: AI Advances in 2024',
    date: '2024-01-15',
    excerpt: 'Latest breakthroughs in machine learning algorithms for automatic feature detection and classification.',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Building Resilient Supply Chains with Geospatial Intelligence',
    date: '2024-01-08',
    excerpt: 'How leading companies are using location intelligence to optimize operations and mitigate risks.',
    readTime: '10 min read'
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
};

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Industry Insights', 'Product Updates']);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const toggleTopic = (topicTitle: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicTitle)
        ? prev.filter(topic => topic !== topicTitle)
        : [...prev, topicTitle]
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <EnvelopeIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 25,000+ professionals who receive our weekly newsletter packed with geospatial insights, 
            industry trends, and technical deep-dives delivered directly to your inbox.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            {!isSubscribed ? (
              <div>
                <div className="flex items-center mb-6">
                  <BellIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Subscribe to Our Newsletter</h3>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Get exclusive access to industry reports, early feature previews, and expert insights 
                  from our team of geospatial engineers and data scientists.
                </p>

                {/* Topic Selection */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What interests you most?</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {newsletterTopics.map((topic, index) => (
                      <motion.div
                        key={topic.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                          selectedTopics.includes(topic.title)
                            ? 'border-blue-500 bg-blue-50 shadow-md'
                            : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25'
                        }`}
                        onClick={() => toggleTopic(topic.title)}
                      >
                        <div className="flex items-start">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                            selectedTopics.includes(topic.title)
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            <topic.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-gray-900">{topic.title}</h5>
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedTopics.includes(topic.title)
                                  ? 'border-blue-500 bg-blue-500'
                                  : 'border-gray-300 bg-white'
                              }`}>
                                {selectedTopics.includes(topic.title) && (
                                  <CheckCircleIcon className="w-4 h-4 text-white" />
                                )}
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">{topic.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                      />
                      <EnvelopeIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
                    View our <button className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</button>.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Community!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thank you for subscribing! You'll receive your first newsletter within the next week. 
                  Keep an eye on your inbox for the latest geospatial insights and updates.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm">
                    <strong>What's next?</strong> Check your email for a confirmation message and 
                    add us to your contacts to ensure you don't miss any updates.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Recent Issues & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <UserGroupIcon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Community Impact</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '25K+', label: 'Subscribers', description: 'Active newsletter readers' },
                  { value: '150+', label: 'Issues Sent', description: 'Weekly insights delivered' },
                  { value: '4.8/5', label: 'Reader Rating', description: 'Average satisfaction score' },
                  { value: '92%', label: 'Open Rate', description: 'Above industry average' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-xs">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Issues */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <RssIcon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Recent Issues</h3>
              </div>
              <div className="space-y-6">
                {recentIssues.map((issue, index) => (
                  <motion.article
                    key={issue.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="border-l-4 border-blue-500 pl-4 hover:border-blue-600 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">{formatDate(issue.date)}</span>
                        <span className="text-xs text-gray-400">{issue.readTime}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {issue.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{issue.excerpt}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center w-full group">
                  View Newsletter Archive
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-8">
            <SparklesIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Why Our Newsletter Stands Out</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Expert Insights',
                description: 'Content curated by our team of geospatial engineers and industry experts'
              },
              {
                title: 'Actionable Intelligence',
                description: 'Practical advice and strategies you can implement immediately'
              },
              {
                title: 'Exclusive Access',
                description: 'Early previews of new features and priority access to resources'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold text-lg mb-3">{benefit.title}</h4>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="font-semibold text-lg mb-4">Newsletter Delivery Schedule</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                <span>Weekly Industry Roundup - Mondays</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                <span>Technical Deep Dives - Wednesdays</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                <span>Product Updates - Monthly</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                <span>Special Reports - Quarterly</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}