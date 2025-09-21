'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FMVHero from '@/components/fmv/FMVHero';
import FMVCapabilities from '@/components/fmv/FMVCapabilities';
import FMVTechnicalSpecs from '@/components/fmv/FMVTechnicalSpecs';
import FMVUseCases from '@/components/fmv/FMVUseCases';
import FMVArchitecture from '@/components/fmv/FMVArchitecture';
import FMVPerformance from '@/components/fmv/FMVPerformance';
import FMVIntegration from '@/components/fmv/FMVIntegration';
import FMVContact from '@/components/fmv/FMVContact';

export default function FMVPage() {
  return (
    <>
      <Header />
      <main>
        <FMVHero />
        <FMVCapabilities />
        <FMVTechnicalSpecs />
        <FMVUseCases />
        <FMVArchitecture />
        <FMVPerformance />
        <FMVIntegration />
        <FMVContact />
      </main>
      <Footer />
    </>
  );
}