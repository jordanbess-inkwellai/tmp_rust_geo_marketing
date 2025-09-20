'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import TechStack from '@/components/TechStack';
import CaseStudies from '@/components/CaseStudies';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Solutions />
        <TechStack />
        <CaseStudies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}