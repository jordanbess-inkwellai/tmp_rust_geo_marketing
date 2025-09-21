import React from 'react';
import BlogHero from '../../components/blog/BlogHero';
import FeaturedArticles from '../../components/blog/FeaturedArticles';
import BlogCategories from '../../components/blog/BlogCategories';
import LatestArticles from '../../components/blog/LatestArticles';
import TechInsights from '../../components/blog/TechInsights';
import CaseStudySpotlight from '../../components/blog/CaseStudySpotlight';
import Newsletter from '../../components/blog/Newsletter';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      {/* Blog Categories */}
      <BlogCategories />
      
      {/* Latest Articles */}
      <LatestArticles />
      
      {/* Technical Insights */}
      <TechInsights />
      
      {/* Case Study Spotlight */}
      <CaseStudySpotlight />
      
      {/* Newsletter Signup */}
      <Newsletter />
    </main>
  );
}