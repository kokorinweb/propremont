import { COMPANY } from "./company";
import { formatPrice, getBrand, getService, PRICES, type BrandId, type ServiceId } from "./prices";
import { CONTACT_METHODS, DIAGNOSTICS, OTHER_BRAND, type RequestInput } from "./request";

export function telegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Бот здесь только пишет в рабочий чат, поэтому хватает одного вызова Bot API —
 * отдельная библиотека и вебхук не нужны.
 */
export async function notifyNewRequest(number: string, input: RequestInput): Promise<void> {
  const brand = getBrand(input.brand);
  const service = getService(input.service);
  const contact = CONTACT_METHODS.find((c) => c.id === input.contact);

  let serviceLine: string = DIAGNOSTICS.title;
  if (service) {
    serviceLine = service.title;
    if (brand) {
      serviceLine += ` (от ${formatPrice(PRICES[brand.id as BrandId][service.id as ServiceId])})`;
    }
  }

  const phoneDigits = input.phone.replace(/[^\d+]/g, "");
  const text = [
    `<b>🔧 Новая заявка ${escapeHtml(number)}</b>`,
    "",
    `👤 ${escapeHtml(input.name)}`,
    `📞 <a href="tel:${phoneDigits}">${escapeHtml(input.phone)}</a>`,
    `📱 ${brand?.name ?? OTHER_BRAND.name}`,
    `🛠 ${escapeHtml(serviceLine)}`,
    `💬 Связаться: ${contact?.label ?? "звонок"}`,
  ].join("\n");

  if (!telegramConfigured()) {
    console.info(`[telegram] не настроен, заявка только в логе:\n${text}`);
    return;
  }

  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        link_preview_options: { is_disabled: true },
      }),
      signal: AbortSignal.timeout(8000),
    },
  );

  if (!response.ok) {
    throw new Error(`Telegram ответил ${response.status}: ${await response.text()}`);
  }
}

export const REQUEST_FALLBACK = `Не получилось отправить заявку. Позвоните нам: ${COMPANY.phone}`;
