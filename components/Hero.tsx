import Image from 'next/image';
import WebHero from '@/public/Web_Hero.webp';
import MobHero from '@/public/Mob_Hero.webp';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-navy-900/40 z-10"></div>

                {/* Mobile hero */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src={MobHero}
                        alt="Jagannath Darshan — Puri Pilgrimage mobile hero"
                        fill
                        priority
                        className="object-cover"
                        style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                        sizes="100vw"
                    />
                </div>

                {/* Desktop hero */}
                <div className="hidden md:block w-full h-full">
                    <Image
                        src={WebHero}
                        alt="Jagannath Darshan — Luxury Pilgrimage to Puri Odisha"
                        fill
                        priority
                        className="object-cover"
                        style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                        sizes="100vw"
                    />
                </div>
            </div>

            <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-champagne-300 text-[0.65rem] font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-md">
                    Spiritual Odyssey 2026
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
                    The Divine Soul<br />
                    <span className="italic text-champagne-200 font-light">of Odisha</span>
                </h1>
                <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                    An immersive pilgrimage through Puri, Konark, and the cultural heart of India&apos;s east coast,
                    curated for the modern devotee.
                </p>
                <div className="w-full max-w-lg mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl p-1.5 pl-5 rounded-full border border-white/20 flex shadow-2xl">
                        <input
                            className="bg-transparent border-none text-white placeholder-white/60 w-full focus:ring-0 focus:outline-none text-sm font-light tracking-wide placeholder:font-light"
                            placeholder="Begin your journey..."
                            type="text"
                            aria-label="Search tours"
                        />
                        <button className="bg-white text-navy-900 hover:bg-champagne-100 rounded-full h-10 px-8 text-xs font-bold uppercase tracking-wider transition-colors flex items-center cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
                    <span className="text-white/60 text-[0.65rem] uppercase tracking-widest">Scroll</span>
                    <span className="material-symbols-outlined text-white/60 text-sm">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
}
