'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  MapIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon,
  ClockIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const analysisTools = [
  {
    id: 'spatial-queries',
    name: 'Spatial Queries',
    icon: MagnifyingGlassIcon,
    description: 'Advanced spatial query capabilities with support for complex geometric operations',
    features: [
      'Point-in-polygon queries',
      'Buffer zone analysis',
      'Intersection detection',
      'Distance calculations',
      'Spatial joins',
      'Nearest neighbor analysis'
    ],
    metrics: {
      querySpeed: 23,
      accuracy: 99.8,
      concurrentQueries: 2450,
      supportedFormats: 15
    }
  },
  {
    id: 'pattern-recognition',
    name: 'Pattern Recognition',
    icon: ChartBarIcon,
    description: 'AI-powered pattern detection and anomaly identification in geospatial data',
    features: [
      'Clustering algorithms',
      'Hot spot analysis',
      'Trend detection',
      'Anomaly identification',
      'Movement patterns',
      'Temporal analysis'
    ],
    metrics: {
      detectionRate: 94.7,
      falsePositives: 2.3,
      processingSpeed: 15.2,
      patternTypes: 12
    }
  },
  {
    id: '3d-analysis',
    name: '3D Analysis',
    icon: CubeTransparentIcon,
    description: 'Three-dimensional spatial analysis with terrain modeling and volumetric calculations',
    features: [
      'Digital elevation models',
      'Viewshed analysis',
      'Volume calculations',
      'Slope and aspect analysis',
      'Line of sight',
      '3D buffering'
    ],
    metrics: {
      renderingFPS: 60,
      polygonCount: 2500000,
      textureResolution: '4K',
      lodLevels: 8
    }
  },
  {
    id: 'temporal-analysis',
    name: 'Temporal Analysis',
    icon: ClockIcon,
    description: 'Time-based geospatial analysis with historical data comparison and forecasting',
    features: [
      'Change detection',
      'Time series analysis',
      'Predictive modeling',
      'Historical comparison',
      'Trend forecasting',
      'Event correlation'
    ],
    metrics: {
      timeRange: '10+ years',
      forecastAccuracy: 87.5,
      updateFrequency: 'Real-time',
      dataPoints: 125000000
    }
  }
];

const spatialOperations = [
  {
    name: 'Buffer Analysis',
    description: 'Create buffer zones around geographic features',
    complexity: 'Medium',
    avgTime: '150ms',
    icon: '🎯'
  },
  {
    name: 'Spatial Join',
    description: 'Combine datasets based on spatial relationships',
    complexity: 'High',
    avgTime: '340ms',
    icon: '🔗'
  },
  {
    name: 'Intersection',
    description: 'Find overlapping areas between geographic layers',
    complexity: 'Medium',
    avgTime: '200ms',
    icon: '⚡'
  },
  {
    name: 'Proximity Analysis',
    description: 'Analyze distance relationships between features',
    complexity: 'Low',
    avgTime: '80ms',
    icon: '📏'
  },
  {
    name: 'Hot Spot Analysis',
    description: 'Identify statistically significant spatial clusters',
    complexity: 'High',
    avgTime: '500ms',
    icon: '🔥'
  },
  {
    name: 'Viewshed Analysis',
    description: 'Calculate visible areas from observation points',
    complexity: 'High',
    avgTime: '450ms',
    icon: '👁️'
  }
];

const realtimeAnalytics = {
  activeLayers: 24,
  spatialQueries: 15420,
  dataPoints: 2847329,
  renderingFPS: 58
};

