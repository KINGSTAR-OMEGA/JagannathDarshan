const reviews = [
    {
        name: 'Rahul Sharma',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGopyZb-_x1OcFnknauP6p2r1fY0gcfVHaDTPKOsNHdTuqNv8x7aKAS78bIkjG8NT5JzFl7WgqyatQSplXNYeOfIX7lSdI94hV74vFgv6xgwuC3fg-tOjouGpZs4LhnnKxgpO6iff1VkaBK1o5kaxK4CUXrRrsw-AFCaQ0Rq8FstwT0gySgoeRc9mP-fEhTxE98nSSaLsJlVaDmSGudLJ4W4WWSoSqRO08veaT96j7VcIaP8RXxfNnumIdxBMUoUl6X8WWfFQvyA',
        review: 'The driver Mr. Das was very polite and acted as a guide too. The car was clean and comfortable. Best service in Puri.',
    },
    {
        name: 'Anjali Gupta',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmrtcMlZTIcHdnbzLQliigWF4is0LJVcXsxPD_iVvHci37ViN6DiTN6i0p6ihV4WVoGZUtweafrwIJnszSmt3OI8SJXXo_V0NlTd4QItnQeUlD9TO23w5SJAAd7f3rpSgdb3WoyxFOFF9qS8y8AEpq7zkNB-SOUzEb5b1yUkom83QWqzqMMET2EJ4yRQO98luxUnP1GQp6FfEdyLG_8Uufad58tIB4EOAmqMTiJo16bAYfVCUkkOl0ke8xb2fO_N5qBipFt8tzzw',
        review: 'Darshan was very smooth thanks to their planning. They arranged everything for the Mahaprasad as well.',
    },
    {
        name: 'Amit Verma',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8a5K4Af98RQb08S9RD_4hSj9bySAK9270an42jpar6NX4ZAQCU8PB7Xk6S0Afv3CDXaYxCy-TTWufjE-8ekiJncT0OJCY58zCVGPn-rxGns2yJT43LnRxrs5osSbZh9tbeMWWVAmSRHAbqxMdjhGp_GQ1OWc-8gP-BVpWbUQVYCFowHS_FmC-BvD2CqOVjdspCG0tnMf8X-Pq4dhEBv3LrYma9h3kcdqgQd1MPbZUKM6BwRZlDndyq_wkhMjtTvgMn_PzMmp3w',
        review: 'Reasonable prices for Chilika trip. The boat arrangement was also handled by them perfectly. Recommended!',
    },
    {
        name: 'Sandeep Kumar',
        initials: 'SK',
        review: 'Very transparent with pricing. No hidden costs for parking or tolls, everything was clear from the start.',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-navy-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-serif">Verified Stories</h2>
                    <p className="text-charcoal-400 mt-2 text-sm font-light">Join thousands of happy pilgrims.</p>
                </div>
                <div className="hidden md:flex text-champagne-400 gap-1 items-center" aria-label="4.9 average rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                    ))}
                    <span className="text-white text-xs font-bold ml-3 tracking-wide">4.9 AVERAGE</span>
                </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-12 scrollbar-hide snap-x" role="list">
                {reviews.map((r) => (
                    <article
                        key={r.name}
                        className="min-w-[300px] bg-white/5 p-6 rounded-2xl border border-white/10 snap-center hover:bg-white/10 transition-colors"
                        role="listitem"
                        itemScope
                        itemType="https://schema.org/Review"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {r.initials ? (
                                <div className="h-10 w-10 rounded-full bg-charcoal-700 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white/20">
                                    {r.initials}
                                </div>
                            ) : (
                                <div
                                    className="h-10 w-10 rounded-full bg-charcoal-700 bg-cover bg-center ring-2 ring-white/20"
                                    style={{ backgroundImage: `url("${r.avatar}")` }}
                                    role="img"
                                    aria-label={`${r.name} avatar`}
                                ></div>
                            )}
                            <div>
                                <p className="font-bold text-xs text-white" itemProp="author">{r.name}</p>
                                <span className="text-champagne-400 text-[10px] uppercase tracking-wide">Verified Traveler</span>
                            </div>
                        </div>
                        <div className="flex text-champagne-400 text-xs mb-3 space-x-0.5" aria-label="5 stars">★★★★★</div>
                        <p className="text-charcoal-300 text-xs leading-relaxed font-light" itemProp="reviewBody">&ldquo;{r.review}&rdquo;</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
