"use client";
import { timeline } from "@/constants/timeline";
import { Heading, Paragraph } from "@/components/typography";

export const WorkHistory = () => {
  return (
    <div className="relative border-l border-gray-200 pt-2">
      {timeline.map((item, index) => (
        <div className="mb-10 ml-6 mt-1 relative" key={`timeline-${index}`}>
          <span className="absolute w-3 h-3 bg-gray-200 rounded-full lg:mt-1.5 -ml-[1.9rem] border border-gray-500"></span>
          <Paragraph className="mb-2">{item.date}</Paragraph>
          <Heading as="h5" variant="h5" className="text-primary">
            {item.company}
          </Heading>
          <Paragraph weight="semibold" className="mb-2">
            {item.title}
          </Paragraph>
          <Paragraph className="mb-3">{item.description}</Paragraph>
          <Paragraph weight="semibold" className="mb-1">
            Tech Stack
          </Paragraph>
          <Paragraph>{item.tech_stack}</Paragraph>
        </div>
      ))}
    </div>
  );
};
