/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://techmaven.geospatial.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // For smaller sites, single sitemap is fine
  outDir: './public',
  
  // SEO Configuration
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  
  // Custom sitemap entries with specific priorities
  transform: async (config, path) => {
    // Set custom priorities based on page importance
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/privacy' || path === '/terms') {
      priority = 0.3;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Additional URLs (for future pages)
  additionalPaths: async (config) => {
    return [
      // Future pages can be added here
      // await config.transform(config, '/solutions'),
      // await config.transform(config, '/resources'),
    ];
  },
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Government/defense specific crawlers
      {
        userAgent: 'GoogleBot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      // Future sitemaps can be added here
    ],
    additionalRobotsTxt: `
# Government compliance notice
# This site contains unclassified information only
# For classified discussions, contact through secure channels

# Performance optimization
User-agent: *
Crawl-delay: 1

# Block sensitive directories
Disallow: /.env*
Disallow: /.git/
Disallow: /node_modules/
    `,
  },
  
  // Exclude certain paths from sitemap
  exclude: [
    '/404',
    '/500',
    '/_*',
    '/api/*',
  ],
};