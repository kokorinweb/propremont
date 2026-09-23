import { NextResponse } from "next/server";
import { clientIp, rateLimit } from "@/lib/ratelimit";
import { makeRequestNumber, requestSchema } from "@/lib/request";
import { notifyNewRequest, REQUEST_FALLBACK } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!rateLimit(`request:${clientIp(request)}`, 5, 60_000)) {
    return NextResponse.json(
      { error: "Слишком много попыток. Подождите минуту или позвоните нам." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    // Бот, заполнивший ловушку, получает «успех» и не узнаёт, что его отсеяли.
    if (issue?.path[0] === "website") {
      return NextResponse.json({ number: makeRequestNumber() });
    }
    return NextResponse.json(
      { error: issue?.message ?? "Проверьте поля формы", field: issue?.path[0] },
      { status: 400 },
    );
  }

  const number = makeRequestNumber();

  try {
    await notifyNewRequest(number, parsed.data);
  } catch (error) {
    // Заявка, которая никуда не дошла, хуже честной ошибки: клиент будет ждать звонка зря.
    console.error("[api/request] заявка не доставлена в Telegram:", error);
    return NextResponse.json({ error: REQUEST_FALLBACK }, { status: 502 });
  }

  return NextResponse.json({ number });
}
