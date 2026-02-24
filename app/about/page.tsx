import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.jagannathdarshan.in'),
    title: 'About Us | Jagannath Darshan Tours — Since 2010, Puri Odisha',
    description:
        'Jagannath Darshan Tours — trusted Puri tour operator since 2010. 500+ monthly yatras, 4.9 rating, expert local guides. Based in Puri, Odisha. Learn about our story and mission.',
    keywords: [
        'Jagannath Darshan Tours about',
        'Puri tour operator since 2010',
        'trusted Odisha travel company',
        'Puri travel agency',
        'Odisha pilgrimage specialists',
    ],
    alternates: { canonical: '/about' },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.jagannathdarshan.in/about',
        siteName: 'Jagannath Darshan Tours',
        title: 'About Jagannath Darshan Tours | Puri\'s Trusted Travel Partner Since 2010',
        description: 'Meet the team behind Odisha\'s premier pilgrimage travel service. 15+ years, 500+ yatras monthly, 4.9 star rating.',
        images: [{ url: '/Web_Hero.png', width: 1200, height: 630, alt: 'Jagannath Darshan Tours — About Us' }],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://www.jagannathdarshan.in/about#webpage',
            url: 'https://www.jagannathdarshan.in/about',
            name: 'About Jagannath Darshan Tours',
            isPartOf: { '@id': 'https://www.jagannathdarshan.in/#organization' },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jagannathdarshan.in' },
                    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.jagannathdarshan.in/about' },
                ],
            },
        },
        {
            '@type': 'AboutPage',
            name: 'About Jagannath Darshan Tours',
            url: 'https://www.jagannathdarshan.in/about',
            description: 'Jagannath Darshan Tours is a family-owned travel service based in Puri, Odisha, providing premium pilgrimage and sightseeing tours since 2010.',
            about: { '@id': 'https://www.jagannathdarshan.in/#organization' },
        },
    ],
};

const milestones = [
    { year: '2010', event: 'Founded', desc: 'One vehicle. One devotee at a time.' },
    { year: '2014', event: 'Expanded', desc: 'Konark, Chilika & full Odisha coverage.' },
    { year: '2018', event: '200+ Yatras/mo', desc: 'Growth through word of mouth alone.' },
    { year: '2022', event: 'Fleet Upgrade', desc: 'Latest Innovas & sanitization protocols.' },
    { year: '2024', event: '500+ Yatras/mo', desc: '4.9 stars. 15 years. Still growing.' },
];

