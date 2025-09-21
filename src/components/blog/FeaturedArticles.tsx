'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  UserIcon,
  ClockIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const featuredArticles = [
  {
    id: 1,
    title: 'The Future of AI-Powered Satellite Imagery Analysis',
    excerpt: 'Discover how machine learning algorithms are revolutionizing the way we process and analyze satellite data, enabling real-time insights at unprecedented scale.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Scientist',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    views: '12.5K',
    likes: '342',
    category: 'AI & Machine Learning',
    image: '/images/blog/ai-satellite-analysis.jpg',
    featured: true,
    tags: ['AI', 'Satellite Imagery', 'Machine Learning', 'Computer Vision']
  },
  {
    id: 2,
    title: 'Case Study: Wildfire Prevention Through Predictive Modeling',
    excerpt: 'How our geospatial intelligence platform helped California fire departments reduce wildfire damage by 45% through advanced risk prediction algorithms.',
    author: 'Marcus Rodriguez',
    authorRole: 'Senior Engineer',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    views: '8.9K',
    likes: '278',
    category: 'Case Studies',
    image: '/images/blog/wildfire-prediction.jpg',
    featured: true,
    tags: ['Wildfire', 'Prediction', 'Emergency Response', 'California']
  },
  {
    id: 3,
    title: 'Real-time Climate Monitoring: Scaling Data Processing to Petabytes',
    excerpt: 'Technical deep-dive into our distributed architecture that processes climate data from 10,000+ sensors worldwide in real-time.',
    author: 'Dr. Emily Watson',
    authorRole: 'Climate Research Lead',
    publishDate: '2024-01-05',
    readTime: '15 min read',
    views: '6.2K',
    likes: '189',
    category: 'Technical',
    image: '/images/blog/climate-monitoring.jpg',
    featured: true,
    tags: ['Climate', 'Real-time', 'Distributed Systems', 'Big Data']
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const formatNumber = (num: string) => {
  return num.replace('.', ',');
};

export default function FeaturedArticles() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and impactful content, covering breakthrough research, 
            real-world case studies, and technical innovations in geospatial intelligence.
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 group cursor-pointer"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full group-hover:transform group-hover:scale-[1.02]">
              {/* Image */}
              <div className="relative h-80 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticles[0].category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 text-white/50">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticles[0].excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticles[0].tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {featuredArticles[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{featuredArticles[0].author}</div>
                      <div className="text-gray-500 text-xs">{featuredArticles[0].authorRole}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500 text-sm flex items-center mb-1">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      {formatDate(featuredArticles[0].publishDate)}
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <EyeIcon className="w-4 h-4 mr-1" />
                      {formatNumber(featuredArticles[0].views)}
                    </div>
                    <div className="flex items-center">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {featuredArticles[0].likes}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary Featured Articles */}
          <div className="space-y-8">
            {featuredArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex">
                    {/* Image */}
                    <div className="relative w-48 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0">
                      <div className="absolute top-2 left-2">
                        <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 text-white/50">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{article.author}</div>
                            <div className="text-gray-500 text-xs">{formatDate(article.publishDate)}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <EyeIcon className="w-3 h-3 mr-1" />
                            {formatNumber(article.views)}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center mx-auto">
            View All Articles
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}