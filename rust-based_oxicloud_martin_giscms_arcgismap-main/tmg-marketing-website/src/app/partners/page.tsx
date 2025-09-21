import React from 'react';
import PartnersHero from '@/components/partners/PartnersHero';
import TechnologyIntegrations from '@/components/partners/TechnologyIntegrations';
import CertifiedPartners from '@/components/partners/CertifiedPartners';
import ResellerNetwork from '@/components/partners/ResellerNetwork';
import APIEcosystem from '@/components/partners/APIEcosystem';
import PartnerProgram from '@/components/partners/PartnerProgram';
import PartnerSuccess from '@/components/partners/PartnerSuccess';
import PartnerContact from '@/components/partners/PartnerContact';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <PartnersHero />
      
      {/* Technology Integrations */}
      <TechnologyIntegrations />
      
      {/* Certified Partners */}
      <CertifiedPartners />
      
      {/* Reseller Network */}
      <ResellerNetwork />
      
      {/* API Ecosystem */}
      <APIEcosystem />
      
      {/* Partner Program */}
      <PartnerProgram />
      
      {/* Partner Success Stories */}
      <PartnerSuccess />
      
      {/* Partner Contact */}
      <PartnerContact />
    </div>
  );
}