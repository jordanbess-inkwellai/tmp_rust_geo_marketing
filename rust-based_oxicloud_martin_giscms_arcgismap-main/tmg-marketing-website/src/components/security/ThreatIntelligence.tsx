'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ShieldExclamationIcon,
  EyeIcon,
  BoltIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CpuChipIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const threatCategories = [
  {
    id: 'apt',
    name: 'Advanced Persistent Threats',
    icon: ShieldExclamationIcon,
    severity: 'Critical',
    description: 'Nation-state actors and sophisticated threat groups targeting geospatial intelligence',
    threats: [
      {
        name: 'APT29 (Cozy Bear)',
        origin: 'Russia',
        targets: 'Government, Defense',
        techniques: ['Spear phishing', 'Zero-day exploits', 'Living off the land'],
        lastSeen: '2024-01-15',
        riskLevel: 'High'
      },
      {
        name: 'APT1 (Comment Crew)',
        origin: 'China',
        targets: 'Infrastructure, Energy',
        techniques: ['Supply chain attacks', 'Credential harvesting', 'Lateral movement'],
        lastSeen: '2024-02-03',
        riskLevel: 'High'
      },
      {
        name: 'Lazarus Group',
        origin: 'North Korea',
        targets: 'Financial, Government',
        techniques: ['Cryptocurrency theft', 'Destructive malware', 'Social engineering'],
        lastSeen: '2024-01-28',
        riskLevel: 'Medium'
      }
    ],
    countermeasures: [
      'Behavioral analytics for anomaly detection',
      'Zero-trust network architecture',
      'Advanced endpoint protection',
      'Threat hunting and incident response'
    ]
  },
  {
    id: 'insider',
    name: 'Insider Threats',
    icon: UserGroupIcon,
    severity: 'High',
    description: 'Malicious or compromised insiders with authorized access to sensitive systems',
    threats: [
      {
        name: 'Privileged User Abuse',
        origin: 'Internal',
        targets: 'Sensitive data, System configs',
        techniques: ['Privilege escalation', 'Data exfiltration', 'System sabotage'],
        lastSeen: 'Ongoing',
        riskLevel: 'High'
      },
      {
        name: 'Compromised Credentials',
        origin: 'External/Internal',
        targets: 'User accounts, Applications',
        techniques: ['Credential stuffing', 'Password spraying', 'Session hijacking'],
        lastSeen: 'Ongoing',
        riskLevel: 'Medium'
      },
      {
        name: 'Social Engineering',
        origin: 'External',
        targets: 'Employee credentials, Access tokens',
        techniques: ['Phishing', 'Pretexting', 'Baiting'],
        lastSeen: 'Ongoing',
        riskLevel: 'Medium'
      }
    ],
    countermeasures: [
      'User and entity behavior analytics (UEBA)',
      'Privileged access management (PAM)',
      'Data loss prevention (DLP)',
      'Continuous security awareness training'
    ]
  },
  {
    id: 'cyber-warfare',
    name: 'Cyber Warfare',
    icon: BoltIcon,
    severity: 'Critical',
    description: 'State-sponsored cyber operations targeting critical infrastructure',
    threats: [
      {
        name: 'Infrastructure Disruption',
        origin: 'State Actors',
        targets: 'Power grids, Communications',
        techniques: ['SCADA attacks', 'Network disruption', 'System destruction'],
        lastSeen: '2024-01-10',
        riskLevel: 'Critical'
      },
      {
        name: 'Data Manipulation',
        origin: 'State Actors',
        targets: 'Geospatial data, Intelligence',
        techniques: ['Data corruption', 'False flag operations', 'Information warfare'],
        lastSeen: '2023-12-22',
        riskLevel: 'High'
      },
      {
        name: 'Supply Chain Compromise',
        origin: 'State Actors',
        targets: 'Software vendors, Hardware',
        techniques: ['Backdoor implants', 'Firmware modification', 'Third-party infiltration'],
        lastSeen: '2024-02-01',
        riskLevel: 'High'
      }
    ],
    countermeasures: [
      'Air-gapped critical systems',
      'Supply chain security validation',
      'Real-time integrity monitoring',
      'Incident response and recovery planning'
    ]
  },
  {
    id: 'emerging',
    name: 'Emerging Threats',
    icon: ArrowTrendingUpIcon,
    severity: 'Medium',
    description: 'New and evolving threat vectors leveraging cutting-edge technologies',
    threats: [
      {
        name: 'AI-Powered Attacks',
        origin: 'Various',
        targets: 'Authentication systems, Social engineering',
        techniques: ['Deepfake social engineering', 'AI-generated phishing', 'Automated reconnaissance'],
        lastSeen: '2024-02-10',
        riskLevel: 'Medium'
      },
      {
        name: 'Quantum Computing Threats',
        origin: 'Research/State',
        targets: 'Cryptographic systems, Encrypted data',
        techniques: ['Cryptographic breaking', 'Historical data decryption', 'Key recovery'],
        lastSeen: 'Future threat',
        riskLevel: 'Low'
      },
      {
        name: 'IoT Botnets',
        origin: 'Cybercriminals',
        targets: 'Connected devices, Networks',
        techniques: ['Device compromise', 'DDoS amplification', 'Data harvesting'],
        lastSeen: '2024-01-25',
        riskLevel: 'Medium'
      }
    ],
    countermeasures: [
      'Post-quantum cryptography implementation',
      'AI-powered defense systems',
      'IoT security frameworks',
      'Continuous threat landscape monitoring'
    ]
  }
];

