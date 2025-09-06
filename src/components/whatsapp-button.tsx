'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/components/analytics';

export function WhatsAppButton() {
  const whatsappMessage = "Bonjour Bzz! Je souhaite obtenir des informations sur vos services de réparation IT.";
  const whatsappLink = generateWhatsAppLink("+212600112233", whatsappMessage);

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="whatsapp-btn group"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  );
}
