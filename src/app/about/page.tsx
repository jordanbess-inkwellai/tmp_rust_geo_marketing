import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import CompanyMilestones from '@/components/about/CompanyMilestones';
import TeamCulture from '@/components/about/TeamCulture';
import JoinUs from '@/components/about/JoinUs';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Company Story */}
      <CompanyStory />
      
      {/* Mission & Vision */}
      <MissionVision />
      
      {/* Core Values */}
      <CoreValues />
      
      {/* Leadership Team */}
      <LeadershipTeam />
      
      {/* Company Milestones */}
      <CompanyMilestones />
      
      {/* Team Culture */}
      <TeamCulture />
      
      {/* Join Us CTA */}
      <JoinUs />
    </div>
  );
}