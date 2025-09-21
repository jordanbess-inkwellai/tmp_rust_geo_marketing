'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  VideoCameraIcon,
  EyeIcon,
  CpuChipIcon,
  CloudIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

export default function FMVArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const architectureLayers = [
    { name: 'Video Input', icon: VideoCameraIcon, description: 'Multi-stream FMV ingestion' },
    { name: 'KLV Extraction', icon: EyeIcon, description: 'Real-time metadata processing' },
    { name: 'AI Processing', icon: CpuChipIcon, description: 'Object detection & analysis' },
    { name: 'Cloud Integration', icon: CloudIcon, description: 'Scalable processing' },
    { name: 'Output & Export', icon: DocumentDuplicateIcon, description: 'Multi-format delivery' },
  ];

  return (
    <section id="fmv-architecture" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            FMV Processing <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            High-performance, scalable architecture designed for real-time FMV processing 
            with comprehensive KLV metadata extraction and AI-powered analytics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-center w-full max-w-2xl">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                  <layer.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{layer.name}</h3>
                  <p className="text-gray-600">{layer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}