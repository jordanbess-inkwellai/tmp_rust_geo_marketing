import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { trackContactFormSubmit } from '@/components/Analytics';

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Contact form validation schema
const contactFormSchema = z.object({
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
  // Honeypot field for spam prevention
  website: z.string().optional(),
  // Timestamp for replay attack prevention
  timestamp: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 submissions per 15 minutes
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Security headers for API responses
function getSecurityHeaders() {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  };
}

// Email notification service (placeholder - integrate with your preferred service)
async function sendEmailNotification(data: ContactFormData) {
  // In production, integrate with:
  // - SendGrid, Mailgun, or AWS SES for email delivery
  // - Slack or Teams for instant notifications
  // - CRM systems like HubSpot or Salesforce
  
  console.log('Contact form submission:', {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    organization: data.organization,
    clearanceLevel: data.clearanceLevel,
    timestamp: new Date().toISOString(),
  });
  
  // Example integration points:
  // await sendGrid.send({ ... })
  // await hubspot.contacts.create({ ... })
  // await slack.chat.postMessage({ ... })
  
  return true;
}

// CRM integration (placeholder)
async function createCRMContact(data: ContactFormData) {
  // Example HubSpot integration:
  // const hubspotData = {
  //   properties: {
  //     firstname: data.firstName,
  //     lastname: data.lastName,
  //     email: data.email,
  //     company: data.organization,
  //     jobtitle: data.title,
  //     phone: data.phone,
  //     clearance_level: data.clearanceLevel,
  //     project_type: data.projectType,
  //     timeline: data.timeline,
  //     message: data.message,
  //     source: 'website_contact_form',
  //   }
  // };
  
  // return await hubspot.crm.contacts.basicApi.create({ body: hubspotData });
  
  console.log('CRM contact creation placeholder for:', data.email);
  return { id: 'placeholder-id' };
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { 
          status: 429,
          headers: getSecurityHeaders()
        }
      );
    }
    
    // Parse and validate request data
    const body = await request.json();
    
    // Honeypot spam prevention
    if (body.website && body.website.length > 0) {
      // Silently reject spam submissions
      return NextResponse.json(
        { success: true, message: 'Thank you for your submission.' },
        { status: 200, headers: getSecurityHeaders() }
      );
    }
    
    // Timestamp validation for replay attack prevention
    if (body.timestamp) {
      const submissionTime = parseInt(body.timestamp);
      const now = Date.now();
      const timeDiff = now - submissionTime;
      
      // Reject submissions that are too old (>1 hour) or too new (<5 seconds)
      if (timeDiff > 3600000 || timeDiff < 5000) {
        return NextResponse.json(
          { error: 'Invalid submission timing.', code: 'INVALID_TIMESTAMP' },
          { status: 400, headers: getSecurityHeaders() }
        );
      }
    }
    
    // Validate form data
    const validatedData = contactFormSchema.parse(body);
    
    // Additional security checks
    if (validatedData.message.includes('<script') || validatedData.message.includes('javascript:')) {
      return NextResponse.json(
        { error: 'Invalid content detected.', code: 'CONTENT_VALIDATION_FAILED' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }
    
    // Process the form submission
    await Promise.all([
      sendEmailNotification(validatedData),
      createCRMContact(validatedData),
      // Add additional integrations here
    ]);
    
    // Log successful submission (without sensitive data)
    console.log('Contact form processed:', {
      email: validatedData.email,
      organization: validatedData.organization,
      clearanceLevel: validatedData.clearanceLevel,
      projectType: validatedData.projectType,
      processingTime: Date.now() - startTime,
      ip: ip,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your submission. Our team will contact you within 24 hours.',
        submissionId: `tmg-${Date.now()}` // For tracking purposes
      },
      { 
        status: 200,
        headers: getSecurityHeaders()
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.errors,
          code: 'VALIDATION_ERROR'
        },
        { 
          status: 400,
          headers: getSecurityHeaders()
        }
      );
    }
    
    // Don't expose internal errors to clients
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your request. Please try again.',
        code: 'INTERNAL_ERROR'
      },
      { 
        status: 500,
        headers: getSecurityHeaders()
      }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' },
    { 
      status: 405,
      headers: {
        ...getSecurityHeaders(),
        'Allow': 'POST'
      }
    }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' },
    { 
      status: 405,
      headers: {
        ...getSecurityHeaders(),
        'Allow': 'POST'
      }
    }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' },
    { 
      status: 405,
      headers: {
        ...getSecurityHeaders(),
        'Allow': 'POST'
      }
    }
  );
}