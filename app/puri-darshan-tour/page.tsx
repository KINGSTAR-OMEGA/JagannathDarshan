import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'Puri Darshan Tour Package from Bhubaneswar | Jagannath Temple Sightseeing',
    description:
        'Book the best Puri darshan tour package from Bhubaneswar. Visit Jagannath Temple, Gundicha Temple, Mata Matha, Bedi Hanuman Temple & Puri Beach. Premium AC cab, VIP darshan. Starting ₹1,800.',
    keywords: [
        'Puri darshan tour package',
        'Puri sightseeing from Bhubaneswar',
        'Jagannath temple darshan package',
        'Puri local sightseeing',
        'Puri tour from Bhubaneswar',
        'Omkareshwar temple Puri',
        'Gundicha temple tour',
        'Bedi Hanuman temple Puri',
        'Puri pilgrimage tour',
        'VIP darshan Jagannath temple',
    ],
    alternates: { canonical: '/puri-darshan-tour' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/puri-darshan-tour',
        siteName: 'Jagannath Darshan Tours',
        title: 'Puri Darshan Tour Package | Jagannath Temple Sightseeing from Bhubaneswar',
        description:
            'Complete Puri local sightseeing — Jagannath Temple, Gundicha, Bedi Hanuman, Mata Matha & Puri Beach. VIP darshan access. Starting ₹1,800/sedan.',
        images: [{ url: '/Web_Hero.webp', width: 1200, height: 630, alt: 'Puri Darshan Tour — Jagannath Temple Odisha' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Puri Darshan Tour Package | Starting ₹1,800',
        description: 'Jagannath Temple darshan + local Puri sightseeing. VIP access, premium AC cab from Bhubaneswar.',
        images: ['/Web_Hero.webp'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://www.jagannathdarshan.in/puri-darshan-tour#webpage',
            url: 'https://www.jagannathdarshan.in/puri-darshan-tour',
            name: 'Puri Darshan Tour Package from Bhubaneswar | Jagannath Darshan',
            isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jagannathdarshan.in' },
                    { '@type': 'ListItem', position: 2, name: 'Puri Darshan Tour', item: 'https://www.jagannathdarshan.in/puri-darshan-tour' },
                ],
            },
        },
        {
            '@type': 'TouristTrip',
            name: 'Puri Local Sightseeing — Jagannath Darshan Tour',
            description: 'Full-day Puri local sightseeing tour covering Jagannath Temple darshan, Gundicha Temple, Omkareshwar Temple, Bedi Hanuman Temple, Mata Matha, and the sacred Puri Beach.',
            provider: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            touristType: 'Pilgrims, Devotees, Spiritual Travellers',
            itinerary: {
                '@type': 'ItemList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Jagannath Temple Darshan', item: { '@type': 'TouristAttraction', name: 'Jagannath Temple', address: 'Puri, Odisha' } },
                    { '@type': 'ListItem', position: 2, name: 'Gundicha Temple', item: { '@type': 'TouristAttraction', name: 'Gundicha Temple', address: 'Puri, Odisha' } },
                    { '@type': 'ListItem', position: 3, name: 'Omkareshwar Temple', item: { '@type': 'TouristAttraction', name: 'Omkareshwar Temple', address: 'Puri, Odisha' } },
                    { '@type': 'ListItem', position: 4, name: 'Bedi Hanuman Temple', item: { '@type': 'TouristAttraction', name: 'Bedi Hanuman Temple', address: 'Puri, Odisha' } },
                    { '@type': 'ListItem', position: 5, name: 'Mata Matha', item: { '@type': 'TouristAttraction', name: 'Mata Matha', address: 'Puri, Odisha' } },
                    { '@type': 'ListItem', position: 6, name: 'Puri Beach', item: { '@type': 'TouristAttraction', name: 'Puri Beach', address: 'Puri, Odisha' } },
                ],
            },
            offers: [
                { '@type': 'Offer', name: 'Premium Sedan (Dzire/Etios)', price: '1800', priceCurrency: 'INR', description: '8 hours / 80 km, AC sedan, experienced driver' },
                { '@type': 'Offer', name: 'Luxury SUV (Innova Crysta)', price: '2800', priceCurrency: 'INR', description: '8 hours / 80 km, AC luxury SUV, experienced driver' },
            ],
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What is included in the Puri darshan tour package?',
                    acceptedAnswer: { '@type': 'Answer', text: 'The Puri darshan tour includes pickup from your hotel/airport in Bhubaneswar, visit to Jagannath Temple, Gundicha Temple, Omkareshwar Temple, Bedi Hanuman Temple, Mata Matha, and Puri Beach in a premium AC cab with an experienced driver-cum-guide.' },
                },
                {
                    '@type': 'Question',
                    name: 'What is the price for Puri local sightseeing from Bhubaneswar?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Puri local sightseeing starts at ₹1,800 per sedan (Dzire/Etios) for up to 8 hours and 80 km. Innova Crysta (6-seater) is available at ₹2,800.' },
                },
                {
                    '@type': 'Question',
                    name: 'Do you provide VIP darshan at Jagannath Temple?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide VIP darshan assistance at Jagannath Temple Puri with priority queue management so you can have a peaceful, unhurried darshan experience.' },
                },
                {
                    '@type': 'Question',
                    name: 'How long does the Puri sightseeing tour take?',
                    acceptedAnswer: { '@type': 'Answer', text: 'The standard Puri local sightseeing package is 8 hours covering all major temples and the beach. We offer flexible timing — you can choose morning or afternoon start depending on temple darshan schedules.' },
                },
            ],
        },
    ],
};