export default function GeospatialAnalytics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTool, setSelectedTool] = useState('spatial-queries');
  const [liveMetrics, setLiveMetrics] = useState(realtimeAnalytics);
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        spatialQueries: prev.spatialQueries + Math.floor(Math.random() * 50) + 20,
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 1000) + 500,
        renderingFPS: Math.max(45, Math.min(60, prev.renderingFPS + Math.floor(Math.random() * 6) - 3)),
        activeLayers: Math.max(20, Math.min(30, prev.activeLayers + Math.floor(Math.random() * 3) - 1))
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const selectedAnalysisTool = analysisTools.find(tool => tool.id === selectedTool);

  const runAnalysis = (operation: string) => {
    setIsAnalysisRunning(true);
    setTimeout(() => {
      setIsAnalysisRunning(false);
    }, 2000);
  };

  return (
    <section id="geospatial-analytics" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Geospatial <span className="text-gradient">Analytics</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Advanced spatial analysis capabilities powered by machine learning, 
            supporting complex geometric operations, pattern recognition, and 3D modeling.
          </p>
        </motion.div>

        {/* Live Analytics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{liveMetrics.activeLayers}</div>
            <div className="text-blue-100 font-medium">Active Layers</div>
            <div className="text-blue-200 text-sm">Currently processing</div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">
              {liveMetrics.spatialQueries.toLocaleString()}
            </div>
            <div className="text-green-100 font-medium">Spatial Queries</div>
            <div className="text-green-200 text-sm">Per hour</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">
              {(liveMetrics.dataPoints / 1000000).toFixed(1)}M
            </div>
            <div className="text-purple-100 font-medium">Data Points</div>
            <div className="text-purple-200 text-sm">Under analysis</div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{liveMetrics.renderingFPS}</div>
            <div className="text-orange-100 font-medium">Rendering FPS</div>
            <div className="text-orange-200 text-sm">3D visualization</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Analysis Tools Selector */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Analysis Tools</h3>
              <div className="space-y-3">
                {analysisTools.map((tool, index) => (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedTool === tool.id
                        ? 'bg-blue-50 border-blue-500 text-blue-900'
                        : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        selectedTool === tool.id ? 'bg-blue-500' : 'bg-gray-100'
                      }`}>
                        <tool.icon className={`w-5 h-5 ${
                          selectedTool === tool.id ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold">{tool.name}</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-75 line-clamp-2">{tool.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tool Details */}
          <div className="lg:col-span-8">
            {selectedAnalysisTool && (
              <motion.div
                key={selectedTool}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <selectedAnalysisTool.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedAnalysisTool.name}</h3>
                        <p className="text-blue-100">{selectedAnalysisTool.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Interactive Analysis Demo */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-4">Interactive Analysis Demo</h4>
                    
                    {selectedTool === 'spatial-queries' && (
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                        <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden">
                          {/* Map Background */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200"></div>
                            {/* Grid */}
                            {[...Array(8)].map((_, i) => (
                              <div key={`h-${i}`} className="absolute w-full h-px bg-gray-300" style={{ top: `${(i + 1) * 12.5}%` }} />
                            ))}
                            {[...Array(8)].map((_, i) => (
                              <div key={`v-${i}`} className="absolute h-full w-px bg-gray-300" style={{ left: `${(i + 1) * 12.5}%` }} />
                            ))}
                          </div>
                          
                          {/* Query Results */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={inView ? { scale: 1, opacity: 1 } : {}}
                              transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                              className="absolute w-6 h-6 bg-blue-500 rounded-full cursor-pointer"
                              style={{
                                left: `${15 + (i * 10)}%`,
                                top: `${25 + (i % 3) * 20}%`,
                              }}
                            >
                              <div className="w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-ping absolute -top-3 -left-3"></div>
                            </motion.div>
                          ))}

                          {/* Buffer Zone */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 0.3 } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute w-32 h-32 border-4 border-dashed border-red-500 rounded-full"
                            style={{ left: '40%', top: '30%', transform: 'translate(-50%, -50%)' }}
                          />

                          {/* Query Statistics */}
                          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 text-sm">
                            <div className="font-semibold text-gray-800">Query Results</div>
                            <div className="text-gray-600">8 points found</div>
                            <div className="text-gray-600">Query time: 23ms</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTool === 'pattern-recognition' && (
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Detected Patterns</h5>
                            <div className="space-y-2">
                              {['Cluster A', 'Hot Spot B', 'Anomaly C', 'Trend D'].map((pattern, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                                >
                                  <span className="text-gray-800">{pattern}</span>
                                  <span className="text-green-600 font-medium">
                                    {(Math.random() * 20 + 80).toFixed(1)}%
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Pattern Heatmap</h5>
                            <div className="h-40 bg-gradient-to-br from-red-200 via-yellow-200 to-green-200 rounded-lg relative">
                              {[...Array(6)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-4 h-4 bg-red-500 rounded-full opacity-70 animate-pulse"
                                  style={{
                                    left: `${20 + (i * 12)}%`,
                                    top: `${30 + (i % 2) * 30}%`,
                                    animationDelay: `${i * 0.2}s`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTool === '3d-analysis' && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                        <div className="relative h-64 bg-gradient-to-b from-blue-300 via-green-300 to-brown-300 rounded-lg overflow-hidden">
                          {/* 3D Terrain Simulation */}
                          <div className="absolute inset-0">
                            {[...Array(5)].map((_, row) => (
                              <div key={row} className="flex h-1/5">
                                {[...Array(8)].map((_, col) => {
                                  const height = Math.sin((row + col) * 0.5) * 20 + 30;
                                  return (
                                    <motion.div
                                      key={`${row}-${col}`}
                                      initial={{ height: 0 }}
                                      animate={inView ? { height: `${height}%` } : {}}
                                      transition={{ duration: 0.8, delay: 0.5 + (row * col * 0.02) }}
                                      className="flex-1 bg-gradient-to-t from-green-600 to-green-300 border border-green-400/30"
                                      style={{ marginTop: `${100 - height}%` }}
                                    />
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                          
                          {/* 3D Stats */}
                          <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-3 text-sm">
                            <div className="font-semibold text-gray-800">3D Metrics</div>
                            <div className="text-gray-600">Polygons: 2.5M</div>
                            <div className="text-gray-600">FPS: 60</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTool === 'temporal-analysis' && (
                      <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Time Series Analysis</h5>
                            <div className="h-32 flex items-end justify-between space-x-1">
                              {[...Array(20)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ height: 0 }}
                                  animate={inView ? { height: `${Math.random() * 80 + 20}%` } : {}}
                                  transition={{ duration: 0.8, delay: 0.5 + (i * 0.03) }}
                                  className={`flex-1 rounded-t-sm ${
                                    i < 15 ? 'bg-gradient-to-t from-blue-500 to-blue-400' : 
                                    'bg-gradient-to-t from-purple-500 to-purple-400'
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>2020</span>
                              <span>2021</span>
                              <span>2022</span>
                              <span>2023</span>
                              <span>2024</span>
                              <span className="text-purple-600 font-medium">Forecast</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">87.5%</div>
                              <div className="text-sm text-gray-600">Forecast Accuracy</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-green-600">10+</div>
                              <div className="text-sm text-gray-600">Years of Data</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-purple-600">125M</div>
                              <div className="text-sm text-gray-600">Data Points</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedAnalysisTool.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(selectedAnalysisTool.metrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="text-center p-4 bg-secondary-50 rounded-lg"
                        >
                          <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                          <div className="text-sm text-secondary-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Spatial Operations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Spatial Operations Performance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spatialOperations.map((operation, index) => (
              <motion.div
                key={operation.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => runAnalysis(operation.name)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{operation.icon}</div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    operation.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                    operation.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {operation.complexity}
                  </span>
                </div>
                
                <h4 className="font-semibold text-secondary-900 mb-2">{operation.name}</h4>
                <p className="text-sm text-secondary-600 mb-4">{operation.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-600">Avg. Time:</span>
                  <span className="font-semibold text-blue-600">{operation.avgTime}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {isAnalysisRunning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-blue-800 font-medium">Running Analysis...</span>
              </div>
              <p className="text-blue-600 text-sm">Processing spatial operations in real-time</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}