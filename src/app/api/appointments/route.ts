import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { formatPhoneNumber } from '@/lib/utils';
import { sendBookingNotification } from '@/lib/email';

const appointmentSchema = z.object({
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(10),
  company: z.string().optional(),
  deviceType: z.enum(['MACBOOK', 'WINDOWS_LAPTOP', 'DESKTOP_PC', 'ALL_IN_ONE', 'TABLET', 'OTHER']),
  deviceBrand: z.string().min(2),
  deviceModel: z.string().optional(),
  problemDescription: z.string().min(10),
  urgencyLevel: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']),
  preferredDate: z.string().transform((str) => new Date(str)),
  preferredTime: z.string(),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // Format phone number
    const formattedPhone = formatPhoneNumber(validatedData.clientPhone);

    // Create a temporary user ID (in real app, this would come from session)
    const userId = 'temp-user-id';

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        userId,
        clientName: validatedData.clientName,
        clientEmail: validatedData.clientEmail,
        clientPhone: formattedPhone,
        company: validatedData.company || null,
        deviceType: validatedData.deviceType,
        deviceBrand: validatedData.deviceBrand,
        deviceModel: validatedData.deviceModel || null,
        problemDescription: validatedData.problemDescription,
        urgencyLevel: validatedData.urgencyLevel,
        preferredDate: validatedData.preferredDate,
        preferredTime: validatedData.preferredTime,
        notes: validatedData.notes || null,
        status: 'PENDING',
      },
    });

    // Send email notifications
    try {
      await sendBookingNotification({
        clientName: validatedData.clientName,
        clientEmail: validatedData.clientEmail,
        clientPhone: formattedPhone,
        company: validatedData.company,
        deviceType: validatedData.deviceType,
        deviceBrand: validatedData.deviceBrand,
        problemDescription: validatedData.problemDescription,
        preferredDate: validatedData.preferredDate.toISOString(),
        preferredTime: validatedData.preferredTime,
        urgencyLevel: validatedData.urgencyLevel,
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Continue even if email fails - don't fail the entire request
    }

    return NextResponse.json(
      { 
        message: 'Rendez-vous créé avec succès',
        appointmentId: appointment.id,
        status: appointment.status
      },
      { status: 201 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Données invalides',
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    console.error('Appointment creation error:', error);
    return NextResponse.json(
      { message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const date = searchParams.get('date');

    const where: any = {};
    
    if (status) {
      where.status = status;
    }
    
    if (date) {
      const targetDate = new Date(date);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      where.preferredDate = {
        gte: targetDate,
        lt: nextDay,
      };
    }

    const appointments = await prisma.appointment.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      take: 50, // Limit results
    });

    return NextResponse.json(appointments);

  } catch (error) {
    console.error('Appointments fetch error:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des rendez-vous' },
      { status: 500 }
    );
  }
}
