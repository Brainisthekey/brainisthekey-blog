"use client";
import Image from "next/image";

export const CodeWarsStatistics = () => {
  return (
    <div className="max-w-2xl">
      <Image
        src="/images/learning/code-wars.jpg"
        alt="code-wars"
        height={800}
        width={800}
        className="object-cover object-left-top w-full max-h-96 rounded-md mb-2 mt-2"
      />
    </div>
  );
};
