"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Paragraph, Heading } from "@/components/typography";
import { tech_stack } from "@/constants/tech-stack";

export const TechStack = () => {
  return (
    <div>
      <Heading as="h3" variant="h3" className="mt-4">
        Tech Stack
      </Heading>
      <Paragraph className="mt-4">
        I work with a diverse tech stack that allows me to tackle a variety of
        challenges. I enjoy both creating new solutions from scratch and diving
        into legacy code to find opportunities for improvement. I am passionate
        about using Domain Driven Design and Test Driven Development (TDD) to
        build reliable software
      </Paragraph>
      {Object.entries(tech_stack).map(([category, items]) => (
        <div key={category} className="mt-6">
          <Heading as="h3" variant="h3" className="mb-4">
            {category}
          </Heading>
          <div className="flex flex-wrap mt-4">
            {items.map((item) => (
              <Image
                src={item.src}
                key={item.src}
                width={200}
                height={200}
                alt={item.title}
                className={twMerge("object-contain mr-4 mb-4", item.className)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
