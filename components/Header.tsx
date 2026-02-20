'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full bg-gradient-to-b from-black/30 via-black/20 to-transparent transition-all duration-300 ${scrolled ? 'backdrop-blur-sm' : ''
                }`}
        >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
                <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                        <span className="material-symbols-outlined text-[20px]">temple_hindu</span>
                    </div>
                    <div>
                        <p className="text-white text-lg font-serif font-bold leading-none tracking-wide">
                            Jagannath Darshan
                        </p>
                        <p className="text-[0.65rem] text-white/80 font-medium tracking-[0.2em] uppercase mt-1">
                            Luxury Pilgrimage
                        </p>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="#">Home</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="#story">Legacy</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="#gallery">Gallery</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="#packages">Journeys</a>
                    <a className="text-white/90 hover:text-champagne-400 text-xs font-medium tracking-widest uppercase transition-colors" href="#pricing">Pricing</a>
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
                        <span className="material-symbols-outlined font-light">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-navy-900 border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
                    <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase" href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase" href="#story" onClick={() => setMobileMenuOpen(false)}>Legacy</a>
                    <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase" href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                    <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase" href="#packages" onClick={() => setMobileMenuOpen(false)}>Journeys</a>
                    <a className="text-white/90 hover:text-champagne-400 text-sm font-medium tracking-widest uppercase" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                </div>
            )}
        </header>
    );
}
