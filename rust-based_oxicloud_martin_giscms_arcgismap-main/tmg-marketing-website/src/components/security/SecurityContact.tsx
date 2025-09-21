'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  BellAlertIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    id: 'security-briefing',
    title: 'Security Architecture Briefing',
    description: 'Schedule a detailed technical briefing on our security architecture and compliance posture',
    icon: ShieldCheckIcon,
    audience: 'CISOs, Security Architects, Compliance Officers',
    duration: '60 minutes',
    delivery: 'Virtual or On-site',
    includes: [
      'Comprehensive security framework overview',
      'Compliance certification walkthrough',
      'Threat intelligence and monitoring capabilities',
      'Zero-trust architecture deep dive',
      'Risk assessment and mitigation strategies',
      'Q&A with security leadership team'
    ],
    cta: 'Schedule Security Briefing',
    urgency: 'Standard'
  },
  {
    id: 'incident-response',
    title: '24/7 Security Incident Reporting',
    description: 'Immediate escalation path for security incidents and vulnerabilities',
    icon: ExclamationTriangleIcon,
    audience: 'Security Teams, SOC Analysts, Incident Responders',
    duration: 'Immediate Response',
    delivery: 'Phone, Email, Secure Portal',
    includes: [
      'Immediate incident acknowledgment',
      'Dedicated security analyst assignment',
      'Real-time incident status updates',
      'Forensic investigation coordination',
      'Post-incident analysis and reporting',
      'Remediation guidance and support'
    ],
    cta: 'Report Security Incident',
    urgency: 'Critical'
  },
  {
    id: 'vulnerability-disclosure',
    title: 'Vulnerability Disclosure Program',
    description: 'Responsible disclosure channel for security researchers and ethical hackers',
    icon: LockClosedIcon,
    audience: 'Security Researchers, Ethical Hackers, Bug Bounty Hunters',
    duration: 'Ongoing Program',
    delivery: 'Secure Submission Portal',
    includes: [
      'Secure vulnerability submission process',
      'Coordinated disclosure timeline',
      'Recognition and bounty programs',
      'Regular security advisories',
      'Researcher hall of fame',
      'Direct communication with security team'
    ],
    cta: 'Submit Vulnerability',
    urgency: 'High'
  },
  {
    id: 'compliance-audit',
    title: 'Compliance & Audit Support',
    description: 'Comprehensive support for security audits and compliance assessments',
    icon: DocumentTextIcon,
    audience: 'Auditors, Compliance Teams, Risk Managers',
    duration: 'As Required',
    delivery: 'Documentation Portal, Virtual Meetings',
    includes: [
      'Compliance documentation packages',
      'Audit evidence collection support',
      'Control testing and validation',
      'Risk assessment collaboration',
      'Remediation planning assistance',
      'Continuous monitoring reports'
    ],
    cta: 'Request Audit Support',
    urgency: 'Standard'
  },
  {
    id: 'security-training',
    title: 'Security Awareness Training',
    description: 'Customized security training programs for your organization',
    icon: UserGroupIcon,
    audience: 'IT Teams, End Users, Management',
    duration: '2-8 hours',
    delivery: 'Virtual, On-site, Self-paced',
    includes: [
      'Role-based security training modules',
      'Threat landscape awareness sessions',
      'Incident response procedures training',
      'Best practices and policy education',
      'Hands-on security tool demonstrations',
      'Certification and progress tracking'
    ],
    cta: 'Schedule Training',
    urgency: 'Standard'
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Coordination',
    description: 'Coordinate authorized penetration testing and security assessments',
    icon: BellAlertIcon,
    audience: 'Security Teams, Penetration Testers, Red Teams',
    duration: '1-4 weeks',
    delivery: 'Collaborative Planning',
    includes: [
      'Test scope and methodology review',
      'Authorization and legal coordination',
      'Testing environment preparation',
      'Real-time monitoring and support',
      'Results review and validation',
      'Remediation planning and prioritization'
    ],
    cta: 'Request Penetration Test',
    urgency: 'High'
  }
];

