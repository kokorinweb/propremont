import { COMPANY } from "@/lib/company";

/** Знак — этикетка: розовая бирка с отверстием и штрихами кода. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect x="2" y="7" width="32" height="22" rx="4" fill="var(--color-esd)" />
      <circle cx="8.5" cy="18" r="2.4" fill="var(--color-ink)" />
      <g fill="var(--color-ink)">
        <rect x="14" y="12" width="2" height="12" />
        <rect x="17.5" y="12" width="1" height="12" />
        <rect x="20" y="12" width="3" height="12" />
        <rect x="24.5" y="12" width="1" height="12" />
        <rect x="27" y="12" width="2" height="12" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span translate="no" className={`display text-[23px] ${light ? "text-night-ink" : "text-ink"}`}>
          {COMPANY.name}
        </span>
        <span className={`mt-1 text-[11px] font-medium ${light ? "text-night-soft" : "text-ink-mute"}`}>
          {COMPANY.descriptor.toLowerCase()} · {COMPANY.city}
        </span>
      </span>
    </span>
  );
}
