import { z } from "zod";
import { BRANDS, SERVICES, type BrandId, type ServiceId } from "./prices";

export const CONTACT_METHODS = [
  { id: "call", label: "Звонок" },
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" },
] as const;

export const DIAGNOSTICS = { id: "diagnostics", title: "Нужна диагностика" } as const;
export const OTHER_BRAND = { id: "other", name: "Другой бренд" } as const;

export type ServiceChoice = ServiceId | typeof DIAGNOSTICS.id;
export type BrandChoice = BrandId | typeof OTHER_BRAND.id;

const brandIds: [string, ...string[]] = [OTHER_BRAND.id, ...BRANDS.map((b) => b.id)];
const serviceIds: [string, ...string[]] = [DIAGNOSTICS.id, ...SERVICES.map((s) => s.id)];
const contactIds: [string, ...string[]] = [CONTACT_METHODS[0].id, ...CONTACT_METHODS.slice(1).map((c) => c.id)];

/**
 * Одна схема на форму и на сервер. Полей нарочно мало: всё остальное
 * менеджер уточнит сам — каждое лишнее поле стоит заявок.
 */
export const requestSchema = z.object({
  name: z.string().trim().min(2, "Как к вам обращаться?").max(60, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .max(24, "Проверьте номер")
    .refine((value) => value.replace(/\D/g, "").length >= 10, "Укажите номер телефона")
    .refine((value) => /^[+\d][\d\s()\-]+$/.test(value), "Номер выглядит некорректно"),
  brand: z.enum(brandIds, "Выберите телефон"),
  service: z.enum(serviceIds).default(DIAGNOSTICS.id),
  contact: z.enum(contactIds).default("call"),
  consent: z.literal(true, "Нужно согласие на обработку данных"),
  /** Ловушка для ботов: человек это поле не видит и не заполняет. */
  website: z.string().max(0).optional().default(""),
});

export type RequestInput = z.infer<typeof requestSchema>;

/** Короткий номер, который клиент может назвать по телефону. Базы нет — уникальности хватает. */
export function makeRequestNumber(): string {
  return `П-${String(Date.now()).slice(-6)}`;
}
