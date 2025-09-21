'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EyeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  FireIcon,
  TruckIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const fmvUseCases = [
  {
    title: 'Intelligence, Surveillance & Reconnaissance (ISR)',
    description: 'Real-time intelligence gathering with multi-platform FMV streams, automated target detection, and comprehensive situation awareness.',
    icon: EyeIcon,
    applications: [
      'Multi-platform UAV operations',
      'Real-time target tracking',
      'Pattern-of-life analysis',
      'Intelligence product generation',
      'Cross-cueing with other sensors'
    ],
    benefits: [
      'Reduced analyst workload through automation',
      'Faster intelligence cycle times',
      'Improved target identification accuracy',
      'Enhanced multi-source correlation'
    ],
    metrics: {
      'Target Detection': '95%+ accuracy',
      'Processing Latency': '< 100ms',
      'Concurrent Platforms': '50+ UAVs',
      'Coverage Area': '10,000+ km²'
    },
    scenarios: [
      'Counter-terrorism operations',
      'Border surveillance missions',
      'Maritime domain awareness',
      'Force protection activities'
    ]
  },
  {
    title: 'Border Security & Monitoring',
    description: 'Comprehensive border surveillance with automated intrusion detection, vehicle tracking, and coordinated response capabilities.',
    icon: ShieldCheckIcon,
    applications: [
      'Automated border monitoring',
      'Vehicle and personnel detection',
      'Intrusion alert systems',
      'Coordinated response dispatch',
      'Evidence collection and archiving'
    ],
    benefits: [
      '24/7 autonomous monitoring capability',
      'Reduced false alarm rates',
      'Faster response times to incidents',
      'Comprehensive evidence documentation'
    ],
    metrics: {
      'Border Coverage': '2,000+ miles',
      'Detection Rate': '98% accuracy',
      'Response Time': '< 5 minutes',
      'False Alarms': '< 2%'
    },
    scenarios: [
      'Illegal crossing detection',
      'Drug smuggling interdiction',
      'Human trafficking prevention',
      'Critical infrastructure protection'
    ]
  },
  {
    title: 'Maritime Surveillance Operations',
    description: 'Comprehensive maritime domain awareness with vessel tracking, fishing monitoring, and maritime law enforcement support.',
    icon: GlobeAltIcon,
    applications: [
      'Vessel identification and tracking',
      'Illegal fishing detection',
      'Search and rescue operations',
      'Environmental monitoring',
      'Port security surveillance'
    ],
    benefits: [
      'Enhanced maritime situational awareness',
      'Improved response coordination',
      'Reduced illegal fishing activities',
      'Better resource allocation'
    ],
    metrics: {
      'Ocean Coverage': '3M+ km²',
      'Vessel Tracking': '50,000+ daily',
      'Detection Range': '200+ nautical miles',
      'Response Coordination': '< 10 minutes'
    },
    scenarios: [
      'Illegal, unreported, unregulated fishing',
      'Maritime search and rescue',
      'Piracy and maritime crime',
      'Environmental protection'
    ]
  },
  {
    title: 'Emergency Response & Disaster Management',
    description: 'Rapid disaster response support with damage assessment, resource coordination, and real-time situational awareness.',
    icon: FireIcon,
    applications: [
      'Disaster damage assessment',
      'Search and rescue coordination',
      'Resource deployment optimization',
      'Evacuation route monitoring',
      'Recovery progress tracking'
    ],
    benefits: [
      'Faster emergency response deployment',
      'More accurate damage assessments',
      'Improved coordination between agencies',
      'Better resource allocation decisions'
    ],
    metrics: {
      'Response Time': '< 2 hours',
      'Damage Assessment': '10,000+ structures',
      'Agency Coordination': '20+ departments',
      'Coverage Efficiency': '300% improvement'
    },
    scenarios: [
      'Natural disaster response',
      'Wildfire monitoring and suppression',
      'Flood management operations',
      'Mass casualty incident response'
    ]
  },
  {
    title: 'Critical Infrastructure Protection',
    description: 'Advanced surveillance and monitoring of critical infrastructure with threat detection, perimeter security, and incident response.',
    icon: BuildingOfficeIcon,
    applications: [
      'Perimeter security monitoring',
      'Threat detection and assessment',
      'Incident response coordination',
      'Access control verification',
      'Security audit documentation'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced security incidents',
      'Faster threat response times',
      'Comprehensive security documentation'
    ],
    metrics: {
      'Facilities Protected': '500+ locations',
      'Threat Detection': '99.5% accuracy',
      'Response Time': '< 30 seconds',
      'Security Incidents': '80% reduction'
    },
    scenarios: [
      'Power plant security',
      'Airport perimeter monitoring',
      'Government facility protection',
      'Industrial site surveillance'
    ]
  },
  {
    title: 'Transportation & Traffic Monitoring',
    description: 'Intelligent transportation system support with traffic flow analysis, incident detection, and traffic management optimization.',
    icon: TruckIcon,
    applications: [
      'Traffic flow analysis',
      'Incident detection and response',
      'Route optimization',
      'Vehicle counting and classification',
      'Traffic pattern analysis'
    ],
    benefits: [
      'Reduced traffic congestion',
      'Faster incident response',
      'Improved traffic flow efficiency',
      'Better transportation planning'
    ],
    metrics: {
      'Road Network': '5,000+ miles',
      'Incident Detection': '< 60 seconds',
      'Traffic Optimization': '25% improvement',
      'Response Coordination': '< 3 minutes'
    },
    scenarios: [
      'Highway traffic management',
      'Accident detection and response',
      'Special event traffic control',
      'Commercial vehicle monitoring'
    ]
  },
  {
    title: 'Training & Simulation',
    description: 'Advanced training systems with recorded FMV scenarios, simulation environments, and performance assessment capabilities.',
    icon: AcademicCapIcon,
    applications: [
      'Scenario-based training',
      'Performance assessment',
      'Simulation environment creation',
      'Skills development tracking',
      'Training content management'
    ],
    benefits: [
      'Improved training effectiveness',
      'Reduced training costs',
      'Standardized training scenarios',
      'Objective performance measurement'
    ],
    metrics: {
      'Training Scenarios': '1,000+ available',
      'Performance Tracking': 'Real-time metrics',
      'Cost Reduction': '60% savings',
      'Training Efficiency': '40% improvement'
    },
    scenarios: [
      'Military operator training',
      'Emergency responder education',
      'Security personnel certification',
      'Equipment operator training'
    ]
  },
  {
    title: 'Search & Rescue Operations',
    description: 'Coordinated search and rescue missions with automated search pattern optimization, target detection, and rescue coordination.',
    icon: HeartIcon,
    applications: [
      'Search pattern optimization',
      'Missing person detection',
      'Rescue coordination',
      'Resource deployment',
      'Mission progress tracking'
    ],
    benefits: [
      'Faster victim location',
      'More efficient search patterns',
      'Better resource coordination',
      'Improved rescue success rates'
    ],
    metrics: {
      'Search Efficiency': '300% improvement',
      'Detection Accuracy': '92% success rate',
      'Response Time': '< 1 hour',
      'Resource Coordination': '15+ agencies'
    },
    scenarios: [
      'Mountain rescue operations',
      'Maritime search and rescue',
      'Urban disaster victim location',
      'Aircraft accident response'
    ]
  }
];

