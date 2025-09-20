import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://techmaven.geospatial.com'),
  title: {
    default: 'Tech Maven Geospatial - Defense & GEOINT Solutions',
    template: '%s | Tech Maven Geospatial'
  },
  description: 'Advanced geospatial intelligence and command & control solutions for defense, military, and public safety organizations. Open standards, modern architecture, enterprise security.',
  keywords: [
    'defense',
    'geoint',
    'gis',
    'geospatial intelligence',
    'command and control',
    'situational awareness',
    'military mapping',
    'ogc api',
    'fmv analysis',
    'klv metadata',
    'dted elevation',
    'climate data',
    'rust geospatial',
    'open standards'
  ],
  authors: [{ name: 'Tech Maven Geospatial, LLC' }],
  creator: 'Tech Maven Geospatial, LLC',
  publisher: 'Tech Maven Geospatial, LLC',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techmaven.geospatial.com',
    siteName: 'Tech Maven Geospatial',
    title: 'Tech Maven Geospatial - Defense & GEOINT Solutions',
    description: 'Advanced geospatial intelligence and command & control solutions for defense, military, and public safety organizations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Maven Geospatial - Defense Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Maven Geospatial - Defense & GEOINT Solutions',
    description: 'Advanced geospatial intelligence and command & control solutions for defense and public safety.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://techmaven.geospatial.com',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-secondary-900`}>
        <Analytics />
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}