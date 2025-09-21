'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

interface ROIInputs {
  currentUsers: number;
  currentSystemCost: number;
  dataProcessingHours: number;
  averageAnalystSalary: number;
  deploymentTimeWeeks: number;
  currentSystemMaintenance: number;
}

interface ROIResults {
  totalSavingsYear1: number;
  totalSavingsYear3: number;
  roiPercentage: number;
  paybackMonths: number;
  productivityGains: number;
  timeSavings: number;
  maintenanceSavings: number;
  deploymentSavings: number;
}

const industryBenchmarks = {
  government: {
    name: 'Government/Defense',
    currentSystemCost: 500000,
    dataProcessingHours: 160,
    averageAnalystSalary: 95000,
    deploymentTimeWeeks: 52,
    currentSystemMaintenance: 150000
  },
  enterprise: {
    name: 'Enterprise',
    currentSystemCost: 300000,
    dataProcessingHours: 120,
    averageAnalystSalary: 85000,
    deploymentTimeWeeks: 26,
    currentSystemMaintenance: 90000
  },
  smallBusiness: {
    name: 'Small Business',
    currentSystemCost: 100000,
    dataProcessingHours: 80,
    averageAnalystSalary: 70000,
    deploymentTimeWeeks: 12,
    currentSystemMaintenance: 30000
  }
};