const intelligenceSources = [
  {
    name: 'Government Agencies',
    description: 'DHS, FBI, NSA, and international intelligence sharing',
    coverage: 'Nation-state threats, Critical infrastructure',
    feeds: 12,
    updateFrequency: 'Real-time'
  },
  {
    name: 'Commercial Threat Intel',
    description: 'FireEye, CrowdStrike, Recorded Future, Mandiant',
    coverage: 'APT groups, Malware families, TTPs',
    feeds: 8,
    updateFrequency: 'Hourly'
  },
  {
    name: 'Industry Sharing',
    description: 'ISACs, sector-specific threat sharing organizations',
    coverage: 'Sector-specific threats, Vulnerabilities',
    feeds: 15,
    updateFrequency: 'Daily'
  },
  {
    name: 'Open Source Intelligence',
    description: 'Security research, Dark web monitoring, Social media',
    coverage: 'Emerging threats, Vulnerability research',
    feeds: 25,
    updateFrequency: 'Continuous'
  }
];

const detectionCapabilities = [
  {
    name: 'Behavioral Analytics',
    description: 'Machine learning models that establish baselines and detect anomalies',
    accuracy: '99.2%',
    falsePositives: '0.3%'
  },
  {
    name: 'Signature Detection',
    description: 'Known threat signatures updated from global intelligence feeds',
    coverage: '50M+ signatures',
    updateFrequency: 'Every 15 minutes'
  },
  {
    name: 'Heuristic Analysis',
    description: 'Advanced heuristics for detecting unknown and zero-day threats',
    detectionRate: '94.7%',
    analysisTime: '< 100ms'
  },
  {
    name: 'Threat Hunting',
    description: 'Proactive hunting for advanced threats using custom queries',
    huntersActive: '24/7',
    averageHuntTime: '2.3 hours'
  }
];

