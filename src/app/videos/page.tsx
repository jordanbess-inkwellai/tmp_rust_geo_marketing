'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  PlayCircleIcon,
  VideoCameraIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Video categories
const categories = [
  'All',
  'Platform Overview',
  'Features',
  'Integration',
  'Security',
  'Training',
  'Use Cases'
];

// Sample video data
const videos = [
  {
    id: 1,
    title: 'Tech Maven Geospatial Platform Overview',
    description: 'Complete walkthrough of our defense-grade geospatial intelligence platform, showcasing core capabilities and architecture.',
    duration: '12:45',
    category: 'Platform Overview',
    thumbnail: '/api/placeholder/600/340',
    views: '15.2K',
    date: '2024-01-15',
    featured: true,
    tags: ['Platform', 'Overview', 'Architecture'],
    highlights: [
      'System architecture overview',
      'Key features demonstration',
      'Integration capabilities',
      'Security framework'
    ]
  },
  {
    id: 2,
    title: 'Real-time FMV/KLV Processing Demo',
    description: 'Live demonstration of Full Motion Video and Key Length Value data processing for real-time intelligence operations.',
    duration: '8:23',
    category: 'Features',
    thumbnail: '/api/placeholder/600/340',
    views: '8.7K',
    date: '2024-01-12',
    featured: false,
    tags: ['FMV', 'KLV', 'Real-time'],
    highlights: [
      'Live video feed processing',
      'Metadata extraction',
      'Real-time analytics',
      'Alert generation'
    ]
  },
  {
    id: 3,
    title: 'OGC API Integration Tutorial',
    description: 'Step-by-step guide to integrating with OGC-compliant APIs for seamless data interoperability.',
    duration: '10:15',
    category: 'Integration',
    thumbnail: '/api/placeholder/600/340',
    views: '6.3K',
    date: '2024-01-10',
    featured: false,
    tags: ['OGC', 'API', 'Integration'],
    highlights: [
      'API setup and configuration',
      'Authentication methods',
      'Data querying',
      'Response handling'
    ]
  },
  {
    id: 4,
    title: 'Command & Control Dashboard Tour',
    description: 'Comprehensive tour of our C2 dashboard, demonstrating situational awareness and decision support features.',
    duration: '15:30',
    category: 'Features',
    thumbnail: '/api/placeholder/600/340',
    views: '12.1K',
    date: '2024-01-08',
    featured: true,
    tags: ['C2', 'Dashboard', 'Situational Awareness'],
    highlights: [
      'Real-time map visualization',
      'Asset tracking',
      'Mission planning tools',
      'Communication integration'
    ]
  },
  {
    id: 5,
    title: 'Security & Compliance Features',
    description: 'Deep dive into security features, compliance certifications, and data protection mechanisms.',
    duration: '9:45',
    category: 'Security',
    thumbnail: '/api/placeholder/600/340',
    views: '5.8K',
    date: '2024-01-05',
    featured: false,
    tags: ['Security', 'Compliance', 'FISMA'],
    highlights: [
      'Security architecture',
      'Encryption methods',
      'Access controls',
      'Audit logging'
    ]
  },
  {
    id: 6,
    title: 'Climate Data Analysis Tools',
    description: 'Exploring our climate intelligence capabilities for weather-informed military planning.',
    duration: '11:20',
    category: 'Features',
    thumbnail: '/api/placeholder/600/340',
    views: '4.2K',
    date: '2024-01-03',
    featured: false,
    tags: ['Climate', 'Weather', 'Analysis'],
    highlights: [
      'Weather data integration',
      'Predictive analytics',
      'Impact assessment',
      'Planning optimization'
    ]
  },
  {
    id: 7,
    title: '3D Terrain Visualization Demo',
    description: 'Showcase of advanced 3D terrain rendering with DTED/DEM data for mission planning.',
    duration: '7:15',
    category: 'Features',
    thumbnail: '/api/placeholder/600/340',
    views: '9.5K',
    date: '2023-12-28',
    featured: false,
    tags: ['3D', 'Terrain', 'DTED'],
    highlights: [
      '3D terrain rendering',
      'Elevation analysis',
      'Line-of-sight calculations',
      'Route planning'
    ]
  },
  {
    id: 8,
    title: 'Getting Started: Platform Setup',
    description: 'Complete guide to setting up Tech Maven Geospatial platform in your environment.',
    duration: '20:00',
    category: 'Training',
    thumbnail: '/api/placeholder/600/340',
    views: '3.8K',
    date: '2023-12-25',
    featured: false,
    tags: ['Setup', 'Training', 'Getting Started'],
    highlights: [
      'System requirements',
      'Installation process',
      'Initial configuration',
      'User management'
    ]
  },
  {
    id: 9,
    title: 'Emergency Response Use Case',
    description: 'Real-world application of our platform in emergency response and disaster management scenarios.',
    duration: '13:45',
    category: 'Use Cases',
    thumbnail: '/api/placeholder/600/340',
    views: '7.2K',
    date: '2023-12-20',
    featured: false,
    tags: ['Emergency Response', 'Use Case', 'Public Safety'],
    highlights: [
      'Incident management',
      'Resource allocation',
      'Real-time coordination',
      'After-action analysis'
    ]
  }
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  const featuredVideos = videos.filter(v => v.featured);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-800 text-white">
          <div className="container-custom py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <VideoCameraIcon className="w-5 h-5" />
                <span>Feature Tour & Training Videos</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                See Our Platform <span className="text-gradient-light">In Action</span>
              </h1>
              
              <p className="text-xl text-secondary-200 mb-8">
                Explore comprehensive video tutorials, feature demonstrations, and real-world 
                use cases of Tech Maven Geospatial solutions in defense and intelligence operations.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2 text-secondary-200">
                  <SparklesIcon className="w-5 h-5" />
                  <span>{videos.length} Videos</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-200">
                  <ClockIcon className="w-5 h-5" />
                  <span>2+ Hours Content</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-200">
                  <ChartBarIcon className="w-5 h-5" />
                  <span>100K+ Views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Video Player */}
        <section className="py-12 bg-secondary-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-8">Now Playing</h2>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Video Player Area */}
                <div className="relative bg-secondary-900 aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-24 h-24 bg-primary-600/90 hover:bg-primary-700/90 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <PlayCircleIcon className="w-12 h-12 ml-1" />
                    </button>
                  </div>
                  {/* Overlay with video info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                    <div className="flex items-center space-x-4 text-white/80">
                      <span className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{selectedVideo.duration}</span>
                      </span>
                      <span>{selectedVideo.views} views</span>
                      <span>{selectedVideo.date}</span>
                    </div>
                  </div>
                </div>

                {/* Video Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {selectedVideo.category}
                    </span>
                  </div>
                  
                  <p className="text-secondary-600 mb-6 text-lg">{selectedVideo.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Topics Covered:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedVideo.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2 text-secondary-600">
                          <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedVideo.tags.map(tag => (
                      <span key={tag} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-lg text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">All Videos</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Videos Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-secondary-800 to-primary-800 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <PlayCircleIcon className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      {video.featured && (
                        <span className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-secondary-500 bg-secondary-100 px-2 py-1 rounded">
                          {video.category}
                        </span>
                        <span className="text-sm text-secondary-500">{video.views} views</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-secondary-500">{video.date}</span>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 group">
                          <span>Watch Now</span>
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to See More?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Schedule a personalized demo to explore how Tech Maven Geospatial 
                can transform your defense and intelligence operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="btn-primary bg-white text-primary-700 hover:bg-secondary-50">
                  Schedule Live Demo
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                  Download Resources
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}