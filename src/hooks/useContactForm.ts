'use client';

import { useState } from 'react';
import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(2, 'Organization name is required').max(100),
  title: z.string().min(2, 'Job title is required').max(100),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20),
  clearanceLevel: z.string().optional(),
  projectType: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your requirements').max(2000),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface UseContactFormOptions {
  onSuccess?: (data: ContactFormData) => void;
  onError?: (error: Error) => void;
}

export function useContactForm(options?: UseContactFormOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate data
      const validatedData = contactFormSchema.parse(data);

      // Add timestamp for security
      const formData = {
        ...validatedData,
        timestamp: new Date().toISOString(),
        source: window.location.pathname,
      };

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const result = await response.json();

      // Track success event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          form_type: 'contact',
          clearance_level: data.clearanceLevel,
          project_type: data.projectType,
        });
      }

      setSuccess(true);
      options?.onSuccess?.(validatedData);

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      options?.onError?.(err instanceof Error ? err : new Error(errorMessage));
      
      // Track error event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_error', {
          error_message: errorMessage,
        });
      }

      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    submitForm,
    loading,
    error,
    success,
    reset,
  };
}