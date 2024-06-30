"use client";
import React, { useState, useEffect } from "react";
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

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    if (isClient) {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial check on component mount
    }

    return () => {
      if (isClient) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isClient]);

  return (
    <>
      <AnimatePresence>
        {(open || (isClient && window.innerWidth > 1024)) && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: -200 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="px-10 z-[100] py-16 bg-neutral-100 max-w-[20rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
            style={{ overflow: "hidden" }}
          >
            <div>
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <Badge
              href="/resume"
              text="Read Resume"
              onClick={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-2 right-6 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-10"
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
          onClick={() => setOpen(false)}
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
