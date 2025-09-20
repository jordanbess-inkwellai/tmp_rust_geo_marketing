import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Tech Maven Geospatial - Defense & GEOINT Solutions. Learn how we protect your data and ensure compliance with government privacy requirements.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary-50 border-b">
        <div className="container-custom py-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-xl">
              <ShieldCheckIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">Privacy Policy</h1>
              <p className="text-secondary-600 mt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Government Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Government Compliance Notice</h3>
                <p className="text-yellow-700 text-sm">
                  This privacy policy has been designed to meet the requirements of federal privacy regulations 
                  including the Privacy Act of 1974, FISMA, and other applicable government privacy standards. 
                  All data collection and processing activities comply with current federal privacy requirements.
                </p>
              </div>
            </div>
          </div>

          <h2>1. Introduction</h2>
          <p>
            Tech Maven Geospatial, LLC ("we," "our," or "us") is committed to protecting the privacy and security 
            of personal information collected from visitors to our website and users of our services. This Privacy 
            Policy describes how we collect, use, and protect your information when you use our website and services.
          </p>

          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, organization, job title</li>
            <li><strong>Professional Information:</strong> Security clearance level, project requirements, organization type</li>
            <li><strong>Communication Data:</strong> Messages, inquiries, and other communications you send to us</li>
            <li><strong>Account Information:</strong> If you create an account, we collect login credentials and profile information</li>
          </ul>

          <h3>2.2 Information Automatically Collected</h3>
          <ul>
            <li><strong>Usage Data:</strong> Pages visited, time spent on site, navigation patterns</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
            <li><strong>Analytics Data:</strong> Website performance metrics and user interaction data</li>
            <li><strong>Cookies and Tracking:</strong> Session data, preferences, and authentication tokens</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Service Delivery:</strong> Provide and maintain our geospatial intelligence platform</li>
            <li><strong>Customer Support:</strong> Respond to inquiries and provide technical assistance</li>
            <li><strong>Business Development:</strong> Identify opportunities and tailor solutions to your needs</li>
            <li><strong>Security:</strong> Detect and prevent fraud, unauthorized access, and security threats</li>
            <li><strong>Compliance:</strong> Meet legal, regulatory, and contractual obligations</li>
            <li><strong>Improvement:</strong> Analyze usage patterns to enhance our services and website</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          
          <h3>4.1 We Do Not Sell Personal Information</h3>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h3>4.2 Limited Sharing</h3>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted vendors who assist in delivering our services (under strict confidentiality agreements)</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or government request</li>
            <li><strong>Security:</strong> To protect rights, property, or safety of Tech Maven Geospatial, our users, or the public</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales (with user notification)</li>
            <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
          </ul>

          <h2>5. Data Security and Protection</h2>
          
          <h3>5.1 Security Measures</h3>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Multi-factor authentication for sensitive systems</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls and need-to-know principles</li>
            <li>Secure data centers with physical and logical protections</li>
          </ul>

          <h3>5.2 Government-Grade Security</h3>
          <p>
            Our security practices align with government standards including NIST Cybersecurity Framework, 
            FISMA requirements, and defense industry best practices. We maintain appropriate security controls 
            for handling sensitive but unclassified (SBU) information.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes outlined in this 
            policy, comply with legal obligations, resolve disputes, and enforce agreements. Specific retention 
            periods vary based on the type of information and applicable requirements:
          </p>
          <ul>
            <li><strong>Contact inquiries:</strong> 7 years for business development purposes</li>
            <li><strong>Account data:</strong> Until account deletion plus legal retention requirements</li>
            <li><strong>Analytics data:</strong> 26 months (standard Google Analytics retention)</li>
            <li><strong>Security logs:</strong> As required by security and compliance standards</li>
          </ul>

          <h2>7. Your Rights and Choices</h2>
          
          <h3>7.1 Access and Control</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information we maintain</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability in machine-readable formats</li>
          </ul>

          <h3>7.2 Cookie Management</h3>
          <p>
            You can control cookies through your browser settings. Note that disabling certain cookies 
            may affect website functionality and your user experience.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Our services are primarily designed for U.S. government and defense organizations. 
            Data processing occurs within the United States and follows applicable data transfer 
            requirements for international users.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly 
            collect personal information from children under 18. If you become aware that a child 
            has provided us with personal information, please contact us immediately.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this privacy policy periodically to reflect changes in our practices, 
            technology, legal requirements, or other factors. We will notify you of significant 
            changes through our website or other appropriate means.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
            <h4 className="font-semibold text-secondary-900 mb-3">Tech Maven Geospatial, LLC</h4>
            <p className="text-secondary-600 mb-2">
              <strong>Privacy Officer</strong><br />
              Email: privacy@techmaven.geospatial.com<br />
              Phone: (555) 123-4567<br />
              Address: Washington, DC Metro Area
            </p>
            <p className="text-sm text-secondary-500 mt-4">
              <strong>For Classified Discussions:</strong> Contact us through appropriate secure channels. 
              This email address is for unclassified communications only.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center btn-primary"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}