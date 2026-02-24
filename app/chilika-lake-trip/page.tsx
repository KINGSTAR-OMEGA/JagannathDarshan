import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'Chilika Lake Trip from Puri | Dolphin Sighting at Satapada | Jagannath Darshan',
    description:
        'Book a Chilika Lake day trip from Puri to Satapada. See Irrawaddy dolphins, Sea Mouth, boat rides, and Kalijai Temple. Asia\'s largest brackish water lagoon. Starting ₹3,199.',
    keywords: [
        'Chilika Lake trip from Puri',
        'Satapada dolphin sighting',
        'Chilika Lake tour package',
        'Irrawaddy dolphin Odisha',
        'Chilika boat ride Satapada',
        'Kalijai Temple Chilika',
        'Chilika Lake day trip',
        'Chilika Lake nature tour',
        'sea mouth Satapada',
        'Chilika bird sanctuary tour',
    ],
    alternates: { canonical: '/chilika-lake-trip' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/chilika-lake-trip',
        siteName: 'Jagannath Darshan Tours',
        title: 'Chilika Lake Trip from Puri | Dolphin Sighting at Satapada',
        description: 'Asia\'s largest brackish water lagoon. Irrawaddy dolphins, Sea Mouth, bird sanctuary & Kalijai Temple. Starting ₹3,199.',
        images: [{ url: '/Web_Hero.webp', width: 1200, height: 630, alt: 'Chilika Lake Satapada Dolphin Trip Odisha' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chilika Lake Trip | Dolphin Sighting | Starting ₹3,199',
        description: 'Asia\'s largest lagoon. See rare Irrawaddy dolphins, Sea Mouth & Kalijai Temple from Puri in one day.',
        images: ['/Web_Hero.webp'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://www.jagannathdarshan.in/chilika-lake-trip#webpage',
            url: 'https://www.jagannathdarshan.in/chilika-lake-trip',
            name: 'Chilika Lake Trip from Puri | Dolphin Sighting at Satapada | Jagannath Darshan',
            isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jagannathdarshan.in' },
                    { '@type': 'ListItem', position: 2, name: 'Chilika Lake Trip', item: 'https://www.jagannathdarshan.in/chilika-lake-trip' },
                ],
            },
        },
        {
            '@type': 'TouristTrip',
            name: 'Chilika Lake Nature Trip — Satapada Dolphin Sighting',
            description: 'Day trip from Puri to Satapada on Chilika Lake — Asia\'s largest brackish water lagoon. See rare Irrawaddy dolphins, the Sea Mouth where the lake meets the ocean, Kalijai Temple, and flamingos during winter.',
            provider: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            touristType: 'Nature Lovers, Wildlife Enthusiasts, Families',
            offers: [
                { '@type': 'Offer', name: 'Chilika Trip (Sedan + Boat)', price: '3199', priceCurrency: 'INR', description: 'Puri to Satapada AC cab + boat ride charges assistance. 10 hours.' },
                { '@type': 'Offer', name: 'Chilika Trip (Innova Crysta + Boat)', price: '4199', priceCurrency: 'INR', description: 'Luxury SUV Puri to Satapada + boat ride. 10 hours.' },
            ],
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'How far is Chilika Lake from Puri?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Satapada (the main dolphin sighting point on Chilika Lake) is approximately 50 km from Puri. The drive takes about 1.5 hours through scenic Odisha countryside.' },
                },
                {
                    '@type': 'Question',
                    name: 'Can we see dolphins at Chilika Lake?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Yes! Chilika Lake is home to a population of rare Irrawaddy dolphins. A boat ride to the dolphin sighting point at Satapada gives you high chances (around 90%) of spotting these gentle creatures in their natural habitat.' },
                },
                {
                    '@type': 'Question',
                    name: 'What is the boat ride cost at Chilika Lake Satapada?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Government-approved boat rides at Satapada start from ₹800–₹1,200 per boat (depending on the route — dolphin point, sea mouth, or Kalijai temple). We assist with booking government boats at fair prices.' },
                },
                {
                    '@type': 'Question',
                    name: 'What is the best time to visit Chilika Lake?',
                    acceptedAnswer: { '@type': 'Answer', text: 'October to March is the best time to visit Chilika Lake. Migratory birds (including flamingos) arrive in winter (Nov–Feb). Dolphins are visible year-round. Avoid July–August (monsoon season).' },
                },
            ],
        },
    ],
};

