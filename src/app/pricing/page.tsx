'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingTiers from '@/components/pricing/PricingTiers';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import ROICalculator from '@/components/pricing/ROICalculator';
import GovernmentPricing from '@/components/pricing/GovernmentPricing';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingContact from '@/components/pricing/PricingContact';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingTiers />
        <FeatureComparison />
        <GovernmentPricing />
        <ROICalculator />
        <PricingFAQ />
        <PricingContact />
      </main>
      <Footer />
    </>
  );
}