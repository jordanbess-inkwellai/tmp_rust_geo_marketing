'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import SearchBar from '../components/common/SearchBar';

const quickLinks = [
  {
    title: 'Home',
    description: 'Return to our homepage',
    href: '/',
    icon: HomeIcon,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Documentation',
    description: 'Browse our technical resources',
    href: '/resources',
    icon: DocumentTextIcon,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Careers',
    description: 'Join our growing team',
    href: '/careers',
    icon: UserGroupIcon,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team',
    href: '/resources',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="text-[12rem] md:text-[16rem] font-bold text-gray-200 leading-none">
              404
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <ExclamationTriangleIcon className="w-24 h-24 md:w-32 md:h-32 text-yellow-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital wilderness. 
            Don't worry though – we'll help you find your way back to the right path.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
              Search for what you need
            </h3>
            <SearchBar 
              placeholder="Try searching for documentation, careers, or products..."
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Popular Destinations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href}
                  className="block bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-300 group"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
          <Link
            href="/"
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 group"
          >
            <HomeIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Home
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200"
        >
          <h4 className="font-semibold text-blue-900 mb-2">Still can't find what you're looking for?</h4>
          <p className="text-blue-700 text-sm mb-4">
            Our team is here to help. Reach out to us and we'll point you in the right direction.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
          >
            Contact Support
            <ArrowLeftIcon className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}