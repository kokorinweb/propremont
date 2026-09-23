import { TriangleAlert } from "lucide-react";
import { SITE_IS_DEMO } from "@/lib/company";

/** Жёлтый стикер-предупреждение: пока на сайте заглушки, посетитель должен это видеть. */
export function DemoBanner() {
  if (!SITE_IS_DEMO) return null;
  return (
    <p className="flex items-center justify-center gap-2 bg-caution px-4 py-2 text-center text-[13px] font-medium text-ink">
      <TriangleAlert className="size-4 shrink-0" aria-hidden />
      Демо-версия сайта: цены, условия, контакты, реквизиты и отзывы пока заглушки.
    </p>
  );
}
