'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  MapIcon,
  VideoCameraIcon,
  CloudIcon,
  CommandLineIcon,
  GlobeAltIcon,
  CubeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Command & Control Systems',
    description: 'Comprehensive C2 capabilities with real-time situational awareness, mission planning, and multi-domain operations support.',
    icon: CommandLineIcon,
    capabilities: [
      'Real-time operational picture',
      'Mission planning & execution',
      'Multi-domain coordination',
      'Decision support systems',
    ],
    useCases: ['Military Operations', 'Emergency Response', 'Border Security', 'Maritime Domain'],
    classification: 'up to SECRET',
  },
  {
    title: 'GEOINT Analysis Platform',
    description: 'Advanced geospatial intelligence analysis with multi-source data fusion, automated processing, and collaborative workflows.',
    icon: GlobeAltIcon,
    capabilities: [
      'Multi-source data fusion',
      'Automated feature extraction',
      'Change detection analysis',
      'Collaborative workflows',
    ],
    useCases: ['Intelligence Analysis', 'Threat Assessment', 'Infrastructure Monitoring', 'Environmental Intel'],
    classification: 'up to TS/SCI',
  },
  {
    title: 'Full Motion Video Intelligence',
    description: 'Real-time FMV processing with KLV metadata extraction, automated tracking, and AI-powered object detection.',
    icon: VideoCameraIcon,
    capabilities: [
      'Real-time KLV processing',
      'Automated object tracking',
      'AI-powered detection',
      'Multi-stream analysis',
    ],
    useCases: ['ISR Operations', 'Border Surveillance', 'Force Protection', 'Search & Rescue'],
    classification: 'up to SECRET',
  },
  {
    title: 'Climate & Environmental Intelligence',
    description: 'Comprehensive climate data processing with weather impact analysis, environmental monitoring, and predictive modeling.',
    icon: CloudIcon,
    capabilities: [
      'NetCDF/GRIB processing',
      'Weather impact analysis',
      'Environmental monitoring',
      'Predictive modeling',
    ],
    useCases: ['Mission Planning', 'Agricultural Intel', 'Disaster Response', 'Climate Security'],
    classification: 'UNCLASSIFIED',
  },
  {
    title: '3D Visualization & Modeling',
    description: 'Advanced 3D geospatial visualization with Gaussian splatting, point cloud processing, and immersive environments.',
    icon: CubeIcon,
    capabilities: [
      'Gaussian splatting',
      'Point cloud processing',
      'Immersive visualization',
      '3D scene reconstruction',
    ],
    useCases: ['Mission Rehearsal', 'Terrain Analysis', 'Urban Planning', 'Training Environments'],
    classification: 'up to SECRET',
  },
  {
    title: 'Collaborative Intelligence Platform',
    description: 'Multi-analyst collaboration platform with real-time sharing, version control, and distributed analysis capabilities.',
    icon: ChartBarIcon,
    capabilities: [
      'Real-time collaboration',
      'Version control',
      'Distributed analysis',
      'Knowledge management',
    ],
    useCases: ['Joint Operations', 'Coalition Sharing', 'Distributed Teams', 'Training Programs'],
    classification: 'up to SECRET',
  },
  {
    title: 'Edge & Tactical Deployment',
    description: 'Lightweight deployment for tactical environments with offline capabilities, edge processing, and mobile integration.',
    icon: MapIcon,
    capabilities: [
      'Offline operations',
      'Edge processing',
      'Mobile integration',
      'Tactical networking',
    ],
    useCases: ['Forward Operations', 'Mobile Command', 'Disconnected Ops', 'Special Operations'],
    classification: 'up to SECRET',
  },
  {
    title: 'Security & Compliance Suite',
    description: 'Comprehensive security framework with multi-level security, audit trails, and compliance automation.',
    icon: ShieldCheckIcon,
    capabilities: [
      'Multi-level security',
      'Audit & compliance',
      'Identity management',
      'Data classification',
    ],
    useCases: ['Compliance Automation', 'Security Audits', 'Access Control', 'Data Governance'],
    classification: 'up to TS/SCI',
  },
];

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification.includes('TS/SCI')) return 'classification-topsecret';
    if (classification.includes('SECRET')) return 'classification-secret';
    if (classification.includes('CONFIDENTIAL')) return 'classification-confidential';
    return 'classification-unclassified';
  };

  return (
    <section id="solutions" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Mission-Focused <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Purpose-built solutions for defense, intelligence, and public safety organizations.
            Each solution is designed to address specific operational requirements while maintaining
            security and compliance standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary-600 transition-colors">
                      {solution.title}
                    </h3>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getClassificationColor(solution.classification)}`}>
                      {solution.classification}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Capabilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-secondary-900 mb-3">Key Capabilities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {solution.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center text-sm text-secondary-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold text-secondary-900 mb-3">Common Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Flexible Deployment Options
              </h3>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                Deploy anywhere from cloud environments to air-gapped networks.
                Our modular architecture adapts to your security and operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Cloud Deployment</h4>
                <p className="text-secondary-300 text-sm">
                  AWS GovCloud, Azure Government, or private cloud environments with FedRAMP compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">On-Premise</h4>
                <p className="text-secondary-300 text-sm">
                  Secure on-premise deployment for classified environments and air-gapped networks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapIcon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Edge/Tactical</h4>
                <p className="text-secondary-300 text-sm">
                  Lightweight deployment for forward operations, mobile command posts, and tactical environments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Military/Defense CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <ShieldCheckIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Defense & Intelligence Solutions
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive military and defense capabilities including GEOINT analysis, 
              C2 integration, and classified environment support. Built for mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/military-defense" 
                className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3"
              >
                Explore Defense Solutions
              </Link>
              <Link 
                href="/fmv" 
                className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3"
              >
                FMV Processing Platform
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
