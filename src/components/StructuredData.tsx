'use client';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article';
  data?: any;
}

export function StructuredData({ type, data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techmaven.geospatial.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tech Maven Geospatial, LLC",
          "alternateName": "Tech Maven Geospatial",
          "url": baseUrl,
          "logo": `${baseUrl}/android-chrome-512x512.svg`,
          "description": "Advanced geospatial intelligence and command & control solutions for defense, military, and public safety organizations.",
          "foundingDate": "2024",
          "founders": [
            {
              "@type": "Person",
              "name": "Tech Maven Geospatial Team"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US",
            "description": "Washington, DC Metro Area"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@techmaven.geospatial.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            // Add social media profiles when available
          ],
          "industry": [
            "Defense Technology",
            "Geospatial Intelligence",
            "Government Software",
            "Military Technology"
          ],
          "knowsAbout": [
            "Geospatial Intelligence",
            "GEOINT",
            "Command and Control Systems",
            "Defense Technology",
            "Military Mapping",
            "OGC API Standards",
            "Rust Programming",
            "Cloud Native Applications"
          ],
          "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "Geospatial Intelligence Platform",
              "applicationCategory": "Defense Software",
              "operatingSystem": "Cross-platform"
            }
          }
        };
        
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Tech Maven Geospatial - Defense & GEOINT Solutions",
          "url": baseUrl,
          "description": "Next-generation geospatial intelligence platform built with Rust for defense, military, and public safety organizations.",
          "publisher": {
            "@type": "Organization",
            "name": "Tech Maven Geospatial, LLC"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": [
              "Defense Contractors",
              "Military Organizations", 
              "Intelligence Agencies",
              "Public Safety",
              "Government Agencies"
            ]
          }
        };
        
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Geospatial Intelligence Platform",
          "description": "Advanced geospatial intelligence and command & control solutions built with Rust for unmatched performance and security.",
          "provider": {
            "@type": "Organization",
            "name": "Tech Maven Geospatial, LLC"
          },
          "serviceType": "Software as a Service",
          "category": [
            "Defense Technology",
            "Geospatial Intelligence",
            "Command and Control Systems"
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": [
              "Defense Organizations",
              "Military",
              "Intelligence Agencies",
              "Public Safety"
            ]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Geospatial Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "SoftwareApplication",
                  "name": "OGC API Platform",
                  "description": "Standards-compliant geospatial data services"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "SoftwareApplication",
                  "name": "FMV Analysis Tools",
                  "description": "Full Motion Video intelligence analysis"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "SoftwareApplication", 
                  "name": "Real-time Collaboration",
                  "description": "Multi-analyst collaborative environment"
                }
              }
            ]
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "Contact for pricing",
            "priceCurrency": "USD"
          }
        };
        
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "Tech Maven Geospatial - Defense & GEOINT Solutions",
          "description": data.description || "Advanced geospatial intelligence platform for defense and military organizations",
          "author": {
            "@type": "Organization",
            "name": "Tech Maven Geospatial, LLC"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Tech Maven Geospatial, LLC",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/android-chrome-512x512.svg`
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || baseUrl
          },
          "image": {
            "@type": "ImageObject",
            "url": data.image || `${baseUrl}/og-image.svg`,
            "width": 1200,
            "height": 630
          }
        };
        
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}

// Pre-configured components for common use cases
export function OrganizationSchema() {
  return <StructuredData type="organization" />;
}

export function WebsiteSchema() {
  return <StructuredData type="website" />;
}

export function ServiceSchema() {
  return <StructuredData type="service" />;
}

export function ArticleSchema(props: { title?: string; description?: string; url?: string; image?: string }) {
  return <StructuredData type="article" data={props} />;
}