import { isReading } from "@/lib/prices";
import { Container, StatusDot } from "./ui";

/** Правила мастерской как строки показаний: пункт, пояснение, значение. */
const RULES = [
  {
    title: "Гарантия",
    text: "Талон на бумаге и копия в мессенджере. Покрывает деталь и работу.",
    value: "до 6 мес.",
  },
  {
    title: "Запчасти",
    text: "Оригинал или копия. Честно говорим разницу — в цене, яркости экрана и сроке гарантии.",
    value: "на выбор",
  },
  {
    title: "Ремонт при вас",
    text: "Рабочее место за стеклом. Старую деталь отдаём вам.",
    value: "от 30 мин",
  },
  {
    title: "Данные",
    text: "Для большинства ремонтов пароль не нужен. Перенесём и восстановим, если попросите.",
    value: "сохраняем",
  },
  {
    title: "Оплата",
    text: "Карта, наличные, перевод или QR-код.",
    value: "любым способом",
  },
  {
    title: "Доставка и выезд",
    text: "Заберём телефон или отремонтируем на дому.",
    value: "по городу",
  },
];

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="trust-title" className="text-3xl font-bold tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.1]">
            Что входит в каждый ремонт
          </h2>
          <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">
            Не акция, а правила мастерской: одинаковые для стекла камеры и для ремонта после воды.
          </p>
        </div>

        <dl className="divide-y divide-line rounded-2xl ring-1 ring-line lg:col-span-8">
          {RULES.map((rule) => (
            <div
              key={rule.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1.5 px-5 py-5 sm:px-6 md:grid-cols-[12rem_minmax(0,1fr)_auto] md:gap-x-6"
            >
              <dt className="flex items-center gap-3 font-semibold">
                <StatusDot tone="ok" className="ring-1 ring-brand/25" />
                {rule.title}
              </dt>
              <dd
                className={`text-right text-brand md:order-last ${isReading(rule.value) ? "readout" : "text-sm font-medium"}`}
              >
                {rule.value}
              </dd>
              <dd className="col-span-2 pl-5 text-ink-soft md:col-span-1 md:pl-0">{rule.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
