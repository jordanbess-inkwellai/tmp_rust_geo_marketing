'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VideoCameraIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
  PlayIcon,
  ArrowRightIcon,
  StarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const upcomingWebinars = [
  {
    id: 1,
    title: 'Advanced Spatial Analytics Workshop',
    description: 'Learn advanced techniques for geospatial data analysis and visualization',
    date: '2024-03-15',
    time: '2:00 PM EST',
    duration: '90 minutes',
    presenter: 'Dr. Sarah Chen',
    role: 'Senior Geospatial Engineer',
    registrations: '1,247',
    type: 'Workshop',
    level: 'Intermediate',
    thumbnail: '🔬'
  },
  {
    id: 2,
    title: 'Platform API Deep Dive',
    description: 'Comprehensive overview of our REST APIs with live coding examples',
    date: '2024-03-22',
    time: '11:00 AM EST',
    duration: '60 minutes',
    presenter: 'Michael Rodriguez',
    role: 'Lead Developer Advocate',
    registrations: '892',
    type: 'Technical',
    level: 'Advanced',
    thumbnail: '⚡'
  },
  {
    id: 3,
    title: 'Getting Started Masterclass',
    description: 'Perfect introduction for teams new to geospatial development',
    date: '2024-03-28',
    time: '3:00 PM EST',
    duration: '75 minutes',
    presenter: 'Jennifer Liu',
    role: 'Customer Success Manager',
    registrations: '2,156',
    type: 'Masterclass',
    level: 'Beginner',
    thumbnail: '🚀'
  }
];

const recordedWebinars = [
  {
    id: 1,
    title: 'Building Real-time Dashboards',
    description: 'Create dynamic dashboards with live data updates',
    duration: '85 minutes',
    views: '15.2K',
    rating: 4.8,
    date: 'Feb 2024',
    presenter: 'Alex Thompson',
    category: 'Development',
    level: 'Intermediate',
    thumbnail: '📊'
  },
  {
    id: 2,
    title: 'Enterprise Security Best Practices',
    description: 'Secure your geospatial applications and data',
    duration: '65 minutes',
    views: '12.7K',
    rating: 4.9,
    date: 'Jan 2024',
    presenter: 'David Kim',
    category: 'Security',
    level: 'Advanced',
    thumbnail: '🔐'
  },
  {
    id: 3,
    title: 'Data Import and Transformation',
    description: 'Efficiently import and transform spatial datasets',
    duration: '70 minutes',
    views: '18.5K',
    rating: 4.7,
    date: 'Jan 2024',
    presenter: 'Maria Garcia',
    category: 'Data Management',
    level: 'Beginner',
    thumbnail: '🗄️'
  },
  {
    id: 4,
    title: 'Performance Optimization Techniques',
    description: 'Optimize your applications for maximum performance',
    duration: '95 minutes',
    views: '9.8K',
    rating: 4.8,
    date: 'Dec 2023',
    presenter: 'Robert Johnson',
    category: 'Performance',
    level: 'Advanced',
    thumbnail: '🚀'
  }
];

const eventCategories = [
  { id: 'all', name: 'All Events', count: 45 },
  { id: 'workshop', name: 'Workshops', count: 18 },
  { id: 'technical', name: 'Technical Sessions', count: 12 },
  { id: 'masterclass', name: 'Masterclasses', count: 8 },
  { id: 'industry', name: 'Industry Focus', count: 7 }
];

const webinarStats = [
  { label: 'Total Webinars', value: '120+', icon: VideoCameraIcon },
  { label: 'Hours of Content', value: '180+', icon: ClockIcon },
  { label: 'Registered Attendees', value: '25K+', icon: UserGroupIcon },
  { label: 'Average Rating', value: '4.8', icon: StarIcon }
];

export default function WebinarsEvents() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activeCategory, setActiveCategory] = useState('all');

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
            Webinars & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our expert-led webinars and training sessions. Learn from industry professionals, 
            get hands-on experience, and stay updated with the latest platform developments.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {webinarStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('recorded')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'recorded'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Recorded Sessions
            </button>
          </div>
        </div>

        {/* Upcoming Webinars */}
        {activeTab === 'upcoming' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{webinar.thumbnail}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(webinar.level)}`}>
                        {webinar.level}
                      </span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                        LIVE
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{webinar.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarDaysIcon className="w-4 h-4 mr-2" />
                      {new Date(webinar.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UserGroupIcon className="w-4 h-4 mr-2" />
                      {webinar.registrations} registered
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-medium text-gray-900">{webinar.presenter}</div>
                      <div className="text-sm text-gray-600">{webinar.role}</div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {webinar.type}
                    </span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recorded Webinars */}
        {activeTab === 'recorded' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recordedWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
                >
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">
                    <div className="text-4xl mb-4">{webinar.thumbnail}</div>
                    <div className="absolute top-4 right-4">
                      <PlayIcon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {webinar.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {webinar.category}
                      </span>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{webinar.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {webinar.views} views
                      </div>
                      <div>{webinar.date}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{webinar.presenter}</div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(webinar.level)}`}>
                          {webinar.level}
                        </span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <VideoCameraIcon className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h3 className="text-3xl font-bold mb-4">Never Miss an Event</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our events calendar and get notified about upcoming webinars, 
            workshops, and training sessions tailored to your interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center">
              Subscribe to Calendar
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse All Events
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}