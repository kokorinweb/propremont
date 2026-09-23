import { Plus } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { FAQ } from "@/lib/faq";
import { Container } from "./ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="display text-[2.75rem] sm:text-6xl">
            Частые вопросы
          </h2>
          <p className="mt-4 text-base text-pretty text-ink-soft sm:text-lg">
            Не нашли ответ? Спросите в{" "}
            <a href={COMPANY.telegram} className="font-semibold text-ink underline">
              Telegram
            </a>{" "}
            или позвоните:{" "}
            <a href={COMPANY.phoneHref} className="font-semibold whitespace-nowrap text-ink tabular-nums underline">
              {COMPANY.phone}
            </a>
          </p>
        </div>

        <div className="border-t-2 border-ink lg:col-span-8">
          {FAQ.map((item) => (
            <details key={item.q} className="border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold">
                {item.q}
                <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-[8px] border border-ink/20 transition-[rotate] duration-300 ease-out">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
