'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const certifications = [
  {
    id: 'fedramp',
    name: 'FedRAMP High',
    category: 'Government',
    icon: ShieldCheckIcon,
    status: 'Authorized',
    description: 'Federal Risk and Authorization Management Program certification for high-impact government systems',
    details: {
      authority: 'U.S. General Services Administration',
      scope: 'Cloud services for high-impact government data',
      controls: '421 NIST 800-53 security controls',
      lastAudit: 'March 2024',
      nextAudit: 'March 2025',
      documentation: ['System Security Plan (SSP)', 'Security Assessment Report (SAR)', 'Plan of Action & Milestones (POA&M)']
    },
    benefits: [
      'Authorized for classified government data up to Impact Level 4',
      'Continuous monitoring and annual assessments',
      'Government-wide reciprocity and reuse',
      'Meets DoD Cloud Computing SRG requirements'
    ]
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    category: 'Enterprise',
    icon: DocumentCheckIcon,
    status: 'Certified',
    description: 'System and Organization Controls audit for security, availability, and confidentiality',
    details: {
      authority: 'AICPA (American Institute of CPAs)',
      scope: 'Security, Availability, Confidentiality, Processing Integrity',
      controls: 'Trust Services Criteria (TSC)',
      lastAudit: 'January 2024',
      nextAudit: 'January 2025',
      documentation: ['SOC 2 Type II Report', 'Management Letter', 'Remediation Plan']
    },
    benefits: [
      'Independent verification of security controls',
      'Annual third-party audits by certified CPA firms',
      'Demonstrates operational effectiveness over time',
      'Meets enterprise vendor risk management requirements'
    ]
  },
  {
    id: 'nist',
    name: 'NIST 800-53',
    category: 'Framework',
    icon: LockClosedIcon,
    status: 'Compliant',
    description: 'Comprehensive security control framework for federal information systems',
    details: {
      authority: 'National Institute of Standards and Technology',
      scope: 'Information systems and organizational assets',
      controls: '18 control families, 421+ security controls',
      lastAssessment: 'February 2024',
      nextAssessment: 'February 2025',
      documentation: ['Security Control Assessment', 'Control Implementation Evidence', 'Continuous Monitoring Plan']
    },
    benefits: [
      'Comprehensive security posture management',
      'Risk-based approach to security controls',
      'Continuous monitoring and improvement',
      'Foundation for other compliance frameworks'
    ]
  },
  {
    id: 'fips',
    name: 'FIPS 140-2',
    category: 'Cryptographic',
    icon: LockClosedIcon,
    status: 'Validated',
    description: 'Federal Information Processing Standard for cryptographic modules',
    details: {
      authority: 'NIST Cryptographic Module Validation Program',
      scope: 'Cryptographic modules and hardware security',
      controls: 'Level 3 validated cryptographic modules',
      lastValidation: 'November 2023',
      nextValidation: 'November 2028',
      documentation: ['FIPS 140-2 Certificate', 'Cryptographic Module Specification', 'Security Policy']
    },
    benefits: [
      'Government-approved cryptographic protection',
      'Hardware-based key storage and processing',
      'Tamper-evident and tamper-resistant modules',
      'Required for classified information processing'
    ]
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    category: 'International',
    icon: GlobeAltIcon,
    status: 'Preparing',
    description: 'International standard for information security management systems',
    details: {
      authority: 'International Organization for Standardization',
      scope: 'Information Security Management System (ISMS)',
      controls: '114 security controls across 14 domains',
      expectedCertification: 'Q3 2024',
      nextAudit: 'TBD',
      documentation: ['ISMS Documentation', 'Risk Assessment', 'Statement of Applicability']
    },
    benefits: [
      'Global recognition and credibility',
      'Systematic approach to information security',
      'Continuous improvement methodology',
      'International market access'
    ]
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    category: 'Privacy',
    icon: BuildingOffice2Icon,
    status: 'Compliant',
    description: 'European General Data Protection Regulation compliance',
    details: {
      authority: 'European Union',
      scope: 'Personal data processing and protection',
      controls: 'Privacy by design, data minimization, consent management',
      lastAssessment: 'December 2023',
      nextAssessment: 'December 2024',
      documentation: ['Privacy Impact Assessment', 'Data Protection Policy', 'Consent Management Procedures']
    },
    benefits: [
      'European market compliance',
      'Enhanced data subject rights',
      'Privacy by design architecture',
      'Reduced regulatory risk'
    ]
  }
];

export default function ComplianceCertifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState<string>('fedramp');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Authorized':
      case 'Certified':
      case 'Validated':
      case 'Compliant':
        return 'bg-green-100 text-green-800';
      case 'Preparing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedCertification = certifications.find(cert => cert.id === selectedCert);

  return (
    <section id="compliance-certifications" className="section bg-white">
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
            We maintain the highest levels of security and compliance certifications to meet 
            the demanding requirements of government, defense, and enterprise customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Certification Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.button
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedCert(cert.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedCert === cert.id
                      ? 'bg-red-50 border-red-500 text-red-900'
                      : 'bg-white border-secondary-200 text-gray-700 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        selectedCert === cert.id ? 'bg-red-500' : 'bg-gray-100'
                      }`}>
                        <cert.icon className={`w-4 h-4 ${
                          selectedCert === cert.id ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{cert.name}</div>
                        <div className="text-xs opacity-75">{cert.category}</div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Certification Details */}
          <div className="lg:col-span-8">
            {selectedCertification && (
              <motion.div
                key={selectedCert}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <selectedCertification.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedCertification.name}</h3>
                        <p className="text-red-100">{selectedCertification.category} Compliance</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCertification.status === 'Preparing' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {selectedCertification.status}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {selectedCertification.description}
                  </p>

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Certification Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-secondary-600">Authority:</span>
                          <span className="text-sm font-medium text-secondary-900">
                            {selectedCertification.details.authority}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-secondary-600">Scope:</span>
                          <span className="text-sm font-medium text-secondary-900">
                            {selectedCertification.details.scope}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-secondary-600">Controls:</span>
                          <span className="text-sm font-medium text-secondary-900">
                            {selectedCertification.details.controls}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-secondary-600">Last Audit:</span>
                          <span className="text-sm font-medium text-secondary-900">
                            {selectedCertification.details.lastAudit || selectedCertification.details.lastAssessment || selectedCertification.details.lastValidation || 'N/A'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Documentation</h4>
                      <div className="space-y-2">
                        {selectedCertification.details.documentation.map((doc, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <DocumentCheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-secondary-600">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Benefits</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCertification.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Compliance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Comprehensive Compliance Coverage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">6+</div>
              <div className="text-secondary-900 font-medium">Active Certifications</div>
              <div className="text-sm text-secondary-600">Covering government, enterprise, and international standards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">421+</div>
              <div className="text-secondary-900 font-medium">Security Controls</div>
              <div className="text-sm text-secondary-600">Implemented and continuously monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-secondary-900 font-medium">Audit Success Rate</div>
              <div className="text-sm text-secondary-600">Perfect track record across all audits</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
              Our comprehensive compliance program ensures your organization can confidently deploy 
              our platform while meeting the most stringent regulatory and security requirements.
            </p>
            <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Request Compliance Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}