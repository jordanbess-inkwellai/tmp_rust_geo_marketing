'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    icon: CalendarIcon,
    title: 'Schedule a Demo',
    description: 'See our platform in action with a personalized demonstration',
    action: 'Book Demo',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: PhoneIcon,
    title: 'Speak with Sales',
    description: 'Get answers to your questions from our sales experts',
    action: 'Call Now',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: EnvelopeIcon,
    title: 'Get Custom Quote',
    description: 'Receive a detailed proposal tailored to your needs',
    action: 'Request Quote',
    color: 'bg-primary-600 hover:bg-primary-700'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Chat with our team for immediate assistance',
    action: 'Start Chat',
    color: 'bg-purple-600 hover:bg-purple-700'
  }
];

const guarantees = [
  'No obligation, cancel anytime',
  '30-day free trial available',
  'Transparent pricing, no hidden fees',
  'Setup and implementation support',
  'Dedicated customer success manager'
];

export default function PricingContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing-contact" className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Ready to Get <span className="text-primary-200">Started?</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join 50+ government agencies and enterprises who trust our geospatial AI platform 
            for their most critical missions. Get started today with a free trial or custom consultation.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
              <p className="text-primary-100 text-sm mb-4">{option.description}</p>
              <button className={`btn ${option.color} text-white w-full`}>
                {option.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-secondary-900">
              <h3 className="text-2xl font-semibold mb-4">Start Your Free Trial Today</h3>
              <p className="text-secondary-600 mb-6">
                Experience the full power of our geospatial AI platform with a 30-day free trial. 
                No credit card required, full access to Professional features, and dedicated onboarding support.
              </p>
              
              <div className="space-y-3 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-secondary-700 text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
                  Start Free Trial
                </button>
                <button className="btn bg-transparent border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-3">
                  View Demo
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">340%</div>
                <div className="text-secondary-600">Average ROI in Year 1</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-secondary-900">30 days</div>
                  <div className="text-secondary-600">Deployment time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">75%</div>
                  <div className="text-secondary-600">Time savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">50+</div>
                  <div className="text-secondary-600">Gov agencies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">99.9%</div>
                  <div className="text-secondary-600">Uptime SLA</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border">
                <p className="text-xs text-secondary-500 text-center">
                  "The deployment was seamless and we saw immediate improvements in our geospatial analysis capabilities."
                </p>
                <p className="text-xs font-medium text-secondary-900 text-center mt-2">
                  — Director of Operations, U.S. Army Geospatial Center
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-semibold text-white mb-4">Need immediate assistance?</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-primary-100">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <span>sales@techmaven.com</span>
              </div>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              Available Monday-Friday 9AM-6PM EST • Government sales available 24/7
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}