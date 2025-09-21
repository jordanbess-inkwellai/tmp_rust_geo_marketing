'use client';

import Link from 'next/link';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const navigation = {
  solutions: [
    { name: 'Command & Control', href: '#solutions' },
    { name: 'GEOINT Analysis', href: '#solutions' },
    { name: 'FMV Intelligence', href: '#solutions' },
    { name: 'Climate Intelligence', href: '#solutions' },
    { name: '3D Visualization', href: '#solutions' },
    { name: 'Edge Deployment', href: '#solutions' },
  ],
  technology: [
    { name: 'OGC API Standards', href: '#technology' },
    { name: 'Rust Performance', href: '#technology' },
    { name: 'Cloud Native', href: '#technology' },
    { name: 'AI Integration', href: '#technology' },
    { name: 'Security Framework', href: '#technology' },
    { name: 'Real-time Collaboration', href: '#technology' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Events', href: '/news' },
    { name: 'Partner Program', href: '/partners' },
    { name: 'Support', href: '/support' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Feature Videos', href: '/videos' },
    { name: 'Podcasts', href: '/podcasts' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Developer Portal', href: '/developers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Export Compliance', href: '/export-compliance' },
    { name: 'Security Disclosure', href: '/security-disclosure' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

const certifications = [
  'NIST Cybersecurity Framework',
  'FISMA Moderate Ready',
  'OGC API Compliant',
  'ISO 9001:2015 Ready',
  'CMMI Level 3 Candidate',
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <ShieldCheckIcon className="h-8 w-8 text-primary-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Tech Maven</span>
                <span className="text-xs text-secondary-400 uppercase tracking-wider">Geospatial</span>
              </div>
            </Link>

            <p className="text-secondary-300 mb-6 leading-relaxed">
              Next-generation geospatial intelligence solutions for defense, military, and public safety organizations.
              Built with modern technology, designed for mission-critical operations.
            </p>

            <div className="space-y-3">
              <div className="text-sm">
                <span className="font-semibold text-white">Security Clearances Available:</span>
                <span className="text-secondary-300 ml-2">Secret, Top Secret, TS/SCI</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">CAGE Code:</span>
                <span className="text-secondary-300 ml-2">[Application in Progress]</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">SAM Registration:</span>
                <span className="text-secondary-300 ml-2">Active</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-3">
              {navigation.technology.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Compliance & Certifications</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-secondary-800 rounded-lg px-4 py-2 text-sm text-secondary-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">General Inquiries</h4>
              <p className="text-secondary-300 text-sm">contact@techmaven.geospatial.com</p>
              <p className="text-secondary-300 text-sm">(555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Security Briefings</h4>
              <p className="text-secondary-300 text-sm">security@techmaven.geospatial.com</p>
              <p className="text-secondary-300 text-sm">(555) 123-4568</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-secondary-300 text-sm">support@techmaven.geospatial.com</p>
              <p className="text-secondary-300 text-sm">24/7 Emergency: (555) 123-4569</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-400 hover:text-primary-400 text-xs transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-secondary-400 text-xs">
                © 2024 Tech Maven Geospatial, LLC. All rights reserved.
              </p>
              <p className="text-secondary-500 text-xs mt-1">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Security Classification Footer */}
        <div className="mt-8 pt-6 border-t border-secondary-700">
          <div className="bg-secondary-800 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <ShieldCheckIcon className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold text-green-400">UNCLASSIFIED</span>
            </div>
            <p className="text-xs text-secondary-400 text-center">
              This website contains unclassified information only. For classified discussions,
              please contact us through appropriate secure channels.
            </p>
            <p className="text-xs text-secondary-500 text-center mt-2">
              Export controlled information - see export compliance policy for details.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}