import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'Konark Sun Temple Tour Package from Puri & Bhubaneswar | Jagannath Darshan',
    description:
        'Book Konark Sun Temple tour from Puri or Bhubaneswar. UNESCO World Heritage site visit + Sand Art Museum, Ramchandi Temple, Chandrabhaga Beach & Marine Drive. Premium AC cab. Call or WhatsApp for best rates.',
    keywords: [
        'Konark Sun Temple tour package',
        'Konark temple tour from Puri',
        'Konark sightseeing from Bhubaneswar',
        'Konark Sand Art Museum',
        'Chandrabhaga Beach Konark',
        'Puri Konark Golden Triangle',
        'UNESCO World Heritage Odisha',
        'Ramchandi temple tour',
        'Panchamukhi Hanuman temple Konark',
        'Konark temple trip',
    ],
    alternates: { canonical: '/konark-sun-temple-tour' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/konark-sun-temple-tour',
        siteName: 'Jagannath Darshan Tours',
        title: 'Konark Sun Temple Tour Package | UNESCO Heritage Odisha',
        description:
            'UNESCO World Heritage Konark Sun Temple + Sand Art Museum, Ramchandi Temple, Chandrabhaga Beach, Marine Drive. Call or WhatsApp for best rates.',
        images: [{ url: '/Web_Hero.webp', width: 1200, height: 630, alt: 'Konark Sun Temple Tour Odisha' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Konark Sun Temple Tour | UNESCO Heritage Odisha',
        description: 'UNESCO World Heritage site + beach, temples & Marine Drive. Premium AC cab from Puri or Bhubaneswar. Call or WhatsApp for rates.',
        images: ['/Web_Hero.webp'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://www.jagannathdarshan.in/konark-sun-temple-tour#webpage',
            url: 'https://www.jagannathdarshan.in/konark-sun-temple-tour',
            name: 'Konark Sun Temple Tour Package | Jagannath Darshan Tours',
            isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jagannathdarshan.in' },
                    { '@type': 'ListItem', position: 2, name: 'Konark Sun Temple Tour', item: 'https://www.jagannathdarshan.in/konark-sun-temple-tour' },
                ],
            },
        },
        {
            '@type': 'TouristTrip',
            name: 'Konark Sun Temple Sightseeing Tour — Puri Golden Triangle',
            description: 'Full-day Konark sightseeing tour from Puri or Bhubaneswar. Visit the UNESCO World Heritage Konark Sun Temple, Sand Art Museum, Panchamukhi Hanuman Temple, Ramchandi Temple, and Chandrabhaga Beach.',
            provider: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            touristType: 'History Lovers, Pilgrims, Tourists',
            offers: [
                { '@type': 'Offer', name: 'Puri–Konark Tour (Sedan)', description: '10 hours, AC sedan, experienced driver-guide' },
                { '@type': 'Offer', name: 'Puri–Konark Tour (Innova Crysta)', description: '10 hours, AC luxury SUV, expert heritage guide' },
            ],
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'How far is Konark Sun Temple from Puri?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Konark Sun Temple is approximately 35 km from Puri and about 65 km from Bhubaneswar. The drive from Puri takes about 45 minutes through beautiful Marine Drive along the sea coast.' },
                },
                {
                    '@type': 'Question',
                    name: 'What is the price of the Puri–Konark tour package?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Please call or WhatsApp us for the latest pricing on the Puri–Konark Golden Triangle tour. The tour covers Jagannath Temple, Konark Sun Temple, Chandrabhaga Beach, and Marine Drive in a 10-hour trip with a premium AC cab. Our team will share personalised rates based on your travel dates and group size.' },
                },
                {
                    '@type': 'Question',
                    name: 'What is the entry fee for Konark Sun Temple?',
                    acceptedAnswer: { '@type': 'Answer', text: 'The entry fee for Konark Sun Temple is ₹40 for Indian nationals and ₹600 for foreign nationals (subject to change by ASI). We help you get tickets smoothly during the tour.' },
                },
                {
                    '@type': 'Question',
                    name: 'Can we combine Puri and Konark in one day trip?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Yes! Our popular Puri–Konark Golden Triangle package covers Jagannath Temple darshan in Puri + Konark Sun Temple + Chandrabhaga Beach in a single comfortable 10-hour tour. Contact us for pricing and availability.' },
                },
            ],
        },
    ],
};

