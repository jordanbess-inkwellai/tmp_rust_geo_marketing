'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  BoltIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ServerIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const performanceCategories = [
  {
    id: 'processing-speed',
    name: 'Processing Speed',
    icon: BoltIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    metrics: [
      { label: 'Query Response Time', value: 147, unit: 'ms', target: 200, trend: -8.5 },
      { label: 'Data Ingestion Rate', value: 15420, unit: 'records/sec', target: 10000, trend: +12.3 },
      { label: 'Processing Throughput', value: 2.8, unit: 'TB/hour', target: 2.0, trend: +15.7 },
      { label: 'Concurrent Users', value: 2847, unit: 'users', target: 3000, trend: +5.2 }
    ]
  },
  {
    id: 'system-resources',
    name: 'System Resources',
    icon: CpuChipIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    metrics: [
      { label: 'CPU Utilization', value: 68.5, unit: '%', target: 80, trend: -2.1 },
      { label: 'Memory Usage', value: 72.3, unit: '%', target: 85, trend: +1.4 },
      { label: 'Storage I/O', value: 245, unit: 'MB/s', target: 300, trend: +8.9 },
      { label: 'Network Bandwidth', value: 1.2, unit: 'Gbps', target: 2.0, trend: +3.5 }
    ]
  },
  {
    id: 'availability',
    name: 'Availability & Reliability',
    icon: ServerIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    metrics: [
      { label: 'System Uptime', value: 99.97, unit: '%', target: 99.9, trend: +0.02 },
      { label: 'Error Rate', value: 0.003, unit: '%', target: 0.1, trend: -0.02 },
      { label: 'Recovery Time', value: 1.8, unit: 'minutes', target: 5.0, trend: -12.5 },
      { label: 'Backup Success', value: 100, unit: '%', target: 99.9, trend: 0 }
    ]
  },
  {
    id: 'scalability',
    name: 'Scalability',
    icon: ArrowTrendingUpIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    metrics: [
      { label: 'Auto-scaling Events', value: 24, unit: 'events/day', target: 50, trend: +15.8 },
      { label: 'Peak Load Capacity', value: 12500, unit: 'req/sec', target: 10000, trend: +8.2 },
      { label: 'Geographic Regions', value: 12, unit: 'regions', target: 15, trend: +20.0 },
      { label: 'Load Distribution', value: 95.2, unit: '%', target: 90, trend: +2.1 }
    ]
  }
];

const benchmarkComparisons = [
  {
    category: 'Query Performance',
    tmgValue: 147,
    industry: 350,
    competitor1: 280,
    competitor2: 425,
    unit: 'ms',
    improvement: '58% faster'
  },
  {
    category: 'Data Ingestion',
    tmgValue: 15420,
    industry: 8500,
    competitor1: 12000,
    competitor2: 9800,
    unit: 'records/sec',
    improvement: '81% higher'
  },
  {
    category: 'Processing Throughput',
    tmgValue: 2.8,
    industry: 1.5,
    competitor1: 2.1,
    competitor2: 1.8,
    unit: 'TB/hour',
    improvement: '87% higher'
  },
  {
    category: 'System Uptime',
    tmgValue: 99.97,
    industry: 99.5,
    competitor1: 99.8,
    competitor2: 99.2,
    unit: '%',
    improvement: '0.17% higher'
  }
];

const realtimeStats = {
  totalQueries: 1847329,
  dataProcessed: 24.7,
  activeNodes: 48,
  globalLatency: 89
};

