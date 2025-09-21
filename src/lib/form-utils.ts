import { z } from 'zod';

// Form validation schemas
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long')
    .refine((email) => !email.includes('+'), 'Email aliases are not allowed for security reasons'),
  
  organization: z.string()
    .min(2, 'Organization name is required')
    .max(100, 'Organization name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-.,&()]+$/, 'Organization name contains invalid characters'),
  
  title: z.string()
    .min(2, 'Job title is required')
    .max(100, 'Job title must be less than 100 characters'),
  
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\+]?[0-9\-\s\(\)\.]+$/, 'Please enter a valid phone number'),
  
  clearanceLevel: z.string().optional(),
  projectType: z.string().optional(),
  timeline: z.string().optional(),
  
  message: z.string()
    .min(10, 'Please provide more details about your requirements')
    .max(2000, 'Message must be less than 2000 characters')
    .refine((msg) => !containsSpamPatterns(msg), 'Message contains prohibited content'),
  
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
  
  // Security fields (hidden from user)
  website: z.string().max(0, 'This field should be empty').optional(), // Honeypot
  timestamp: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Spam detection patterns
const spamPatterns = [
  /\b(viagra|cialis|casino|gambling|bitcoin|crypto|forex)\b/i,
  /\b(click here|limited time|act now|urgent|guaranteed)\b/i,
  /<script[^>]*>|javascript:|data:text\/html/i,
  /\$\$\$|!!!|www\.|http:\/\/|https:\/\//i,
  /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/, // Credit card patterns
];

function containsSpamPatterns(text: string): boolean {
  return spamPatterns.some(pattern => pattern.test(text));
}

// Government/defense email domain validation
const governmentDomains = [
  '.gov', '.mil', '.state', '.us', '.gov.uk', '.mod.uk',
  // Add more government domains as needed
];

const defenseDomains = [
  'lockheedmartin.com', 'raytheon.com', 'boeing.com', 'northropgrumman.com',
  'generaldynamics.com', 'bae.com', 'l3harris.com', 'saic.com', 'caci.com',
  // Add more defense contractor domains as needed
];

export function isGovernmentEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return governmentDomains.some(govDomain => domain.endsWith(govDomain));
}

export function isDefenseContractorEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return defenseDomains.some(defDomain => domain === defDomain);
}

// Form submission utilities
export async function submitContactForm(data: ContactFormData): Promise<{
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}> {
  try {
    // Add timestamp for replay attack prevention
    const submissionData = {
      ...data,
      timestamp: Date.now().toString(),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // CSRF protection
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Submission failed');
    }

    return {
      success: true,
      message: result.message,
      submissionId: result.submissionId,
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'An error occurred while submitting your request. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Rate limiting check (client-side)
export function checkClientRateLimit(): boolean {
  const lastSubmission = localStorage.getItem('lastContactSubmission');
  if (lastSubmission) {
    const timeSince = Date.now() - parseInt(lastSubmission);
    const cooldownPeriod = 5 * 60 * 1000; // 5 minutes
    
    if (timeSince < cooldownPeriod) {
      return false;
    }
  }
  return true;
}

export function recordSubmissionTime(): void {
  localStorage.setItem('lastContactSubmission', Date.now().toString());
}

// Field validation helpers
export const fieldValidation = {
  name: (value: string) => {
    if (!value || value.length < 2) return 'Name must be at least 2 characters';
    if (value.length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name contains invalid characters';
    return null;
  },

  email: (value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    if (value.length > 254) return 'Email is too long';
    return null;
  },

  phone: (value: string) => {
    if (!value) return 'Phone number is required';
    if (value.length < 10) return 'Phone number is too short';
    if (!/^[\+]?[0-9\-\s\(\)\.]+$/.test(value)) return 'Invalid phone number format';
    return null;
  },

  organization: (value: string) => {
    if (!value || value.length < 2) return 'Organization is required';
    if (value.length > 100) return 'Organization name is too long';
    return null;
  },

  message: (value: string) => {
    if (!value || value.length < 10) return 'Message must be at least 10 characters';
    if (value.length > 2000) return 'Message is too long (max 2000 characters)';
    if (containsSpamPatterns(value)) return 'Message contains prohibited content';
    return null;
  },
};

// Security utilities
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/data:text\/html/gi, '') // Remove data URLs
    .trim();
}

export function generateFormToken(): string {
  return btoa(Date.now() + Math.random().toString()).slice(0, 16);
}

// Form analytics integration
export function trackFormInteraction(action: 'start' | 'field_focus' | 'validation_error' | 'submit_attempt' | 'submit_success', field?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_interaction', {
      form_action: action,
      form_field: field,
      form_type: 'contact',
    });
  }
}

// Export all form-related constants
export const clearanceLevels = [
  'No Clearance Required',
  'Public Trust',
  'Confidential',
  'Secret',
  'Top Secret',
  'Top Secret/SCI',
  'Not Disclosed',
];

export const projectTypes = [
  'Command & Control System',
  'GEOINT Analysis Platform',
  'Full Motion Video Intelligence',
  'Climate & Environmental Intelligence',
  '3D Visualization & Modeling',
  'Collaborative Intelligence Platform',
  'Edge & Tactical Deployment',
  'Security & Compliance',
  'Custom Solution',
  'Consultation Only',
];

export const timelines = [
  'Immediate (< 30 days)',
  'Short-term (1-3 months)',
  'Medium-term (3-6 months)',
  'Long-term (6+ months)',
  'Planning phase',
  'Not determined',
];