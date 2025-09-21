'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ServerStackIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
  ArrowPathIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const architectureLayers = [
  {
    id: 'interface',
    name: 'User Interface Layer',
    icon: GlobeAltIcon,
    color: 'emerald',
    description: 'Multi-channel interfaces for seamless user interaction',
    components: [
      {
        name: 'Web Chat Interface',
        description: 'Browser-based chat with spatial visualization',
        features: ['Real-time messaging', 'Interactive maps', 'Voice commands', 'Mobile responsive']
      },
      {
        name: 'API Gateway',
        description: 'RESTful and GraphQL APIs for integration',
        features: ['Rate limiting', 'Authentication', 'Request routing', 'Documentation']
      },
      {
        name: 'Mobile SDKs',
        description: 'Native iOS/Android development kits',
        features: ['Offline capability', 'GPS integration', 'Push notifications', 'Biometric auth']
      }
    ]
  },
  {
    id: 'intelligence',
    name: 'AI Intelligence Layer',
    icon: CpuChipIcon,
    color: 'blue',
    description: 'Core AI models and natural language processing',
    components: [
      {
        name: 'Query Understanding',
        description: 'Natural language processing and intent recognition',
        features: ['Entity extraction', 'Context awareness', 'Multi-language', 'Fuzzy matching']
      },
      {
        name: 'Model Orchestration',
        description: 'Intelligent routing between specialized AI models',
        features: ['Load balancing', 'Fallback handling', 'Performance monitoring', 'Cost optimization']
      },
      {
        name: 'Response Generation',
        description: 'Contextual answer synthesis with citations',
        features: ['Source attribution', 'Confidence scoring', 'Multi-modal output', 'Fact verification']
      }
    ]
  },
  {
    id: 'processing',
    name: 'Data Processing Layer',
    icon: ServerStackIcon,
    color: 'purple',
    description: 'High-performance spatial data processing and analysis',
    components: [
      {
        name: 'Spatial Engine',
        description: 'PostGIS-powered geospatial analysis engine',
        features: ['Complex geometries', 'Spatial indexing', 'Topology analysis', 'Coordinate transforms']
      },
      {
        name: 'Stream Processor',
        description: 'Real-time data ingestion and processing',
        features: ['Event streaming', 'Window operations', 'State management', 'Backpressure handling']
      },
      {
        name: 'Batch Analytics',
        description: 'Large-scale data processing and ML training',
        features: ['Distributed computing', 'Job scheduling', 'Resource allocation', 'Monitoring dashboards']
      }
    ]
  },
  {
    id: 'storage',
    name: 'Data Storage Layer',
    icon: CircleStackIcon,
    color: 'indigo',
    description: 'Scalable, high-performance data storage systems',
    components: [
      {
        name: 'Vector Database',
        description: 'Semantic embeddings and similarity search',
        features: ['High-dimensional vectors', 'Approximate nearest neighbors', 'Hybrid search', 'Real-time updates']
      },
      {
        name: 'Spatial Database',
        description: 'Geospatial data with advanced indexing',
        features: ['R-tree indexing', 'Spatial clustering', 'Partitioning', 'Replication']
      },
      {
        name: 'Time Series DB',
        description: 'Temporal data for trend analysis',
        features: ['High ingestion rates', 'Compression', 'Retention policies', 'Continuous queries']
      }
    ]
  }
];

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    features: ['SOC 2 Type II compliance', 'End-to-end encryption', 'SSO integration', 'Audit logging']
  },
  {
    icon: BoltIcon,
    title: 'Performance & Scale',
    features: ['Auto-scaling infrastructure', 'Global CDN', 'Edge computing', '99.9% uptime SLA']
  },
  {
    icon: ArrowPathIcon,
    title: 'Reliability & Backup',
    features: ['Multi-region deployment', 'Automated backups', 'Disaster recovery', 'Health monitoring']
  }
];

const techStack = [
  {
    category: 'AI/ML Frameworks',
    technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'OpenAI API', 'Anthropic Claude']
  },
  {
    category: 'Backend Services',
    technologies: ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'Redis', 'Apache Kafka']
  },
  {
    category: 'Cloud Platform',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform']
  },
  {
    category: 'Geospatial Stack',
    technologies: ['PostGIS', 'GDAL', 'GeoServer', 'Mapbox', 'PROJ', 'Shapely']
  }
];

export default function AIArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeLayer, setActiveLayer] = useState('interface');

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      emerald: active 
        ? 'bg-emerald-50 border-emerald-500 text-emerald-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300',
      blue: active 
        ? 'bg-blue-50 border-blue-500 text-blue-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300',
      purple: active 
        ? 'bg-purple-50 border-purple-500 text-purple-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300',
      indigo: active 
        ? 'bg-indigo-50 border-indigo-500 text-indigo-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string, active: boolean) => {
    const colors = {
      emerald: active ? 'bg-emerald-500' : 'bg-gray-100',
      blue: active ? 'bg-blue-500' : 'bg-gray-100',
      purple: active ? 'bg-purple-500' : 'bg-gray-100',
      indigo: active ? 'bg-indigo-500' : 'bg-gray-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="ai-architecture" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            System <span className="text-gradient">Architecture</span> & Design
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built on a modern, scalable architecture designed for enterprise-grade 
            performance, security, and reliability. Explore each layer of our 
            geospatial AI platform.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Layer Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {architectureLayers.map((layer, index) => (
                <motion.button
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    getColorClasses(layer.color, activeLayer === layer.id)
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      getIconColorClasses(layer.color, activeLayer === layer.id)
                    }`}>
                      <layer.icon className={`w-5 h-5 ${
                        activeLayer === layer.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{layer.name}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {layer.components.length} components
                      </div>
                    </div>
                  </div>
                  <p className="text-xs mt-2 opacity-90 leading-tight">{layer.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Layer Details */}
          <div className="lg:col-span-8">
            {architectureLayers.map((layer) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeLayer === layer.id ? 1 : 0,
                  y: activeLayer === layer.id ? 0 : 20
                }}
                className={`${activeLayer === layer.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Layer Header */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                    <div className="flex items-center">
                      <layer.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{layer.name}</h3>
                        <p className="text-emerald-100 mt-1">{layer.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Components */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {layer.components.map((component, index) => (
                        <motion.div
                          key={component.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <h4 className="font-semibold text-lg mb-2">{component.name}</h4>
                          <p className="text-gray-600 mb-4">{component.description}</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            {component.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
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

        {/* Security & Performance Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Enterprise Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border text-center"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg border"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold mb-4 text-gray-900">{stack.category}</h4>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-gray-50 rounded-lg px-3 py-2 text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-semibold mb-4">Want to Learn More?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dive deeper into our technical architecture, integration options, 
              and deployment strategies with our comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Technical Documentation
              </button>
              <button className="btn bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                Schedule Architecture Review
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}