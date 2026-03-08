"use client";
import { Heading } from "@/components/typography";
import { tech_stack } from "@/constants/tech-stack";

export const TechStack = () => {
  return (
    <div className="mt-8">
      <Heading as="h3" variant="h3">
        Tech Stack
      </Heading>
      {Object.entries(tech_stack).map(([category, items]) => (
        <div key={category} className="mt-5">
          <Heading as="h4" variant="h4" className="mb-3">
            {category}
          </Heading>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1 text-neutral-600 border border-neutral-200 bg-gray-50 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
