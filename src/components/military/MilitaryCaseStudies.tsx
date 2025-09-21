'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EyeIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  FireIcon,
  MapIcon,
  BuildingOffice2Icon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Multi-Domain Operations Center',
    organization: 'Joint Task Force Command',
    classification: 'SECRET//REL',
    description: 'Unified operational picture across air, land, sea, space, and cyber domains with real-time C2 integration.',
    challenge: 'Command needed to integrate disparate intelligence feeds from multiple domains into a single operational picture for complex joint operations.',
    solution: 'OXICLOUD Platform provided Multi-INT data fusion, real-time FMV processing, and C2 system integration with CoT messaging.',
    results: [
      'Reduced decision-making time by 70%',
      'Integrated 15+ intelligence sources',
      'Supported 2,500+ concurrent users',
      'Achieved 99.9% system availability'
    ],
    technologies: ['Multi-INT Fusion', 'FMV/KLV Processing', 'C2 Integration', 'Real-time Analytics'],
    icon: CommandLineIcon,
    metrics: {
      users: '2,500+',
      uptime: '99.9%',
      sources: '15+',
      improvement: '70%'
    },
  },
  {
    title: 'Counter-Terrorism Intelligence Fusion',
    organization: 'Special Operations Task Force',
    classification: 'TS//SCI',
    description: 'Advanced pattern-of-life analysis and threat detection system for counter-terrorism operations.',
    challenge: 'Analysts needed to process massive amounts of GEOINT, SIGINT, and HUMINT data to identify terrorist patterns and predict threats.',
    solution: 'AI-powered analytics engine with automated pattern recognition, multi-temporal analysis, and predictive modeling capabilities.',
    results: [
      'Identified 40% more threat patterns',
      'Reduced analysis time from days to hours',
      'Improved prediction accuracy by 85%',
      'Enabled proactive threat mitigation'
    ],
    technologies: ['AI Pattern Recognition', 'Multi-temporal Analysis', 'Predictive Analytics', 'Automated Reporting'],
    icon: EyeIcon,
    metrics: {
      patterns: '40%',
      timeReduction: '90%',
      accuracy: '85%',
      threats: '100+'
    },
  },
  {
    title: 'Border Security Operations',
    organization: 'Department of Homeland Security',
    classification: 'CONFIDENTIAL//FOUO',
    description: 'Comprehensive border monitoring system with integrated sensor networks and real-time threat assessment.',
    challenge: 'Secure 2,000+ mile border with limited personnel using integrated ground sensors, aerial surveillance, and intelligence feeds.',
    solution: 'IoT sensor integration, real-time streaming analytics, automated threat detection, and mobile command capabilities.',
    results: [
      'Covered 2,000+ miles of border',
      'Integrated 500+ sensors and cameras',
      'Reduced response time by 60%',
      'Increased threat detection by 45%'
    ],
    technologies: ['IoT Integration', 'Streaming Analytics', 'Mobile Command', 'Automated Alerts'],
    icon: ShieldCheckIcon,
    metrics: {
      coverage: '2,000+',
      sensors: '500+',
      response: '60%',
      detection: '45%'
    },
  },
  {
    title: 'Disaster Response Coordination',
    organization: 'FEMA Regional Operations',
    classification: 'UNCLASSIFIED//FOUO',
    description: 'Rapid deployment disaster response system with real-time damage assessment and resource coordination.',
    challenge: 'Coordinate multi-agency disaster response across affected regions with real-time damage assessment and resource allocation.',
    solution: 'Tactical edge deployment, satellite imagery analysis, damage assessment AI, and inter-agency coordination platform.',
    results: [
      'Deployed in < 4 hours',
      'Assessed 10,000+ structures',
      'Coordinated 20+ agencies',
      'Reduced response time by 50%'
    ],
    technologies: ['Tactical Edge', 'Damage Assessment AI', 'Satellite Analysis', 'Multi-Agency Coordination'],
    icon: FireIcon,
    metrics: {
      deployment: '< 4hrs',
      structures: '10,000+',
      agencies: '20+',
      improvement: '50%'
    },
  },
  {
    title: 'Maritime Domain Awareness',
    organization: 'U.S. Coast Guard',
    classification: 'SECRET//REL',
    description: 'Comprehensive maritime surveillance system with vessel tracking, threat assessment, and interdiction support.',
    challenge: 'Monitor vast maritime areas for illegal activities including drug trafficking, human smuggling, and illegal fishing.',
    solution: 'Integrated AIS tracking, satellite surveillance, pattern analysis, and predictive routing for optimal patrol deployment.',
    results: [
      'Monitored 3 million sq. miles',
      'Tracked 50,000+ vessels daily',
      'Increased interdiction success by 75%',
      'Reduced fuel costs by 30%'
    ],
    technologies: ['AIS Integration', 'Vessel Tracking', 'Pattern Analysis', 'Route Optimization'],
    icon: GlobeAltIcon,
    metrics: {
      coverage: '3M sq mi',
      vessels: '50,000+',
      success: '75%',
      savings: '30%'
    },
  },
  {
    title: 'Critical Infrastructure Protection',
    organization: 'Defense Industrial Base',
    classification: 'CONFIDENTIAL',
    description: 'Advanced threat monitoring and vulnerability assessment system for critical defense infrastructure.',
    challenge: 'Protect critical defense manufacturing facilities from physical and cyber threats with integrated monitoring.',
    solution: 'Multi-sensor integration, AI threat detection, vulnerability mapping, and automated response coordination.',
    results: [
      'Protected 100+ facilities',
      'Prevented 25+ security incidents',
      'Reduced false alarms by 80%',
      'Improved threat response by 65%'
    ],
    technologies: ['Multi-sensor Fusion', 'Threat Detection AI', 'Vulnerability Assessment', 'Response Automation'],
    icon: BuildingOffice2Icon,
    metrics: {
      facilities: '100+',
      incidents: '25+',
      accuracy: '80%',
      response: '65%'
    },
  },
];

export default function MilitaryCaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification.includes('TS//SCI')) return 'bg-red-500/10 text-red-400 border-red-500/30';
    if (classification.includes('SECRET')) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    if (classification.includes('CONFIDENTIAL')) return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    return 'bg-green-500/10 text-green-400 border-green-500/30';
  };

  return (
    <section id="military-case-studies" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Proven <span className="text-gradient">Mission Success</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            Real-world deployments demonstrating OXICLOUD Platform's effectiveness across 
            defense, intelligence, and homeland security operations. Each case study represents 
            measurable operational improvements and mission success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <study.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{study.title}</h3>
                      <div className="text-primary-200 text-sm">{study.organization}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border bg-white/20 text-white border-white/30`}>
                    {study.classification}
                  </div>
                </div>
                <p className="text-primary-100 leading-relaxed">{study.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                    CHALLENGE
                  </h4>
                  <p className="text-sm text-secondary-700 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    SOLUTION
                  </h4>
                  <p className="text-sm text-secondary-700 leading-relaxed mb-3">{study.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    RESULTS
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-start text-sm text-secondary-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3 text-center">KEY METRICS</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary-600 mb-1">{value}</div>
                        <div className="text-xs text-secondary-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-secondary-300 mb-8 max-w-3xl mx-auto">
              These case studies represent just a fraction of OXICLOUD Platform deployments 
              across defense, intelligence, and homeland security operations. Contact us to 
              discuss how we can support your specific mission requirements.
            </p>
            
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-sm text-secondary-300">Mission Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-sm text-secondary-300">Concurrent Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-secondary-300">System Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm text-secondary-300">Avg. Performance Gain</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Discuss Your Mission
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}