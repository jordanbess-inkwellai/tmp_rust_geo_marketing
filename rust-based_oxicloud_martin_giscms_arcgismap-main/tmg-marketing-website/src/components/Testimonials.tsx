'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { 
  ChatBubbleLeftRightIcon, 
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
  BuildingOfficeIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    type: 'text',
    featured: true,
    content: "Tech Maven's geospatial AI platform revolutionized our intelligence operations. The natural language querying capabilities allow our analysts to ask complex spatial questions in plain English, reducing analysis time from hours to minutes. The integration with our existing DCGS infrastructure was seamless, and the security compliance exceeded our strictest requirements.",
    author: "Colonel James Mitchell",
    title: "Director of Operations",
    organization: "U.S. Army Geospatial Center",
    avatar: '/images/testimonials/colonel-mitchell.jpg',
    rating: 5,
    metrics: [
      { label: 'Analysis Time Reduction', value: '85%' },
      { label: 'Query Response Time', value: '<2s' },
      { label: 'Analyst Productivity', value: '+340%' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-03-15',
    category: 'Military Intelligence'
  },
  {
    id: 2,
    type: 'video',
    featured: true,
    content: "The AI chatbot understands our geospatial terminology and responds with incredible accuracy. What used to take our team days of spatial analysis now happens in real-time. The multi-modal capability—combining imagery, sensor data, and natural language—has transformed how we conduct intelligence fusion operations.",
    author: "Dr. Maria Santos",
    title: "Chief Intelligence Officer", 
    organization: "Defense Intelligence Agency",
    avatar: '/images/testimonials/dr-santos.jpg',
    videoThumbnail: '/images/testimonials/santos-video-thumb.jpg',
    videoUrl: '/videos/testimonials/santos-testimonial.mp4',
    rating: 5,
    metrics: [
      { label: 'Processing Speed', value: '10x faster' },
      { label: 'Data Sources Integrated', value: '15+' },
      { label: 'Accuracy Improvement', value: '96%' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-02-28',
    category: 'Intelligence Fusion'
  },
  {
    id: 3,
    type: 'text',
    featured: false,
    content: "Outstanding platform with exceptional security compliance. The team understood our unique mission requirements and delivered a solution that not only met but exceeded our expectations. The real-time collaboration features enable seamless coordination across multiple agencies and classification levels.",
    author: "Robert Chen",
    title: "Senior Program Manager",
    organization: "National Geospatial-Intelligence Agency",
    avatar: '/images/testimonials/robert-chen.jpg',
    rating: 5,
    metrics: [
      { label: 'Multi-Agency Coordination', value: '100%' },
      { label: 'Compliance Achievement', value: 'TS/SCI' },
      { label: 'Deployment Time', value: '30 days' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-01-20',
    category: 'Geospatial Intelligence'
  },
  {
    id: 4,
    type: 'text',
    featured: false,
    content: "The spatial query capabilities are phenomenal. Our emergency responders can now ask questions like 'Find all hospitals within 10 miles of the flood zone' and get instant answers with visualizations. This technology saves lives during critical response operations.",
    author: "Sarah Johnson",
    title: "Emergency Operations Director",
    organization: "FEMA Region IV",
    avatar: '/images/testimonials/sarah-johnson.jpg',
    rating: 5,
    metrics: [
      { label: 'Response Time Improvement', value: '70%' },
      { label: 'Resource Allocation Efficiency', value: '+250%' },
      { label: 'Lives Saved (Estimated)', value: '120+' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-03-01',
    category: 'Emergency Management'
  },
  {
    id: 5,
    type: 'video',
    featured: false,
    content: "The AI's understanding of military terminology and geospatial concepts is impressive. It processes complex battlefield geometry queries and provides actionable intelligence that directly supports our decision-making processes. The learning capability means it gets better with each interaction.",
    author: "Major General Patricia Williams",
    title: "Director of Intelligence",
    organization: "U.S. Marine Corps Intelligence",
    avatar: '/images/testimonials/general-williams.jpg',
    videoThumbnail: '/images/testimonials/williams-video-thumb.jpg',
    videoUrl: '/videos/testimonials/williams-testimonial.mp4',
    rating: 5,
    metrics: [
      { label: 'Decision Speed', value: '5x faster' },
      { label: 'Intelligence Accuracy', value: '94%' },
      { label: 'Operational Readiness', value: '+180%' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-02-10',
    category: 'Military Operations'
  },
  {
    id: 6,
    type: 'text',
    featured: false,
    content: "Integration with our existing GIS infrastructure was remarkably smooth. The API compatibility and standards compliance made deployment straightforward. Our analysts love the intuitive interface and the ability to export results in multiple formats for reporting.",
    author: "Dr. Michael Torres",
    title: "Chief Technology Officer",
    organization: "Department of Homeland Security",
    avatar: '/images/testimonials/dr-torres.jpg',
    rating: 5,
    metrics: [
      { label: 'Integration Time', value: '2 weeks' },
      { label: 'User Adoption Rate', value: '98%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    verificationBadge: 'Verified Customer',
    date: '2024-01-15',
    category: 'Homeland Security'
  }
];

const caseStudies = [
  {
    title: "Multi-Domain Operations Support",
    description: "Enabled real-time collaboration between ground, air, and maritime units with 99.9% uptime.",
    metrics: ["50% faster decision cycles", "3x more data sources integrated", "24/7 operational support"],
    industry: "Defense Department"
  },
  {
    title: "Intelligence Data Processing",
    description: "Streamlined intelligence analysis workflow with automated feature extraction and anomaly detection.",
    metrics: ["75% reduction in analysis time", "95% accuracy improvement", "Seamless multi-INT integration"],
    industry: "Intelligence Community"
  },
  {
    title: "Emergency Response Coordination",
    description: "Provided critical situational awareness during humanitarian assistance and disaster relief operations.",
    metrics: ["Real-time data fusion", "Multi-agency coordination", "Mobile-first deployment"],
    industry: "Federal Emergency Management"
  }
];

// Statistics for the overview section
const overallStats = {
  totalCustomers: '50+',
  averageRating: 4.9,
  totalReviews: 127,
  avgImplementationTime: '45 days',
  customerSatisfaction: '98%'
};

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  
  // Auto-rotate featured testimonials
  useEffect(() => {
    const featuredTestimonials = testimonials.filter(t => t.featured);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const filteredTestimonials = filterCategory === 'all' 
    ? testimonials.filter(t => !t.featured)
    : testimonials.filter(t => !t.featured && t.category.toLowerCase().includes(filterCategory.toLowerCase()));
  
  const categories = ['all', 'Military', 'Intelligence', 'Emergency', 'Homeland Security'];

  const handlePlayVideo = (testimonialId: number) => {
    setIsPlaying(testimonialId);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Trusted by <span className="text-gradient">Defense Leaders</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Our geospatial AI platform is deployed across multiple government agencies and defense organizations,
            providing mission-critical intelligence capabilities that save lives and protect national interests.
          </p>
          
          {/* Overall Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{overallStats.totalCustomers}</div>
              <div className="text-sm text-secondary-600">Government Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <span className="text-3xl font-bold text-primary-600 mr-1">{overallStats.averageRating}</span>
                <StarIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-sm text-secondary-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{overallStats.totalReviews}</div>
              <div className="text-sm text-secondary-600">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{overallStats.avgImplementationTime}</div>
              <div className="text-sm text-secondary-600">Avg Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{overallStats.customerSatisfaction}</div>
              <div className="text-sm text-secondary-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-100 rounded-full -ml-12 -mb-12 opacity-50" />
            
            <AnimatePresence mode="wait">
              {featuredTestimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 text-yellow-400 mr-1" />
                          ))}
                          <span className="ml-2 text-sm text-secondary-600">
                            {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        
                        <blockquote className="text-xl md:text-2xl text-secondary-900 mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-secondary-300 rounded-full mr-4 flex items-center justify-center">
                            <UserIcon className="w-6 h-6 text-secondary-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                            <div className="text-sm text-secondary-600">{testimonial.title}</div>
                            <div className="text-xs text-secondary-500 flex items-center mt-1">
                              <BuildingOfficeIcon className="w-3 h-3 mr-1" />
                              {testimonial.organization}
                              <CheckBadgeIcon className="w-4 h-4 text-green-500 ml-2" />
                              <span className="ml-1">{testimonial.verificationBadge}</span>
                            </div>
                          </div>
                        </div>
                        
                        {testimonial.type === 'video' && (
                          <button 
                            onClick={() => handlePlayVideo(testimonial.id)}
                            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            <PlayIcon className="w-4 h-4 mr-2" />
                            Watch Video Testimonial
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                          <h4 className="font-semibold text-secondary-900 mb-4">Key Results</h4>
                          <div className="space-y-3">
                            {testimonial.metrics.map((metric, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <span className="text-sm text-secondary-600">{metric.label}</span>
                                <span className="font-bold text-primary-600">{metric.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                            {testimonial.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-primary-600' : 'bg-primary-200'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentTestimonial((prev) => 
                    prev === 0 ? featuredTestimonials.length - 1 : prev - 1
                  )}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeftIcon className="w-4 h-4 text-secondary-600" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => 
                    (prev + 1) % featuredTestimonials.length
                  )}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRightIcon className="w-4 h-4 text-secondary-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">More Customer Stories</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-secondary-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-50 rounded-full -mr-8 -mt-8 opacity-50" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 mr-1" />
                  ))}
                </div>
                {testimonial.type === 'video' && (
                  <div className="flex items-center text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    <PlayIcon className="w-3 h-3 mr-1" />
                    Video
                  </div>
                )}
              </div>
              
              <p className="text-secondary-700 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              
              <div className="space-y-3 mb-6">
                {testimonial.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-secondary-500">{metric.label}</span>
                    <span className="font-semibold text-primary-600">{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-secondary-100 pt-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-secondary-200 rounded-full mr-3 flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 text-sm">{testimonial.author}</div>
                    <div className="text-xs text-secondary-600">{testimonial.title}</div>
                  </div>
                </div>
                <div className="text-xs text-secondary-500 flex items-center justify-between">
                  <span>{testimonial.organization}</span>
                  <div className="flex items-center">
                    <CheckBadgeIcon className="w-3 h-3 text-green-500 mr-1" />
                    Verified
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="inline-flex items-center px-2 py-1 bg-secondary-50 text-secondary-600 rounded-full text-xs">
                    {testimonial.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-12">
            Mission Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="border border-secondary-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded mb-3 inline-block">
                  {study.industry}
                </div>
                
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                  {study.title}
                </h4>
                
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <ul className="space-y-2">
                  {study.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-sm text-secondary-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8">
            <h4 className="text-2xl font-semibold text-secondary-900 mb-6">
              Certified & Compliant for Mission-Critical Operations
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'FedRAMP Authorized', status: 'Moderate' },
                { label: 'NIST 800-53', status: 'Compliant' },
                { label: 'Section 508', status: 'Accessible' },
                { label: 'SOC 2 Type II', status: 'Certified' }
              ].map((cert, index) => (
                <div key={cert.label} className="bg-white rounded-lg p-4 shadow-sm">
                  <CheckBadgeIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-secondary-900">{cert.label}</div>
                  <div className="text-xs text-secondary-600">{cert.status}</div>
                </div>
              ))}
            </div>
            
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our platform meets the highest standards for government and defense deployments,
              ensuring your mission-critical operations remain secure and compliant.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
