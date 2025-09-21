'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  VideoCameraIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    title: 'Live FMV Demo',
    description: 'See real-time FMV processing and KLV extraction in action',
    icon: VideoCameraIcon,
    action: 'Schedule Demo',
    duration: '30 minutes',
    availability: 'Same day available',
  },
  {
    title: 'Technical Consultation',
    description: 'Discuss your specific FMV requirements with our experts',
    icon: PhoneIcon,
    action: 'Book Consultation',
    duration: '45 minutes',
    availability: 'Within 24 hours',
  },
  {
    title: 'Custom Integration',
    description: 'Explore integration with your existing FMV infrastructure',
    icon: DocumentTextIcon,
    action: 'Discuss Integration',
    duration: '60 minutes',
    availability: 'Within 48 hours',
  },
  {
    title: 'Training Workshop',
    description: 'Comprehensive FMV platform training for your team',
    icon: AcademicCapIcon,
    action: 'Schedule Training',
    duration: 'Half/Full day',
    availability: 'Flexible scheduling',
  },
];

export default function FMVContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="fmv-contact" className="section bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Ready to Experience <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Advanced FMV Processing</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Connect with our FMV experts to see how OXICLOUD Platform can transform 
            your video intelligence operations. From live demos to custom integrations, 
            we're here to support your mission.
          </p>
        </motion.div>

        {/* Contact Options */}
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
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <option.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{option.title}</h3>
                  <p className="text-blue-200 text-sm">{option.description}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <div className="text-blue-300 mb-1">Duration</div>
                  <div className="text-white font-medium">{option.duration}</div>
                </div>
                <div>
                  <div className="text-blue-300 mb-1">Availability</div>
                  <div className="text-white font-medium">{option.availability}</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white w-full group-hover:bg-blue-500 transition-colors">
                {option.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Direct Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <div className="text-white">+1 (555) FMV-DEMO</div>
              <div className="text-blue-200 text-sm">Available 24/7</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <div className="text-white">fmv@oxicloud.com</div>
              <div className="text-blue-200 text-sm">Response within 2 hours</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <CalendarDaysIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">Calendar</h4>
              <div className="text-white">Book directly</div>
              <div className="text-blue-200 text-sm">Instant confirmation</div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">
              Start Your FMV Transformation Today
            </h4>
            <p className="text-blue-200 mb-6">
              Join the organizations already leveraging OXICLOUD FMV processing 
              for superior video intelligence capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                Get Started Now
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 px-8 py-3">
                Download FMV Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}