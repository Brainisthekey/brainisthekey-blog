import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const paragraphVariants = cva("text-text-foreground", {
  variants: {
    size: {
      default: "text-sm lg:text-base",
      sm: "text-sm md:text-sm lg:text-sm",
      xs: "text-xs md:text-xs lg:text-xs",
    },
    weight: {
      normal: "font-normal",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
    weight: "normal",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, weight, ...props }, ref) => {
    return (
      <p
        className={twMerge(paragraphVariants({ size, weight }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";
