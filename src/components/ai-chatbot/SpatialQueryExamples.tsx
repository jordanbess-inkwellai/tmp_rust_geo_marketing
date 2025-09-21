'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const queryCategories = [
  {
    name: 'Proximity & Distance',
    icon: MapPinIcon,
    queries: [
      {
        input: "Find all hospitals within 5 miles of downtown Seattle",
        output: "Found 14 hospitals within 5 miles of downtown Seattle. The closest is Harborview Medical Center at 0.8 miles.",
        resultType: "14 locations found",
        processingTime: "127ms"
      },
      {
        input: "What's the nearest fire station to 1600 Pennsylvania Avenue?",
        output: "The nearest fire station is Engine Company 13, located 0.3 miles northeast at 1018 H Street NW.",
        resultType: "1 location",
        processingTime: "89ms"
      },
      {
        input: "Show me all schools within walking distance of Metro stations",
        output: "Found 47 schools within 0.5 miles of Metro stations. 23 are elementary schools, 15 middle schools, and 9 high schools.",
        resultType: "47 locations",
        processingTime: "234ms"
      }
    ]
  },
  {
    name: 'Spatial Analytics',
    icon: ChartBarIcon,
    queries: [
      {
        input: "Which neighborhoods have both high crime rates and low income?",
        output: "Analysis shows 8 neighborhoods meet both criteria: Anacostia, Congress Heights, and 6 others. Average crime rate: 15.2 incidents per 1000 residents.",
        resultType: "8 areas analyzed",
        processingTime: "456ms"
      },
      {
        input: "Calculate the population density around all military bases",
        output: "Analyzed 15 military installations. Average population density within 10 miles: 2,847 people/sq mi. Highest: Norfolk Naval Base (8,234/sq mi).",
        resultType: "15 bases analyzed",
        processingTime: "678ms"
      },
      {
        input: "Find areas where flood zones overlap with critical infrastructure",
        output: "Identified 23 critical facilities in flood-prone areas: 8 hospitals, 7 power substations, 5 water treatment plants, 3 emergency centers.",
        resultType: "23 facilities at risk",
        processingTime: "389ms"
      }
    ]
  },
  {
    name: 'Real-time Queries',
    icon: ClockIcon,
    queries: [
      {
        input: "What's the current air quality near all elementary schools?",
        output: "Monitoring 127 elementary schools. Current AQI: 23 schools (Good), 89 schools (Moderate), 15 schools (Unhealthy for Sensitive).",
        resultType: "127 schools monitored",
        processingTime: "234ms"
      },
      {
        input: "Show traffic conditions on highways leading to the airport",
        output: "I-405 North: Heavy congestion (25 min delay). SR-518 West: Moderate traffic (8 min delay). I-5 South: Light traffic (normal).",
        resultType: "3 routes analyzed",
        processingTime: "156ms"
      },
      {
        input: "Alert me about any weather warnings near our facilities",
        output: "Current alerts: Flood Watch for Denver facility (ends 6 PM). High Wind Warning for Phoenix location (until midnight).",
        resultType: "2 active alerts",
        processingTime: "98ms"
      }
    ]
  }
];

export default function SpatialQueryExamples() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuery, setActiveQuery] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Query Examples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See how natural language queries are transformed into intelligent spatial 
            analysis and real-time results. Try different categories of questions 
            to explore the full range of AI capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {queryCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => {
                    setActiveCategory(index);
                    setActiveQuery(0);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      activeCategory === index ? 'bg-emerald-500' : 'bg-gray-100'
                    }`}>
                      {React.createElement(category.icon, { 
                        className: `w-5 h-5 ${activeCategory === index ? 'text-white' : 'text-gray-500'}` 
                      })}
                    </div>
                    <div>
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-sm opacity-75">
                        {category.queries.length} examples
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Query Examples */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                <div className="flex items-center">
                  {React.createElement(queryCategories[activeCategory].icon, { className: "w-8 h-8 mr-3" })}
                  <h3 className="text-2xl font-semibold">
                    {queryCategories[activeCategory].name} Examples
                  </h3>
                </div>
              </div>

              {/* Query Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  {queryCategories[activeCategory].queries.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveQuery(index)}
                      className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeQuery === index
                          ? 'border-emerald-500 text-emerald-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Example {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Query Content */}
              <div className="p-6">
                {queryCategories[activeCategory].queries.map((query, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeQuery === index ? 1 : 0 }}
                    className={`space-y-6 ${activeQuery === index ? 'block' : 'hidden'}`}
                  >
                    {/* User Input */}
                    <div className="flex justify-end">
                      <div className="bg-emerald-600 text-white rounded-2xl rounded-br-md p-4 max-w-2xl">
                        <div className="flex items-start">
                          <ChatBubbleLeftRightIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">You asked:</div>
                            <div className="text-sm">"{query.input}"</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md p-4 max-w-3xl">
                        <div className="mb-4">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                              <ChatBubbleLeftRightIcon className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium text-sm">AI Assistant</span>
                            <div className="ml-auto flex items-center text-xs text-gray-500">
                              <ClockIcon className="w-3 h-3 mr-1" />
                              {query.processingTime}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{query.output}</p>
                        </div>

                        {/* Result Summary */}
                        <div className="bg-white rounded-lg p-3 border">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                              <span className="font-medium">Results: {query.resultType}</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                              <span>Processing: {query.processingTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-start mt-4 space-x-3">
                          <button className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-200 transition-colors">
                            🗺️ View on Map
                          </button>
                          <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                            📊 Export Data
                          </button>
                          <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                            🔍 Refine Query
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Ready to Try Your Own Queries?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These examples represent just a fraction of what's possible. 
              Experience the full power of geospatial AI with your own data and questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Start Interactive Demo
              </button>
              <button className="bg-transparent border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                View More Examples
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}