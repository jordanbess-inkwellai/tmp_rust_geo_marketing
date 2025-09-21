'use client';

// Performance monitoring and optimization utilities

interface PerformanceMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Observe Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP Observer
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.LCP = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // FID Observer
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-input') {
              this.metrics.FID = (entry as any).processingStart - entry.startTime;
              this.reportMetric('FID', this.metrics.FID);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // CLS Observer
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          this.metrics.CLS = clsValue;
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    // FCP using Paint Timing API
    if ('performance' in window && 'getEntriesByType' in performance) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.FCP = fcpEntry.startTime;
        this.reportMetric('FCP', fcpEntry.startTime);
      }
    }

    // TTFB
    if ('performance' in window && 'timing' in performance) {
      const navTiming = performance.timing;
      this.metrics.TTFB = navTiming.responseStart - navTiming.navigationStart;
      this.reportMetric('TTFB', this.metrics.TTFB);
    }
  }

  private reportMetric(name: string, value: number) {
    // Report to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        custom_parameter_1: this.getMetricRating(name, value),
      });
    }

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${Math.round(value)}ms (${this.getMetricRating(name, value)})`);
    }
  }

  private getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, [number, number]> = {
      FCP: [1800, 3000],
      LCP: [2500, 4000],
      FID: [100, 300],
      CLS: [0.1, 0.25],
      TTFB: [800, 1800],
    };

    const [good, poor] = thresholds[name] || [0, 0];
    
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Resource loading optimization
export class ResourceManager {
  private static preloadedResources = new Set<string>();

  static preloadResource(url: string, as: string = 'fetch', crossorigin?: string) {
    if (this.preloadedResources.has(url)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    if (crossorigin) link.crossOrigin = crossorigin;

    document.head.appendChild(link);
    this.preloadedResources.add(url);
  }

  static prefetchResource(url: string) {
    if (this.preloadedResources.has(url)) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;

    document.head.appendChild(link);
    this.preloadedResources.add(url);
  }

  static preconnectDomain(domain: string) {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  }
}

// Image optimization utilities
export class ImageOptimizer {
  static generateSrcSet(baseUrl: string, sizes: number[]): string {
    return sizes
      .map(size => `${baseUrl}?w=${size} ${size}w`)
      .join(', ');
  }

  static generateSizes(breakpoints: { width: number; size: string }[]): string {
    return breakpoints
      .map((bp, index) => 
        index === breakpoints.length - 1 
          ? bp.size 
          : `(max-width: ${bp.width}px) ${bp.size}`
      )
      .join(', ');
  }

  static getOptimalFormat(): 'webp' | 'avif' | 'jpeg' {
    if (typeof window === 'undefined') return 'jpeg';

    // Check for AVIF support
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return 'avif';
    }
    
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      return 'webp';
    }
    
    return 'jpeg';
  }
}

// Bundle analysis and code splitting utilities
export class CodeSplitting {
  static async loadComponent<T>(
    importFn: () => Promise<{ default: T }>,
    fallback?: T
  ): Promise<T> {
    try {
      const moduleResult = await importFn();
      return moduleResult.default;
    } catch (error) {
      console.error('Failed to load component:', error);
      if (fallback) return fallback;
      throw error;
    }
  }

  static createAsyncComponent<T>(importFn: () => Promise<{ default: T }>) {
    return {
      load: () => this.loadComponent(importFn),
    };
  }
}

// Performance monitoring singleton
let performanceMonitor: PerformanceMonitor | null = null;

export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined' && !performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
}

export function getPerformanceMetrics(): PerformanceMetrics | null {
  return performanceMonitor?.getMetrics() || null;
}

// Client-side caching utilities
export class ClientCache {
  private static cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  static set(key: string, data: any, ttlMinutes: number = 60) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMinutes * 60 * 1000,
    });
  }

  static get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  static clear(key?: string) {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}

// Service Worker utilities
export class ServiceWorkerManager {
  static async register(swPath: string = '/sw.js') {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      try {
        const registration = await navigator.serviceWorker.register(swPath);
        console.log('ServiceWorker registration successful:', registration);
        return registration;
      } catch (error) {
        console.error('ServiceWorker registration failed:', error);
      }
    }
  }

  static async unregister() {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
    }
  }
}

// Critical path CSS utilities
export class CriticalCSS {
  static loadNonCriticalCSS(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  }

  static inlineCSS(css: string) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

export { PerformanceMonitor };