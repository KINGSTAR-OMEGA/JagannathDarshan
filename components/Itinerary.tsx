import Image from 'next/image';

const Itinerary: React.FC = () => {
    return (
        <section id="packages" className="py-40 px-6 lg:px-12 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-24">
                    <h3 className="text-champagne-600 font-bold uppercase tracking-[0.3em] text-2xs mb-6">Sample Itinerary</h3>
                    <h2 className="text-4xl md:text-6xl font-serif text-navy-900 mb-6">A Day with Jagannath</h2>
                    <p className="text-charcoal-500 font-light text-lg max-w-md mx-auto">
                        Experience how we orchestrate a perfect day of spirituality and sightseeing.
                    </p>
                </div>

                <div className="relative ml-4 md:ml-12 space-y-20">
                    {/* Vertical Line */}
                    <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-champagne-200 via-champagne-400 to-transparent"></div>

                    {/* Timeline Item 1 */}
                    <div className="relative pl-12 md:pl-20 group">
                        <div className="absolute -left-[4px] top-2 h-4 w-4 rounded-full bg-white border border-champagne-400 shadow-[0_0_0_4px_rgba(212,175,55,0.1)] group-hover:scale-125 transition-transform duration-300 z-10"></div>
                        <p className="text-2xs text-champagne-600 uppercase tracking-widest font-bold mb-2">Morning</p>
                        <h3 className="text-xl font-serif text-navy-900 mb-3">Divine Pickup</h3>
                        <p className="text-charcoal-500 text-base font-light leading-relaxed">
                            Our driver greets you at your hotel/airport with a clean, AC car. A fresh start to a divine day.
                        </p>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative pl-12 md:pl-20 group">
                        <div className="absolute -left-[4px] top-2 h-4 w-4 rounded-full bg-navy-900 border border-navy-900 shadow-[0_0_0_4px_rgba(15,23,42,0.1)] group-hover:scale-125 transition-transform duration-300 z-10"></div>
                        <p className="text-2xs text-champagne-600 uppercase tracking-widest font-bold mb-2">Temple</p>
                        <h3 className="text-xl font-serif text-navy-900 mb-4">The Main Shrine</h3>
                        <p className="text-charcoal-500 text-base font-light leading-relaxed mb-6">
                            Assisted entry to the temple. Our local guide explains the history while you soak in the spiritual energy.
                        </p>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-charcoal-100 h-56">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CvWXNMX8sZwJHgsT0474_XrA5vgELaAuM_kIG3DJsT8Od1JtOxJd3eLjLWGR5qRnYMEgB4Lj2P_s8PSIHq5QoR59bEDqTJ_AYx9-T-DnpGFSltu3hR--zgRYCVnNH2_8BGFTOi5l2rN2AHLKeR4KAGBGTYsBOQTB7OWDWh4Yj3RMn_FZvfY8HtpL5svDOBW6NBHUrUdsmPdSzF989y_6S8wvEMYQJEOay-JKgcslLfPevT9frAA6MeLGtkcF6YCxeIw7NwzpUA"
                                alt="Jagannath Temple Puri — Main Shrine Darshan"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 768px) 85vw, 40vw"
                            />
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative pl-12 md:pl-20 group">
                        <div className="absolute -left-[4px] top-2 h-4 w-4 rounded-full bg-white border border-champagne-400 shadow-[0_0_0_4px_rgba(212,175,55,0.1)] group-hover:scale-125 transition-transform duration-300 z-10"></div>
                        <p className="text-2xs text-champagne-600 uppercase tracking-widest font-bold mb-2">Afternoon</p>
                        <h3 className="text-xl font-serif text-navy-900 mb-3">Coastal Excursion</h3>
                        <p className="text-charcoal-500 text-base font-light leading-relaxed">
                            Drive through the scenic marine drive to Konark Sun Temple or enjoy boating at Chilika Lake.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Itinerary;
