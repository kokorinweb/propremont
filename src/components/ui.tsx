import type { ReactNode } from "react";

export const button = {
  base: "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
  primary: "bg-brand text-white hover:bg-brand-dark",
  light: "bg-white text-brand-deep hover:bg-brand-soft",
  outlineLight: "border border-screen-ink/30 text-screen-ink hover:border-screen-ink/70 hover:bg-screen-ink/5",
  outline: "border border-line bg-white text-ink hover:border-brand hover:text-brand",
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
    <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className="text-3xl font-bold tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.1]">
          {title}
        </h2>
        {lead && <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">{lead}</p>}
      </div>
      {aside}
    </div>
  );
}

/** Точка статуса прибора: мятная — исправно, янтарная — требует ремонта. */
export function StatusDot({ tone = "ok", className = "" }: { tone?: "ok" | "fault" | "idle"; className?: string }) {
  const color = tone === "ok" ? "bg-mint" : tone === "fault" ? "bg-amber" : "bg-screen-soft/50";
  return <span aria-hidden className={`inline-block size-2 shrink-0 rounded-full ${color} ${className}`} />;
}
