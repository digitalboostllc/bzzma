'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Send, Loader2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { trackBookingForm } from '@/components/analytics';

const bookingSchema = z.object({
  clientName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  clientEmail: z.string().email('Email invalide'),
  clientPhone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  deviceType: z.enum(['MACBOOK', 'WINDOWS_LAPTOP', 'DESKTOP_PC', 'ALL_IN_ONE', 'TABLET', 'OTHER']),
  deviceBrand: z.string().min(2, 'Marque requise'),
  deviceModel: z.string().optional(),
  problemDescription: z.string().min(10, 'Description détaillée requise'),
  urgencyLevel: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT']),
  preferredDate: z.date(),
  preferredTime: z.string(),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      urgencyLevel: 'NORMAL'
    }
  });

  const deviceType = watch('deviceType');

  const deviceTypes = [
    { value: 'MACBOOK', label: 'MacBook (Pro/Air)' },
    { value: 'WINDOWS_LAPTOP', label: 'Laptop Windows' },
    { value: 'DESKTOP_PC', label: 'PC de Bureau' },
    { value: 'ALL_IN_ONE', label: 'All-in-One' },
    { value: 'TABLET', label: 'Tablette' },
    { value: 'OTHER', label: 'Autre' },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const urgencyLevels = [
    { value: 'LOW', label: 'Faible', description: 'Pas pressé' },
    { value: 'NORMAL', label: 'Normal', description: '2-3 jours' },
    { value: 'HIGH', label: 'Élevé', description: 'Même jour' },
    { value: 'URGENT', label: 'Urgent', description: 'Dans l\'heure' },
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Rendez-vous réservé avec succès! Nous vous confirmerons rapidement.');
        trackBookingForm(data.deviceType, data.urgencyLevel);
        reset();
        setSelectedDate(null);
        onSuccess?.();
      } else {
        throw new Error('Erreur lors de la réservation');
      }
    } catch (error) {
      toast.error('Erreur lors de la réservation. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter out past dates and weekends
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    const dayOfWeek = date.getDay();
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6; // Not Sunday (0) or Saturday (6)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de Contact</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Nom complet *</label>
            <input
              type="text"
              {...register('clientName')}
              className="form-input"
              placeholder="Votre nom complet"
            />
            {errors.clientName && (
              <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Email *</label>
            <input
              type="email"
              {...register('clientEmail')}
              className="form-input"
              placeholder="votre@email.com"
            />
            {errors.clientEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.clientEmail.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="form-label">Téléphone *</label>
            <input
              type="tel"
              {...register('clientPhone')}
              className="form-input"
              placeholder="+212 6XX XXX XXX"
            />
            {errors.clientPhone && (
              <p className="text-red-500 text-sm mt-1">{errors.clientPhone.message}</p>
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
          </div>
        </div>
      </div>

      {/* Device Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de l'Appareil</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Type d'appareil *</label>
            <select {...register('deviceType')} className="form-input">
              <option value="">Sélectionnez le type</option>
              {deviceTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.deviceType && (
              <p className="text-red-500 text-sm mt-1">{errors.deviceType.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Marque *</label>
            <input
              type="text"
              {...register('deviceBrand')}
              className="form-input"
              placeholder="Ex: Apple, Dell, HP, Lenovo..."
            />
            {errors.deviceBrand && (
              <p className="text-red-500 text-sm mt-1">{errors.deviceBrand.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="form-label">Modèle (optionnel)</label>
          <input
            type="text"
            {...register('deviceModel')}
            className="form-input"
            placeholder="Ex: MacBook Pro 13', EliteBook 840 G8..."
          />
        </div>

        <div className="mt-4">
          <label className="form-label">Description du problème *</label>
          <textarea
            {...register('problemDescription')}
            rows={4}
            className="form-input resize-none"
            placeholder="Décrivez en détail le problème rencontré (symptômes, circonstances, messages d'erreur...)"
          />
          {errors.problemDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.problemDescription.message}</p>
          )}
        </div>
      </div>

      {/* Urgency & Schedule */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Planification</h3>
        
        <div>
          <label className="form-label">Niveau d'urgence *</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {urgencyLevels.map((level) => (
              <label key={level.value} className="cursor-pointer">
                <input
                  type="radio"
                  {...register('urgencyLevel')}
                  value={level.value}
                  className="sr-only peer"
                />
                <div className="border border-gray-300 rounded-lg p-3 text-center peer-checked:border-red-500 peer-checked:bg-red-50 hover:border-red-300 transition-colors">
                  <div className="font-semibold text-sm">{level.label}</div>
                  <div className="text-xs text-gray-500">{level.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="form-label">Date souhaitée *</label>
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setValue('preferredDate', date as Date);
                }}
                filterDate={isDateAvailable}
                dateFormat="dd/MM/yyyy"
                placeholderText="Sélectionnez une date"
                className="form-input w-full"
                minDate={new Date()}
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.preferredDate && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Créneau horaire *</label>
            <div className="relative">
              <select {...register('preferredTime')} className="form-input">
                <option value="">Choisir l'heure</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.preferredTime && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="form-label">Notes supplémentaires</label>
          <textarea
            {...register('notes')}
            rows={3}
            className="form-input resize-none"
            placeholder="Informations complémentaires, demandes spéciales..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Réservation en cours...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Réserver ce Rendez-vous
            </>
          )}
        </Button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-2">
            <strong>Confirmation automatique:</strong> Vous recevrez un SMS/email de confirmation
          </p>
          <p>
            <strong>Délai de réponse:</strong> Maximum 2h pendant les heures ouvrables
          </p>
        </div>
      </div>
    </form>
  );
}
