'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  VideoCameraIcon,
  DocumentTextIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const technicalSpecs = [
  {
    category: 'Video Formats & Codecs',
    icon: VideoCameraIcon,
    specifications: [
      {
        name: 'H.264/AVC',
        details: 'Main, High, High 10 profiles',
        support: 'Full'
      },
      {
        name: 'H.265/HEVC',
        details: 'Main, Main 10, Main Still Picture',
        support: 'Full'
      },
      {
        name: 'MPEG-2',
        details: 'Main Profile @ Main/High Level',
        support: 'Full'
      },
      {
        name: 'MPEG-4 Part 2',
        details: 'Simple & Advanced Simple Profile',
        support: 'Full'
      },
      {
        name: 'VP8/VP9',
        details: 'WebM container support',
        support: 'Full'
      },
      {
        name: 'AV1',
        details: 'Next-generation codec',
        support: 'Beta'
      }
    ]
  },
  {
    category: 'KLV Metadata Standards',
    icon: DocumentTextIcon,
    specifications: [
      {
        name: 'MISB ST 0601',
        details: 'UAS Datalink Local Set',
        support: 'Full'
      },
      {
        name: 'MISB ST 0102',
        details: 'Security Metadata Universal Set',
        support: 'Full'
      },
      {
        name: 'MISB ST 0903',
        details: 'Video Moving Target Indicator',
        support: 'Full'
      },
      {
        name: 'MISB ST 1108',
        details: 'Metric Interpretability',
        support: 'Full'
      },
      {
        name: 'MISB ST 0104',
        details: 'Predator UAV Basic Universal Set',
        support: 'Full'
      },
      {
        name: 'Custom KLV',
        details: 'User-defined metadata sets',
        support: 'Full'
      }
    ]
  },
  {
    category: 'Streaming Protocols',
    icon: SignalIcon,
    specifications: [
      {
        name: 'RTSP/RTP',
        details: 'Real-time Streaming Protocol',
        support: 'Full'
      },
      {
        name: 'RTMP/RTMPS',
        details: 'Real-time Messaging Protocol',
        support: 'Full'
      },
      {
        name: 'HLS',
        details: 'HTTP Live Streaming',
        support: 'Full'
      },
      {
        name: 'MPEG-DASH',
        details: 'Dynamic Adaptive Streaming',
        support: 'Full'
      },
      {
        name: 'WebRTC',
        details: 'Real-time Communication',
        support: 'Full'
      },
      {
        name: 'UDP Multicast',
        details: 'Low-latency multicast',
        support: 'Full'
      }
    ]
  },
  {
    category: 'Performance Specifications',
    icon: CpuChipIcon,
    specifications: [
      {
        name: 'Concurrent Streams',
        details: 'Up to 100+ simultaneous',
        support: 'Scalable'
      },
      {
        name: 'Processing Latency',
        details: '< 50ms glass-to-glass',
        support: 'Real-time'
      },
      {
        name: 'Video Resolution',
        details: 'Up to 4K@60fps',
        support: 'Full'
      },
      {
        name: 'KLV Throughput',
        details: '1000+ keys per second',
        support: 'High'
      },
      {
        name: 'Memory Usage',
        details: 'Optimized buffering',
        support: 'Efficient'
      },
      {
        name: 'GPU Acceleration',
        details: 'NVIDIA CUDA, Intel Quick Sync',
        support: 'Full'
      }
    ]
  },
  {
    category: 'Cloud & Deployment',
    icon: CloudIcon,
    specifications: [
      {
        name: 'Kubernetes',
        details: 'Container orchestration',
        support: 'Native'
      },
      {
        name: 'Docker',
        details: 'Containerization platform',
        support: 'Full'
      },
      {
        name: 'AWS',
        details: 'EC2, ECS, EKS support',
        support: 'Full'
      },
      {
        name: 'Azure',
        details: 'AKS, Container Instances',
        support: 'Full'
      },
      {
        name: 'Google Cloud',
        details: 'GKE, Compute Engine',
        support: 'Full'
      },
      {
        name: 'Edge Computing',
        details: 'Tactical deployment',
        support: 'Full'
      }
    ]
  },
  {
    category: 'Security & Compliance',
    icon: ShieldCheckIcon,
    specifications: [
      {
        name: 'Encryption',
        details: 'AES-256, TLS 1.3',
        support: 'Full'
      },
      {
        name: 'Authentication',
        details: 'PKI, OAuth 2.0, SAML',
        support: 'Full'
      },
      {
        name: 'FIPS 140-2',
        details: 'Cryptographic compliance',
        support: 'Level 2'
      },
      {
        name: 'Classification',
        details: 'Up to TS/SCI',
        support: 'Full'
      },
      {
        name: 'Audit Logging',
        details: 'Comprehensive logging',
        support: 'Full'
      },
      {
        name: 'Access Control',
        details: 'Role-based permissions',
        support: 'Full'
      }
    ]
  }
];