const highlights = [
    { icon: 'wb_sunny', title: 'Konark Sun Temple', desc: 'UNESCO World Heritage Site — the 13th-century chariot-shaped temple of Surya Deva. A marvel of Kalinga architecture.' },
    { icon: 'palette', title: 'Sand Art Museum', desc: 'World-class sand sculptures crafted by Padma Shri Sudarsan Pattnaik and his students. Unique to Odisha.' },
    { icon: 'self_improvement', title: 'Panchamukhi Hanuman Temple', desc: 'Ancient Hanuman temple near Konark with five divine faces. Deeply revered by locals and pilgrims.' },
    { icon: 'spa', title: 'Ramchandi Temple', desc: 'Serene beachside temple of Goddess Ramchandi at the confluence of the Kushabhadra River and ocean.' },
    { icon: 'beach_access', title: 'Chandrabhaga Beach', desc: 'One of Odisha\'s cleanest beaches, named after the crescent moon. Peaceful and far less crowded than Puri Beach.' },
    { icon: 'route', title: 'Marine Drive', desc: 'Scenic coastal road connecting Puri to Konark — drive through casuarina forests beside the Bay of Bengal.' },
];

const itinerary = [
    { label: 'Pickup', title: 'Hotel/Airport Pickup', desc: 'Our driver collects you in a comfortable AC cab from your hotel in Puri or Bhubaneswar. Begin your golden triangle journey.' },
    { label: 'Temple', title: 'Jagannath Temple Darshan (Puri)', desc: 'Start with blessings from Lord Jagannath before heading to Konark. VIP darshan assistance provided.' },
    { label: 'Drive', title: 'Scenic Marine Drive to Konark', desc: 'Enjoy the breathtaking coastal drive along Marine Drive — sea on one side, casuarina forests on the other.' },
    { label: 'Heritage', title: 'Konark Sun Temple', desc: 'Explore the magnificent 13th-century Sun Temple. Our guide explains the astronomical significance, erotic sculptures, and Kalinga architecture.' },
    { label: 'Culture', title: 'Sand Art Museum & Panchamukhi Hanuman', desc: 'Marvel at world-class sand sculptures, then visit the unique five-faced Hanuman temple nearby.' },
    { label: 'Beach', title: 'Chandrabhaga Beach & Ramchandi Temple', desc: 'Relax at the pristine Chandrabhaga Beach. Visit the serene Ramchandi beachside temple at the river mouth.' },
    { label: 'Return', title: 'Return Journey', desc: 'Drive back comfortably to Puri or Bhubaneswar with memories of a magnificent heritage day.' },
];

