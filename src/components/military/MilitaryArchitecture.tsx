'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  CommandLineIcon,
  GlobeAltIcon,
  EyeIcon,
  CloudIcon,
  CubeIcon,
  ServerIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const architectureLayers = [
  {
    name: 'Presentation Layer',
    classification: 'UNCLASSIFIED - TS/SCI',
    components: [
      { name: '3D Visualization Engine', icon: CubeIcon, description: 'Gaussian splatting, point clouds, mission rehearsal' },
      { name: 'GEOINT Analyst Interface', icon: EyeIcon, description: 'Multi-INT analysis workspace with classification handling' },
      { name: 'C2 Operator Console', icon: CommandLineIcon, description: 'Real-time operational picture and mission planning' },
      { name: 'Mobile/Tactical Client', icon: GlobeAltIcon, description: 'Lightweight field operations interface' },
    ],
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Security & Access Control',
    classification: 'Multi-Level Security (MLS)',
    components: [
      { name: 'Identity & Access Management', icon: LockClosedIcon, description: 'PKI, CAC/PIV, multi-factor authentication' },
      { name: 'Classification Engine', icon: ShieldCheckIcon, description: 'Automated marking, cross-domain solutions' },
      { name: 'Audit & Compliance', icon: ServerIcon, description: 'FISMA, NIST compliance, security monitoring' },
    ],
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Processing & Analytics',
    classification: 'up to TS/SCI',
    components: [
      { name: 'Multi-INT Fusion Engine', icon: EyeIcon, description: 'GEOINT, SIGINT, IMINT, HUMINT correlation' },
      { name: 'FMV/KLV Processor', icon: CommandLineIcon, description: 'Real-time video analysis with metadata extraction' },
      { name: 'AI/ML Analytics', icon: CubeIcon, description: 'Object detection, pattern analysis, threat assessment' },
      { name: 'Geospatial Engine', icon: GlobeAltIcon, description: 'Spatial analysis, change detection, route planning' },
    ],
    color: 'from-green-600 to-green-700',
  },
  {
    name: 'Integration & Communication',
    classification: 'SIPR/NIPR/JWICS',
    components: [
      { name: 'C2 System Integration', icon: CommandLineIcon, description: 'CoT, VMF, Link 16, tactical data links' },
      { name: 'TAK Server Gateway', icon: ServerIcon, description: 'ATAK/WinTAK integration with security boundaries' },
      { name: 'Message Routing', icon: CloudIcon, description: 'Secure message handling across classification levels' },
    ],
    color: 'from-purple-600 to-purple-700',
  },
  {
    name: 'Data & Storage',
    classification: 'Encrypted at Rest & Transit',
    components: [
      { name: 'Classified Data Store', icon: LockClosedIcon, description: 'Multi-level secure database with encryption' },
      { name: 'Vector Store', icon: ServerIcon, description: 'Geospatial vector tiles and feature storage' },
      { name: 'Document Repository', icon: CloudIcon, description: 'Intelligence products and document management' },
      { name: 'Streaming Data Buffer', icon: GlobeAltIcon, description: 'Real-time data ingestion and processing queue' },
    ],
    color: 'from-gray-600 to-gray-700',
  },
];

const deploymentOptions = [
  {
    name: 'Classified Cloud',
    icon: CloudIcon,
    environments: ['AWS GovCloud', 'Azure Government', 'DISA Encore'],
    classification: 'up to TS/SCI',
    features: ['Auto-scaling', 'High availability', 'Disaster recovery'],
  },
  {
    name: 'On-Premise Secure',
    icon: ShieldCheckIcon,
    environments: ['Air-gapped networks', 'SCIFs', 'Classified facilities'],
    classification: 'up to TS/SCI',
    features: ['Isolated deployment', 'Physical security', 'Local processing'],
  },
  {
    name: 'Tactical Edge',
    icon: CommandLineIcon,
    environments: ['Forward operations', 'Mobile command', 'Disconnected ops'],
    classification: 'up to SECRET',
    features: ['Offline capability', 'Ruggedized hardware', 'Low bandwidth'],
  },
];

export default function MilitaryArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification.includes('TS/SCI')) return 'bg-red-500/10 text-red-400 border-red-500/30';
    if (classification.includes('SECRET')) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    if (classification.includes('Multi-Level')) return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    return 'bg-green-500/10 text-green-400 border-green-500/30';
  };

  return (
    <section id="military-architecture" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Secure <span className="text-gradient">Defense Architecture</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            Purpose-built architecture designed for defense and intelligence operations. 
            Every layer incorporates security-first design principles with multi-level 
            security and comprehensive C2 system integration.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-8 mb-16">
          {architectureLayers.map((layer, layerIndex) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: layerIndex % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: layerIndex * 0.2 }}
              className="relative"
            >
              {/* Layer Header */}
              <div className={`bg-gradient-to-r ${layer.color} rounded-t-xl p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{layer.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border bg-white/20 text-white border-white/30`}>
                    {layer.classification}
                  </div>
                </div>
              </div>

              {/* Components Grid */}
              <div className="bg-white rounded-b-xl shadow-lg p-6 border-t-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {layer.components.map((component, componentIndex) => (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: (layerIndex * 0.2) + (componentIndex * 0.1) }}
                      className="flex flex-col items-center text-center p-4 bg-secondary-25 rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                        <component.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="text-sm font-semibold text-secondary-900 mb-2">
                        {component.name}
                      </h4>
                      <p className="text-xs text-secondary-600 leading-relaxed">
                        {component.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connection Lines */}
              {layerIndex < architectureLayers.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-secondary-300 to-secondary-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Flexible Deployment Options</h3>
            <p className="text-secondary-600 max-w-3xl mx-auto">
              OXICLOUD Platform adapts to your security requirements and operational constraints. 
              Deploy anywhere from classified cloud environments to air-gapped tactical networks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <option.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold mb-2">{option.name}</h4>

                {/* Classification */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getClassificationColor(option.classification)}`}>
                  {option.classification}
                </div>

                {/* Environments */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-secondary-700 mb-2">Supported Environments</h5>
                  <div className="space-y-1">
                    {option.environments.map((env) => (
                      <div key={env} className="text-sm text-secondary-600 bg-secondary-50 rounded px-2 py-1">
                        {env}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h5 className="text-sm font-medium text-secondary-700 mb-2">Key Features</h5>
                  <div className="space-y-1">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Architecture Designed for Security
            </h3>
            <p className="text-secondary-300 mb-8 max-w-3xl mx-auto">
              Our defense-focused architecture incorporates security at every layer, 
              from multi-level security controls to encrypted communications and 
              comprehensive audit trails. Built for the most demanding classified environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Request Architecture Review
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download System Architecture
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}