import type { Metadata } from 'next';
import './globals.css';
import WhatsApp from '@/components/WhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jagannathdarshan.in'),
  title: {
    default: 'Jagannath Darshan | Luxury Pilgrimage Tour from Bhubaneswar to Puri',
    template: '%s | Jagannath Darshan',
  },
  description:
    'Book your Jagannath Darshan tour package from Bhubaneswar. Puri temple darshan, Konark Sun Temple, Chilika Lake trips & full Odisha travel services. Since 2010. 500+ monthly yatras.',
  keywords: [
    'Jagannath Darshan Tour Package',
    'Puri Tour from Bhubaneswar',
    'Puri Bhubaneswar tour',
    'Odisha Travel Services',
    'Konark Sun Temple tour',
    'Chilika Lake tour',
    'pilgrimage travel Puri',
    'luxury pilgrimage Odisha',
    'Jagannath temple darshan',
    'Puri taxi service',
  ],
  authors: [{ name: 'Jagannath Darshan Tours' }],
  creator: 'Jagannath Darshan Tours',
  publisher: 'Jagannath Darshan Tours',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.jagannathdarshan.in',
    siteName: 'Jagannath Darshan Tours',
    title: 'Jagannath Darshan | Luxury Pilgrimage Tour from Bhubaneswar to Puri',
    description:
      'Experience the divine soul of Odisha. Book curated Jagannath Darshan tour packages — Puri, Konark & Chilika — with premium transport and VIP darshan access.',
    images: [
      {
        url: '/Web_Hero.png',
        width: 1200,
        height: 630,
        alt: 'Jagannath Darshan Luxury Pilgrimage Odisha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jagannath Darshan | Luxury Pilgrimage – Puri & Konark',
    description:
      'Curated pilgrimage tours from Bhubaneswar. Puri temple, Konark, Chilika Lake. Premium AC vehicles. Book now.',
    images: ['/Web_Hero.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': 'https://www.jagannathdarshan.in/#organization',
      name: 'Jagannath Darshan Tours',
      url: 'https://www.jagannathdarshan.in',
      logo: 'https://www.jagannathdarshan.in/Web_Hero.png',
      description:
        'Providing spiritual and comfortable travel experiences in Odisha since 2010. Specialising in Jagannath Darshan Tour Packages from Bhubaneswar to Puri, Konark Sun Temple, and Chilika Lake.',
      telephone: '+919876543210',
      email: 'book@jagannath.com',
      foundingDate: '2010',
      areaServed: ['Odisha', 'Puri', 'Bhubaneswar', 'Konark', 'Chilika'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.8135,
        longitude: 85.8312,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
      openingHours: 'Mo-Su 06:00-22:00',
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-charcoal-50 text-charcoal-800 font-sans antialiased overflow-x-hidden selection:bg-champagne-500 selection:text-white min-h-screen flex flex-col">
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
