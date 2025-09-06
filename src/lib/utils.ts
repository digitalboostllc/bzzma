import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Format Moroccan phone numbers
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('212')) {
    // Already has country code
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0')) {
    // Remove leading 0 and add country code
    return `+212${cleaned.slice(1)}`;
  } else {
    // Add country code
    return `+212${cleaned}`;
  }
}

export function formatCurrency(amount: number, locale: string = 'fr-MA'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = formatPhoneNumber(phone).replace('+', '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

export function formatDate(date: Date, locale: string = 'fr-MA'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date, locale: string = 'fr-MA'): string {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
