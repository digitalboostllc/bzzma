import nodemailer from 'nodemailer';

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  type: string;
  urgency: string;
}

interface BookingEmailData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  deviceType: string;
  deviceBrand: string;
  problemDescription: string;
  preferredDate: string;
  preferredTime: string;
  urgencyLevel: string;
}

// Create transporter (configure with your email service)
const createTransporter = () => {
  // For development - using Gmail SMTP
  // In production, use a service like SendGrid, Mailgun, or AWS SES
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function sendContactNotification(data: ContactEmailData) {
  try {
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'contact@bzz.ma',
      subject: `[${data.urgency}] Nouveau message: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(90deg, #dc2626, #ea580c); color: white; padding: 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px;">📧 Nouveau Message Bzz</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            ${data.company ? `<p><strong>Entreprise:</strong> ${data.company}</p>` : ''}
            <p><strong>Type:</strong> ${data.type}</p>
            <p><strong>Urgence:</strong> <span style="padding: 4px 8px; border-radius: 4px; background: ${
              data.urgency === 'URGENT' ? '#ef4444' : 
              data.urgency === 'HIGH' ? '#f97316' : 
              data.urgency === 'NORMAL' ? '#3b82f6' : '#10b981'
            }; color: white;">${data.urgency}</span></p>
          </div>
          
          <div style="background: white; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              Répondez rapidement via: <a href="mailto:${data.email}" style="color: #dc2626;">Email</a> 
              | <a href="tel:${data.phone}" style="color: #dc2626;">Téléphone</a>
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to client
    const clientMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: data.email,
      subject: 'Confirmation de réception - Bzz.ma',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(90deg, #dc2626, #ea580c); color: white; padding: 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px;">✅ Message bien reçu !</h1>
          </div>
          
          <p>Bonjour <strong>${data.name}</strong>,</p>
          
          <p>Nous avons bien reçu votre message concernant "<em>${data.subject}</em>" et vous remercions de nous avoir contactés.</p>
          
          <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">⏱️ Délai de réponse</h3>
            <p style="margin-bottom: 0;">
              ${data.urgency === 'URGENT' ? 
                'Votre demande est marquée comme <strong>URGENTE</strong>. Nous vous répondrons dans les <strong>2 heures</strong>.' :
                data.urgency === 'HIGH' ?
                'Votre demande est marquée comme <strong>PRIORITAIRE</strong>. Nous vous répondrons dans les <strong>4 heures</strong>.' :
                'Nous vous répondrons dans les <strong>24 heures</strong> pendant les heures ouvrables.'
              }
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">🆘 Besoin urgent ?</h3>
            <p>Pour les urgences techniques, contactez-nous directement :</p>
            <p>📞 <a href="tel:+212522334455" style="color: #dc2626;"><strong>+212 5 22 33 44 55</strong></a></p>
            <p>💬 <a href="https://wa.me/212600112233" style="color: #16a34a;"><strong>WhatsApp: +212 6 00 11 22 33</strong></a></p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              Équipe Bzz | Experts IT au Maroc<br>
              <a href="https://bzz.ma" style="color: #dc2626;">bzz.ma</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}

export async function sendBookingNotification(data: BookingEmailData) {
  try {
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'contact@bzz.ma',
      subject: `[${data.urgencyLevel}] Nouvelle réservation: ${data.deviceType} ${data.deviceBrand}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(90deg, #7c3aed, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px;">📅 Nouvelle Réservation</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #7c3aed; margin-top: 0;">👤 Informations client</h3>
            <p><strong>Nom:</strong> ${data.clientName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.clientEmail}">${data.clientEmail}</a></p>
            <p><strong>Téléphone:</strong> <a href="tel:${data.clientPhone}">${data.clientPhone}</a></p>
            ${data.company ? `<p><strong>Entreprise:</strong> ${data.company}</p>` : ''}
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin-top: 0;">🔧 Détails de l'appareil</h3>
            <p><strong>Type:</strong> ${data.deviceType}</p>
            <p><strong>Marque:</strong> ${data.deviceBrand}</p>
            <p><strong>Problème:</strong> ${data.problemDescription}</p>
            <p><strong>Urgence:</strong> <span style="padding: 4px 8px; border-radius: 4px; background: ${
              data.urgencyLevel === 'URGENT' ? '#ef4444' : 
              data.urgencyLevel === 'HIGH' ? '#f97316' : 
              data.urgencyLevel === 'NORMAL' ? '#3b82f6' : '#10b981'
            }; color: white;">${data.urgencyLevel}</span></p>
          </div>
          
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px;">
            <h3 style="color: #059669; margin-top: 0;">📅 Rendez-vous souhaité</h3>
            <p><strong>Date:</strong> ${new Date(data.preferredDate).toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Heure:</strong> ${data.preferredTime}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              ⚡ Confirmez rapidement via: <a href="mailto:${data.clientEmail}" style="color: #7c3aed;">Email</a> 
              | <a href="tel:${data.clientPhone}" style="color: #7c3aed;">Téléphone</a>
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to client
    const clientMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: data.clientEmail,
      subject: 'Réservation confirmée - Bzz.ma',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(90deg, #7c3aed, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px;">✅ Réservation Confirmée !</h1>
          </div>
          
          <p>Bonjour <strong>${data.clientName}</strong>,</p>
          
          <p>Votre demande de réservation pour votre <strong>${data.deviceType} ${data.deviceBrand}</strong> a été enregistrée avec succès !</p>
          
          <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">📋 Résumé de votre réservation</h3>
            <p><strong>Date souhaitée:</strong> ${new Date(data.preferredDate).toLocaleDateString('fr-FR')}</p>
            <p><strong>Heure souhaitée:</strong> ${data.preferredTime}</p>
            <p><strong>Appareil:</strong> ${data.deviceType} ${data.deviceBrand}</p>
            <p style="margin-bottom: 0;"><strong>Problème:</strong> ${data.problemDescription}</p>
          </div>
          
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">⏱️ Prochaines étapes</h3>
            <ol style="margin: 0; padding-left: 20px;">
              <li>Nous confirmons votre créneau dans les 2 heures</li>
              <li>Vous recevrez un SMS/email de confirmation</li>
              <li>Apportez votre appareil à l'heure convenue</li>
              <li>Diagnostic gratuit sur place</li>
            </ol>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📍 Nos bureaux</h3>
            <p><strong>Casablanca:</strong> 123 Avenue Mohammed V, Maarif</p>
            <p><strong>Téléphone:</strong> <a href="tel:+212522334455" style="color: #7c3aed;">+212 5 22 33 44 55</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/212600112233" style="color: #16a34a;">+212 6 00 11 22 33</a></p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              Équipe Bzz | Experts IT au Maroc<br>
              <a href="https://bzz.ma" style="color: #7c3aed;">bzz.ma</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
