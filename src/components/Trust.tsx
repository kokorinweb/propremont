import { Container } from "./ui";

/** Условия мастерской: строка условия и пояснение к ней. */
const RULES = [
  {
    value: "Гарантия до 6\u00a0месяцев",
    text: "Выдаём талон на бумаге и присылаем копию в мессенджер. Гарантия покрывает деталь и работу.",
  },
  {
    value: "Запчасти на выбор",
    text: "Оригинал или копия. Объясняем разницу в цене, яркости экрана и сроке гарантии.",
  },
  {
    value: "Ремонт при вас",
    text: "Мастер работает за стеклом. Старую деталь отдаём вам.",
  },
  {
    value: "Данные остаются вашими",
    text: "Для большинства ремонтов пароль не нужен. Если попросите, перенесём и восстановим данные.",
  },
  {
    value: "Оплата любым способом",
    text: "Карта, наличные, перевод или QR-код.",
  },
  {
    value: "Доставка и выезд",
    text: "Заберём телефон или отремонтируем его у вас дома.",
  },
];

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="bg-white py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="trust-title" className="display text-[2.75rem] sm:text-6xl">
            Условия ремонта
          </h2>
          <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">
            Эти условия действуют для любого ремонта, от стекла камеры до восстановления после воды.
          </p>
        </div>

        <dl className="border-t-2 border-ink lg:col-span-8">
          {RULES.map((rule) => (
            <div
              key={rule.value}
              className="grid grid-cols-1 gap-x-10 gap-y-1.5 border-b border-line py-5 md:grid-cols-[19.5rem_minmax(0,1fr)] md:items-baseline"
            >
              <dt className="display text-3xl">{rule.value}</dt>
              <dd className="text-ink-soft">{rule.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