const highlights = [
    { icon: 'water', title: 'Satapada — Dolphin Point', desc: 'Set sail to the famous dolphin watching area. Spot rare Irrawaddy (Chilika) dolphins in their natural habitat.' },
    { icon: 'waves', title: 'Sea Mouth (Sipakuda)', desc: 'Watch where the vast Chilika Lake merges with the Bay of Bengal — a breathtaking natural spectacle.' },
    { icon: 'temple_hindu', title: 'Kalijai Temple', desc: 'Ancient island temple of Goddess Kalijai inside the lake — accessible only by boat. Deeply revered by locals.' },
    { icon: 'flutter_dash', title: 'Migratory Bird Sanctuary', desc: 'In winter (Nov–Feb), over a million migratory birds — including flamingos — flock to Chilika. A birdwatcher\'s paradise.' },
    { icon: 'sailing', title: 'Boat Ride Experience', desc: 'Glide across Asia\'s largest brackish water lagoon on a government ferry. Scenic, peaceful, and unforgettable.' },
    { icon: 'eco', title: 'Mangrove & Wetland', desc: 'Chilika\'s rich ecosystem — mangroves, aquatic life, and the surrounding green hills create a stunning landscape.' },
];

const itinerary = [
    { time: '07:00', label: 'Pickup', title: 'Pickup from Puri Hotel', desc: 'Early start for the fresh morning air. Our AC cab takes you from Puri through scenic Odisha countryside to Satapada.' },
    { time: '08:30', label: 'Arrival', title: 'Arrive at Satapada Jetty', desc: 'Reach the Satapada boat jetty — gateway to Chilika Lake. Board a government-approved ferry with our assistance.' },
    { time: '09:00', label: 'Dolphins', title: 'Dolphin Sighting Point', desc: 'Cruise to the famous Irrawaddy dolphin zone. Watch these gentle, rare freshwater dolphins swim alongside your boat. Pure magic.' },
    { time: '10:30', label: 'Sea Mouth', title: 'Sea Mouth (Sipakuda)', desc: 'Visit the point where Chilika Lake meets the Bay of Bengal. Watch the dramatic confluence of calm lake water and ocean waves.' },
    { time: '11:30', label: 'Temple', title: 'Kalijai Island Temple', desc: 'Visit the ancient Kalijai temple on a small island — only reachable by boat. Offer prayers and enjoy the serene island setting.' },
    { time: '13:00', label: 'Lunch', title: 'Fresh Sea Food Lunch', desc: 'Enjoy fresh Chilika prawns, crabs, and fish at a local dhaba by the lakeside — a true Odisha coastal experience.' },
    { time: '15:00', label: 'Return', title: 'Return to Puri', desc: 'Head back to Puri or Bhubaneswar with memories of Asia\'s most beautiful lagoon and its amazing wildlife.' },
];

