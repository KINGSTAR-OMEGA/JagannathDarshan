import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'Custom Tour Package Odisha | Puri, Konark, Bhubaneswar, Chilika | Jagannath Darshan',
    description:
        'Book a fully custom Odisha tour — Puri, Konark, Bhubaneswar, Chilika Lake. Choose your destinations, pick your vehicle, travel at your own pace. Transparent pricing, AC cabs, expert drivers.',
    keywords: [
        'custom Odisha tour package',
        'Puri Konark Bhubaneswar tour',
        'Chilika Lake custom trip',
        'Odisha cab booking',
        'private tour Odisha',
        'Bhubaneswar airport pickup',
        'custom pilgrimage Odisha',
        'Jagannath darshan package',
    ],
    alternates: { canonical: '/custom-booking' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/custom-booking',
        siteName: 'Jagannath Darshan Tours',
        title: 'Custom Tour Odisha — Your Journey, Your Way',
        description:
            'Puri · Konark · Bhubaneswar · Chilika. Build your perfect Odisha trip. Multiple vehicles, flexible timings, transparent fares.',
        images: [{ url: '/Web_Hero.webp', width: 1200, height: 630, alt: 'Custom Odisha Tour Package' }],
    },
};

/* ─── DATA ─── */

const destinationGroups = [
    {
        city: 'Bhubaneswar',
        tag: 'Temple City of India',
        color: '#7c3aed',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w',
        places: [
            { name: 'Dhauli Shanti Stupa', icon: 'self_improvement' },
            { name: 'Lingaraj Temple', icon: 'temple_hindu' },
            { name: 'Khandagiri Caves', icon: 'landscape' },
            { name: 'Udayagiri Hills', icon: 'terrain' },
            { name: 'Nandankanan Zoo', icon: 'pets' },
        ],
    },
    {
        city: 'Konark',
        tag: 'UNESCO World Heritage',
        color: '#b45309',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Surya_Mandir_Konark.jpg/1200px-Surya_Mandir_Konark.jpg',
        places: [
            { name: 'Konark Sun Temple', icon: 'wb_sunny' },
            { name: 'Sand Art Museum', icon: 'palette' },
            { name: 'Panchamukhi Hanuman Temple', icon: 'temple_hindu' },
            { name: 'Ramchandi Temple', icon: 'local_fire_department' },
            { name: 'Chandrabhaga Beach', icon: 'waves' },
        ],
    },
    {
        city: 'Chilika Lake',
        tag: 'Special Attraction',
        color: '#0369a1',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Chilika_lake_morning.jpg/1200px-Chilika_lake_morning.jpg',
        places: [
            { name: 'Chilika Lake Boat Trip', icon: 'directions_boat' },
            { name: 'Satapada Dolphin Point', icon: 'water' },
            { name: 'Sea Mouth', icon: 'wb_twilight' },
            { name: 'Kalijai Island Temple', icon: 'sailing' },
        ],
    },
    {
        city: 'Puri',
        tag: 'Local Sightseeing',
        color: '#065f46',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jagannath_Temple_Puri_2007.jpg/1200px-Jagannath_Temple_Puri_2007.jpg',
        places: [
            { name: 'Jagannath Temple Darshan', icon: 'temple_hindu' },
            { name: 'Omkareshwar Temple', icon: 'local_fire_department' },
            { name: 'Mata Matha', icon: 'account_balance' },
            { name: 'Bedi Hanuman Temple', icon: 'fort' },
            { name: 'Gundicha Temple', icon: 'auto_awesome' },
        ],
    },
];

const transferServices = [
    { icon: 'flight', label: 'Bhubaneswar Airport Pickup & Drop' },
    { icon: 'train', label: 'Bhubaneswar Railway Station Pickup & Drop' },
    { icon: 'hotel', label: 'Hotel Pickup & Drop' },
    { icon: 'alt_route', label: 'Local & Outstation Transfers' },
];

