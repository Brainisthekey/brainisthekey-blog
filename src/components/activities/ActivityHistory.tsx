"use client";
import Image from "next/image";
import { activityTimeline } from "@/constants/activity";
import { Paragraph, Heading } from "@/components/typography";

export const ActivityHistory = () => {
  return (
    <div className="relative border-l pt-2 mt-2">
      {activityTimeline.map((item, index) => (
        <div className="mb-10 ml-6 mt-1 relative" key={`activity-${index}`}>
          <div className="flex items-start">
            <div className="absolute lg:-left-40 w-32 text-right pr-4">
              <Paragraph>{item.date}</Paragraph>
            </div>
            <span className="absolute w-3 h-3 bg-gray-200 rounded-full lg:mt-1.5 -ml-[1.9rem] border border-gray-500"></span>
            <div className="flex flex-col p-6 rounded-lg shadow-lg bg-gray-100 min-w-sm max-w-xl ml-6 mt-8 lg:mt-0">
              <Heading as="h5" variant="h5" className="text-primary">
                {item.title}
              </Heading>
              <Image
                src={item.image}
                alt="Activity thumbnail"
                height={800}
                width={800}
                className="object-cover object-left-top w-full max-h-96 mb-4 rounded-md mt-2"
              />
              {item.thesis && (
                <Paragraph weight="semibold" className="mb-4">
                  {item.thesis}
                </Paragraph>
              )}
              <Paragraph className="mb-4">{item.description}</Paragraph>
              <div className="flex space-x-2 flex-wrap">
                {item.tags?.map((tag, index) => (
                  <span
                    key={`tag-${index}`}
                    className="text-xs px-1 py-0.5 text-text-foreground border border-neutral-200 bg-white rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
