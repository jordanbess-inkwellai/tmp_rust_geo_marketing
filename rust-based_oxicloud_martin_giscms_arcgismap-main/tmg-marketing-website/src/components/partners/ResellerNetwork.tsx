'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon,
  MapPinIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const regions = [
  {
    id: 'north-america',
    name: 'North America',
    countries: 3,
    resellers: 45,
    color: 'from-blue-500 to-indigo-600',
    growth: '+15%'
  },
  {
    id: 'europe',
    name: 'Europe',
    countries: 12,
    resellers: 68,
    color: 'from-green-500 to-emerald-600',
    growth: '+22%'
  },
  {
    id: 'asia-pacific',
    name: 'Asia Pacific',
    countries: 8,
    resellers: 42,
    color: 'from-purple-500 to-pink-600',
    growth: '+28%'
  },
  {
    id: 'latin-america',
    name: 'Latin America',
    countries: 6,
    resellers: 23,
    color: 'from-orange-500 to-red-600',
    growth: '+18%'
  }
];

const topResellers = [
  {
    name: 'TechSolutions Global',
    region: 'North America',
    tier: 'Platinum',
    logo: '🏢',
    metrics: {
      revenue: '$2.4M',
      deals: 156,
      satisfaction: '98%',
      growth: '+24%'
    },
    specialties: ['Enterprise', 'Government', 'Healthcare'],
    contact: {
      phone: '+1-555-0123',
      email: 'partners@techsolutions.com',
      website: 'www.techsolutions.com'
    }
  },
  {
    name: 'EuroGIS Partners',
    region: 'Europe',
    tier: 'Gold',
    logo: '🌍',
    metrics: {
      revenue: '$1.8M',
      deals: 134,
      satisfaction: '96%',
      growth: '+31%'
    },
    specialties: ['Manufacturing', 'Transportation', 'Utilities'],
    contact: {
      phone: '+44-207-555-0123',
      email: 'info@eurogis.eu',
      website: 'www.eurogis.eu'
    }
  },
  {
    name: 'APAC Spatial Tech',
    region: 'Asia Pacific',
    tier: 'Gold',
    logo: '🗾',
    metrics: {
      revenue: '$1.6M',
      deals: 98,
      satisfaction: '97%',
      growth: '+42%'
    },
    specialties: ['Smart Cities', 'Agriculture', 'Mining'],
    contact: {
      phone: '+65-6555-0123',
      email: 'sales@apacspatial.com',
      website: 'www.apacspatial.com'
    }
  }
];

const resellerBenefits = [
  {
    icon: ChartBarIcon,
    title: 'Revenue Growth',
    description: 'Average 35% revenue increase in first year',
    stat: '35%'
  },
  {
    icon: UserGroupIcon,
    title: 'Sales Support',
    description: 'Dedicated sales team and technical resources',
    stat: '24/7'
  },
  {
    icon: TrophyIcon,
    title: 'Recognition Program',
    description: 'Quarterly awards and annual partner summit',
    stat: '4x/year'
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'Market Protection',
    description: 'Exclusive territories and lead protection',
    stat: '100%'
  }
];

export default function ResellerNetwork() {
  const [selectedRegion, setSelectedRegion] = useState('north-america');

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Global Reseller Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with authorized resellers worldwide who provide local expertise, 
            support, and sales services tailored to your regional needs.
          </motion.p>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: 'Authorized Resellers', value: '180+', icon: BuildingStorefrontIcon },
            { label: 'Countries Served', value: '45+', icon: MapPinIcon },
            { label: 'Combined Revenue', value: '$28M+', icon: ChartBarIcon },
            { label: 'Customer Satisfaction', value: '96%', icon: TrophyIcon }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Regional Overview */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Regional Coverage
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {regions.map((region, index) => (
              <motion.button
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedRegion(region.id)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  selectedRegion === region.id
                    ? 'bg-gradient-to-br ' + region.color + ' text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="text-center">
                  <GlobeAltIcon className={`w-12 h-12 mx-auto mb-4 ${
                    selectedRegion === region.id ? 'text-white' : 'text-blue-600'
                  }`} />
                  <h4 className="font-semibold mb-2">{region.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className={`text-2xl font-bold ${
                        selectedRegion === region.id ? 'text-white' : 'text-blue-600'
                      }`}>
                        {region.resellers}
                      </div>
                      <div className={selectedRegion === region.id ? 'text-white/80' : 'text-gray-500'}>
                        Resellers
                      </div>
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${
                        selectedRegion === region.id ? 'text-white' : 'text-green-600'
                      }`}>
                        {region.growth}
                      </div>
                      <div className={selectedRegion === region.id ? 'text-white/80' : 'text-gray-500'}>
                        Growth
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Top Performing Resellers */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Top Performing Resellers
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topResellers.map((reseller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{reseller.logo}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{reseller.name}</h4>
                      <div className="text-blue-600 font-medium">{reseller.region}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    reseller.tier === 'Platinum' 
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {reseller.tier}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-green-600">{reseller.metrics.revenue}</div>
                    <div className="text-sm text-gray-600">Annual Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{reseller.metrics.deals}</div>
                    <div className="text-sm text-gray-600">Deals Closed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-purple-600">{reseller.metrics.satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-xl font-bold text-orange-600">{reseller.metrics.growth}</div>
                    <div className="text-sm text-gray-600">YoY Growth</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-3">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {reseller.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {reseller.contact.phone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <EnvelopeIcon className="w-4 h-4 mr-2" />
                    {reseller.contact.email}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <GlobeAltIcon className="w-4 h-4 mr-2" />
                    {reseller.contact.website}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reseller Benefits */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Why Partner With Us?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resellerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white"
        >
          <BuildingStorefrontIcon className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Become an Authorized Reseller</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing network of successful resellers and start building your 
            geospatial solutions business with industry-leading products and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply to Become a Reseller
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Find a Local Reseller
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}