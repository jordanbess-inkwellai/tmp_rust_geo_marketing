'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheckIcon, DocumentCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const certifications = [
  {
    category: 'Security Compliance',
    icon: ShieldCheckIcon,
    items: [
      {
        name: 'NIST Cybersecurity Framework',
        status: 'Implemented',
        description: 'Core cybersecurity practices aligned with NIST guidelines',
        level: 'Framework Aligned'
      },
      {
        name: 'FISMA Moderate',
        status: 'Ready',
        description: 'Federal Information Security Management Act compliance',
        level: 'Assessment Ready'
      },
      {
        name: 'FedRAMP',
        status: 'In Progress',
        description: 'Federal Risk and Authorization Management Program',
        level: 'Documentation Phase'
      },
      {
        name: 'ISO 27001',
        status: 'Planned',
        description: 'Information Security Management System',
        level: 'Assessment Planned'
      }
    ]
  },
  {
    category: 'Quality Standards',
    icon: DocumentCheckIcon,
    items: [
      {
        name: 'ISO 9001:2015',
        status: 'Implemented',
        description: 'Quality Management System certification',
        level: 'Certified Ready'
      },
      {
        name: 'CMMI Level 3',
        status: 'In Progress',
        description: 'Capability Maturity Model Integration',
        level: 'Assessment Phase'
      },
      {
        name: 'OGC API Compliance',
        status: 'Certified',
        description: 'Open Geospatial Consortium standards compliance',
        level: 'Fully Compliant'
      },
      {
        name: 'MISB Standards',
        status: 'Implemented',
        description: 'Motion Imagery Standards Board compliance',
        level: 'MISB 0601.16'
      }
    ]
  },
  {
    category: 'Business Credentials',
    icon: BuildingOfficeIcon,
    items: [
      {
        name: 'SAM Registration',
        status: 'Active',
        description: 'System for Award Management registration',
        level: 'CAGE Code: [PENDING]'
      },
      {
        name: 'SBA Small Business',
        status: 'Eligible',
        description: 'Small Business Administration certification',
        level: 'Application Ready'
      },
      {
        name: 'SDVOSB',
        status: 'Planned',
        description: 'Service-Disabled Veteran-Owned Small Business',
        level: 'Verification Pending'
      },
      {
        name: 'GSA Schedule',
        status: 'Planned',
        description: 'General Services Administration contract vehicle',
        level: 'Application Planned'
      }
    ]
  },
  {
    category: 'Technical Expertise',
    icon: AcademicCapIcon,
    items: [
      {
        name: 'Security Clearances',
        status: 'Available',
        description: 'Team members with active clearances',
        level: 'TS/SCI Capable'
      },
      {
        name: 'OGC Membership',
        status: 'Active',
        description: 'Open Geospatial Consortium membership',
        level: 'Contributing Member'
      },
      {
        name: 'GEOINT Expertise',
        status: 'Certified',
        description: 'Geospatial Intelligence professional expertise',
        level: 'USGIF Certified'
      },
      {
        name: 'Cloud Certifications',
        status: 'Current',
        description: 'AWS and Azure government cloud certifications',
        level: 'Multi-Cloud Certified'
      }
    ]
  }
];

const complianceTimeline = [
  {
    quarter: 'Q1 2024',
    milestones: ['NIST Framework Implementation', 'OGC API Certification', 'SAM Registration']
  },
  {
    quarter: 'Q2 2024',
    milestones: ['ISO 9001 Assessment', 'FISMA Documentation', 'SBA Certification']
  },
  {
    quarter: 'Q3 2024',
    milestones: ['CMMI Level 3 Assessment', 'FedRAMP Documentation', 'GSA Schedule Application']
  },
  {
    quarter: 'Q4 2024',
    milestones: ['ISO 27001 Assessment', 'Facility Security Clearance', 'Full Compliance Portfolio']
  }
];

const statusColors = {
  'Certified': 'bg-green-100 text-green-800',
  'Implemented': 'bg-green-100 text-green-800',
  'Active': 'bg-green-100 text-green-800',
  'Available': 'bg-green-100 text-green-800',
  'Current': 'bg-green-100 text-green-800',
  'Ready': 'bg-blue-100 text-blue-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  'Eligible': 'bg-blue-100 text-blue-800',
  'Planned': 'bg-secondary-100 text-secondary-800'
};

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-gradient">Compliance</span> & Certifications
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We maintain the highest standards of security, quality, and compliance required
            for defense and government contracting. Our certification roadmap ensures
            continuous improvement and regulatory adherence.
          </p>
        </motion.div>

        {/* Certification Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-secondary-200"
            >
              <div className="flex items-center mb-6">
                <div className="feature-icon mr-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="border-l-4 border-primary-500 pl-4 py-2"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-secondary-900">{item.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[item.status as keyof typeof statusColors]}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-600 mb-1">{item.description}</p>
                    <p className="text-xs text-secondary-500 font-medium">{item.level}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl p-8 shadow-lg border border-secondary-200 mb-16"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">
            Compliance Roadmap 2024
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {complianceTimeline.map((quarter, index) => (
              <div key={quarter.quarter} className="relative">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-secondary-900">{quarter.quarter}</h4>
                </div>

                <div className="space-y-2">
                  {quarter.milestones.map((milestone) => (
                    <div
                      key={milestone}
                      className="bg-secondary-50 rounded-lg p-3 text-sm text-secondary-700"
                    >
                      {milestone}
                    </div>
                  ))}
                </div>

                {/* Connector line */}
                {index < complianceTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-secondary-200" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Clearance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Security Clearance Capabilities
            </h3>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              Our team includes cleared professionals capable of supporting classified programs
              and secure government environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Active Clearances</h4>
              <p className="text-secondary-300 text-sm">
                Team members with active Secret and Top Secret clearances ready for immediate deployment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Facility Clearance</h4>
              <p className="text-secondary-300 text-sm">
                Pursuing facility security clearance to support classified program requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentCheckIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">DCSA Compliance</h4>
              <p className="text-secondary-300 text-sm">
                Full compliance with Defense Counterintelligence and Security Agency requirements.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white">
              Request Cleared Team Information
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}