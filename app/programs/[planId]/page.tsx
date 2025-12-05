import { Metadata } from 'next';
import { ALL_COURSE_DATA } from '@/lib/data';
import CourseClient from './CourseClient';
import JsonLd from '@/components/JsonLd';

type Props = {
  params: Promise<{ planId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { planId } = await params;
  const course = ALL_COURSE_DATA[planId as keyof typeof ALL_COURSE_DATA];

  if (!course) {
    return {
      title: 'Program Not Found | Health Tribe',
    };
  }

  return {
    title: `${course.title} | Health Tribe`,
    description: course.tagline,
    openGraph: {
      title: course.title,
      description: course.tagline,
      images: [`/assets/plans/${course.heroImage}`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { planId } = await params;
  const course = ALL_COURSE_DATA[planId as keyof typeof ALL_COURSE_DATA];

  // While generateMetadata handles 404 title, we also need to handle it in rendering
  // The Client Component also handles it, but better to stop here if we can't find it.
  // However, I'll pass it to Client Component to keep logic similar to before, 
  // OR simply handle it here. 
  // The usage of JsonLd requires course to be defined.

  if (!course) {
    // Return early or let CourseClient handle it?
    // CourseClient handles "Course Not Found". 
    // But JsonLd needs course properties.
    return <CourseClient course={undefined as any} />;
  }

  return (
    <>
      <JsonLd course={course} />
      <CourseClient course={course} />
    </>
  );
}