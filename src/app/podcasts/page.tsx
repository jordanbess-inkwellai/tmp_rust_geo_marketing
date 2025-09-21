'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  PauseIcon, 
  MicrophoneIcon, 
  CalendarIcon,
  ClockIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Sample podcast data
const podcasts = [
  {
    id: 1,
    title: 'The Future of GEOINT: AI and Machine Learning in Defense',
    episode: 'Episode 24',
    date: '2024-01-15',
    duration: '45 min',
    description: 'Exploring how artificial intelligence and machine learning are revolutionizing geospatial intelligence gathering and analysis in modern defense operations.',
    hosts: ['Dr. Sarah Chen', 'Col. Michael Roberts'],
    category: 'Technology',
    featured: true,
    audioUrl: '#',
    topics: ['AI/ML', 'Defense Tech', 'GEOINT'],
    listens: '5.2K'
  },
  {
    id: 2,
    title: 'Command & Control Systems: Lessons from the Field',
    episode: 'Episode 23',
    date: '2024-01-08',
    duration: '38 min',
    description: 'Real-world insights from military commanders on implementing effective C2 systems in complex operational environments.',
    hosts: ['Gen. James Anderson', 'Maj. Lisa Thompson'],
    category: 'Operations',
    featured: false,
    audioUrl: '#',
    topics: ['C2', 'Field Operations', 'Leadership'],
    listens: '3.8K'
  },
  {
    id: 3,
    title: 'Open Standards in Defense: The OGC API Revolution',
    episode: 'Episode 22',
    date: '2024-01-01',
    duration: '52 min',
    description: 'Deep dive into how Open Geospatial Consortium standards are enabling better interoperability and data sharing across defense platforms.',
    hosts: ['Dr. Sarah Chen', 'Mark Williams'],
    category: 'Standards',
    featured: false,
    audioUrl: '#',
    topics: ['OGC', 'Standards', 'Interoperability'],
    listens: '2.9K'
  },
  {
    id: 4,
    title: 'Climate Intelligence: Weather Data in Military Planning',
    episode: 'Episode 21',
    date: '2023-12-25',
    duration: '41 min',
    description: 'Understanding the critical role of climate and weather data in modern military strategy and tactical planning.',
    hosts: ['Dr. Emily Johnson', 'Col. Michael Roberts'],
    category: 'Intelligence',
    featured: false,
    audioUrl: '#',
    topics: ['Climate', 'Intel', 'Planning'],
    listens: '4.1K'
  },
  {
    id: 5,
    title: 'FMV/KLV Processing: Real-time Video Intelligence',
    episode: 'Episode 20',
    date: '2023-12-18',
    duration: '47 min',
    description: 'Technical deep-dive into Full Motion Video and Key Length Value data processing for real-time intelligence operations.',
    hosts: ['Dr. Sarah Chen', 'Tech Lead Alex Kumar'],
    category: 'Technology',
    featured: false,
    audioUrl: '#',
    topics: ['FMV', 'KLV', 'Video Intel'],
    listens: '3.5K'
  },
  {
    id: 6,
    title: 'Building Resilient GIS Infrastructure for Defense',
    episode: 'Episode 19',
    date: '2023-12-11',
    duration: '43 min',
    description: 'Best practices for creating robust, secure, and scalable geographic information systems for defense applications.',
    hosts: ['Mark Williams', 'Dr. Emily Johnson'],
    category: 'Infrastructure',
    featured: false,
    audioUrl: '#',
    topics: ['GIS', 'Infrastructure', 'Security'],
    listens: '2.7K'
  },
];

const categories = ['All', 'Technology', 'Operations', 'Standards', 'Intelligence', 'Infrastructure'];

export default function PodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredPodcasts = selectedCategory === 'All' 
    ? podcasts 
    : podcasts.filter(p => p.category === selectedCategory);

  const featuredPodcast = podcasts.find(p => p.featured);

  const handlePlayPause = (podcastId: number) => {
    if (playingId === podcastId) {
      setPlayingId(null);
    } else {
      setPlayingId(podcastId);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-secondary-800 to-primary-800 text-white">
          <div className="container-custom py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MicrophoneIcon className="w-5 h-5" />
                <span>Tech Maven Geospatial Podcast Series</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Defense Tech <span className="text-gradient-light">Insights</span>
              </h1>
              
              <p className="text-xl text-secondary-200 mb-8">
                Join industry leaders and defense experts as we explore the latest in GEOINT, 
                command & control systems, and military technology innovations.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2 text-secondary-200">
                  <SparklesIcon className="w-5 h-5" />
                  <span>Weekly Episodes</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-200">
                  <UserGroupIcon className="w-5 h-5" />
                  <span>Expert Hosts</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-200">
                  <ChartBarIcon className="w-5 h-5" />
                  <span>50K+ Monthly Listeners</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Episode */}
        {featuredPodcast && (
          <section className="py-12 bg-secondary-50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-8 text-center">Featured Episode</h2>
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                    <span className="text-secondary-500">{featuredPodcast.episode}</span>
                    <span className="text-secondary-400">•</span>
                    <span className="text-secondary-500">{featuredPodcast.date}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{featuredPodcast.title}</h3>
                  <p className="text-secondary-600 mb-6 text-lg">{featuredPodcast.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 text-secondary-500">
                      <ClockIcon className="w-5 h-5" />
                      <span>{featuredPodcast.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-500">
                      <UserGroupIcon className="w-5 h-5" />
                      <span>Hosts: {featuredPodcast.hosts.join(', ')}</span>
                    </div>
                  </div>

                  {/* Audio Player Mockup */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handlePlayPause(featuredPodcast.id)}
                        className="w-16 h-16 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                      >
                        {playingId === featuredPodcast.id ? (
                          <PauseIcon className="w-8 h-8" />
                        ) : (
                          <PlayIcon className="w-8 h-8 ml-1" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-primary-600 rounded-full"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-secondary-500">
                          <span>12:34</span>
                          <span>{featuredPodcast.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {featuredPodcast.topics.map(topic => (
                      <span key={topic} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-lg text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Episodes */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">All Episodes</h2>
              
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

              {/* Episodes Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPodcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-secondary-500">{podcast.episode}</span>
                        <span className="bg-secondary-100 text-secondary-700 text-xs px-2 py-1 rounded">
                          {podcast.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {podcast.title}
                      </h3>
                      
                      <p className="text-secondary-600 mb-4 line-clamp-3">{podcast.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-secondary-500">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{podcast.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ClockIcon className="w-4 h-4" />
                          <span>{podcast.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handlePlayPause(podcast.id)}
                          className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                          {playingId === podcast.id ? (
                            <>
                              <PauseIcon className="w-5 h-5" />
                              <span>Pause</span>
                            </>
                          ) : (
                            <>
                              <PlayIcon className="w-5 h-5" />
                              <span>Play</span>
                            </>
                          )}
                        </button>
                        <span className="text-sm text-secondary-500">{podcast.listens} plays</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
              <p className="text-xl text-primary-100 mb-8">
                Subscribe to our podcast for weekly insights into defense technology, 
                GEOINT innovations, and military intelligence strategies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="btn-primary bg-white text-primary-700 hover:bg-secondary-50">
                  Subscribe on Apple Podcasts
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                  Subscribe on Spotify
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