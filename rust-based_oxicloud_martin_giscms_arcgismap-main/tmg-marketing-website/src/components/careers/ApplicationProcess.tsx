'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const processSteps = [
  {
    step: '01',
    title: 'Application Review',
    icon: DocumentTextIcon,
    duration: '1-2 days',
    description: 'Our talent team reviews your application, portfolio, and experience against role requirements.',
    details: [
      'Resume and cover letter assessment',
      'Portfolio and project evaluation',
      'Initial qualification screening',
      'Cultural fit preliminary assessment'
    ],
    tips: 'Highlight specific geospatial or relevant technical experience, include links to projects or GitHub repos.'
  },
  {
    step: '02',
    title: 'Recruiter Screen',
    icon: UserGroupIcon,
    duration: '30 minutes',
    description: 'Casual conversation with our recruiting team about your background, motivations, and role expectations.',
    details: [
      'Career background and interests',
      'Role expectations discussion',
      'Compensation and benefits overview',
      'Timeline and next steps clarification'
    ],
    tips: 'Be authentic about your interests and ask questions about our company culture and growth opportunities.'
  },
  {
    step: '03',
    title: 'Technical Assessment',
    icon: CodeBracketIcon,
    duration: '60-90 minutes',
    description: 'Role-specific technical evaluation to assess your problem-solving approach and domain expertise.',
    details: [
      'Technical problem-solving session',
      'Code review and architecture discussion',
      'Domain knowledge evaluation',
      'Best practices and methodology review'
    ],
    tips: 'Think out loud during problem-solving, ask clarifying questions, and discuss trade-offs in your solutions.'
  },
  {
    step: '04',
    title: 'Team Interview',
    icon: UserGroupIcon,
    duration: '45 minutes',
    description: 'Meet potential teammates to discuss collaboration style, technical interests, and team dynamics.',
    details: [
      'Collaboration and communication style',
      'Technical interests and learning goals',
      'Team project discussion',
      'Questions about our work and challenges'
    ],
    tips: 'Prepare thoughtful questions about the team\'s projects and be ready to discuss your preferred working style.'
  },
  {
    step: '05',
    title: 'Final Interview',
    icon: ChatBubbleLeftRightIcon,
    duration: '30 minutes',
    description: 'Leadership conversation about company fit, career goals, and long-term vision alignment.',
    details: [
      'Career aspirations and growth goals',
      'Company values and mission alignment',
      'Long-term vision discussion',
      'Final questions and clarifications'
    ],
    tips: 'Share your genuine interest in geospatial technology and how you see yourself contributing to our mission.'
  },
  {
    step: '06',
    title: 'Decision & Offer',
    icon: CheckCircleIcon,
    duration: '2-3 days',
    description: 'Team deliberation, reference checks, and competitive offer preparation with all details.',
    details: [
      'Internal team discussion and consensus',
      'Reference check completion',
      'Offer package preparation',
      'Onboarding timeline planning'
    ],
    tips: 'We\'ll provide detailed feedback regardless of outcome and keep you informed throughout the process.'
  }
];

const interviewTips = [
  {
    icon: SparklesIcon,
    title: 'Showcase Real Projects',
    description: 'Bring examples of work you\'re proud of, especially anything involving geospatial data or complex problem-solving.'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Ask Great Questions',
    description: 'Come prepared with thoughtful questions about our technology, challenges, and team dynamics.'
  },
  {
    icon: UserGroupIcon,
    title: 'Be Yourself',
    description: 'We value authenticity and diverse perspectives. Share your genuine interests and working style.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Think Out Loud',
    description: 'During technical discussions, verbalize your thought process. We want to understand how you approach problems.'
  }
];

export default function ApplicationProcess() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hiring process is designed to be thorough yet respectful of your time. 
            We want to get to know you as well as you want to get to know us.
          </p>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Typical Timeline: 5-7 Days
            </h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">48hr</div>
                <div className="text-gray-600 text-sm">Initial Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5-7</div>
                <div className="text-gray-600 text-sm">Days Total Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">Candidate Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full hidden lg:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    {/* Step Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-blue-600">STEP {step.step}</span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    {/* Details */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        What to Expect
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips */}
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">💡 Tip</h4>
                      <p className="text-blue-700 text-sm">{step.tips}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg z-10 hidden lg:flex">
                  <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interview Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Interview Success Tips
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interviewTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Our Hiring Commitments</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              We're committed to a fair, transparent, and respectful hiring process that 
              values your time and gives you the best opportunity to showcase your abilities.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold mb-2">Transparent</div>
                <div className="opacity-90 text-sm">Clear expectations and feedback at every step</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Respectful</div>
                <div className="opacity-90 text-sm">We value your time and provide timely responses</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Inclusive</div>
                <div className="opacity-90 text-sm">Bias-free process focused on skills and potential</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}