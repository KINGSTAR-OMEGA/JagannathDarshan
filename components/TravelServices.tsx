import Image from 'next/image';

export default function TravelServices() {
    return (
        <section id="travel-services" className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-navy-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl border border-navy-800">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy-900 z-10" />
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#fef3c7" strokeWidth="1" fill="none" opacity="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#gridPattern)" />
                        </svg>
                    </div>

                    <div className="relative z-10 md:w-3/5 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-champagne-400"></span>
                            <span className="text-champagne-400 text-[0.65rem] font-bold tracking-[0.3em] uppercase">Complete Journey Assistance</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
                            Flight, Train &amp; Hotel <br />
                            <span className="italic text-champagne-500 font-light">Bookings Simplified.</span>
                        </h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                            Your spiritual journey shouldn't begin with booking stress. Let us handle your flight and train tickets to Bhubaneswar or Puri, along with premium hotel accommodations. End-to-end luxury, from your doorstep to the Lord's.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-10">
                            <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <span className="material-symbols-outlined text-champagne-400 text-lg">flight_takeoff</span>
                                <span className="text-xs font-semibold tracking-wide">Flights</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <span className="material-symbols-outlined text-champagne-400 text-lg">train</span>
                                <span className="text-xs font-semibold tracking-wide">Trains</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                <span className="material-symbols-outlined text-champagne-400 text-lg">hotel</span>
                                <span className="text-xs font-semibold tracking-wide">Hotels</span>
                            </div>
                        </div>

                        <a 
                            href="https://wa.me/919876543210?text=Hi%2C+I+need+assistance+with+booking+flights%2Ftrains+and+hotels+for+my+trip+to+Odisha." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center gap-2 bg-champagne-500 text-navy-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
                        >
                            <span className="material-symbols-outlined text-sm">chat</span>
                            WhatsApp For Bookings
                        </a>
                    </div>
                    
                    <div className="relative z-10 md:w-2/5 flex justify-center md:justify-end">
                       <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-champagne-400/20 flex items-center justify-center p-4">
                           <div className="absolute inset-0 rounded-full border border-champagne-400/40 border-dashed animate-[spin_20s_linear_infinite]"></div>
                           <div className="w-full h-full rounded-full overflow-hidden relative">
                               <Image 
                                   src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BBI-T1_%282%29.jpg"
                                   alt="Travel to Odisha"
                                   fill
                                   className="object-cover"
                               />
                               <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
                           </div>
                           
                           {/* Floating badge */}
                           <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-charcoal-100">
                                <div className="w-10 h-10 rounded-full bg-champagne-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-champagne-600">verified</span>
                                </div>
                                <div>
                                    <p className="text-[0.6rem] uppercase tracking-widest text-charcoal-400 font-bold">Guaranteed</p>
                                    <p className="text-navy-900 font-serif font-bold text-sm">Best Fares</p>
                                </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
