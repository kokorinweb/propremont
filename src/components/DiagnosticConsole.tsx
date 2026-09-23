"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { DIAGNOSTICS_INFO, formatPrice, getService, isReading, PRICES, SYMPTOMS } from "@/lib/prices";
import { DIAGNOSTICS } from "@/lib/request";
import { useBooking } from "./BookingContext";
import { BrandSwitch } from "./BrandSwitch";
import { button, StatusDot } from "./ui";

/**
 * Консоль диагностики — сигнатура страницы. Посетитель называет симптом на своём языке
 * и сразу видит ремонт, цену, срок и гарантию — ещё до звонка.
 */
export function DiagnosticConsole() {
  const { brand, selectBrand, book } = useBooking();
  const [symptomId, setSymptomId] = useState(SYMPTOMS[0]!.id);

  const symptom = SYMPTOMS.find((s) => s.id === symptomId) ?? SYMPTOMS[0]!;
  const service = symptom.service ? getService(symptom.service) : undefined;
  const price = service ? PRICES[brand][service.id] : DIAGNOSTICS_INFO.price;
  const note = service && "note" in service ? service.note : undefined;

  return (
    <div className="rounded-2xl bg-brand-dark p-3 ring-1 ring-screen-line sm:p-4">
      <div className="flex items-center justify-between gap-3 px-1 pt-1 pb-3">
        <p className="text-[15px] font-semibold text-screen-ink">Оценка ремонта онлайн</p>
        <p className="hidden items-center gap-2 text-xs text-screen-soft sm:flex">
          <StatusDot tone="ok" />
          цены «от», без звонка
        </p>
      </div>

      <BrandSwitch name="console-brand" tone="dark" value={brand} onChange={selectBrand} />

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <fieldset className="min-w-0">
          <legend className="px-1 pb-2 text-sm text-screen-soft">Что случилось?</legend>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-1 sm:gap-1">
            {SYMPTOMS.map((item) => {
              const checked = item.id === symptomId;
              return (
                <label
                  key={item.id}
                  className={`flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm leading-snug transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-mint ${
                    checked
                      ? "bg-screen-ink/10 text-screen-ink ring-1 ring-screen-ink/25"
                      : "text-screen-soft hover:bg-screen-ink/5 hover:text-screen-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="symptom"
                    value={item.id}
                    checked={checked}
                    onChange={() => setSymptomId(item.id)}
                    className="sr-only"
                  />
                  <StatusDot tone={checked ? "fault" : "idle"} />
                  <span className="sm:hidden">{item.short}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div
          key={`${brand}:${symptomId}`}
          className="scan flex flex-col rounded-xl bg-brand-deep p-4 ring-1 ring-screen-line sm:p-5"
          aria-live="polite"
        >
          <div className="settle flex flex-1 flex-col">
            <p className="text-sm text-screen-soft">{service ? "Вероятный ремонт" : "Начнём с проверки"}</p>
            <p className="mt-1 text-lg leading-snug font-semibold text-screen-ink">
              {service ? service.title : "Бесплатная диагностика"}
            </p>

            <p className="readout mt-4 flex items-baseline gap-2 leading-none font-medium text-mint">
              {service && <span className="text-lg text-screen-soft">от</span>}
              <span className="text-[2.6rem] tracking-[-0.03em] whitespace-nowrap lg:text-[2.75rem]">
                {formatPrice(price)}
              </span>
            </p>

            <dl className="mt-5 divide-y divide-screen-line border-y border-screen-line text-sm">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-screen-soft">Срок</dt>
                <dd className="readout text-screen-ink">{service ? service.time : DIAGNOSTICS_INFO.time}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-screen-soft">{service ? "Гарантия" : "Дальше"}</dt>
                {service && isReading(service.warranty) ? (
                  <dd className="readout text-right text-screen-ink">{service.warranty}</dd>
                ) : (
                  <dd className="text-right text-screen-ink">{service ? service.warranty : "цена до ремонта"}</dd>
                )}
              </div>
              {service && (
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-screen-soft">Диагностика</dt>
                  <dd className="readout text-screen-ink">0 ₽</dd>
                </div>
              )}
            </dl>

            <p className="mt-4 text-sm text-pretty text-screen-soft">
              {note ? `${note}. ` : ""}
              Точную цену назовём после диагностики и запишем в квитанцию.
            </p>

          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => book(service ? service.id : DIAGNOSTICS.id)}
        className={`${button.base} ${button.light} mt-3 w-full !px-4 !text-sm whitespace-nowrap sm:!px-6 sm:!text-[15px]`}
      >
        Записаться с этим ремонтом
        <ArrowRight className="size-4" aria-hidden />
      </button>
    </div>
  );
}