const vehicles = [
    { name: 'Dzire', seats: '5 Seater', type: 'Premium Sedan', img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/41197/dzire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75', tag: 'Most Popular', tagColor: '#065f46' },
    { name: 'Ertiga', seats: '7 Seater', type: 'Family MPV', img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/131199/ertiga-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75', tag: 'Best for Groups', tagColor: '#0369a1' },
    { name: 'Innova Crysta', seats: '7 Seater', type: 'Luxury SUV', img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/141133/innova-crysta-exterior-right-front-three-quarter.jpeg?isig=0&q=75', tag: 'Premium Comfort', tagColor: '#7c3aed' },
    { name: 'Tavera', seats: '10 Seater', type: 'Large Cab', img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/14273/tavera-exterior-right-front-three-quarter.jpeg?isig=0&q=75', tag: 'Large Groups', tagColor: '#b45309' },
    { name: 'Tata Winger', seats: '13–15 Seater', type: 'Mini Bus', img: 'https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2018/09/Tata-Winger.jpg', tag: 'Tours & Events', tagColor: '#b45309' },
    { name: 'Tempo Traveller', seats: '17 Seater', type: 'Traveller', img: 'https://5.imimg.com/data5/SELLER/Default/2022/3/RS/YK/VN/148837741/17-seater-tempo-traveller-on-rent.jpeg', tag: 'Large Groups', tagColor: '#dc2626' },
    { name: 'Mini Bus', seats: '26 Seater', type: 'Mini Bus', img: 'https://5.imimg.com/data5/SELLER/Default/2021/8/WB/FL/OE/134796498/26-seater-tempo-traveller.jpg', tag: 'Corporate / Schools', tagColor: '#475569' },
];

const fareTables = [
    {
        title: 'Konark Sightseeing',
        subtitle: 'Sun Temple + Chandrabhaga Beach',
        rows: [
            { vehicle: 'Dzire', capacity: '5 Seater', price: '₹1,400' },
            { vehicle: 'Ertiga', capacity: '7 Seater', price: '₹1,800' },
            { vehicle: 'Tavera', capacity: '10 Seater', price: '₹2,000' },
            { vehicle: 'Tata Winger', capacity: '15 Seater', price: '₹3,000' },
            { vehicle: 'Innova Crysta', capacity: '7 Seater', price: '₹3,000' },
            { vehicle: 'Traveller', capacity: '26 Seater', price: '₹4,500' },
        ],
    },
    {
        title: 'Bhubaneswar Sightseeing',
        subtitle: 'Lingaraj · Dhauli · Khandagiri · Zoo',
        rows: [
            { vehicle: 'Dzire', capacity: '5 Seater', price: '₹2,800' },
            { vehicle: 'Ertiga', capacity: '7 Seater', price: '₹3,200' },
            { vehicle: 'Tavera', capacity: '10 Seater', price: '₹3,800' },
            { vehicle: 'Tata Winger', capacity: '15 Seater', price: '₹4,500' },
            { vehicle: 'Innova Crysta', capacity: '7 Seater', price: '₹5,000' },
            { vehicle: 'Traveller', capacity: '26 Seater', price: '₹8,000' },
        ],
    },
    {
        title: 'Konark + Dhauli + Lingaraj + Khandagiri + Udayagiri + Zoo',
        subtitle: 'Full-Day Grand Tour',
        rows: [
            { vehicle: 'Dzire', capacity: '5 Seater', price: '₹1,600' },
            { vehicle: 'Ertiga', capacity: '7 Seater', price: '₹2,000' },
            { vehicle: 'Tavera', capacity: '10 Seater', price: '₹2,500' },
            { vehicle: 'Tata Winger', capacity: '15 Seater', price: '₹2,800' },
            { vehicle: 'Innova Crysta', capacity: '7 Seater', price: '₹3,000' },
            { vehicle: 'Traveller', capacity: '26 Seater', price: '₹4,000' },
        ],
    },
    {
        title: 'Chilika Lake Trip',
        subtitle: 'Puri → Satapada → Dolphins',
        rows: [
            { vehicle: 'Dzire', capacity: '5 Seater', price: '₹1,600' },
            { vehicle: 'Ertiga', capacity: '7 Seater', price: '₹2,000' },
            { vehicle: 'Tavera', capacity: '10 Seater', price: '₹2,500' },
            { vehicle: 'Tata Winger', capacity: '15 Seater', price: '₹2,800' },
            { vehicle: 'Innova Crysta', capacity: '7 Seater', price: '₹3,000' },
            { vehicle: 'Traveller', capacity: '26 Seater', price: '₹4,000' },
        ],
    },
    {
        title: 'Bhubaneswar Pickup & Drop',
        subtitle: 'Airport · Railway Station · Hotels',
        rows: [
            { vehicle: 'Dzire', capacity: '5 Seater', price: '₹2,000' },
            { vehicle: 'Ertiga', capacity: '7 Seater', price: '₹2,200' },
            { vehicle: 'Tavera', capacity: '10 Seater', price: '₹2,500' },
            { vehicle: 'Tata Winger', capacity: '15 Seater', price: '₹3,500' },
            { vehicle: 'Innova Crysta', capacity: '7 Seater', price: '₹3,500' },
            { vehicle: 'Traveller', capacity: '26 Seater', price: '₹5,000' },
        ],
    },
];

/* ─── PAGE ─── */

export default function CustomBookingPage() {
    return (
        <>
            <Header />
            <main className="w-full">

                {/* ── HERO ── */}
                <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-navy-900">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Web_Hero.webp"
                            alt="Custom Odisha Tour Package — Jagannath Darshan"
                            fill className="object-cover opacity-20"
                            priority sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/20" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-44 w-full">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-white/40 text-xs">
                                <li><a href="/" className="hover:text-champagne-400 transition-colors">Home</a></li>
                                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                                <li className="text-champagne-400">Custom Tour</li>
                            </ol>
                        </nav>
                        <span className="inline-block py-1.5 px-4 rounded-full border border-champagne-500/30 bg-champagne-500/10 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-6 text-champagne-400">
                            Build Your Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Your Odisha Trip,<br />
                            <span className="italic font-light text-champagne-400">Your Way</span>
                        </h1>
                        <p className="text-white/70 text-lg font-light max-w-2xl mb-10">
                            From sacred temples to dolphin lagoons — pick your destinations, choose your vehicle,
                            and travel at your own pace. Fully transparent pricing, no hidden charges.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="tel:+919876543210" className="px-8 py-4 rounded-full bg-champagne-500 text-xs font-bold uppercase tracking-widest text-navy-900 hover:bg-white transition-colors shadow-xl">
                                Call to Book Now
                            </a>
                            <a href="https://wa.me/919876543210?text=Hi%2C+I%27d+like+to+build+a+custom+Odisha+tour.+Please+share+availability." target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white/80 hover:border-champagne-400 hover:text-champagne-400 transition-all">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── QUICK TRUST STRIP ── */}
                <div className="bg-champagne-500 py-5 px-6">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-3">
                        {[
                            { icon: 'ac_unit', text: 'AC & Non-AC Vehicles' },
                            { icon: 'verified_user', text: 'Experienced Drivers' },
                            { icon: 'receipt_long', text: 'No Hidden Charges' },
                            { icon: 'schedule', text: 'Flexible Timings' },
                            { icon: 'support_agent', text: '24/7 Support' },
                        ].map(({ icon, text }) => (
                            <span key={text} className="flex items-center gap-2 text-navy-900 text-xs font-bold uppercase tracking-widest">
                                <span className="material-symbols-outlined text-base">{icon}</span>
                                {text}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── DESTINATIONS ── */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-champagne-500 mb-4">Popular Destinations Covered</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Where Would You Like to Go?</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">
                                Choose one, two, or all four — we cover every iconic spot across Odisha.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {destinationGroups.map((group) => (
                                <div key={group.city} className="group rounded-3xl overflow-hidden border border-charcoal-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={group.img}
                                            alt={`${group.city} sightseeing tour`}
                                            fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width:768px) 100vw, 50vw"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-5 left-6">
                                            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full text-white mb-2 inline-block" style={{ backgroundColor: group.color }}>
                                                {group.tag}
                                            </span>
                                            <h3 className="text-2xl font-serif text-white">{group.city}</h3>
                                        </div>
                                    </div>
                                    {/* Places */}
                                    <div className="bg-white p-7 flex-grow">
                                        <ul className="space-y-3">
                                            {group.places.map((p) => (
                                                <li key={p.name} className="flex items-center gap-3 text-sm text-charcoal-700 font-medium">
                                                    <span className="material-symbols-outlined text-[18px] text-champagne-500 shrink-0" style={{ fontVariationSettings: "'wght' 300" }}>{p.icon}</span>
                                                    {p.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PICKUP & DROP ── */}
                <section className="py-20 px-6 lg:px-12 bg-charcoal-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14">
                            <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-champagne-500 mb-3">Pickup & Drop Services</p>
                            <h2 className="text-3xl md:text-4xl font-serif text-navy-900">We Pick You Up Anywhere</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {transferServices.map((s) => (
                                <div key={s.label} className="bg-white rounded-2xl p-7 border border-charcoal-100 hover:border-champagne-300 hover:shadow-lg transition-all duration-300 flex items-center gap-5">
                                    <span className="material-symbols-outlined text-3xl text-champagne-500 shrink-0" style={{ fontVariationSettings: "'wght' 200" }}>{s.icon}</span>
                                    <p className="text-sm font-semibold text-navy-900 leading-snug">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── VEHICLES (Horizontal Scroll) ── */}
                <section className="min-h-screen flex flex-col px-6 lg:px-12 bg-navy-900 overflow-hidden py-20">
                    {/* Header */}
                    <div className="max-w-7xl mx-auto w-full mb-12">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-champagne-400 mb-4">Vehicle Options Available</p>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <h2 className="text-3xl md:text-5xl font-serif text-white">Choose Your Ride</h2>
                            <p className="text-white/50 font-light text-sm max-w-sm">
                                All vehicles are AC / Non-AC (on request) with experienced, verified drivers.
                            </p>
                        </div>
                        {/* Decorative rule */}
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-champagne-500/40 via-champagne-400/20 to-transparent" />
                    </div>

                    {/* Scroll strip — grows to fill remaining height */}
                    <div className="flex-1 flex items-center">
                        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12 scrollbar-hide snap-x snap-mandatory w-full">
                            {vehicles.map((v) => (
                                <div key={v.name} className="snap-start flex-shrink-0 w-80 rounded-[1.75rem] overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-champagne-400/50 hover:shadow-2xl transition-all duration-500 group flex flex-col">
                                    {/* Photo */}
                                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={v.img}
                                            alt={v.name}
                                            fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="320px"
                                            unoptimized
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                                        {/* Tag pill */}
                                        <span className="absolute top-4 left-4 text-[0.55rem] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full text-white backdrop-blur-sm border border-white/20" style={{ backgroundColor: `${v.tagColor}cc` }}>
                                            {v.tag}
                                        </span>
                                        {/* Seats badge bottom-right of photo */}
                                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-navy-900/80 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-1.5">
                                            <span className="material-symbols-outlined text-champagne-400 text-sm" style={{ fontVariationSettings: "'wght' 300" }}>person</span>
                                            <span className="text-white text-xs font-bold">{v.seats}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-champagne-400/70 text-[0.6rem] uppercase tracking-[0.25em] mb-1">{v.type}</p>
                                        <h3 className="text-white font-serif text-xl mb-4">{v.name}</h3>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-champagne-500/30 to-transparent mb-5" />

                                        {/* CTA */}
                                        <a href="tel:+919876543210" className="mt-auto flex items-center justify-between group/btn">
                                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50 group-hover/btn:text-champagne-400 transition-colors">Book This Vehicle</span>
                                            <span className="material-symbols-outlined text-white/30 group-hover/btn:text-champagne-400 text-base transition-colors">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="max-w-7xl mx-auto w-full mt-8 flex items-center gap-3">
                        <span className="material-symbols-outlined text-white/20 text-sm">swipe</span>
                        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll to explore all vehicles</span>
                    </div>
                </section>

                {/* ── FARE TABLES ── */}
                <section className="py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-champagne-500 mb-4">Transparent Pricing</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">Fare Details</h2>
                            <p className="text-charcoal-500 font-light text-base max-w-xl mx-auto">
                                No hidden fees. Fixed rates per vehicle — split the cost with your group.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fareTables.map((table) => (
                                <div key={table.title} className="rounded-3xl border border-charcoal-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
                                    {/* Table header */}
                                    <div className="bg-navy-900 px-8 py-6">
                                        <h3 className="text-white font-serif text-lg leading-snug">{table.title}</h3>
                                        <p className="text-champagne-400 text-xs mt-1">{table.subtitle}</p>
                                    </div>
                                    {/* Rows */}
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-charcoal-50 border-b border-charcoal-100">
                                                <th className="text-left px-8 py-3 text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400">Vehicle</th>
                                                <th className="text-left px-4 py-3 text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400">Capacity</th>
                                                <th className="text-right px-8 py-3 text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table.rows.map((row, i) => (
                                                <tr key={row.vehicle} className={`border-b border-charcoal-50 hover:bg-champagne-500/5 transition-colors ${i === table.rows.length - 1 ? 'border-none' : ''}`}>
                                                    <td className="px-8 py-4 font-semibold text-navy-900">{row.vehicle}</td>
                                                    <td className="px-4 py-4 text-charcoal-500">{row.capacity}</td>
                                                    <td className="px-8 py-4 text-right font-bold text-navy-900 font-serif text-base">{row.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="px-8 py-4 bg-charcoal-50 border-t border-charcoal-100">
                                        <a href="tel:+919876543210" className="text-[0.65rem] font-bold uppercase tracking-widest text-champagne-500 hover:text-navy-900 transition-colors flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-sm">call</span>
                                            Book This Tour
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA + MORE TOURS (merged) ── */}
                <section className="bg-white py-24 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">

                        {/* CTA text */}
                        <div className="text-center mb-16">
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-champagne-500 mb-6 block">Ready to Travel?</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
                                Tell Us Your Dream Trip<br />
                                <span className="italic font-light">We&apos;ll Handle Everything</span>
                            </h2>
                            <p className="text-charcoal-500 font-light text-base max-w-lg mx-auto">
                                Call us or drop a WhatsApp message — we&apos;ll craft a personalised itinerary with transparent pricing within minutes.
                            </p>
                        </div>

                        {/* Champagne divider */}
                        <div className="flex items-center gap-6 mb-16">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
                            <span className="material-symbols-outlined text-champagne-400 text-lg" style={{ fontVariationSettings: "'wght' 200" }}>explore</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
                        </div>

                        {/* More tours header */}
                        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
                            <div>
                                <p className="text-champagne-500 text-[0.65rem] font-bold tracking-[0.35em] uppercase mb-2">Continue Exploring</p>
                                <h3 className="text-2xl font-serif text-navy-900">More Odisha Tours</h3>
                            </div>
                            <a href="/" className="text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400 hover:text-champagne-500 transition-colors flex items-center gap-1.5 flex-shrink-0 pb-1">
                                View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </a>
                        </div>

                        {/* Tour cards — light theme */}
                        <div className="grid md:grid-cols-4 gap-5">
                            {[
                                { href: '/puri-darshan-tour', label: 'Puri Darshan', sub: 'Jagannath Temple', price: '₹1,800', num: '01' },
                                { href: '/konark-sun-temple-tour', label: 'Konark Tour', sub: 'UNESCO Heritage', price: '₹2,200', num: '02' },
                                { href: '/bhubaneswar-sightseeing', label: 'Bhubaneswar', sub: 'Temple City', price: '₹2,800', num: '03' },
                                { href: '/chilika-lake-trip', label: 'Chilika Lake', sub: 'Dolphin Sighting', price: '₹3,199', num: '04' },
                            ].map((t) => (
                                <a key={t.href} href={t.href}
                                    className="group relative flex flex-col justify-between p-7 rounded-2xl border border-charcoal-100 bg-charcoal-50 hover:bg-white hover:border-champagne-300 hover:shadow-xl transition-all duration-400 overflow-hidden">
                                    <span className="absolute top-5 right-6 font-serif text-5xl text-charcoal-100 leading-none select-none group-hover:text-champagne-200 transition-colors">{t.num}</span>
                                    <div className="mb-8">
                                        <p className="text-champagne-500 text-[0.6rem] font-bold tracking-[0.25em] uppercase mb-2">{t.sub}</p>
                                        <h4 className="text-navy-900 font-serif text-lg">{t.label}</h4>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-charcoal-400 text-xs">From <span className="text-navy-900 font-semibold">{t.price}</span></span>
                                        <span className="material-symbols-outlined text-charcoal-300 group-hover:text-champagne-500 text-base transition-colors">arrow_forward</span>
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