export default function ROICalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<'calculator' | 'results'>('calculator');
  const [selectedIndustry, setSelectedIndustry] = useState<keyof typeof industryBenchmarks>('government');
  const [inputs, setInputs] = useState<ROIInputs>({
    currentUsers: 25,
    currentSystemCost: 500000,
    dataProcessingHours: 160,
    averageAnalystSalary: 95000,
    deploymentTimeWeeks: 52,
    currentSystemMaintenance: 150000
  });

  const [results, setResults] = useState<ROIResults>({
    totalSavingsYear1: 0,
    totalSavingsYear3: 0,
    roiPercentage: 0,
    paybackMonths: 0,
    productivityGains: 0,
    timeSavings: 0,
    maintenanceSavings: 0,
    deploymentSavings: 0
  });

  // Calculate ROI whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [inputs]);

  // Update inputs when industry benchmark changes
  useEffect(() => {
    const benchmark = industryBenchmarks[selectedIndustry];
    setInputs(prev => ({
      ...prev,
      ...benchmark
    }));
  }, [selectedIndustry]);

  const calculateROI = () => {
    // TMG Platform costs (estimated based on Enterprise tier)
    const tmgAnnualCost = inputs.currentUsers <= 10 ? 28788 : inputs.currentUsers <= 100 ? 95988 : 239988;
    
    // Current system costs
    const currentAnnualCost = inputs.currentSystemCost * 0.2 + inputs.currentSystemMaintenance; // 20% annual license + maintenance
    
    // Time savings calculations
    const hoursPerMonth = inputs.dataProcessingHours;
    const timeSavingsPercentage = 0.75; // 75% time savings
    const hoursSaved = hoursPerMonth * timeSavingsPercentage;
    const monthlySalaryCost = (inputs.averageAnalystSalary / 12) * inputs.currentUsers;
    const monthlyTimeSavings = (hoursSaved / hoursPerMonth) * monthlySalaryCost;
    const annualTimeSavings = monthlyTimeSavings * 12;
    
    // Deployment savings
    const currentDeploymentCost = (inputs.deploymentTimeWeeks / 4) * (inputs.averageAnalystSalary / 12) * 0.5; // 50% of team focused on deployment
    const tmgDeploymentTime = 4; // 4 weeks
    const tmgDeploymentCost = (tmgDeploymentTime / 4) * (inputs.averageAnalystSalary / 12) * 0.2; // 20% of team
    const deploymentSavings = currentDeploymentCost - tmgDeploymentCost;
    
    // Maintenance savings
    const maintenanceSavings = inputs.currentSystemMaintenance * 0.8; // 80% reduction in maintenance
    
    // Total annual savings
    const totalAnnualSavings = annualTimeSavings + maintenanceSavings;
    const netSavingsYear1 = totalAnnualSavings - tmgAnnualCost + deploymentSavings;
    const netSavingsYear3 = (totalAnnualSavings - tmgAnnualCost) * 3 + deploymentSavings;
    
    // ROI calculation
    const totalInvestment = tmgAnnualCost;
    const roiPercentage = (netSavingsYear1 / totalInvestment) * 100;
    const paybackMonths = totalInvestment / (totalAnnualSavings / 12);
    
    // Productivity gains
    const productivityGains = annualTimeSavings;

    setResults({
      totalSavingsYear1: Math.max(0, netSavingsYear1),
      totalSavingsYear3: Math.max(0, netSavingsYear3),
      roiPercentage: Math.max(0, roiPercentage),
      paybackMonths: Math.max(1, paybackMonths),
      productivityGains,
      timeSavings: annualTimeSavings,
      maintenanceSavings,
      deploymentSavings: Math.max(0, deploymentSavings)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${Math.round(percentage)}%`;
  };

  return (
    <section id="roi-calculator" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Calculate Your <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See how much you can save by switching to our geospatial AI platform. 
            Our customers typically see 340% ROI within the first year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-secondary-200 overflow-hidden"
          >
            <div className="bg-primary-600 text-white p-6">
              <div className="flex items-center">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="text-2xl font-semibold">ROI Calculator</h3>
                  <p className="text-primary-100">Enter your organization's details</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Industry Benchmark Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-900 mb-3">
                  Organization Type
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(industryBenchmarks).map(([key, benchmark]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedIndustry(key as keyof typeof industryBenchmarks)}
                      className={`p-3 text-left rounded-lg border transition-colors ${
                        selectedIndustry === key
                          ? 'border-primary-500 bg-primary-50 text-primary-900'
                          : 'border-secondary-200 hover:border-secondary-300'
                      }`}
                    >
                      <div className="font-medium">{benchmark.name}</div>
                      <div className="text-sm text-secondary-600">
                        Optimized for {benchmark.name.toLowerCase()} requirements
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Number of Users
                  </label>
                  <div className="relative">
                    <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="number"
                      value={inputs.currentUsers}
                      onChange={(e) => setInputs(prev => ({ ...prev, currentUsers: parseInt(e.target.value) || 0 }))}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Current System Cost (Annual)
                  </label>
                  <div className="relative">
                    <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="number"
                      value={inputs.currentSystemCost}
                      onChange={(e) => setInputs(prev => ({ ...prev, currentSystemCost: parseInt(e.target.value) || 0 }))}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="500000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Data Processing Hours/Month
                  </label>
                  <div className="relative">
                    <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="number"
                      value={inputs.dataProcessingHours}
                      onChange={(e) => setInputs(prev => ({ ...prev, dataProcessingHours: parseInt(e.target.value) || 0 }))}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="160"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Average Analyst Salary
                  </label>
                  <div className="relative">
                    <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="number"
                      value={inputs.averageAnalystSalary}
                      onChange={(e) => setInputs(prev => ({ ...prev, averageAnalystSalary: parseInt(e.target.value) || 0 }))}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="95000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Current Maintenance Cost (Annual)
                  </label>
                  <div className="relative">
                    <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="number"
                      value={inputs.currentSystemMaintenance}
                      onChange={(e) => setInputs(prev => ({ ...prev, currentSystemMaintenance: parseInt(e.target.value) || 0 }))}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="150000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl shadow-xl border border-green-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-primary-600 text-white p-6">
              <div className="flex items-center">
                <ChartBarIcon className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="text-2xl font-semibold">Your ROI Results</h3>
                  <p className="text-green-100">Projected savings and benefits</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {formatCurrency(results.totalSavingsYear1)}
                  </div>
                  <div className="text-sm text-secondary-600">Year 1 Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {formatPercentage(results.roiPercentage)}
                  </div>
                  <div className="text-sm text-secondary-600">ROI Percentage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-900 mb-2">
                    {Math.round(results.paybackMonths)}
                  </div>
                  <div className="text-sm text-secondary-600">Payback (Months)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatCurrency(results.totalSavingsYear3)}
                  </div>
                  <div className="text-sm text-secondary-600">3-Year Savings</div>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-secondary-900">Savings Breakdown:</h4>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Time Savings</span>
                  </div>
                  <span className="font-medium text-green-600">{formatCurrency(results.timeSavings)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Maintenance Savings</span>
                  </div>
                  <span className="font-medium text-green-600">{formatCurrency(results.maintenanceSavings)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Deployment Savings</span>
                  </div>
                  <span className="font-medium text-green-600">{formatCurrency(results.deploymentSavings)}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-lg p-4 text-center border">
                <p className="text-sm text-secondary-600 mb-4">
                  Ready to realize these savings for your organization?
                </p>
                <div className="space-y-3">
                  <button className="w-full btn bg-primary-600 hover:bg-primary-700 text-white">
                    Get Custom Pricing Quote
                  </button>
                  <button className="w-full btn bg-transparent border-primary-600 text-primary-600 hover:bg-primary-50">
                    Schedule ROI Discussion
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-secondary-50 rounded-xl p-6 border border-secondary-200"
        >
          <h4 className="font-semibold text-secondary-900 mb-3">Calculation Methodology</h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-secondary-600">
            <div>
              <h5 className="font-medium text-secondary-900 mb-2">Assumptions:</h5>
              <ul className="space-y-1 list-disc list-inside">
                <li>75% reduction in data processing time</li>
                <li>80% reduction in system maintenance costs</li>
                <li>30-day deployment vs. 6-18 months traditional</li>
                <li>Based on actual customer results and industry benchmarks</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-secondary-900 mb-2">Benefits Include:</h5>
              <ul className="space-y-1 list-disc list-inside">
                <li>Analyst productivity improvements</li>
                <li>Reduced infrastructure and licensing costs</li>
                <li>Faster time-to-value from new deployments</li>
                <li>Decreased operational overhead</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}