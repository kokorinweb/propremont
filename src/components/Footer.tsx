import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { NAV } from "@/lib/nav";
import { Logo } from "./Logo";
import { button, Container } from "./ui";

/** Страница заканчивается тем же пакетом, с которого началась: розовое поле и зиплок. */
export function Footer({ withCta = true }: { withCta?: boolean }) {
  return (
    <>
      {withCta && (
        <section aria-labelledby="final-cta-title" className="zip bg-esd text-ink">
          <Container className="flex flex-col gap-8 pt-20 pb-16 md:flex-row md:items-end md:justify-between md:pt-24 md:pb-20">
            <div>
              <h2 id="final-cta-title" className="display text-[3.3rem] sm:text-7xl lg:text-8xl">
                Вернём телефон в работу
              </h2>
              <p className="mt-5 max-w-xl text-lg text-pretty text-esd-ink">
                Приходите без записи или оставьте заявку, и мастер начнёт ремонт, как только вы придёте.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="/#booking" className={`${button.base} ${button.primary}`}>
                Записаться на ремонт
              </a>
              <a href={COMPANY.phoneHref} className={`${button.base} ${button.outline}`}>
                <Phone className="size-4" aria-hidden />
                Позвонить
              </a>
            </div>
          </Container>
        </section>
      )}

      <footer className="on-dark bg-night text-night-ink">
        <Container>
          <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Logo light />
              <p className="mt-4 max-w-xs text-sm text-night-soft">
                Ремонт телефонов во Владивостоке. {COMPANY.hours}.
              </p>
            </div>
            <nav aria-label="Разделы сайта" className="md:col-span-3">
              <ul className="space-y-2.5 text-sm">
                {NAV.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-night-soft transition-colors hover:text-night-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="space-y-2.5 text-sm text-night-soft not-italic md:col-span-4">
              <p>
                {COMPANY.city}, {COMPANY.street}
                <br />
                {COMPANY.place}
              </p>
              <p>
                <a href={COMPANY.phoneHref} className="text-night-ink tabular-nums hover:text-esd">
                  {COMPANY.phone}
                </a>
              </p>
              <p className="flex gap-4">
                <a href={COMPANY.telegram} className="hover:text-night-ink">
                  Telegram
                </a>
                <a href={COMPANY.whatsapp} className="hover:text-night-ink">
                  WhatsApp
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col gap-3 border-t border-night-line py-6 text-xs text-night-soft md:flex-row md:justify-between">
            <p>
              {COMPANY.legal.entity} · ИНН {COMPANY.legal.inn} · ОГРНИП {COMPANY.legal.ogrnip}
            </p>
            <p className="flex gap-5">
              <a href="/privacy" className="underline hover:text-night-ink">
                Политика конфиденциальности
              </a>
              <span>© 2026 {COMPANY.name}</span>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
