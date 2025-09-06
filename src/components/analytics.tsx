'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Google Analytics
export function GoogleAnalytics({ gtag }: { gtag?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gtag || typeof window === 'undefined') return;

    // Page view tracking
    window.gtag?.('config', gtag, {
      page_path: pathname,
    });
  }, [pathname, gtag]);

  if (!gtag) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Custom event tracking
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Contact form submission tracking
export function trackContactForm(type: string) {
  trackEvent('form_submission', 'contact', type);
}

// Booking form submission tracking
export function trackBookingForm(deviceType: string, urgency: string) {
  trackEvent('form_submission', 'booking', `${deviceType}_${urgency}`);
}

// WhatsApp click tracking
export function trackWhatsAppClick(source: string) {
  trackEvent('external_link', 'whatsapp', source);
}

// Phone call tracking
export function trackPhoneCall(source: string) {
  trackEvent('external_link', 'phone', source);
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
