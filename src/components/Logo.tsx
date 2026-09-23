import { COMPANY } from "@/lib/company";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="10" className="fill-brand" />
      <rect x="11" y="6.5" width="14" height="23" rx="3.5" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M18 13.5v7M14.5 17h7" stroke="var(--color-mint)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="18" cy="26" r="1" fill="#fff" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span translate="no" className={`text-[19px] font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          {COMPANY.name}
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold tracking-[0.16em] uppercase ${light ? "text-white/60" : "text-ink-mute"}`}
        >
          {COMPANY.descriptor}
        </span>
      </span>
    </span>
  );
}
