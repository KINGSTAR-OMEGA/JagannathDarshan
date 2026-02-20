import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Features from '@/components/Features';
import Konark from '@/components/Konark';
import Itinerary from '@/components/Itinerary';
import Gallery from '@/components/Gallery';
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
          price: '1800',
          priceCurrency: 'INR',
          description: 'Temple Darshan, Beach Visit, Gundicha Temple. 8 Hours / 80 Kms. Premium Sedan.',
        },
        {
          '@type': 'Offer',
          name: 'Puri – Konark Tour – The Golden Triangle',
          price: '2200',
          priceCurrency: 'INR',
          description: 'Jagannath Temple, Konark Sun Temple, Chandrabhaga Beach, Marine Drive. 10 Hours.',
        },
        {
          '@type': 'Offer',
          name: 'Chilika Lake Trip – Nature at Satapada',
          price: '3199',
          priceCurrency: 'INR',
          description: 'Puri to Satapada, Dolphin Sighting Point, Sea Mouth, Boat Booking Assistance.',
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
            text: 'The Puri–Konark Golden Triangle tour starts at ₹2,200 per sedan for 10 hours, covering Jagannath Temple, Konark Sun Temple, Chandrabhaga Beach, and Marine Drive.',
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
        <Gallery />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
