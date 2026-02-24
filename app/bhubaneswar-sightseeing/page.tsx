import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'Bhubaneswar Sightseeing Tour Package | Temples & Caves | Jagannath Darshan',
    description:
        'Explore Bhubaneswar — the Temple City of India. Visit Lingaraj Temple, Dhauli Shanti Stupa, Khandagiri & Udayagiri Caves, and Nandankanan Zoo. Premium AC cab. Starting ₹1,500.',
    keywords: [
        'Bhubaneswar sightseeing tour',
        'Lingaraj Temple tour Bhubaneswar',
        'Khandagiri Udayagiri caves tour',
        'Dhauli Shanti Stupa Bhubaneswar',
        'Nandankanan Zoo tour',
        'Bhubaneswar temple city tour',
        'Bhubaneswar local sightseeing',
        'Bhubaneswar day tour package',
        'Odisha heritage tour Bhubaneswar',
        'Rajarani temple Bhubaneswar',
    ],
    alternates: { canonical: '/bhubaneswar-sightseeing' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing',
        siteName: 'Jagannath Darshan Tours',
        title: 'Bhubaneswar Sightseeing Tour | Temple City of India',
        description: 'Lingaraj Temple, Dhauli Stupa, Khandagiri Caves, Udayagiri, Nandankanan Zoo — complete Bhubaneswar tour. Starting ₹1,500.',
        images: [{ url: '/Web_Hero.webp', width: 1200, height: 630, alt: 'Bhubaneswar Temple City Sightseeing Tour' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bhubaneswar Sightseeing | Temple City Tour | Starting ₹1,500',
        description: 'Lingaraj Temple, Khandagiri Caves, Dhauli Stupa & more. Premium cab sightseeing in Bhubaneswar.',
        images: ['/Web_Hero.webp'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing#webpage',
            url: 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing',
            name: 'Bhubaneswar Sightseeing Tour Package | Jagannath Darshan Tours',
            isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jagannathdarshan.in' },
                    { '@type': 'ListItem', position: 2, name: 'Bhubaneswar Sightseeing', item: 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing' },
                ],
            },
        },
        {
            '@type': 'TouristTrip',
            name: 'Bhubaneswar City Sightseeing — Temple City of India',
            description: 'Full-day Bhubaneswar sightseeing covering Lingaraj Temple, Dhauli Shanti Stupa, Khandagiri and Udayagiri Caves, Nandankanan Zoological Park, Rajarani Temple, and the State Museum.',
            provider: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            touristType: 'Heritage Lovers, History Enthusiasts, Families, Pilgrims',
            offers: [
                { '@type': 'Offer', name: 'Bhubaneswar Sightseeing (Sedan)', price: '1500', priceCurrency: 'INR', description: '8 hours city tour in premium AC sedan' },
                { '@type': 'Offer', name: 'Bhubaneswar Sightseeing (Innova Crysta)', price: '2500', priceCurrency: 'INR', description: '8 hours city tour in luxury AC SUV' },
            ],
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What is Bhubaneswar famous for?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Bhubaneswar is called the "Temple City of India" with over 600 temples. It is famous for the Lingaraj Temple (11th century), Khandagiri and Udayagiri rock-cut caves (2nd century BC), the Dhauli Peace Pagoda, and Nandankanan Zoological Park which is home to white tigers.' },
                },
                {
                    '@type': 'Question',
                    name: 'How much does a Bhubaneswar sightseeing tour cost?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Bhubaneswar city sightseeing starts at ₹1,500 per sedan (Dzire/Etios) for 8 hours. Innova Crysta (up to 6 passengers) is available at ₹2,500. Prices include all major sightseeing spots and a comfortable AC vehicle.' },
                },
                {
                    '@type': 'Question',
                    name: 'Can non-Hindus enter Lingaraj Temple?',
                    acceptedAnswer: { '@type': 'Answer', text: 'The inner sanctum of Lingaraj Temple is restricted to Hindu devotees only. However, a special elevated viewing platform (Meghnad Pacheri) is available for non-Hindu visitors to view the magnificent temple from outside. Our driver-guide will inform you of all entry protocols.' },
                },
                {
                    '@type': 'Question',
                    name: 'Is Nandankanan Zoo worth visiting?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Absolutely! Nandankanan Zoological Park is one of India\'s most beautiful zoos, set amidst the Chandaka forest. It is the first zoo in India to breed white tigers and gharials in captivity. A must-visit for families and nature lovers.' },
                },
            ],
        },
    ],
};

