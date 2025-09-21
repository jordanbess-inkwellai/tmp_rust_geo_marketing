'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const jobCategories = [
  { id: 'all', name: 'All Positions', count: 35, color: 'bg-gray-100 text-gray-700' },
  { id: 'engineering', name: 'Engineering', count: 15, color: 'bg-blue-100 text-blue-700' },
  { id: 'product', name: 'Product & Design', count: 8, color: 'bg-purple-100 text-purple-700' },
  { id: 'data', name: 'Data & Research', count: 7, color: 'bg-green-100 text-green-700' },
  { id: 'business', name: 'Business & Operations', count: 5, color: 'bg-orange-100 text-orange-700' }
];

const jobListings = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    category: 'engineering',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$140k - $180k',
    icon: RocketLaunchIcon,
    description: 'Build scalable geospatial data processing systems and user-facing applications using modern web technologies.',
    requirements: ['5+ years full-stack development', 'React/TypeScript', 'Node.js/Python', 'Cloud platforms (AWS/GCP)'],
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Senior Product Manager',
    category: 'product',
    department: 'Product',
    location: 'San Francisco, CA (Remote OK)',
    type: 'Full-time',
    salary: '$150k - $200k',
    icon: SparklesIcon,
    description: 'Drive product strategy for our geospatial intelligence platform, working closely with engineering and design teams.',
    requirements: ['7+ years product management', 'B2B SaaS experience', 'Technical background', 'Data visualization knowledge'],
    isNew: false,
    isFeatured: true
  },
  {
    id: 3,
    title: 'Machine Learning Engineer',
    category: 'engineering',
    department: 'AI Research',
    location: 'Remote Global',
    type: 'Full-time',
    salary: '$130k - $170k',
    icon: AcademicCapIcon,
    description: 'Develop ML models for automated geospatial pattern recognition and predictive analytics.',
    requirements: ['MS/PhD in ML/CS', 'Python/PyTorch', 'Computer Vision', 'Geospatial data experience'],
    isNew: true,
    isFeatured: false
  },
  {
    id: 4,
    title: 'Senior Data Scientist',
    category: 'data',
    department: 'Data Science',
    location: 'London, UK (Remote OK)',
    type: 'Full-time',
    salary: '£80k - £120k',
    icon: AcademicCapIcon,
    description: 'Analyze large-scale geospatial datasets to extract meaningful insights and build predictive models.',
    requirements: ['PhD in quantitative field', 'R/Python expertise', 'Statistical modeling', 'GIS experience preferred'],
    isNew: false,
    isFeatured: false
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    category: 'product',
    department: 'Design',
    location: 'Remote (Americas)',
    type: 'Full-time',
    salary: '$110k - $140k',
    icon: SparklesIcon,
    description: 'Design intuitive interfaces for complex geospatial data visualization and analysis tools.',
    requirements: ['5+ years UX/UI design', 'Figma/Sketch proficiency', 'Data visualization', 'B2B product experience'],
    isNew: false,
    isFeatured: false
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    category: 'engineering',
    department: 'Infrastructure',
    location: 'Remote Global',
    type: 'Full-time',
    salary: '$120k - $160k',
    icon: RocketLaunchIcon,
    description: 'Build and maintain scalable cloud infrastructure for processing massive geospatial datasets.',
    requirements: ['Kubernetes/Docker', 'AWS/GCP/Azure', 'CI/CD pipelines', 'Infrastructure as code'],
    isNew: false,
    isFeatured: false
  },
  {
    id: 7,
    title: 'Sales Engineer',
    category: 'business',
    department: 'Sales',
    location: 'New York, NY (Remote OK)',
    type: 'Full-time',
    salary: '$100k - $130k + Commission',
    icon: UserGroupIcon,
    description: 'Work with enterprise customers to understand technical requirements and demonstrate platform capabilities.',
    requirements: ['Technical sales experience', 'GIS/mapping knowledge', 'Enterprise software', 'Excellent communication'],
    isNew: false,
    isFeatured: false
  },
  {
    id: 8,
    title: 'Research Scientist',
    category: 'data',
    department: 'Research',
    location: 'Boston, MA (Remote OK)',
    type: 'Full-time',
    salary: '$140k - $180k',
    icon: AcademicCapIcon,
    description: 'Conduct cutting-edge research in geospatial algorithms, spatial analysis, and environmental modeling.',
    requirements: ['PhD in relevant field', 'Published research', 'Algorithm development', 'Open source contributions'],
    isNew: true,
    isFeatured: true
  }
];

export default function JobOpenings() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to democratize geospatial intelligence. We're looking for talented individuals 
            across all disciplines to help shape the future of spatial technology.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search positions, departments, or locations..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : category.color
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                job.isFeatured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
              } group cursor-pointer`}
            >
              {/* Featured Badge */}
              {job.isFeatured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* New Badge */}
              {job.isNew && (
                <div className={`absolute -top-3 ${job.isFeatured ? 'right-8' : 'left-8'}`}>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <BriefcaseIcon className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="text-gray-500 text-xs px-2 py-1">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center group-hover:scale-105">
                    Apply Now
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't see the perfect role?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know 
              how you'd like to contribute to the future of geospatial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Submit General Application
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Join Our Talent Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}