export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-charcoal-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <div className="mb-16">
                    <div className="flex size-14 mx-auto items-center justify-center rounded-full bg-navy-50 text-navy-900 mb-6">
                        <span className="material-symbols-outlined text-[24px]">temple_hindu</span>
                    </div>
                    <h2 className="text-3xl font-serif text-navy-900 mb-4">Ready for your spiritual journey?</h2>
                    <p className="text-charcoal-500 text-base mb-8 font-light">Book your ride today and experience Odisha like never before.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919876543210"
                            className="bg-navy-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-navy-800 transition-colors"
                        >
                            Book Now
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="bg-white text-navy-900 border border-charcoal-200 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-charcoal-50 transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
                <div className="border-t border-charcoal-100 pt-12 grid md:grid-cols-4 gap-10 text-left">
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm mb-4">Jagannath Darshan</h3>
                        <p className="text-xs text-charcoal-500 leading-relaxed">
                            Providing the most spiritual and comfortable travel experience in Odisha since 2010.
                            Specialising in Jagannath Darshan Tour Packages, Puri tours from Bhubaneswar, and
                            Odisha travel services.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm mb-4">Links</h3>
                        <ul className="space-y-3 text-xs text-charcoal-500">
                            <li><a className="hover:text-champagne-600 transition-colors" href="/">Home</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/#packages">Packages</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/#pricing">Pricing</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/about">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm mb-4">Destinations</h3>
                        <ul className="space-y-3 text-xs text-charcoal-500">
                            <li><a className="hover:text-champagne-600 transition-colors" href="/puri-darshan-tour">Puri Darshan Tour</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/konark-sun-temple-tour">Konark Sun Temple</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/chilika-lake-trip">Chilika Lake Trip</a></li>
                            <li><a className="hover:text-champagne-600 transition-colors" href="/bhubaneswar-sightseeing">Bhubaneswar Tour</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-navy-900 text-sm mb-4">Contact</h3>
                        <ul className="space-y-3 text-xs text-charcoal-500">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">call</span>
                                <a href="tel:+919876543210" className="hover:text-champagne-600 transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">mail</span>
                                <a href="mailto:book@jagannath.com" className="hover:text-champagne-600 transition-colors">book@jagannath.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">location_on</span>
                                <span>Puri, Odisha — 752001</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-charcoal-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-charcoal-400 uppercase tracking-widest">
                    <span>© 2026 Jagannath Darshan Tours. All rights reserved.</span>
                    <nav aria-label="Legal links" className="flex gap-6">
                        <a href="/about" className="hover:text-champagne-600 transition-colors">About Us</a>
                        <span>Puri, Odisha, India</span>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
