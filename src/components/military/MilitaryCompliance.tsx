'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  KeyIcon,
  LockClosedIcon,
  EyeSlashIcon,
  CogIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const complianceStandards = [
  {
    category: 'Security Frameworks',
    icon: ShieldCheckIcon,
    standards: [
      {
        name: 'NIST Cybersecurity Framework',
        level: 'Compliant',
        description: 'Core cybersecurity practices for critical infrastructure protection',
        coverage: '100%'
      },
      {
        name: 'NIST SP 800-53 Rev 5',
        level: 'Implemented',
        description: 'Security and privacy controls for federal information systems',
        coverage: '95%'
      },
      {
        name: 'ISO 27001/27002',
        level: 'Aligned',
        description: 'International standard for information security management',
        coverage: '90%'
      },
      {
        name: 'DISA STIGs',
        level: 'Ready',
        description: 'Defense Information Systems Agency Security Technical Implementation Guides',
        coverage: '85%'
      }
    ]
  },
  {
    category: 'Federal Compliance',
    icon: DocumentCheckIcon,
    standards: [
      {
        name: 'FISMA Compliance',
        level: 'Ready',
        description: 'Federal Information Security Management Act requirements',
        coverage: '100%'
      },
      {
        name: 'FedRAMP Authorization',
        level: 'In Progress',
        description: 'Federal Risk and Authorization Management Program certification',
        coverage: '80%'
      },
      {
        name: 'CMMC Level 3',
        level: 'Preparing',
        description: 'Cybersecurity Maturity Model Certification for DoD contractors',
        coverage: '75%'
      },
      {
        name: 'Section 508 Accessibility',
        level: 'Compliant',
        description: 'Accessibility requirements for federal electronic content',
        coverage: '100%'
      }
    ]
  },
  {
    category: 'Classification Systems',
    icon: LockClosedIcon,
    standards: [
      {
        name: 'Multi-Level Security (MLS)',
        level: 'Native Support',
        description: 'Simultaneous processing of multiple classification levels',
        coverage: '100%'
      },
      {
        name: 'Cross Domain Solutions',
        level: 'Integrated',
        description: 'Secure information sharing across security domains',
        coverage: '95%'
      },
      {
        name: 'Information Assurance',
        level: 'Implemented',
        description: 'Protection and defense of information and information systems',
        coverage: '90%'
      },
      {
        name: 'Compartmented Processing',
        level: 'Supported',
        description: 'Handling of Sensitive Compartmented Information (SCI)',
        coverage: '85%'
      }
    ]
  },
  {
    category: 'Identity & Access',
    icon: KeyIcon,
    standards: [
      {
        name: 'PIV/CAC Integration',
        level: 'Native',
        description: 'Personal Identity Verification and Common Access Card support',
        coverage: '100%'
      },
      {
        name: 'PKI Authentication',
        level: 'Full Support',
        description: 'Public Key Infrastructure for digital certificates',
        coverage: '100%'
      },
      {
        name: 'SAML 2.0 SSO',
        level: 'Implemented',
        description: 'Security Assertion Markup Language single sign-on',
        coverage: '95%'
      },
      {
        name: 'Multi-Factor Authentication',
        level: 'Required',
        description: 'Multiple authentication factors for enhanced security',
        coverage: '100%'
      }
    ]
  }
];

const certifications = [
  {
    name: 'Security Clearances',
    icon: EyeSlashIcon,
    items: [
      'Secret cleared personnel available',
      'TS/SCI cleared staff for classified demos',
      'Polygraph cleared team members',
      'Cleared facility access'
    ]
  },
  {
    name: 'Industry Certifications',
    icon: CogIcon,
    items: [
      'CISSP certified security professionals',
      'CISA certified information system auditors',
      'PMP certified project managers',
      'AWS/Azure certified cloud architects'
    ]
  },
  {
    name: 'Government Registrations',
    icon: BuildingLibraryIcon,
    items: [
      'SAM.gov registered vendor',
      'CAGE code assigned',
      'GSA Schedule eligible',
      'SEWP contract vehicle ready'
    ]
  },
  {
    name: 'Professional Services',
    icon: UserGroupIcon,
    items: [
      'Cleared systems integration team',
      'Security assessment services',
      'Compliance consulting',
      '24/7 cleared support available'
    ]
  }
];

export default function MilitaryCompliance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getLevelColor = (level: string) => {
    if (level.includes('Compliant') || level.includes('Native') || level.includes('Full')) {
      return 'bg-green-100 text-green-800';
    } else if (level.includes('Ready') || level.includes('Implemented') || level.includes('Integrated')) {
      return 'bg-blue-100 text-blue-800';
    } else if (level.includes('Progress') || level.includes('Preparing')) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="military-compliance" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Defense-Grade <span className="text-gradient">Compliance & Security</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            OXICLOUD Platform meets the most stringent security requirements and compliance standards 
            demanded by defense and intelligence operations. Our comprehensive approach ensures 
            your deployment meets all regulatory and security obligations.
          </p>
        </motion.div>

        {/* Compliance Standards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {complianceStandards.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
              </div>

              {/* Standards List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.standards.map((standard, standardIndex) => (
                    <motion.div
                      key={standard.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (standardIndex * 0.05) + 0.3 }}
                      className="border border-secondary-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                    >
                      {/* Standard Header */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">{standard.name}</h4>
                          <p className="text-sm text-secondary-600">{standard.description}</p>
                        </div>
                        <div className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(standard.level)}`}>
                          {standard.level}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-secondary-500">Implementation Coverage</span>
                          <span className="text-xs font-medium text-primary-600">{standard.coverage}</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: standard.coverage }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Team Certifications & Capabilities</h3>
            <p className="text-secondary-600 max-w-3xl mx-auto">
              Our team brings extensive security clearances, industry certifications, 
              and government contracting experience to ensure seamless deployment 
              in the most demanding environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <cert.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold mb-4">{cert.name}</h4>

                {/* Items */}
                <div className="space-y-2">
                  {cert.items.map((item) => (
                    <div key={item} className="flex items-center text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Security and Compliance You Can Trust
            </h3>
            <p className="text-secondary-300 mb-8 max-w-3xl mx-auto">
              Don't compromise on security or compliance. OXICLOUD Platform delivers 
              defense-grade security with comprehensive compliance coverage, backed by 
              a cleared team with deep experience in classified environments.
            </p>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm text-secondary-300">Compliance Standards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">TS/SCI</div>
                <div className="text-sm text-secondary-300">Clearance Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-secondary-300">MLS Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-secondary-300">Cleared Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Schedule Security Assessment
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download Compliance Matrix
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}