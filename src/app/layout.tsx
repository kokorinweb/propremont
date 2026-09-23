import type { Metadata, Viewport } from "next";
import { Geologica, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY, siteUrl } from "@/lib/company";

const sans = Geologica({
  subsets: ["latin", "cyrillic"],
  axes: ["SHRP"],
  variable: "--font-geologica",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `Ремонт телефонов во Владивостоке — ${COMPANY.name}, ТЦ «Луговая»`;
const description =
  "Бесплатная диагностика, цена фиксируется в квитанции до начала ремонта. Замена экрана, аккумулятора и разъёма при вас, гарантия до 6 месяцев. Ежедневно 09:00–19:00.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s · ${COMPANY.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, locale: "ru_RU", type: "website", siteName: COMPANY.name },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
