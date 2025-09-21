'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';

const featureCategories = [
  {
    name: 'Core AI Features',
    features: [
      {
        name: 'Natural Language Queries',
        description: 'Ask questions in plain English and get intelligent responses',
        professional: true,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Geospatial AI Processing',
        description: 'Advanced spatial reasoning and analysis capabilities',
        professional: true,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Multi-LLM Support',
        description: 'Access to multiple AI models (GPT-4, Claude, etc.)',
        professional: 'Limited',
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Custom Model Training',
        description: 'Train AI models on your specific data and use cases',
        professional: false,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Real-time Processing',
        description: 'Process and analyze data in real-time',
        professional: 'Standard',
        enterprise: 'Priority',
        government: 'Guaranteed',
        enterprisePlus: 'Dedicated'
      }
    ]
  },
  {
    name: 'Data & Analytics',
    features: [
      {
        name: 'Data Storage',
        description: 'Secure storage for your geospatial data',
        professional: '1TB',
        enterprise: '10TB',
        government: 'Unlimited',
        enterprisePlus: 'Unlimited'
      },
      {
        name: 'Query Volume',
        description: 'Monthly query processing limit',
        professional: '100K queries',
        enterprise: '1M queries',
        government: 'Unlimited',
        enterprisePlus: 'Unlimited'
      },
      {
        name: 'Analytics Dashboard',
        description: 'Visual analytics and reporting interface',
        professional: 'Basic',
        enterprise: 'Advanced',
        government: 'Intelligence-grade',
        enterprisePlus: 'Custom'
      },
      {
        name: 'Custom Reports',
        description: 'Generate custom reports and visualizations',
        professional: false,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Data Export',
        description: 'Export data in multiple formats',
        professional: 'Standard formats',
        enterprise: 'All formats',
        government: 'Secure formats',
        enterprisePlus: 'Any format'
      }
    ]
  },
  {
    name: 'Security & Compliance',
    features: [
      {
        name: 'Data Encryption',
        description: 'Encrypt data at rest and in transit',
        professional: 'AES-256',
        enterprise: 'AES-256 + HSM',
        government: 'FIPS 140-2',
        enterprisePlus: 'Custom encryption'
      },
      {
        name: 'Access Controls',
        description: 'Role-based access control and permissions',
        professional: 'Basic RBAC',
        enterprise: 'Advanced RBAC',
        government: 'Multi-level security',
        enterprisePlus: 'Custom controls'
      },
      {
        name: 'Compliance Certifications',
        description: 'Security and compliance certifications',
        professional: 'SOC 2 Type II',
        enterprise: 'SOC 2 + FedRAMP Ready',
        government: 'FedRAMP High + IL5',
        enterprisePlus: 'All certifications'
      },
      {
        name: 'Audit Logging',
        description: 'Comprehensive audit trails and logging',
        professional: 'Basic logging',
        enterprise: 'Advanced logging',
        government: 'Intelligence-grade',
        enterprisePlus: 'Custom logging'
      },
      {
        name: 'Air-gapped Deployment',
        description: 'Deploy in completely isolated environments',
        professional: false,
        enterprise: false,
        government: true,
        enterprisePlus: true
      }
    ]
  },
  {
    name: 'Integration & APIs',
    features: [
      {
        name: 'REST API',
        description: 'RESTful API for integration with existing systems',
        professional: true,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'GraphQL API',
        description: 'Flexible GraphQL API for efficient data queries',
        professional: false,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Webhook Support',
        description: 'Real-time notifications via webhooks',
        professional: 'Limited',
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Custom Integrations',
        description: 'Build custom integrations with our platform',
        professional: false,
        enterprise: 'Supported',
        government: 'Full support',
        enterprisePlus: 'Unlimited'
      },
      {
        name: 'Third-party Connectors',
        description: 'Pre-built connectors for popular tools',
        professional: '10 connectors',
        enterprise: '50+ connectors',
        government: 'Gov-specific',
        enterprisePlus: 'All connectors'
      }
    ]
  },
  {
    name: 'Support & Training',
    features: [
      {
        name: 'Support Level',
        description: 'Customer support availability and response times',
        professional: 'Business hours',
        enterprise: '24/7 priority',
        government: '24/7 dedicated',
        enterprisePlus: 'White-glove'
      },
      {
        name: 'Response Time SLA',
        description: 'Guaranteed response time for support requests',
        professional: '24 hours',
        enterprise: '4 hours',
        government: '1 hour',
        enterprisePlus: '15 minutes'
      },
      {
        name: 'Training Programs',
        description: 'Onboarding and ongoing training for your team',
        professional: 'Self-service',
        enterprise: 'Dedicated sessions',
        government: 'On-site training',
        enterprisePlus: 'Comprehensive program'
      },
      {
        name: 'Account Manager',
        description: 'Dedicated account manager for your organization',
        professional: false,
        enterprise: true,
        government: true,
        enterprisePlus: true
      },
      {
        name: 'Implementation Support',
        description: 'Assistance with deployment and configuration',
        professional: 'Documentation',
        enterprise: 'Guided setup',
        government: 'Full implementation',
        enterprisePlus: 'White-glove setup'
      }
    ]
  }
];

