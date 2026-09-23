"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { BRANDS, DIAGNOSTICS_INFO, formatPrice, getService, PRICES, SERVICES, type BrandId } from "@/lib/prices";
import {
  CONTACT_METHODS,
  DIAGNOSTICS,
  OTHER_BRAND,
  requestSchema,
  type BrandChoice,
  type ServiceChoice,
} from "@/lib/request";
import { Barcode } from "./Barcode";
import { useBooking } from "./BookingContext";
import { button } from "./ui";

type Field = "name" | "phone" | "brand" | "consent";
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; number: string } | { kind: "failed"; message: string };

const input =
  "h-12 w-full rounded-[8px] border bg-white px-4 text-base text-ink placeholder:text-ink-mute transition-colors duration-200 focus:border-ink focus:ring-3 focus:ring-esd/60 focus:outline-none aria-[invalid=true]:border-danger";

export function BookingForm() {
  const { formBrand, formService, setFormBrand, setFormService } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState<string>(CONTACT_METHODS[0].id);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const website = new FormData(event.currentTarget).get("website") ?? "";
    const payload = { name, phone, brand: formBrand, service: formService, contact, consent, website };

    const parsed = requestSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        next[key] ??= issue.message;
      }
      setErrors(next);
      const first = (["name", "phone", "brand", "consent"] as Field[]).find((key) => next[key]);
      if (first) document.getElementById(`booking-${first}`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as { number?: string; error?: string };
      if (!response.ok || !data.number) {
        setStatus({ kind: "failed", message: data.error ?? `Не получилось отправить. Позвоните нам: ${COMPANY.phone}` });
        return;
      }
      setStatus({ kind: "sent", number: data.number });
    } catch {
      setStatus({ kind: "failed", message: `Нет связи с сервером. Позвоните нам: ${COMPANY.phone}` });
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setConsent(false);
    setStatus({ kind: "idle" });
  }

  if (status.kind === "sent") {
    // Штрихкод кодирует латиницу: «П-593256» печатается как P593256.
    const code = status.number.replace("П-", "P");
    return (
      <div className="label p-6 text-ink sm:p-9" role="status">
        <p className="field text-ink-mute">Заявка принята</p>
        <p className="display mt-2 text-6xl sm:text-7xl">{status.number}</p>
        <div className="mt-6 border-t border-dashed border-ink/25 pt-5">
          <Barcode value={code} height={48} module={2} />
          <p className="readout mt-1 text-xs tracking-[0.12em]">{code}</p>
        </div>
        <p className="mt-6 max-w-md text-ink-soft">
          Мы перезвоним в рабочее время, {COMPANY.hours.toLowerCase()}. Назовите номер заявки, если будете
          звонить сами.
        </p>
        <button type="button" onClick={reset} className={`${button.base} ${button.outline} mt-8`}>
          Отправить ещё одну
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={submit} noValidate className="label relative p-5 text-ink sm:p-8">
      <header className="mb-6 flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <span className="display text-2xl">Заявка на ремонт</span>
        <span className="field text-ink-mute">{COMPANY.name}</span>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldBox id="booking-name" label="Как к вам обращаться" error={errors.name}>
          <input
            id="booking-name"
            name="name"
            autoComplete="given-name"
            placeholder="Например, Анна"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "booking-name-error" : undefined}
            className={`${input} ${errors.name ? "" : "border-ink/25"}`}
          />
        </FieldBox>

        <FieldBox id="booking-phone" label="Телефон" error={errors.phone}>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 900 000-00-00"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "booking-phone-error" : undefined}
            className={`${input} tabular-nums ${errors.phone ? "" : "border-ink/25"}`}
          />
        </FieldBox>

        <FieldBox id="booking-brand" label="Марка телефона" error={errors.brand}>
          <select
            id="booking-brand"
            name="brand"
            value={formBrand}
            onChange={(e) => setFormBrand(e.target.value as BrandChoice)}
            aria-invalid={Boolean(errors.brand)}
            aria-describedby={errors.brand ? "booking-brand-error" : undefined}
            className={`${input} select ${errors.brand ? "" : "border-ink/25"} ${formBrand ? "" : "text-ink-mute"}`}
          >
            <option value="" disabled>
              Выберите
            </option>
            {BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
            <option value={OTHER_BRAND.id}>{OTHER_BRAND.name}</option>
          </select>
        </FieldBox>

        <FieldBox id="booking-service" label="Что случилось">
          <select
            id="booking-service"
            name="service"
            value={formService}
            onChange={(e) => setFormService(e.target.value as ServiceChoice)}
            className={`${input} select border-ink/25`}
          >
            <option value={DIAGNOSTICS.id}>{DIAGNOSTICS.title}</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </FieldBox>

        <fieldset className="sm:col-span-2">
          <legend className="field mb-2 text-ink-mute">Как с вами связаться</legend>
          <div className="grid grid-cols-3 gap-1 rounded-[10px] bg-ground p-1 ring-1 ring-line">
            {CONTACT_METHODS.map((method) => {
              const checked = method.id === contact;
              return (
                <label
                  key={method.id}
                  className={`flex min-h-11 cursor-pointer items-center justify-center rounded-[7px] px-2 text-sm font-semibold transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-ink ${
                    checked ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="contact"
                    value={method.id}
                    checked={checked}
                    onChange={() => setContact(method.id)}
                    className="sr-only"
                  />
                  {method.label}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <Estimate brand={formBrand} service={formService} />

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input
            id="booking-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "booking-consent-error" : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-ink"
          />
          <span>
            Согласен на обработку персональных данных по{" "}
            <a href="/privacy" className="font-medium text-ink underline" target="_blank">
              политике конфиденциальности
            </a>
          </span>
        </label>
        {errors.consent && (
          <p id="booking-consent-error" className="mt-2 text-sm text-danger">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Ловушка для ботов: человек это поле не видит. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Сайт
          <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className={`${button.base} ${button.primary} w-full sm:w-auto`}>
          {sending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Отправляем…
            </>
          ) : (
            <>
              Отправить заявку
              <ArrowRight className="size-4" aria-hidden />
            </>
          )}
        </button>
        <p className="text-sm text-ink-mute">Перезвоним в рабочее время</p>
      </div>

      {status.kind === "failed" && (
        <p role="alert" className="mt-4 rounded-[8px] bg-danger/8 px-4 py-3 text-sm text-danger">
          {status.message}
        </p>
      )}
    </form>
  );
}

function FieldBox({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field mb-2 block text-ink-mute">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/** Живая оценка под формой: клиент видит, во что примерно обойдётся ремонт. */
function Estimate({ brand, service }: { brand: BrandChoice | ""; service: ServiceChoice }) {
  const info = service === DIAGNOSTICS.id ? undefined : getService(service);
  let title: string | null = null;
  let reading: string | null = null;

  if (!info) {
    title = "Диагностика";
    reading = `${formatPrice(DIAGNOSTICS_INFO.price)} · ${DIAGNOSTICS_INFO.time}`;
  } else if (brand && brand !== OTHER_BRAND.id) {
    title = info.title;
    reading = `от ${formatPrice(PRICES[brand as BrandId][info.id])} · ${info.time}`;
  } else if (brand === OTHER_BRAND.id) {
    title = `${info.title}, цену назовём по модели`;
  }

  if (!title) return null;
  return (
    <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-dashed border-ink/25 pt-4 text-sm text-ink-soft">
      <span>Ориентировочно:</span>
      <span className="font-medium text-ink">{title}</span>
      {reading && <span className="readout text-ink">{reading}</span>}
    </p>
  );
}
