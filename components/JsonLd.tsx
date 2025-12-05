import { ALL_COURSE_DATA } from '@/lib/data';

type CourseDataType = (typeof ALL_COURSE_DATA)[keyof typeof ALL_COURSE_DATA];

export default function JsonLd({ course }: { course: CourseDataType }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://healthtribe.co.in';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: course.title,
        description: course.tagline,
        image: [`${baseUrl}/assets/plans/${course.heroImage}`],
        offers: course.pricing.options.map((option) => ({
            '@type': 'Offer',
            price: option.price,
            priceCurrency: 'INR',
            name: option.label,
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/programs/${course.id}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
