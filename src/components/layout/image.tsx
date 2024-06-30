"use client";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  position?: string;
  className?: string;
};

export const ImageLayout = ({
  src,
  alt,
  width = "auto",
  height = "auto",
  position = "relative",
  className = "",
}: CustomImageProps) => {
  return (
    <div className="flex justify-start">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="rounded-md"
      />
    </div>
  );
};
