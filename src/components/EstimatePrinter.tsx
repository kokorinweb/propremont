"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  DIAGNOSTICS_INFO,
  formatPrice,
  getBrand,
  getService,
  isReading,
  PRICES,
  quoteCode,
  SYMPTOMS,
} from "@/lib/prices";
import { DIAGNOSTICS } from "@/lib/request";
import { Barcode } from "./Barcode";
import { useBooking } from "./BookingContext";
import { BrandSwitch } from "./BrandSwitch";
import { button } from "./ui";

/**
 * Сигнатура страницы: посетитель выбирает телефон и поломку, принтер печатает
 * этикетку-оценку — ремонт, цена, срок, гарантия и настоящий штрихкод.
 * Отдаёт два блока сетки первого экрана: выбор и принтер — на десктопе они в разных колонках.
 */
export function EstimatePrinter({
  controlsClassName = "",
  printerClassName = "",
}: {
  controlsClassName?: string;
  printerClassName?: string;
}) {
  const { brand, selectBrand, book } = useBooking();
  const [symptomId, setSymptomId] = useState(SYMPTOMS[0]!.id);
  // Пока посетитель ничего не выбрал, этикетка уже напечатана — анимация только в ответ на выбор.
  const [prints, setPrints] = useState(0);

  const symptom = SYMPTOMS.find((s) => s.id === symptomId) ?? SYMPTOMS[0]!;
  const service = symptom.service ? getService(symptom.service) : undefined;
  const price = service ? PRICES[brand][service.id] : DIAGNOSTICS_INFO.price;
  const code = quoteCode(brand, service?.id ?? null, price);

  function pickBrand(next: typeof brand) {
    selectBrand(next);
    setPrints((n) => n + 1);
  }

  function pickSymptom(next: string) {
    setSymptomId(next);
    setPrints((n) => n + 1);
  }

  return (
    <>
      <div className={controlsClassName}>
        <p className="field mb-2 text-esd-ink">Ваш телефон</p>
        <BrandSwitch name="estimate-brand" tone="esd" value={brand} onChange={pickBrand} />

        <fieldset className="mt-5 min-w-0">
          <legend className="field mb-2 text-esd-ink">Что случилось</legend>
          <div className="flex flex-wrap gap-1.5">
            {SYMPTOMS.map((item) => {
              const checked = item.id === symptomId;
              return (
                <label
                  key={item.id}
                  className={`flex min-h-11 cursor-pointer items-center rounded-full px-3.5 text-sm font-medium transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink lg:min-h-10 ${
                    checked ? "bg-ink text-white" : "bg-white/55 text-ink ring-1 ring-ink/10 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="symptom"
                    aria-label={item.label}
                    value={item.id}
                    checked={checked}
                    onChange={() => pickSymptom(item.id)}
                    className="sr-only"
                  />
                  {item.short}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className={printerClassName}>
        {/* Принтер: корпус и передняя губа, из-под которой выходит этикетка. */}
        <div aria-hidden className="relative z-10">
          <div className="flex h-10 items-center gap-2 rounded-t-[14px] bg-ink px-4">
            <span className="h-2 w-2 rounded-full bg-esd" />
            <span className="h-1.5 w-7 rounded-full bg-white/15" />
            <span className="ml-auto h-1.5 w-12 rounded-full bg-white/15" />
          </div>
          <div className="-mx-2 flex h-4 items-center rounded-[6px] bg-black px-5">
            <span className="h-[3px] w-full rounded-full bg-white/10" />
          </div>
        </div>

        {/* Стабильная live-область: этикетка внутри пересоздаётся при каждой печати. */}
        <div aria-live="polite" className="-mt-1.5 overflow-hidden px-2.5 pb-5">
          <div key={prints} className={prints ? "feed" : undefined}>
            <article aria-label="Оценка ремонта" className="label px-4 pt-5 pb-4 sm:px-5">
              <header className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink/25 pb-2.5">
                <span className="display text-xl">Проремонт</span>
                <span className="field text-ink-mute">Оценка ремонта</span>
              </header>

              <dl className="mt-3 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-y-1.5 text-[15px]">
                <dt className="field self-center text-ink-mute">Телефон</dt>
                <dd className="font-medium">{getBrand(brand)?.name}</dd>
                <dt className="field self-center text-ink-mute">Ремонт</dt>
                <dd className="font-medium">{service ? service.title : "Бесплатная диагностика"}</dd>
              </dl>

              <div className="mt-4 border-t-2 border-ink pt-3">
                <p className="field text-ink-mute">{service ? "Цена от" : "Цена"}</p>
                <p className="display mt-1 text-[4.25rem] leading-[0.82] whitespace-nowrap sm:text-[4.75rem]">
                  {formatPrice(price)}
                </p>
              </div>

              <dl className="mt-4 grid grid-cols-[1fr_1fr_auto] gap-3 border-t border-dashed border-ink/25 pt-3">
                <div>
                  <dt className="field text-ink-mute">Срок</dt>
                  <dd className="readout mt-0.5 text-sm">{service ? service.time : DIAGNOSTICS_INFO.time}</dd>
                </div>
                <div>
                  <dt className="field text-ink-mute">Гарантия</dt>
                  {service ? (
                    <dd className={`mt-0.5 text-sm ${isReading(service.warranty) ? "readout" : ""}`}>{service.warranty}</dd>
                  ) : (
                    <dd className="mt-0.5 text-sm">—</dd>
                  )}
                </div>
                <div>
                  <dt className="field text-ink-mute">Диагностика</dt>
                  <dd className="readout mt-0.5 text-sm">0 ₽</dd>
                </div>
              </dl>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <Barcode value={code} height={40} />
                  <p className="readout mt-1 text-[11px] tracking-[0.12em]">{code}</p>
                </div>
                <p className="shrink-0 text-right text-xs leading-tight font-semibold">
                  Цену фиксируем
                  <br />
                  до начала ремонта
                </p>
              </div>
            </article>
          </div>
        </div>

        <button
          type="button"
          onClick={() => book(service ? service.id : DIAGNOSTICS.id)}
          className={`${button.base} ${button.primary} w-full`}
        >
          Записаться с этим ремонтом
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </>
  );
}
