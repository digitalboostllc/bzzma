import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "../components/providers";
import { ConditionalLayout } from "@/components/conditional-layout";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bzz.ma - Solutions IT Professionnelles au Maroc",
  description: "Réparation laptops, PC, MacBook pour entreprises. Service rapide et fiable partout au Maroc. Devis gratuit, intervention sur site.",
  keywords: "réparation ordinateur Maroc, réparation MacBook Casablanca, services IT entreprises Maroc, Bzz",
  authors: [{ name: "Bzz" }],
  creator: "Bzz",
  publisher: "Bzz",
  metadataBase: new URL('https://bzz.ma'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bzz.ma - Solutions IT Professionnelles",
    description: "Réparation laptops, PC, MacBook pour entreprises au Maroc",
    url: "https://bzz.ma",
    siteName: "Bzz",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bzz.ma - Solutions IT Professionnelles",
    description: "Réparation laptops, PC, MacBook pour entreprises au Maroc",
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
