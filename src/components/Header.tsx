"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { NAV } from "@/lib/nav";
import { Logo } from "./Logo";
import { button, Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const toggle = () => setOpen((value) => !value);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-16 items-center gap-6 md:h-[72px]">
        <a href="/#top" aria-label={`${COMPANY.name}, на главную`} onClick={close}>
          <Logo />
        </a>

        <nav className="ml-auto hidden items-center gap-7 text-[15px] lg:flex" aria-label="Разделы">
          {NAV.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-ink-soft transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={COMPANY.phoneHref} className="ml-auto hidden flex-col items-end leading-tight md:flex lg:ml-0">
          <span className="text-[15px] font-semibold whitespace-nowrap tabular-nums">{COMPANY.phone}</span>
          <span className="text-xs text-ink-mute">{COMPANY.hours}</span>
        </a>

        {/* Обёртка, а не hidden на самой ссылке: у кнопки свой display, и они бы спорили. */}
        <div className="hidden sm:ml-auto sm:block md:ml-0">
          <a href="/#booking" className={`${button.base} ${button.primary} !min-h-11 !px-5`}>
            Записаться
          </a>
        </div>

        <div className="ml-auto flex items-center gap-1 sm:ml-0 lg:hidden">
          <a
            href={COMPANY.phoneHref}
            className="grid size-11 place-items-center rounded-[10px] hover:bg-ground md:hidden"
            aria-label={`Позвонить: ${COMPANY.phone}`}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-[10px] hover:bg-ground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={toggle}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white lg:hidden" aria-label="Разделы">
          <Container className="flex flex-col py-3">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-line/70 py-3.5 text-lg font-medium last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a href="/#booking" onClick={close} className={`${button.base} ${button.primary} mt-3 sm:hidden`}>
              Записаться на ремонт
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
