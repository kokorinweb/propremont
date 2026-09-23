import { Car, Clock, ExternalLink, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { button, Container, SectionHeading } from "./ui";

export function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="contacts-title" title="Как нас найти" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-2xl p-6 ring-1 ring-line sm:p-8 lg:col-span-7">
            <p className="text-3xl font-bold tracking-[-0.025em] sm:text-4xl">{COMPANY.street}</p>
            <p className="mt-2 text-lg text-ink-soft">
              {COMPANY.city}, {COMPANY.place}
            </p>

            <ul className="mt-8 space-y-3.5 border-t border-line pt-6">
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                <span>{COMPANY.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                <a href={COMPANY.phoneHref} className="whitespace-nowrap tabular-nums hover:text-brand">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Car className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                <span>{COMPANY.parking}</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={COMPANY.maps.yandex} target="_blank" rel="noopener" className={`${button.base} ${button.primary}`}>
                Яндекс Карты
                <ExternalLink className="size-4" aria-hidden />
              </a>
              <a href={COMPANY.maps.twoGis} target="_blank" rel="noopener" className={`${button.base} ${button.outline}`}>
                2ГИС
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-mist p-6 sm:p-8 lg:col-span-5">
            <h3 className="text-xl font-semibold tracking-[-0.015em]">Как пройти внутри ТЦ</h3>
            <ol className="mt-6 space-y-5">
              {COMPANY.howToFind.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="readout grid size-8 shrink-0 place-items-center rounded-full bg-white text-sm text-brand ring-1 ring-line">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
