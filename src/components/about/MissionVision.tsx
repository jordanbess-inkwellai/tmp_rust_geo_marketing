'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  EyeIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const visionPoints = [
  {
    icon: EyeIcon,
    title: 'Universal Access',
    description: 'Making geospatial technology accessible to everyone, regardless of technical expertise or organization size.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation Leadership',
    description: 'Pioneering the next generation of spatial intelligence tools that drive breakthrough discoveries.'
  },
  {
    icon: LightBulbIcon,
    title: 'Data-Driven Insights',
    description: 'Transforming raw geographic data into actionable intelligence that solves real-world challenges.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Global Impact',
    description: 'Enabling organizations worldwide to make better decisions through the power of location intelligence.'
  }
];

export default function MissionVision() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by vision. Discover what motivates us to push the boundaries 
            of geospatial technology every day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="pt-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-blue-600">To democratize geospatial intelligence</strong> by creating 
                    powerful, intuitive platforms that transform complex spatial data into clear, actionable insights 
                    for organizations of all sizes.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that location intelligence should not be limited to specialists with advanced GIS training. 
                    Our mission is to break down technical barriers and make spatial analysis as accessible as using 
                    a web browser or mobile app.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium italic">
                      "Every organization generates location data. Every decision has a spatial component. 
                      Our mission is to unlock this potential."
                    </p>
                    <p className="text-blue-600 text-sm mt-2">- Founding Team</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="pt-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-indigo-600">A world where spatial intelligence drives every important decision</strong> 
                    — from urban planning and environmental protection to business strategy and scientific research.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a future where geographic barriers dissolve, where data from satellites, sensors, 
                    and citizens seamlessly integrate to create a living map of our world that helps humanity 
                    solve its greatest challenges.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
                    <p className="text-indigo-800 font-medium italic">
                      "We're not just building software — we're building the foundation for a more 
                      spatially intelligent civilization."
                    </p>
                    <p className="text-indigo-600 text-sm mt-2">- Our Vision Statement</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How We're Making It Happen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-indigo-500 group-hover:to-purple-600 transition-colors duration-300">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Our Commitment to Impact</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Every feature we build, every partnership we form, and every decision we make is guided by 
              our mission and vision. We measure our success not just in revenue or user growth, but in 
              the real-world problems solved and the positive impact created through better spatial understanding.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="opacity-90">Decisions Improved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Global Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}