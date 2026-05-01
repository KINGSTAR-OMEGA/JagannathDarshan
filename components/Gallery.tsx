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
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Shri_Jagannath_temple.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Birds_eyeview_of_Chilika_Lake.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Puri_Sea_Beach_viewed_from_the_light_house.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Rath_Yatra_Puri_07-11027.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/commons/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg"
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
