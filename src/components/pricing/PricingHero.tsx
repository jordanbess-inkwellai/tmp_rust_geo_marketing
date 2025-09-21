'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const valuePropositions = [
  {
    icon: CurrencyDollarIcon,
    title: 'Cost-Effective',
    description: '90% less than legacy solutions with faster deployment'
  },
  {
    icon: ClockIcon,
    title: 'Rapid Deployment',
    description: 'Production-ready in 30 days vs 6-18 months for competitors'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security First',
    description: 'FedRAMP Authorized with government-grade security'
  },
  {
    icon: CheckCircleIcon,
    title: 'Proven Results',
    description: '50+ government agencies trust our platform'
  }
];

const keyBenefits = [
  'No long-term contracts required',
  'Flexible scaling based on usage',
  'Government and enterprise support',
  'Custom deployment options available',
  'Integration with existing systems',
  'Comprehensive training included'
];

export default function PricingHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-200/30 to-transparent rounded-full translate-x-48 translate-y-48" />
      </div>

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            💰 Transparent Pricing • No Hidden Fees
          </div>
          
          <h1 className="mb-6">
            Choose the Right <span className="text-gradient">Solution</span> for Your Mission
          </h1>
          
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto mb-8">
            Flexible pricing designed for government agencies, defense organizations, and enterprises. 
            From small teams to large-scale deployments, we have a solution that fits your budget and requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
              View Pricing Plans
            </button>
            <button className="btn bg-transparent border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-3">
              Get Custom Quote
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-secondary-600 mb-12">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span>FedRAMP Authorized</span>
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
              <span>IL4/IL5 Ready</span>
            </div>
          </div>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valuePropositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <prop.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">{prop.title}</h3>
              <p className="text-secondary-600 text-sm">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                Why Organizations Choose Our Platform
              </h2>
              <p className="text-secondary-600 mb-6">
                Built specifically for government and enterprise requirements with 
                security, compliance, and performance at the core.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">$0</div>
                <div className="text-secondary-600">Setup & Implementation Fee</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Average ROI</span>
                  <span className="font-bold text-green-600">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Cost Savings</span>
                  <span className="font-bold text-green-600">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Deployment Time</span>
                  <span className="font-bold text-primary-600">30 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600">Customer Satisfaction</span>
                  <span className="font-bold text-primary-600">98%</span>
                </div>
              </div>
              
              <button className="w-full mt-6 btn bg-primary-600 hover:bg-primary-700 text-white">
                Calculate Your ROI
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}