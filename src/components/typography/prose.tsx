import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm max-w-none prose-p:text-text-foreground prose-headings:text-text prose-ul:text-text-foreground prose-li:text-text-foreground"
      )}
    >
      {children}
    </div>
  );
}
