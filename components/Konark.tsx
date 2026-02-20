import Image from 'next/image';

const Konark: React.FC = () => {
    return (
        <section className="py-20 md:py-32 px-6 lg:px-12 bg-navy-950 text-white relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
                <div className="max-w-2xl">
                    <h3 className="text-champagne-400 font-bold uppercase tracking-[0.3em] text-xs md:text-2xs mb-4 md:mb-6 flex items-center gap-4">
                        <span className="w-8 md:w-12 h-[1px] bg-champagne-400"></span>
                        Architectural Marvels
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-4 md:mb-6 leading-none">
                        Stories in <span className="italic text-champagne-400">Stone</span>.
                    </h2>
                    <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
                        Witness the grandeur of the Sun Temple, a UNESCO World Heritage site. Every inch of this
                        13th-century marvel tells a story of time, life, and the cosmos.
                    </p>
                </div>
                <button className="group flex items-center gap-3 text-champagne-400 hover:text-white transition-colors uppercase text-xs tracking-[0.2em] font-bold border-b border-champagne-400/30 pb-2 hover:border-white">
                    Explore Full Gallery <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[190px] md:grid-rows-[repeat(3,250px)] lg:grid-rows-[repeat(3,300px)] gap-4 md:gap-6">

                {/* Item 1: Large Feature */}
                <div className="relative col-span-2 row-span-2 md:col-span-2 md:row-span-2 group overflow-hidden rounded-[1.5rem]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSXXoKCPbb13_uKh0_MYZcYsiPaJ2n0MajmGhZO_hNaLKZOf0UoKEvT_WyH8HDsueMEZ-oCTBSlbHrQ_9gJCjqV5DgPy-Hg9TxEje8K0AOmjiRNAoUmmc5cA18UKwtN6WWAkv4f4AhiJBYKD8Bl0g7L0R_8DB5SxfDGwC-SHgMY1ei3U4vpzfGKCJGLf0-0uIYorEkwRQQrPiBkslyZyTKS6kM8_BF40UMLJx3tdtWQg5PFe9Z3JqO0bnpl5_2vTeghsZuin3Hg"
                        alt="Konark Sun Temple Wheel Detail — UNESCO World Heritage Site"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-6 left-8 z-20">
                        <span className="text-champagne-400 text-xs tracking-widest uppercase mb-1 block">Konark</span>
                        <h3 className="text-2xl font-serif text-white">The Chariot Wheel</h3>
                    </div>
                </div>

                {/* Item 2: Vertical */}
                <div className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 group overflow-hidden rounded-[1.5rem]">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CvWXNMX8sZwJHgsT0474_XrA5vgELaAuM_kIG3DJsT8Od1JtOxJd3eLjLWGR5qRnYMEgB4Lj2P_s8PSIHq5QoR59bEDqTJ_AYx9-T-DnpGFSltu3hR--zgRYCVnNH2_8BGFTOi5l2rN2AHLKeR4KAGBGTYsBOQTB7OWDWh4Yj3RMn_FZvfY8HtpL5svDOBW6NBHUrUdsmPdSzF989y_6S8wvEMYQJEOay-JKgcslLfPevT9frAA6MeLGtkcF6YCxeIw7NwzpUA"
                        alt="Jagannath Temple Spire Puri"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Item 3: Stat Box */}
                <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 bg-champagne-500/10 border border-white/5 flex items-center justify-center p-4 md:p-8 text-center backdrop-blur-sm rounded-[1.5rem]">
                    <div>
                        <span className="block text-3xl md:text-4xl font-serif text-champagne-400 mb-2">12</span>
                        <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest">Pairs of Wheels</p>
                    </div>
                </div>

                {/* Item 4: Texture/Detail */}
                <div className="relative col-span-1 row-span-1 md:col-span-1 md:row-span-1 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-[1.5rem]">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w"
                        alt="Stone Carving Texture Konark Temple"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>

                {/* Item 5: Wide Landscape */}
                <div className="relative col-span-2 row-span-1 md:col-span-2 md:row-span-1 group overflow-hidden rounded-[1.5rem]">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDud7E_9qNbfmARyO0X_kEh7uPOHr4KHfindqmWkv-C5NQwbPyMTV_jTt4xraw_uc2xGDCl7GrbljLPu078pKFtlfcTBSRkztyY5FuaNPMK7DiKBWB5ctBmycp7PjtS3kV52CxInt-p0ixbTHBHwbaQUcbF-dyyA9iUCAj-wTUaIh6968ck02GTtsoXFHVojxlcMEDfCPV-LWFqJD_-ajnKgYk1JIqptdc5S4m9l4a1tojAA9ynMEovN8fHvcuX7_zCi626pCexlA"
                        alt="Sunset at Chandrabhaga Beach Konark"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-6 left-8 z-20">
                        <h3 className="text-xl font-serif text-white">Sunset at Chandrabhaga</h3>
                    </div>
                </div>

                {/* Item 6: Quote Box */}
                <div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1 bg-navy-800 p-8 md:p-10 flex flex-col justify-center items-start border border-white/5 rounded-[1.5rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-champagne-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <span className="material-symbols-outlined text-champagne-500 text-3xl mb-4 relative z-10">architecture</span>
                    <blockquote className="text-white/80 font-serif text-lg md:text-xl italic mb-4 relative z-10">
                        &ldquo;Here the language of stone surpasses the language of human.&rdquo;
                    </blockquote>
                    <cite className="text-white/40 text-xs uppercase tracking-widest relative z-10 not-italic">- Rabindranath Tagore</cite>
                </div>

            </div>
        </section>
    );
};

export default Konark;
