import type { Metadata, Viewport } from "next";
import { Fira_Mono, Fira_Sans_Extra_Condensed, Golos_Text } from "next/font/google";
import "./globals.css";
import { COMPANY, SITE_IS_DEMO, siteUrl } from "@/lib/company";

const sans = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-golos",
  display: "swap",
});

const display = Fira_Sans_Extra_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["800"],
  variable: "--font-fira-xcond",
  display: "swap",
});

const mono = Fira_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-fira-mono",
  display: "swap",
});

const title = `Ремонт телефонов во Владивостоке · ${COMPANY.name}, ТЦ «Луговая»`;
const description =
  "Бесплатная диагностика. Фиксируем цену в квитанции до начала ремонта. Меняем экран, аккумулятор и разъём при вас, гарантия до 6 месяцев. Ежедневно 09:00–19:00.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s · ${COMPANY.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, locale: "ru_RU", type: "website", siteName: COMPANY.name },
  formatDetection: { telephone: false },
  // Пока на сайте заглушки, поисковикам его показывать нельзя.
  ...(SITE_IS_DEMO ? { robots: { index: false, follow: false } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#eeedef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
