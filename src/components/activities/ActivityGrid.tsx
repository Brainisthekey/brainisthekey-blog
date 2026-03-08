"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { activityTimeline } from "@/constants/activity";
import { Paragraph, Heading } from "@/components/typography";

const ALL_TAG = "All";

const tagOrder = [
  ALL_TAG,
  "Public Speech",
  "Event",
  "Workshop",
  "Tech Article",
];

export const ActivityGrid = () => {
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const filtered =
    activeTag === ALL_TAG
      ? activityTimeline
      : activityTimeline.filter((item) => item.tags?.includes(activeTag));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {tagOrder.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-neutral-800 text-white border-neutral-700"
                : "bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, index) => (
          <Link
            href={`/activities/${item.slug}`}
            key={`activity-${index}`}
            className="rounded-lg border border-neutral-200 bg-gray-50 overflow-hidden flex flex-col transition-shadow hover:shadow-md"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <Paragraph size="xs" className="text-neutral-400">
                  {item.date}
                </Paragraph>
                <div className="flex gap-1.5">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={`tag-${i}`}
                      className="text-xs px-2 py-0.5 text-text-foreground border border-neutral-200 bg-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Heading as="h5" variant="h5" className="text-primary mb-1">
                {item.title}
              </Heading>
              {item.thesis && (
                <Paragraph weight="semibold" size="sm" className="mb-1">
                  {item.thesis}
                </Paragraph>
              )}
              <Paragraph size="sm" className="text-neutral-500 line-clamp-3">
                {item.description}
              </Paragraph>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
