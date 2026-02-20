const plans = [
    {
        name: 'Puri Sightseeing',
        subtitle: 'SINGLE DAY SPIRITUAL VISIT',
        price: '₹1,800',
        unit: '/ sedan',
        features: ['Temple Darshan', 'Beach Visit', 'Gundicha Temple', '8 Hours / 80 Kms'],
        featured: false,
    },
    {
        name: 'Puri - Konark Tour',
        subtitle: 'THE GOLDEN TRIANGLE',
        price: '₹2,200',
        unit: '/ sedan',
        features: ['Jagannath Temple', 'Konark Sun Temple', 'Chandrabhaga Beach', 'Marine Drive', '10 Hours Service'],
        featured: true,
    },
    {
        name: 'Chilika Lake Trip',
        subtitle: 'NATURE AT SATAPADA',
        price: '₹3,199',
        unit: '/ sedan',
        features: ['Puri to Satapada', 'Dolphin Sighting Point', 'Sea Mouth', 'Boat Booking Assistance'],
        featured: false,
    },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-40 px-6 lg:px-12 bg-charcoal-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif text-navy-900 mb-6">Transparent Pricing</h2>
                    <p className="text-charcoal-500 font-light text-lg">No hidden fees. Pure experience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) =>
                        plan.featured ? (
                            <div key={plan.name} className="bg-navy-900 p-10 rounded-[2rem] shadow-2xl relative transform md:-translate-y-6 z-10 border border-navy-800 flex flex-col">
                                <div className="absolute top-6 right-6">
                                    <span className="material-symbols-outlined text-champagne-400">star</span>
                                </div>
                                <h3 className="text-lg font-serif font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-white/50 text-xs tracking-wide mb-10">{plan.subtitle}</p>
                                <div className="flex items-baseline gap-1 mb-10">
                                    <span className="text-5xl font-serif text-champagne-400">{plan.price}</span>
                                    <span className="text-white/40 font-light text-sm">{plan.unit}</span>
                                </div>
                                <ul className="space-y-5 mb-12 text-sm text-white/80 font-medium tracking-wide flex-grow">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400"></span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="tel:+919876543210"
                                    className="w-full py-4 rounded-xl bg-champagne-500 text-xs font-bold uppercase tracking-[0.15em] text-navy-900 hover:bg-white transition-colors shadow-lg text-center block"
                                >
                                    Reserve Now
                                </a>
                            </div>
                        ) : (
                            <div key={plan.name} className="bg-white p-10 rounded-[2rem] border border-charcoal-100 hover:border-champagne-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                                <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{plan.name}</h3>
                                <p className="text-charcoal-400 text-xs tracking-wide mb-10">{plan.subtitle}</p>
                                <div className="flex items-baseline gap-1 mb-10">
                                    <span className="text-4xl font-serif text-navy-900">{plan.price}</span>
                                    <span className="text-charcoal-400 font-light text-sm">{plan.unit}</span>
                                </div>
                                <ul className="space-y-5 mb-12 text-sm text-charcoal-600 font-medium tracking-wide flex-grow">
                                    {plan.features.map((f) => (
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
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
