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
  status: z.enum(['NEW', 'CONTACTED', 'PROPOSAL_SENT', 'NEGOTIATION', 'WON', 'LOST']),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
});

// GET /api/admin/leads/[id] - Fetch single lead
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const lead = await prisma.businessLead.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!lead) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Data is already in correct format (PostgreSQL arrays)
    const transformedLead = lead;

    return NextResponse.json({
      success: true,
      data: transformedLead
    });

  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch lead' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/leads/[id] - Update lead
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = leadSchema.parse(body);

    // Check if lead exists
    const resolvedParams = await params;
    const existingLead = await prisma.businessLead.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!existingLead) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Data is already in correct format for PostgreSQL
    const lead = await prisma.businessLead.update({
      where: { id: resolvedParams.id },
      data: validatedData
    });

    return NextResponse.json({
      success: true,
      data: lead
    });

  } catch (error) {
    console.error('Error updating lead:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/leads/[id] - Delete lead
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if lead exists
    const resolvedParams = await params;
    const existingLead = await prisma.businessLead.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!existingLead) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }

    await prisma.businessLead.delete({
      where: { id: resolvedParams.id }
    });

    return NextResponse.json({
      success: true,
      message: 'Lead deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}
