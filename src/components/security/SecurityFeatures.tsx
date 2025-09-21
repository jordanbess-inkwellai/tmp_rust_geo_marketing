'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ServerIcon,
  UserGroupIcon,
  DocumentTextIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  CloudArrowUpIcon,
  BellAlertIcon,
  CogIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const securityFeatures = [
  {
    id: 'encryption',
    name: 'Advanced Encryption',
    icon: LockClosedIcon,
    category: 'Data Protection',
    description: 'Military-grade encryption for all data at rest and in transit',
    features: [
      {
        title: 'AES-256 Encryption',
        description: 'All data encrypted at rest using AES-256 with FIPS 140-2 Level 3 HSMs',
        technical: 'Hardware Security Modules with tamper-evident protection'
      },
      {
        title: 'TLS 1.3 Transport Security',
        description: 'Latest TLS protocol with perfect forward secrecy and certificate pinning',
        technical: 'ECDHE key exchange with ChaCha20-Poly1305 cipher suite'
      },
      {
        title: 'Field-Level Encryption',
        description: 'Sensitive fields encrypted individually with unique keys',
        technical: 'Application-layer encryption with envelope encryption pattern'
      },
      {
        title: 'Key Lifecycle Management',
        description: 'Automated key rotation and secure key escrow procedures',
        technical: 'NIST SP 800-57 compliant key management lifecycle'
      }
    ],
    metrics: {
      strength: 'AES-256',
      compliance: 'FIPS 140-2 Level 3',
      keyRotation: '90 days',
      performance: '< 5ms overhead'
    }
  },
  {
    id: 'access-control',
    name: 'Access Control',
    icon: UserGroupIcon,
    category: 'Identity & Access',
    description: 'Zero-trust access controls with granular permissions',
    features: [
      {
        title: 'Multi-Factor Authentication',
        description: 'Hardware tokens, biometrics, and push notifications supported',
        technical: 'FIDO2/WebAuthn, PIV/CAC cards, and mobile authenticators'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular permissions with attribute-based access control',
        technical: 'XACML policies with dynamic attribute evaluation'
      },
      {
        title: 'Privileged Access Management',
        description: 'Just-in-time access for administrative operations',
        technical: 'Session recording and approval workflows for privileged access'
      },
      {
        title: 'Single Sign-On Integration',
        description: 'Enterprise SSO with SAML 2.0 and OpenID Connect',
        technical: 'Identity federation with claims-based authorization'
      }
    ],
    metrics: {
      authMethods: '6+ options',
      sessionTimeout: '15 minutes',
      privilegedSessions: '100% recorded',
      ssoIntegration: '50+ providers'
    }
  },
  {
    id: 'threat-detection',
    name: 'Threat Detection',
    icon: ExclamationTriangleIcon,
    category: 'Security Monitoring',
    description: 'AI-powered threat detection and behavioral analytics',
    features: [
      {
        title: 'Behavioral Analytics',
        description: 'Machine learning models detect anomalous user and entity behavior',
        technical: 'Unsupervised learning with baseline profiling and drift detection'
      },
      {
        title: 'Real-time Threat Intelligence',
        description: 'Integration with global threat intelligence feeds',
        technical: 'STIX/TAXII integration with automated IOC matching'
      },
      {
        title: 'Advanced Persistent Threat Detection',
        description: 'Multi-stage attack correlation and lateral movement detection',
        technical: 'Graph-based attack modeling with temporal correlation'
      },
      {
        title: 'Automated Response',
        description: 'Configurable automated response to security incidents',
        technical: 'SOAR playbooks with escalation and containment procedures'
      }
    ],
    metrics: {
      detectionRate: '99.9%',
      falsePositives: '< 0.1%',
      responseTime: '< 2 minutes',
      threatFeeds: '20+ sources'
    }
  },
  {
    id: 'audit-logging',
    name: 'Audit & Logging',
    icon: DocumentTextIcon,
    category: 'Compliance & Governance',
    description: 'Comprehensive audit trails and forensic capabilities',
    features: [
      {
        title: 'Immutable Audit Logs',
        description: 'Tamper-proof logging with cryptographic integrity verification',
        technical: 'Blockchain-based log integrity with hash chaining'
      },
      {
        title: 'Real-time Log Analysis',
        description: 'Stream processing for security event correlation',
        technical: 'Apache Kafka with Elasticsearch and machine learning analytics'
      },
      {
        title: 'Forensic Data Retention',
        description: 'Long-term retention with efficient compression and indexing',
        technical: 'Tiered storage with automated lifecycle management'
      },
      {
        title: 'Compliance Reporting',
        description: 'Automated generation of compliance reports and attestations',
        technical: 'Template-based reporting with digital signatures'
      }
    ],
    metrics: {
      retention: '7 years',
      logVolume: '10TB+ daily',
      searchTime: '< 1 second',
      integrity: '100% verified'
    }
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    icon: BellAlertIcon,
    category: 'Security Operations',
    description: '24/7 security operations with automated incident response',
    features: [
      {
        title: 'Security Operations Center',
        description: 'Dedicated SOC with security analysts monitoring 24/7/365',
        technical: 'Tier 1/2/3 analyst coverage with escalation procedures'
      },
      {
        title: 'Incident Classification',
        description: 'Automated severity classification and priority assignment',
        technical: 'CVSS-based scoring with business impact assessment'
      },
      {
        title: 'Containment Procedures',
        description: 'Automated containment and isolation of compromised assets',
        technical: 'Network segmentation and access revocation automation'
      },
      {
        title: 'Forensic Investigation',
        description: 'Digital forensics and root cause analysis capabilities',
        technical: 'Memory dumps, disk imaging, and timeline reconstruction'
      }
    ],
    metrics: {
      availability: '24/7/365',
      meanDetection: '< 5 minutes',
      meanContainment: '< 15 minutes',
      recovery: '< 4 hours'
    }
  },
  {
    id: 'data-governance',
    name: 'Data Governance',
    icon: ServerIcon,
    category: 'Data Protection',
    description: 'Comprehensive data governance and privacy controls',
    features: [
      {
        title: 'Data Classification',
        description: 'Automated data discovery and sensitivity classification',
        technical: 'ML-based content analysis with regex and NLP pattern matching'
      },
      {
        title: 'Data Loss Prevention',
        description: 'Real-time monitoring and blocking of data exfiltration',
        technical: 'Content inspection with policy-based blocking and quarantine'
      },
      {
        title: 'Privacy Controls',
        description: 'GDPR/CCPA compliance with data subject rights management',
        technical: 'Consent management and automated data deletion workflows'
      },
      {
        title: 'Data Residency',
        description: 'Configurable data residency and sovereignty controls',
        technical: 'Geo-fencing with region-specific encryption key management'
      }
    ],
    metrics: {
      classification: '99.8% accuracy',
      dlpBlocking: '100% effective',
      privacyRequests: '< 30 days',
      dataMapping: 'Real-time'
    }
  }
];

