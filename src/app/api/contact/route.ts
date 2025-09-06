import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { formatPhoneNumber } from '@/lib/utils';
import { sendContactNotification } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
  type: z.enum(['GENERAL', 'QUOTE_REQUEST', 'SUPPORT', 'COMPLAINT', 'PARTNERSHIP']),
  urgency: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']).default('NORMAL'),
});

export async function GET() {
  try {
    const contactMessages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(contactMessages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Format phone number
    const formattedPhone = formatPhoneNumber(validatedData.phone);

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: formattedPhone,
        company: validatedData.company || null,
        subject: validatedData.subject,
        message: validatedData.message,
        type: validatedData.type,
        urgency: validatedData.urgency,
        status: 'UNREAD',
      },
    });

    // Send email notifications
    try {
      await sendContactNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: formattedPhone,
        company: validatedData.company,
        subject: validatedData.subject,
        message: validatedData.message,
        type: validatedData.type,
        urgency: validatedData.urgency,
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Continue even if email fails - don't fail the entire request
    }

    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès',
        id: contactMessage.id 
      },
      { status: 200 }
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

    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
