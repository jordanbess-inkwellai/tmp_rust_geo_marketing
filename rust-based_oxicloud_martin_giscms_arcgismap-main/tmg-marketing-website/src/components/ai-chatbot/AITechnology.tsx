'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  BeakerIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

const modelCategories = [
  {
    id: 'foundation',
    name: 'Foundation Models',
    icon: CpuChipIcon,
    description: 'State-of-the-art language models optimized for geospatial intelligence',
    models: [
      {
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        strength: 'General reasoning & code generation',
        performance: '92%',
        latency: '1.2s',
        costPerQuery: '$0.03'
      },
      {
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        strength: 'Complex spatial analysis',
        performance: '94%',
        latency: '0.9s',
        costPerQuery: '$0.025'
      },
      {
        name: 'Gemini Pro',
        provider: 'Google',
        strength: 'Multi-modal data processing',
        performance: '89%',
        latency: '1.4s',
        costPerQuery: '$0.02'
      },
      {
        name: 'LLaMA 2 70B',
        provider: 'Meta',
        strength: 'On-premise deployment',
        performance: '87%',
        latency: '2.1s',
        costPerQuery: '$0.01'
      }
    ]
  },
  {
    id: 'specialized',
    name: 'Specialized Models',
    icon: BeakerIcon,
    description: 'Custom-trained models for specific geospatial tasks',
    models: [
      {
        name: 'GeoLLM-Spatial',
        provider: 'TMG Custom',
        strength: 'Spatial relationship understanding',
        performance: '96%',
        latency: '0.7s',
        costPerQuery: '$0.015'
      },
      {
        name: 'LocationBERT',
        provider: 'TMG Custom',
        strength: 'Geographic entity recognition',
        performance: '93%',
        latency: '0.3s',
        costPerQuery: '$0.008'
      },
      {
        name: 'SpatialT5',
        provider: 'TMG Custom',
        strength: 'Query transformation',
        performance: '91%',
        latency: '0.5s',
        costPerQuery: '$0.012'
      },
      {
        name: 'GeoCodex',
        provider: 'TMG Custom',
        strength: 'SQL/PostGIS code generation',
        performance: '88%',
        latency: '0.8s',
        costPerQuery: '$0.01'
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: CloudIcon,
    description: 'Scalable deployment and optimization technologies',
    models: [
      {
        name: 'Model Router',
        provider: 'TMG Platform',
        strength: 'Intelligent model selection',
        performance: '99.9%',
        latency: '50ms',
        costPerQuery: '$0.001'
      },
      {
        name: 'Vector Cache',
        provider: 'TMG Platform',
        strength: 'Embedding storage & retrieval',
        performance: '99.8%',
        latency: '25ms',
        costPerQuery: '$0.0005'
      },
      {
        name: 'Load Balancer',
        provider: 'TMG Platform',
        strength: 'Traffic distribution',
        performance: '99.9%',
        latency: '10ms',
        costPerQuery: '$0.0002'
      },
      {
        name: 'Auto Scaler',
        provider: 'TMG Platform',
        strength: 'Dynamic resource allocation',
        performance: '98%',
        latency: '100ms',
        costPerQuery: '$0.0003'
      }
    ]
  }
];

const architectureFeatures = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Multi-Model Ensemble',
    description: 'Combines multiple AI models for optimal accuracy and performance',
    benefits: ['Higher accuracy', 'Fault tolerance', 'Specialized expertise']
  },
  {
    icon: CircleStackIcon,
    title: 'RAG Architecture',
    description: 'Retrieval-Augmented Generation with real-time data integration',
    benefits: ['Current information', 'Factual accuracy', 'Source attribution']
  },
  {
    icon: ChartBarIcon,
    title: 'Performance Optimization',
    description: 'Advanced caching and prediction for sub-second response times',
    benefits: ['Low latency', 'Cost efficiency', 'Scalable throughput']
  }
];

export default function AITechnology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('foundation');

  return (
    <section id="ai-technology" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-gradient">AI Models</span> & Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our geospatial AI platform leverages cutting-edge language models, 
            custom-trained spatial intelligence, and enterprise-grade infrastructure 
            to deliver unparalleled performance and accuracy.
          </p>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Architecture Overview</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Model Categories */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {modelCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      activeCategory === category.id ? 'bg-emerald-500' : 'bg-gray-100'
                    }`}>
                      <category.icon className={`w-5 h-5 ${
                        activeCategory === category.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-sm opacity-75">
                        {category.models.length} models
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Model Details */}
          <div className="lg:col-span-9">
            {modelCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCategory === category.id ? 1 : 0,
                  y: activeCategory === category.id ? 0 : 20
                }}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                    <div className="flex items-center">
                      <category.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{category.name}</h3>
                        <p className="text-emerald-100 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Models Grid */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.models.map((model, index) => (
                        <motion.div
                          key={model.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{model.name}</h4>
                              <p className="text-sm text-gray-500">{model.provider}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">
                                {model.performance}
                              </div>
                              <div className="text-xs text-gray-500">accuracy</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4">{model.strength}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">Latency</div>
                              <div className="font-medium">{model.latency}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Cost/Query</div>
                              <div className="font-medium">{model.costPerQuery}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-semibold mb-6 text-center">Platform Performance</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">0.8s</div>
                <div className="text-gray-600">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1M+</div>
                <div className="text-gray-600">Queries/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">92%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                View Technical Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}