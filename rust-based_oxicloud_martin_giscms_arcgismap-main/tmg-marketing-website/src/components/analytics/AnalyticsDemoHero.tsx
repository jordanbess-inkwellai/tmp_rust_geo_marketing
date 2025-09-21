'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  MapIcon,
  BoltIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  CpuChipIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const realtimeMetrics = [
  {
    id: 'activeUsers',
    label: 'Active Users',
    value: 2847,
    change: +12.5,
    icon: EyeIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'dataProcessed',
    label: 'Data Processed (TB)',
    value: 156.3,
    change: +8.2,
    icon: CpuChipIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 'querySpeed',
    label: 'Avg Query Speed (ms)',
    value: 247,
    change: -15.3,
    icon: BoltIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'uptime',
    label: 'Uptime %',
    value: 99.97,
    change: +0.02,
    icon: ClockIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

const analyticsCapabilities = [
  {
    title: 'Real-time Data Processing',
    description: 'Process millions of geospatial records per second with sub-second latency',
    stat: '10M+ records/sec'
  },
  {
    title: 'Advanced Visualizations',
    description: 'Interactive maps, charts, and 3D visualizations with WebGL acceleration',
    stat: '50+ chart types'
  },
  {
    title: 'Machine Learning Insights',
    description: 'AI-powered pattern recognition and predictive analytics',
    stat: '95% accuracy'
  },
  {
    title: 'Custom Dashboards',
    description: 'Drag-and-drop dashboard builder with real-time collaboration',
    stat: 'Unlimited dashboards'
  }
];

export default function AnalyticsDemoHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [metrics, setMetrics] = useState(realtimeMetrics);

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics =>
        prevMetrics.map(metric => ({
          ...metric,
          value: metric.id === 'activeUsers' 
            ? metric.value + Math.floor(Math.random() * 20) - 10
            : metric.id === 'dataProcessed'
            ? metric.value + (Math.random() * 2 - 1)
            : metric.id === 'querySpeed'
            ? Math.max(150, metric.value + Math.floor(Math.random() * 40) - 20)
            : metric.value,
          change: (Math.random() * 20 - 10)
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              animate={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-4">
                <ChartBarIcon className="w-4 h-4 mr-2" />
                Live Analytics Demo
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Advanced Analytics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Dashboard
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience the power of real-time geospatial analytics with interactive 
                dashboards, AI-powered insights, and lightning-fast data processing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {analyticsCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-blue-300 font-semibold text-sm mb-1">{capability.title}</div>
                  <div className="text-white text-xs mb-2">{capability.description}</div>
                  <div className="text-blue-400 font-bold text-lg">{capability.stat}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Try Interactive Demo
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </motion.div>

          {/* Right Column - Live Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">Live Analytics Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Live</span>
                </div>
              </div>

              {/* Real-time Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="bg-white/10 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                      </div>
                      <span className={`text-sm font-medium ${
                        metric.change > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-white font-bold text-xl mb-1">
                      {metric.id === 'dataProcessed' ? metric.value.toFixed(1) : 
                       metric.id === 'uptime' ? metric.value.toFixed(2) :
                       Math.floor(metric.value).toLocaleString()}
                    </div>
                    <div className="text-blue-200 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mini Chart Visualization */}
              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium text-sm">Data Processing Trend</span>
                  <span className="text-blue-300 text-xs">Last 24 hours</span>
                </div>
                <div className="flex items-end justify-between h-20 space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${Math.random() * 60 + 20}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + (i * 0.05) }}
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm flex-1 min-w-[8px]"
                    />
                  ))}
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium text-sm">Global Data Points</span>
                  <MapIcon className="w-4 h-4 text-blue-300" />
                </div>
                <div className="relative h-32 bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-lg overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 70 + 15}%`,
                      }}
                    />
                  ))}
                  <div className="absolute bottom-2 left-2 text-xs text-blue-200">
                    {(Math.random() * 50000 + 10000).toFixed(0)} active points
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-6 -right-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              99.9% Uptime
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              Real-time Processing
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-2">10M+</div>
            <div className="text-blue-200">Records/Second</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">&lt;100ms</div>
            <div className="text-blue-200">Query Response</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Data Sources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Real-time Updates</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}