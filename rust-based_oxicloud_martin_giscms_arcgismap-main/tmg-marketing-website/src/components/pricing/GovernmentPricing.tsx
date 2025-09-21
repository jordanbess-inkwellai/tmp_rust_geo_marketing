'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  BuildingOffice2Icon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const governmentFeatures = [
  {
    icon: LockClosedIcon,
    title: 'FedRAMP High Authorization',
    description: 'Complete FedRAMP High certification with IL4/IL5 compliance for classified environments.',
    details: ['FIPS 140-2 encryption', 'Multi-level security', 'Air-gapped deployment', 'Cleared personnel support']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Clearance Support',
    description: 'Dedicated support staff with appropriate security clearances for your mission.',
    details: ['Secret clearance personnel', 'TS/SCI cleared engineers', 'On-site SCIF deployments', 'Classified system integration']
  },
  {
    icon: DocumentCheckIcon,
    title: 'Compliance Documentation',
    description: 'Complete compliance packages and documentation for rapid government approval.',
    details: ['ATO packages', 'Risk assessment frameworks', 'Security control documentation', 'Audit trail reports']
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Government Contracting',
    description: 'Streamlined procurement through established government contracting vehicles.',
    details: ['GSA Schedule holder', 'CIO-SP3 contract vehicle', 'SEWP V eligible', 'Direct award capabilities']
  }
];

const deploymentOptions = [
  {
    title: 'Cloud (FedRAMP)',
    description: 'FedRAMP High authorized cloud deployment',
    features: ['Multi-tenant isolation', 'Government cloud regions', '99.99% uptime SLA', 'Rapid deployment'],
    pricing: 'Starting at custom pricing',
    timeframe: '2-4 weeks',
    security: 'FedRAMP High'
  },
  {
    title: 'Hybrid',
    description: 'Combination of cloud and on-premise components',
    features: ['Sensitive data on-premise', 'Processing in secure cloud', 'Seamless integration', 'Flexible architecture'],
    pricing: 'Custom configuration',
    timeframe: '4-8 weeks',
    security: 'FedRAMP + Custom'
  },
  {
    title: 'On-Premise',
    description: 'Complete on-premise deployment for maximum control',
    features: ['Air-gapped deployment', 'Full data sovereignty', 'Custom security protocols', 'Dedicated infrastructure'],
    pricing: 'Enterprise licensing',
    timeframe: '6-12 weeks',
    security: 'IL4/IL5 Compliant'
  }
];

const contractVehicles = [
  { name: 'GSA Schedule', number: '70-495', category: 'IT Professional Services' },
  { name: 'CIO-SP3', number: 'CIO-SP-3H-16-D-0002', category: 'Enterprise Infrastructure Solutions' },
  { name: 'SEWP V', number: 'NNG15SC27B', category: 'Solutions for Enterprise-Wide Procurement' },
  { name: 'OASIS', number: 'GS-10F-0064R', category: 'One Acquisition Solution for Integrated Services' }
];

export default function GovernmentPricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="government-pricing" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            🛡️ Government & Defense Specialized
          </div>
          <h2 className="mb-4">
            <span className="text-gradient">Government</span> & Defense Solutions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Purpose-built for defense and intelligence agencies with the highest security requirements. 
            FedRAMP High authorized with complete compliance documentation and cleared personnel support.
          </p>
        </motion.div>

        {/* Government Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {governmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-secondary-200"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">{feature.title}</h3>
              <p className="text-secondary-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-12">Deployment Options</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-secondary-200 hover:border-red-300 transition-colors"
              >
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">{option.title}</h4>
                <p className="text-secondary-600 mb-6">{option.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Pricing</span>
                    <span className="text-sm font-medium">{option.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Deployment</span>
                    <span className="text-sm font-medium">{option.timeframe}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Security Level</span>
                    <span className="text-sm font-medium">{option.security}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn bg-red-600 hover:bg-red-700 text-white">
                  Request Information
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contract Vehicles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
            <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">Available Contract Vehicles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contractVehicles.map((vehicle, index) => (
                <div key={vehicle.name} className="border border-secondary-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-secondary-900">{vehicle.name}</h4>
                    <span className="text-sm text-secondary-500">{vehicle.number}</span>
                  </div>
                  <p className="text-sm text-secondary-600">{vehicle.category}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compliance & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-red-50 to-secondary-50 rounded-2xl p-8 border border-red-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Security & Compliance</h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Meeting the highest standards for government and defense deployments with comprehensive 
              security certifications and compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LockClosedIcon className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">FedRAMP High</h4>
              <p className="text-sm text-secondary-600">Complete authorization for high-impact government data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">IL4/IL5 Ready</h4>
              <p className="text-sm text-secondary-600">Impact Level 4 and 5 compliance for classified systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentCheckIcon className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">NIST 800-53</h4>
              <p className="text-sm text-secondary-600">Complete NIST cybersecurity framework implementation</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Request Security Documentation
              </button>
              <button className="btn bg-transparent border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                Schedule Security Briefing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}