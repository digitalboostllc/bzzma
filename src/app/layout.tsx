import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "../components/providers";
import { ConditionalLayout } from "@/components/conditional-layout";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bzz.ma - Solutions IT 360° au Maroc | Réparation, Web, Laptops, Entreprise",
  description: "Votre partenaire IT 360° au Maroc : réparation professionnelle, création web, vente laptops, solutions entreprise. Un seul contact pour tous vos besoins technologiques.",
  keywords: "solutions IT 360° Maroc, réparation MacBook Casablanca, création site web Maroc, vente laptop Casablanca, solutions informatiques entreprise, partenaire IT Maroc, Bzz.ma",
  authors: [{ name: "Équipe Bzz" }],
  creator: "Bzz.ma",
  publisher: "Bzz.ma",
  metadataBase: new URL('https://bzz.ma'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bzz.ma - Votre Partenaire IT 360° au Maroc",
    description: "Solutions IT complètes : réparation, création web, vente laptops et consulting entreprise. Votre partenaire technologique unique.",
    url: "https://bzz.ma",
    siteName: "Bzz.ma",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bzz.ma - Solutions IT 360° au Maroc",
    description: "Réparation, création web, laptops et solutions entreprise. Votre partenaire IT complet au Maroc.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        </Providers>
      </body>
    </html>
  );
}
