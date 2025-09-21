'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import {
  BellAlertIcon,
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
  FireIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  CogIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const alertTypes = [
  {
    id: 'system',
    name: 'System Alerts',
    icon: CogIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Infrastructure and system performance alerts',
    count: 12,
    priority: 'Medium'
  },
  {
    id: 'security',
    name: 'Security Alerts',
    icon: ShieldExclamationIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Security threats and breach attempts',
    count: 3,
    priority: 'Critical'
  },
  {
    id: 'operational',
    name: 'Operational Alerts',
    icon: ExclamationTriangleIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: 'Business operations and workflow alerts',
    count: 8,
    priority: 'High'
  },
  {
    id: 'data',
    name: 'Data Quality',
    icon: FireIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Data integrity and quality issues',
    count: 5,
    priority: 'Medium'
  }
];

const recentAlerts = [
  {
    id: 1,
    type: 'security',
    severity: 'critical',
    title: 'Unusual Access Pattern Detected',
    description: 'Multiple failed login attempts from IP 192.168.1.100',
    location: 'Washington, DC',
    timestamp: '2 minutes ago',
    status: 'active',
    assignee: 'Security Team'
  },
  {
    id: 2,
    type: 'system',
    severity: 'high',
    title: 'High CPU Usage on Server 03',
    description: 'CPU utilization exceeded 85% threshold for 15 minutes',
    location: 'Data Center East',
    timestamp: '5 minutes ago',
    status: 'acknowledged',
    assignee: 'DevOps Team'
  },
  {
    id: 3,
    type: 'operational',
    severity: 'medium',
    title: 'Batch Processing Delayed',
    description: 'Daily data processing job delayed by 30 minutes',
    location: 'Processing Pipeline',
    timestamp: '12 minutes ago',
    status: 'resolved',
    assignee: 'Data Team'
  },
  {
    id: 4,
    type: 'data',
    severity: 'high',
    title: 'Data Quality Anomaly',
    description: 'Sudden drop in data accuracy below 95% threshold',
    location: 'Dataset Alpha-7',
    timestamp: '18 minutes ago',
    status: 'active',
    assignee: 'QA Team'
  },
  {
    id: 5,
    type: 'system',
    severity: 'low',
    title: 'Scheduled Maintenance Reminder',
    description: 'System maintenance scheduled for tonight at 2:00 AM',
    location: 'All Systems',
    timestamp: '1 hour ago',
    status: 'scheduled',
    assignee: 'Admin'
  }
];

const alertMetrics = {
  totalAlerts: 28,
  activeAlerts: 15,
  resolvedToday: 42,
  avgResponseTime: '3.2 min',
  criticalAlerts: 3,
  uptime: 99.97
};

const alertActions = [
  { name: 'Acknowledge', icon: CheckCircleIcon, color: 'text-blue-600' },
  { name: 'Assign', icon: UserGroupIcon, color: 'text-purple-600' },
  { name: 'Escalate', icon: ExclamationTriangleIcon, color: 'text-orange-600' },
  { name: 'Resolve', icon: CheckCircleIcon, color: 'text-green-600' },
  { name: 'Dismiss', icon: XMarkIcon, color: 'text-gray-600' }
];

