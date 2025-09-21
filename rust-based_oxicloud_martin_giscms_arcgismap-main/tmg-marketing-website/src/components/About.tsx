
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingOffice2Icon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const leadership = [
  {
    name: 'Michael R. Patterson',
    role: 'Founder & Chief Executive Officer',
    imageUrl: '/images/team/ceo-placeholder.jpg',
    bio: 'Former USAF intelligence officer and geospatial analyst with 22 years of experience leading multi-domain operations and defense system acquisitions.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    imageUrl: '/images/team/cto-placeholder.jpg',
    bio: 'Systems architect and software engineer with expertise in distributed computing, geospatial algorithms, and high-performance data processing platforms.',
  },
  {
    name: 'David M. Williams',
    role: 'Vice President of Business Development',
    imageUrl: '/images/team/vp-placeholder.jpg',
    bio: 'Defense industry executive with extensive experience in government relations, contract management, and strategic partnerships with federal agencies.',
  },
];

const values = [
  {
    name: 'Mission First',
    description: 'Our primary focus is delivering solutions that ensure mission success for our clients.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Innovation & Excellence',
    description: 'We are committed to pushing the boundaries of technology and delivering best-in-class solutions.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Integrity & Trust',
    description: 'We operate with the highest level of integrity and build lasting partnerships based on trust.',
    icon: UserGroupIcon,
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About <span className="text-gradient">Tech Maven Geospatial</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We are a team of veterans, engineers, and geospatial experts dedicated to providing
            our nation's defenders with the most advanced and reliable technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="feature-icon mx-auto mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
            Our Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-primary-500/50">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">{person.name}</h4>
                <p className="text-primary-600 font-medium">{person.role}</p>
                <p className="text-sm text-secondary-600 mt-2">{person.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
