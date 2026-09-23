import { Booking } from "@/components/Booking";
import { BookingProvider } from "@/components/BookingContext";
import { Contacts } from "@/components/Contacts";
import { DemoBanner } from "@/components/DemoBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileBar } from "@/components/MobileBar";
import { Prices } from "@/components/Prices";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Trust } from "@/components/Trust";
import { COMPANY, siteUrl } from "@/lib/company";
import { FAQ } from "@/lib/faq";

export default function Home() {
  return (
    <BookingProvider>
      <div className="pb-[76px] md:pb-0">
        <a
          href="#main"
          className="sr-only z-50 rounded-xl bg-brand px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Перейти к содержанию
        </a>
        <DemoBanner />
        <Header />
        <main id="main">
          <Hero />
          <Process />
          <Prices />
          <Trust />
          <Booking />
          <Reviews />
          <Faq />
          <Contacts />
        </main>
        <Footer />
      </div>
      <MobileBar />
      <StructuredData />
    </BookingProvider>
  );
}

/** Разметка для поисковиков и карт: организация, адрес, график и вопросы. */
function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: COMPANY.name,
      description: "Ремонт телефонов: бесплатная диагностика, цена фиксируется до начала ремонта.",
      url: siteUrl(),
      telephone: COMPANY.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: `${COMPANY.street}, ${COMPANY.place}`,
        addressLocality: COMPANY.city,
        addressCountry: "RU",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: COMPANY.opensAt,
        closes: COMPANY.closesAt,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Данные наши, но «</script>» внутри строки всё равно экранируем.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
