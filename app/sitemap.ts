import { MetadataRoute } from 'next';
import { ALL_COURSE_DATA } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://healthtribe.co.in';

    const programRoutes = Object.keys(ALL_COURSE_DATA).map((id) => ({
        url: `${baseUrl}/programs/${id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const staticRoutes = [
        '',
        '/programs',
        '/contact',
        '/terms',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.5,
    }));

    return [...staticRoutes, ...programRoutes];
}
