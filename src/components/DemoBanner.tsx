import { TriangleAlert } from "lucide-react";
import { SITE_IS_DEMO } from "@/lib/company";

/** Пока на сайте заглушки, посетитель должен это видеть. Выключается флагом SITE_IS_DEMO. */
export function DemoBanner() {
  if (!SITE_IS_DEMO) return null;
  return (
    <p className="flex items-center justify-center gap-2 border-b border-amber-ink/25 bg-amber/15 px-4 py-2 text-center text-[13px] text-ink">
      <TriangleAlert className="size-4 shrink-0 text-amber-ink" aria-hidden />
      Демо-версия сайта: цены, сроки, контакты и отзывы — заглушки до запуска.
    </p>
  );
}
