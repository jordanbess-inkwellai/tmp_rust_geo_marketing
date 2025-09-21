'use client';

import { ShieldCheckIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

interface SecurityNoticeProps {
  type: 'classification' | 'export-control' | 'privacy' | 'vulnerability';
  variant?: 'banner' | 'inline' | 'footer';
  className?: string;
}

export function SecurityNotice({ type, variant = 'inline', className = '' }: SecurityNoticeProps) {
  const getNoticeContent = () => {
    switch (type) {
      case 'classification':
        return {
          icon: ShieldCheckIcon,
          title: 'Classification Notice',
          message: 'This website contains UNCLASSIFIED information only. For classified discussions, contact us through appropriate secure government channels.',
          severity: 'info',
          bgColor: 'bg-blue-50 border-blue-200',
          iconColor: 'text-blue-600',
          textColor: 'text-blue-800',
        };
        
      case 'export-control':
        return {
          icon: ExclamationTriangleIcon,
          title: 'Export Control Notice',
          message: 'This site and its contents may be subject to U.S. export control laws and regulations. Use and access may be restricted based on nationality and end-use.',
          severity: 'warning',
          bgColor: 'bg-yellow-50 border-yellow-200',
          iconColor: 'text-yellow-600',
          textColor: 'text-yellow-800',
        };
        
      case 'privacy':
        return {
          icon: ShieldCheckIcon,
          title: 'Privacy & Security',
          message: 'We protect your data with government-grade security measures. View our Privacy Policy for details on data handling and compliance.',
          severity: 'info',
          bgColor: 'bg-green-50 border-green-200',
          iconColor: 'text-green-600',
          textColor: 'text-green-800',
        };
        
      case 'vulnerability':
        return {
          icon: InformationCircleIcon,
          title: 'Security Disclosure',
          message: 'Report security vulnerabilities responsibly. View /security.txt for our disclosure policy and contact information.',
          severity: 'info',
          bgColor: 'bg-gray-50 border-gray-200',
          iconColor: 'text-gray-600',
          textColor: 'text-gray-800',
        };
        
      default:
        return null;
    }
  };

  const content = getNoticeContent();
  if (!content) return null;

  const { icon: Icon, title, message, bgColor, iconColor, textColor } = content;

  if (variant === 'banner') {
    return (
      <div className={`${bgColor} border-b px-4 py-3 ${className}`}>
        <div className="container-custom">
          <div className="flex items-center space-x-3">
            <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
            <div className="flex-1">
              <span className={`font-medium ${textColor}`}>{title}: </span>
              <span className={`${textColor} text-sm`}>{message}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-start space-x-2 text-xs ${className}`}>
        <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0 mt-0.5`} />
        <span className={textColor}>{message}</span>
      </div>
    );
  }

  // Default inline variant
  return (
    <div className={`${bgColor} border rounded-lg p-4 ${className}`}>
      <div className="flex items-start space-x-3">
        <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-semibold ${textColor} mb-1`}>{title}</h4>
          <p className={`${textColor} text-sm`}>{message}</p>
        </div>
      </div>
    </div>
  );
}

// Pre-configured notice components
export function ClassificationNotice({ variant = 'inline', className = '' }: { variant?: 'banner' | 'inline' | 'footer'; className?: string }) {
  return <SecurityNotice type="classification" variant={variant} className={className} />;
}

export function ExportControlNotice({ variant = 'inline', className = '' }: { variant?: 'banner' | 'inline' | 'footer'; className?: string }) {
  return <SecurityNotice type="export-control" variant={variant} className={className} />;
}

export function PrivacyNotice({ variant = 'inline', className = '' }: { variant?: 'banner' | 'inline' | 'footer'; className?: string }) {
  return <SecurityNotice type="privacy" variant={variant} className={className} />;
}

export function VulnerabilityNotice({ variant = 'inline', className = '' }: { variant?: 'banner' | 'inline' | 'footer'; className?: string }) {
  return <SecurityNotice type="vulnerability" variant={variant} className={className} />;
}

// Comprehensive compliance footer component
export function ComplianceFooter() {
  return (
    <div className="bg-secondary-900 text-secondary-300 py-8 border-t border-secondary-700">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          
          {/* Classification Notice */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Security Classification
            </h4>
            <p>
              This website contains <strong className="text-white">UNCLASSIFIED</strong> information only. 
              For classified discussions, contact us through appropriate secure government channels.
            </p>
          </div>

          {/* Export Control */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white flex items-center">
              <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
              Export Control
            </h4>
            <p>
              This site and its technology may be subject to U.S. export control laws including 
              EAR and ITAR. Access and use restrictions may apply based on nationality and end-use.
            </p>
          </div>

          {/* Compliance & Standards */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white flex items-center">
              <InformationCircleIcon className="w-4 h-4 mr-2" />
              Compliance & Standards
            </h4>
            <div className="space-y-1">
              <p>• NIST Cybersecurity Framework</p>
              <p>• FISMA Moderate Controls</p>
              <p>• Section 508 Accessibility</p>
              <p>• FedRAMP Ready</p>
            </div>
          </div>
        </div>
        
        {/* Security Disclosure */}
        <div className="mt-6 pt-6 border-t border-secondary-700 text-center">
          <p className="text-xs">
            Security vulnerabilities? Review our{' '}
            <a href="/security.txt" className="text-primary-400 hover:text-primary-300 underline">
              security disclosure policy
            </a>{' '}
            or contact{' '}
            <a href="mailto:security@techmaven.geospatial.com" className="text-primary-400 hover:text-primary-300 underline">
              security@techmaven.geospatial.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}