import { isReading } from "@/lib/prices";
import { Container, SectionHeading } from "./ui";

const STEPS = [
  {
    title: "Диагностика",
    meta: "15 мин · 0 ₽",
    text: "Находим причину поломки. Если откажетесь от ремонта, ничего не платите.",
  },
  {
    title: "Цена в квитанции",
    meta: "до начала работ",
    text: "Называем сумму, срок и деталь: оригинал или копия. Печатаем это в квитанции и начинаем ремонт после вашего согласия.",
  },
  {
    title: "Ремонт при вас",
    meta: "от 30 мин",
    text: "Мастер работает за стеклом, вы можете смотреть или подождать в ТЦ. Старую деталь отдаём вам.",
  },
  {
    title: "Проверка и гарантия",
    meta: "до 6 мес.",
    text: "Проверяем связь, камеру, зарядку и датчики. Выдаём гарантийный талон и присылаем копию в мессенджер.",
  },
];

export function Process() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="how-title"
          title="Как проходит ремонт"
          lead="Цену из квитанции на втором шаге мы не меняем до конца ремонта."
        />

        {/* Рулон этикеток: подложка, перфорация между шагами. */}
        <ol className="grid grid-cols-1 gap-3.5 rounded-2xl bg-liner p-3.5 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="perforated label relative flex flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="display text-6xl" aria-hidden>
                  {index + 1}
                </span>
                <span className={`pt-1 text-right text-xs text-ink-mute ${isReading(step.meta) ? "readout" : "font-medium"}`}>
                  {step.meta}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.01em]">
                <span className="sr-only">Шаг {index + 1}. </span>
                {step.title}
              </h3>
              <p className="mt-2 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-2xl text-pretty text-ink-soft">
          Если при ремонте найдём ещё поломку, позвоним вам. Без вашего «да» сумму в квитанции не меняем.
        </p>
      </Container>
    </section>
  );
}
