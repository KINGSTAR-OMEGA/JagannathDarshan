import Image from 'next/image';

const stats = [
    { value: '500+', label: 'Monthly Yatras' },
    { value: '4.9', label: 'Satisfaction Score' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Transparency' },
];

const Features: React.FC = () => {
    return (
        <section className="py-40 px-6 lg:px-12 bg-charcoal-50/50 relative overflow-hidden">
            <div className="absolute -left-20 top-40 w-96 h-96 border border-champagne-200/30 rounded-full"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Floating Stack — flow-based layout, transforms for visual tilt */}
                <div className="order-2 lg:order-1 flex flex-col gap-4 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">

                    {/* Card 1 — Premium Sedan, white, tilted slightly left */}
                    <div className="w-full lg:w-[90%] lg:self-start bg-white rounded-[1.6rem] shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        style={{ transform: 'rotate(-3deg) translateX(0px)' }}>
                        <div className="w-full h-52 overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMgiDZ0K6cPYYZvTB3GfkxgO8y3t5YEemuKxhJgDB4zsWPc_jbeBiEowXXu7DcK3rpwFJOOQd6CpQ7IEACJ7LTrSxUkiEpmCPro-1RZk9RVZgO8O-41OuXmoqW9J590cEyoMPncvDvbLk61G4w85s1DXD_2QzCaQF1vN5W9kRSX_0Cf9hb3fVhPmwTvjsyAWwpE7Ti8o7vG7V82SSrYwCmdSZEnCZT4GhujIs2IFRqsm8wbx9wF3iSwckU52e62O267wV2Dc7Aw"
                                alt="Premium Sedan Dzire Etios for Puri Yatra"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-6 py-4 flex justify-between items-center">
                            <div>
                                <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.18em] mb-0.5">Premium Sedan</p>
                                <h3 className="text-xl font-serif text-navy-900">Dzire / Etios</h3>
                            </div>
                            <span className="w-9 h-9 rounded-full bg-champagne-50 border border-champagne-200 flex items-center justify-center material-symbols-outlined text-champagne-600 text-sm">arrow_forward</span>
                        </div>
                    </div>

                    {/* Card 2 — Luxury SUV, dark, tilted slightly right, offset right */}
                    <div className="w-full lg:w-[90%] lg:self-end bg-navy-900 rounded-[1.6rem] shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        style={{ transform: 'rotate(2.5deg) translateX(0px)' }}>
                        <div className="w-full h-52 overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3g5yqM2LdQhdy3_J4X3qR2GsaQpZ-EQC4o1hrzUbsI2y_9Xs06cRezZgQfcUiAG8KwJJvw-OHstUc5k-ygMppgTR9s0mjNdoSd3l_DfAKg2SF3h_VE4uCssPgi-qnaoGDKvUrwy3MkBLjOP50Hue2-_BLYt1XPPXeSDst5ZK-RCTftnz-rw0QXNMo5QZs6e5tUEv755TOhmeVdi5VDwS9MtSXYbZzZM_AENTyuKb1oGQ7z7zzGpTY3ngiq6Gw6s9oSA_pOXN2qw"
                                alt="Innova Crysta Luxury SUV for Odisha pilgrimage"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                        <div className="px-6 py-4 flex justify-between items-center">
                            <div>
                                <p className="text-[10px] text-champagne-400 uppercase tracking-[0.18em] mb-0.5">Luxury SUV</p>
                                <h3 className="text-xl font-serif text-white">Innova Crysta</h3>
                            </div>
                            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center material-symbols-outlined text-champagne-400 text-sm">arrow_forward</span>
                        </div>
                    </div>

                    {/* Card 3 — Sanitized & Safe info badge, white, slight tilt */}
                    <div className="w-[80%] lg:w-[65%] lg:self-start bg-white rounded-[1.6rem] shadow-xl border border-charcoal-100 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        style={{ transform: 'rotate(-1.5deg) translateX(8px)' }}>
                        <div className="px-6 py-5">
                            <span className="material-symbols-outlined text-3xl text-champagne-600 mb-2 font-light block">verified_user</span>
                            <h3 className="font-serif text-xl text-navy-900 mb-1">Sanitized &amp; Safe</h3>
                            <p className="text-charcoal-500 text-sm font-light">Daily deep cleaning protocols for every yatra.</p>
                            <div className="h-[3px] w-10 bg-champagne-500 mt-4 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2 pl-0 lg:pl-8">
                    <h3 className="text-champagne-600 font-bold uppercase tracking-[0.3em] text-2xs mb-8 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-champagne-400"></span>
                        Why Travel With Us
                    </h3>
                    <h2 className="text-5xl lg:text-6xl font-serif text-navy-900 mb-10 leading-tight">
                        Comfort meets <br /><span className="italic text-champagne-600">Devotion</span>.
                    </h2>
                    <p className="text-charcoal-600 text-lg font-light leading-relaxed mb-16 max-w-lg">
                        The journey to the Lord should be free of worldly worries. We ensure your travel is as pure
                        as your intent. Our fleet is modern, our drivers are courteous devotees themselves.
                    </p>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="group">
                                <span className="text-4xl font-serif font-light text-navy-900 group-hover:text-champagne-600 transition-colors duration-300 block">
                                    {stat.value}
                                </span>
                                <p className="text-charcoal-400 text-xs font-medium uppercase tracking-widest mt-2 border-t border-charcoal-200 pt-2 inline-block group-hover:border-champagne-400 transition-colors">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
