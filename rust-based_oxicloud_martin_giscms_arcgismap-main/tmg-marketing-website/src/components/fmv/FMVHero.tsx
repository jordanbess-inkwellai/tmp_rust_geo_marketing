'use client';

import { motion } from 'framer-motion';
import { 
  VideoCameraIcon, 
  EyeIcon, 
  BoltIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export default function FMVHero() {
  const capabilities = [
    { icon: VideoCameraIcon, text: 'Real-time FMV' },
    { icon: EyeIcon, text: 'KLV Metadata' },
    { icon: BoltIcon, text: 'AI Object Detection' },
    { icon: CpuChipIcon, text: 'Multi-stream Processing' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12" />
        {/* Video Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* FMV Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
            >
              <VideoCameraIcon className="w-4 h-4 mr-2" />
              FULL MOTION VIDEO INTELLIGENCE
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Advanced
              <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FMV Processing
              </span>
              & Video Intelligence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl"
            >
              Real-time KLV metadata extraction, AI-powered object detection, 
              and multi-stream video analysis for ISR operations, surveillance, 
              and intelligence gathering.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                >
                  <capability.icon className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-center font-medium">{capability.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Watch FMV Demo
              </button>
              <button className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Download Technical Specs
              </button>
            </motion.div>

            {/* Technical Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 text-sm text-blue-200"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                MISB KLV Standards
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                Sub-second Latency
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                100+ Concurrent Streams
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - FMV Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main FMV Player */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl transform scale-110" />
              
              {/* FMV Player Interface */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                {/* Player Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-400 text-sm font-medium">LIVE FMV STREAM</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Stream 1 of 12 | H.264 | 1080p@30fps
                  </div>
                </div>

                {/* Video Display Area */}
                <div className="bg-gray-800 rounded-lg mb-4 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
                  <div className="relative z-10 text-center">
                    <VideoCameraIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <div className="text-gray-300 text-sm">FMV Stream Processing</div>
                  </div>
                  
                  {/* Overlay Graphics */}
                  <div className="absolute top-4 left-4 bg-green-500/80 text-white text-xs px-2 py-1 rounded">
                    TARGET DETECTED
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-500/80 text-white text-xs px-2 py-1 rounded">
                    LAT: 38.9072°N LON: -77.0369°W
                  </div>
                </div>

                {/* KLV Metadata Display */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-300">KLV Metadata Stream</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-500">Platform Heading</div>
                      <div className="text-green-400 font-mono">089.5°</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Sensor FOV</div>
                      <div className="text-green-400 font-mono">2.1° × 1.6°</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Target Range</div>
                      <div className="text-green-400 font-mono">12.4 km</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Frame Center</div>
                      <div className="text-green-400 font-mono">38.907°N</div>
                    </div>
                  </div>
                </div>

                {/* Processing Status */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>AI Processing: Object Detection</span>
                    <span className="text-green-400">99.2% Conf.</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                    <span>C2 Integration: CoT Publishing</span>
                    <span className="text-blue-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Explore FMV Capabilities</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}