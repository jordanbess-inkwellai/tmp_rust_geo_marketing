import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feature Tour & Training Videos | Tech Maven Geospatial',
  description: 'Explore comprehensive video tutorials, feature demonstrations, and real-world use cases of Tech Maven Geospatial solutions in defense and intelligence operations.',
  keywords: 'defense technology videos, GEOINT demos, military software tutorials, FMV processing, OGC API tutorial, command control dashboard, 3D terrain visualization',
  openGraph: {
    title: 'Feature Tour & Training Videos | Tech Maven Geospatial',
    description: 'Comprehensive video tutorials and demonstrations of our defense-grade geospatial intelligence platform',
    type: 'website',
    url: 'https://techmaven.geospatial.com/videos',
    images: [
      {
        url: '/og-videos.png',
        width: 1200,
        height: 630,
        alt: 'Tech Maven Geospatial Video Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Maven Geospatial Video Tours',
    description: 'See our defense-grade geospatial platform in action',
    images: ['/og-videos.png'],
  },
  alternates: {
    canonical: 'https://techmaven.geospatial.com/videos',
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}