'use client';
import { useState } from 'react';

const destinations = [
    { id: 'puri', label: 'Puri', icon: '🛕' },
    { id: 'bhubaneswar', label: 'Bhubaneswar', icon: '🏛️' },
    { id: 'konark', label: 'Konark', icon: '☀️' },
    { id: 'chilika', label: 'Chilika', icon: '🐬' },
];

const sidePlans = [
    {
        name: 'Puri – Konark Tour',
        subtitle: 'THE GOLDEN TRIANGLE',
        badge: 'Sedan / SUV Available',
        features: ['Jagannath Temple', 'Konark Sun Temple', 'Chandrabhaga Beach', 'Marine Drive', '10 Hours Service'],
        whatsapp: 'https://wa.me/919876543210?text=Hi%2C+I%27d+like+to+enquire+about+the+Puri-Konark+Golden+Triangle+Tour.+Please+share+availability+and+pricing.',
    },
    {
        name: 'Chilika Lake Trip',
        subtitle: 'NATURE AT SATAPADA',
        badge: 'Sedan / SUV Available',
        features: ['Puri to Chilika', 'Dolphin Sighting Point', 'Sea Mouth', 'Boat Booking Assistance'],
        whatsapp: 'https://wa.me/919876543210?text=Hi%2C+I%27d+like+to+enquire+about+the+Chilika+Lake+Trip.+Please+share+availability+and+pricing.',
    },
];

const Pricing: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (id: string) =>
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
        );

    const whatsappLink = () => {
        const names = selected.map((id) => destinations.find((d) => d.id === id)!.label).join(', ');
        const msg = encodeURIComponent(
            `Hi! I'd like to book a custom tour covering: ${names || 'TBD'}. Please share details & pricing.`
        );
        return `https://wa.me/919876543210?text=${msg}`;
    };

    return (
        <section id="pricing" className="py-40 px-6 lg:px-12 bg-charcoal-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif text-navy-900 mb-6">Book Your Journey</h2>
                    <p className="text-charcoal-500 font-light text-lg max-w-xl mx-auto">Affordable rates, no hidden fees. Call or WhatsApp and get a personalised quote within minutes.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">

                    {/* LEFT — Puri Konark Tour */}
                    <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{sidePlans[0].name}</h3>
                        <p className="text-charcoal-400 text-xs tracking-wide mb-4">{sidePlans[0].subtitle}</p>
                        <span className="inline-block mb-8 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-champagne-600 bg-champagne-50 border border-champagne-200 px-3 py-1.5 rounded-full self-start">
                            {sidePlans[0].badge}
                        </span>
                        <ul className="space-y-5 mb-12 text-sm text-charcoal-600 font-medium tracking-wide flex-grow">
                            {sidePlans[0].features.map((f) => (
                                <li key={f} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 shrink-0"></span> {f}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+919876543210"
                                className="w-full py-4 rounded-xl bg-navy-900 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-navy-800 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">call</span>
                                Call to Book
                            </a>
                            <a
                                href={sidePlans[0].whatsapp}
                                target="_blank" rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-xl border border-charcoal-200 text-xs font-bold uppercase tracking-[0.15em] text-charcoal-600 hover:border-champagne-400 hover:text-navy-900 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">chat</span>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                    {/* CENTRE — Custom Service Picker (featured) */}
                    <div className="bg-navy-900 p-10 rounded-[2rem] shadow-2xl relative transform md:-translate-y-6 z-10 border border-navy-800 hover:border-champagne-400/60 hover:shadow-2xl hover:-translate-y-8 transition-all duration-500 flex flex-col">
                        <div className="absolute top-6 right-6">
                            <span className="material-symbols-outlined text-champagne-400">tune</span>
                        </div>

                        <h3 className="text-lg font-serif font-bold text-white mb-2">Custom Service</h3>
                        <p className="text-white/50 text-xs tracking-wide mb-10">YOUR PLAN, YOUR WAY</p>

                        {/* Destination toggles */}
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {destinations.map((d) => {
                                const active = selected.includes(d.id);
                                return (
                                    <button
                                        key={d.id}
                                        onClick={() => toggle(d.id)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 border ${active
                                            ? 'bg-champagne-500 text-navy-900 border-champagne-400 shadow-lg scale-105'
                                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        <span>{d.icon}</span>
                                        {d.label}
                                        {active && <span className="ml-auto text-xs">✓</span>}
                                    </button>
                                );
                            })}
                        </div>

                        <p className="text-white/60 text-sm font-light leading-relaxed mb-5">
                            Your perfect Odisha trip, built exactly around you:
                        </p>
                        <ul className="space-y-4 mb-12 text-sm text-white/80 font-medium tracking-wide flex-grow">
                            {[
                                'Visit multiple places in a single trip',
                                'Pick your ride — Sedan, SUV or Mini Van',
                                'Travel at your own time, no fixed schedule',
                                'Add a local guide whenever you want',
                            ].map((point) => (
                                <li key={point} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 shrink-0"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={whatsappLink()}
                            target="_blank" rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl bg-champagne-500 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:bg-white transition-colors shadow-lg text-center flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">chat</span>
                            WhatsApp for Quote
                        </a>
                    </div>

                    {/* RIGHT — Chilika Lake Trip */}
                    <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{sidePlans[1].name}</h3>
                        <p className="text-charcoal-400 text-xs tracking-wide mb-4">{sidePlans[1].subtitle}</p>
                        <span className="inline-block mb-8 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-champagne-600 bg-champagne-50 border border-champagne-200 px-3 py-1.5 rounded-full self-start">
                            {sidePlans[1].badge}
                        </span>
                        <ul className="space-y-5 mb-12 text-sm text-charcoal-600 font-medium tracking-wide flex-grow">
                            {sidePlans[1].features.map((f) => (
                                <li key={f} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 shrink-0"></span> {f}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+919876543210"
                                className="w-full py-4 rounded-xl bg-navy-900 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-navy-800 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">call</span>
                                Call to Book
                            </a>
                            <a
                                href={sidePlans[1].whatsapp}
                                target="_blank" rel="noopener noreferrer"
                                className="w-full py-3.5 rounded-xl border border-charcoal-200 text-xs font-bold uppercase tracking-[0.15em] text-charcoal-600 hover:border-champagne-400 hover:text-navy-900 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">chat</span>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                </div>

                {/* Trust strip */}
                <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs text-charcoal-400 uppercase tracking-widest">
                    {[
                        { icon: 'currency_rupee', text: 'Affordable Rates' },
                        { icon: 'receipt_long', text: 'No Hidden Charges' },
                        { icon: 'verified', text: 'Best Value Guaranteed' },
                        { icon: 'schedule', text: 'Flexible Timings' },
                        { icon: 'support_agent', text: '24/7 Support' },
                    ].map(({ icon, text }) => (
                        <span key={text} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-champagne-500 text-base">{icon}</span>
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