const principles = [
    {
        num: '01',
        title: 'Truth in Pricing',
        body: 'We quote what we charge. There are no fuel surcharges, no "extra km" surprises, no hidden GST additions at the end. What you see is exactly what you pay — this is non-negotiable for us.',
    },
    {
        num: '02',
        title: 'The Journey is Sacred',
        body: 'A pilgrimage is not a transaction. Our drivers are trained to understand the significance of the yatra — the silences needed, the stops that matter, the pace that the Lord deserves.',
    },
    {
        num: '03',
        title: 'Local Expertise, Not Tour Scripts',
        body: 'Born and raised in Puri, our team knows the real darshan spots, the quiet ghats at sunrise, the best prasad, and the shortcuts the agencies don\'t know. You travel with insiders.',
    },
    {
        num: '04',
        title: 'Always Reachable',
        body: 'Travel doesn\'t follow office hours. Before booking, during your yatra, or at 11 PM when your cab hasn\'t arrived — we pick up. Every single time.',
    },
];

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Header />
            <main className="w-full">

                {/* ── HERO — Asymmetric split, no image, pure typography ── */}
                <section className="min-h-screen bg-navy-900 flex flex-col justify-between px-6 lg:px-12 pt-32 pb-16 relative overflow-hidden">
                    {/* Decorative large numeral */}
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[22rem] font-serif font-bold text-white/[0.03] select-none leading-none pointer-events-none hidden lg:block">
                        15
                    </div>

                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-white/40 text-xs">
                            <li><a href="/" className="hover:text-champagne-400 transition-colors">Home</a></li>
                            <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                            <li className="text-champagne-400">About</li>
                        </ol>
                    </nav>

                    <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-end">
                            {/* Left — headline */}
                            <div>
                                <p className="text-champagne-400 text-[0.65rem] font-bold tracking-[0.35em] uppercase mb-8">
                                    Puri, Odisha · Est. 2010
                                </p>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[0.95] tracking-tight">
                                    We serve<br />
                                    <em className="not-italic text-champagne-400">the Lord&apos;s</em><br />
                                    devotees.
                                </h1>
                            </div>
                            {/* Right — descriptor + stats row */}
                            <div className="lg:pb-4">
                                <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md">
                                    Not a corporation. Not a booking platform. A family from Puri that has been accompanying pilgrims to Jagannath&apos;s darshan — one yatra at a time — since 2010.
                                </p>
                                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                                    <div>
                                        <p className="text-4xl font-serif text-champagne-400 mb-1">15+</p>
                                        <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">Years</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-serif text-champagne-400 mb-1">500+</p>
                                        <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">Monthly Yatras</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-serif text-champagne-400 mb-1">4.9</p>
                                        <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom scroll hint */}
                    <div className="flex items-center gap-3 text-white/30 text-xs uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm animate-bounce">keyboard_arrow_down</span>
                        Our Story
                    </div>
                </section>

                {/* ── PULL QUOTE — Full bleed, large editorial quote ── */}
                <section className="bg-champagne-50 py-24 px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        <span className="text-[6rem] font-serif leading-none text-champagne-300 block -mb-6">&ldquo;</span>
                        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy-900 leading-[1.2] font-normal mb-10">
                            The journey to the Lord should be{' '}
                            <em className="italic text-champagne-600">free of worldly worry</em>{' '}
                            — that is why we exist.
                        </blockquote>
                        <cite className="not-italic text-charcoal-400 text-sm uppercase tracking-widest">
                            — Jagannath Darshan Tours, Founded 2010
                        </cite>
                    </div>
                </section>

                {/* ── PRINCIPLES — Full-width numbered list, no cards ── */}
                <section className="bg-white py-32 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
                            {/* Sticky label */}
                            <div className="lg:sticky lg:top-32 lg:self-start">
                                <p className="text-champagne-600 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-4">Our Principles</p>
                                <h2 className="text-4xl font-serif text-navy-900 leading-tight">
                                    How we do<br />
                                    <em className="italic font-light">things differently.</em>
                                </h2>
                            </div>
                            {/* Principles list */}
                            <div className="divide-y divide-charcoal-100">
                                {principles.map((p) => (
                                    <div key={p.num} className="py-10 group flex gap-8 items-start">
                                        <span className="text-[0.65rem] text-charcoal-300 font-bold tracking-widest pt-1 flex-shrink-0 group-hover:text-champagne-600 transition-colors">
                                            {p.num}
                                        </span>
                                        <div>
                                            <h3 className="text-xl font-serif text-navy-900 mb-3 group-hover:text-champagne-700 transition-colors">{p.title}</h3>
                                            <p className="text-charcoal-500 font-light text-sm leading-relaxed">{p.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TIMELINE — Horizontal scrolling year markers ── */}
                <section className="bg-navy-900 py-32 px-6 lg:px-12 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-champagne-400 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-4">Our History</p>
                        <h2 className="text-4xl font-serif text-white mb-20">15 years, milestone by milestone.</h2>

                        {/* Timeline grid — 5 columns on desktop, stacked on mobile */}
                        <div className="relative">
                            {/* Horizontal line — desktop only */}
                            <div className="hidden lg:block absolute left-0 right-0 top-[2.4rem] h-[1px] bg-white/10" />

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
                                {milestones.map((m, i) => (
                                    <div key={i} className="relative flex flex-row lg:flex-col gap-6 lg:gap-0 group">
                                        {/* Dot */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-5 h-5 rounded-full border border-champagne-400 bg-navy-900 group-hover:bg-champagne-400 transition-colors duration-300 relative z-10" />
                                            {/* Mobile vertical line */}
                                            {i < milestones.length - 1 && (
                                                <div className="lg:hidden absolute left-2 top-5 w-[1px] h-10 bg-white/10" />
                                            )}
                                        </div>
                                        <div className="lg:mt-8">
                                            <time className="text-champagne-400 text-3xl font-serif block mb-1">{m.year}</time>
                                            <p className="text-white font-semibold text-sm mb-1">{m.event}</p>
                                            <p className="text-white/40 text-xs font-light">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BOTTOM CLOSING — Large phone number, no duplicate buttons ── */}
                <section className="bg-navy-900 py-32 px-6 lg:px-12 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-[14rem] font-serif text-white/[0.03] leading-none">ॐ</span>
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <p className="text-champagne-400 text-[0.65rem] font-bold tracking-[0.35em] uppercase mb-8">
                            Reach Us Anytime · 06:00 – 22:00
                        </p>
                        <a
                            href="tel:+919876543210"
                            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white hover:text-champagne-400 transition-colors duration-500 block mb-6"
                            aria-label="Call Jagannath Darshan Tours"
                        >
                            +91 98765 43210
                        </a>
                        <p className="text-white/30 font-light text-sm">
                            Puri, Odisha · 752001 · India
                        </p>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
}
