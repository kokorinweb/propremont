import { ExternalLink } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { Barcode } from "./Barcode";
import { button, Container, SectionHeading } from "./ui";

/** Адрес как транспортная этикетка: так выглядит всё, что приходит в пункт выдачи. */
export function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="contacts-title" title="Как нас найти" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="label p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3">
              <div>
                <span className="field text-ink-mute">Пункт приёма</span>
                <p className="display mt-1 text-xl">{COMPANY.name}</p>
              </div>
              <div className="min-w-0 text-right">
                <Barcode value="VVO-LUGOVAYA-21A-221" height={28} />
                <p className="readout mt-0.5 text-[10px] tracking-[0.12em]">VVO-LUGOVAYA-21A-221</p>
              </div>
            </div>

            <p className="field mt-5 text-ink-mute">Куда</p>
            <p className="display mt-1 text-5xl sm:text-6xl">{COMPANY.street}</p>
            <p className="mt-2 text-lg text-ink-soft">
              {COMPANY.city}, {COMPANY.place}
            </p>

            <dl className="mt-6 grid gap-4 border-t border-dashed border-ink/25 pt-5 sm:grid-cols-3">
              <div>
                <dt className="field text-ink-mute">Часы</dt>
                <dd className="mt-1">
                  Ежедневно
                  <br />
                  <span className="readout">
                    {COMPANY.opensAt}–{COMPANY.closesAt}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="field text-ink-mute">Телефон</dt>
                <dd className="mt-1">
                  <a href={COMPANY.phoneHref} className="whitespace-nowrap tabular-nums hover:underline">
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="field text-ink-mute">Парковка</dt>
                <dd className="mt-1">{COMPANY.parking}</dd>
              </div>
            </dl>

            <div className="mt-7 border-t border-dashed border-ink/25 pt-6">
              <div className="flex flex-wrap gap-3">
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
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold">Как пройти внутри ТЦ</h3>
            <ol className="mt-5 border-t-2 border-ink">
              {COMPANY.howToFind.map((step, index) => (
                <li key={step} className="flex items-baseline gap-5 border-b border-line py-4">
                  <span className="display w-6 text-3xl" aria-hidden>
                    {index + 1}
                  </span>
                  <span className="text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
