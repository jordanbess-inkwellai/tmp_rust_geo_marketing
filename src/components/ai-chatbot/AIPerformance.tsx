'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  TrophyIcon,
  CpuChipIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const performanceMetrics = [
  {
    category: 'Response Speed',
    icon: BoltIcon,
    color: 'emerald',
    metrics: [
      { label: 'Average Response Time', value: '0.8s', benchmark: 'Industry: 2.1s', improvement: '+162% faster' },
      { label: 'Query Processing', value: '0.3s', benchmark: 'Industry: 0.9s', improvement: '+200% faster' },
      { label: 'Cold Start Time', value: '1.2s', benchmark: 'Industry: 4.5s', improvement: '+275% faster' },
      { label: 'Peak Load Response', value: '1.1s', benchmark: 'Industry: 3.2s', improvement: '+191% faster' }
    ]
  },
  {
    category: 'Accuracy & Quality',
    icon: CheckCircleIcon,
    color: 'blue',
    metrics: [
      { label: 'Overall Accuracy', value: '94.2%', benchmark: 'Industry: 81.5%', improvement: '+15.6% better' },
      { label: 'Spatial Query Accuracy', value: '96.8%', benchmark: 'Industry: 78.3%', improvement: '+23.6% better' },
      { label: 'Entity Recognition', value: '93.1%', benchmark: 'Industry: 85.7%', improvement: '+8.6% better' },
      { label: 'Contextual Understanding', value: '91.4%', benchmark: 'Industry: 76.2%', improvement: '+19.9% better' }
    ]
  },
  {
    category: 'Scalability & Throughput',
    icon: CpuChipIcon,
    color: 'purple',
    metrics: [
      { label: 'Concurrent Users', value: '50,000+', benchmark: 'Industry: 12,000', improvement: '+317% higher' },
      { label: 'Queries per Second', value: '2,500', benchmark: 'Industry: 890', improvement: '+181% higher' },
      { label: 'Data Processing Rate', value: '15 GB/s', benchmark: 'Industry: 4.2 GB/s', improvement: '+257% faster' },
      { label: 'Auto-scaling Response', value: '45s', benchmark: 'Industry: 180s', improvement: '+300% faster' }
    ]
  }
];

const benchmarkComparisons = [
  {
    metric: 'Natural Language Understanding',
    tmgScore: 94.2,
    competitors: [
      { name: 'Amazon Comprehend', score: 87.3 },
      { name: 'Google Cloud NL', score: 89.1 },
      { name: 'Azure Text Analytics', score: 85.7 }
    ]
  },
  {
    metric: 'Geospatial Query Processing',
    tmgScore: 96.8,
    competitors: [
      { name: 'Esri ArcGIS', score: 82.4 },
      { name: 'Google Earth Engine', score: 79.6 },
      { name: 'MapBox Tilesets', score: 76.8 }
    ]
  },
  {
    metric: 'Response Time (seconds)',
    tmgScore: 0.8,
    competitors: [
      { name: 'ChatGPT Plugins', score: 2.3 },
      { name: 'Microsoft Copilot', score: 1.9 },
      { name: 'Claude API', score: 1.4 }
    ],
    reversed: true // Lower is better for response time
  }
];

