import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { activityTimeline } from "@/constants/activity";
import { Container } from "@/components/layout";
import { Heading, Paragraph } from "@/components/typography";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function generateStaticParams() {
  return activityTimeline.map((activity) => ({ slug: activity.slug }));
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activityTimeline.find((a) => a.slug === slug);

  if (!activity) return notFound();

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            href="/activities"
            aria-label="Go back to activities"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
          </Link>

          <Heading className="py-4">{activity.title}</Heading>

          {activity.thesis && (
            <Paragraph weight="semibold" className="text-primary mb-2">
              {activity.thesis}
            </Paragraph>
          )}

          <Paragraph className="text-zinc-400 mb-4">{activity.date}</Paragraph>

          <div className="flex gap-2 mb-4">
            {activity.tags?.map((tag, i) => (
              <span
                key={`tag-${i}`}
                className="text-sm px-3 py-1 text-neutral-600 border border-neutral-200 bg-gray-50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Image
            src={activity.image}
            alt={activity.title}
            width={800}
            height={600}
            className="mt-2 rounded-lg"
          />
        </header>

        <div className="mt-8 space-y-4">
          {activity.content ? (
            activity.content.map((paragraph, i) => (
              <Paragraph key={`p-${i}`}>{paragraph}</Paragraph>
            ))
          ) : (
            <Paragraph>{activity.description}</Paragraph>
          )}
        </div>
      </article>
    </Container>
  );
}
