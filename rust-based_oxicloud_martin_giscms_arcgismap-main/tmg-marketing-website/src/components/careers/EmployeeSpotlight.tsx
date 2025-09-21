'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const employeeStories = [
  {
    name: 'Dr. Priya Singh',
    role: 'Senior Research Scientist',
    location: 'Mumbai, India',
    joinDate: 'Joined 2021',
    previousRole: 'NASA Jet Propulsion Laboratory',
    avatar: 'PS',
    quote: 'The intersection of cutting-edge research and real-world impact is what makes this role extraordinary.',
    story: 'After completing my PhD in Remote Sensing at IIT, I spent 5 years at NASA JPL working on Mars mission data. When I joined our team, I was amazed by the opportunity to apply similar techniques to solve Earth\'s environmental challenges. Here, I\'ve led projects that use satellite imagery to track deforestation in real-time and predict wildfire risks.',
    achievements: [
      'Led development of real-time deforestation tracking system',
      'Published 8 research papers since joining',
      'Mentored 12+ junior researchers and interns',
      'Spoke at 5 international conferences'
    ],
    favoriteProject: 'Wildfire Prediction Model',
    projectDescription: 'Developed an ML model that predicts wildfire risk 72 hours in advance with 85% accuracy.',
    growth: 'From Senior Scientist to Research Team Lead in 2 years',
    icon: AcademicCapIcon,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Alex Chen',
    role: 'Principal Software Engineer',
    location: 'Vancouver, Canada',
    joinDate: 'Joined 2020',
    previousRole: 'Google Cloud Platform',
    avatar: 'AC',
    quote: 'Building systems that process petabytes of geospatial data daily while maintaining sub-second response times is an engineer\'s dream.',
    story: 'I came from Google Cloud where I worked on large-scale data processing systems. The technical challenges here are incredible - we\'re processing satellite imagery, sensor data, and user uploads at a scale that few companies handle. I\'ve had the freedom to architect solutions from scratch and see them serve millions of users.',
    achievements: [
      'Architected our real-time data processing pipeline',
      'Reduced query response time by 90%',
      'Built auto-scaling infrastructure serving 50M+ requests/day',
      'Open-sourced 3 geospatial data processing libraries'
    ],
    favoriteProject: 'Real-time Geospatial Query Engine',
    projectDescription: 'Built a distributed query engine that processes complex spatial queries across petabyte-scale datasets in real-time.',
    growth: 'Promoted to Principal Engineer with team of 15 engineers',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Maria Gonzalez',
    role: 'Senior Product Designer',
    location: 'Barcelona, Spain',
    joinDate: 'Joined 2022',
    previousRole: 'Airbnb Design Team',
    avatar: 'MG',
    quote: 'Designing interfaces for complex geospatial data is like solving puzzles that help people understand their world better.',
    story: 'Coming from Airbnb, I thought I understood complex user experiences. But designing for geospatial data visualization opened up entirely new challenges. How do you make satellite imagery analysis intuitive for non-experts? How do you visualize 4D data (space + time) in compelling ways? Every day brings new design challenges that push creative boundaries.',
    achievements: [
      'Redesigned main dashboard increasing user engagement by 40%',
      'Led design system implementation across 8 product teams',
      'Conducted user research in 12 countries',
      'Won 2 design awards for data visualization innovation'
    ],
    favoriteProject: 'Temporal Data Visualization',
    projectDescription: 'Created an innovative interface for visualizing how geographic regions change over time.',
    growth: 'Leading design for entire geospatial analytics product suite',
    icon: SparklesIcon,
    color: 'from-pink-500 to-rose-600'
  }
];

export default function EmployeeSpotlight() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Employee Spotlight</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet some of the amazing people who make our mission possible. 
            Hear their stories, see their growth, and discover what drives their passion for geospatial technology.
          </p>
        </motion.div>

        {/* Employee Stories */}
        <div className="space-y-16">
          {employeeStories.map((employee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Employee Info */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-start mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${employee.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-6 flex-shrink-0`}>
                        {employee.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{employee.name}</h3>
                        <p className="text-lg text-blue-600 font-medium mb-1">{employee.role}</p>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <GlobeAltIcon className="w-4 h-4 mr-1" />
                          {employee.location}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {employee.joinDate} • Previously at {employee.previousRole}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 pl-4 border-l-4 border-blue-500">
                      "{employee.quote}"
                    </blockquote>

                    {/* Growth Story */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
                      <div className="flex items-center mb-3">
                        <StarIcon className="w-5 h-5 text-yellow-500 mr-2" />
                        <span className="font-semibold text-gray-900">Career Growth</span>
                      </div>
                      <p className="text-gray-700 text-sm">{employee.growth}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <employee.icon className="w-5 h-5 mr-2 text-blue-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {employee.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Story & Project */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">My Journey</h4>
                      <p className="text-gray-600 leading-relaxed mb-8">{employee.story}</p>

                      {/* Favorite Project */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-center mb-3">
                          <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-semibold text-gray-900">Favorite Project</span>
                        </div>
                        <h5 className="font-bold text-blue-900 mb-2">{employee.favoriteProject}</h5>
                        <p className="text-blue-800 text-sm leading-relaxed">{employee.projectDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <div className="flex justify-center mb-8">
            <UserGroupIcon className="w-16 h-16 text-blue-200" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Ready to Write Your Own Success Story?</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Join a team where your growth is supported, your ideas matter, and your work 
              has global impact. Every team member has a unique journey, and we'd love to 
              help you write yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Explore Open Positions
              </button>
              <button className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Join Our Talent Network
              </button>
            </div>
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Our Team Growth
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '78%', label: 'Internal Promotions', description: 'Team members promoted from within' },
              { value: '2.5x', label: 'Average Salary Growth', description: 'Over 3 years with the company' },
              { value: '40+', label: 'Conference Speakers', description: 'Team members presenting at events' },
              { value: '15+', label: 'Open Source Projects', description: 'Contributed by our team' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}