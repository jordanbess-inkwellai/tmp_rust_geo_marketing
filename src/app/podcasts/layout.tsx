import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defense Tech Insights Podcast | Tech Maven Geospatial',
  description: 'Join industry leaders and defense experts exploring GEOINT, command & control systems, and military technology innovations. Weekly episodes featuring expert analysis and real-world insights.',
  keywords: 'defense podcast, GEOINT podcast, military technology, command and control, defense tech, geospatial intelligence, C2 systems, defense innovation',
  openGraph: {
    title: 'Defense Tech Insights Podcast | Tech Maven Geospatial',
    description: 'Weekly podcast exploring the latest in GEOINT, command & control systems, and military technology innovations',
    type: 'website',
    url: 'https://techmaven.geospatial.com/podcasts',
    images: [
      {
        url: '/og-podcasts.png',
        width: 1200,
        height: 630,
        alt: 'Tech Maven Geospatial Podcast Series',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defense Tech Insights Podcast',
    description: 'Weekly podcast on GEOINT and defense technology innovations',
    images: ['/og-podcasts.png'],
  },
  alternates: {
    canonical: 'https://techmaven.geospatial.com/podcasts',
  },
};

export default function PodcastsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}