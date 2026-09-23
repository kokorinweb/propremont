import { COMPANY } from "@/lib/company";
import { isReading } from "@/lib/prices";
import { Container, SectionHeading, StatusDot } from "./ui";

const STEPS = [
  {
    title: "Диагностика",
    meta: "15 мин · 0 ₽",
    text: "Находим причину, а не угадываем. Откажетесь от ремонта — ничего не платите.",
  },
  {
    title: "Цена в квитанции",
    meta: "до начала работ",
    text: "Называем сумму, срок и деталь — оригинал или копия. Записываем в квитанцию и без вашего «да» не начинаем.",
  },
  {
    title: "Ремонт при вас",
    meta: "от 30 мин",
    text: "Работаем за стеклом: можно смотреть или подождать в ТЦ. Старую деталь отдаём вам.",
  },
  {
    title: "Проверка и гарантия",
    meta: "до 6 мес.",
    text: "Проверяем связь, камеру, зарядку и датчики. Выдаём гарантийный талон и дублируем его в мессенджер.",
  },
];

export function Process() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="how-title"
          title="Как проходит ремонт"
          lead="Четыре шага, и на каждом понятно, что происходит. Согласованная цена после этого не меняется."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <ol className="lg:col-span-7">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
                {index < STEPS.length - 1 && (
                  <span aria-hidden className="absolute top-11 bottom-1 left-[19px] w-px bg-line" />
                )}
                <span className="readout grid size-10 shrink-0 place-items-center rounded-full bg-brand text-sm font-medium text-white">
                  {index + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xl font-semibold tracking-[-0.015em]">
                    {step.title}
                    <span className={`text-sm font-normal text-brand ${isReading(step.meta) ? "readout" : ""}`}>{step.meta}</span>
                  </h3>
                  <p className="mt-2 max-w-lg text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="lg:col-span-5">
            <Receipt />
            <figcaption className="mt-4 max-w-md text-sm text-pretty text-ink-mute">
              Пример квитанции. Найдём при ремонте ещё поломку — сначала позвоним: без вашего согласия
              сумма не меняется.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

const RECEIPT_ROWS = [
  ["Телефон", "Samsung Galaxy A54"],
  ["Неисправность", "быстро садится"],
  ["Работа", "замена аккумулятора"],
  ["Срок", "30 мин"],
  ["Гарантия", "6 месяцев"],
];

/** Квитанция — доказательство главного обещания: цена записана до ремонта. */
function Receipt() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_-18px_rgb(7_43_46_/_0.28)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">Квитанция</p>
          <p className="mt-0.5 text-sm text-ink-mute">
            {COMPANY.name} · бутик 221
          </p>
        </div>
        <p className="readout text-sm text-ink-soft">№ П-204518</p>
      </div>

      <dl className="mt-6 border-t border-dashed border-line text-[15px]">
        {RECEIPT_ROWS.map(([term, value]) => (
          <div key={term} className="flex justify-between gap-4 border-b border-dashed border-line py-2.5">
            <dt className="text-ink-mute">{term}</dt>
            <dd className="text-right">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex items-end justify-between gap-4">
        <p className="text-ink-mute">Итого</p>
        <p className="readout text-3xl font-medium">2 400 ₽</p>
      </div>
      <p className="mt-3 flex items-center justify-end gap-2 text-sm font-medium text-brand">
        <StatusDot tone="ok" />
        Цена зафиксирована до начала ремонта
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 text-xs text-ink-mute">
        <p className="border-t border-ink/30 pt-1.5">Подпись мастера</p>
        <p className="border-t border-ink/30 pt-1.5">Подпись клиента</p>
      </div>
    </div>
  );
}
