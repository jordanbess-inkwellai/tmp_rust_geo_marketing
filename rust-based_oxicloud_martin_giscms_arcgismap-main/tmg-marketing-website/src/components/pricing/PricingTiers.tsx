'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Professional',
    description: 'Perfect for small teams and pilot projects',
    monthlyPrice: 2999,
    annualPrice: 2399, // 20% discount
    annualSavings: 7200,
    popular: false,
    badge: 'Small Teams',
    features: {
      users: 'Up to 10 users',
      storage: '1TB data storage',
      processing: '100K queries/month',
      support: 'Business hours support',
      sla: '99.5% uptime SLA',
      deployment: 'Cloud-based',
      security: 'SOC 2 Type II',
      integrations: 'Standard APIs',
      training: 'Self-service resources',
      analytics: 'Basic reporting'
    },
    includedFeatures: [
      'Geospatial AI chatbot',
      'Natural language queries',
      'Real-time data processing',
      'Standard integrations',
      'Basic analytics dashboard',
      'Email support',
      'API access',
      'Mobile app access'
    ],
    limitations: [
      'Limited to 10 concurrent users',
      'Standard processing speed',
      'Basic customization options',
      'No on-premise deployment'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations',
    monthlyPrice: 9999,
    annualPrice: 7999, // 20% discount
    annualSavings: 24000,
    popular: true,
    badge: 'Most Popular',
    features: {
      users: 'Up to 100 users',
      storage: '10TB data storage',
      processing: '1M queries/month',
      support: '24/7 priority support',
      sla: '99.9% uptime SLA',
      deployment: 'Cloud or hybrid',
      security: 'SOC 2 + FedRAMP Ready',
      integrations: 'Premium APIs + Custom',
      training: 'Dedicated training sessions',
      analytics: 'Advanced analytics suite'
    },
    includedFeatures: [
      'Everything in Professional',
      'Advanced AI capabilities',
      'Custom model training',
      'Priority processing',
      'Advanced integrations',
      'Custom dashboards',
      'Dedicated account manager',
      'Phone and chat support',
      'Custom workflows',
      'Advanced security features',
      'Compliance reporting',
      'Multi-tenant architecture'
    ],
    limitations: [
      'Setup fee may apply for complex integrations',
      'On-premise deployment requires additional licensing'
    ]
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Specialized for defense and intelligence agencies',
    monthlyPrice: null, // Custom pricing
    annualPrice: null,
    annualSavings: null,
    popular: false,
    badge: 'Custom Pricing',
    customPricing: true,
    features: {
      users: 'Unlimited users',
      storage: 'Unlimited storage',
      processing: 'Unlimited queries',
      support: '24/7 dedicated support',
      sla: '99.99% uptime SLA',
      deployment: 'On-premise/air-gapped',
      security: 'FedRAMP High + IL5',
      integrations: 'Government-specific APIs',
      training: 'On-site training program',
      analytics: 'Intelligence-grade analytics'
    },
    includedFeatures: [
      'Everything in Enterprise',
      'FedRAMP High authorization',
      'IL4/IL5 compliance',
      'Air-gapped deployment',
      'Government-specific features',
      'Classified data handling',
      'SCIF-compatible deployment',
      'Multi-level security',
      'Custom security protocols',
      'Government contracting support',
      'Compliance documentation',
      'Cleared personnel support',
      'Emergency response SLA',
      'Custom development'
    ],
    limitations: []
  },
  {
    id: 'enterprise-plus',
    name: 'Enterprise+',
    description: 'Ultimate solution with unlimited everything',
    monthlyPrice: 24999,
    annualPrice: 19999, // 20% discount
    annualSavings: 60000,
    popular: false,
    badge: 'Unlimited',
    features: {
      users: 'Unlimited users',
      storage: 'Unlimited storage',
      processing: 'Unlimited queries',
      support: '24/7 white-glove support',
      sla: '99.99% uptime SLA',
      deployment: 'Any deployment model',
      security: 'Maximum security',
      integrations: 'Unlimited custom integrations',
      training: 'Comprehensive training program',
      analytics: 'Enterprise intelligence suite'
    },
    includedFeatures: [
      'Everything in Enterprise',
      'Unlimited usage',
      'White-glove support',
      'Custom feature development',
      'Priority feature requests',
      'Dedicated infrastructure',
      'Global deployment support',
      'Advanced customization',
      'Partner ecosystem access',
      'Executive briefing center',
      'Custom SLAs available',
      'Disaster recovery included'
    ],
    limitations: []
  }
];

