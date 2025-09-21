'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    title: 'Security Briefing',
    description: 'Schedule a classified demonstration with our cleared personnel',
    icon: ShieldCheckIcon,
    action: 'Request Briefing',
    classification: 'TS/SCI',
    duration: '60-90 minutes',
    availability: 'By appointment',
  },
  {
    title: 'Technical Demo',
    description: 'Live demonstration of OXICLOUD Platform capabilities and features',
    icon: VideoCameraIcon,
    action: 'Schedule Demo',
    classification: 'UNCLASSIFIED',
    duration: '30-45 minutes',
    availability: 'Same day',
  },
  {
    title: 'Architecture Review',
    description: 'Detailed technical review of system architecture and integration',
    icon: DocumentTextIcon,
    action: 'Request Review',
    classification: 'SECRET',
    duration: '2-3 hours',
    availability: '24-48 hours',
  },
  {
    title: 'Mission Consultation',
    description: 'Discuss specific mission requirements and deployment scenarios',
    icon: UserGroupIcon,
    action: 'Schedule Consultation',
    classification: 'Varies',
    duration: '45-60 minutes',
    availability: 'Within 24 hours',
  },
];

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Secure Line',
    value: '+1 (555) 123-GEOINT',
    sublabel: 'Cleared personnel available'
  },
  {
    icon: EnvelopeIcon,
    label: 'Classified Email',
    value: 'defense@oxicloud.com',
    sublabel: 'SIPR access available'
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Washington, DC Metro',
    sublabel: 'SCIF facilities available'
  },
  {
    icon: ClockIcon,
    label: 'Availability',
    value: '24/7 Support',
    sublabel: 'Mission-critical response'
  }
];

export default function MilitaryContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification.includes('TS/SCI')) return 'bg-red-500/10 text-red-400 border-red-500/30';
    if (classification.includes('SECRET')) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    if (classification === 'Varies') return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    return 'bg-green-500/10 text-green-400 border-green-500/30';
  };

  return (
    <section id="military-contact" className="section bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Ready to <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Discuss Your Mission</span>?
          </h2>
          <p className="text-xl text-secondary-300 max-w-4xl mx-auto">
            Connect with our cleared team to discuss your specific requirements. 
            We understand the unique challenges of defense and intelligence operations 
            and are ready to support your mission with appropriate security protocols.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600/30 transition-colors">
                    <option.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{option.title}</h3>
                    <div className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${getClassificationColor(option.classification)}`}>
                      {option.classification}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary-300 mb-6 leading-relaxed">
                {option.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <div className="text-secondary-400 mb-1">Duration</div>
                  <div className="text-white font-medium">{option.duration}</div>
                </div>
                <div>
                  <div className="text-secondary-400 mb-1">Availability</div>
                  <div className="text-white font-medium">{option.availability}</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn bg-primary-600 hover:bg-primary-700 text-white w-full group-hover:bg-primary-500 transition-colors">
                {option.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Direct Contact Information</h3>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              For immediate assistance or specific classified discussions, 
              use our direct contact channels staffed by cleared personnel.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{info.label}</h4>
                <div className="text-white font-medium mb-1">{info.value}</div>
                <div className="text-sm text-secondary-400">{info.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-xl"
        >
          <div className="flex items-start">
            <ShieldCheckIcon className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Security Protocols</h4>
              <div className="text-secondary-300 space-y-2 text-sm">
                <p>
                  • All classified discussions must be conducted through appropriate channels
                </p>
                <p>
                  • SCIF facilities available for TS/SCI demonstrations in Washington, DC area
                </p>
                <p>
                  • Remote classified sessions available via approved secure video systems
                </p>
                <p>
                  • All personnel supporting classified activities maintain appropriate clearances
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Your Mission is Our Priority
            </h3>
            <p className="text-secondary-300 mb-6 max-w-2xl mx-auto">
              Every defense and intelligence mission is unique. Let us show you how 
              OXICLOUD Platform can be tailored to meet your specific operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3">
                Start Secure Conversation
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 px-8 py-3">
                Download Information Package
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}