export default function KonarkTourPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="w-full">

                {/* Hero Section — Warm ochre/amber theme for Sun Temple */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#1a0e00]">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSXXoKCPbb13_uKh0_MYZcYsiPaJ2n0MajmGhZO_hNaLKZOf0UoKEvT_WyH8HDsueMEZ-oCTBSlbHrQ_9gPy-Hg9TxEje8K0AOmjiRNAoUmmc5cA18UKwtN6WWAkv4f4AhiJBYKD8Bl0g7L0R_8DB5SxfDGwC-SHgMY1ei3U4vpzfGKCJGLf0-0uIYorEkwRQQrPiBkslyZyTKS6kM8_BF40UMLJx3tdtWQg5PFe9Z3JqO0bnpl5_2vTeghsZuin3Hg"
                            alt="Konark Sun Temple UNESCO World Heritage Odisha"
                            fill className="object-cover opacity-50"
                            priority sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e00] via-[#1a0e00]/60 to-[#1a0e00]/20" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-40 w-full">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-white/50 text-xs">
                                <li><a href="/" className="hover:text-champagne-400 transition-colors">Home</a></li>
                                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                                <li className="text-amber-400">Konark Sun Temple Tour</li>
                            </ol>
                        </nav>
                        <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-6">
                            UNESCO World Heritage Site
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Konark Sun Temple<br />
                            <span className="italic font-light" style={{ color: '#fbbf24' }}>Tour Package</span>
                        </h1>
                        <p className="text-white/80 text-lg font-light max-w-2xl mb-10">
                            The 13th-century stone chariot of Surya Deva — a UNESCO World Heritage marvel. Combine it with the Golden Triangle: Puri + Konark + Chandrabhaga Beach.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="tel:+919876543210" className="text-navy-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-xl flex items-center gap-2" style={{ backgroundColor: '#f59e0b' }}>
                                <span className="material-symbols-outlined text-sm">call</span>
                                Call to Book
                            </a>
                            <a href="https://wa.me/919876543210?text=Hi%2C+I%27d+like+to+enquire+about+the+Konark+Sun+Temple+Tour.+Please+share+availability+and+pricing." target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:border-amber-400 hover:text-amber-300 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">chat</span>
                                WhatsApp Us
                            </a>
                            <div className="flex items-center gap-6 text-white/60 text-xs">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fbbf24' }}>schedule</span> 10 Hours</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fbbf24' }}>route</span> 160 Kms</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fbbf24' }}>star</span> 4.9 Rating</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fbbf24' }}>currency_rupee</span> Affordable Rates</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#b45309' }}>What You&apos;ll See</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">6 Stunning Stops in Konark</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">Ancient architecture, sacred temples, pristine beaches — a perfect blend of heritage and nature.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {highlights.map((h, i) => (
                                <div key={i} className="group p-8 rounded-[1.5rem] border border-charcoal-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl mb-5 block font-light" style={{ color: '#d97706' }}>{h.icon}</span>
                                    <h3 className="text-lg font-serif text-navy-900 mb-3">{h.title}</h3>
                                    <p className="text-charcoal-500 text-sm font-light leading-relaxed">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="py-32 px-6 lg:px-12 bg-charcoal-50">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#b45309' }}>Day Plan</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Your Konark Itinerary</h2>
                            <p className="text-charcoal-500 font-light text-base">Every stop of your heritage day, perfectly timed.</p>
                        </div>
                        <div className="relative ml-4 space-y-16">
                            <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-amber-300 via-amber-400 to-transparent" />
                            {itinerary.map((step, i) => (
                                <div key={i} className="relative pl-12 group">
                                    <div className={`absolute -left-[4px] top-2 h-4 w-4 rounded-full border group-hover:scale-125 transition-transform duration-300 z-10 ${i % 2 === 0 ? 'bg-white border-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]' : 'bg-amber-500 border-amber-500 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]'}`} />
                                    <p className="text-[0.6rem] uppercase tracking-widest font-bold mb-2" style={{ color: '#d97706' }}>{step.label}</p>
                                    <h3 className="text-xl font-serif text-navy-900 mb-2">{step.title}</h3>
                                    <p className="text-charcoal-500 text-sm font-light leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book Your Tour */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Book Your Tour</h2>
                            <p className="text-charcoal-500 font-light text-base">Choose your vehicle and contact us for a personalised quote.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-amber-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                                <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.2em] mb-1">Premium Sedan</p>
                                <h3 className="text-2xl font-serif text-navy-900 mb-2">Dzire / Etios</h3>
                                <p className="text-sm font-semibold mb-8" style={{ color: '#d97706' }}>Up to 4 passengers</p>
                                <ul className="space-y-4 mb-10 text-sm text-charcoal-600 flex-grow">
                                    {['Up to 4 passengers', '10 Hours / 160 Kms', 'Premium AC cab', 'Experienced driver-guide', 'Puri + Konark + Beach'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d97706' }} />{f}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3">
                                    <a href="tel:+919876543210" className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:opacity-90 transition-all text-center flex items-center justify-center gap-2" style={{ backgroundColor: '#f59e0b' }}>
                                        <span className="material-symbols-outlined text-sm">call</span> Call to Book
                                    </a>
                                    <a href="https://wa.me/919876543210?text=Hi%2C+I+want+to+book+the+Konark+Sun+Temple+Tour+in+a+Sedan.+Please+share+availability+and+pricing." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl border border-charcoal-200 text-xs font-bold uppercase tracking-[0.15em] text-charcoal-600 hover:border-amber-300 hover:text-navy-900 transition-all text-center flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Us
                                    </a>
                                </div>
                            </div>
                            <div className="p-10 rounded-[2rem] shadow-2xl relative flex flex-col border" style={{ backgroundColor: '#431407', borderColor: '#78350f' }}>
                                <div className="absolute top-6 right-6"><span className="material-symbols-outlined" style={{ color: '#fbbf24' }}>star</span></div>
                                <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: '#fbbf24', opacity: 0.7 }}>Luxury SUV</p>
                                <h3 className="text-2xl font-serif text-white mb-2">Innova Crysta</h3>
                                <p className="text-sm font-semibold mb-8" style={{ color: '#fbbf24' }}>Up to 6 passengers</p>
                                <ul className="space-y-4 mb-10 text-sm text-white/80 flex-grow">
                                    {['Up to 6 passengers', '10 Hours / 160 Kms', 'Luxury AC SUV', 'Expert heritage guide', 'Puri + Konark + Beach', 'Bottled water included'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#fbbf24' }} />{f}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3">
                                    <a href="tel:+919876543210" className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:opacity-90 transition-colors shadow-lg text-center flex items-center justify-center gap-2" style={{ backgroundColor: '#f59e0b' }}>
                                        <span className="material-symbols-outlined text-sm">call</span> Call to Book
                                    </a>
                                    <a href="https://wa.me/919876543210?text=Hi%2C+I+want+to+book+the+Konark+Sun+Temple+Tour+in+an+Innova+Crysta.+Please+share+availability+and+pricing." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl border border-white/20 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:border-amber-400 hover:text-amber-300 transition-all text-center flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-xs text-charcoal-400 mt-8 font-light">Call or WhatsApp us for the best rates. We respond within minutes.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-32 px-6 lg:px-12 bg-charcoal-50">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-6">
                            {(jsonLd['@graph'][2] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((qa, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-charcoal-100 p-8">
                                    <h3 className="text-base font-serif font-bold text-navy-900 mb-3">{qa.name}</h3>
                                    <p className="text-charcoal-500 text-sm font-light leading-relaxed">{qa.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Explore More Tours */}
                <section className="bg-navy-900 py-24 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-14">
                            <div>
                                <p className="text-champagne-400 text-[0.65rem] font-bold tracking-[0.35em] uppercase mb-3">Continue Exploring</p>
                                <h2 className="text-3xl font-serif text-white">More Odisha Tours</h2>
                            </div>
                            <a href="/" className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 hover:text-champagne-400 transition-colors flex items-center gap-1.5 flex-shrink-0 pb-1">
                                View All Tours <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-3 gap-5">
                            {[
                                { href: '/puri-darshan-tour', label: 'Puri Darshan Tour', sub: 'Jagannath Temple', num: '01' },
                                { href: '/chilika-lake-trip', label: 'Chilika Lake Trip', sub: "Asia's Largest Lagoon", num: '02' },
                                { href: '/bhubaneswar-sightseeing', label: 'Bhubaneswar Sightseeing', sub: 'Temple City of India', num: '03' },
                            ].map((t) => (
                                <a key={t.href} href={t.href}
                                    className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-champagne-400/40 transition-all duration-400 overflow-hidden">
                                    <span className="absolute top-6 right-7 font-serif text-5xl text-white/[0.06] leading-none select-none group-hover:text-champagne-400/10 transition-colors">{t.num}</span>
                                    <div className="mb-8">
                                        <p className="text-champagne-400 text-[0.6rem] font-bold tracking-[0.25em] uppercase mb-3">{t.sub}</p>
                                        <h3 className="text-white font-serif text-xl leading-snug">{t.label}</h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/40 text-xs font-light">Enquire for pricing</span>
                                        <span className="material-symbols-outlined text-white/30 group-hover:text-champagne-400 text-base transition-colors">arrow_forward</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