export default function PricingTiers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [showFeatureDetails, setShowFeatureDetails] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="pricing-tiers" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your organization's needs. All plans include core AI capabilities,
            with additional features and support levels for larger deployments.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-secondary-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-secondary-900 shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-secondary-900 shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Annual Billing
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? 'border-primary-500 scale-105'
                  : 'border-secondary-200 hover:border-primary-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {!plan.popular && plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2">{plan.name}</h3>
                  <p className="text-secondary-600 mb-6">{plan.description}</p>

                  {plan.customPricing ? (
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-secondary-900 mb-2">Custom</div>
                      <div className="text-secondary-600">Contact for pricing</div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-secondary-900 mb-2">
                        {formatPrice(billingCycle === 'monthly' ? (plan.monthlyPrice || 0) : (plan.annualPrice || 0))}
                        <span className="text-lg font-normal text-secondary-600">/month</span>
                      </div>
                      {billingCycle === 'annual' && plan.annualSavings && (
                        <div className="text-sm text-green-600 font-medium">
                          Save {formatPrice(plan.annualSavings)} annually
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular || plan.customPricing
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900'
                    }`}
                  >
                    {plan.customPricing ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Users</span>
                    <span className="text-sm font-medium text-secondary-900">{plan.features.users}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Storage</span>
                    <span className="text-sm font-medium text-secondary-900">{plan.features.storage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Processing</span>
                    <span className="text-sm font-medium text-secondary-900">{plan.features.processing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Support</span>
                    <span className="text-sm font-medium text-secondary-900">{plan.features.support}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">SLA</span>
                    <span className="text-sm font-medium text-secondary-900">{plan.features.sla}</span>
                  </div>
                </div>

                {/* Feature Toggle */}
                <button
                  onClick={() => setShowFeatureDetails(showFeatureDetails === plan.id ? null : plan.id)}
                  className="w-full text-center text-primary-600 hover:text-primary-700 text-sm font-medium border-t border-secondary-200 pt-4"
                >
                  {showFeatureDetails === plan.id ? 'Hide Details' : 'View All Features'}
                </button>

                {/* Detailed Features */}
                {showFeatureDetails === plan.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-3"
                  >
                    <h4 className="font-semibold text-secondary-900 text-sm">Included Features:</h4>
                    {plan.includedFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-secondary-600">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-secondary-900 text-sm mt-4">Limitations:</h4>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <XMarkIcon className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                            <span className="text-secondary-600">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-On Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-secondary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Add-On Services</h3>
            <p className="text-secondary-600">Enhance your deployment with additional services and support options.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">Professional Services</h4>
              <p className="text-secondary-600 text-sm mb-4">Custom implementation, integration, and optimization services.</p>
              <div className="text-2xl font-bold text-secondary-900 mb-4">$2,500/day</div>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Custom implementation</li>
                <li>• System integration</li>
                <li>• Performance optimization</li>
                <li>• Custom development</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">Security & Compliance</h4>
              <p className="text-secondary-600 text-sm mb-4">Enhanced security audits, compliance certification support.</p>
              <div className="text-2xl font-bold text-secondary-900 mb-4">$15K-50K</div>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• FedRAMP authorization support</li>
                <li>• Security audits</li>
                <li>• Compliance documentation</li>
                <li>• Penetration testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">Priority Support</h4>
              <p className="text-secondary-600 text-sm mb-4">Dedicated support engineer with guaranteed response times.</p>
              <div className="text-2xl font-bold text-secondary-900 mb-4">$5K/month</div>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Dedicated support engineer</li>
                <li>• 15-minute response SLA</li>
                <li>• Priority bug fixes</li>
                <li>• Weekly check-ins</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}