const plans = [
  { id: 'professional', name: 'Professional', price: '$2,399/mo' },
  { id: 'enterprise', name: 'Enterprise', price: '$7,999/mo' },
  { id: 'government', name: 'Government', price: 'Custom' },
  { id: 'enterprisePlus', name: 'Enterprise+', price: '$19,999/mo' }
];

export default function FeatureComparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCategory, setExpandedCategory] = useState<string | null>('Core AI Features');

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <XMarkIcon className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    if (value === 'Limited' || value === 'Basic' || value === 'Standard') {
      return (
        <div className="flex items-center justify-center">
          <MinusIcon className="w-4 h-4 text-yellow-500 mr-1" />
          <span className="text-sm text-secondary-600">{value}</span>
        </div>
      );
    }
    return <span className="text-sm font-medium text-secondary-900 text-center">{value}</span>;
  };

  return (
    <section id="feature-comparison" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Detailed <span className="text-gradient">Feature Comparison</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Compare features across all plans to find the perfect fit for your organization's needs.
            All plans include core AI capabilities with varying levels of advanced features.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-6 bg-secondary-900 text-white">
            <div className="font-semibold">Features</div>
            {plans.map((plan) => (
              <div key={plan.id} className="text-center">
                <div className="font-semibold">{plan.name}</div>
                <div className="text-sm text-secondary-300 mt-1">{plan.price}</div>
              </div>
            ))}
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <div key={category.name} className="border-b border-secondary-200 last:border-b-0">
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.name ? null : category.name
                )}
                className="w-full grid grid-cols-5 gap-4 p-4 bg-secondary-50 hover:bg-secondary-100 transition-colors text-left"
              >
                <div className="font-semibold text-secondary-900 flex items-center">
                  {category.name}
                  <span className="ml-2 text-xs text-secondary-500">
                    {expandedCategory === category.name ? '−' : '+'}
                  </span>
                </div>
                <div className="col-span-4"></div>
              </button>

              {/* Category Features */}
              {expandedCategory === category.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      className="grid grid-cols-5 gap-4 p-4 border-t border-secondary-100 hover:bg-secondary-25 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-secondary-900">{feature.name}</div>
                        <div className="text-sm text-secondary-500 mt-1">{feature.description}</div>
                      </div>
                      <div className="flex items-center justify-center">
                        {renderFeatureValue(feature.professional)}
                      </div>
                      <div className="flex items-center justify-center">
                        {renderFeatureValue(feature.enterprise)}
                      </div>
                      <div className="flex items-center justify-center">
                        {renderFeatureValue(feature.government)}
                      </div>
                      <div className="flex items-center justify-center">
                        {renderFeatureValue(feature.enterprisePlus)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Feature Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-white rounded-xl p-6 shadow-lg"
        >
          <h4 className="font-semibold text-secondary-900 mb-4">Legend</h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-secondary-600">Feature included</span>
            </div>
            <div className="flex items-center">
              <XMarkIcon className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-sm text-secondary-600">Feature not available</span>
            </div>
            <div className="flex items-center">
              <MinusIcon className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm text-secondary-600">Limited or basic version</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-secondary-900 mr-2">Custom text</span>
              <span className="text-sm text-secondary-600">Specific implementation</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Selection Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Small Teams</h4>
            <p className="text-secondary-600 text-sm mb-4">5-10 users, pilot projects, basic AI needs</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Choose Professional →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-primary-200">
            <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏢</span>
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Large Enterprises</h4>
            <p className="text-secondary-600 text-sm mb-4">50-100 users, advanced features, priority support</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Choose Enterprise →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Government Agencies</h4>
            <p className="text-secondary-600 text-sm mb-4">Classified environments, compliance requirements</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Choose Government →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h4 className="font-semibold text-secondary-900 mb-2">Global Enterprises</h4>
            <p className="text-secondary-600 text-sm mb-4">Unlimited usage, custom features, white-glove support</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Choose Enterprise+ →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}