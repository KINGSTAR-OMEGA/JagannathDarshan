import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.jagannathdarshan.in',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://www.jagannathdarshan.in/puri-darshan-tour',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: 'https://www.jagannathdarshan.in/konark-sun-temple-tour',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: 'https://www.jagannathdarshan.in/chilika-lake-trip',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: 'https://www.jagannathdarshan.in/bhubaneswar-sightseeing',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: 'https://www.jagannathdarshan.in/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.70,
        },
    ];
}
