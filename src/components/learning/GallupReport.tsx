"use client";
import Image from "next/image";

export const GallupReport = () => {
  return (
    <>
      <div className="max-w-2xl">
        <div className="overflow-auto max-h-96 mt-2 mb-2">
          {" "}
          <Image
            src="/images/learning/gallup.jpg"
            alt="gallup"
            height={800}
            width={800}
            className="object-cover object-left-top w-full rounded-md mt-2 justify-start"
          />
        </div>
      </div>
    </>
  );
};
