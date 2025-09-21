'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FMVPerformance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const performanceMetrics = [
    { metric: 'Processing Latency', value: '< 50ms', description: 'Real-time processing' },
    { metric: 'Concurrent Streams', value: '100+', description: 'Simultaneous processing' },
    { metric: 'Detection Accuracy', value: '95%+', description: 'AI object detection' },
    { metric: 'Uptime', value: '99.9%', description: 'System availability' },
  ];

  return (
    <section id="fmv-performance" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Performance <span className="text-gradient">Benchmarks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading performance metrics for real-time FMV processing and analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold mb-2">{metric.metric}</div>
              <div className="text-gray-600">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}