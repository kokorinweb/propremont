import { MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { BookingForm } from "./BookingForm";
import { Container } from "./ui";

const channel =
  "inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-night-ink/25 px-4 text-sm font-semibold text-night-ink transition-colors duration-200 hover:border-night-ink/70 hover:bg-night-ink/5";

export function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="on-dark bg-night py-20 text-night-ink md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="booking-title" className="display text-[2.75rem] sm:text-6xl">
            Запишитесь на ремонт
          </h2>
          <p className="mt-5 text-lg text-pretty text-night-soft">
            Мы перезвоним в рабочее время, подтвердим цену и проверим наличие детали. С записью мастер
            начнёт ремонт, как только вы придёте.
          </p>

          <p className="field mt-10 text-night-soft">Или напишите нам сами</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={COMPANY.telegram} className={channel}>
              <Send className="size-4" aria-hidden />
              Telegram
            </a>
            <a href={COMPANY.whatsapp} className={channel}>
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </a>
            <a href={COMPANY.phoneHref} className={channel}>
              <Phone className="size-4" aria-hidden />
              <span className="tabular-nums">{COMPANY.phone}</span>
            </a>
          </div>

          <p className="mt-10 max-w-sm border-t border-night-line pt-5 text-sm text-night-soft">
            Можно прийти без записи: {COMPANY.hours.toLowerCase()}, {COMPANY.place}.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
