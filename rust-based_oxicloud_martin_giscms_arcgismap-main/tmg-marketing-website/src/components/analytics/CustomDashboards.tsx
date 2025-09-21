'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Squares2X2Icon,
  ChartBarIcon,
  MapIcon,
  ClockIcon,
  CogIcon,
  EyeIcon,
  PlusIcon,
  ArrowsPointingOutIcon,
  ShareIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const dashboardTemplates = [
  {
    id: 'operational',
    name: 'Operational Intelligence',
    category: 'Operations',
    description: 'Real-time operational metrics and KPI monitoring',
    icon: '🎯',
    widgets: ['Live Map', 'Performance Metrics', 'Alert Panel', 'System Status'],
    useCase: 'Command & Control Centers',
    complexity: 'Advanced',
    previewImage: '/dashboard-operational.jpg'
  },
  {
    id: 'analytics',
    name: 'Data Analytics Suite',
    category: 'Analytics',
    description: 'Comprehensive data analysis and visualization tools',
    icon: '📊',
    widgets: ['Time Series Charts', 'Heatmaps', 'Statistical Analysis', 'Trend Forecasting'],
    useCase: 'Data Scientists & Analysts',
    complexity: 'Expert',
    previewImage: '/dashboard-analytics.jpg'
  },
  {
    id: 'executive',
    name: 'Executive Overview',
    category: 'Management',
    description: 'High-level KPIs and strategic insights for leadership',
    icon: '📈',
    widgets: ['KPI Cards', 'Summary Charts', 'ROI Metrics', 'Strategic Goals'],
    useCase: 'C-Level Executives',
    complexity: 'Basic',
    previewImage: '/dashboard-executive.jpg'
  },
  {
    id: 'field-ops',
    name: 'Field Operations',
    category: 'Field Work',
    description: 'Mobile-optimized dashboard for field personnel',
    icon: '📱',
    widgets: ['GPS Tracking', 'Task Management', 'Resource Status', 'Communication Panel'],
    useCase: 'Field Teams & Mobile Workers',
    complexity: 'Intermediate',
    previewImage: '/dashboard-field.jpg'
  },
  {
    id: 'compliance',
    name: 'Compliance Monitoring',
    category: 'Governance',
    description: 'Regulatory compliance tracking and reporting',
    icon: '⚖️',
    widgets: ['Compliance Metrics', 'Audit Trails', 'Risk Assessment', 'Report Generator'],
    useCase: 'Compliance Officers',
    complexity: 'Advanced',
    previewImage: '/dashboard-compliance.jpg'
  },
  {
    id: 'security',
    name: 'Security Operations',
    category: 'Security',
    description: 'Security monitoring and threat detection dashboard',
    icon: '🔒',
    widgets: ['Threat Map', 'Security Alerts', 'Incident Timeline', 'Risk Analysis'],
    useCase: 'Security Operations Centers',
    complexity: 'Expert',
    previewImage: '/dashboard-security.jpg'
  }
];

const widgetTypes = [
  {
    name: 'Interactive Map',
    icon: MapIcon,
    description: 'Real-time geospatial data visualization',
    category: 'Geospatial',
    size: 'Large'
  },
  {
    name: 'Performance Chart',
    icon: ChartBarIcon,
    description: 'Time series and performance metrics',
    category: 'Analytics',
    size: 'Medium'
  },
  {
    name: 'KPI Card',
    icon: Squares2X2Icon,
    description: 'Key performance indicator display',
    category: 'Metrics',
    size: 'Small'
  },
  {
    name: 'Alert Panel',
    icon: EyeIcon,
    description: 'System alerts and notifications',
    category: 'Monitoring',
    size: 'Medium'
  },
  {
    name: 'Data Table',
    icon: DocumentDuplicateIcon,
    description: 'Tabular data display with sorting',
    category: 'Data',
    size: 'Large'
  },
  {
    name: 'Status Indicator',
    icon: ClockIcon,
    description: 'System and service status monitoring',
    category: 'Status',
    size: 'Small'
  }
];

const dashboardFeatures = [
  {
    title: 'Drag & Drop Builder',
    description: 'Intuitive visual dashboard editor',
    icon: '🎨'
  },
  {
    title: 'Real-time Updates',
    description: 'Live data streaming and updates',
    icon: '⚡'
  },
  {
    title: 'Mobile Responsive',
    description: 'Optimized for all device types',
    icon: '📱'
  },
  {
    title: 'Custom Themes',
    description: 'Brand-specific styling options',
    icon: '🎭'
  },
  {
    title: 'Role-based Access',
    description: 'Granular permission controls',
    icon: '👥'
  },
  {
    title: 'Export & Share',
    description: 'Multiple sharing and export options',
    icon: '📤'
  }
];

