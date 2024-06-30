"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
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
          <Paragraph weight="semibold">{item.title}</Paragraph>
          <Paragraph className="mb-4">{item.description}</Paragraph>

          {item.responsibilities.map((responsibility, index) => (
            <Step key={responsibility}>{responsibility}</Step>
          ))}
          <Paragraph weight="semibold" className="mb-1">
            Tech Stack
          </Paragraph>
          <Paragraph>{item.tech_stack}</Paragraph>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-2 items-start my-2">
      <div className="flex-shrink-0 mt-1">
        <IconCircleCheckFilled className="h-4 w-4 text-primary" />
      </div>
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
