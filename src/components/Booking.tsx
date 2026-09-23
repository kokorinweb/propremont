import { MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { BookingForm } from "./BookingForm";
import { Container } from "./ui";

const pill =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-screen-ink/25 px-4 text-sm font-medium text-screen-ink transition-colors duration-200 hover:border-screen-ink/60 hover:bg-screen-ink/5";

export function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="on-dark bg-brand-deep py-20 text-screen-ink md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 id="booking-title" className="text-3xl font-bold tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.1]">
            Запишитесь на ремонт
          </h2>
          <p className="mt-4 text-lg text-pretty text-screen-soft">
            Перезвоним в рабочее время, подтвердим цену и проверим, есть ли деталь. С записью ремонт
            начнётся сразу, как придёте.
          </p>

          <p className="mt-10 text-sm text-screen-soft">Удобнее написать самим?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={COMPANY.telegram} className={pill}>
              <Send className="size-4" aria-hidden />
              Telegram
            </a>
            <a href={COMPANY.whatsapp} className={pill}>
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </a>
            <a href={COMPANY.phoneHref} className={pill}>
              <Phone className="size-4" aria-hidden />
              <span className="tabular-nums">{COMPANY.phone}</span>
            </a>
          </div>

          <p className="mt-10 max-w-sm border-t border-screen-line pt-5 text-sm text-screen-soft">
            Без записи тоже можно: {COMPANY.hours.toLowerCase()}, {COMPANY.place}.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
