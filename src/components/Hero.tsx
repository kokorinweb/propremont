import { Clock, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { EstimatePrinter } from "./EstimatePrinter";
import { button, Container } from "./ui";

/**
 * Первый экран — пакет на всю ширину. На телефоне порядок: заголовок, кнопка, выбор,
 * этикетка, адрес; на десктопе выбор уходит в левую колонку, справа — принтер целиком.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="zip bg-esd text-ink">
      <Container className="grid grid-cols-1 gap-8 pt-14 pb-10 sm:pt-16 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-12 lg:gap-y-9 lg:pt-16 lg:pb-14">
        <div className="min-w-0 lg:col-span-7">
          <h1
            id="hero-title"
            className="display text-[2.65rem] sm:text-[4.4rem] lg:text-[4.2rem] xl:text-[4.85rem]"
          >
            Ремонт телефонов во&nbsp;Владивостоке
          </h1>
          <p className="mt-5 max-w-lg text-lg text-pretty text-esd-ink">
            Называем цену после бесплатной диагностики, печатаем её в&nbsp;квитанции и&nbsp;больше
            не&nbsp;меняем.
            <span className="hidden sm:inline"> Большинство ремонтов делаем при вас, от&nbsp;30&nbsp;минут.</span>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#booking" className={`${button.base} ${button.primary}`}>
              Записаться на ремонт
            </a>
            {/* На телефоне звонок уже в нижней панели — второй кнопкой не дублируем. */}
            <div className="hidden sm:block">
              <a href={COMPANY.phoneHref} className={`${button.base} ${button.outline}`}>
                <Phone className="size-4" aria-hidden />
                Позвонить
              </a>
            </div>
          </div>
        </div>

        <EstimatePrinter
          controlsClassName="min-w-0 lg:col-span-7 lg:row-start-2 lg:max-w-xl"
          printerClassName="min-w-0 lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1"
        />

        <ul className="space-y-2 text-sm text-esd-ink lg:col-span-7 lg:row-start-3">
          <li className="flex items-center gap-2.5">
            <Clock className="size-4 shrink-0" aria-hidden />
            {COMPANY.hours}
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {COMPANY.place}
          </li>
        </ul>
      </Container>
    </section>
  );
}