export default function PerformanceMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('processing-speed');
  const [liveStats, setLiveStats] = useState(realtimeStats);
  const [metricsData, setMetricsData] = useState(performanceCategories);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        totalQueries: prev.totalQueries + Math.floor(Math.random() * 100) + 50,
        dataProcessed: prev.dataProcessed + (Math.random() * 0.5),
        activeNodes: prev.activeNodes + Math.floor(Math.random() * 6) - 3,
        globalLatency: Math.max(50, prev.globalLatency + Math.floor(Math.random() * 20) - 10)
      }));

      // Update metrics with slight variations
      setMetricsData(prev => 
        prev.map(category => ({
          ...category,
          metrics: category.metrics.map(metric => ({
            ...metric,
            value: metric.value + (Math.random() * 10 - 5) * (metric.value * 0.01),
            trend: (Math.random() * 10 - 5)
          }))
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const selectedCategoryData = metricsData.find(cat => cat.id === selectedCategory);

  const getProgressPercentage = (value: number, target: number) => {
    return Math.min(100, (value / target) * 100);
  };

  const getTrendColor = (trend: number) => {
    return trend >= 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <section id="performance-metrics" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Performance <span className="text-gradient">Metrics</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Monitor system performance in real-time with comprehensive metrics, 
            benchmarking against industry standards, and predictive analytics.
          </p>
        </motion.div>

        {/* Real-time Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {liveStats.totalQueries.toLocaleString()}
            </div>
            <div className="text-secondary-900 font-medium">Total Queries</div>
            <div className="text-sm text-secondary-600">Processed today</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CloudArrowUpIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {liveStats.dataProcessed.toFixed(1)} TB
            </div>
            <div className="text-secondary-900 font-medium">Data Processed</div>
            <div className="text-sm text-secondary-600">In the last hour</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ServerIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {liveStats.activeNodes}
            </div>
            <div className="text-secondary-900 font-medium">Active Nodes</div>
            <div className="text-sm text-secondary-600">Across all regions</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {liveStats.globalLatency} ms
            </div>
            <div className="text-secondary-900 font-medium">Global Latency</div>
            <div className="text-sm text-secondary-600">Average response time</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Performance Categories */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Performance Categories</h3>
              <div className="space-y-3">
                {performanceCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 border-blue-500 text-blue-900'
                        : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        selectedCategory === category.id ? 'bg-blue-500' : category.bgColor
                      }`}>
                        <category.icon className={`w-5 h-5 ${
                          selectedCategory === category.id ? 'text-white' : category.color
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold">{category.name}</div>
                        <div className="text-sm opacity-75">
                          {category.metrics.length} metrics
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Detailed Metrics */}
          <div className="lg:col-span-8">
            {selectedCategoryData && (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center">
                    <selectedCategoryData.icon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold">{selectedCategoryData.name}</h3>
                      <p className="text-blue-100">Real-time performance monitoring</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Metrics Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {selectedCategoryData.metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-secondary-50 rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-secondary-900">{metric.label}</h4>
                          <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                            {metric.trend >= 0 ? '+' : ''}{metric.trend.toFixed(1)}%
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-3xl font-bold text-blue-600 mb-1">
                            {typeof metric.value === 'number' && metric.value < 10 
                              ? metric.value.toFixed(1) 
                              : Math.floor(metric.value).toLocaleString()}
                            <span className="text-lg text-secondary-600 ml-1">{metric.unit}</span>
                          </div>
                          <div className="text-sm text-secondary-600">
                            Target: {metric.target.toLocaleString()} {metric.unit}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                          <motion.div
                            className={`h-3 rounded-full ${
                              metric.value >= metric.target 
                                ? 'bg-gradient-to-r from-green-500 to-green-600' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-600'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${getProgressPercentage(metric.value, metric.target)}%` }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                          />
                        </div>
                        <div className="text-xs text-secondary-500">
                          {getProgressPercentage(metric.value, metric.target).toFixed(1)}% of target
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Performance Chart */}
                  <div className="bg-secondary-50 rounded-xl p-6">
                    <h4 className="font-semibold text-secondary-900 mb-4">
                      {selectedCategoryData.name} Trend - Last 24 Hours
                    </h4>
                    <div className="h-64 flex items-end justify-between space-x-1">
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={inView ? { 
                            height: `${Math.random() * 60 + 30}%` 
                          } : {}}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.8 + (i * 0.02) 
                          }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm min-w-[8px]"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-secondary-500 mt-2">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>24:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Benchmark Comparisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Industry Benchmark Comparison
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benchmarkComparisons.map((benchmark, index) => (
              <motion.div
                key={benchmark.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                className="bg-secondary-50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-secondary-900">{benchmark.category}</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {benchmark.improvement}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                      <span className="text-sm font-medium text-secondary-900">TMG Platform</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">
                      {benchmark.tmgValue.toLocaleString()} {benchmark.unit}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded mr-2"></div>
                        <span className="text-secondary-600">Industry Average</span>
                      </div>
                      <span className="text-secondary-900">
                        {benchmark.industry.toLocaleString()} {benchmark.unit}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-300 rounded mr-2"></div>
                        <span className="text-secondary-600">Competitor A</span>
                      </div>
                      <span className="text-secondary-900">
                        {benchmark.competitor1.toLocaleString()} {benchmark.unit}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-300 rounded mr-2"></div>
                        <span className="text-secondary-600">Competitor B</span>
                      </div>
                      <span className="text-secondary-900">
                        {benchmark.competitor2.toLocaleString()} {benchmark.unit}
                      </span>
                    </div>
                  </div>

                  {/* Comparison Chart */}
                  <div className="pt-4">
                    <div className="space-y-2">
                      {[
                        { label: 'TMG', value: benchmark.tmgValue, color: 'bg-red-500', max: Math.max(benchmark.tmgValue, benchmark.industry, benchmark.competitor1, benchmark.competitor2) },
                        { label: 'Industry', value: benchmark.industry, color: 'bg-gray-400', max: Math.max(benchmark.tmgValue, benchmark.industry, benchmark.competitor1, benchmark.competitor2) },
                        { label: 'Comp A', value: benchmark.competitor1, color: 'bg-blue-300', max: Math.max(benchmark.tmgValue, benchmark.industry, benchmark.competitor1, benchmark.competitor2) },
                        { label: 'Comp B', value: benchmark.competitor2, color: 'bg-purple-300', max: Math.max(benchmark.tmgValue, benchmark.industry, benchmark.competitor1, benchmark.competitor2) }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-16 text-xs text-secondary-600">{item.label}</div>
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <motion.div
                              className={`h-2 rounded-full ${item.color}`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${(item.value / item.max) * 100}%` } : {}}
                              transition={{ duration: 1, delay: 1.5 + (index * 0.1) + (idx * 0.1) }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}