'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techCategories = [
  {
    category: 'Backend & Performance',
    description: 'High-performance, memory-safe backend services',
    technologies: [
      { name: 'Rust', description: 'Memory-safe systems programming', color: 'bg-orange-500' },
      { name: 'Tokio', description: 'Async runtime for scalable services', color: 'bg-blue-500' },
      { name: 'Axum', description: 'Modern web framework', color: 'bg-purple-500' },
      { name: 'PostgreSQL', description: 'PostGIS spatial database', color: 'bg-blue-600' },
      { name: 'Redis', description: 'High-performance caching', color: 'bg-red-500' },
      { name: 'DuckDB', description: 'Analytical query engine', color: 'bg-yellow-500' },
    ],
  },
  {
    category: 'Geospatial & Standards',
    description: 'Industry-standard geospatial processing',
    technologies: [
      { name: 'OGC APIs', description: 'Features, Processes, Connected Systems', color: 'bg-green-600' },
      { name: 'GDAL/OGR', description: 'Geospatial data processing', color: 'bg-emerald-500' },
      { name: 'PostGIS', description: 'Spatial database extensions', color: 'bg-teal-500' },
      { name: 'GeoJSON', description: 'Standard geospatial data format', color: 'bg-cyan-500' },
      { name: 'NetCDF/GRIB', description: 'Climate and weather data', color: 'bg-indigo-500' },
      { name: 'KLV/MISB', description: 'Video metadata standards', color: 'bg-violet-500' },
    ],
  },
  {
    category: 'AI & Analytics',
    description: 'Integrated AI and machine learning capabilities',
    technologies: [
      { name: 'MCP Protocol', description: 'Model Context Protocol integration', color: 'bg-pink-500' },
      { name: 'OpenAI API', description: 'Large language model integration', color: 'bg-green-500' },
      { name: 'Candle', description: 'Rust-native ML framework', color: 'bg-orange-600' },
      { name: 'OpenCV', description: 'Computer vision processing', color: 'bg-blue-700' },
      { name: 'DataFusion', description: 'Distributed query engine', color: 'bg-purple-600' },
      { name: 'Apache Arrow', description: 'Columnar data processing', color: 'bg-red-600' },
    ],
  },
  {
    category: 'Frontend & Visualization',
    description: 'Modern, responsive user interfaces',
    technologies: [
      { name: 'Next.js 15', description: 'React framework with Turbopack', color: 'bg-black' },
      { name: 'TypeScript', description: 'Type-safe JavaScript', color: 'bg-blue-500' },
      { name: 'DeckGL', description: '3D geospatial visualization', color: 'bg-cyan-600' },
      { name: 'MapLibre GL', description: 'Interactive map rendering', color: 'bg-green-500' },
      { name: 'Three.js', description: '3D graphics and visualization', color: 'bg-yellow-600' },
      { name: 'Tailwind CSS', description: 'Utility-first styling', color: 'bg-teal-400' },
    ],
  },
  {
    category: 'Infrastructure & Security',
    description: 'Enterprise deployment and security',
    technologies: [
      { name: 'Kubernetes', description: 'Container orchestration', color: 'bg-blue-600' },
      { name: 'Docker', description: 'Containerization platform', color: 'bg-blue-500' },
      { name: 'NIST Framework', description: 'Cybersecurity compliance', color: 'bg-red-700' },
      { name: 'OAuth2/JWT', description: 'Authentication and authorization', color: 'bg-green-700' },
      { name: 'Prometheus', description: 'Monitoring and alerting', color: 'bg-orange-500' },
      { name: 'Jaeger', description: 'Distributed tracing', color: 'bg-purple-500' },
    ],
  },
  {
    category: 'Media & Communication',
    description: 'Video processing and real-time communication',
    technologies: [
      { name: 'FFmpeg', description: 'Video and audio processing', color: 'bg-gray-700' },
      { name: 'WebRTC', description: 'Real-time communication', color: 'bg-blue-400' },
      { name: 'HLS/RTMP', description: 'Streaming protocols', color: 'bg-red-500' },
      { name: 'WebSocket', description: 'Real-time bidirectional communication', color: 'bg-green-600' },
      { name: 'RTSP', description: 'Real-time streaming protocol', color: 'bg-purple-400' },
      { name: 'Gstreamer', description: 'Multimedia framework', color: 'bg-indigo-600' },
    ],
  },
];

const performanceMetrics = [
  { metric: 'Response Time', value: '< 50ms', description: 'Average API response time' },
  { metric: 'Throughput', value: '10K+ RPS', description: 'Requests per second capacity' },
  { metric: 'Memory Usage', value: '50% Less', description: 'vs. Java-based solutions' },
  { metric: 'Cold Start', value: '< 100ms', description: 'Service startup time' },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="technology" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Built with <span className="text-gradient">Modern Technology</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our technology stack is carefully chosen for performance, security, and maintainability.
            Every component is battle-tested and designed for enterprise-scale deployments.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {performanceMetrics.map((metric, index) => (
            <div
              key={metric.metric}
              className="text-center bg-white rounded-xl p-6 shadow-lg border border-secondary-200"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
              <div className="text-sm font-semibold text-secondary-900 mb-1">{metric.metric}</div>
              <div className="text-xs text-secondary-500">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-secondary-200"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                  {category.category}
                </h3>
                <p className="text-secondary-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + techIndex * 0.05
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-secondary-50 rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-200 border border-secondary-100 hover:border-primary-200">
                      <div className={`w-3 h-3 ${tech.color} rounded-full mb-3 group-hover:scale-110 transition-transform`} />
                      <div className="text-sm font-semibold text-secondary-900 mb-1">
                        {tech.name}
                      </div>
                      <div className="text-xs text-secondary-500 leading-tight">
                        {tech.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Architecture Advantages
              </h3>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Our architecture decisions deliver measurable advantages over traditional
                geospatial and defense solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-sm font-semibold mb-1">Performance</div>
                <div className="text-xs text-primary-200">vs. Java-based solutions</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-sm font-semibold mb-1">Memory Vulnerabilities</div>
                <div className="text-xs text-primary-200">Rust memory safety</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-sm font-semibold mb-1">Cost Reduction</div>
                <div className="text-xs text-primary-200">vs. proprietary solutions</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-sm font-semibold mb-1">Deployment Time</div>
                <div className="text-xs text-primary-200">vs. months for legacy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}