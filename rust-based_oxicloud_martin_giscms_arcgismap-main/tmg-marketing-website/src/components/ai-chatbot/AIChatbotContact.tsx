'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export default function AIChatbotContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="ai-chatbot-contact" className="section bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="mb-6">
            Ready to Transform Your <span className="text-gradient">Spatial Intelligence</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Experience the future of geospatial AI. Our team is ready to help you implement 
            intelligent spatial querying and analysis for your organization.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: ChatBubbleLeftRightIcon,
                title: 'Live Demo',
                description: 'Try our AI chatbot with real spatial data',
                action: 'Start Demo'
              },
              {
                icon: CalendarIcon,
                title: 'Schedule Call',
                description: 'Book a personalized consultation',
                action: 'Book Now'
              },
              {
                icon: EnvelopeIcon,
                title: 'Get Proposal',
                description: 'Receive a custom implementation plan',
                action: 'Request Quote'
              },
              {
                icon: PhoneIcon,
                title: 'Expert Support',
                description: 'Speak with our spatial AI specialists',
                action: 'Call Now'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2">
                  {item.action}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                Start Free Trial
              </button>
              <button className="btn bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Setup in minutes • Enterprise support available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}