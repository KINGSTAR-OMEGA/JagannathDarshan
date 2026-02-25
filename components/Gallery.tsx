import Image from 'next/image';

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-charcoal-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h3 className="text-champagne-600 font-bold uppercase tracking-[0.2em] text-[0.65rem] mb-4">Visual Diaries</h3>
                    <h2 className="text-3xl md:text-5xl font-serif text-navy-900">Pilgrim Moments</h2>
                    <p className="text-charcoal-500 mt-4 text-sm font-light max-w-lg mx-auto">
                        A collection of captured memories from our travelers and the timeless beauty of Odisha.
                    </p>
                </div>
                <div className="masonry-grid">
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Majestic Spires of Jagannath Temple Puri"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDud7E_9qNbfmARyO0X_kEh7uPOHr4KHfindqmWkv-C5NQwbPyMTV_jTt4xraw_uc2xGDCl7GrbljLPu078pKFtlfcTBSRkztyY5FuaNPMK7DiKBWB5ctBmycp7PjtS3kV52CxInt-p0ixbTHBHwbaQUcbF-dyyA9iUCAj-wTUaIh6968ck02GTtsoXFHVojxlcMEDfCPV-LWFqJD_-ajnKgYk1JIqptdc5S4m9l4a1tojAA9ynMEovN8fHvcuX7_zCi626pCexlA"
                            width={400}
                            height={500}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Majestic Spires</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Stone Artistry at Konark Sun Temple"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSXXoKCPbb13_uKh0_MYZcYsiPaJ2n0MajmGhZO_hNaLKZOf0UoKEvT_WyH8HDsueMEZ-oCTBSlbHrQ_9gJCjqV5DgPy-Hg9TxEje8K0AOmjiRNAoUmmc5cA18UKwtN6WWAkv4f4AhiJBYKD8Bl0g7L0R_8DB5SxfDGwC-SHgMY1ei3U4vpzfGKCJGLf0-0uIYorEkwRQQrPiBkslyZyTKS6kM8_BF40UMLJx3tdtWQg5PFe9Z3JqO0bnpl5_2vTeghsZuin3Hg"
                            width={400}
                            height={600}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Stone Artistry</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <div className="bg-navy-900 p-8 h-full flex flex-col justify-center items-center text-center min-h-[200px]">
                            <span className="material-symbols-outlined text-4xl text-champagne-500 mb-4">format_quote</span>
                            <p className="text-white font-serif text-lg italic leading-relaxed">
                                &ldquo;The most peaceful experience of my life. The arrangements were flawless.&rdquo;
                            </p>
                            <p className="text-champagne-400 text-xs uppercase tracking-widest mt-4">- Priya S.</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Chilika Lake Boating — Satapada Odisha"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w"
                            width={400}
                            height={500}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Chilika Blue</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Golden Hour Sunset Puri Beach Odisha"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH6UuEfTvTmsETxufZfcUEYOiVC3ajBhZ4fPVByy8tcki3-ko7e2st3vGD1tcctKkDV4RJI7reg-bd-VZJuNNMPvhl3U0OBvHJeBRu2XpWVmeBruZY6F_FfQL8FwEuTEUz5bhEAkwoE6TJJtG9G1i74WS98YR56SBuRw-88ywO5tLDzMk9JoTkAO1gCGFx55nRCBnvD5Nl-wQlTX3v_Rp9eXh1fpnEKkoQJDZmvUReinx0mE15BViMLuHui5iHTUSwfG5wNbVsA"
                            width={400}
                            height={550}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Golden Hour</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Faith in Numbers — Devotees at Jagannath Puri"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGopyZb-_x1OcFnknauP6p2r1fY0gcfVHaDTPKOsNHdTuqNv8x7aKAS78bIkjG8NT5JzFl7WgqyatQSplXNYeOfIX7lSdI94hV74vFgv6xgwuC3fg-tOjouGpZs4LhnnKxgpO6iff1VkaBK1o5kaxK4CUXrRrsw-AFCaQ0Rq8FstwT0gySgoeRc9mP-fEhTxE98nSSaLsJlVaDmSGudLJ4W4WWSoSqRO08veaT96j7VcIaP8RXxfNnumIdxBMUoUl6X8WWfFQvyA"
                            width={400}
                            height={500}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Faith in Numbers</p>
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <div className="bg-champagne-100 p-8 h-full flex flex-col justify-center text-left min-h-[200px]">
                            <h3 className="text-navy-900 font-serif text-xl font-bold mb-2">Share Your Story</h3>
                            <p className="text-charcoal-600 text-xs mb-4">Tag us #JagannathDarshan2026 to be featured.</p>
                  
                        </div>
                    </div>
                    <div className="masonry-item relative group overflow-hidden rounded-2xl">
                        <Image
                            alt="Premium AC Fleet Vehicle for Odisha tour"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMgiDZ0K6cPYYZvTB3GfkxgO8y3t5YEemuKxhJgDB4zsWPc_jbeBiEowXXu7DcK3rpwFJOOQd6CpQ7IEACJ7LTrSxUkiEpmCPro-1RZk9RVZgO8O-41OuXmoqW9J590cEyoMPncvDvbLk61G4w85s1DXD_2QzCaQF1vN5W9kRSX_0Cf9hb3fVhPmwTvjsyAWwpE7Ti8o7vG7V82SSrYwCmdSZEnCZT4GhujIs2IFRqsm8wbx9wF3iSwckU52e62O267wV2Dc7Aw"
                            width={400}
                            height={520}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-xs font-medium tracking-wide">Premium Fleet</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
}
