import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for business lead data
const leadSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  employees: z.string().min(1, 'Employee count is required'),
  services: z.array(z.enum(['INFRASTRUCTURE', 'CLOUD_MIGRATION', 'CYBERSECURITY', 'IT_SUPPORT', 'CONSULTING', 'BACKUP_RECOVERY'])), // PostgreSQL enum array
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  status: z.enum(['NEW', 'CONTACTED', 'PROPOSAL_SENT', 'NEGOTIATION', 'WON', 'LOST']).default('NEW'),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']).default('NORMAL'),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
});

// GET /api/admin/leads - Fetch all leads with optional filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const industry = searchParams.get('industry');
    const search = searchParams.get('search');

    const where: any = {};

    if (status && status !== '') {
      where.status = status;
    }

    if (priority && priority !== '') {
      where.priority = priority;
    }

    if (industry && industry !== '') {
      where.industry = industry;
    }

    if (search && search !== '') {
      where.OR = [
        { company: { contains: search, mode: 'insensitive' } },
        { contactName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const leads = await prisma.businessLead.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Data is already in correct format (PostgreSQL arrays)
    const transformedLeads = leads;

    return NextResponse.json({ 
      success: true, 
      data: transformedLeads 
    });

  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

// POST /api/admin/leads - Create new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = leadSchema.parse(body);

    // Data is already in correct format for PostgreSQL
    const lead = await prisma.businessLead.create({
      data: validatedData
    });

    return NextResponse.json({
      success: true,
      data: lead
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating lead:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}
