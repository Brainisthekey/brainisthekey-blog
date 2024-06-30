"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

const CalSans = localFont({
  src: [{ path: "../../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

const headingVariants = cva(
  "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-text to-text-foreground",
  {
    variants: {
      variant: {
        h1: "text-xl md:text-2xl lg:text-4xl",
        h2: "text-lg md:text-xl lg:text-3xl",
        h3: "text-base md:text-lg lg:text-2xl",
        h4: "text-base md:text-lg lg:text-2xl",
        h5: "text-base md:text-lg lg:text-2xl",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof JSX.IntrinsicElements;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, as: Tag = "h1", ...props }, ref) => {
    return (
      <Tag
        className={twMerge(
          CalSans.className,
          headingVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
