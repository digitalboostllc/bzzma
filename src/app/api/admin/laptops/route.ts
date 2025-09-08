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

// GET /api/admin/laptops - Fetch all laptops with optional filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const condition = searchParams.get('condition');
    const inStock = searchParams.get('inStock');
    const search = searchParams.get('search');

    const where: any = {};

    if (category && category !== '') {
      where.category = category;
    }

    if (condition && condition !== '') {
      where.condition = condition;
    }

    if (inStock !== null) {
      if (inStock === 'inStock') {
        where.inStock = true;
      } else if (inStock === 'outOfStock') {
        where.inStock = false;
      }
    }

    if (search && search !== '') {
      where.OR = [
        { brand: { contains: search, mode: 'insensitive' } },
        { model: { contains: search, mode: 'insensitive' } },
        { processor: { contains: search, mode: 'insensitive' } }
      ];
    }

    const laptops = await prisma.laptopInventory.findMany({
      where,
      include: {
        sales: {
          select: {
            id: true,
            status: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Data is already in correct format (PostgreSQL arrays)
    const transformedLaptops = laptops;

    return NextResponse.json({ 
      success: true, 
      data: transformedLaptops 
    });

  } catch (error) {
    console.error('Error fetching laptops:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch laptops' },
      { status: 500 }
    );
  }
}

// POST /api/admin/laptops - Create new laptop
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the input
    const validatedData = laptopSchema.parse(body);

    // Data is already in correct format for PostgreSQL
    const laptop = await prisma.laptopInventory.create({
      data: validatedData
    });

    return NextResponse.json({
      success: true,
      data: laptop
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating laptop:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to create laptop' },
      { status: 500 }
    );
  }
}
