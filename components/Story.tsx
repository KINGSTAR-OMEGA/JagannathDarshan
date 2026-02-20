import Image from 'next/image';

export default function Story() {
    return (
        <section id="story" className="py-32 px-6 lg:px-12 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="relative z-10 pr-0 lg:pr-12">
                        <h3 className="text-champagne-600 font-bold uppercase tracking-[0.2em] text-[0.65rem] mb-4">The Sacred Journey</h3>
                        <h2 className="text-4xl lg:text-5xl font-serif text-navy-900 mb-8 leading-tight">
                            Walk the Path of <br /><span className="italic text-champagne-600">Eternity</span> in Puri.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <p className="text-charcoal-600 text-sm font-light leading-relaxed mb-4">
                                    Jagannath Puri is not just a destination; it is an emotion. As one of the Char Dhams,
                                    it beckons millions. We facilitate this divine call with seamless travel experiences.
                                </p>
                                <p className="text-charcoal-600 text-sm font-light leading-relaxed">
                                    Our bespoke packages ensure you focus on your prayers, not the logistics, creating
                                    memories that resonate with your soul long after you return.
                                </p>
                            </div>
                            <div>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-champagne-100 text-champagne-600 flex items-center justify-center material-symbols-outlined text-sm">temple_hindu</span>
                                        <div>
                                            <h4 className="text-navy-900 font-serif font-bold text-sm mb-1">VIP Darshan</h4>
                                            <p className="text-charcoal-500 text-xs">Direct access with priority queue management.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-champagne-100 text-champagne-600 flex items-center justify-center material-symbols-outlined text-sm">interpreter_mode</span>
                                        <div>
                                            <h4 className="text-navy-900 font-serif font-bold text-sm mb-1">Local Guides</h4>
                                            <p className="text-charcoal-500 text-xs">Stories from experienced Sevayats.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-champagne-100 text-champagne-600 flex items-center justify-center material-symbols-outlined text-sm">restaurant</span>
                                        <div>
                                            <h4 className="text-navy-900 font-serif font-bold text-sm mb-1">Mahaprasad</h4>
                                            <p className="text-charcoal-500 text-xs">Authentic Anand Bazar arrangements.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className="inline-flex items-center text-navy-900 text-xs font-bold uppercase tracking-widest hover:text-champagne-600 transition-colors border-b border-navy-900 pb-1 hover:border-champagne-600 cursor-pointer" href="#">
                            Discover Heritage <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative h-[600px] overflow-hidden rounded-[2rem]">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="flex flex-col gap-4 animate-scroll-up">
                            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDud7E_9qNbfmARyO0X_kEh7uPOHr4KHfindqmWkv-C5NQwbPyMTV_jTt4xraw_uc2xGDCl7GrbljLPu078pKFtlfcTBSRkztyY5FuaNPMK7DiKBWB5ctBmycp7PjtS3kV52CxInt-p0ixbTHBHwbaQUcbF-dyyA9iUCAj-wTUaIh6968ck02GTtsoXFHVojxlcMEDfCPV-LWFqJD_-ajnKgYk1JIqptdc5S4m9l4a1tojAA9ynMEovN8fHvcuX7_zCi626pCexlA" alt="Puri Temple Flag" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CvWXNMX8sZwJHgsT0474_XrA5vgELaAuM_kIG3DJsT8Od1JtOxJd3eLjLWGR5qRnYMEgB4Lj2P_s8PSIHq5QoR59bEDqTJ_AYx9-T-DnpGFSltu3hR--zgRYCVnNH2_8BGFTOi5l2rN2AHLKeR4KAGBGTYsBOQTB7OWDWh4Yj3RMn_FZvfY8HtpL5svDOBW6NBHUrUdsmPdSzF989y_6S8wvEMYQJEOay-JKgcslLfPevT9frAA6MeLGtkcF6YCxeIw7NwzpUA" alt="Devotees at Jagannath Temple Puri" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGopyZb-_x1OcFnknauP6p2r1fY0gcfVHaDTPKOsNHdTuqNv8x7aKAS78bIkjG8NT5JzFl7WgqyatQSplXNYeOfIX7lSdI94hV74vFgv6xgwuC3fg-tOjouGpZs4LhnnKxgpO6iff1VkaBK1o5kaxK4CUXrRrsw-AFCaQ0Rq8FstwT0gySgoeRc9mP-fEhTxE98nSSaLsJlVaDmSGudLJ4W4WWSoSqRO08veaT96j7VcIaP8RXxfNnumIdxBMUoUl6X8WWfFQvyA" alt="Ratha Yatra Festival Puri" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 animate-scroll-down pt-12">
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH6UuEfTvTmsETxufZfcUEYOiVC3ajBhZ4fPVByy8tcki3-ko7e2st3vGD1tcctKkDV4RJI7reg-bd-VZJuNNMPvhl3U0OBvHJeBRu2XpWVmeBruZY6F_FfQL8FwEuTEUz5bhEAkwoE6TJJtG9G1i74WS98YR56SBuRw-88ywO5tLDzMk9JoTkAO1gCGFx55nRCBnvD5Nl-wQlTX3v_Rp9eXh1fpnEKkoQJDZmvUReinx0mE15BViMLuHui5iHTUSwfG5wNbVsA" alt="Beach Sunset Puri Odisha" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSXXoKCPbb13_uKh0_MYZcYsiPaJ2n0MajmGhZO_hNaLKZOf0UoKEvT_WyH8HDsueMEZ-oCTBSlbHrQ_9gJCjqV5DgPy-Hg9TxEje8K0AOmjiRNAoUmmc5cA18UKwtN6WWAkv4f4AhiJBYKD8Bl0g7L0R_8DB5SxfDGwC-SHgMY1ei3U4vpzfGKCJGLf0-0uIYorEkwRQQrPiBkslyZyTKS6kM8_BF40UMLJx3tdtWQg5PFe9Z3JqO0bnpl5_2vTeghsZuin3Hg" alt="Konark Temple Architecture" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w" alt="Jagannath Mahaprasad Puri" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
}