export default function ThreatIntelligence() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('apt');
  const [activeTab, setActiveTab] = useState<string>('threats');

  const selectedThreatCategory = threatCategories.find(cat => cat.id === selectedCategory);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical':
        return 'text-red-600';
      case 'High':
        return 'text-orange-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="threat-intelligence" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Threat <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Advanced threat intelligence capabilities powered by global intelligence feeds, 
            AI-driven analytics, and continuous monitoring to protect against sophisticated threats.
          </p>
        </motion.div>

        {/* Intelligence Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">60+</div>
            <div className="text-secondary-900 font-medium">Intelligence Sources</div>
            <div className="text-sm text-secondary-600">Global threat feeds</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-secondary-900 font-medium">Threat Detection</div>
            <div className="text-sm text-secondary-600">AI-powered analytics</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">&lt;5min</div>
            <div className="text-secondary-900 font-medium">Response Time</div>
            <div className="text-sm text-secondary-600">Automated containment</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-secondary-200">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">0.1%</div>
            <div className="text-secondary-900 font-medium">False Positives</div>
            <div className="text-sm text-secondary-600">Precision analytics</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg p-2 shadow-lg border border-secondary-200">
            <button
              onClick={() => setActiveTab('threats')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'threats'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-600 hover:text-red-600'
              }`}
            >
              Threat Categories
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'sources'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-600 hover:text-red-600'
              }`}
            >
              Intelligence Sources
            </button>
            <button
              onClick={() => setActiveTab('detection')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'detection'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-600 hover:text-red-600'
              }`}
            >
              Detection Capabilities
            </button>
          </div>
        </motion.div>

        {/* Threat Categories Tab */}
        {activeTab === 'threats' && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Category Selector */}
            <div className="lg:col-span-4">
              <div className="space-y-3">
                {threatCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-red-50 border-red-500 text-red-900'
                        : 'bg-white border-secondary-200 text-gray-700 hover:border-red-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          selectedCategory === category.id ? 'bg-red-500' : 'bg-gray-100'
                        }`}>
                          <category.icon className={`w-5 h-5 ${
                            selectedCategory === category.id ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{category.name}</div>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(category.severity)}`}>
                        {category.severity}
                      </div>
                    </div>
                    <p className="text-sm opacity-75 line-clamp-2">{category.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Category Details */}
            <div className="lg:col-span-8">
              {selectedThreatCategory && (
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                    <div className="flex items-center">
                      <selectedThreatCategory.icon className="w-8 h-8 mr-3" />
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedThreatCategory.name}</h3>
                        <p className="text-red-100">{selectedThreatCategory.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Active Threats */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-secondary-900 mb-4">Active Threats</h4>
                      <div className="space-y-4">
                        {selectedThreatCategory.threats.map((threat, index) => (
                          <div key={index} className="bg-secondary-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-secondary-900">{threat.name}</h5>
                              <span className={`text-sm font-medium ${getRiskColor(threat.riskLevel)}`}>
                                {threat.riskLevel} Risk
                              </span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-secondary-600">Origin: </span>
                                <span className="text-secondary-900 font-medium">{threat.origin}</span>
                              </div>
                              <div>
                                <span className="text-secondary-600">Last Seen: </span>
                                <span className="text-secondary-900 font-medium">{threat.lastSeen}</span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="text-secondary-600 text-sm">Primary Targets: </span>
                              <span className="text-secondary-900 text-sm font-medium">{threat.targets}</span>
                            </div>
                            <div className="mt-2">
                              <span className="text-secondary-600 text-sm">Techniques: </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {threat.techniques.map((technique, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-white text-xs rounded-md text-secondary-700">
                                    {technique}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Countermeasures */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-4">Implemented Countermeasures</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedThreatCategory.countermeasures.map((measure, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm text-secondary-600">{measure}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Intelligence Sources Tab */}
        {activeTab === 'sources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {intelligenceSources.map((source, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-secondary-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{source.name}</h3>
                <p className="text-secondary-600 mb-4">{source.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-secondary-600">Coverage:</span>
                    <span className="text-sm font-medium text-secondary-900">{source.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-secondary-600">Active Feeds:</span>
                    <span className="text-sm font-medium text-red-600">{source.feeds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-secondary-600">Update Frequency:</span>
                    <span className="text-sm font-medium text-secondary-900">{source.updateFrequency}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Detection Capabilities Tab */}
        {activeTab === 'detection' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {detectionCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-secondary-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{capability.name}</h3>
                <p className="text-secondary-600 mb-4">{capability.description}</p>
                <div className="space-y-3">
                  {Object.entries(capability).filter(([key]) => key !== 'name' && key !== 'description').map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-sm text-secondary-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                      </span>
                      <span className="text-sm font-medium text-red-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-secondary-200 text-center"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
            Stay Ahead of Emerging Threats
          </h3>
          <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
            Our comprehensive threat intelligence platform provides real-time visibility into the global 
            threat landscape, enabling proactive defense against sophisticated adversaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Request Threat Briefing
            </button>
            <button className="btn border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
              Download Threat Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}