export default function ChilikaLakeTripPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="w-full">

                {/* Hero — Teal/Blue nature theme */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ backgroundColor: '#042f2e' }}>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH6UuEfTvTmsETxufZfcUEYOiVC3ajBhZ4fPVByy8tcki3-ko7e2st3vGD1tcctKkDV4RJI7reg-bd-VZJuNNMPvhl3U0OBvHJeBRu2XpWVmeBruZY6F_FfQL8FwEuTEUz5bhEAkwoE6TJJtG9G1i74WS98YR56SBuRw-88ywO5tLDzMk9JoTkAO1gCGFx55nRCBnvD5Nl-wQlTX3v_Rp9eXh1fpnEKkoQJDZmvUReinx0mE15BViMLuHui5iHTUSwfG5wNbVsA"
                            alt="Chilika Lake Satapada — Dolphin Sighting Odisha"
                            fill className="object-cover opacity-40"
                            priority sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#042f2e] via-[#042f2e]/60 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-40 w-full">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-white/50 text-xs">
                                <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
                                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                                <li className="text-teal-400">Chilika Lake Trip</li>
                            </ol>
                        </nav>
                        <span className="inline-block py-1.5 px-4 rounded-full border text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-6" style={{ backgroundColor: 'rgba(20,184,166,0.2)', borderColor: 'rgba(20,184,166,0.3)', color: '#5eead4' }}>
                            Asia&apos;s Largest Brackish Lagoon
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Chilika Lake<br />
                            <span className="italic font-light" style={{ color: '#5eead4' }}>Dolphin Trip</span>
                        </h1>
                        <p className="text-white/80 text-lg font-light max-w-2xl mb-10">
                            Sail across the shimmering waters of Chilika — see rare Irrawaddy dolphins, the mystical Sea Mouth, migratory birds, and the sacred Kalijai island temple.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="tel:+919876543210" className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-xl" style={{ backgroundColor: '#0d9488', color: 'white' }}>
                                Book Now — ₹3,199
                            </a>
                            <div className="flex items-center gap-6 text-white/60 text-xs">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-teal-400">schedule</span> Full Day</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-teal-400">sailing</span> Boat Included</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-teal-400">star</span> 4.9 Rating</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#0f766e' }}>What You&apos;ll Experience</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Nature&apos;s Best at Chilika</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">Dolphins, birds, temples, and the sea — a complete natural and spiritual experience on Asia&apos;s largest lake.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {highlights.map((h, i) => (
                                <div key={i} className="group p-8 rounded-[1.5rem] border border-charcoal-100 hover:border-teal-400 hover:shadow-xl transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl mb-5 block font-light" style={{ color: '#0d9488' }}>{h.icon}</span>
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
                            <h3 className="font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4" style={{ color: '#0f766e' }}>Day Plan</h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Your Chilika Itinerary</h2>
                            <p className="text-charcoal-500 font-light text-base">A perfectly curated day on Asia&apos;s most beautiful lagoon.</p>
                        </div>
                        <div className="relative ml-4 space-y-16">
                            <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-teal-300 via-teal-400 to-transparent" />
                            {itinerary.map((step, i) => (
                                <div key={i} className="relative pl-12 group">
                                    <div className={`absolute -left-[4px] top-2 h-4 w-4 rounded-full border group-hover:scale-125 transition-transform duration-300 z-10`} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#0d9488', borderColor: '#0d9488', boxShadow: '0 0 0 4px rgba(13,148,136,0.15)' }} />
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="md:w-24 flex-shrink-0 pt-1">
                                            <time className="font-serif text-2xl text-navy-900 block">{step.time}</time>
                                            <p className="text-[0.6rem] uppercase tracking-widest font-bold" style={{ color: '#0d9488' }}>{step.label}</p>
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
                            <p className="text-charcoal-500 font-light text-base">Cab fare included. Boat ride assistance included. No surprises.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.2em] mb-1">Premium Sedan</p>
                                <h3 className="text-2xl font-serif text-navy-900 mb-2">Dzire / Etios</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif text-navy-900">₹3,199</span>
                                    <span className="text-charcoal-400 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-charcoal-600">
                                    {['Up to 4 passengers', 'Puri–Satapada cab ride', 'Boat ride booking assistance', 'Dolphin + Sea Mouth + Kalijai', 'Experienced driver'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0d9488' }} />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl border border-navy-900/10 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 group-hover:text-white transition-all text-center block" style={{}}>Select Plan</a>
                            </div>
                            <div className="p-10 rounded-[2rem] shadow-2xl relative flex flex-col border" style={{ backgroundColor: '#042f2e', borderColor: '#134e4a' }}>
                                <div className="absolute top-6 right-6"><span className="material-symbols-outlined" style={{ color: '#5eead4' }}>star</span></div>
                                <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: 'rgba(94,234,212,0.7)' }}>Luxury SUV</p>
                                <h3 className="text-2xl font-serif text-white mb-2">Innova Crysta</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-serif" style={{ color: '#5eead4' }}>₹4,199</span>
                                    <span className="text-white/40 font-light text-sm">/ cab</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-sm text-white/80">
                                    {['Up to 6 passengers', 'Puri–Satapada luxury cab', 'Priority boat booking assistance', 'Dolphin + Sea Mouth + Kalijai', 'Experienced driver', 'Bottled water included'].map(f => (
                                        <li key={f} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#5eead4' }} />{f}</li>
                                    ))}
                                </ul>
                                <a href="tel:+919876543210" className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white hover:opacity-90 transition-colors shadow-lg text-center block" style={{ backgroundColor: '#0d9488' }}>Reserve Now</a>
                            </div>
                        </div>
                        <p className="text-center text-xs text-charcoal-400 mt-8 font-light">* Boat ride charges (₹800–₹1,200/boat) are paid directly at Satapada jetty. We assist with booking.</p>
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
