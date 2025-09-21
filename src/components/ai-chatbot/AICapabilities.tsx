'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  BoltIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  MapPinIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const aiCapabilities = [
  {
    title: 'Natural Language Processing',
    description: 'Understand complex geospatial queries in natural language and convert them into precise spatial operations.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Multi-language query support',
      'Context-aware interpretation',
      'Geographic entity recognition',
      'Intent classification',
      'Query disambiguation'
    ],
    examples: [
      'Find all schools within walking distance',
      'Show me flood risk areas near hospitals',
      'What\'s the population around airports?'
    ],
    accuracy: '96%',
    responseTime: '< 500ms'
  },
  {
    title: 'Spatial Reasoning & Analytics',
    description: 'Advanced spatial reasoning capabilities that understand geographic relationships, proximity, and complex spatial patterns.',
    icon: GlobeAltIcon,
    features: [
      'Proximity and distance analysis',
      'Spatial relationship detection',
      'Buffer zone calculations',
      'Intersection analysis',
      'Topological reasoning'
    ],
    examples: [
      'Which areas are both near water and high elevation?',
      'Find overlapping jurisdictions',
      'Analyze corridor connectivity'
    ],
    accuracy: '98%',
    responseTime: '< 200ms'
  },
  {
    title: 'Multi-LLM Integration',
    description: 'Leverage multiple large language models for optimal performance across different types of queries and domains.',
    icon: CpuChipIcon,
    features: [
      'OpenRouter integration (50+ models)',
      'Model selection optimization',
      'QWEN, GPT, Claude, DeepSeek',
      'Task-specific model routing',
      'Ensemble reasoning'
    ],
    examples: [
      'Complex analytical questions → Claude',
      'Geospatial calculations → DeepSeek Coder',
      'General queries → GPT-4'
    ],
    accuracy: '94%',
    responseTime: '< 1s'
  },
  {
    title: 'RAG Document Understanding',
    description: 'Retrieval-Augmented Generation system that understands and queries your geospatial documents and datasets.',
    icon: DocumentTextIcon,
    features: [
      'Vector embeddings for documents',
      'Semantic document search',
      'Context-aware retrieval',
      'Multi-format support (PDF, GeoJSON)',
      'Knowledge graph integration'
    ],
    examples: [
      'What does the environmental report say about wetlands?',
      'Find zoning regulations for this area',
      'Summarize infrastructure assessments'
    ],
    accuracy: '92%',
    responseTime: '< 800ms'
  },
  {
    title: 'Real-time Data Queries',
    description: 'Query live geospatial data streams, sensors, and real-time information with natural language commands.',
    icon: BoltIcon,
    features: [
      'Live data stream integration',
      'Sensor network queries',
      'Real-time analytics',
      'Event detection and alerts',
      'Temporal pattern analysis'
    ],
    examples: [
      'Show current traffic conditions on I-95',
      'What\'s the air quality near schools today?',
      'Alert me about weather changes'
    ],
    accuracy: '95%',
    responseTime: '< 300ms'
  },
  {
    title: 'Intelligent Data Discovery',
    description: 'Automatically discover and understand available datasets, their structure, and relationships.',
    icon: MagnifyingGlassIcon,
    features: [
      'Automatic schema detection',
      'Data profiling and analysis',
      'Relationship inference',
      'Quality assessment',
      'Usage recommendations'
    ],
    examples: [
      'What demographic data is available?',
      'Find datasets related to transportation',
      'Show me recent satellite imagery'
    ],
    accuracy: '89%',
    responseTime: '< 1.2s'
  },
  {
    title: 'Predictive Analytics',
    description: 'Generate predictions and forecasts based on geospatial patterns, trends, and machine learning models.',
    icon: ChartBarIcon,
    features: [
      'Trend analysis and forecasting',
      'Risk assessment models',
      'Pattern recognition',
      'Anomaly detection',
      'Scenario modeling'
    ],
    examples: [
      'Predict flood risk for next month',
      'Where will urban growth occur?',
      'Forecast traffic congestion patterns'
    ],
    accuracy: '87%',
    responseTime: '< 2s'
  },
  {
    title: 'Location Intelligence',
    description: 'Advanced understanding of place names, addresses, coordinates, and geographic hierarchies.',
    icon: MapPinIcon,
    features: [
      'Geocoding and reverse geocoding',
      'Place name disambiguation',
      'Administrative boundary lookup',
      'Coordinate system conversion',
      'Geographic hierarchy navigation'
    ],
    examples: [
      'Where is the closest fire station to 123 Main St?',
      'Convert these coordinates to addresses',
      'Find all cities in this county'
    ],
    accuracy: '97%',
    responseTime: '< 150ms'
  },
  {
    title: 'Custom Model Training',
    description: 'Train specialized AI models on your specific geospatial domains and use cases for enhanced accuracy.',
    icon: BeakerIcon,
    features: [
      'Domain-specific fine-tuning',
      'Custom entity recognition',
      'Specialized vocabulary training',
      'Performance optimization',
      'Continuous learning'
    ],
    examples: [
      'Oil & gas terminology models',
      'Military/defense specialized AI',
      'Environmental science domains'
    ],
    accuracy: '99%',
    responseTime: '< 400ms'
  }
];

export default function AICapabilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="ai-capabilities" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Advanced <span className="text-gradient">AI Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Cutting-edge artificial intelligence and machine learning capabilities 
            designed specifically for geospatial data understanding, analysis, 
            and intelligent interaction through natural language.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  {capability.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {capability.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Query Examples</h4>
                  <div className="space-y-2">
                    {capability.examples.map((example) => (
                      <div key={example} className="text-xs text-gray-600 bg-gray-50 rounded p-2 italic">
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Accuracy</span>
                    <span className="text-lg font-bold text-emerald-600">{capability.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Response Time</span>
                    <span className="text-lg font-bold text-emerald-600">{capability.responseTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Experience Next-Generation Geospatial AI
            </h3>
            <p className="text-emerald-100 mb-8 max-w-3xl mx-auto">
              Transform how you interact with geospatial data through intelligent 
              conversation, advanced reasoning, and automated insights. Built for 
              professionals who need answers, not just data.
            </p>
            
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-emerald-200">AI Models Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">96%</div>
                <div className="text-sm text-emerald-200">Average Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">&lt; 500ms</div>
                <div className="text-sm text-emerald-200">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">9</div>
                <div className="text-sm text-emerald-200">Core Capabilities</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-emerald-600 hover:bg-emerald-50 focus:ring-white px-8 py-3">
                Try AI Chatbot Demo
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                View Technical Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}