'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/military/MilitaryHero';
import MilitaryFeatures from '@/components/military/MilitaryFeatures';
import FeatureMatrix from '@/components/military/FeatureMatrix';
import MilitaryArchitecture from '@/components/military/MilitaryArchitecture';
import MilitarySellingPoints from '@/components/military/MilitarySellingPoints';
import MilitaryCaseStudies from '@/components/military/MilitaryCaseStudies';
import MilitaryCompliance from '@/components/military/MilitaryCompliance';
import MilitaryContact from '@/components/military/MilitaryContact';

export default function MilitaryDefensePage() {
  return (
    <>
      <Header />
      <main>
        <MilitaryHero />
        <MilitaryFeatures />
        <FeatureMatrix />
        <MilitaryArchitecture />
        <MilitarySellingPoints />
        <MilitaryCaseStudies />
        <MilitaryCompliance />
        <MilitaryContact />
      </main>
      <Footer />
    </>
  );
}