"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navlink } from "@/types/navlink";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Badge } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { Paragraph } from "@/components/typography";

const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-10 pr-10 z-[100] py-16 bg-neutral-100 sm:min-w-[20rem] min-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <div>
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <Badge href="/resume" text="Read Resume" />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-2 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-10"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-text-foreground" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-5 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-text-foreground hover:text-text transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-text"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-primary"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          height="160"
          width="160"
          className="object-cover object-top rounded-full flex-shrink-0 ring-4 ring-gradient"
        />
        <div className="flex text-sm flex-col items-center pt-2">
          <Paragraph weight="semibold" className="text-primary">
            Andrew Alieksieiev
          </Paragraph>
          <Paragraph size="sm">Principal Full Stack</Paragraph>
          <Paragraph size="sm">Software Engineer</Paragraph>
        </div>
      </div>
      <div className="flex items-center justify-center mt-1">
        {socials.map((link: Navlink) => (
          <Link
            key={link.href}
            href={link.href}
            className={twMerge(
              "text-text-foreground hover:text-text transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-md"
            )}
          >
            <link.icon className={twMerge("h-5 w-5 flex-shrink-0")} />
          </Link>
        ))}
      </div>
    </>
  );
};
