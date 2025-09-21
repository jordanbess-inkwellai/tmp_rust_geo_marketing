'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SecurityHero from '@/components/security/SecurityHero';
import ComplianceCertifications from '@/components/security/ComplianceCertifications';
import SecurityFramework from '@/components/security/SecurityFramework';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import ThreatIntelligence from '@/components/security/ThreatIntelligence';
import SecurityContact from '@/components/security/SecurityContact';

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main>
        <SecurityHero />
        <ComplianceCertifications />
        <SecurityFramework />
        <SecurityFeatures />
        <ThreatIntelligence />
        <SecurityContact />
      </main>
      <Footer />
    </>
  );
}
