"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paragraph, Heading } from "@/components/typography";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { TechStack } from "@/components/about";
import { aboutData } from "@/constants/about";

export const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {aboutData.images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        {aboutData.sections.map((section, index) => (
          <div key={`section-${index}`} className="mt-4">
            <Heading as="h3" variant="h3">
              {section.title}
            </Heading>
            {section.content && (
              <Paragraph className="mt-4">{section.content}</Paragraph>
            )}
            {section.steps && (
              <div className="mt-4">
                {section.steps.map((step, stepIndex) => (
                  <Step key={`step-${stepIndex}`} step={step} />
                ))}
              </div>
            )}
          </div>
        ))}
        <TechStack />
      </div>
    </div>
  );
};

const Step = ({ step }: { step: { thesis: string; description: string } }) => {
  return (
    <div className="flex items-start my-2">
      <div className="flex-shrink-0 mt-1">
        <IconCircleCheckFilled className="h-5 w-5 text-primary" />
      </div>
      <Paragraph className="ml-4">
        <span className="font-semibold">{step.thesis}</span> {step.description}
      </Paragraph>
    </div>
  );
};