const highlights = [
    { icon: 'temple_hindu', title: 'Lingaraj Temple', desc: '11th-century Shiva temple — the largest temple in Bhubaneswar and a masterpiece of Kalinga architecture. One of the most important temples in Eastern India.' },
    { icon: 'fort', title: 'Khandagiri & Udayagiri Caves', desc: '2nd century BC Jain rock-cut caves carved for monks. The twin hills overlook Bhubaneswar and offer stunning panoramic views.' },
    { icon: 'mode_of_travel', title: 'Dhauli Shanti Stupa', desc: 'The Japanese Peace Pagoda at the historic site of the Kalinga War — where Emperor Ashoka converted to Buddhism after witnessing the devastation.' },
    { icon: 'pets', title: 'Nandankanan Zoological Park', desc: 'India\'s first zoo to breed white tigers. Set in a forested reserve beside a lake — one of the most scenic zoos in Asia.' },
    { icon: 'account_balance', title: 'Rajarani Temple', desc: 'Often called the "Love Temple" of Bhubaneswar for its exquisite erotic sculptures and intricate carvings. A quiet, beautiful alternative to the busier sites.' },
    { icon: 'museum', title: 'Odisha State Museum', desc: 'Home to a remarkable collection of Odisha\'s art, archaeology, natural history, and prehistoric artifacts. Perfect for history enthusiasts.' },
];

const itinerary = [
    { time: '08:00', label: 'Start', title: 'Begin City Tour — Lingaraj Temple', desc: 'Start early at the magnificent 11th-century Lingaraj Temple. Hindu devotees can enter for darshan, while others view from the viewing platform provided by the temple authority.' },
    { time: '10:00', label: 'Caves', title: 'Udayagiri & Khandagiri Caves', desc: 'Explore the 2000-year-old Jain rock-cut caves built by King Kharavela. Climb the twin hills for a panoramic view of the city. History comes alive here.' },
    { time: '11:30', label: 'Peace', title: 'Dhauli Shanti Stupa', desc: 'Visit the iconic white Japanese Peace Pagoda on the banks of the Daya River — the site of the historic Kalinga War that transformed Emperor Ashoka.' },
    { time: '13:00', label: 'Lunch', title: 'Lunch at Bhubaneswar', desc: 'Enjoy Odia cuisine at a well-rated local restaurant — dal baati, pakhala, chhena poda, and more authentic Odisha flavors.' },
    { time: '14:30', label: 'Temple', title: 'Rajarani Temple & Tank', desc: 'Visit the ornate Rajarani Temple — famed for its sculpted couples and intricate sandstone architecture. Also visit the sacred Bindu Sagar Tank.' },
    { time: '16:00', label: 'Zoo', title: 'Nandankanan Zoological Park', desc: 'End your day at one of India\'s most beautiful zoos. See white tigers, gharials, and exotic wildlife in a stunning forested setting.' },
    { time: '18:00', label: 'End', title: 'Drop at Hotel', desc: 'Return comfortably to your Bhubaneswar hotel with a day full of temples, history, nature, and culture.' },
];