export default function SecurityFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFeature, setSelectedFeature] = useState<string>('encryption');

  const selectedSecurityFeature = securityFeatures.find(feature => feature.id === selectedFeature);

  const categories = ['All', ...Array.from(new Set(securityFeatures.map(f => f.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFeatures = selectedCategory === 'All' 
    ? securityFeatures 
    : securityFeatures.filter(f => f.category === selectedCategory);

  return (
    <section id="security-features" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Advanced Security <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Enterprise-grade security features designed to protect your most sensitive 
            geospatial data and meet the strictest compliance requirements.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-secondary-100 text-secondary-600 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Feature Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {filteredFeatures.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedFeature === feature.id
                      ? 'bg-red-50 border-red-500 text-red-900'
                      : 'bg-white border-secondary-200 text-gray-700 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      selectedFeature === feature.id ? 'bg-red-500' : 'bg-gray-100'
                    }`}>
                      <feature.icon className={`w-5 h-5 ${
                        selectedFeature === feature.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold">{feature.name}</div>
                      <div className="text-xs opacity-75">{feature.category}</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-75 line-clamp-2">{feature.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-8">
            {selectedSecurityFeature && (
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <selectedSecurityFeature.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedSecurityFeature.name}</h3>
                        <p className="text-red-100">{selectedSecurityFeature.category}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-red-100">{selectedSecurityFeature.description}</p>
                </div>

                <div className="p-6">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-6">Key Capabilities</h4>
                    <div className="space-y-6">
                      {selectedSecurityFeature.features.map((subFeature, index) => (
                        <div key={index} className="border-l-4 border-red-200 pl-4">
                          <h5 className="font-semibold text-secondary-900 mb-1">{subFeature.title}</h5>
                          <p className="text-secondary-600 mb-2">{subFeature.description}</p>
                          <p className="text-sm text-secondary-500 italic">{subFeature.technical}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-4">Performance Metrics</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(selectedSecurityFeature.metrics).map(([key, value], index) => (
                        <div key={index} className="bg-secondary-50 rounded-lg p-4">
                          <div className="text-sm text-secondary-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                          <div className="text-lg font-semibold text-red-600">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Security Features Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Comprehensive Security Coverage
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 text-sm mb-1">{feature.name}</h4>
                <p className="text-xs text-secondary-600">{feature.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
              Our comprehensive security feature set provides end-to-end protection for your geospatial 
              data and operations, ensuring compliance with the most stringent security requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Request Security Demo
              </button>
              <button className="btn border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                Download Feature Matrix
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}