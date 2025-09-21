'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const sellingPoints = [
  {
    title: 'Dramatically Lower Total Cost of Ownership',
    description: 'Save 60-80% compared to traditional defense contractor solutions with transparent pricing and no per-user licensing fees.',
    icon: CurrencyDollarIcon,
    advantages: [
      'No per-user licensing fees (vs. $10K-$50K per seat)',
      'Transparent, predictable pricing model',
      '24-hour deployment vs. 6-12 months',
      'Reduced integration and maintenance costs'
    ],
    competitorIssues: [
      'Hidden costs and complex licensing',
      'Expensive professional services',
      'Long deployment timeframes',
      'Vendor lock-in penalties'
    ],
    metrics: [
      { label: 'Cost Savings', value: '60-80%', desc: 'vs. traditional solutions' },
      { label: 'Deployment Time', value: '24 hours', desc: 'vs. 6-12 months' },
      { label: 'ROI Timeline', value: '3-6 months', desc: 'typical payback' },
    ],
  },
  {
    title: 'Rapid Innovation & Technology Leadership',
    description: 'Built with cutting-edge Rust technology and modern architecture, delivering performance and capabilities traditional vendors cannot match.',
    icon: RocketLaunchIcon,
    advantages: [
      'Rust-based architecture for unmatched performance',
      'Cloud-native, container-based deployment',
      'AI/ML integrated from the ground up',
      'Continuous innovation and updates'
    ],
    competitorIssues: [
      'Legacy codebases and technical debt',
      'Slow innovation cycles',
      'Monolithic architectures',
      'Limited AI/ML capabilities'
    ],
    metrics: [
      { label: 'Performance', value: '10x faster', desc: 'tile rendering' },
      { label: 'Scalability', value: '100K+ users', desc: 'concurrent support' },
      { label: 'Update Frequency', value: 'Monthly', desc: 'vs. yearly' },
    ],
  },
  {
    title: 'Open Standards & Interoperability',
    description: 'Full OGC compliance and open standards ensure seamless integration with existing systems and eliminate vendor lock-in.',
    icon: GlobeAltIcon,
    advantages: [
      'Full OGC API compliance (Features, Processes, Connected Systems)',
      'Standard data formats and protocols',
      'API-first architecture',
      'Easy integration with existing C2 systems'
    ],
    competitorIssues: [
      'Proprietary formats and protocols',
      'Limited integration capabilities',
      'Vendor lock-in strategies',
      'Expensive custom integrations'
    ],
    metrics: [
      { label: 'Standards Support', value: '15+ formats', desc: 'native support' },
      { label: 'Integration Time', value: '1-2 weeks', desc: 'vs. 3-6 months' },
      { label: 'API Coverage', value: '100%', desc: 'functionality accessible' },
    ],
  },
  {
    title: 'Security-First Design',
    description: 'Built from the ground up with multi-level security, supporting the most demanding classified environments and compliance requirements.',
    icon: ShieldCheckIcon,
    advantages: [
      'Multi-level security (MLS) architecture',
      'TS/SCI environment support out-of-the-box',
      'NIST Cybersecurity Framework compliance',
      'Automated security monitoring and auditing'
    ],
    competitorIssues: [
      'Security bolted on as afterthought',
      'Limited classification support',
      'Expensive security add-ons',
      'Complex compliance processes'
    ],
    metrics: [
      { label: 'Security Levels', value: 'Up to TS/SCI', desc: 'native support' },
      { label: 'Compliance', value: 'FISMA Ready', desc: 'out-of-the-box' },
      { label: 'Audit Trail', value: '100%', desc: 'comprehensive logging' },
    ],
  },
  {
    title: 'Agile Development & Support',
    description: 'Small, agile team delivers rapid customization and responsive support, unlike large contractor bureaucracies.',
    icon: BoltIcon,
    advantages: [
      'Direct access to development team',
      'Rapid customization and feature development',
      'Agile development methodology',
      'Responsive support and issue resolution'
    ],
    competitorIssues: [
      'Layers of bureaucracy',
      'Slow change request processes',
      'Limited customization options',
      'Expensive change orders'
    ],
    metrics: [
      { label: 'Response Time', value: '< 4 hours', desc: 'critical issues' },
      { label: 'Customization', value: '2-4 weeks', desc: 'typical delivery' },
      { label: 'Support Cost', value: '50% less', desc: 'vs. contractors' },
    ],
  },
  {
    title: 'Mission-Focused Team',
    description: 'Our team includes intelligence professionals who understand operational requirements and build solutions that actually work in the field.',
    icon: UserGroupIcon,
    advantages: [
      'Team with intelligence community background',
      'Deep understanding of GEOINT workflows',
      'Operational experience in defense/intel',
      'Mission-focused development approach'
    ],
    competitorIssues: [
      'Generic commercial solutions',
      'Limited operational understanding',
      'Feature-heavy, usability-poor interfaces',
      'Misaligned with actual user needs'
    ],
    metrics: [
      { label: 'Intel Experience', value: '25+ years', desc: 'combined team' },
      { label: 'User Satisfaction', value: '95%+', desc: 'approval rating' },
      { label: 'Adoption Rate', value: '< 1 week', desc: 'typical onboarding' },
    ],
  },
];

export default function MilitarySellingPoints() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="military-selling-points" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Why Choose <span className="text-gradient">OXICLOUD</span> Over Traditional Contractors
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            While defense contractors deliver yesterday's technology at tomorrow's prices, 
            OXICLOUD provides cutting-edge capabilities with transparent pricing and rapid deployment. 
            Here's why intelligence professionals are making the switch.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sellingPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="feature-icon mr-4">
                    <point.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold">{point.title}</h3>
                </div>

                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  {point.description}
                </p>

                {/* Advantages vs Issues */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* OXICLOUD Advantages */}
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      OXICLOUD Advantages
                    </h4>
                    <div className="space-y-3">
                      {point.advantages.map((advantage) => (
                        <div key={advantage} className="flex items-start text-sm text-secondary-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {advantage}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competitor Issues */}
                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                      Traditional Contractor Issues
                    </h4>
                    <div className="space-y-3">
                      {point.competitorIssues.map((issue) => (
                        <div key={issue} className="flex items-start text-sm text-secondary-700">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Key Metrics</h4>
                  <div className="space-y-6">
                    {point.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (metricIndex * 0.1) + 0.3 }}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div>
                          <div className="text-sm font-medium text-secondary-600">{metric.label}</div>
                          <div className="text-xs text-secondary-500">{metric.desc}</div>
                        </div>
                        <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Break Free from Contractor Limitations?
            </h3>
            <p className="text-primary-100 mb-8 max-w-3xl mx-auto text-lg">
              Join the growing number of defense and intelligence organizations who have discovered 
              the OXICLOUD advantage. Better technology, lower costs, faster deployment, 
              and responsive support from a team that understands your mission.
            </p>
            
            {/* Key Stats Summary */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">60-80%</div>
                <div className="text-sm text-primary-200">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24 Hours</div>
                <div className="text-sm text-primary-200">Deployment Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10x</div>
                <div className="text-sm text-primary-200">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-primary-200">API Coverage</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Schedule Competitive Analysis
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download Cost Comparison
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}