export default function CustomDashboards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTemplate, setSelectedTemplate] = useState('operational');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBuilderMode, setIsBuilderMode] = useState(false);

  const categories = ['All', ...Array.from(new Set(dashboardTemplates.map(t => t.category)))];
  const filteredTemplates = selectedCategory === 'All' 
    ? dashboardTemplates 
    : dashboardTemplates.filter(t => t.category === selectedCategory);

  const selectedDashboard = dashboardTemplates.find(t => t.id === selectedTemplate);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Basic':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="custom-dashboards" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Custom <span className="text-gradient">Dashboards</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Create powerful, interactive dashboards tailored to your specific needs with our 
            drag-and-drop builder and extensive widget library.
          </p>
        </motion.div>

        {/* Dashboard Builder Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg p-2 shadow-lg border border-secondary-200">
            <button
              onClick={() => setIsBuilderMode(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                !isBuilderMode
                  ? 'bg-blue-600 text-white'
                  : 'text-secondary-600 hover:text-blue-600'
              }`}
            >
              Template Gallery
            </button>
            <button
              onClick={() => setIsBuilderMode(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isBuilderMode
                  ? 'bg-blue-600 text-white'
                  : 'text-secondary-600 hover:text-blue-600'
              }`}
            >
              Dashboard Builder
            </button>
          </div>
        </motion.div>

        {/* Template Gallery */}
        {!isBuilderMode && (
          <>
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-secondary-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Template List */}
              <div className="lg:col-span-4">
                <div className="space-y-3">
                  {filteredTemplates.map((template, index) => (
                    <motion.button
                      key={template.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedTemplate === template.id
                          ? 'bg-blue-50 border-blue-500 text-blue-900'
                          : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{template.icon}</div>
                          <div>
                            <div className="font-semibold">{template.name}</div>
                            <div className="text-sm opacity-75">{template.category}</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(template.complexity)}`}>
                          {template.complexity}
                        </div>
                      </div>
                      <p className="text-sm opacity-75 line-clamp-2">{template.description}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Template Preview */}
              <div className="lg:col-span-8">
                {selectedDashboard && (
                  <motion.div
                    key={selectedTemplate}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-3xl mr-3">{selectedDashboard.icon}</div>
                          <div>
                            <h3 className="text-2xl font-semibold">{selectedDashboard.name}</h3>
                            <p className="text-blue-100">{selectedDashboard.description}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                            <ShareIcon className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                            <DocumentDuplicateIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Dashboard Preview */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-secondary-900 mb-4">Dashboard Preview</h4>
                        
                        {/* Simulated Dashboard Layout */}
                        <div className="bg-gray-100 rounded-xl p-6">
                          <div className="grid grid-cols-12 gap-4 h-80">
                            {/* Large Widget - Map/Chart */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              className="col-span-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 relative overflow-hidden"
                            >
                              <div className="text-sm font-medium text-gray-700 mb-2">Primary Visualization</div>
                              
                              {selectedTemplate === 'operational' && (
                                <div className="relative h-full">
                                  {/* Simulated Map */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded opacity-50"></div>
                                  {[...Array(8)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="absolute w-3 h-3 bg-blue-600 rounded-full animate-pulse"
                                      style={{
                                        left: `${20 + (i * 8)}%`,
                                        top: `${30 + (i % 3) * 20}%`,
                                      }}
                                    />
                                  ))}
                                </div>
                              )}

                              {selectedTemplate === 'analytics' && (
                                <div className="h-full flex items-end justify-between space-x-1">
                                  {[...Array(10)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ height: 0 }}
                                      animate={inView ? { height: `${Math.random() * 70 + 20}%` } : {}}
                                      transition={{ duration: 0.8, delay: 0.7 + (i * 0.05) }}
                                      className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                                    />
                                  ))}
                                </div>
                              )}

                              {(selectedTemplate === 'executive' || selectedTemplate === 'compliance') && (
                                <div className="grid grid-cols-2 gap-4 h-full">
                                  <div className="bg-white/50 rounded-lg p-3 flex flex-col justify-center items-center">
                                    <div className="text-2xl font-bold text-blue-600">94.2%</div>
                                    <div className="text-sm text-gray-600">Performance</div>
                                  </div>
                                  <div className="bg-white/50 rounded-lg p-3 flex flex-col justify-center items-center">
                                    <div className="text-2xl font-bold text-green-600">$2.4M</div>
                                    <div className="text-sm text-gray-600">Revenue</div>
                                  </div>
                                </div>
                              )}

                              {(selectedTemplate === 'field-ops' || selectedTemplate === 'security') && (
                                <div className="relative h-full">
                                  <div className="grid grid-cols-3 gap-2 h-full">
                                    {[...Array(9)].map((_, i) => (
                                      <div
                                        key={i}
                                        className={`bg-white/50 rounded-lg p-2 flex items-center justify-center ${
                                          i % 3 === 0 ? 'bg-green-200' : i % 3 === 1 ? 'bg-yellow-200' : 'bg-red-200'
                                        }`}
                                      >
                                        <div className="text-xs text-gray-700">Item {i + 1}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </motion.div>

                            {/* Side Widgets */}
                            <div className="col-span-4 space-y-4">
                              {[1, 2, 3].map((i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                  className="bg-white rounded-lg p-4 shadow-sm"
                                >
                                  <div className="text-sm font-medium text-gray-700 mb-2">
                                    Widget {i}
                                  </div>
                                  <div className="text-2xl font-bold text-blue-600">
                                    {Math.floor(Math.random() * 1000) + 100}
                                  </div>
                                  <div className="text-xs text-gray-500">Real-time data</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Template Details */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-4">Included Widgets</h4>
                          <div className="space-y-2">
                            {selectedDashboard.widgets.map((widget, index) => (
                              <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                <span className="text-sm text-secondary-600">{widget}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-4">Template Info</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-secondary-600">Use Case:</span>
                              <span className="text-sm font-medium text-secondary-900">{selectedDashboard.useCase}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-secondary-600">Complexity:</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(selectedDashboard.complexity)}`}>
                                {selectedDashboard.complexity}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-secondary-600">Category:</span>
                              <span className="text-sm font-medium text-secondary-900">{selectedDashboard.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Use This Template
                        </button>
                        <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                          Preview Live Demo
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Dashboard Builder */}
        {isBuilderMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Widget Palette */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-200">
                <h3 className="font-semibold text-secondary-900 mb-6">Widget Library</h3>
                <div className="space-y-3">
                  {widgetTypes.map((widget, index) => (
                    <motion.div
                      key={widget.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                      className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200"
                      draggable
                    >
                      <div className="flex items-center mb-2">
                        <widget.icon className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-sm">{widget.name}</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">{widget.description}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-blue-600 font-medium">{widget.category}</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{widget.size}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Dashboard Builder</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <CogIcon className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 min-h-[400px] bg-gray-50">
                    <div className="text-center text-gray-500">
                      <ArrowsPointingOutIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <h4 className="text-lg font-medium mb-2">Drag widgets here to build your dashboard</h4>
                      <p className="text-sm">Start by dragging widgets from the library to create your custom dashboard</p>
                    </div>

                    {/* Sample placed widgets */}
                    <div className="grid grid-cols-12 gap-4 mt-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="col-span-8 bg-white rounded-lg p-4 border-2 border-blue-200 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-700">Interactive Map</span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <CogIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded relative">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-blue-500 rounded-full"
                              style={{
                                left: `${20 + (i * 15)}%`,
                                top: `${30 + (i % 2) * 30}%`,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="col-span-4 space-y-4"
                      >
                        <div className="bg-white rounded-lg p-4 border-2 border-green-200 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700">KPI Card</span>
                            <CogIcon className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="text-2xl font-bold text-green-600">92.4%</div>
                          <div className="text-sm text-gray-600">System Performance</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border-2 border-purple-200 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700">Status Indicator</span>
                            <CogIcon className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-700">All Systems Operational</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Builder Actions */}
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Clear Canvas
                      </button>
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                        Save as Template
                      </button>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                        Preview
                      </button>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Publish Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Dashboard Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Powerful Dashboard Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-secondary-900 mb-2">{feature.title}</h4>
                <p className="text-secondary-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
              Create unlimited custom dashboards with our intuitive drag-and-drop builder. 
              Choose from pre-built templates or design from scratch with real-time collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Building Dashboard
              </button>
              <button className="btn border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                View All Templates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}