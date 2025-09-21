'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

const securityHighlights = [
  {
    icon: ShieldCheckIcon,
    title: 'FedRAMP High',
    description: 'Authorized for high-impact government data',
    status: 'Certified'
  },
  {
    icon: LockClosedIcon,
    title: 'IL4/IL5 Ready',
    description: 'Impact Level 4 & 5 compliance for classified systems',
    status: 'Compliant'
  },
  {
    icon: DocumentCheckIcon,
    title: 'SOC 2 Type II',
    description: 'Annual security and availability audits',
    status: 'Certified'
  },
  {
    icon: EyeSlashIcon,
    title: 'Zero Trust',
    description: 'Never trust, always verify security model',
    status: 'Implemented'
  }
];

const securityStats = [
  {
    value: '256-bit',
    label: 'AES Encryption',
    description: 'Military-grade encryption at rest and in transit'
  },
  {
    value: '99.99%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability guarantee'
  },
  {
    value: '24/7',
    label: 'Security Monitoring',
    description: 'Continuous threat detection and response'
  },
  {
    value: '0',
    label: 'Security Breaches',
    description: 'Perfect security track record since inception'
  }
];

export default function SecurityHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-secondary-50 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-200/30 to-transparent rounded-full translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-200/30 to-transparent rounded-full -translate-x-48 translate-y-48" />
      </div>

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            🛡️ Enterprise Security & Compliance
          </div>
          
          <h1 className="mb-6">
            <span className="text-gradient">Security-First</span> Geospatial Intelligence
          </h1>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto mb-8">
            Built from the ground up with security at the core. Our platform meets the highest 
            government and enterprise security standards, ensuring your most sensitive geospatial 
            data remains protected while enabling mission-critical operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              View Security Documentation
            </button>
            <button className="btn bg-transparent border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-3">
              Request Security Briefing
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-secondary-600 mb-12">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span>FedRAMP High Authorized</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span>NIST 800-53 Compliant</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span>FIPS 140-2 Validated</span>
            </div>
          </div>
        </motion.div>

        {/* Security Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">{highlight.title}</h3>
              <p className="text-secondary-600 text-sm mb-3">{highlight.description}</p>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                ✓ {highlight.status}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
              Security by the Numbers
            </h2>
            <p className="text-secondary-600">
              Our commitment to security is reflected in measurable outcomes and industry-leading standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">{stat.label}</div>
                <div className="text-sm text-secondary-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Security Commitment</h3>
          <p className="text-red-100 text-lg max-w-3xl mx-auto mb-6">
            We understand that your geospatial data represents national security interests and 
            mission-critical operations. Our platform is designed with defense-in-depth security, 
            ensuring multiple layers of protection for your most sensitive information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white hover:bg-red-50 text-red-600 px-6 py-3">
              Download Security Whitepaper
            </button>
            <button className="btn bg-transparent border-white text-white hover:bg-white/10 px-6 py-3">
              Schedule Security Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}