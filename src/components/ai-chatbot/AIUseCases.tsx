'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  TruckIcon,
  HomeModernIcon,
  MapIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const useCaseCategories = [
  {
    id: 'government',
    name: 'Government & Defense',
    icon: ShieldCheckIcon,
    description: 'Mission-critical applications for public sector and defense operations',
    color: 'emerald',
    cases: [
      {
        title: 'Emergency Response Coordination',
        description: 'AI-powered dispatch and resource allocation during natural disasters and emergencies.',
        scenario: 'During Hurricane Florence, emergency coordinators need to optimize evacuation routes and allocate resources.',
        queries: [
          'Find all evacuation shelters within 50 miles of the storm path',
          'Which hospitals have capacity for 100+ patients in safe zones?',
          'Calculate optimal routes avoiding flooded areas'
        ],
        outcomes: [
          '35% faster response times',
          '2x more efficient resource allocation',
          'Saved 120+ lives through optimized evacuations'
        ],
        roi: '400%',
        timeframe: 'Real-time'
      },
      {
        title: 'Border Security Intelligence',
        description: 'Automated analysis of border crossings and threat assessment using spatial data.',
        scenario: 'Border patrol agents need to identify high-risk crossing areas and predict illegal activity patterns.',
        queries: [
          'Analyze crossing patterns in the last 30 days',
          'Identify areas with increasing suspicious activity',
          'Predict optimal patrol routes for maximum coverage'
        ],
        outcomes: [
          '60% improvement in threat detection',
          '45% reduction in response time',
          '25% decrease in illegal crossings'
        ],
        roi: '320%',
        timeframe: '24/7 monitoring'
      },
      {
        title: 'Urban Planning & Development',
        description: 'Data-driven city planning with population growth and infrastructure analysis.',
        scenario: 'City planners need to determine where to build new schools, hospitals, and transportation hubs.',
        queries: [
          'Where will population density be highest in 10 years?',
          'Find optimal locations for new public transportation',
          'Analyze traffic patterns to reduce congestion'
        ],
        outcomes: [
          'Reduced planning time by 70%',
          'Improved public satisfaction by 40%',
          '$50M saved in infrastructure costs'
        ],
        roi: '280%',
        timeframe: '6-12 months'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Logistics',
    icon: BuildingOfficeIcon,
    description: 'Business intelligence and operational optimization for private sector',
    color: 'blue',
    cases: [
      {
        title: 'Supply Chain Optimization',
        description: 'Real-time logistics optimization across global supply networks.',
        scenario: 'A Fortune 500 retailer needs to optimize inventory distribution across 2,000+ stores.',
        queries: [
          'Find fastest routes for same-day delivery in Seattle',
          'Which distribution centers are most cost-effective?',
          'Predict demand spikes by geographic region'
        ],
        outcomes: [
          '30% reduction in delivery costs',
          '50% improvement in delivery times',
          '25% decrease in inventory waste'
        ],
        roi: '350%',
        timeframe: '3-6 months'
      },
      {
        title: 'Site Selection & Market Analysis',
        description: 'AI-driven location intelligence for retail and commercial real estate.',
        scenario: 'A coffee chain wants to identify the best locations for 50 new stores.',
        queries: [
          'Find high-traffic areas with low coffee shop competition',
          'Analyze foot traffic patterns near office buildings',
          'Calculate potential revenue for each proposed location'
        ],
        outcomes: [
          '85% higher success rate for new stores',
          '40% increase in average revenue per location',
          'Reduced site evaluation time by 60%'
        ],
        roi: '450%',
        timeframe: '2-4 months'
      },
      {
        title: 'Fleet & Asset Management',
        description: 'Intelligent tracking and optimization of vehicle fleets and mobile assets.',
        scenario: 'A delivery company manages 5,000+ vehicles and needs to optimize routes and maintenance.',
        queries: [
          'Optimize delivery routes to minimize fuel consumption',
          'Which vehicles need maintenance based on usage patterns?',
          'Find the most efficient charging stations for electric vehicles'
        ],
        outcomes: [
          '25% reduction in fuel costs',
          '40% improvement in delivery efficiency',
          '30% decrease in maintenance costs'
        ],
        roi: '300%',
        timeframe: '1-3 months'
      }
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Development',
    icon: HomeModernIcon,
    description: 'Property intelligence and market analytics for real estate professionals',
    color: 'purple',
    cases: [
      {
        title: 'Property Valuation & Investment',
        description: 'AI-powered property analysis and investment opportunity identification.',
        scenario: 'Real estate investors want to identify undervalued properties with high appreciation potential.',
        queries: [
          'Find properties 20% below market value near planned developments',
          'Analyze neighborhood appreciation trends over 5 years',
          'Which areas have the highest rental yield potential?'
        ],
        outcomes: [
          '45% better investment returns',
          '60% faster property evaluation',
          '30% more accurate valuations'
        ],
        roi: '520%',
        timeframe: '1-2 weeks'
      },
      {
        title: 'Development Feasibility Analysis',
        description: 'Comprehensive site analysis for construction and development projects.',
        scenario: 'A developer needs to assess the viability of building a mixed-use complex.',
        queries: [
          'Analyze zoning restrictions and building codes',
          'Calculate construction costs based on site conditions',
          'Assess market demand for commercial and residential units'
        ],
        outcomes: [
          'Reduced project risk by 50%',
          '35% faster permitting process',
          '$2M saved in pre-construction costs'
        ],
        roi: '380%',
        timeframe: '4-8 weeks'
      },
      {
        title: 'Market Intelligence & Trends',
        description: 'Real-time market analysis and predictive analytics for real estate markets.',
        scenario: 'A real estate brokerage wants to predict which neighborhoods will see price increases.',
        queries: [
          'Which areas show signs of gentrification?',
          'Predict home price changes in the next 12 months',
          'Find emerging neighborhoods with growth potential'
        ],
        outcomes: [
          '70% accuracy in price predictions',
          '40% increase in successful transactions',
          '25% higher commission per sale'
        ],
        roi: '290%',
        timeframe: 'Ongoing'
      }
    ]
  }
];

export default function AIUseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('government');
  const [activeCase, setActiveCase] = useState(0);

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      emerald: active 
        ? 'bg-emerald-50 border-emerald-500 text-emerald-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300',
      blue: active 
        ? 'bg-blue-50 border-blue-500 text-blue-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300',
      purple: active 
        ? 'bg-purple-50 border-purple-500 text-purple-900' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string, active: boolean) => {
    const colors = {
      emerald: active ? 'bg-emerald-500' : 'bg-gray-100',
      blue: active ? 'bg-blue-500' : 'bg-gray-100',
      purple: active ? 'bg-purple-500' : 'bg-gray-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="ai-use-cases" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Real-World <span className="text-gradient">AI Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how organizations across industries are leveraging geospatial AI 
            to solve complex challenges, optimize operations, and drive measurable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {useCaseCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveCase(0);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    getColorClasses(category.color, activeCategory === category.id)
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      getIconColorClasses(category.color, activeCategory === category.id)
                    }`}>
                      <category.icon className={`w-5 h-5 ${
                        activeCategory === category.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-sm opacity-75">
                        {category.cases.length} use cases
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2 opacity-90">{category.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Use Case Details */}
          <div className="lg:col-span-8">
            {useCaseCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCategory === category.id ? 1 : 0,
                  y: activeCategory === category.id ? 0 : 20
                }}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                {/* Case Selector */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.cases.map((useCase, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCase(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeCase === index
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {useCase.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Case Content */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {category.cases.map((useCase, caseIndex) => (
                    <motion.div
                      key={caseIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCase === caseIndex ? 1 : 0 }}
                      className={`${activeCase === caseIndex ? 'block' : 'hidden'}`}
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                        <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-emerald-100">{useCase.description}</p>
                      </div>

                      <div className="p-6">
                        {/* Scenario */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center">
                            <MapIcon className="w-5 h-5 mr-2 text-emerald-600" />
                            Scenario
                          </h4>
                          <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{useCase.scenario}</p>
                        </div>

                        {/* Example Queries */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3">Example AI Queries</h4>
                          <div className="space-y-2">
                            {useCase.queries.map((query, queryIndex) => (
                              <div key={queryIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-gray-700 italic">"{query}"</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3">Measurable Outcomes</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {useCase.outcomes.map((outcome, outcomeIndex) => (
                              <div key={outcomeIndex} className="bg-emerald-50 rounded-lg p-4 text-center">
                                <ChartBarIcon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                                <p className="text-sm font-medium">{outcome}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ROI & Timeline */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <CurrencyDollarIcon className="w-8 h-8 text-green-600 mb-2" />
                                <h5 className="font-semibold text-gray-900">ROI</h5>
                                <p className="text-2xl font-bold text-green-600">{useCase.roi}</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-4 border border-blue-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <ClockIcon className="w-8 h-8 text-blue-600 mb-2" />
                                <h5 className="font-semibold text-gray-900">Implementation</h5>
                                <p className="text-lg font-medium text-blue-600">{useCase.timeframe}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-semibold mb-4">Ready to Implement Your Use Case?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every organization has unique challenges. Let's discuss how geospatial AI 
              can be customized to solve your specific problems and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Schedule Consultation
              </button>
              <button className="btn bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}