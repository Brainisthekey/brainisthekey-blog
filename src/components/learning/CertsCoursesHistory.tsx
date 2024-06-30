"use client";
import Image from "next/image";
import { certifications } from "@/constants/certifications";
import { Paragraph } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

export const CertsCoursesHistory = () => {
  return (
    <div className="flex max-w-xl items-center justify-start ml-12">
      <Carousel className="max-w-xs md:max-w-xl max-h-64">
        <CarouselContent>
          {certifications.map((item, index) => (
            <CarouselItem className="md:basis-1/2" key={`journey-${index}`}>
              <Image
                src={item.image}
                alt={item.title}
                height={800}
                width={800}
                className="object-cover object-left-top w-full max-h-96 rounded-md mb-2 mt-2"
              />
              <Paragraph size="sm" className="text-center">
                {item.title}
              </Paragraph>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
