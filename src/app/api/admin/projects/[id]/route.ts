import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for web project data
const projectSchema = z.object({
  clientName: z.string().min(1, 'Client name is required'),
  clientEmail: z.string().email('Valid email is required'),
  clientPhone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(['WEBSITE', 'ECOMMERCE', 'WEB_APP', 'SEO_MARKETING', 'MAINTENANCE']),
  budget: z.string().min(1, 'Budget is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  features: z.array(z.string()), // PostgreSQL array
  timeline: z.string().optional(),
  status: z.enum(['PROPOSAL', 'APPROVED', 'IN_PROGRESS', 'TESTING', 'COMPLETED', 'ON_HOLD', 'CANCELLED']),
  price: z.number().positive().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
});

// GET /api/admin/projects/[id] - Fetch single project
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const project = await prisma.webProject.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Transform the data
    const transformedProject = {
      ...project,
      startDate: project.startDate ? project.startDate.toISOString().split('T')[0] : null,
      endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
    };

    return NextResponse.json({
      success: true,
      data: transformedProject
    });

  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/projects/[id] - Update project
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = projectSchema.parse(body);

    // Check if project exists
    const resolvedParams = await params;
    const existingProject = await prisma.webProject.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!existingProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Parse dates if provided
    const startDate = validatedData.startDate ? new Date(validatedData.startDate) : null;
    const endDate = validatedData.endDate ? new Date(validatedData.endDate) : null;

    const project = await prisma.webProject.update({
      where: { id: resolvedParams.id },
      data: {
        ...validatedData,
        startDate,
        endDate
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...project,
        startDate: project.startDate ? project.startDate.toISOString().split('T')[0] : null,
        endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
      }
    });

  } catch (error) {
    console.error('Error updating project:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/projects/[id] - Delete project
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if project exists
    const resolvedParams = await params;
    const existingProject = await prisma.webProject.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!existingProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    await prisma.webProject.delete({
      where: { id: resolvedParams.id }
    });

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
