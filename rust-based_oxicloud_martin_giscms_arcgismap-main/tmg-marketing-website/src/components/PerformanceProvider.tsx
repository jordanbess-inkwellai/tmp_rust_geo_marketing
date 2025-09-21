'use client';

import { useEffect } from 'react';
import { initPerformanceMonitoring, ResourceManager } from '@/lib/performance';

export function PerformanceProvider() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();

    // Preconnect to critical external domains
    ResourceManager.preconnectDomain('https://fonts.googleapis.com');
    ResourceManager.preconnectDomain('https://fonts.gstatic.com');
    ResourceManager.preconnectDomain('https://www.google-analytics.com');

    // Prefetch critical resources
    if (process.env.NODE_ENV === 'production') {
      ResourceManager.prefetchResource('/privacy');
      ResourceManager.prefetchResource('/terms');
      ResourceManager.prefetchResource('/api/contact');
    }

    // Critical resource preloading
    const criticalResources = [
      { url: '/favicon.svg', as: 'image' },
      { url: '/og-image.svg', as: 'image' },
    ];

    criticalResources.forEach(({ url, as }) => {
      ResourceManager.preloadResource(url, as);
    });

  }, []);

  return null; // This component doesn't render anything
}