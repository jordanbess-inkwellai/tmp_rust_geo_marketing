'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  MapIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  EyeIcon,
  ClockIcon,
  CpuChipIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const visualizationTypes = [
  {
    id: 'real-time-map',
    title: 'Real-time Geospatial Map',
    description: 'Interactive map with live data points, clustering, and heat maps',
    icon: MapIcon,
    features: ['WebGL acceleration', 'Dynamic clustering', 'Custom overlays', 'Multi-layer support'],
    active: true
  },
  {
    id: 'time-series',
    title: 'Time Series Analytics',
    description: 'Historical trends and forecasting with machine learning predictions',
    icon: ArrowTrendingUpIcon,
    features: ['Predictive modeling', 'Anomaly detection', 'Seasonal patterns', 'Custom intervals'],
    active: false
  },
  {
    id: 'performance-charts',
    title: 'Performance Dashboards',
    description: 'System metrics and KPI monitoring with real-time alerts',
    icon: ChartBarIcon,
    features: ['Custom KPIs', 'Alert thresholds', 'Drill-down views', 'Export options'],
    active: false
  },
  {
    id: 'spatial-analysis',
    title: 'Spatial Analysis Tools',
    description: 'Advanced geospatial analysis with buffer zones and spatial queries',
    icon: GlobeAltIcon,
    features: ['Buffer analysis', 'Spatial joins', 'Proximity queries', '3D visualization'],
    active: false
  }
];

const dataPoints = [
  { id: 1, lat: 40.7128, lng: -74.0060, value: 850, type: 'sensor', status: 'active' },
  { id: 2, lat: 34.0522, lng: -118.2437, value: 1200, type: 'device', status: 'active' },
  { id: 3, lat: 41.8781, lng: -87.6298, value: 950, type: 'sensor', status: 'warning' },
  { id: 4, lat: 29.7604, lng: -95.3698, value: 750, type: 'device', status: 'active' },
  { id: 5, lat: 39.9526, lng: -75.1652, value: 1100, type: 'sensor', status: 'active' },
  { id: 6, lat: 33.4484, lng: -112.0740, value: 680, type: 'device', status: 'error' },
];

const realtimeMetrics = {
  totalDataPoints: 125847,
  activeConnections: 2847,
  dataIngestionRate: 15420,
  avgResponseTime: 247,
  systemLoad: 68.5,
  alertsCount: 12
};

