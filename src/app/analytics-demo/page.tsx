'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsDemoHero from '@/components/analytics/AnalyticsDemoHero';
import LiveDataVisualization from '@/components/analytics/LiveDataVisualization';
import PerformanceMetrics from '@/components/analytics/PerformanceMetrics';
import GeospatialAnalytics from '@/components/analytics/GeospatialAnalytics';
import CustomDashboards from '@/components/analytics/CustomDashboards';
import RealtimeAlerts from '@/components/analytics/RealtimeAlerts';
import AnalyticsContact from '@/components/analytics/AnalyticsContact';

export default function AnalyticsDemoPage() {
  return (
    <>
      <Header />
      <main>
        <AnalyticsDemoHero />
        <LiveDataVisualization />
        <PerformanceMetrics />
        <GeospatialAnalytics />
        <CustomDashboards />
        <RealtimeAlerts />
        <AnalyticsContact />
      </main>
      <Footer />
    </>
  );
}