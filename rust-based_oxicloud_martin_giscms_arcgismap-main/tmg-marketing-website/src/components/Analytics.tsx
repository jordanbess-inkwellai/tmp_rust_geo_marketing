'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics Measurement ID - replace with actual ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export function Analytics() {
  useEffect(() => {
    // Only load analytics in production and with a valid GA ID
    if (process.env.NODE_ENV !== 'production' || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      return;
    }
  }, []);

  // Don't render in development or without proper GA ID
  if (process.env.NODE_ENV !== 'production' || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'secure;samesite=strict',
            custom_map: {
              'custom_parameter_1': 'user_type'
            }
          });
        `}
      </Script>
    </>
  );
}

// Analytics helper functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for defense/government context
export const trackContactFormSubmit = (formType: string, clearanceLevel?: string) => {
  trackEvent('form_submit', 'contact', formType);
  if (clearanceLevel) {
    trackEvent('clearance_level_selected', 'engagement', clearanceLevel);
  }
};

export const trackDemoRequest = (demoType: string) => {
  trackEvent('demo_request', 'engagement', demoType);
};

export const trackResourceDownload = (resourceType: string, resourceName: string) => {
  trackEvent('download', 'resources', `${resourceType}_${resourceName}`);
};

export const trackSecurityBriefingRequest = () => {
  trackEvent('security_briefing_request', 'engagement', 'classified_discussion');
};

export const trackSolutionInterest = (solutionType: string) => {
  trackEvent('solution_interest', 'engagement', solutionType);
};

// Government-specific compliance tracking
export const trackCompliancePageView = (complianceType: string) => {
  trackEvent('compliance_view', 'compliance', complianceType);
};

// Export for use in components
export default Analytics;