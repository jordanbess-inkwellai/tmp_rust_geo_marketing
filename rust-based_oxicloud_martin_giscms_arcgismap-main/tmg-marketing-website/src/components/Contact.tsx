'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  contactFormSchema,
  submitContactForm,
  checkClientRateLimit,
  recordSubmissionTime,
  trackFormInteraction,
  clearanceLevels,
  projectTypes,
  timelines,
  type ContactFormData
} from '@/lib/form-utils';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { trackContactFormSubmit, trackSecurityBriefingRequest, trackDemoRequest } from '@/components/Analytics';


const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Speak with an Expert',
    description: 'Schedule a technical consultation with our team',
    action: 'Call (703) 555-0142',
    note: 'Available for classified discussions'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Our Team',
    description: 'Send us your requirements and we\'ll respond within 24 hours',
    action: 'info@techmaven-geo.com',
    note: 'Unclassified communications only'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Schedule a Demo',
    description: 'See our platform in action with a personalized demonstration',
    action: 'Book a Demo Session',
    note: 'Virtual or on-site available'
  },
  {
    icon: DocumentTextIcon,
    title: 'Request Information',
    description: 'Get detailed technical documentation and capability briefs',
    action: 'Download Resources',
    note: 'Immediate access available'
  },
];


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check client-side rate limiting
    if (!checkClientRateLimit()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    trackFormInteraction('submit_attempt');
    
    try {
      // Submit to backend
      const result = await submitContactForm(data);
      
      if (result.success) {
        // Track successful submission
        trackContactFormSubmit('consultation_request', data.clearanceLevel);
        trackFormInteraction('submit_success');
        
        // Record submission time for rate limiting
        recordSubmissionTime();
        
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Get <span className="text-gradient">Started</span> Today
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to transform your geospatial intelligence capabilities? Our team of experts
            is standing by to discuss your requirements and provide a customized solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Multiple Ways to Connect
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.title}
                    className="bg-white rounded-lg p-6 border border-secondary-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="feature-icon">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-900 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-sm text-secondary-600 mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-primary-600 mb-1">
                          {method.action}
                        </p>
                        <p className="text-xs text-secondary-500">
                          {method.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-lg p-6 border border-secondary-200">
              <h4 className="font-semibold text-secondary-900 mb-4">Office Information</h4>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-secondary-400" />
                  <span className="text-sm text-secondary-600">
                    Reston, VA 20190<br />
                    Washington, DC Metro Area<br />
                    (Secure facility access by appointment)
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-secondary-400" />
                  <span className="text-sm text-secondary-600">
                    Mon-Fri: 8:00 AM - 6:00 PM ET<br />
                    Mission-critical support: 24/7<br />
                    Response within 4 hours
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-5 h-5 text-secondary-400" />
                  <span className="text-sm text-secondary-600">
                    SCIF-capable facility<br />
                    Cleared personnel available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-secondary-200">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Request Consultation
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your inquiry! Our team will contact you within 24 hours to discuss your requirements.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    There was an error submitting your request. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  {...register('website')}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Organization Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Organization *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('organization')}
                    />
                    {errors.organization && (
                      <p className="text-red-600 text-xs mt-1">{errors.organization.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Job Title *</label>
                    <input
                      type="text"
                      className="form-input"
                      {...register('title')}
                    />
                    {errors.title && (
                      <p className="text-red-600 text-xs mt-1">{errors.title.message}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Project Type</label>
                    <select className="form-input" {...register('projectType')}>
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Timeline</label>
                    <select className="form-input" {...register('timeline')}>
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clearance Level */}
                <div>
                  <label className="form-label">Security Clearance Level</label>
                  <select className="form-input" {...register('clearanceLevel')}>
                    <option value="">Select clearance level</option>
                    {clearanceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Project Requirements *</label>
                  <textarea
                    rows={4}
                    className="form-input"
                    placeholder="Please describe your project requirements, technical specifications, and any specific challenges you're looking to address..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                    {...register('consent')}
                  />
                  <label className="text-sm text-secondary-600">
                    I agree to the <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> and
                    consent to being contacted about this inquiry. *
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-600 text-xs">{errors.consent.message}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-yellow-600 mr-2" />
              <h4 className="text-lg font-semibold text-yellow-800">Security Notice</h4>
            </div>
            <p className="text-sm text-yellow-700">
              This form is for unclassified communications only. For classified or sensitive discussions,
              please contact us via secure channels. Our team maintains appropriate security clearances
              and can accommodate classified briefings through proper channels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}