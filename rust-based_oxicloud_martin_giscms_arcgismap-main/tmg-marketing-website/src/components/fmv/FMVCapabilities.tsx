'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  VideoCameraIcon,
  EyeIcon,
  BoltIcon,
  CpuChipIcon,
  CloudIcon,
  MapPinIcon,
  ChartBarIcon,
  PlayIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const fmvCapabilities = [
  {
    title: 'Real-time KLV Metadata Extraction',
    description: 'Extract and process MISB KLV metadata streams in real-time, including platform position, sensor orientation, target coordinates, and timing information.',
    icon: EyeIcon,
    features: [
      'MISB ST 0601 compliance',
      'Real-time parsing & validation',
      'Geographic coordinate extraction',
      'Timestamp synchronization',
      'Multi-format KLV support'
    ],
    applications: ['ISR Operations', 'Target Tracking', 'Navigation', 'Sensor Fusion'],
    performance: {
      latency: '< 50ms',
      throughput: '1000+ keys/sec',
      accuracy: '99.9%'
    }
  },
  {
    title: 'Multi-Stream Video Processing',
    description: 'Simultaneously process multiple FMV streams with independent analysis pipelines, load balancing, and resource optimization.',
    icon: VideoCameraIcon,
    features: [
      'Concurrent stream processing',
      'Automatic load balancing',
      'Stream prioritization',
      'Bandwidth optimization',
      'Failover & redundancy'
    ],
    applications: ['Multi-Platform ISR', 'Area Surveillance', 'Fleet Monitoring', 'Border Security'],
    performance: {
      streams: '100+ concurrent',
      resolution: 'Up to 4K',
      formats: '15+ codecs'
    }
  },
  {
    title: 'AI-Powered Object Detection',
    description: 'Advanced computer vision algorithms for real-time object detection, classification, and tracking across video streams.',
    icon: BoltIcon,
    features: [
      'Real-time object detection',
      'Multi-class classification',
      'Persistent object tracking',
      'Behavioral analysis',
      'Custom model training'
    ],
    applications: ['Target Identification', 'Threat Assessment', 'Pattern Analysis', 'Automated Alerts'],
    performance: {
      accuracy: '95%+ detection',
      processing: '30+ FPS',
      objects: '500+ simultaneous'
    }
  },
  {
    title: 'Geospatial Video Correlation',
    description: 'Correlate video content with geospatial data, overlay geographic information, and create location-aware annotations.',
    icon: MapPinIcon,
    features: [
      'Geographic overlay rendering',
      'Coordinate transformation',
      'Map layer integration',
      'Spatial-temporal analysis',
      'Ground truth validation'
    ],
    applications: ['Mission Planning', 'Target Geo-location', 'Terrain Analysis', 'Route Planning'],
    performance: {
      precision: 'Sub-meter accuracy',
      layers: '50+ simultaneous',
      updates: 'Real-time sync'
    }
  },
  {
    title: 'Video Analytics & Intelligence',
    description: 'Comprehensive video analytics including motion detection, pattern recognition, and behavioral analysis for intelligence gathering.',
    icon: ChartBarIcon,
    features: [
      'Motion pattern analysis',
      'Activity recognition',
      'Anomaly detection',
      'Statistical reporting',
      'Trend analysis'
    ],
    applications: ['Intelligence Analysis', 'Surveillance Operations', 'Security Monitoring', 'Research'],
    performance: {
      processing: 'Real-time analysis',
      patterns: '100+ behaviors',
      accuracy: '92% confidence'
    }
  },
  {
    title: 'Stream Recording & Playback',
    description: 'High-performance video recording with metadata preservation, instant replay capabilities, and archived content search.',
    icon: PlayIcon,
    features: [
      'Lossless stream recording',
      'Metadata preservation',
      'Instant replay controls',
      'Content-based search',
      'Archive management'
    ],
    applications: ['Evidence Collection', 'Training Material', 'Mission Review', 'Quality Assurance'],
    performance: {
      storage: 'Petabyte scale',
      compression: '80% efficiency',
      retrieval: '< 1 second'
    }
  },
  {
    title: 'Cloud-Native Processing',
    description: 'Scalable cloud deployment with auto-scaling compute resources, distributed processing, and edge computing capabilities.',
    icon: CloudIcon,
    features: [
      'Auto-scaling infrastructure',
      'Distributed processing',
      'Edge computing support',
      'Load balancing',
      'Cost optimization'
    ],
    applications: ['Large-Scale Operations', 'Global Deployment', 'Tactical Edge', 'Hybrid Cloud'],
    performance: {
      scaling: 'Automatic',
      deployment: 'Multi-region',
      availability: '99.9% uptime'
    }
  },
  {
    title: 'Integration & Export',
    description: 'Seamless integration with existing systems, standardized data export, and real-time sharing capabilities.',
    icon: DocumentDuplicateIcon,
    features: [
      'API-first architecture',
      'Standard format export',
      'Real-time data sharing',
      'System integration',
      'Custom connectors'
    ],
    applications: ['C2 System Integration', 'Data Fusion', 'Report Generation', 'Third-party Tools'],
    performance: {
      apis: '50+ endpoints',
      formats: '20+ export types',
      latency: 'Real-time sync'
    }
  },
  {
    title: 'Advanced GPU Acceleration',
    description: 'Hardware-accelerated processing using GPUs for real-time video analysis, machine learning inference, and parallel computing.',
    icon: CpuChipIcon,
    features: [
      'GPU-accelerated processing',
      'Parallel computation',
      'ML inference acceleration',
      'Memory optimization',
      'Hardware abstraction'
    ],
    applications: ['Real-time Analysis', 'ML Processing', 'Batch Operations', 'High-throughput Tasks'],
    performance: {
      acceleration: '10x faster',
      efficiency: '80% GPU utilization',
      memory: 'Optimized allocation'
    }
  }
];

export default function FMVCapabilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="fmv-capabilities" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Comprehensive <span className="text-gradient">FMV Processing</span> Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Advanced full motion video processing platform designed for intelligence, 
            surveillance, and reconnaissance operations. Every capability is optimized 
            for real-time performance and mission-critical reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {fmvCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
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
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {capability.applications.map((app) => (
                      <span
                        key={app}
                        className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">Performance</h4>
                  <div className="space-y-3">
                    {Object.entries(capability.performance).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-semibold text-blue-600">{value}</span>
                      </div>
                    ))}
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your FMV Operations?
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the next generation of FMV processing with real-time analytics, 
              AI-powered insights, and seamless integration capabilities. Built for 
              mission-critical operations with uncompromising reliability.
            </p>
            
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm text-blue-200">Concurrent Streams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">&lt; 50ms</div>
                <div className="text-sm text-blue-200">Processing Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-blue-200">Metadata Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm text-blue-200">Video Formats</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 focus:ring-white px-8 py-3">
                Schedule FMV Demo
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download FMV Datasheet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}