export default function FMVUseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="fmv-use-cases" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            FMV <span className="text-gradient">Use Cases</span> & Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how OXICLOUD FMV processing capabilities transform operations 
            across diverse industries and mission types. From intelligence gathering 
            to emergency response, our platform delivers mission-critical results.
          </p>
        </motion.div>

        <div className="space-y-12">
          {fmvUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Applications & Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-4">Key Applications</h4>
                    <div className="space-y-3">
                      {useCase.applications.map((app) => (
                        <div key={app} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Scenarios</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.scenarios.map((scenario) => (
                      <span
                        key={scenario}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {scenario}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Performance Metrics</h4>
                  <div className="space-y-6">
                    {Object.entries(useCase.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.1) + (metricIndex * 0.1) + 0.3 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                      >
                        <div className="text-sm font-medium text-gray-900">{key}</div>
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Case Study Link */}
                  <div className="mt-8 text-center">
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Implement FMV Solutions?
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how OXICLOUD FMV processing can transform your operations. 
              Our team of experts will work with you to design and implement 
              the perfect FMV solution for your specific use case.
            </p>
            
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm text-blue-200">Use Case Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-blue-200">Application Scenarios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%+</div>
                <div className="text-sm text-blue-200">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-sm text-blue-200">Efficiency Improvement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-blue-600 hover:bg-blue-50 focus:ring-white px-8 py-3">
                Discuss Your Use Case
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download Use Case Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}