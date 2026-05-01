import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Features from '@/components/Features';
import TempleGuide from '@/components/TempleGuide';
import Konark from '@/components/Konark';
import Itinerary from '@/components/Itinerary';
import Gallery from '@/components/Gallery';
import TravelServices from '@/components/TravelServices';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Structured data for the home page
const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.jagannathdarshan.in/#webpage',
      url: 'https://www.jagannathdarshan.in',
      name: 'Jagannath Darshan | Luxury Pilgrimage Tour from Bhubaneswar to Puri',
      isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.jagannathdarshan.in',
          },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Jagannath Darshan Tour Package',
      provider: { '@id': 'https://www.jagannathdarshan.in/#organization' },
      description:
        'Complete Jagannath Darshan tour from Bhubaneswar to Puri including Konark Sun Temple visit, Chilika Lake excursion, VIP darshan assistance, and premium AC cab service.',
      areaServed: 'Odisha, India',
      offers: [
        {
          '@type': 'Offer',
          name: 'Puri Sightseeing – Single Day Spiritual Visit',
          description: 'Temple Darshan, Beach Visit, Gundicha Temple. 8 Hours / 80 Kms. Premium Sedan or Luxury SUV.',
        },
        {
          '@type': 'Offer',
          name: 'Puri – Konark Tour – The Golden Triangle',
          description: 'Jagannath Temple, Konark Sun Temple, Chandrabhaga Beach, Marine Drive. 10 Hours. Sedan or SUV.',
        },
        {
          '@type': 'Offer',
          name: 'Chilika Lake Trip – Nature at Satapada',
          description: 'Puri to Satapada, Dolphin Sighting Point, Sea Mouth, Boat Booking Assistance. Full day.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I book a Jagannath Darshan tour from Bhubaneswar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book by calling us at +91 98765 43210 or emailing book@jagannath.com. We arrange pickup from your hotel or the airport in Bhubaneswar.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the price for a Puri–Konark tour?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Please call or WhatsApp us for the latest pricing on the Puri–Konark Golden Triangle tour. The tour covers Jagannath Temple, Konark Sun Temple, Chandrabhaga Beach, and Marine Drive over 10 hours with a premium AC cab.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you arrange VIP Darshan at Jagannath Temple?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide assisted entry and priority queue management so you can experience the divine darshan smoothly without long waits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which vehicles are available for Puri tours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer premium sedans (Dzire / Etios) and luxury SUVs (Innova Crysta) — all sanitized, AC, and driven by experienced courteous drivers.',
          },
        },
      ],
    },
    {
      '@type': 'AggregateRating',
      itemReviewed: { '@id': 'https://www.jagannathdarshan.in/#organization' },
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '500',
    },
    {
      '@type': 'Review',
      itemReviewed: { '@id': 'https://www.jagannathdarshan.in/#organization' },
      author: { '@type': 'Person', name: 'Rahul Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'The driver Mr. Das was very polite and acted as a guide too. The car was clean and comfortable. Best service in Puri.',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <Story />
        <Features />
        <Konark />
        <Itinerary />
        <TempleGuide />
        <Gallery />
        <TravelServices />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
