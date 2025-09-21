'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  DocumentArrowDownIcon,
  PlayIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    id: 'live-demo',
    title: 'Live Analytics Demo',
    description: 'Schedule a personalized demonstration of our analytics capabilities',
    icon: PresentationChartLineIcon,
    duration: '45 minutes',
    audience: 'Decision Makers, Data Teams',
    includes: [
      'Real-time dashboard walkthrough',
      'Custom use case scenarios',
      'Performance benchmarking',
      'Q&A with analytics experts',
      'ROI analysis and pricing discussion'
    ],
    cta: 'Schedule Demo',
    popular: true
  },
  {
    id: 'poc-trial',
    title: 'Proof of Concept Trial',
    description: 'Get hands-on experience with a 30-day trial using your own data',
    icon: ChartBarIcon,
    duration: '30 days',
    audience: 'Technical Teams, Data Scientists',
    includes: [
      'Free 30-day trial access',
      'Data migration assistance',
      'Dedicated support team',
      'Custom dashboard setup',
      'Performance optimization'
    ],
    cta: 'Start Trial',
    popular: false
  },
  {
    id: 'training-workshop',
    title: 'Analytics Training Workshop',
    description: 'Comprehensive training program for your team on analytics best practices',
    icon: AcademicCapIcon,
    duration: '2-4 hours',
    audience: 'End Users, Analysts',
    includes: [
      'Platform fundamentals training',
      'Advanced analytics techniques',
      'Dashboard creation workshop',
      'Best practices and tips',
      'Certification upon completion'
    ],
    cta: 'Book Training',
    popular: false
  },
  {
    id: 'consultation',
    title: 'Analytics Consultation',
    description: 'Strategic consultation on analytics implementation and data strategy',
    icon: UserGroupIcon,
    duration: '60 minutes',
    audience: 'Leadership, Strategy Teams',
    includes: [
      'Current state assessment',
      'Analytics strategy roadmap',
      'Technology recommendations',
      'ROI projections and timeline',
      'Implementation planning'
    ],
    cta: 'Book Consultation',
    popular: false
  }
];

const resources = [
  {
    title: 'Analytics Platform Overview',
    description: 'Comprehensive guide to our analytics capabilities',
    type: 'PDF Guide',
    size: '2.3 MB',
    icon: DocumentArrowDownIcon
  },
  {
    title: 'Performance Benchmarks Report',
    description: 'Industry performance comparison and benchmarks',
    type: 'Research Report',
    size: '1.8 MB',
    icon: DocumentArrowDownIcon
  },
  {
    title: 'Dashboard Examples Gallery',
    description: 'Real-world dashboard templates and examples',
    type: 'Interactive Gallery',
    size: 'Online',
    icon: PlayIcon
  },
  {
    title: 'ROI Calculator',
    description: 'Calculate potential return on investment',
    type: 'Interactive Tool',
    size: 'Online',
    icon: ChartBarIcon
  }
];

const testimonials = [
  {
    quote: "The analytics platform transformed how we visualize and understand our geospatial data. The real-time capabilities are game-changing.",
    author: "Dr. Sarah Chen",
    role: "Chief Data Officer",
    company: "Global Logistics Corp",
    avatar: "/avatars/sarah-chen.jpg"
  },
  {
    quote: "Implementation was seamless and the performance improvements were immediate. Our query times dropped by 80%.",
    author: "Michael Rodriguez",
    role: "Senior Data Architect",
    company: "Smart City Solutions",
    avatar: "/avatars/michael-rodriguez.jpg"
  },
  {
    quote: "The custom dashboards and real-time alerts have significantly improved our operational efficiency and decision-making speed.",
    author: "Lisa Thompson",
    role: "Operations Director",
    company: "Emergency Response Agency",
    avatar: "/avatars/lisa-thompson.jpg"
  }
];

export default function AnalyticsContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedOption, setSelectedOption] = useState('live-demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    contactType: 'live-demo',
    useCase: '',
    dataSize: '',
    timeline: '',
    message: ''
  });

  const selectedContactOption = contactOptions.find(option => option.id === selectedOption);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="analytics-contact" className="section bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Connect with our analytics experts 
            to explore how our platform can accelerate your decision-making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">How Can We Help?</h3>
              <div className="space-y-3">
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    onClick={() => {
                      setSelectedOption(option.id);
                      setFormData({ ...formData, contactType: option.id });
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 relative ${
                      selectedOption === option.id
                        ? 'bg-white/20 border-blue-400 text-white backdrop-blur-sm'
                        : 'bg-white/10 border-white/20 text-blue-100 hover:border-blue-400 backdrop-blur-sm'
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        selectedOption === option.id ? 'bg-blue-500' : 'bg-white/20'
                      }`}>
                        <option.icon className={`w-5 h-5 ${
                          selectedOption === option.id ? 'text-white' : 'text-blue-300'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold">{option.title}</div>
                        <div className="text-sm opacity-75">{option.duration}</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-75 line-clamp-2">{option.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {selectedContactOption && (
              <motion.div
                key={selectedOption}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white p-6">
                  <div className="flex items-center">
                    <selectedContactOption.icon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold">{selectedContactOption.title}</h3>
                      <p className="text-blue-100">{selectedContactOption.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">What's Included</h4>
                      <div className="space-y-2">
                        {selectedContactOption.includes.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-100 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-blue-200 text-sm">Duration:</span>
                          <span className="text-white text-sm font-medium">{selectedContactOption.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-200 text-sm">Target Audience:</span>
                          <span className="text-white text-sm font-medium">{selectedContactOption.audience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                          placeholder="Your role/title"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Data Size
                        </label>
                        <select
                          name="dataSize"
                          value={formData.dataSize}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        >
                          <option value="" className="text-gray-700">Select data size</option>
                          <option value="small" className="text-gray-700">&lt; 1 TB</option>
                          <option value="medium" className="text-gray-700">1 TB - 10 TB</option>
                          <option value="large" className="text-gray-700">10 TB - 100 TB</option>
                          <option value="enterprise" className="text-gray-700">&gt; 100 TB</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1 text-sm">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        >
                          <option value="" className="text-gray-700">Select timeline</option>
                          <option value="immediate" className="text-gray-700">Immediate (0-30 days)</option>
                          <option value="short" className="text-gray-700">Short term (1-3 months)</option>
                          <option value="medium" className="text-gray-700">Medium term (3-6 months)</option>
                          <option value="long" className="text-gray-700">Long term (6+ months)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1 text-sm">
                        Use Case & Requirements
                      </label>
                      <textarea
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Tell us about your analytics needs, current challenges, and what you'd like to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {selectedContactOption.cta}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Additional Resources
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200 cursor-pointer border border-white/20"
              >
                <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">{resource.title}</h4>
                <p className="text-blue-100 text-sm mb-3">{resource.description}</p>
                <div className="text-xs text-blue-200">
                  {resource.type} • {resource.size}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <p className="text-blue-100 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-blue-200">{testimonial.role}</div>
                    <div className="text-sm text-blue-300">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-100 mb-6 text-lg max-w-3xl mx-auto">
            Ready to unlock the full potential of your data? Our analytics experts are standing by 
            to help you build the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Call Sales: 1-800-TMG-DATA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}