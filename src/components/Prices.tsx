"use client";

import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { DIAGNOSTICS_INFO, formatPrice, getBrand, isReading, OTHER_BRANDS, PRICES, SERVICES } from "@/lib/prices";
import { DIAGNOSTICS, type ServiceChoice } from "@/lib/request";
import { useBooking } from "./BookingContext";
import { BrandSwitch } from "./BrandSwitch";
import { Container, SectionHeading } from "./ui";

const COLS = "md:grid md:grid-cols-[minmax(0,1fr)_7.5rem_8.5rem_8rem_8.5rem] md:items-center md:gap-6";

export function Prices() {
  const { brand, selectBrand, book } = useBooking();
  const brandName = getBrand(brand)?.name ?? "";

  return (
    <section id="prices" aria-labelledby="prices-title" className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeading
          id="prices-title"
          title="Цены на ремонт"
          lead="Цены «от»: точная сумма зависит от модели и детали — оригинал или копия. Называем её после бесплатной диагностики."
          aside={
            <div className="w-full md:w-[30rem]">
              <BrandSwitch name="prices-brand" value={brand} onChange={selectBrand} label="Телефон для прайса" />
            </div>
          }
        />

        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
          <div
            aria-hidden
            className={`hidden border-b border-line px-6 py-3 text-sm text-ink-mute ${COLS}`}
          >
            <span>Ремонт {brandName}</span>
            <span>Срок</span>
            <span>Гарантия</span>
            <span className="text-right">Цена</span>
            <span />
          </div>

          <ul aria-label={`Цены на ремонт ${brandName}`}>
            <PriceRow
              title="Диагностика"
              note="Находим причину и называем точную цену"
              time={DIAGNOSTICS_INFO.time}
              warranty="—"
              price={formatPrice(DIAGNOSTICS_INFO.price)}
              highlight
              onBook={() => book(DIAGNOSTICS.id)}
            />
            {SERVICES.map((service) => (
              <PriceRow
                key={service.id}
                title={service.title}
                note={"note" in service ? service.note : undefined}
                time={service.time}
                warranty={service.warranty}
                price={`от ${formatPrice(PRICES[brand][service.id])}`}
                onBook={() => book(service.id as ServiceChoice)}
              />
            ))}
          </ul>

          <p className="border-t border-line bg-white px-4 py-5 text-sm text-ink-soft sm:px-6">
            Чиним и другие телефоны: {OTHER_BRANDS}. Напишите модель в{" "}
            <a href={COMPANY.telegram} className="font-medium text-brand underline">
              Telegram
            </a>{" "}
            или{" "}
            <a href={COMPANY.whatsapp} className="font-medium text-brand underline">
              WhatsApp
            </a>{" "}
            — назовём цену.
          </p>
        </div>
      </Container>
    </section>
  );
}

function PriceRow({
  title,
  note,
  time,
  warranty,
  price,
  highlight = false,
  onBook,
}: {
  title: string;
  note?: string;
  time: string;
  warranty: string;
  price: string;
  highlight?: boolean;
  onBook: () => void;
}) {
  return (
    <li
      className={`grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 border-b border-line px-4 py-4 last:border-b-0 sm:px-6 ${COLS} ${
        highlight ? "bg-brand-soft/45" : "transition-colors duration-200 hover:bg-mist/60"
      }`}
    >
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        {note && <p className="mt-0.5 text-sm text-ink-mute">{note}</p>}
        <p className="mt-1.5 text-xs text-ink-soft md:hidden">
          <span className="readout">{time}</span>
          {warranty !== "—" && (
            <>
              {" · гарантия "}
              <span className={isReading(warranty) ? "readout" : ""}>{warranty}</span>
            </>
          )}
        </p>
      </div>
      <p className="readout hidden text-sm text-ink-soft md:block">
        <span className="sr-only">Срок: </span>
        {time}
      </p>
      <p className={`hidden text-sm text-ink-soft md:block ${isReading(warranty) ? "readout" : ""}`}>
        <span className="sr-only">Гарантия: </span>
        {warranty}
      </p>
      <p className="readout self-start text-right text-lg font-medium whitespace-nowrap md:self-center">
        <span className="sr-only">Цена: </span>
        {price}
      </p>
      <div className="col-span-2 md:col-span-1 md:text-right">
        <button
          type="button"
          onClick={onBook}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full text-sm font-semibold md:min-h-10 text-brand transition-colors hover:text-brand-dark md:border md:border-line md:bg-white md:px-4 md:hover:border-brand"
          aria-label={`Записаться: ${title}`}
        >
          Записаться
          <ArrowRight className="size-3.5" aria-hidden />
        </button>
      </div>
    </li>
  );
}
