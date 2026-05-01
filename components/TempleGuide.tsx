import Image from 'next/image';

const services = [
    {
        icon: 'verified_user',
        title: 'VIP Darshan Escort',
        desc: 'Navigate the crowds smoothly with an official Panda by your side, ensuring a peaceful and uninterrupted darshan.',
    },
    {
        icon: 'menu_book',
        title: 'Deep History & Mysteries',
        desc: 'Learn about the ancient traditions, the daily rituals, and the deep mysteries of the Sri Mandir directly from the source.',
    },
    {
        icon: 'self_improvement',
        title: 'Personalized Pujas',
        desc: 'Perform specific rituals and pujas for your family with complete authenticity and devotion.',
    },
    {
        icon: 'local_dining',
        title: 'Mahaprasad Arrangements',
        desc: 'Assistance with booking and arranging the divine Mahaprasad (Abhada) to take home for your loved ones.',
    },
];

export default function TempleGuide() {
    return (
        <section id="temple-guide" className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
            {/* Soft background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-champagne-50/50 rounded-l-[100px] transform translate-x-20"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white group">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Rath_Yatra_Puri_07-11027.jpg"
                            alt="Devotees at Jagannath Puri"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent flex flex-col justify-end p-8">
                            <span className="material-symbols-outlined text-champagne-400 text-4xl mb-2">temple_hindu</span>
                            <p className="text-white font-serif text-xl">Sri Mandir, Puri</p>
                            <p className="text-white/70 text-xs font-light uppercase tracking-widest mt-1">The Abode of Lord of the Universe</p>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-8 -right-8 bg-champagne-500 text-navy-900 p-6 rounded-[2rem] shadow-xl border-4 border-white max-w-[200px] transform hover:-translate-y-2 transition-transform duration-500">
                        <span className="material-symbols-outlined text-3xl mb-2">diversity_1</span>
                        <p className="font-serif font-bold text-lg leading-tight mb-1">Official Pandas</p>
                        <p className="text-[0.65rem] uppercase tracking-widest font-semibold opacity-80">Trusted Guides</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-12">
                        <h3 className="text-champagne-600 font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-4 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-champagne-400"></span>
                            Spiritual Escort
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mb-6 leading-tight">
                            A Day With <br />
                            <span className="italic text-champagne-600">Jagannath.</span>
                        </h2>
                        <p className="text-charcoal-500 text-lg font-light leading-relaxed max-w-lg">
                            Experience the divine presence without the chaos. Our official Temple Priests (Pandas) guide you through every step of your darshan, ensuring a deeply personal and spiritually fulfilling journey inside the sacred Sri Mandir.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-12">
                        {services.map((s, i) => (
                            <div key={i} className="group">
                                <div className="w-10 h-10 rounded-full bg-champagne-50 border border-champagne-200 flex items-center justify-center mb-4 group-hover:bg-champagne-500 group-hover:border-champagne-500 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-champagne-600 text-lg group-hover:text-navy-900 transition-colors duration-300">{s.icon}</span>
                                </div>
                                <h4 className="text-base font-serif font-bold text-navy-900 mb-2">{s.title}</h4>
                                <p className="text-charcoal-500 text-sm font-light leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <a 
                        href="https://wa.me/919876543210?text=Hi%2C+I+would+like+to+book+a+Temple+Panda+for+VIP+Darshan+at+Jagannath+Temple." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-champagne-600 transition-colors shadow-lg group"
                    >
                        Book Temple Priest
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
