import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.praxis-rosefid.de'),
  title: {
    default: 'Facharztpraxis Nazita Rosefid-Vojoud | Allgemein- & Sportmedizin Berlin-Lankwitz',
    template: '%s | Praxis Rosefid-Vojoud',
  },
  description:
    'Facharztpraxis für Allgemeinmedizin und Sportmedizin in Berlin-Lankwitz. Dr. Nazita Rosefid-Vojoud – Leonorenstraße 89, 12247 Berlin. Tel: (030) 774 10 44.',
  keywords: [
    'Facharztpraxis',
    'Allgemeinmedizin',
    'Sportmedizin',
    'Berlin Lankwitz',
    'Nazita Rosefid-Vojoud',
    'Hausarzt Lankwitz',
    'Hausarzt 12247',
    'Unfallchirurgie Berlin',
    'Arzt Berlin Lankwitz',
  ],
  authors: [{ name: 'Nazita Rosefid-Vojoud' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.praxis-rosefid.de',
    siteName: 'Facharztpraxis Nazita Rosefid-Vojoud',
    title: 'Facharztpraxis Nazita Rosefid-Vojoud | Berlin-Lankwitz',
    description: 'Ihre Fachärztin für Allgemein- und Sportmedizin in Berlin-Lankwitz.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Facharztpraxis Nazita Rosefid-Vojoud',
  description: 'Facharztpraxis für Allgemein- und Sportmedizin in Berlin-Lankwitz',
  url: 'https://www.praxis-rosefid.de',
  telephone: '+49-30-774-1044',
  faxNumber: '+49-30-766-77047',
  email: 'anfrage@praxis-rosefid.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leonorenstraße 89',
    addressLocality: 'Berlin',
    addressRegion: 'Berlin',
    postalCode: '12247',
    addressCountry: 'DE',
  },
  openingHours: ['Mo-Fr 08:00-12:00', 'Mo,Tu,Th 15:00-18:00'],
  priceRange: 'GKV, PKV',
  medicalSpecialty: 'Allgemeinmedizin, Sportmedizin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
