import { MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY } from "@/lib/company";

const secondary =
  "flex min-h-12 items-center justify-center gap-1.5 rounded-[10px] border border-ink/20 text-sm font-semibold text-ink";

/** Связь в одно касание на телефоне: закреплена снизу, на широких экранах не нужна. */
export function MobileBar() {
  return (
    <nav
      aria-label="Быстрая связь"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.35fr_1fr_1fr] gap-2 border-t border-line bg-white px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <a
        href={COMPANY.phoneHref}
        className="flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-ink text-sm font-semibold text-white"
      >
        <Phone className="size-4" aria-hidden />
        Позвонить
      </a>
      <a href={COMPANY.telegram} className={secondary}>
        <Send className="size-4" aria-hidden />
        Telegram
      </a>
      <a href={COMPANY.whatsapp} className={secondary}>
        <MessageCircle className="size-4" aria-hidden />
        WhatsApp
      </a>
    </nav>
  );
}
