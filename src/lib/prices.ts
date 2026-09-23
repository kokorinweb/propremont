/**
 * Прайс — единственный источник цен. Таблица на сайте, форма заявки и уведомление
 * менеджеру берут цифры отсюда, поэтому разъехаться им негде.
 * Цены «от»: точную сумму называем после бесплатной диагностики.
 */

export const BRANDS = [
  { id: "apple", name: "Apple", models: "iPhone 11–17 Pro Max" },
  { id: "samsung", name: "Samsung", models: "Galaxy A, S, Z" },
  { id: "xiaomi", name: "Xiaomi", models: "Xiaomi, Redmi, POCO" },
  { id: "honor", name: "Honor", models: "Honor X, Magic, 90–400" },
  { id: "huawei", name: "Huawei", models: "P, Mate, nova" },
] as const;

export type BrandId = (typeof BRANDS)[number]["id"];

export const SERVICES = [
  {
    id: "display",
    title: "Замена дисплея",
    note: "Оригинал или копия на выбор",
    time: "от 40 мин",
    warranty: "до 6 мес.",
  },
  {
    id: "battery",
    title: "Замена аккумулятора",
    note: "С проверкой ёмкости после замены",
    time: "от 30 мин",
    warranty: "6 мес.",
  },
  {
    id: "port",
    title: "Ремонт разъёма зарядки",
    note: "Чистка или замена",
    time: "от 1 ч",
    warranty: "3 мес.",
  },
  {
    id: "camera-glass",
    title: "Замена стекла камеры",
    time: "от 30 мин",
    warranty: "3 мес.",
  },
  {
    id: "back",
    title: "Замена задней крышки",
    time: "от 1 ч",
    warranty: "3 мес.",
  },
  {
    id: "water",
    title: "Восстановление после воды",
    note: "Чистка платы и диагностика",
    time: "от 1 дня",
    warranty: "по результату",
  },
  {
    id: "speaker",
    title: "Замена динамика или микрофона",
    time: "от 40 мин",
    warranty: "3 мес.",
  },
  {
    id: "data",
    title: "Перенос и восстановление данных",
    note: "Фото, контакты, мессенджеры",
    time: "от 30 мин",
    warranty: "—",
  },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];

/** Цена «от», ₽. */
export const PRICES: Record<BrandId, Record<ServiceId, number>> = {
  apple: {
    display: 4900,
    battery: 2900,
    port: 2500,
    "camera-glass": 1500,
    back: 3500,
    water: 1900,
    speaker: 1900,
    data: 1000,
  },
  samsung: {
    display: 4500,
    battery: 2400,
    port: 1900,
    "camera-glass": 1200,
    back: 1900,
    water: 1900,
    speaker: 1500,
    data: 1000,
  },
  xiaomi: {
    display: 3200,
    battery: 1900,
    port: 1500,
    "camera-glass": 1000,
    back: 1500,
    water: 1500,
    speaker: 1200,
    data: 1000,
  },
  honor: {
    display: 3400,
    battery: 1900,
    port: 1500,
    "camera-glass": 1000,
    back: 1500,
    water: 1500,
    speaker: 1200,
    data: 1000,
  },
  huawei: {
    display: 3600,
    battery: 2100,
    port: 1600,
    "camera-glass": 1100,
    back: 1700,
    water: 1500,
    speaker: 1300,
    data: 1000,
  },
};

export const OTHER_BRANDS = "Realme, Tecno, Infinix, Google Pixel, OnePlus, Vivo";

/** Разряды через неразрывный пробел: узкого (U+202F) нет в узком гротеске этикеток. */
export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU").replace(/[\u00a0\u202f]/g, "\u00a0")}\u00a0₽`;
}

export function getBrand(id: string) {
  return BRANDS.find((brand) => brand.id === id);
}

export function getService(id: string) {
  return SERVICES.find((service) => service.id === id);
}

/** Самая низкая цена услуги среди всех брендов — для заголовков вида «от 1 000 ₽». */
export function minPrice(service: ServiceId): number {
  return Math.min(...BRANDS.map((brand) => PRICES[brand.id][service]));
}

/**
 * Симптомы — язык клиента, услуги — язык мастера. Консоль диагностики в первом экране
 * переводит одно в другое. `service: null` — сразу на бесплатную диагностику.
 */
export const SYMPTOMS: { id: string; label: string; short: string; service: ServiceId | null }[] = [
  { id: "screen", label: "Разбит экран или полосы", short: "Разбит экран", service: "display" },
  { id: "battery", label: "Быстро садится", short: "Быстро садится", service: "battery" },
  { id: "charge", label: "Не заряжается", short: "Не заряжается", service: "port" },
  { id: "water", label: "Побывал в воде", short: "Был в воде", service: "water" },
  { id: "camera", label: "Треснуло стекло камеры", short: "Стекло камеры", service: "camera-glass" },
  { id: "sound", label: "Плохо слышно собеседника", short: "Плохо слышно", service: "speaker" },
  { id: "back", label: "Разбита задняя крышка", short: "Задняя крышка", service: "back" },
  { id: "unknown", label: "Не знаю, что с ним", short: "Не знаю", service: null },
];

export const DIAGNOSTICS_INFO = { time: "15 мин", price: 0 } as const;

/** Моноширинный — только для показаний: там, где есть цифры. Слова остаются гротеском. */
export function isReading(value: string): boolean {
  return /\d/.test(value);
}

const BRAND_CODES: Record<BrandId, string> = {
  apple: "APL",
  samsung: "SAM",
  xiaomi: "XMI",
  honor: "HON",
  huawei: "HUA",
};

const SERVICE_CODES: Record<ServiceId, string> = {
  display: "DSP",
  battery: "BAT",
  port: "USB",
  "camera-glass": "CAM",
  back: "BCK",
  water: "H2O",
  speaker: "SPK",
  data: "DAT",
};

/** Код оценки для штрихкода на этикетке: бренд, ремонт и цена — например PR-APL-DSP-4900. */
export function quoteCode(brand: BrandId, service: ServiceId | null, price: number): string {
  return `PR-${BRAND_CODES[brand]}-${service ? SERVICE_CODES[service] : "DIA"}-${price}`;
}

export function priceListCode(brand: BrandId): string {
  return `PRICE-${BRAND_CODES[brand]}`;
}