export default function BhubaneswarSightseeingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="w-full">

                {/* Hero — Deep maroon temple heritage theme */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ backgroundColor: '#1c0a0a' }}>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w"
                            alt="Bhubaneswar Temple City Sightseeing — Lingaraj Temple Odisha"
                            fill className="object-cover opacity-40"
                            priority sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a0a] via-[#1c0a0a]/70 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-40 w-full">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-white/50 text-xs">
                                <li><a href="/" className="hover:text-rose-400 transition-colors">Home</a></li>
                                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                                <li style={{ color: '#fda4af' }}>Bhubaneswar Sightseeing</li>
                            </ol>
                        </nav>
                        <span className="inline-block py-1.5 px-4 rounded-full border text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-6" style={{ backgroundColor: 'rgba(220,38,38,0.15)', borderColor: 'rgba(220,38,38,0.3)', color: '#fda4af' }}>
                            Temple City of India
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Bhubaneswar<br />
                            <span className="italic font-light" style={{ color: '#fda4af' }}>City Sightseeing</span>
                        </h1>
                        <p className="text-white/80 text-lg font-light max-w-2xl mb-10">
                            Over 600 ancient temples, rock-cut Jain caves, a world-peace pagoda, and one of India&apos;s finest zoos — Bhubaneswar is a city built on centuries of faith and culture.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="tel:+919876543210" className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-xl text-white" style={{ backgroundColor: '#dc2626' }}>
                                Book Now — ₹1,500
                            </a>
                            <div className="flex items-center gap-6 text-white/60 text-xs">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fda4af' }}>schedule</span> 8 Hours</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fda4af' }}>temple_hindu</span> 600+ Temples</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm" style={{ color: '#fda4af' }}>star</span> 4.9 Rating</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#991b1b' }}>What You&apos;ll Explore</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">6 Iconic Stops in Bhubaneswar</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">Ancient caves, majestic temples, a peace pagoda, and exotic wildlife — a complete cultural and historical day.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {highlights.map((h, i) => (
                                <div key={i} className="group p-8 rounded-[1.5rem] border border-charcoal-100 hover:border-rose-300 hover:shadow-xl transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl mb-5 block font-light" style={{ color: '#dc2626' }}>{h.icon}</span>
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
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#991b1b' }}>Day Plan</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Your Bhubaneswar Itinerary</h2>
                            <p className="text-charcoal-500 font-light text-base">A perfectly curated exploration of the Temple City.</p>
                        </div>
                        <div className="relative ml-4 space-y-16">
                            <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-rose-300 via-rose-400 to-transparent" />
                            {itinerary.map((step, i) => (
                                <div key={i} className="relative pl-12 group">
                                    <div className="absolute -left-[4px] top-2 h-4 w-4 rounded-full border group-hover:scale-125 transition-transform duration-300 z-10" style={{ backgroundColor: i % 2 === 0 ? 'white' : '#dc2626', borderColor: '#dc2626', boxShadow: '0 0 0 4px rgba(220,38,38,0.12)' }} />
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="md:w-24 flex-shrink-0 pt-1">
                                            <time className="font-serif text-2xl text-navy-900 block">{step.time}</time>
                                            <p className="text-[0.6rem] uppercase tracking-widest font-bold" style={{ color: '#dc2626' }}>{step.label}</p>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-serif text-navy-900 mb-2">{step.title}</h3>
                                            <p className="text-charcoal-500 text-sm font-light leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Transparent Pricing</h2>
                            <p className="text-charcoal-500 font-light text-base">No hidden fees. Explore the Temple City in comfort.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-rose-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.2em] mb-1">Premium Sedan</p>
                                <h3 className="text-2xl font-serif text-navy-900 mb-2">Dzire / Etios</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif text-navy-900">₹1,500</span>
                                    <span className="text-charcoal-400 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-charcoal-600">
                                    {['Up to 4 passengers', '8 Hours city tour', 'All major sightseeing spots', 'Premium AC cab', 'Experienced local driver'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#dc2626' }} />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl border border-navy-900/10 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all text-center block">Select Plan</a>
                            </div>
                            <div className="p-10 rounded-[2rem] shadow-2xl relative flex flex-col border" style={{ backgroundColor: '#1c0a0a', borderColor: '#3f1515' }}>
                                <div className="absolute top-6 right-6"><span className="material-symbols-outlined" style={{ color: '#fda4af' }}>star</span></div>
                                <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'rgba(253,164,175,0.7)' }}>Luxury SUV</p>
                                <h3 className="text-2xl font-serif text-white mb-2">Innova Crysta</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif" style={{ color: '#fda4af' }}>₹2,500</span>
                                    <span className="text-white/40 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-white/80">
                                    {['Up to 6 passengers', '8 Hours city tour', 'All major sightseeing spots', 'Luxury AC SUV', 'Experienced driver-guide', 'Bottled water included'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#fda4af' }} />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white hover:opacity-90 transition-colors shadow-lg text-center block" style={{ backgroundColor: '#dc2626' }}>Reserve Now</a>
                            </div>
                        </div>
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
                                { href: '/puri-darshan-tour', label: 'Puri Darshan Tour', sub: 'Jagannath Temple', price: '₹1,800', num: '01' },
                                { href: '/konark-sun-temple-tour', label: 'Konark Sun Temple', sub: 'UNESCO Heritage', price: '₹2,200', num: '02' },
                                { href: '/chilika-lake-trip', label: 'Chilika Lake Trip', sub: "Asia's Largest Lagoon", price: '₹3,199', num: '03' },
                            ].map((t) => (
                                <a key={t.href} href={t.href}
                                    className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-champagne-400/40 transition-all duration-400 overflow-hidden">
                                    <span className="absolute top-6 right-7 font-serif text-5xl text-white/[0.06] leading-none select-none group-hover:text-champagne-400/10 transition-colors">{t.num}</span>
                                    <div className="mb-8">
                                        <p className="text-champagne-400 text-[0.6rem] font-bold tracking-[0.25em] uppercase mb-3">{t.sub}</p>
                                        <h3 className="text-white font-serif text-xl leading-snug">{t.label}</h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/50 text-xs font-light">From <span className="text-champagne-400 font-semibold">{t.price}</span></span>
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
