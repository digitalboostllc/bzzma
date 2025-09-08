'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { trackContactForm } from '@/components/analytics';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  type: z.enum(['GENERAL', 'QUOTE_REQUEST', 'SUPPORT', 'COMPLAINT', 'PARTNERSHIP', 'WEB_PROJECT', 'LAPTOP_INQUIRY', 'BUSINESS_CONSULTATION']),
  urgency: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: 'GENERAL',
      urgency: 'NORMAL'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès! Nous vous répondrons rapidement.');
        trackContactForm(data.type);
        reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Contact Type */}
      <div>
        <label className="form-label">Type de demande</label>
        <select {...register('type')} className="form-input">
          <option value="GENERAL">Demande générale</option>
          <option value="QUOTE_REQUEST">Demande de devis réparation</option>
          <option value="WEB_PROJECT">Projet de création web</option>
          <option value="LAPTOP_INQUIRY">Achat de laptop</option>
          <option value="BUSINESS_CONSULTATION">Solutions entreprise</option>
          <option value="SUPPORT">Support technique</option>
          <option value="PARTNERSHIP">Partenariat</option>
          <option value="COMPLAINT">Réclamation</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
        )}
      </div>

      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Nom complet *</label>
          <input
            type="text"
            {...register('name')}
            className="form-input"
            placeholder="Votre nom complet"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="form-label">Email *</label>
          <input
            type="email"
            {...register('email')}
            className="form-input"
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Téléphone *</label>
          <input
            type="tel"
            {...register('phone')}
            className="form-input"
            placeholder="+212 6XX XXX XXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="form-label">Entreprise</label>
          <input
            type="text"
            {...register('company')}
            className="form-input"
            placeholder="Nom de votre entreprise"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>
      </div>

      {/* Message Details */}
      <div>
        <label className="form-label">Sujet *</label>
        <input
          type="text"
          {...register('subject')}
          className="form-input"
          placeholder="Sujet de votre message"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="form-label">Niveau d'urgence</label>
        <select {...register('urgency')} className="form-input">
          <option value="LOW">Faible</option>
          <option value="NORMAL">Normal</option>
          <option value="HIGH">Élevé</option>
          <option value="URGENT">Urgent (sous 2h)</option>
        </select>
        {errors.urgency && (
          <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>
        )}
      </div>

      <div>
        <label className="form-label">Message *</label>
        <textarea
          {...register('message')}
          rows={6}
          className="form-input resize-none"
          placeholder="Décrivez votre demande en détail..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Envoyer le Message
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Nous nous engageons à répondre dans les 2 heures pendant les heures ouvrables.
      </p>
    </form>
  );
}
