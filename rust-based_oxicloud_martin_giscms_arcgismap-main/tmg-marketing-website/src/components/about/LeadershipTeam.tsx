'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons';

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer & Co-Founder',
    bio: 'PhD in Geospatial Sciences from MIT. Former lead researcher at NASA JPL with 15+ years in satellite imagery analysis. Passionate about democratizing spatial intelligence.',
    achievements: [
      'Led development of NASA\'s next-gen satellite data processing pipeline',
      'Published 30+ peer-reviewed papers in top geospatial journals',
      'Named to Forbes "30 Under 30" in Enterprise Technology'
    ],
    expertise: ['Satellite Imagery', 'Remote Sensing', 'Product Strategy'],
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    image: '/images/team/sarah-chen.jpg'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer & Co-Founder',
    bio: 'Former Principal Engineer at Google Maps with expertise in large-scale geospatial systems. MS in Computer Science from Stanford University.',
    achievements: [
      'Architect of Google Maps\' real-time traffic processing system',
      'Holds 12 patents in spatial data processing and visualization',
      'Speaker at major tech conferences including FOSS4G and SIGGRAPH'
    ],
    expertise: ['Distributed Systems', 'Spatial Databases', 'Cloud Architecture'],
    linkedin: 'https://linkedin.com/in/marcusrodriguez',
    twitter: 'https://twitter.com/marcusrodriguez',
    image: '/images/team/marcus-rodriguez.jpg'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief Scientific Officer & Co-Founder',
    bio: 'PhD in Environmental Science from UC Berkeley. Expert in climate modeling and environmental data analysis with focus on actionable insights.',
    achievements: [
      'Lead scientist on 5 major climate research projects',
      'Contributed to IPCC climate assessment reports',
      'Winner of National Science Foundation CAREER Award'
    ],
    expertise: ['Climate Modeling', 'Environmental Analytics', 'Research Strategy'],
    linkedin: 'https://linkedin.com/in/emilywatson',
    twitter: 'https://twitter.com/emilywatson',
    image: '/images/team/emily-watson.jpg'
  },
  {
    name: 'James Liu',
    role: 'VP of Engineering',
    bio: 'Former Engineering Director at Uber focusing on location-based services. MS in Software Engineering from Carnegie Mellon University.',
    achievements: [
      'Scaled Uber\'s mapping services to 100+ countries',
      'Built high-performance teams of 50+ engineers',
      'Expert in real-time geospatial processing at scale'
    ],
    expertise: ['Engineering Leadership', 'Scalable Systems', 'Team Building'],
    linkedin: 'https://linkedin.com/in/jamesliu',
    twitter: 'https://twitter.com/jamesliu',
    image: '/images/team/james-liu.jpg'
  },
  {
    name: 'Maria Gonzalez',
    role: 'VP of Product',
    bio: 'Former Senior Product Manager at Esri with deep expertise in GIS user experience and enterprise product strategy.',
    achievements: [
      'Led product strategy for ArcGIS Online growth to 1M+ users',
      'Expert in enterprise GIS workflows and user needs',
      'MBA from Wharton School with focus on technology products'
    ],
    expertise: ['Product Strategy', 'User Experience', 'Enterprise Sales'],
    linkedin: 'https://linkedin.com/in/mariagonzalez',
    twitter: 'https://twitter.com/mariagonzalez',
    image: '/images/team/maria-gonzalez.jpg'
  },
  {
    name: 'David Kim',
    role: 'VP of Sales & Business Development',
    bio: 'Former Sales Director at Salesforce with track record of building enterprise sales organizations and strategic partnerships.',
    achievements: [
      'Grew Salesforce GIS integration partner program by 300%',
      'Closed $50M+ in enterprise deals across multiple industries',
      'Expert in complex B2B sales cycles and customer success'
    ],
    expertise: ['Enterprise Sales', 'Strategic Partnerships', 'Customer Success'],
    linkedin: 'https://linkedin.com/in/davidkim',
    twitter: 'https://twitter.com/davidkim',
    image: '/images/team/david-kim.jpg'
  }
];

export default function LeadershipTeam() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced leaders driving our mission to transform geospatial technology. 
            Our team brings together decades of expertise from leading tech companies and research institutions.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Founding Team</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.slice(0, 3).map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 border border-gray-200 h-full">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogoIcon className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href={leader.twitter}
                      className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterLogoIcon className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Executive Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Executive Team</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.slice(3).map((leader, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 border border-gray-200 h-full">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-indigo-600 font-medium mb-4">{leader.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogoIcon className="w-5 h-5 text-indigo-600" />
                    </a>
                    <a
                      href={leader.twitter}
                      className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterLogoIcon className="w-5 h-5 text-indigo-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Leadership by the Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="opacity-90">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="opacity-90">Top-Tier Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="opacity-90">Patents & Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="opacity-90">Advanced Degrees</div>
            </div>
          </div>
        </motion.div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advisory Board</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our advisory board includes industry veterans, academic leaders, and domain experts who provide 
            strategic guidance and help us stay at the forefront of geospatial innovation.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Prof. John Smith', role: 'MIT Professor of GIS', company: 'MIT' },
                { name: 'Dr. Lisa Zhang', role: 'Former VP Engineering', company: 'Apple Maps' },
                { name: 'Michael Brown', role: 'Former Chief Data Officer', company: 'NASA' },
                { name: 'Sarah Johnson', role: 'VP Product Strategy', company: 'Microsoft' }
              ].map((advisor, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{advisor.name}</h4>
                  <p className="text-gray-600 text-xs">{advisor.role}</p>
                  <p className="text-blue-600 text-xs font-medium">{advisor.company}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}