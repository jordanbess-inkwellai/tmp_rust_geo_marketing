'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is included in the free trial?',
    answer: 'Our 30-day free trial includes full access to the Professional plan features, including natural language queries, basic analytics, API access, and email support. No credit card required to start.'
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. For downgrades, you retain access to higher-tier features until your next billing cycle.'
  },
  {
    question: 'Do you offer volume discounts?',
    answer: 'Yes, we offer volume discounts for organizations with 100+ users. We also provide special pricing for educational institutions and non-profit organizations. Contact our sales team for custom pricing.'
  },
  {
    question: 'What deployment options are available?',
    answer: 'We offer cloud (SaaS), on-premise, hybrid, and air-gapped deployments. Government customers can choose from FedRAMP High cloud environments or complete on-premise installations with IL4/IL5 compliance.'
  },
  {
    question: 'How does data security work?',
    answer: 'All data is encrypted at rest and in transit using AES-256 encryption. We maintain SOC 2 Type II certification, FedRAMP High authorization, and comply with NIST 800-53 controls. Government deployments include additional security measures.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Support varies by plan: Professional gets business hours email support, Enterprise gets 24/7 priority support, Government gets dedicated cleared personnel, and Enterprise+ gets white-glove support with 15-minute SLA.'
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No setup fees for cloud deployments. On-premise and hybrid deployments may include implementation fees depending on complexity. Government deployments include full implementation support at no additional cost.'
  },
  {
    question: 'How does billing work?',
    answer: 'Billing is monthly or annual in advance. Annual billing provides 20% savings. Government contracts can be structured for multi-year terms with custom payment schedules. All plans include unlimited data processing within limits.'
  },
  {
    question: 'Can I integrate with existing systems?',
    answer: 'Yes, our platform provides REST and GraphQL APIs, webhooks, and pre-built connectors for popular GIS, database, and analytics tools. Custom integrations are available for Enterprise and Government plans.'
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'For query limits, we provide real-time usage monitoring and will contact you before limits are reached. Overages are charged at reasonable rates. Storage overages include a grace period before additional charges apply.'
  }
];

export default function PricingFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="pricing-faq" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get answers to common questions about our pricing, features, and deployment options.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-secondary-200 rounded-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary-25 transition-colors"
              >
                <h3 className="font-semibold text-secondary-900 pr-4">{faq.question}</h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-secondary-500 transition-transform ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-secondary-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-secondary-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Still have questions?</h3>
            <p className="text-secondary-600 mb-6">
              Our team is here to help you find the right solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3">
                Contact Sales
              </button>
              <button className="btn bg-transparent border-secondary-300 text-secondary-700 hover:bg-secondary-100 px-6 py-3">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}