const highlights = [
    { icon: 'temple_hindu', title: 'Jagannath Temple Darshan', desc: 'Assisted VIP entry to the 12th-century Lord Jagannath shrine. Priority queue management.' },
    { icon: 'account_balance', title: 'Gundicha Temple', desc: 'The Garden House of Lord Jagannath — also called the aunt\'s home. Deeply sacred.' },
    { icon: 'self_improvement', title: 'Omkareshwar Temple', desc: 'Ancient Shiva temple in Puri, believed to be the form of the sacred Omkar.' },
    { icon: 'volunteer_activism', title: 'Bedi Hanuman Temple', desc: 'Unique chained Hanuman idol believed to protect Puri from sea storms.' },
    { icon: 'spa', title: 'Mata Matha', desc: 'Revered math (monastery) with spiritual significance tied to the Jagannath tradition.' },
    { icon: 'beach_access', title: 'Puri Beach', desc: 'End your spiritual day at the golden sands of one of India\'s most sacred beaches.' },
];

const itinerary = [
    { time: '07:00', label: 'Pickup', title: 'Hotel/Airport Pickup in Bhubaneswar', desc: 'Our driver greets you in a sanitized, premium AC cab. Comfortable 60 km drive to Puri with scenic views.' },
    { time: '09:30', label: 'Temple', title: 'Jagannath Temple Darshan', desc: 'Arrive at the holy shrine for VIP assisted darshan of Lord Jagannath, Balabhadra, and Subhadra. Our local guide explains the rituals and history.' },
    { time: '11:30', label: 'Temples', title: 'Gundicha & Omkareshwar', desc: 'Visit the sacred Gundicha Temple, then the ancient Omkareshwar Shiva temple for blessings.' },
    { time: '13:00', label: 'Lunch', title: 'Mahaprasad at Anand Bazar', desc: 'Experience the divine Mahaprasad — the sacred food of Lord Jagannath served at the famous Ananda Bazar inside the temple complex.' },
    { time: '14:30', label: 'Temples', title: 'Bedi Hanuman & Mata Matha', desc: 'See the unique chained Hanuman idol at Bedi Hanuman Temple and visit the revered Mata Matha monastery.' },
    { time: '16:30', label: 'Beach', title: 'Puri Beach & Sunset', desc: 'Relax at the serene Puri Beach. Watch fishermen at work, collect sacred sand, and soak in the divine atmosphere at sunset.' },
    { time: '18:00', label: 'Return', title: 'Drop-off in Bhubaneswar', desc: 'Comfortable drive back to your hotel in Bhubaneswar with cherished memories of a blessed day.' },
];

