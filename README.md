# Tech Maven Geospatial - Marketing Website

A professional marketing website for Tech Maven Geospatial's defense and GEOINT solutions, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Target Audience

This website is designed for:
- Defense contractors and military organizations
- Intelligence agencies and GEOINT professionals
- Federal, state, and local government agencies
- Public safety and emergency management
- Systems integrators and partners

## 🚀 Features

### 🛡️ Defense-Focused Design
- **Security-first approach** with proper headers and compliance considerations
- **Classification-aware** design elements and color coding
- **Professional aesthetic** appropriate for government audiences
- **Accessibility compliant** following government standards

### 📱 Modern Technology Stack
- **Next.js 14** with App Router and Turbopack
- **TypeScript** for type safety and better development experience
- **Tailwind CSS 4** for responsive, utility-first styling
- **Framer Motion** for smooth animations and interactions
- **React Hook Form + Zod** for form validation
- **Responsive design** optimized for all devices

### 🎨 Components & Sections
- **Hero Section** with rotating value propositions
- **Features Overview** highlighting technical capabilities
- **Solutions Showcase** with classification levels and use cases
- **Technology Stack** demonstrating architecture advantages
- **Case Studies** with real-world success metrics
- **Certifications & Compliance** showing credentials and roadmap
- **Contact Forms** with security clearance considerations

### 🔒 Security & Compliance
- **Proper security headers** (CSP, HSTS, X-Frame-Options)
- **Privacy-focused** with consent management
- **Export control** considerations and notices
- **Unclassified communications** guidelines
- **Government-friendly** contact methods

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control

### Quick Start

```bash
# Clone or navigate to the marketing website directory
cd tmg-marketing-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site

# Analysis
npm run analyze      # Analyze bundle size with @next/bundle-analyzer
```

## 📁 Project Structure

```
tmg-marketing-website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Solutions.tsx    # Solutions overview
│   │   ├── TechStack.tsx    # Technology stack
│   │   ├── CaseStudies.tsx  # Customer success stories
│   │   ├── Certifications.tsx # Compliance & certifications
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Site footer
│   ├── lib/                 # Utility libraries
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
/* Primary - Professional Blue */
primary-50 to primary-950

/* Secondary - Sophisticated Gray */
secondary-50 to secondary-950

/* Accent - Strategic Gold */
accent-50 to accent-950

/* Classification Colors */
unclassified: #22c55e (Green)
confidential: #3b82f6 (Blue)
secret: #ef4444 (Red)
topsecret: #dc2626 (Dark Red)
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Responsive scaling** with mobile-first approach

### Components
- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Standard, hover effects, shadow variations
- **Forms**: Styled inputs, validation states, accessibility
- **Navigation**: Mobile-responsive with smooth scrolling

## 📝 Content Guidelines

### Writing Style
- **Professional tone** appropriate for government audiences
- **Technical accuracy** in describing capabilities
- **Security awareness** in all communications
- **Clear value propositions** with measurable benefits

### Visual Elements
- **High contrast** for accessibility
- **Professional imagery** (avoid stock photos when possible)
- **Consistent iconography** using Heroicons
- **Proper classification markings** where appropriate

## 🔧 Customization

### Branding Updates
1. **Logo/Branding**: Update logo in `Header.tsx` and `Footer.tsx`
2. **Colors**: Modify `tailwind.config.js` color palette
3. **Fonts**: Update Google Fonts imports in `layout.tsx`
4. **Metadata**: Update SEO information in `layout.tsx`

### Content Updates
1. **Hero Messages**: Edit rotating text array in `Hero.tsx`
2. **Features**: Update feature list in `Features.tsx`
3. **Solutions**: Modify solutions array in `Solutions.tsx`
4. **Case Studies**: Replace with actual customer stories
5. **Contact Info**: Update contact details in `Contact.tsx` and `Footer.tsx`

### Adding Pages
```bash
# Create new page
mkdir src/app/new-page
touch src/app/new-page/page.tsx

# Add to navigation
# Update navigation arrays in Header.tsx and Footer.tsx
```

## 🌐 Deployment

### Static Export (Recommended)
```bash
# Build and export static site
npm run build
npm run export

# Deploy to any static hosting (GitHub Pages, Netlify, etc.)
```

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set up custom domain and environment variables in Vercel dashboard
```

### Government Cloud Deployment
- **AWS GovCloud**: Use S3 + CloudFront for static hosting
- **Azure Government**: Use Storage + CDN for static sites
- **On-premise**: Deploy via web server (Apache, Nginx)

## 🔒 Security Considerations

### Headers & Security
- **Content Security Policy** configured in `next.config.js`
- **Security headers** set for government compliance
- **No external tracking** by default (add analytics carefully)
- **Privacy-first** contact forms with consent management

### Contact Form Security
- **Client-side validation** with Zod schemas
- **Server-side validation** required for production
- **Rate limiting** should be implemented
- **CAPTCHA** recommended for public deployment

## 📊 Performance

### Optimization Features
- **Next.js 14** with Turbopack for fast development
- **Image optimization** with next/image
- **Code splitting** with dynamic imports
- **Bundle analysis** with @next/bundle-analyzer
- **Static generation** for optimal performance

### Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

### Development Workflow
1. **Create feature branch** from main
2. **Follow component structure** patterns
3. **Update TypeScript types** as needed
4. **Test responsive design** across devices
5. **Run linting** before committing
6. **Create pull request** with detailed description

### Code Standards
- **TypeScript** strict mode enabled
- **ESLint** configuration for Next.js
- **Prettier** for code formatting
- **Conventional commits** for version control

## 📞 Support

### Technical Support
- **Development Issues**: Check Next.js documentation
- **Styling Questions**: Refer to Tailwind CSS docs
- **Component Library**: Review existing components
- **TypeScript**: Follow established patterns

### Content Support
- **Marketing Copy**: Align with brand guidelines
- **Technical Accuracy**: Validate with engineering team
- **Compliance**: Review with legal/security teams
- **Accessibility**: Test with screen readers

## 📜 License

This marketing website is proprietary to Tech Maven Geospatial, LLC. All rights reserved.

---

**Built with ❤️ for defense and intelligence professionals**

*This website contains unclassified information only. For classified discussions, please contact us through appropriate secure channels.*