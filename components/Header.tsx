'use client';
import { useState, useEffect, useRef } from 'react';

const destinations = [
    { href: '/puri-darshan-tour', label: 'Puri Darshan Tour', icon: 'temple_hindu', sub: 'From ₹1,800' },
    { href: '/konark-sun-temple-tour', label: 'Konark Sun Temple', icon: 'wb_sunny', sub: 'From ₹2,200' },
    { href: '/chilika-lake-trip', label: 'Chilika Lake Trip', icon: 'water', sub: 'From ₹3,199' },
    { href: '/bhubaneswar-sightseeing', label: 'Bhubaneswar Tour', icon: 'fort', sub: 'From ₹1,500' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [destOpen, setDestOpen] = useState(false);
    const destRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (destRef.current && !destRef.current.contains(e.target as Node)) {
                setDestOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full bg-gradient-to-b from-black/30 via-black/20 to-transparent transition-all duration-300 ${scrolled ? 'backdrop-blur-sm' : ''}`}
        >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
                <a href="/" className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                        <span className="material-symbols-outlined text-[20px]">temple_hindu</span>
                    </div>
                    <div>
                        <p className="text-white text-lg font-serif font-bold leading-none tracking-wide">Jagannath Darshan</p>
                        <p className="text-[0.65rem] text-white/80 font-medium tracking-[0.2em] uppercase mt-1">Luxury Pilgrimage</p>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="/">Home</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="/#story">Legacy</a>

                    {/* Destinations Dropdown */}
                    <div className="relative" ref={destRef}>
                        <button
                            onClick={() => setDestOpen(!destOpen)}
                            className="flex items-center gap-1 text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors"
                            aria-expanded={destOpen}
                            aria-haspopup="true"
                        >
                            Destinations
                            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${destOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>
                        {destOpen && (
                            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                                {destinations.map((d) => (
                                    <a
                                        key={d.href}
                                        href={d.href}
                                        onClick={() => setDestOpen(false)}
                                        className="flex items-center gap-3 px-5 py-4 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                                    >
                                        <span className="material-symbols-outlined text-champagne-400 text-lg flex-shrink-0">{d.icon}</span>
                                        <div>
                                            <p className="text-white text-xs font-semibold">{d.label}</p>
                                            <p className="text-champagne-400 text-[0.6rem]">{d.sub}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="/#gallery">Gallery</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widests uppercase transition-colors" href="/#pricing">Pricing</a>
                    <a
                        href="tel:+919876543210"
                        className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition-all hover:bg-white hover:text-navy-900 cursor-pointer"
                    >
                        Book Yatra
                    </a>
                </nav>

                <div className="md:hidden">
                    <button
                        className="text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="material-symbols-outlined font-light">{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-navy-900 border-t border-white/10 shadow-xl">
                    <div className="p-6 flex flex-col gap-1">
                        <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase py-3 border-b border-white/5" href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase py-3 border-b border-white/5" href="/#story" onClick={() => setMobileMenuOpen(false)}>Legacy</a>
                        <p className="text-champagne-400/60 text-[0.6rem] uppercase tracking-widest pt-4 pb-1 font-bold">Destinations</p>
                        {destinations.map((d) => (
                            <a
                                key={d.href}
                                href={d.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-3 border-b border-white/5 hover:text-champagne-400 transition-colors"
                            >
                                <span className="material-symbols-outlined text-champagne-400 text-base">{d.icon}</span>
                                <div>
                                    <p className="text-white text-xs font-semibold">{d.label}</p>
                                    <p className="text-champagne-400/70 text-[0.6rem]">{d.sub}</p>
                                </div>
                            </a>
                        ))}
                        <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase py-3 border-b border-white/5" href="/#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                        <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase py-3" href="/#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                        <a href="tel:+919876543210" className="mt-4 w-full py-4 rounded-full bg-champagne-500 text-navy-900 text-xs font-bold uppercase tracking-widest text-center">Book Yatra</a>
                    </div>
                </div>
            )}
        </header>
    );
}
