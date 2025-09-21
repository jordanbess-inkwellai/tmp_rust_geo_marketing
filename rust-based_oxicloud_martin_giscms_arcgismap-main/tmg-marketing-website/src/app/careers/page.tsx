import React from 'react';
import CareersHero from '../../components/careers/CareersHero';
import JobOpenings from '../../components/careers/JobOpenings';
import WhyWorkHere from '../../components/careers/WhyWorkHere';
import CompanyCulture from '../../components/careers/CompanyCulture';
import BenefitsPerks from '../../components/careers/BenefitsPerks';
import RemoteWorkPolicy from '../../components/careers/RemoteWorkPolicy';
import ApplicationProcess from '../../components/careers/ApplicationProcess';
import EmployeeSpotlight from '../../components/careers/EmployeeSpotlight';
import CareersContact from '../../components/careers/CareersContact';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <CareersHero />
      
      {/* Job Openings */}
      <JobOpenings />
      
      {/* Why Work Here */}
      <WhyWorkHere />
      
      {/* Company Culture */}
      <CompanyCulture />
      
      {/* Benefits & Perks */}
      <BenefitsPerks />
      
      {/* Remote Work Policy */}
      <RemoteWorkPolicy />
      
      {/* Application Process */}
      <ApplicationProcess />
      
      {/* Employee Spotlight */}
      <EmployeeSpotlight />
      
      {/* Contact */}
      <CareersContact />
    </main>
  );
}