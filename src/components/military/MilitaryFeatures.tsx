'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EyeIcon,
  VideoCameraIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CubeIcon,
  BoltIcon,
  CloudIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const militaryFeatures = [
  {
    title: 'Multi-INT Data Fusion',
    description: 'Seamlessly integrate GEOINT, SIGINT, HUMINT, and IMINT data sources into a unified operational picture with real-time correlation and analysis.',
    icon: EyeIcon,
    capabilities: [
      'GEOINT Foundation Layer',
      'SIGINT Overlay Integration', 
      'HUMINT Source Correlation',
      'IMINT Feature Extraction'
    ],
    classification: 'up to TS/SCI',
    useCases: ['Intelligence Analysis', 'Target Development', 'Threat Assessment', 'Collection Management'],
  },
  {
    title: 'Full Motion Video Intelligence',
    description: 'Advanced FMV processing with real-time KLV metadata extraction, automated object tracking, and AI-powered target identification.',
    icon: VideoCameraIcon,
    capabilities: [
      'Real-time KLV Processing',
      'Automated Object Tracking',
      'Motion Pattern Analysis', 
      'Multi-stream Correlation'
    ],
    classification: 'up to SECRET',
    useCases: ['ISR Operations', 'Pattern of Life', 'Battle Damage Assessment', 'Force Protection'],
  },
  {
    title: 'Command & Control Integration',
    description: 'Native C2 system integration with CoT messaging, tactical data links, and real-time operational picture sharing.',
    icon: CommandLineIcon,
    capabilities: [
      'Cursor on Target (CoT)',
      'Link 16 Integration',
      'VMF Message Handling',
      'Blue Force Tracking'
    ],
    classification: 'up to SECRET',
    useCases: ['Joint Operations', 'Mission Planning', 'Force Coordination', 'Situational Awareness'],
  },
  {
    title: 'Secure Multi-Level Processing',
    description: 'Built-in security architecture supporting multiple classification levels with automated data marking and access control.',
    icon: ShieldCheckIcon,
    capabilities: [
      'Multi-level Security (MLS)',
      'Automated Classification',
      'Cross-domain Solutions',
      'Audit Trail Management'
    ],
    classification: 'up to TS/SCI',
    useCases: ['Classified Processing', 'Coalition Sharing', 'Compartmented Analysis', 'Security Compliance'],
  },
  {
    title: 'Advanced GEOINT Analysis',
    description: 'Sophisticated geospatial intelligence tools including change detection, pattern analysis, and predictive modeling capabilities.',
    icon: GlobeAltIcon,
    capabilities: [
      'Multi-temporal Analysis',
      'Change Detection',
      'Spatial Pattern Recognition',
      'Predictive Modeling'
    ],
    classification: 'up to SECRET',
    useCases: ['Terrain Analysis', 'Infrastructure Assessment', 'Environmental Intelligence', 'Route Planning'],
  },
  {
    title: '3D Mission Environment',
    description: 'Immersive 3D visualization for mission planning and rehearsal with photorealistic terrain models and urban environments.',
    icon: CubeIcon,
    capabilities: [
      'Gaussian Splatting Rendering',
      'Point Cloud Processing',
      'Urban 3D Models',
      'Mission Rehearsal Mode'
    ],
    classification: 'up to SECRET',
    useCases: ['Mission Planning', 'Rehearsal Systems', 'Training Environments', 'Urban Operations'],
  },
  {
    title: 'AI-Enhanced Processing',
    description: 'Military-domain AI models for automated feature extraction, threat detection, and intelligence production workflows.',
    icon: BoltIcon,
    capabilities: [
      'Military Object Recognition',
      'Threat Pattern Detection',
      'Automated Reporting',
      'Natural Language Queries'
    ],
    classification: 'up to SECRET',
    useCases: ['Automated Analysis', 'Threat Detection', 'Report Generation', 'Decision Support'],
  },
  {
    title: 'Tactical Edge Computing',
    description: 'Lightweight deployment for forward operations with offline capabilities and mobile device integration.',
    icon: CloudIcon,
    capabilities: [
      'Disconnected Operations',
      'Mobile Device Sync',
      'Tactical Radio Integration',
      'Field Data Collection'
    ],
    classification: 'up to SECRET',
    useCases: ['Forward Operations', 'Mobile Command', 'Special Operations', 'Field Intelligence'],
  },
  {
    title: 'Intelligence Production Suite',
    description: 'Complete intelligence production workflow with automated formatting, collaboration tools, and dissemination controls.',
    icon: DocumentDuplicateIcon,
    capabilities: [
      'Automated Report Generation',
      'Intelligence Product Templates',
      'Collaborative Workflows',
      'Dissemination Controls'
    ],
    classification: 'up to TS/SCI',
    useCases: ['Intelligence Production', 'Report Dissemination', 'Collaborative Analysis', 'Product Management'],
  },
];

export default function MilitaryFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification.includes('TS/SCI')) return 'bg-red-500/10 text-red-400 border-red-500/30';
    if (classification.includes('SECRET')) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    if (classification.includes('CONFIDENTIAL')) return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    return 'bg-green-500/10 text-green-400 border-green-500/30';
  };

  return (
    <section id="military-features" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Mission-Critical <span className="text-gradient">GEOINT Capabilities</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            Comprehensive geospatial intelligence platform designed specifically for defense operations, 
            intelligence analysis, and homeland security missions. Every capability is built to meet 
            the rigorous requirements of military and intelligence communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {militaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${getClassificationColor(feature.classification)}`}>
                  {feature.classification}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Capabilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-secondary-900 mb-3">Core Capabilities</h4>
                <div className="space-y-2">
                  {feature.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center text-sm text-secondary-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold text-secondary-900 mb-3">Primary Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {feature.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="inline-block bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Built for the Intelligence Community
            </h3>
            <p className="text-secondary-300 mb-8 max-w-3xl mx-auto">
              Our platform is designed by intelligence professionals, for intelligence professionals. 
              Every feature addresses real operational requirements with the security and reliability 
              demanded by defense and intelligence operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Request Classified Demo
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download GEOINT Overview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}