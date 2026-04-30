import type { Metadata, Viewport } from 'next';
import './globals.css';
import WhatsApp from '@/components/WhatsApp';

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

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
    'Bhubaneswar to Puri cab',
    'Odisha pilgrimage package',
  ],
  authors: [{ name: 'Jagannath Darshan Tours' }],
  creator: 'Jagannath Darshan Tours',
  publisher: 'Jagannath Darshan Tours',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
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
        alt: 'Jagannath Darshan Luxury Pilgrimage Odisha — Puri Temple Tour',
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
  verification: {
    // Add your Google Search Console verification token here when you have it
    // google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
  category: 'travel',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': 'https://www.jagannathdarshan.in/#organization',
      name: 'Jagannath Darshan Tours',
      alternateName: 'Jagannath Darshan',
      url: 'https://www.jagannathdarshan.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jagannathdarshan.in/Web_Hero.png',
        width: 1200,
        height: 630,
      },
      image: 'https://www.jagannathdarshan.in/Web_Hero.png',
      description:
        'Providing spiritual and comfortable travel experiences in Odisha since 2010. Specialising in Jagannath Darshan Tour Packages from Bhubaneswar to Puri, Konark Sun Temple, and Chilika Lake.',
      telephone: '+919876543210',
      email: 'book@jagannath.com',
      foundingDate: '2010',
      areaServed: [
        { '@type': 'City', name: 'Puri', containedInPlace: 'Odisha, India' },
        { '@type': 'City', name: 'Bhubaneswar', containedInPlace: 'Odisha, India' },
        { '@type': 'City', name: 'Konark', containedInPlace: 'Odisha, India' },
        { '@type': 'City', name: 'Chilika', containedInPlace: 'Odisha, India' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Puri',
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        postalCode: '752001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.8135,
        longitude: 85.8312,
      },
      hasMap: 'https://maps.google.com/?q=Puri,Odisha',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '06:00',
          closes: '22:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        // Add your real social/business profile URLs below:
        // 'https://www.facebook.com/jagannathdarshan',
        // 'https://www.instagram.com/jagannathdarshan',
        // 'https://g.page/jagannathdarshan',
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI',
    },
    {
      '@type': 'ItemList',
      name: 'Jagannath Darshan Tour Packages',
      description: 'Complete list of pilgrimage and sightseeing tour packages offered from Bhubaneswar and Puri.',
      url: 'https://www.jagannathdarshan.in',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Puri Darshan Tour',
          url: 'https://www.jagannathdarshan.in/puri-darshan-tour',
          description: 'Jagannath Temple darshan, Puri Beach, Gundicha Temple. VIP darshan assistance, premium AC cab.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Konark Sun Temple Tour',
          url: 'https://www.jagannathdarshan.in/konark-sun-temple-tour',
          description: 'UNESCO World Heritage Konark Sun Temple + Puri Golden Triangle. Expert guide, premium AC cab.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Chilika Lake Dolphin Trip',
          url: 'https://www.jagannathdarshan.in/chilika-lake-trip',
          description: "Asia's largest lagoon — Irrawaddy dolphins, Sea Mouth, Kalijai Temple. Full-day trip with boat assistance.",
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Bhubaneswar City Sightseeing',
          url: 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing',
          description: 'Lingaraj Temple, Khandagiri Caves, Dhauli Stupa, Nandankanan Zoo. 8-hour city tour with experienced driver.',
        },
      ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/Web_Hero.png" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/Mob_Hero.png" media="(max-width: 767px)" />
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
