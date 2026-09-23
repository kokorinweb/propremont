import { Plus } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { FAQ } from "@/lib/faq";
import { Container } from "./ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-mist py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="text-3xl font-bold tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.1]">
            Частые вопросы
          </h2>
          <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">
            Не нашли ответ? Спросите в{" "}
            <a href={COMPANY.telegram} className="font-medium text-brand underline">
              Telegram
            </a>{" "}
            или позвоните:{" "}
            <a href={COMPANY.phoneHref} className="font-medium whitespace-nowrap text-brand underline">
              {COMPANY.phone}
            </a>
          </p>
        </div>

        <div className="divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line lg:col-span-8">
          {FAQ.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-5 text-lg font-semibold tracking-[-0.01em] transition-colors hover:text-brand sm:px-7">
                {item.q}
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-mist text-brand transition-[rotate] duration-300 ease-out">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl px-5 pb-6 text-ink-soft sm:px-7">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