const testingMethodology = [
  {
    icon: ChartBarIcon,
    title: 'Comprehensive Testing',
    description: 'Rigorous evaluation across diverse datasets and scenarios',
    details: [
      '10,000+ real-world query samples',
      'Multi-domain spatial datasets',
      'Stress testing with 100K+ concurrent users',
      'Cross-validation with industry benchmarks'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Continuous Monitoring',
    description: '24/7 performance tracking and optimization',
    details: [
      'Real-time performance dashboards',
      'Automated anomaly detection',
      'Performance regression testing',
      'SLA compliance monitoring'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'Industry Recognition',
    description: 'Awards and certifications from leading organizations',
    details: [
      'Best AI Innovation Award 2024',
      'SOC 2 Type II Certified',
      'ISO 27001 Compliant',
      'GDPR & CCPA Compliant'
    ]
  }
];

const performanceCharts = [
  {
    title: 'Query Response Time Distribution',
    data: [
      { range: '< 0.5s', percentage: 45 },
      { range: '0.5-1.0s', percentage: 38 },
      { range: '1.0-1.5s', percentage: 12 },
      { range: '> 1.5s', percentage: 5 }
    ]
  },
  {
    title: 'Accuracy by Query Type',
    data: [
      { type: 'Proximity queries', percentage: 97.2 },
      { type: 'Spatial analysis', percentage: 94.8 },
      { type: 'Temporal queries', percentage: 92.1 },
      { type: 'Complex multi-step', percentage: 89.6 }
    ]
  }
];

export default function AIPerformance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section id="ai-performance" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Performance <span className="text-gradient">&amp; Accuracy</span> Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Rigorous testing and continuous optimization ensure industry-leading performance 
            across speed, accuracy, and scalability. See how we compare to the competition.
          </p>
        </motion.div>

        {/* Performance Metrics Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {performanceMetrics.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg border overflow-hidden"
            >
              <div className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 text-white p-6`}>
                <div className="flex items-center">
                  <category.icon className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-900">{metric.label}</span>
                        <span className={`text-2xl font-bold text-${category.color}-600`}>
                          {metric.value}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>{metric.benchmark}</div>
                        <div className={`text-${category.color}-600 font-medium`}>
                          {metric.improvement}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benchmark Comparisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Competitive Benchmarks</h3>
          <div className="space-y-8">
            {benchmarkComparisons.map((comparison, index) => (
              <motion.div
                key={comparison.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border"
              >
                <h4 className="text-lg font-semibold mb-4">{comparison.metric}</h4>
                <div className="space-y-3">
                  {/* TMG Score */}
                  <div className="flex items-center">
                    <div className="w-32 text-sm font-medium text-emerald-600">TMG Platform</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-emerald-100 rounded-full h-4 relative overflow-hidden">
                        <div 
                          className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: comparison.reversed 
                              ? `${100 - (comparison.tmgScore / Math.max(...comparison.competitors.map(c => c.score), comparison.tmgScore) * 100)}%`
                              : `${(comparison.tmgScore / 100) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm font-bold text-emerald-600">
                      {comparison.tmgScore}{comparison.reversed ? 's' : '%'}
                    </div>
                  </div>

                  {/* Competitor Scores */}
                  {comparison.competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className="flex items-center">
                      <div className="w-32 text-sm text-gray-600">{competitor.name}</div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-100 rounded-full h-4 relative overflow-hidden">
                          <div 
                            className="bg-gray-400 h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: comparison.reversed 
                                ? `${100 - (competitor.score / Math.max(...comparison.competitors.map(c => c.score), comparison.tmgScore) * 100)}%`
                                : `${(competitor.score / 100) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-16 text-right text-sm text-gray-600">
                        {competitor.score}{comparison.reversed ? 's' : '%'}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {performanceCharts.map((chart, index) => (
            <div key={chart.title} className="bg-white rounded-xl p-6 shadow-lg border">
              <h4 className="text-lg font-semibold mb-6 text-center">{chart.title}</h4>
              <div className="space-y-4">
                {chart.data.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <div className="w-24 text-sm text-gray-600">
                      {'range' in item ? item.range : item.type}
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-100 rounded-full h-3 relative overflow-hidden">
                        <motion.div 
                          className="bg-emerald-500 h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.7 + itemIndex * 0.1 }}
                        />
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm font-medium">
                      {item.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testing Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Testing &amp; Validation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testingMethodology.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border text-center"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{method.title}</h4>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="text-sm text-left space-y-2">
                  {method.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-semibold mb-4">Experience the Performance Difference</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See our industry-leading performance in action. Try our interactive demo 
              or schedule a personalized benchmark comparison with your current solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Try Interactive Demo
              </button>
              <button className="btn bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                Schedule Benchmark Test
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}