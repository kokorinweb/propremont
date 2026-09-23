import type { ReactNode } from "react";

export const button = {
  base: "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-6 text-[15px] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
  primary: "bg-ink text-white hover:bg-ink-soft",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-esd",
  outlineLight: "border border-night-ink/35 text-night-ink hover:border-night-ink hover:bg-night-ink/5",
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionHeading({
  id,
  title,
  lead,
  aside,
}: {
  id?: string;
  title: string;
  lead?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className="display text-[2.75rem] sm:text-6xl">
          {title}
        </h2>
        {lead && <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">{lead}</p>}
      </div>
      {aside}
    </div>
  );
}
