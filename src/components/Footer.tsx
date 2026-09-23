import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { NAV } from "@/lib/nav";
import { Logo } from "./Logo";
import { button, Container } from "./ui";

/** Последний экран: призыв к действию и подвал на одном тёмном поле — страница заканчивается якорем. */
export function Footer({ withCta = true }: { withCta?: boolean }) {
  return (
    <footer className="on-dark bg-brand-deep text-screen-ink">
      <Container>
        {withCta && (
          <section
            aria-labelledby="final-cta-title"
            className="flex flex-col gap-8 border-b border-screen-line py-16 md:flex-row md:items-end md:justify-between md:py-20"
          >
            <div>
              <h2 id="final-cta-title" className="text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">
                Вернём телефон в работу
              </h2>
              <p className="mt-4 max-w-xl text-lg text-pretty text-screen-soft">
                Приходите без записи или оставьте заявку — начнём, как только придёте.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="/#booking" className={`${button.base} ${button.light}`}>
                Записаться на ремонт
              </a>
              <a href={COMPANY.phoneHref} className={`${button.base} ${button.outlineLight}`}>
                <Phone className="size-4" aria-hidden />
                Позвонить
              </a>
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-screen-soft">
              Ремонт телефонов во Владивостоке. {COMPANY.hours}.
            </p>
          </div>
          <nav aria-label="Разделы сайта" className="md:col-span-3">
            <ul className="space-y-2.5 text-sm">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-screen-soft transition-colors hover:text-screen-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="space-y-2.5 text-sm text-screen-soft not-italic md:col-span-4">
            <p>
              {COMPANY.city}, {COMPANY.street}
              <br />
              {COMPANY.place}
            </p>
            <p>
              <a href={COMPANY.phoneHref} className="text-screen-ink tabular-nums hover:text-mint">
                {COMPANY.phone}
              </a>
            </p>
            <p className="flex gap-4">
              <a href={COMPANY.telegram} className="hover:text-screen-ink">
                Telegram
              </a>
              <a href={COMPANY.whatsapp} className="hover:text-screen-ink">
                WhatsApp
              </a>
            </p>
          </address>
        </div>

        <div className="flex flex-col gap-3 border-t border-screen-line py-6 text-xs text-screen-soft md:flex-row md:justify-between">
          <p>
            {COMPANY.legal.entity} · ИНН {COMPANY.legal.inn} · ОГРНИП {COMPANY.legal.ogrnip}
          </p>
          <p className="flex gap-5">
            <a href="/privacy" className="underline hover:text-screen-ink">
              Политика конфиденциальности
            </a>
            <span>© 2026 {COMPANY.name}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