const emergencyContacts = [
  {
    type: 'Critical Security Incidents',
    phone: '+1 (555) 123-SECURE',
    email: 'security-incident@tmgplatform.com',
    availability: '24/7/365',
    responseTime: '< 15 minutes',
    escalation: 'Immediate to CISO and Security Leadership'
  },
  {
    type: 'Vulnerability Reports',
    phone: '+1 (555) 123-VULN',
    email: 'vulnerability@tmgplatform.com',
    availability: 'Business Hours + On-call',
    responseTime: '< 4 hours',
    escalation: 'Security Research Team and Product Security'
  },
  {
    type: 'Compliance Inquiries',
    phone: '+1 (555) 123-AUDIT',
    email: 'compliance@tmgplatform.com',
    availability: 'Business Hours',
    responseTime: '< 24 hours',
    escalation: 'Compliance Officer and Legal Team'
  }
];

const securityCertifications = [
  { name: 'FedRAMP High', status: 'Authorized', icon: '🛡️' },
  { name: 'SOC 2 Type II', status: 'Certified', icon: '📋' },
  { name: 'NIST 800-53', status: 'Compliant', icon: '🔒' },
  { name: 'FIPS 140-2', status: 'Validated', icon: '🔐' },
  { name: 'ISO 27001', status: 'In Progress', icon: '🌐' },
  { name: 'GDPR', status: 'Compliant', icon: '🇪🇺' }
];

export default function SecurityContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedContact, setSelectedContact] = useState<string>('security-briefing');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    contactType: 'security-briefing',
    urgency: 'standard',
    message: ''
  });

  const selectedContactOption = contactOptions.find(option => option.id === selectedContact);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Standard':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="security-contact" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Security <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Connect with our security experts for briefings, incident reporting, vulnerability disclosure, 
            and compliance support through dedicated channels.
          </p>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Emergency Security Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="bg-red-50 rounded-xl p-6 border-2 border-red-200"
              >
                <h4 className="font-semibold text-red-900 mb-4">{contact.type}</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <PhoneIcon className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-sm font-medium text-red-800">{contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-sm font-medium text-red-800">{contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-sm text-red-700">{contact.availability}</span>
                  </div>
                  <div className="text-xs text-red-600">
                    Response: {contact.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-secondary-900 mb-6">Security Services</h3>
            <div className="space-y-3">
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  onClick={() => {
                    setSelectedContact(option.id);
                    setFormData({ ...formData, contactType: option.id });
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedContact === option.id
                      ? 'bg-red-50 border-red-500 text-red-900'
                      : 'bg-white border-secondary-200 text-gray-700 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        selectedContact === option.id ? 'bg-red-500' : 'bg-gray-100'
                      }`}>
                        <option.icon className={`w-4 h-4 ${
                          selectedContact === option.id ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{option.title}</div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(option.urgency)}`}>
                      {option.urgency}
                    </div>
                  </div>
                  <p className="text-sm opacity-75 line-clamp-2">{option.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {selectedContactOption && (
              <motion.div
                key={selectedContact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <div className="flex items-center">
                    <selectedContactOption.icon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold">{selectedContactOption.title}</h3>
                      <p className="text-red-100">{selectedContactOption.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Service Details */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-secondary-600">Target Audience</div>
                      <div className="text-sm font-medium text-secondary-900">{selectedContactOption.audience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-secondary-600">Duration</div>
                      <div className="text-sm font-medium text-secondary-900">{selectedContactOption.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-secondary-600">Delivery</div>
                      <div className="text-sm font-medium text-secondary-900">{selectedContactOption.delivery}</div>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">What's Included</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedContactOption.includes.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">
                          Organization *
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">
                          Role/Title *
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-1">
                        Priority Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="standard">Standard (within 1-2 business days)</option>
                        <option value="high">High Priority (within 24 hours)</option>
                        <option value="urgent">Urgent (within 4 hours)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Please provide any additional details about your security requirements, timeline, or specific questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      {selectedContactOption.cta}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Security Certifications Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-secondary-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
            Trusted Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            {securityCertifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-2xl mr-2">{cert.icon}</span>
                <div className="text-left">
                  <div className="font-semibold text-sm text-secondary-900">{cert.name}</div>
                  <div className="text-xs text-secondary-600">{cert.status}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-secondary-600 max-w-3xl mx-auto">
            Our security team is committed to maintaining the highest standards of information security 
            and regulatory compliance to protect your most sensitive geospatial data and operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}