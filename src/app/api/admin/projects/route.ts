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
  features: z.string(), // JSON string of features array
  timeline: z.string().optional(),
  status: z.enum(['PROPOSAL', 'APPROVED', 'IN_PROGRESS', 'TESTING', 'COMPLETED', 'ON_HOLD', 'CANCELLED']).default('PROPOSAL'),
  price: z.number().positive().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
});

// GET /api/admin/projects - Fetch all projects with optional filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const projectType = searchParams.get('projectType');
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const where: any = {};

    if (projectType && projectType !== '') {
      where.projectType = projectType;
    }

    if (status && status !== '') {
      where.status = status;
    }

    if (search && search !== '') {
      where.OR = [
        { clientName: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const projects = await prisma.webProject.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transform the data to match frontend expectations
    const transformedProjects = projects.map(project => ({
      ...project,
      features: project.features ? JSON.parse(project.features) : [],
      startDate: project.startDate ? project.startDate.toISOString().split('T')[0] : null,
      endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
    }));

    return NextResponse.json({ 
      success: true, 
      data: transformedProjects 
    });

  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST /api/admin/projects - Create new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = projectSchema.parse(body);

    // Ensure features is a JSON string
    let features = validatedData.features;
    if (typeof features !== 'string') {
      features = JSON.stringify(features);
    }

    // Parse dates if provided
    const startDate = validatedData.startDate ? new Date(validatedData.startDate) : null;
    const endDate = validatedData.endDate ? new Date(validatedData.endDate) : null;

    const project = await prisma.webProject.create({
      data: {
        ...validatedData,
        features,
        startDate,
        endDate
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        ...project,
        features: JSON.parse(project.features),
        startDate: project.startDate ? project.startDate.toISOString().split('T')[0] : null,
        endDate: project.endDate ? project.endDate.toISOString().split('T')[0] : null,
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating project:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
