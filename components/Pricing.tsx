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
        price: '₹2,200',
        unit: '/ sedan',
        features: ['Jagannath Temple', 'Konark Sun Temple', 'Chandrabhaga Beach', 'Marine Drive', '10 Hours Service'],
    },
    {
        name: 'Chilika Lake Trip',
        subtitle: 'NATURE AT SATAPADA',
        price: '₹3,199',
        unit: '/ sedan',
        features: ['Puri to Satapada', 'Dolphin Sighting Point', 'Sea Mouth', 'Boat Booking Assistance'],
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
                    <h2 className="text-4xl md:text-6xl font-serif text-navy-900 mb-6">Transparent Pricing</h2>
                    <p className="text-charcoal-500 font-light text-lg">No hidden fees. Pure experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">

                    {/* LEFT — Puri Konark Tour */}
                    <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{sidePlans[0].name}</h3>
                        <p className="text-charcoal-400 text-xs tracking-wide mb-10">{sidePlans[0].subtitle}</p>
                        <div className="flex items-baseline gap-1 mb-10">
                            <span className="text-4xl font-serif text-navy-900">{sidePlans[0].price}</span>
                            <span className="text-charcoal-400 font-light text-sm">{sidePlans[0].unit}</span>
                        </div>
                        <ul className="space-y-5 mb-12 text-sm text-charcoal-600 font-medium tracking-wide flex-grow">
                            {sidePlans[0].features.map((f) => (
                                <li key={f} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500"></span> {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="tel:+919876543210"
                            className="w-full py-4 rounded-xl border border-navy-900/10 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all text-center block"
                        >
                            Select Plan
                        </a>
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
                            href="/custom-booking"
                            className="w-full py-4 rounded-xl bg-champagne-500 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:bg-white transition-colors shadow-lg text-center block"
                        >
                            Plan My Custom Tour
                        </a>
                    </div>

                    {/* RIGHT — Chilika Lake Trip */}
                    <div className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{sidePlans[1].name}</h3>
                        <p className="text-charcoal-400 text-xs tracking-wide mb-10">{sidePlans[1].subtitle}</p>
                        <div className="flex items-baseline gap-1 mb-10">
                            <span className="text-4xl font-serif text-navy-900">{sidePlans[1].price}</span>
                            <span className="text-charcoal-400 font-light text-sm">{sidePlans[1].unit}</span>
                        </div>
                        <ul className="space-y-5 mb-12 text-sm text-charcoal-600 font-medium tracking-wide flex-grow">
                            {sidePlans[1].features.map((f) => (
                                <li key={f} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500"></span> {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="tel:+919876543210"
                            className="w-full py-4 rounded-xl border border-navy-900/10 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all text-center block"
                        >
                            Select Plan
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
