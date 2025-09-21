'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export default function FMVIntegration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    {
      title: 'C2 Systems Integration',
      description: 'Connect with existing command and control platforms',
      icon: CommandLineIcon,
      platforms: ['ATAK/WinTAK', 'DCGS', 'Palantir', 'Custom C2'],
    },
    {
      title: 'Mobile Platforms',
      description: 'Seamless integration with mobile and tactical devices',
      icon: DevicePhoneMobileIcon,
      platforms: ['Android TAK', 'iOS Applications', 'Tactical Tablets', 'Field Devices'],
    },
    {
      title: 'Cloud Platforms',
      description: 'Deploy across major cloud infrastructure providers',
      icon: CloudIcon,
      platforms: ['AWS GovCloud', 'Azure Government', 'Google Cloud', 'Private Cloud'],
    },
    {
      title: 'API Integration',
      description: 'Comprehensive APIs for custom integrations',
      icon: CogIcon,
      platforms: ['REST APIs', 'WebSocket', 'GraphQL', 'Custom Connectors'],
    },
  ];

  return (
    <section id="fmv-integration" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Seamless <span className="text-gradient">Integration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate OXICLOUD FMV processing with your existing platforms and workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <integration.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{integration.title}</h3>
                  <p className="text-gray-600">{integration.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {integration.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}