const performanceMetrics = [
  { metric: 'Maximum Streams', value: '100+', unit: 'concurrent' },
  { metric: 'Processing Latency', value: '< 50', unit: 'milliseconds' },
  { metric: 'Video Resolution', value: '4K@60', unit: 'fps max' },
  { metric: 'KLV Throughput', value: '1000+', unit: 'keys/sec' },
  { metric: 'GPU Acceleration', value: '10x', unit: 'performance' },
  { metric: 'System Uptime', value: '99.9%', unit: 'availability' },
];

export default function FMVTechnicalSpecs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSupportColor = (support: string) => {
    switch (support.toLowerCase()) {
      case 'full':
      case 'native':
        return 'bg-green-100 text-green-800';
      case 'high':
      case 'scalable':
      case 'real-time':
        return 'bg-blue-100 text-blue-800';
      case 'beta':
      case 'level 2':
        return 'bg-yellow-100 text-yellow-800';
      case 'efficient':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="fmv-technical-specs" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Technical <span className="text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technical specifications for OXICLOUD FMV processing platform. 
            Built with enterprise-grade standards and optimized for mission-critical 
            performance in demanding environments.
          </p>
        </motion.div>

        {/* Performance Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Key Performance Metrics</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-xs text-gray-500 mb-1">{metric.unit}</div>
                <div className="text-sm font-medium text-gray-900">{metric.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Specifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {technicalSpecs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
              </div>

              {/* Specifications List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.specifications.map((spec, specIndex) => (
                    <motion.div
                      key={spec.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (specIndex * 0.05) + 0.5 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{spec.name}</h4>
                          <p className="text-sm text-gray-600">{spec.details}</p>
                        </div>
                        <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getSupportColor(spec.support)}`}>
                          {spec.support}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">System Requirements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <CpuChipIcon className="w-5 h-5 mr-2 text-blue-600" />
                Minimum Requirements
              </h4>
              <div className="space-y-2 text-sm">
                <div><strong>CPU:</strong> 4-core Intel/AMD processor</div>
                <div><strong>RAM:</strong> 8GB system memory</div>
                <div><strong>Storage:</strong> 100GB available space</div>
                <div><strong>Network:</strong> 1Gbps bandwidth</div>
                <div><strong>OS:</strong> Linux, Windows, macOS</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <CpuChipIcon className="w-5 h-5 mr-2 text-green-600" />
                Recommended
              </h4>
              <div className="space-y-2 text-sm">
                <div><strong>CPU:</strong> 16-core high-frequency</div>
                <div><strong>RAM:</strong> 32GB+ system memory</div>
                <div><strong>Storage:</strong> 1TB+ NVMe SSD</div>
                <div><strong>Network:</strong> 10Gbps+ bandwidth</div>
                <div><strong>GPU:</strong> NVIDIA RTX/Tesla series</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <CloudIcon className="w-5 h-5 mr-2 text-purple-600" />
                Cloud Deployment
              </h4>
              <div className="space-y-2 text-sm">
                <div><strong>AWS:</strong> c5.4xlarge or higher</div>
                <div><strong>Azure:</strong> F16s_v2 or higher</div>
                <div><strong>GCP:</strong> n2-standard-16 or higher</div>
                <div><strong>Storage:</strong> High-performance SSD</div>
                <div><strong>Network:</strong> Enhanced networking</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Need Detailed Technical Information?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Get comprehensive technical documentation, implementation guides, 
              and performance benchmarks. Our technical team is ready to support 
              your specific deployment requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-gray-900 hover:bg-gray-100 focus:ring-white px-8 py-3">
                Download Technical Specs
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Contact Technical Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}