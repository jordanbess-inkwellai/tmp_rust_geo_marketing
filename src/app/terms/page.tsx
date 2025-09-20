import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Tech Maven Geospatial - Defense & GEOINT Solutions. Review the terms and conditions for using our geospatial intelligence platform and services.',
};

export default function TermsOfService() {
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
              <DocumentTextIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">Terms of Service</h1>
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <DocumentTextIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Government & Defense Notice</h3>
                <p className="text-blue-700 text-sm">
                  These terms are designed to accommodate the unique requirements of government and defense 
                  contractors. Additional terms and conditions may apply for classified or sensitive projects 
                  and will be addressed in separate service agreements.
                </p>
              </div>
            </div>
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Tech Maven Geospatial website and services ("Services"), you agree to be 
            bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use 
            our Services. These Terms constitute a legally binding agreement between you and Tech Maven Geospatial, LLC.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Tech Maven Geospatial provides advanced geospatial intelligence and command & control solutions 
            designed for defense, military, and public safety organizations. Our Services include:
          </p>
          <ul>
            <li>Geospatial intelligence platform and software</li>
            <li>Data processing and analysis tools</li>
            <li>Real-time collaboration capabilities</li>
            <li>Technical support and consulting services</li>
            <li>Training and implementation assistance</li>
          </ul>

          <h2>3. Eligibility and Account Requirements</h2>
          
          <h3>3.1 Eligibility</h3>
          <p>Our Services are primarily designed for:</p>
          <ul>
            <li>U.S. government agencies and departments</li>
            <li>Defense contractors and military organizations</li>
            <li>Intelligence agencies and GEOINT professionals</li>
            <li>Public safety and emergency management organizations</li>
            <li>Authorized international partners and allies</li>
          </ul>

          <h3>3.2 Account Creation</h3>
          <p>
            To access certain Services, you may need to create an account. You agree to provide accurate, 
            complete, and current information and to maintain the security of your account credentials.
          </p>

          <h2>4. Use Restrictions and Acceptable Use</h2>
          
          <h3>4.1 Authorized Use</h3>
          <p>You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Services for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to any systems or data</li>
            <li>Interfere with or disrupt the Services or connected networks</li>
            <li>Share access credentials with unauthorized persons</li>
            <li>Reverse engineer, decompile, or attempt to extract source code</li>
            <li>Use the Services to develop competing products or services</li>
          </ul>

          <h3>4.2 Export Control Compliance</h3>
          <p>
            Our Services and related technical data may be subject to U.S. export control laws and regulations. 
            You agree to comply with all applicable export control laws and regulations, including but not limited 
            to the Export Administration Regulations (EAR) and the International Traffic in Arms Regulations (ITAR).
          </p>

          <h2>5. Data and Privacy</h2>
          
          <h3>5.1 Data Ownership</h3>
          <p>
            You retain ownership of any data you provide to or generate through the Services. We claim no ownership 
            rights to your data and will use it solely as necessary to provide the Services.
          </p>

          <h3>5.2 Data Security</h3>
          <p>
            We implement appropriate security measures to protect your data, including encryption, access controls, 
            and regular security assessments. Our security practices align with government standards and industry best practices.
          </p>

          <h3>5.3 Government Data Handling</h3>
          <p>
            For government clients, we comply with applicable data handling requirements including FedRAMP, 
            FISMA, and agency-specific security standards. Classified data requires separate agreements and 
            security protocols.
          </p>

          <h2>6. Intellectual Property</h2>
          
          <h3>6.1 Our Intellectual Property</h3>
          <p>
            The Services, including software, documentation, and related materials, are protected by intellectual 
            property laws. We retain all rights, title, and interest in our intellectual property.
          </p>

          <h3>6.2 License Grant</h3>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to use the 
            Services for your authorized business purposes during the term of your agreement with us.
          </p>

          <h2>7. Service Availability and Support</h2>
          
          <h3>7.1 Service Level Commitments</h3>
          <p>
            While we strive to provide reliable Services, availability and performance commitments are specified 
            in separate Service Level Agreements (SLAs) for enterprise and government customers.
          </p>

          <h3>7.2 Maintenance and Updates</h3>
          <p>
            We may perform scheduled maintenance and provide updates to improve security, functionality, and performance. 
            We will provide reasonable notice for planned maintenance that may affect Service availability.
          </p>

          <h2>8. Payment Terms</h2>
          
          <h3>8.1 Fees and Billing</h3>
          <p>
            Pricing and payment terms are specified in separate agreements or statements of work. Payment terms 
            may vary based on customer type and contractual arrangements.
          </p>

          <h3>8.2 Government Contracts</h3>
          <p>
            For government customers, payment terms follow applicable federal acquisition regulations and 
            contract terms. We accept government purchase orders and contracts through appropriate procurement channels.
          </p>

          <h2>9. Termination</h2>
          
          <h3>9.1 Termination Rights</h3>
          <p>
            Either party may terminate these Terms with appropriate notice as specified in applicable service agreements. 
            We may immediately suspend or terminate Services for security breaches or violations of these Terms.
          </p>

          <h3>9.2 Data Retrieval</h3>
          <p>
            Upon termination, you may retrieve your data within a reasonable period as specified in your service agreement. 
            We will securely delete your data according to applicable data retention and disposal requirements.
          </p>

          <h2>10. Warranties and Disclaimers</h2>
          
          <h3>10.1 Service Warranties</h3>
          <p>
            We warrant that the Services will perform substantially in accordance with published specifications 
            and service agreements. Specific performance warranties are detailed in service level agreements.
          </p>

          <h3>10.2 Disclaimers</h3>
          <p>
            EXCEPT AS EXPRESSLY STATED, THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. 
            WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
            AND NON-INFRINGEMENT.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE 
            TERMS SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES DURING THE 12 MONTHS PRECEDING 
            THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your 
            use of the Services, violation of these Terms, or infringement of third-party rights, except to the 
            extent caused by our negligence or willful misconduct.
          </p>

          <h2>13. Governing Law and Disputes</h2>
          
          <h3>13.1 Governing Law</h3>
          <p>
            These Terms are governed by the laws of the United States and the State of Virginia, without regard 
            to conflict of law principles.
          </p>

          <h3>13.2 Dispute Resolution</h3>
          <p>
            Disputes will be resolved through binding arbitration in accordance with the Commercial Arbitration 
            Rules of the American Arbitration Association, unless otherwise specified in government contracts.
          </p>

          <h2>14. Government Rights</h2>
          <p>
            If you are a U.S. government entity, the Services are "Commercial Items" as defined in FAR 2.101, 
            and government rights are limited to those specified in applicable commercial license agreements, 
            subject to additional terms in government contracts.
          </p>

          <h2>15. Changes to Terms</h2>
          <p>
            We may modify these Terms periodically. Material changes will be communicated with reasonable notice. 
            Continued use of the Services constitutes acceptance of modified Terms, subject to any conflicting 
            provisions in existing service agreements.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us:
          </p>
          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
            <h4 className="font-semibold text-secondary-900 mb-3">Tech Maven Geospatial, LLC</h4>
            <p className="text-secondary-600 mb-2">
              <strong>Legal Department</strong><br />
              Email: legal@techmaven.geospatial.com<br />
              Phone: (555) 123-4567<br />
              Address: Washington, DC Metro Area
            </p>
            <p className="text-sm text-secondary-500 mt-4">
              <strong>For Government Contracts:</strong> Contact our contracts team through appropriate procurement channels. 
              Standard terms may be modified for government agreements.
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