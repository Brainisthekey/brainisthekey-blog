"use client";
import clsx from "clsx";
import { useEffect, Children, useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeWindow = ({ children }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    // Prism.highlightAll();
  }, []);

  let child = Children.only(children);

  const [buttonText, setButtonText] = useState("Copy");
  const childRef = useRef<any>(null);

  const handleClick = (e: any) => {
    if (childRef.current) {
      const textToCopy = childRef.current.innerText;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setButtonText("Copied!");
          setTimeout(() => {
            setButtonText("Copy");
          }, 1000);
        })
        .catch((err) => {
          console.error("Error copying text to clipboard:", err);
        });
    }
  };

  return (
    isClient && (
      <div
        className={clsx(
          "rounded-md w-auto overflow-hidden flex flex-col my-5 prose prose-sm ",
          "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400",
          // headings
          "prose-headings:scroll-mt-28  prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
          // lead
          "prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
          // links
          "prose-a:font-semibold dark:prose-a:text-sky-400",
          // link underline
          "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]",
          // pre
          "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10",
          // hr
          "dark:prose-hr:border-slate-800",
          "text-xl",
          "relative"
        )}
      >
        <div>
          <button
            onClick={handleClick}
            className="group cursor-pointer rounded-full p-px text-xs font-semibold leading-6 shadow-xl shadow-zinc-950 text-white absolute top-4 right-4"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              {buttonText}
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
        <div ref={childRef} className="-mt-1">
          <SyntaxHighlighter language="typescript" style={oneDark}>
            {children.props.children.props.children}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  );
};