export default function RealtimeAlerts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedType, setSelectedType] = useState('all');
  const [alerts, setAlerts] = useState(recentAlerts);
  const [metrics, setMetrics] = useState(alertMetrics);
  const [newAlertAnimation, setNewAlertAnimation] = useState(false);

  // Simulate real-time alert updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new alerts occasionally
      if (Math.random() > 0.7) {
        setNewAlertAnimation(true);
        setTimeout(() => setNewAlertAnimation(false), 2000);
        
        setMetrics(prev => ({
          ...prev,
          totalAlerts: prev.totalAlerts + 1,
          activeAlerts: prev.activeAlerts + 1
        }));
      }

      // Update metrics
      setMetrics(prev => ({
        ...prev,
        resolvedToday: prev.resolvedToday + Math.floor(Math.random() * 2),
        avgResponseTime: `${(3.2 + (Math.random() * 0.8 - 0.4)).toFixed(1)} min`,
        uptime: Math.max(99.9, prev.uptime + (Math.random() * 0.02 - 0.01))
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-500';
      case 'acknowledged':
        return 'bg-yellow-500';
      case 'resolved':
        return 'bg-green-500';
      case 'scheduled':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredAlerts = selectedType === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.type === selectedType);

  return (
    <section id="realtime-alerts" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Real-time <span className="text-gradient">Alerts</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Intelligent alert management system with automated escalation, 
            smart filtering, and real-time notifications for critical events.
          </p>
        </motion.div>

        {/* Alert Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-6 gap-6 mb-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 text-center relative">
            {newAlertAnimation && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-red-400 rounded-xl"
              />
            )}
            <div className="text-3xl font-bold mb-2">{metrics.totalAlerts}</div>
            <div className="text-red-100 font-medium">Total Alerts</div>
            <div className="text-red-200 text-sm">Last 24 hours</div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{metrics.activeAlerts}</div>
            <div className="text-orange-100 font-medium">Active</div>
            <div className="text-orange-200 text-sm">Needs attention</div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{metrics.resolvedToday}</div>
            <div className="text-green-100 font-medium">Resolved</div>
            <div className="text-green-200 text-sm">Today</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{metrics.avgResponseTime}</div>
            <div className="text-blue-100 font-medium">Avg Response</div>
            <div className="text-blue-200 text-sm">Time to action</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{metrics.criticalAlerts}</div>
            <div className="text-purple-100 font-medium">Critical</div>
            <div className="text-purple-200 text-sm">High priority</div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{metrics.uptime.toFixed(2)}%</div>
            <div className="text-indigo-100 font-medium">Uptime</div>
            <div className="text-indigo-200 text-sm">System availability</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Alert Categories */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Alert Categories</h3>
              <div className="space-y-3">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => setSelectedType('all')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedType === 'all'
                      ? 'bg-blue-50 border-blue-500 text-blue-900'
                      : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        selectedType === 'all' ? 'bg-blue-500' : 'bg-gray-100'
                      }`}>
                        <BellAlertIcon className={`w-5 h-5 ${
                          selectedType === 'all' ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold">All Alerts</div>
                        <div className="text-sm opacity-75">View all categories</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{metrics.totalAlerts}</div>
                  </div>
                </motion.button>

                {alertTypes.map((type, index) => (
                  <motion.button
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-blue-50 border-blue-500 text-blue-900'
                        : 'bg-white border-secondary-200 text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                          selectedType === type.id ? 'bg-blue-500' : type.bgColor
                        }`}>
                          <type.icon className={`w-5 h-5 ${
                            selectedType === type.id ? 'text-white' : type.color
                          }`} />
                        </div>
                        <div>
                          <div className="font-semibold">{type.name}</div>
                          <div className="text-sm opacity-75">{type.priority} Priority</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{type.count}</div>
                    </div>
                    <p className="text-sm opacity-75 line-clamp-2">{type.description}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Alert Feed */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BellAlertIcon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {selectedType === 'all' ? 'All Alerts' : 
                         alertTypes.find(t => t.id === selectedType)?.name || 'Alerts'}
                      </h3>
                      <p className="text-red-100">Real-time alert monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">Live</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Alert Actions Bar */}
                <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-gray-200">
                  {alertActions.map((action, index) => (
                    <motion.button
                      key={action.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
                    >
                      <action.icon className={`w-4 h-4 mr-2 ${action.color}`} />
                      {action.name}
                    </motion.button>
                  ))}
                </div>

                {/* Alert List */}
                <div className="space-y-4">
                  {filteredAlerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                      className="bg-secondary-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer border-l-4 border-transparent hover:border-blue-500"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className={`w-3 h-3 rounded-full mr-3 ${getStatusColor(alert.status)}`}></div>
                            <h4 className="font-semibold text-secondary-900">{alert.title}</h4>
                            <div className={`ml-auto px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                            </div>
                          </div>
                          
                          <p className="text-secondary-600 text-sm mb-3">{alert.description}</p>
                          
                          <div className="flex items-center text-xs text-secondary-500 space-x-4">
                            <div className="flex items-center">
                              <MapPinIcon className="w-3 h-3 mr-1" />
                              {alert.location}
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="w-3 h-3 mr-1" />
                              {alert.timestamp}
                            </div>
                            <div className="flex items-center">
                              <UserGroupIcon className="w-3 h-3 mr-1" />
                              {alert.assignee}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Load More Alerts
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Alert Management Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-8">
            Intelligent Alert Management
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BellAlertIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Smart Filtering</h4>
              <p className="text-secondary-600 text-sm">AI-powered alert prioritization and noise reduction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Auto-Resolution</h4>
              <p className="text-secondary-600 text-sm">Automatic resolution of known issues and patterns</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Team Collaboration</h4>
              <p className="text-secondary-600 text-sm">Shared alert management and escalation workflows</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ExclamationTriangleIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Escalation Rules</h4>
              <p className="text-secondary-600 text-sm">Configurable escalation paths and notification rules</p>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-6 max-w-3xl mx-auto">
              Our intelligent alert system reduces noise by 85% while ensuring critical issues 
              are never missed. Advanced AI algorithms learn from your team's response patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Configure Alerts
              </button>
              <button className="btn border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                View Alert Analytics
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}