'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const latestArticles = [
  {
    id: 1,
    title: 'Building Resilient Cities with Real-time Flood Monitoring',
    excerpt: 'Explore how IoT sensors and satellite data combine to create early warning systems that save lives and protect infrastructure.',
    author: 'Dr. Jennifer Park',
    authorRole: 'Urban Systems Researcher',
    publishDate: '2024-01-20',
    readTime: '6 min read',
    views: '4.2K',
    likes: '89',
    comments: '12',
    category: 'Case Studies',
    tags: ['Smart Cities', 'IoT', 'Flood Monitoring'],
    image: '/images/blog/flood-monitoring.jpg'
  },
  {
    id: 2,
    title: 'The Evolution of Satellite Imagery Resolution: From Meters to Centimeters',
    excerpt: 'A technical deep dive into how advances in satellite technology are revolutionizing precision agriculture and urban planning.',
    author: 'Michael Torres',
    authorRole: 'Remote Sensing Engineer',
    publishDate: '2024-01-18',
    readTime: '10 min read',
    views: '7.8K',
    likes: '156',
    comments: '23',
    category: 'Technical',
    tags: ['Satellite Imagery', 'Remote Sensing', 'High Resolution'],
    image: '/images/blog/satellite-resolution.jpg'
  },
  {
    id: 3,
    title: 'Machine Learning for Automated Land Cover Classification',
    excerpt: 'Learn how neural networks are achieving 95%+ accuracy in automatically identifying land use patterns from aerial imagery.',
    author: 'Dr. Lisa Chen',
    authorRole: 'AI Research Lead',
    publishDate: '2024-01-16',
    readTime: '12 min read',
    views: '9.1K',
    likes: '203',
    comments: '31',
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'Land Cover', 'Classification'],
    image: '/images/blog/land-cover-ml.jpg'
  },
  {
    id: 4,
    title: 'API Best Practices for Geospatial Data Integration',
    excerpt: 'Essential patterns and practices for building scalable APIs that handle complex geospatial queries and large datasets.',
    author: 'Alex Rodriguez',
    authorRole: 'Platform Architect',
    publishDate: '2024-01-14',
    readTime: '8 min read',
    views: '5.6K',
    likes: '124',
    comments: '18',
    category: 'Technical',
    tags: ['APIs', 'Integration', 'Best Practices'],
    image: '/images/blog/api-best-practices.jpg'
  },
  {
    id: 5,
    title: 'Climate Change Visualization: Making Data Tell Stories',
    excerpt: 'How interactive visualizations help communicate complex climate data to policymakers and the general public.',
    author: 'Emma Thompson',
    authorRole: 'Data Visualization Expert',
    publishDate: '2024-01-12',
    readTime: '7 min read',
    views: '6.3K',
    likes: '178',
    comments: '25',
    category: 'Industry Insights',
    tags: ['Climate Change', 'Visualization', 'Data Storytelling'],
    image: '/images/blog/climate-visualization.jpg'
  },
  {
    id: 6,
    title: 'Getting Started with Our Python SDK: A Complete Tutorial',
    excerpt: 'Step-by-step guide to integrating geospatial intelligence into your Python applications with code examples.',
    author: 'David Kim',
    authorRole: 'Developer Relations',
    publishDate: '2024-01-10',
    readTime: '15 min read',
    views: '11.2K',
    likes: '267',
    comments: '42',
    category: 'Tutorials',
    tags: ['Python', 'SDK', 'Tutorial'],
    image: '/images/blog/python-sdk-tutorial.jpg'
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

export default function LatestArticles() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the newest insights, tutorials, and breakthroughs 
            in geospatial technology from our team of experts.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latestArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 text-white/50">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Author */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{article.author}</div>
                      <div className="text-gray-500 text-xs">{article.authorRole}</div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="w-3 h-3 mr-1" />
                        {formatDate(article.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <EyeIcon className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <HeartIcon className="w-3 h-3 mr-1" />
                        {article.likes}
                      </div>
                      <div className="flex items-center">
                        <ChatBubbleLeftRightIcon className="w-3 h-3 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More / Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center mx-auto mb-6">
            Load More Articles
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
          <p className="text-gray-500 text-sm">
            Showing 6 of 240+ articles
          </p>
        </motion.div>
      </div>
    </div>
  );
}