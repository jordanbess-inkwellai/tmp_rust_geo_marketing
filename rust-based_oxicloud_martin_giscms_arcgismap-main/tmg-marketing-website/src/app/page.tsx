'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { LazySection } from '@/components/LazyLoad';
import { Suspense } from 'react';

// Critical components loaded immediately
import About from '@/components/About';
import Features from '@/components/Features';

// Non-critical components loaded lazily
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="section animate-pulse bg-white h-96" />,
});

const Solutions = dynamic(() => import('@/components/Solutions'), {
  loading: () => <div className="section animate-pulse bg-secondary-50 h-96" />,
});

const TechStack = dynamic(() => import('@/components/TechStack'), {
  loading: () => <div className="section animate-pulse bg-white h-96" />,
});

const CaseStudies = dynamic(() => import('@/components/CaseStudies'), {
  loading: () => <div className="section animate-pulse bg-secondary-50 h-96" />,
});

const Certifications = dynamic(() => import('@/components/Certifications'), {
  loading: () => <div className="section animate-pulse bg-white h-96" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="section animate-pulse bg-secondary-50 h-96" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="animate-pulse bg-secondary-900 h-64" />,
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Solutions />
        </LazySection>
        <LazySection>
          <TechStack />
        </LazySection>
        <LazySection>
          <CaseStudies />
        </LazySection>
        <LazySection>
          <Certifications />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </>
  );
}
