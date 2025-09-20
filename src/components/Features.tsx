'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BoltIcon,
  CogIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Open Standards Compliance',
    description: 'Full OGC API compliance (Features, Processes, Connected Systems) ensures interoperability with existing systems and future-proof architecture.',
    icon: GlobeAltIcon,
    benefits: ['No vendor lock-in', 'Standards-based integration', 'Future-proof architecture'],
  },
  {
    title: 'Military-Grade Security',
    description: 'Built-in security features including NIST compliance, role-based access control, and support for classified environments.',
    icon: ShieldCheckIcon,
    benefits: ['NIST Cybersecurity Framework', 'FISMA compliance ready', 'Classified network support'],
  },
  {
    title: 'High-Performance Architecture',
    description: 'Rust-based backend delivers 10x performance improvements over traditional Java-based solutions with memory safety guarantees.',
    icon: CpuChipIcon,
    benefits: ['10x faster processing', 'Memory safety', 'Concurrent operations'],
  },
  {
    title: 'Cloud-Native Deployment',
    description: 'Kubernetes-ready containerized services enable rapid deployment across cloud, on-premise, and edge environments.',
    icon: CloudIcon,
    benefits: ['24-hour deployment', 'Auto-scaling', 'Multi-environment support'],
  },
  {
    title: 'Real-Time Collaboration',
    description: 'WebSocket-based real-time updates enable multiple analysts to collaborate on the same operational picture simultaneously.',
    icon: UserGroupIcon,
    benefits: ['Live collaboration', 'Conflict resolution', 'Role-based permissions'],
  },
  {
    title: 'AI-Native Integration',
    description: 'Built-in Model Context Protocol (MCP) support enables seamless AI tool integration for automated analysis and decision support.',
    icon: BoltIcon,
    benefits: ['Native AI integration', 'Automated analysis', 'Decision support'],
  },
  {
    title: 'Comprehensive Data Support',
    description: 'Process everything from FMV/KLV metadata to climate data, DTED elevation models, and 3D point clouds in a unified platform.',
    icon: DocumentDuplicateIcon,
    benefits: ['Multi-format support', 'Unified processing', 'Standard outputs'],
  },
  {
    title: 'Advanced Visualization',
    description: 'Modern 3D visualization including Gaussian splatting, 3D tiles, and real-time rendering for immersive situational awareness.',
    icon: ChartBarIcon,
    benefits: ['3D visualization', 'Real-time rendering', 'Immersive experience'],
  },
  {
    title: 'Flexible Configuration',
    description: 'Modular architecture allows deployment of specific capabilities based on mission requirements and security constraints.',
    icon: CogIcon,
    benefits: ['Modular deployment', 'Mission-specific config', 'Scalable architecture'],
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Built for <span className="text-gradient">Mission-Critical</span> Operations
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our platform combines the latest in geospatial technology with defense-grade security
            and reliability requirements. Every feature is designed with operational excellence in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover p-8 group"
            >
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-secondary-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-sm text-secondary-500">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
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
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Join forward-thinking defense organizations who are modernizing their geospatial
              intelligence capabilities with our next-generation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white">
                Schedule Technical Briefing
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white">
                Download Capability Overview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}