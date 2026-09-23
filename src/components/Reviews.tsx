import { TriangleAlert } from "lucide-react";
import { REVIEWS, REVIEWS_ARE_DEMO } from "@/lib/reviews";
import { Container, SectionHeading } from "./ui";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="reviews-title"
          title="Отзывы клиентов"
          lead="Каждый отзыв — с моделью телефона и видом ремонта."
        />

        {REVIEWS_ARE_DEMO && (
          <p className="mb-8 flex items-start gap-3 rounded-xl border border-dashed border-amber-ink/60 bg-amber/10 px-4 py-3 text-sm text-ink">
            <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-ink" aria-hidden />
            Демо-отзывы для макета. Перед запуском замените их настоящими — выдуманные отзывы на
            живом сайте недопустимы.
          </p>
        )}

        <div className="gap-5 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="mb-5 break-inside-avoid rounded-2xl p-6 ring-1 ring-line"
            >
              <blockquote className="text-pretty">{review.text}</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="mt-1 text-sm text-ink-mute">
                  {review.device} · {review.repair} · {review.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
