import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simple admin authentication - in production, use proper authentication
    if (email === 'admin@bzz.ma' && password === 'BzzAdmin2024!') {
      return NextResponse.json({ 
        success: true, 
        message: 'Connexion réussie',
        user: { email: 'admin@bzz.ma', role: 'admin' }
      });
    }

    return NextResponse.json(
      { success: false, message: 'Email ou mot de passe incorrect' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user?.email !== 'admin@bzz.ma') {
    return NextResponse.json(
      { success: false, message: 'Non autorisé' },
      { status: 401 }
    );
  }

  return NextResponse.json({ 
    success: true, 
    user: session.user 
  });
}
