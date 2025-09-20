'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRightIcon, ClockIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Joint Task Force Operations Center',
    organization: 'U.S. Department of Defense',
    challenge: 'Legacy systems could not support real-time multi-domain operations with coalition partners',
    solution: 'Deployed unified C2 platform with real-time collaboration, standards-based data sharing, and secure multi-tenant architecture',
    results: [
      '75% reduction in decision cycle time',
      '10x improvement in data sharing speed',
      '90% reduction in integration costs',
      'Seamless coalition partner integration'
    ],
    timeline: '6 months deployment',
    users: '500+ analysts',
    classification: 'SECRET',
    testimonial: 'This platform transformed how we conduct multi-domain operations. The real-time collaboration capabilities are game-changing.',
    role: 'Operations Director',
    metrics: {
      performanceImprovement: '75%',
      costSavings: '90%',
      deploymentTime: '6 months',
    }
  },
  {
    title: 'Border Security Intelligence Fusion',
    organization: 'U.S. Customs and Border Protection',
    challenge: 'Disparate systems prevented effective intelligence fusion for border security operations',
    solution: 'Integrated FMV analysis, sensor data fusion, and predictive analytics in unified platform',
    results: [
      '60% increase in threat detection',
      '40% reduction in false positives',
      'Real-time multi-sensor fusion',
      'Automated threat assessment'
    ],
    timeline: '4 months deployment',
    users: '200+ agents',
    classification: 'CONFIDENTIAL',
    testimonial: 'The AI-powered threat detection and real-time sensor fusion capabilities have significantly enhanced our operational effectiveness.',
    role: 'Intelligence Analyst',
    metrics: {
      performanceImprovement: '60%',
      costSavings: '50%',
      deploymentTime: '4 months',
    }
  },
  {
    title: 'Climate Intelligence for Mission Planning',
    organization: 'U.S. Air Force Weather Agency',
    challenge: 'Climate data processing and mission impact analysis took days instead of hours',
    solution: 'Deployed real-time climate data processing with automated mission impact assessment',
    results: [
      '95% reduction in processing time',
      'Real-time weather impact modeling',
      'Automated mission risk assessment',
      'Improved forecast accuracy'
    ],
    timeline: '3 months deployment',
    users: '150+ meteorologists',
    classification: 'UNCLASSIFIED',
    testimonial: 'The speed of climate data processing and mission impact analysis has revolutionized our weather support capabilities.',
    role: 'Chief Meteorologist',
    metrics: {
      performanceImprovement: '95%',
      costSavings: '70%',
      deploymentTime: '3 months',
    }
  },
];

const metrics = [
  { label: 'Average Performance Improvement', value: '77%', icon: TrophyIcon },
  { label: 'Average Cost Savings', value: '70%', icon: TrophyIcon },
  { label: 'Average Deployment Time', value: '4.3 months', icon: ClockIcon },
  { label: 'Total Users Supported', value: '850+', icon: UserGroupIcon },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getClassificationColor = (classification: string) => {
    if (classification === 'SECRET') return 'bg-red-500';
    if (classification === 'CONFIDENTIAL') return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <section id="case-studies" className="section">
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
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our solutions are deployed in mission-critical environments across defense and intelligence
            organizations. Here are some of our success stories.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center bg-white rounded-xl p-6 shadow-lg border border-secondary-200"
            >
              <metric.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
              <div className="text-sm text-secondary-600">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-secondary-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Content */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-secondary-600">
                        <span>{study.organization}</span>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium text-white ${getClassificationColor(study.classification)}`}>
                          {study.classification}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">Challenge</h4>
                    <p className="text-secondary-600">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">Solution</h4>
                    <p className="text-secondary-600">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3">Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center text-sm text-secondary-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-secondary-50 rounded-lg p-6">
                    <p className="text-secondary-700 italic mb-3">"{study.testimonial}"</p>
                    <div className="text-sm text-secondary-500">— {study.role}</div>
                  </div>
                </div>

                {/* Metrics Sidebar */}
                <div className="bg-secondary-50 p-8 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Metrics</h4>

                    <div className="space-y-4">
                      <div className="text-center bg-white rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary-600">
                          {study.metrics.performanceImprovement}
                        </div>
                        <div className="text-xs text-secondary-600">Performance Improvement</div>
                      </div>

                      <div className="text-center bg-white rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">
                          {study.metrics.costSavings}
                        </div>
                        <div className="text-xs text-secondary-600">Cost Savings</div>
                      </div>

                      <div className="text-center bg-white rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">
                          {study.metrics.deploymentTime}
                        </div>
                        <div className="text-xs text-secondary-600">Deployment Time</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-secondary-200">
                    <div className="flex items-center text-sm text-secondary-600 mb-2">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {study.timeline}
                    </div>
                    <div className="flex items-center text-sm text-secondary-600">
                      <UserGroupIcon className="w-4 h-4 mr-2" />
                      {study.users}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Our proven track record demonstrates consistent success in defense and intelligence
              environments. Let us help you transform your operations.
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white group">
              Discuss Your Requirements
              <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}