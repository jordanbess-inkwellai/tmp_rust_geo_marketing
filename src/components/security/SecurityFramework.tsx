'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ServerIcon,
  CloudIcon,
  UserGroupIcon,
  KeyIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  BoltIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const securityLayers = [
  {
    id: 'perimeter',
    name: 'Perimeter Security',
    icon: ShieldCheckIcon,
    description: 'Multi-layered network protection with advanced threat detection',
    details: [
      'Web Application Firewall (WAF) with ML-based threat detection',
      'Distributed Denial of Service (DDoS) protection up to 1.7 Tbps',
      'Intrusion Detection and Prevention Systems (IDS/IPS)',
      'Geographic IP filtering and reputation-based blocking',
      'Rate limiting and API abuse protection',
      'SSL/TLS termination with perfect forward secrecy'
    ],
    technologies: ['CloudFlare', 'AWS Shield Advanced', 'Imperva', 'F5 Networks']
  },
  {
    id: 'identity',
    name: 'Identity & Access Management',
    icon: UserGroupIcon,
    description: 'Zero-trust identity verification with granular access controls',
    details: [
      'Multi-factor authentication (MFA) required for all users',
      'Single Sign-On (SSO) with SAML 2.0 and OpenID Connect',
      'Role-Based Access Control (RBAC) with principle of least privilege',
      'Privileged Access Management (PAM) for administrative accounts',
      'Continuous authentication and risk-based access decisions',
      'Just-in-time access provisioning and deprovisioning'
    ],
    technologies: ['Okta', 'Azure AD', 'CyberArk', 'Ping Identity']
  },
  {
    id: 'data',
    name: 'Data Protection',
    icon: LockClosedIcon,
    description: 'End-to-end encryption and data loss prevention',
    details: [
      'AES-256 encryption for data at rest with FIPS 140-2 Level 3 HSMs',
      'TLS 1.3 encryption for data in transit with certificate pinning',
      'Field-level encryption for sensitive personally identifiable information',
      'Data Loss Prevention (DLP) with content inspection and classification',
      'Tokenization and pseudonymization for data minimization',
      'Cryptographic key rotation and lifecycle management'
    ],
    technologies: ['AWS KMS', 'HashiCorp Vault', 'Thales HSM', 'Microsoft Purview']
  },
  {
    id: 'application',
    name: 'Application Security',
    icon: CpuChipIcon,
    description: 'Secure development lifecycle and runtime protection',
    details: [
      'Static Application Security Testing (SAST) in CI/CD pipeline',
      'Dynamic Application Security Testing (DAST) for runtime vulnerabilities',
      'Software Composition Analysis (SCA) for third-party dependencies',
      'Container security scanning and runtime protection',
      'Runtime Application Self-Protection (RASP) for zero-day threats',
      'Secure coding practices and developer security training'
    ],
    technologies: ['Snyk', 'Veracode', 'Checkmarx', 'Aqua Security']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure Security',
    icon: ServerIcon,
    description: 'Hardened infrastructure with continuous monitoring',
    details: [
      'Infrastructure as Code (IaC) with security policy enforcement',
      'Container orchestration with Kubernetes security policies',
      'Immutable infrastructure with automated security patching',
      'Network segmentation with micro-segmentation and zero-trust networking',
      'Vulnerability management with automated remediation',
      'Security Information and Event Management (SIEM) integration'
    ],
    technologies: ['Terraform', 'Kubernetes', 'Prisma Cloud', 'Splunk']
  },
  {
    id: 'monitoring',
    name: 'Security Monitoring',
    icon: EyeIcon,
    description: '24/7 threat detection and incident response',
    details: [
      'Security Operations Center (SOC) with 24/7/365 monitoring',
      'AI-powered threat detection and behavioral analytics',
      'Automated incident response and threat hunting',
      'User and Entity Behavior Analytics (UEBA) for insider threats',
      'Security orchestration and automated response (SOAR)',
      'Threat intelligence integration and indicators of compromise (IOC) matching'
    ],
    technologies: ['Splunk', 'CrowdStrike', 'Elastic Security', 'IBM QRadar']
  }
];

const zeroTrustPrinciples = [
  {
    title: 'Never Trust, Always Verify',
    description: 'Every user, device, and network flow is authenticated and authorized before access',
    icon: ShieldCheckIcon
  },
  {
    title: 'Least Privilege Access',
    description: 'Users and systems receive minimum access required for their role',
    icon: KeyIcon
  },
  {
    title: 'Assume Breach',
    description: 'Design security controls assuming the network perimeter has been compromised',
    icon: BoltIcon
  },
  {
    title: 'Continuous Monitoring',
    description: 'Real-time visibility into all network traffic, user behavior, and system activities',
    icon: EyeIcon
  }
];

export default function SecurityFramework() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedLayer, setSelectedLayer] = useState<string>('perimeter');

  const selectedSecurityLayer = securityLayers.find(layer => layer.id === selectedLayer);

  return (
    <section id="security-framework" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Security <span className="text-gradient">Framework</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our defense-in-depth security architecture implements multiple layers of protection 
            based on zero-trust principles and industry best practices.
          </p>
        </motion.div>

        {/* Zero Trust Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Zero Trust Architecture Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zeroTrustPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 shadow-lg border border-secondary-200 text-center"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">{principle.title}</h4>
                <p className="text-sm text-secondary-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Layers */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Layer Selector */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold text-secondary-900 mb-6">Security Layers</h3>
            <div className="space-y-3">
              {securityLayers.map((layer, index) => (
                <motion.button
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedLayer === layer.id
                      ? 'bg-red-50 border-red-500 text-red-900'
                      : 'bg-white border-secondary-200 text-gray-700 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      selectedLayer === layer.id ? 'bg-red-500' : 'bg-gray-100'
                    }`}>
                      <layer.icon className={`w-5 h-5 ${
                        selectedLayer === layer.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold">{layer.name}</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-75 line-clamp-2">{layer.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Layer Details */}
          <div className="lg:col-span-8">
            {selectedSecurityLayer && (
              <motion.div
                key={selectedLayer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <div className="flex items-center">
                    <selectedSecurityLayer.icon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold">{selectedSecurityLayer.name}</h3>
                      <p className="text-red-100">{selectedSecurityLayer.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Security Controls */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-4">Security Controls & Capabilities</h4>
                    <div className="space-y-3">
                      {selectedSecurityLayer.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-4">Key Technologies & Partners</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedSecurityLayer.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 bg-secondary-100 text-secondary-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Security Framework Performance
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-secondary-900 font-medium">Threat Detection Rate</div>
              <div className="text-sm text-secondary-600">AI-powered security monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">&lt;2min</div>
              <div className="text-secondary-900 font-medium">Mean Response Time</div>
              <div className="text-sm text-secondary-600">Automated incident response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">0</div>
              <div className="text-secondary-900 font-medium">Security Breaches</div>
              <div className="text-sm text-secondary-600">Perfect security track record</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-secondary-900 font-medium">Security Monitoring</div>
              <div className="text-sm text-secondary-600">Continuous threat detection</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
              Our multi-layered security framework provides comprehensive protection through 
              defense-in-depth strategies, continuous monitoring, and automated response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Security Architecture Briefing
              </button>
              <button className="btn border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                Download Security Whitepaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}