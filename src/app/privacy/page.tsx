import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui";
import { COMPANY, FULL_ADDRESS } from "@/lib/company";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false },
};

/**
 * Шаблон политики под 152-ФЗ. Перед запуском проверить с юристом: реквизиты оператора,
 * место хранения данных и передачу заявок в Telegram (трансграничная передача).
 */
export default function PrivacyPage() {
  const { legal } = COMPANY;
  return (
    <>
      <Header />
      <main className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="display text-5xl sm:text-7xl">Политика конфиденциальности</h1>
          <div className="mt-10 space-y-8 text-ink-soft [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
            <section>
              <h2>1. Кто обрабатывает данные</h2>
              <p>
                Оператор: {legal.entity} (ИНН {legal.inn}, ОГРНИП {legal.ogrnip}), сервисный центр «{COMPANY.name}»,
                адрес: {FULL_ADDRESS}. Связь: {COMPANY.phone}, {COMPANY.email}.
              </p>
            </section>
            <section>
              <h2>2. Какие данные мы получаем</h2>
              <p>
                Из формы на сайте: имя, номер телефона, марка телефона, описание неисправности и удобный способ
                связи. Больше ничего не запрашиваем.
              </p>
            </section>
            <section>
              <h2>3. Зачем</h2>
              <p>
                Чтобы связаться с вами по заявке, назвать стоимость и согласовать время ремонта. Рекламные рассылки
                не отправляем.
              </p>
            </section>
            <section>
              <h2>4. Основание и срок</h2>
              <p>
                Основание: ваше согласие, которое вы даёте галочкой в форме. Данные храним не дольше, чем нужно для
                выполнения заявки и гарантийных обязательств, и удаляем по вашему запросу.
              </p>
            </section>
            <section>
              <h2>5. Кому передаём</h2>
              <p>
                Заявка передаётся мастеру сервисного центра через мессенджер Telegram. Третьим лицам для других целей
                данные не передаём.
              </p>
            </section>
            <section>
              <h2>6. Ваши права</h2>
              <p>
                Вы можете узнать, какие данные о вас хранятся, исправить их или отозвать согласие. Напишите на{" "}
                {COMPANY.email} или позвоните {COMPANY.phone}.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer withCta={false} />
    </>
  );
}
