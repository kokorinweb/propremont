/**
 * Пока true, над шапкой висит полоса «Демо-версия»: цены, сроки, контакты и отзывы — заглушки.
 * Выключать только после того, как всё из чек-листа в README заменено настоящим.
 */
export const SITE_IS_DEMO = true;

/**
 * Всё, что знаем о сервисе: контакты, адрес, график, реквизиты.
 * Шапка, подвал, форма, уведомления и разметка для поисковиков читают только отсюда.
 *
 * Телефон, мессенджеры, e-mail и реквизиты — заглушки. Перед запуском заменить на настоящие.
 * Рейтинга с карт здесь нет намеренно: показываем только настоящий.
 */
export const COMPANY = {
  name: "Проремонт",
  descriptor: "Сервисный центр",
  city: "Владивосток",
  street: "ул. Луговая, 21а",
  place: "ТЦ «Луговая», 2 этаж, бутик 221",
  hours: "Ежедневно 09:00–19:00",
  opensAt: "09:00",
  closesAt: "19:00",
  phone: "+7 (423) 000-00-00",
  phoneHref: "tel:+74230000000",
  telegram: "https://t.me/proremont_vl",
  whatsapp: "https://wa.me/74230000000",
  parking: "Парковка рядом с ТЦ",
  /** Заменить на реальные ориентиры (вход, лестница, вывеска), когда их проверят на месте. */
  howToFind: ["Зайдите в ТЦ «Луговая»", "Поднимитесь на 2 этаж", "Бутик 221 — «Проремонт»"],
  maps: {
    yandex: "https://yandex.ru/maps/?text=" + encodeURIComponent("Владивосток, улица Луговая, 21а"),
    twoGis: "https://2gis.ru/vladivostok/search/" + encodeURIComponent("Луговая 21а"),
  },
  legal: {
    entity: "ИП Иванов Иван Иванович",
    inn: "250000000000",
    ogrnip: "320250000000000",
  },
  email: "hello@proremont.example",
} as const;

export const FULL_ADDRESS = `${COMPANY.city}, ${COMPANY.street}, ${COMPANY.place}`;

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://proremont.example";
}
