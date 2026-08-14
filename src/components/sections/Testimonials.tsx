import { testimonials } from "@/lib/data/business";

/**
 * Solange keine echten, freigegebenen Kundenbewertungen vorliegen, bleibt diese
 * Section vollständig ausgeblendet. Sobald `testimonials` in
 * src/lib/data/business.ts befüllt wird, erscheint sie automatisch.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <h2 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Was Kundinnen über Körpergfüh sagen
      </h2>

      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <blockquote key={testimonial.name} className="border-t border-mint-pale pt-6">
            <p className="font-sans text-base leading-relaxed text-petrol/80">
              „{testimonial.text}“
            </p>
            <footer className="mt-4 font-sans text-sm font-medium text-petrol">
              {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
