"use client";

import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";
import {
  DIAGNOSTICS_INFO,
  formatPrice,
  getBrand,
  isReading,
  OTHER_BRANDS,
  priceListCode,
  PRICES,
  SERVICES,
} from "@/lib/prices";
import { DIAGNOSTICS, type ServiceChoice } from "@/lib/request";
import { Barcode } from "./Barcode";
import { useBooking } from "./BookingContext";
import { BrandSwitch } from "./BrandSwitch";
import { Container } from "./ui";

export function Prices() {
  const { brand, selectBrand, book } = useBooking();
  const brandName = getBrand(brand)?.name ?? "";

  return (
    <section id="prices" aria-labelledby="prices-title" className="pb-20 md:pb-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <h2 id="prices-title" className="display text-[2.75rem] sm:text-6xl">
            Цены на ремонт
          </h2>
          <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">
            Мы указываем цены «от». Точную сумму назовём после бесплатной диагностики: она зависит от
            модели телефона и детали, оригинал или копия.
          </p>
          <div className="mt-8">
            <p className="field mb-2 text-ink-mute">Ваш телефон</p>
            <BrandSwitch name="prices-brand" value={brand} onChange={selectBrand} label="Телефон для прайса" />
          </div>
          <p className="mt-6 text-sm text-pretty text-ink-soft">
            Чиним и другие телефоны: {OTHER_BRANDS}. Напишите модель в{" "}
            <a href={COMPANY.telegram} className="font-semibold text-ink underline">
              Telegram
            </a>{" "}
            или{" "}
            <a href={COMPANY.whatsapp} className="font-semibold text-ink underline">
              WhatsApp
            </a>
            , и мы назовём цену.
          </p>
        </div>

        {/* Прайс печатается как чек: название, выноска, цена. */}
        <div className="label mx-auto w-full max-w-[36rem] px-4 py-7 sm:px-8 sm:py-9 lg:col-span-7 lg:mr-0">
          <header className="text-center">
            <p className="display text-3xl">{COMPANY.name}</p>
            <p className="mt-1.5 text-xs text-ink-mute">
              {COMPANY.street} · {COMPANY.place}
            </p>
            <p className="field mt-4">Прайс · {brandName} · цены «от»</p>
          </header>

          <div className="my-5 border-t border-dashed border-ink/30" />

          <ul aria-label={`Цены на ремонт ${brandName}`}>
            <ReceiptLine
              title="Диагностика"
              time={DIAGNOSTICS_INFO.time}
              note="находим причину"
              price={formatPrice(DIAGNOSTICS_INFO.price)}
              onBook={() => book(DIAGNOSTICS.id)}
            />
            {SERVICES.map((service) => (
              <ReceiptLine
                key={service.id}
                title={service.title}
                time={service.time}
                warranty={service.warranty === "—" ? undefined : service.warranty}
                price={`от ${formatPrice(PRICES[brand][service.id])}`}
                onBook={() => book(service.id as ServiceChoice)}
              />
            ))}
          </ul>

          <div className="my-5 border-t border-dashed border-ink/30" />

          <p className="text-center text-sm text-pretty text-ink-soft">
            Цену фиксируем в квитанции до начала ремонта.
          </p>
          <div className="mt-5 flex flex-col items-center">
            <Barcode value={priceListCode(brand)} height={36} />
            <p className="readout mt-1 text-[11px] tracking-[0.12em]">{priceListCode(brand)}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ReceiptLine({
  title,
  time,
  warranty,
  note,
  price,
  onBook,
}: {
  title: string;
  time: string;
  warranty?: string;
  note?: string;
  price: string;
  onBook: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onBook}
        aria-label={`Записаться: ${title}, ${price}`}
        className="group -mx-2 flex w-[calc(100%+1rem)] flex-col gap-1 rounded-md px-2 py-3 text-left transition-colors duration-200 hover:bg-ground focus-visible:bg-ground"
      >
        <span className="flex w-full items-baseline gap-2">
          <span className="font-semibold">{title}</span>
          <span aria-hidden className="leader" />
          <span className="display text-[1.6rem] whitespace-nowrap">{price}</span>
        </span>
        <span className="flex w-full items-center justify-between gap-3 text-xs">
          <span className="text-ink-mute">
            <span className="readout">{time}</span>
            {warranty && (
              <>
                {" · гарантия "}
                <span className={isReading(warranty) ? "readout" : ""}>{warranty}</span>
              </>
            )}
            {note && ` · ${note}`}
          </span>
          <span className="flex items-center gap-1 font-semibold whitespace-nowrap transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
            Записаться
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
        </span>
      </button>
    </li>
  );
}
