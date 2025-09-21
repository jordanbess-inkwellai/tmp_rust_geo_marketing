import React from 'react';
import ResourcesHero from '@/components/resources/ResourcesHero';
import DocumentationHub from '@/components/resources/DocumentationHub';
import TutorialsCenter from '@/components/resources/TutorialsCenter';
import WebinarsEvents from '@/components/resources/WebinarsEvents';
import KnowledgeBase from '@/components/resources/KnowledgeBase';
import TechnicalGuides from '@/components/resources/TechnicalGuides';
import CommunitySupport from '@/components/resources/CommunitySupport';
import ResourcesContact from '@/components/resources/ResourcesContact';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <ResourcesHero />
      
      {/* Documentation Hub */}
      <DocumentationHub />
      
      {/* Tutorials Center */}
      <TutorialsCenter />
      
      {/* Webinars & Events */}
      <WebinarsEvents />
      
      {/* Knowledge Base */}
      <KnowledgeBase />
      
      {/* Technical Guides */}
      <TechnicalGuides />
      
      {/* Community Support */}
      <CommunitySupport />
      
      {/* Resources Contact */}
      <ResourcesContact />
    </div>
  );
}