export default function LiveDataVisualization() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedViz, setSelectedViz] = useState('real-time-map');
  const [liveData, setLiveData] = useState(dataPoints);
  const [metrics, setMetrics] = useState(realtimeMetrics);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prevData =>
        prevData.map(point => ({
          ...point,
          value: Math.max(100, point.value + Math.floor(Math.random() * 200) - 100),
          status: Math.random() > 0.9 ? 'warning' : 
                  Math.random() > 0.95 ? 'error' : 'active'
        }))
      );

      setMetrics(prevMetrics => ({
        ...prevMetrics,
        totalDataPoints: prevMetrics.totalDataPoints + Math.floor(Math.random() * 50) - 20,
        activeConnections: prevMetrics.activeConnections + Math.floor(Math.random() * 20) - 10,
        dataIngestionRate: prevMetrics.dataIngestionRate + Math.floor(Math.random() * 1000) - 500,
        avgResponseTime: Math.max(150, prevMetrics.avgResponseTime + Math.floor(Math.random() * 40) - 20),
        systemLoad: Math.max(0, Math.min(100, prevMetrics.systemLoad + Math.random() * 10 - 5)),
        alertsCount: Math.max(0, prevMetrics.alertsCount + Math.floor(Math.random() * 3) - 1)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectedVisualization = visualizationTypes.find(viz => viz.id === selectedViz);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="live-data-visualization" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Live Data <span className="text-gradient">Visualization</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Transform complex geospatial data into intuitive, interactive visualizations 
            that update in real-time and provide actionable insights.
          </p>
        </motion.div>

        {/* Visualization Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          {visualizationTypes.map((viz, index) => (
            <motion.button
              key={viz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              onClick={() => setSelectedViz(viz.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedViz === viz.id
                  ? 'bg-blue-50 border-blue-500 text-blue-900'
                  : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                selectedViz === viz.id ? 'bg-blue-500' : 'bg-gray-100'
              }`}>
                <viz.icon className={`w-6 h-6 ${
                  selectedViz === viz.id ? 'text-white' : 'text-gray-500'
                }`} />
              </div>
              <h3 className="font-semibold mb-2">{viz.title}</h3>
              <p className="text-sm opacity-75">{viz.description}</p>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Visualization Area */}
          <div className="lg:col-span-8">
            {selectedVisualization && (
              <motion.div
                key={selectedViz}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Visualization Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <selectedVisualization.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedVisualization.title}</h3>
                        <p className="text-blue-100">{selectedVisualization.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm font-medium">Live</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Real-time Map Visualization */}
                  {selectedViz === 'real-time-map' && (
                    <div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                        <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden">
                          {/* Simulated Map Background */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200"></div>
                            {/* Grid lines */}
                            {[...Array(10)].map((_, i) => (
                              <div key={`h-${i}`} className="absolute w-full h-px bg-gray-300" style={{ top: `${i * 10}%` }} />
                            ))}
                            {[...Array(10)].map((_, i) => (
                              <div key={`v-${i}`} className="absolute h-full w-px bg-gray-300" style={{ left: `${i * 10}%` }} />
                            ))}
                          </div>
                          
                          {/* Live Data Points */}
                          {liveData.map((point, index) => (
                            <motion.div
                              key={point.id}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={inView ? { scale: 1, opacity: 1 } : {}}
                              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                              style={{
                                left: `${30 + (index * 12) % 40}%`,
                                top: `${20 + (index * 15) % 60}%`,
                              }}
                            >
                              <div className={`w-4 h-4 ${getStatusColor(point.status)} rounded-full animate-pulse shadow-lg`}>
                                <div className={`w-8 h-8 ${getStatusColor(point.status)} rounded-full opacity-30 animate-ping absolute -top-2 -left-2`}></div>
                              </div>
                              
                              {/* Tooltip */}
                              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                <div className="text-sm font-semibold text-gray-800">Point {point.id}</div>
                                <div className="text-xs text-gray-600">Value: {point.value}</div>
                                <div className="text-xs text-gray-600">Status: {point.status}</div>
                                <div className="text-xs text-gray-600">Type: {point.type}</div>
                              </div>
                            </motion.div>
                          ))}

                          {/* Heat Map Overlay */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute rounded-full bg-gradient-radial from-red-400/30 to-transparent animate-pulse"
                                style={{
                                  width: `${Math.random() * 100 + 50}px`,
                                  height: `${Math.random() * 100 + 50}px`,
                                  left: `${Math.random() * 80}%`,
                                  top: `${Math.random() * 80}%`,
                                  animationDelay: `${i * 0.5}s`,
                                }}
                              />
                            ))}
                          </div>

                          {/* Map Controls */}
                          <div className="absolute top-4 right-4 flex flex-col space-y-2">
                            <button className="bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors">
                              <EyeIcon className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors">
                              <BoltIcon className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>

                          {/* Legend */}
                          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                            <div className="text-xs font-semibold text-gray-800 mb-2">Status</div>
                            <div className="flex space-x-3">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                                <span className="text-xs text-gray-600">Active</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                                <span className="text-xs text-gray-600">Warning</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                                <span className="text-xs text-gray-600">Error</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{liveData.length}</div>
                          <div className="text-sm text-blue-600">Active Points</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {liveData.filter(p => p.status === 'active').length}
                          </div>
                          <div className="text-sm text-green-600">Healthy</div>
                        </div>
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">
                            {liveData.filter(p => p.status === 'error').length}
                          </div>
                          <div className="text-sm text-red-600">Alerts</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Time Series Visualization */}
                  {selectedViz === 'time-series' && (
                    <div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-800">Data Trends - Last 24 Hours</h4>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">Live</span>
                            <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">Forecast</span>
                          </div>
                        </div>
                        <div className="h-64 flex items-end justify-between space-x-1">
                          {[...Array(24)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={inView ? { height: `${Math.random() * 80 + 20}%` } : {}}
                              transition={{ duration: 0.8, delay: 0.5 + (i * 0.02) }}
                              className={`flex-1 rounded-t-sm ${
                                i < 20 ? 'bg-gradient-to-t from-blue-500 to-blue-400' : 
                                'bg-gradient-to-t from-purple-500 to-purple-400'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>00:00</span>
                          <span>06:00</span>
                          <span>12:00</span>
                          <span>18:00</span>
                          <span>24:00</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Performance Charts */}
                  {selectedViz === 'performance-charts' && (
                    <div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-800 mb-3">System Performance</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">CPU Usage</span>
                              <span className="text-sm font-medium">{metrics.systemLoad.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${metrics.systemLoad}%` } : {}}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Response Time</span>
                              <span className="text-sm font-medium">{metrics.avgResponseTime}ms</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${Math.min(100, metrics.avgResponseTime / 5)}%` } : {}}
                                transition={{ duration: 1, delay: 0.7 }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-800 mb-3">Data Flow</h4>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                              {metrics.dataIngestionRate.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Records/sec</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Spatial Analysis */}
                  {selectedViz === 'spatial-analysis' && (
                    <div>
                      <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-4">Spatial Analysis Results</h4>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-indigo-600">847</div>
                            <div className="text-sm text-gray-600">Buffer Zones</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-cyan-600">1,245</div>
                            <div className="text-sm text-gray-600">Spatial Joins</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-purple-600">329</div>
                            <div className="text-sm text-gray-600">Intersections</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature List */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedVisualization.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Live Metrics Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="font-semibold text-gray-800 mb-6">Real-time Metrics</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Data Points</span>
                    <CpuChipIcon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {metrics.totalDataPoints.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Connections</span>
                    <EyeIcon className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {metrics.activeConnections.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Ingestion Rate</span>
                    <BoltIcon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {metrics.dataIngestionRate.toLocaleString()}/s
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Avg Response</span>
                    <ClockIcon className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {metrics.avgResponseTime}ms
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Alerts</span>
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    {metrics.alertsCount}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Export Data
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    Create Alert
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    Share Dashboard
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}