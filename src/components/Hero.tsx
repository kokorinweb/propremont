import { Clock, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { DiagnosticConsole } from "./DiagnosticConsole";
import { button, Container } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-3 sm:pt-5">
      <Container>
        <div className="on-dark rounded-2xl bg-brand-deep text-screen-ink">
          <div className="grid grid-cols-1 gap-8 p-5 pt-7 sm:gap-10 sm:p-8 sm:pt-12 lg:grid-cols-12 lg:gap-x-8 lg:p-10 xl:gap-x-10 xl:p-12">
            <div className="flex min-w-0 flex-col justify-center lg:col-span-5">
              <h1
                id="hero-title"
                className="text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-[3.1rem] xl:text-[3.4rem]"
              >
                Ремонт телефонов во Владивостоке
              </h1>
              <p className="mt-4 max-w-md text-base text-pretty text-screen-soft sm:mt-5 sm:text-lg">
                Цену называем после бесплатной диагностики и&nbsp;записываем в&nbsp;квитанцию — дальше она
                не&nbsp;меняется.
                <span className="hidden sm:inline"> Большинство ремонтов делаем при вас, от&nbsp;30&nbsp;минут.</span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <a href="/#booking" className={`${button.base} ${button.light}`}>
                  Записаться на ремонт
                </a>
                {/* На телефоне звонок уже в нижней панели — второй кнопкой не дублируем. */}
                <div className="hidden sm:block">
                  <a href={COMPANY.phoneHref} className={`${button.base} ${button.outlineLight}`}>
                    <Phone className="size-4" aria-hidden />
                    Позвонить
                  </a>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-screen-soft sm:mt-8">
                <li className="flex items-center gap-2.5">
                  <Clock className="size-4 shrink-0" aria-hidden />
                  {COMPANY.hours}
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 shrink-0" aria-hidden />
                  {COMPANY.place}
                </li>
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <DiagnosticConsole />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
