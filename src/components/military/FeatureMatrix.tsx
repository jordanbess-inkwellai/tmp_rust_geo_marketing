'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const competitors = [
  { name: 'OXICLOUD', color: 'text-primary-600', bgColor: 'bg-primary-50' },
  { name: 'Esri Defense', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'BAE GEOSPATIAL', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'Raytheon BBN', color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'Palantir', color: 'text-green-600', bgColor: 'bg-green-50' },
];

const featureCategories = [
  {
    category: 'Core GEOINT Capabilities',
    features: [
      {
        name: 'Multi-format Data Ingestion (15+ formats)',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'partial',
        raytheon: 'limited',
        palantir: 'limited',
      },
      {
        name: 'Real-time FMV/KLV Processing',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'limited',
      },
      {
        name: '3D Visualization & Gaussian Splatting',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'limited',
        raytheon: 'limited',
        palantir: 'none',
      },
      {
        name: 'AI-Powered Object Detection',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'partial',
        raytheon: 'full',
        palantir: 'full',
      },
      {
        name: 'Multi-temporal Change Detection',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'limited',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      {
        name: 'Multi-level Security (MLS) Architecture',
        oxicloud: 'full',
        esri: 'limited',
        bae: 'full',
        raytheon: 'full',
        palantir: 'full',
      },
      {
        name: 'TS/SCI Environment Support',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'full',
      },
      {
        name: 'NIST Cybersecurity Framework',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'full',
        raytheon: 'full',
        palantir: 'partial',
      },
      {
        name: 'FISMA Compliance Ready',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'addon',
      },
      {
        name: 'Cross-Domain Solutions',
        oxicloud: 'full',
        esri: 'limited',
        bae: 'full',
        raytheon: 'full',
        palantir: 'limited',
      },
    ],
  },
  {
    category: 'Integration & Interoperability',
    features: [
      {
        name: 'Open Standards (OGC API Compliance)',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'partial',
        raytheon: 'limited',
        palantir: 'none',
      },
      {
        name: 'CoT/VMF/Link 16 Integration',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'limited',
      },
      {
        name: 'TAK Server Integration',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'full',
        raytheon: 'full',
        palantir: 'none',
      },
      {
        name: 'Cloud-Native Kubernetes',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'limited',
        raytheon: 'limited',
        palantir: 'full',
      },
      {
        name: 'Edge/Tactical Deployment',
        oxicloud: 'full',
        esri: 'limited',
        bae: 'partial',
        raytheon: 'full',
        palantir: 'limited',
      },
    ],
  },
  {
    category: 'Performance & Scalability',
    features: [
      {
        name: 'Sub-200ms Tile Response Time',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'limited',
        raytheon: 'partial',
        palantir: 'limited',
      },
      {
        name: 'Rust-Based High Performance',
        oxicloud: 'full',
        esri: 'none',
        bae: 'none',
        raytheon: 'none',
        palantir: 'none',
      },
      {
        name: 'Auto-scaling Infrastructure',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'limited',
        raytheon: 'partial',
        palantir: 'full',
      },
      {
        name: '100K+ Concurrent Users',
        oxicloud: 'full',
        esri: 'addon',
        bae: 'partial',
        raytheon: 'partial',
        palantir: 'full',
      },
      {
        name: 'GPU-Accelerated Processing',
        oxicloud: 'full',
        esri: 'partial',
        bae: 'limited',
        raytheon: 'full',
        palantir: 'limited',
      },
    ],
  },
  {
    category: 'Cost & Licensing',
    features: [
      {
        name: 'No Per-User Licensing Fees',
        oxicloud: 'full',
        esri: 'none',
        bae: 'none',
        raytheon: 'none',
        palantir: 'none',
      },
      {
        name: 'Transparent Pricing Model',
        oxicloud: 'full',
        esri: 'limited',
        bae: 'limited',
        raytheon: 'limited',
        palantir: 'none',
      },
      {
        name: '24-Hour Deployment Time',
        oxicloud: 'full',
        esri: 'none',
        bae: 'none',
        raytheon: 'none',
        palantir: 'none',
      },
      {
        name: 'Open Source Components',
        oxicloud: 'full',
        esri: 'limited',
        bae: 'none',
        raytheon: 'none',
        palantir: 'none',
      },
      {
        name: 'No Vendor Lock-in',
        oxicloud: 'full',
        esri: 'none',
        bae: 'limited',
        raytheon: 'limited',
        palantir: 'none',
      },
    ],
  },
];

const getFeatureIcon = (status: string) => {
  switch (status) {
    case 'full':
      return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
    case 'partial':
      return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
    case 'addon':
      return <ClockIcon className="w-5 h-5 text-blue-600" />;
    case 'limited':
      return <ExclamationTriangleIcon className="w-5 h-5 text-orange-600" />;
    case 'none':
    default:
      return <XCircleIcon className="w-5 h-5 text-red-600" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'full':
      return 'Full Support';
    case 'partial':
      return 'Partial';
    case 'addon':
      return 'Add-on Required';
    case 'limited':
      return 'Limited';
    case 'none':
    default:
      return 'Not Available';
  }
};

export default function FeatureMatrix() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="feature-matrix" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Competitive <span className="text-gradient">Feature Analysis</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            See how OXICLOUD Platform compares to leading defense contractor solutions. 
            Our comprehensive comparison shows why intelligence professionals choose OXICLOUD 
            for mission-critical geospatial operations.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8 p-4 bg-secondary-50 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4 text-green-600" />
            <span className="text-sm text-secondary-600">Full Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-secondary-600">Partial</span>
          </div>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-secondary-600">Add-on Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <ExclamationTriangleIcon className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-secondary-600">Limited</span>
          </div>
          <div className="flex items-center space-x-2">
            <XCircleIcon className="w-4 h-4 text-red-600" />
            <span className="text-sm text-secondary-600">Not Available</span>
          </div>
        </motion.div>

        {/* Feature Matrix */}
        <div className="space-y-12">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              {/* Feature Grid */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-secondary-900 w-1/3">
                        Feature
                      </th>
                      {competitors.map((competitor) => (
                        <th
                          key={competitor.name}
                          className={`px-4 py-4 text-center text-sm font-medium ${competitor.color} w-32`}
                        >
                          <div className={`inline-block px-3 py-1 rounded-full text-xs ${competitor.bgColor}`}>
                            {competitor.name}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-secondary-100">
                    {category.features.map((feature, featureIndex) => (
                      <motion.tr
                        key={feature.name}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.05 }}
                        className="hover:bg-secondary-25 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-secondary-900">
                          {feature.name}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getFeatureIcon(feature.oxicloud)}
                            <span className="text-xs text-secondary-600">
                              {getStatusText(feature.oxicloud)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getFeatureIcon(feature.esri)}
                            <span className="text-xs text-secondary-600">
                              {getStatusText(feature.esri)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getFeatureIcon(feature.bae)}
                            <span className="text-xs text-secondary-600">
                              {getStatusText(feature.bae)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getFeatureIcon(feature.raytheon)}
                            <span className="text-xs text-secondary-600">
                              {getStatusText(feature.raytheon)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex flex-col items-center space-y-1">
                            {getFeatureIcon(feature.palantir)}
                            <span className="text-xs text-secondary-600">
                              {getStatusText(feature.palantir)}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              See the Difference for Yourself
            </h3>
            <p className="text-primary-100 mb-8 max-w-3xl mx-auto">
              Request a side-by-side demonstration comparing OXICLOUD to your current solution. 
              Our technical experts will show you exactly how we deliver superior capabilities 
              at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3">
                Request Comparison Demo
              </button>
              <button className="btn bg-transparent border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3">
                Download Feature Matrix PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}