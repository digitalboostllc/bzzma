import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema for laptop data
const laptopSchema = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  condition: z.enum(['NEW', 'REFURBISHED_EXCELLENT', 'REFURBISHED_GOOD', 'USED_GOOD']),
  processor: z.string().min(1, 'Processor is required'),
  ram: z.string().min(1, 'RAM is required'),
  storage: z.string().min(1, 'Storage is required'),
  screen: z.string().min(1, 'Screen is required'),
  price: z.number().positive('Price must be positive'),
  originalPrice: z.number().positive().optional(),
  inStock: z.boolean().default(true),
  features: z.array(z.string()), // PostgreSQL array
  description: z.string().optional(),
  images: z.array(z.string()), // PostgreSQL array
  category: z.enum(['MACBOOK', 'BUSINESS', 'GAMING', 'BUDGET', 'WORKSTATION']),
});

// GET /api/admin/laptops/[id] - Fetch single laptop
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const laptop = await prisma.laptopInventory.findUnique({
      where: { id: resolvedParams.id },
      include: {
        sales: {
          select: {
            id: true,
            clientName: true,
            clientEmail: true,
            price: true,
            status: true,
            createdAt: true
          }
        }
      }
    });

    if (!laptop) {
      return NextResponse.json(
        { success: false, error: 'Laptop not found' },
        { status: 404 }
      );
    }

    // Data is already in correct format (PostgreSQL arrays)
    const transformedLaptop = laptop;

    return NextResponse.json({
      success: true,
      data: transformedLaptop
    });

  } catch (error) {
    console.error('Error fetching laptop:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch laptop' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/laptops/[id] - Update laptop
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = laptopSchema.parse(body);

    // Check if laptop exists
    const resolvedParams = await params;
    const existingLaptop = await prisma.laptopInventory.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!existingLaptop) {
      return NextResponse.json(
        { success: false, error: 'Laptop not found' },
        { status: 404 }
      );
    }

    // Data is already in correct format for PostgreSQL
    const laptop = await prisma.laptopInventory.update({
      where: { id: resolvedParams.id },
      data: validatedData
    });

    return NextResponse.json({
      success: true,
      data: laptop
    });

  } catch (error) {
    console.error('Error updating laptop:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update laptop' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/laptops/[id] - Delete laptop
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if laptop exists
    const resolvedParams = await params;
    const existingLaptop = await prisma.laptopInventory.findUnique({
      where: { id: resolvedParams.id },
      include: {
        sales: true
      }
    });

    if (!existingLaptop) {
      return NextResponse.json(
        { success: false, error: 'Laptop not found' },
        { status: 404 }
      );
    }

    // Check if laptop has sales
    if (existingLaptop.sales.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete laptop with existing sales' },
        { status: 400 }
      );
    }

    await prisma.laptopInventory.delete({
      where: { id: resolvedParams.id }
    });

    return NextResponse.json({
      success: true,
      message: 'Laptop deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting laptop:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete laptop' },
      { status: 500 }
    );
  }
}