export default function PuriDarshanTourPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="w-full">

                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-900">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CvWXNMX8sZwJHgsT0474_XrA5vgELaAuM_kIG3DJsT8Od1JtOxJd3eLjLWGR5qRnYMEgB4Lj2P_s8PSIHq5QoR59bEDqTJ_AYx9-T-DnpGFSltu3hR--zgRYCVnNH2_8BGFTOi5l2rN2AHLKeR4KAGBGTYsBOQTB7OWDWh4Yj3RMn_FZvfY8HtpL5svDOBW6NBHUrUdsmPdSzF989y_6S8wvEMYQJEOay-JKgcslLfPevT9frAA6MeLGtkcF6YCxeIw7NwzpUA"
                            alt="Jagannath Temple Puri — Darshan Tour from Bhubaneswar"
                            fill className="object-cover opacity-50"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-900/20" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-40 w-full">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-white/50 text-xs">
                                <li><a href="/" className="hover:text-champagne-400 transition-colors">Home</a></li>
                                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                                <li className="text-champagne-400">Puri Darshan Tour</li>
                            </ol>
                        </nav>
                        <span className="inline-block py-1.5 px-4 rounded-full bg-champagne-500/20 border border-champagne-400/30 text-champagne-300 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-6">
                            Local Puri Sightseeing
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Puri Darshan Tour<br />
                            <span className="italic text-champagne-200 font-light">from Bhubaneswar</span>
                        </h1>
                        <p className="text-white/80 text-lg font-light max-w-2xl mb-10">
                            Experience the divine grace of Lord Jagannath — one of India&apos;s four sacred Char Dhams. Full-day sightseeing with VIP darshan, Mahaprasad, and premium comfort.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="tel:+919876543210" className="bg-champagne-500 text-navy-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-champagne-400 transition-colors shadow-xl">
                                Book Now — ₹1,800
                            </a>
                            <div className="flex items-center gap-6 text-white/60 text-xs">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-champagne-400">schedule</span> 8 Hours</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-champagne-400">route</span> 80 Kms</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-champagne-400">star</span> 4.9 Rating</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights Grid */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="text-champagne-600 font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4">What You&apos;ll Experience</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">6 Sacred Stops in Puri</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">From the divine shrine to the serene beach — a complete spiritual and cultural immersion.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {highlights.map((h, i) => (
                                <div key={i} className="group p-8 rounded-[1.5rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-xl transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl text-champagne-500 mb-5 block font-light">{h.icon}</span>
                                    <h3 className="text-lg font-serif text-navy-900 mb-3">{h.title}</h3>
                                    <p className="text-charcoal-500 text-sm font-light leading-relaxed">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Itinerary Timeline */}
                <section className="py-32 px-6 lg:px-12 bg-charcoal-50">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="text-champagne-600 font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4">Day Plan</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Your Puri Darshan Itinerary</h2>
                            <p className="text-charcoal-500 font-light text-base">Every hour of your blessed day, perfectly orchestrated.</p>
                        </div>
                        <div className="relative ml-4 space-y-16">
                            <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-champagne-300 via-champagne-400 to-transparent" />
                            {itinerary.map((step, i) => (
                                <div key={i} className="relative pl-12 group">
                                    <div className={`absolute -left-[4px] top-2 h-4 w-4 rounded-full border shadow-[0_0_0_4px_rgba(212,175,55,0.1)] group-hover:scale-125 transition-transform duration-300 z-10 ${i % 2 === 0 ? 'bg-white border-champagne-400' : 'bg-navy-900 border-navy-900'}`} />
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="md:w-24 flex-shrink-0 pt-1">
                                            <time className="font-serif text-2xl text-navy-900 block">{step.time}</time>
                                            <p className="text-[0.6rem] text-champagne-600 uppercase tracking-widest font-bold">{step.label}</p>
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
                            <p className="text-charcoal-500 font-light text-base">No hidden fees. What you see is what you pay.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.2em] mb-1">Premium Sedan</p>
                                <h3 className="text-2xl font-serif text-navy-900 mb-2">Dzire / Etios</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif text-navy-900">₹1,800</span>
                                    <span className="text-charcoal-400 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-charcoal-600">
                                    {['Up to 4 passengers', '8 Hours / 80 Kms', 'Premium AC cab', 'Experienced driver', 'VIP darshan assistance'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-500 flex-shrink-0" />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl border border-navy-900/10 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all text-center block">Select Plan</a>
                            </div>
                            <div className="bg-navy-900 p-10 rounded-[2rem] shadow-2xl relative flex flex-col border border-navy-800">
                                <div className="absolute top-6 right-6"><span className="material-symbols-outlined text-champagne-400">star</span></div>
                                <p className="text-[10px] text-champagne-400/70 uppercase tracking-[0.2em] mb-1">Luxury SUV</p>
                                <h3 className="text-2xl font-serif text-white mb-2">Innova Crysta</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif text-champagne-400">₹2,800</span>
                                    <span className="text-white/40 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-white/80">
                                    {['Up to 6 passengers', '8 Hours / 80 Kms', 'Luxury AC SUV', 'Experienced courteous driver', 'VIP darshan assistance', 'Bottled water included'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-champagne-400 flex-shrink-0" />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl bg-champagne-500 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:bg-white transition-colors shadow-lg text-center block">Reserve Now</a>
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
                            {(jsonLd['@graph'][2] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((qa, i: number) => (
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
                                { href: '/konark-sun-temple-tour', label: 'Konark Sun Temple', sub: 'UNESCO Heritage', price: '₹2,200', num: '01' },
                                { href: '/chilika-lake-trip', label: 'Chilika Lake Trip', sub: "Asia's Largest Lagoon", price: '₹3,199', num: '02' },
                                { href: '/bhubaneswar-sightseeing', label: 'Bhubaneswar Sightseeing', sub: 'Temple City of India', price: '₹1,500', num: '03' },
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
