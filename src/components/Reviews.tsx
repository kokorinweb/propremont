import { TriangleAlert } from "lucide-react";
import { REVIEWS, REVIEWS_ARE_DEMO } from "@/lib/reviews";
import { Container, SectionHeading } from "./ui";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading id="reviews-title" title="Отзывы клиентов" />

        {REVIEWS_ARE_DEMO && (
          <p className="mb-10 flex max-w-2xl items-start gap-3 rounded-[6px] bg-caution px-4 py-3 text-sm font-medium text-ink">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
            Это демо-отзывы для макета. Перед запуском замените их настоящими: выдуманные отзывы на живом
            сайте вводят клиентов в заблуждение.
          </p>
        )}

        <div className="gap-x-10 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="mb-10 break-inside-avoid border-t-2 border-ink pt-5">
              <blockquote className="text-lg leading-relaxed text-pretty">{review.text}</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="mt-0.5 text-sm text-ink-mute">
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
