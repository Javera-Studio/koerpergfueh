import { testimonials, googleRating } from "@/lib/data/business";
import { Signature } from "@/components/ui/Signature";

/**
 * Solange keine echten, freigegebenen Google-Bewertungen vorliegen, bleibt
 * diese Section vollständig ausgeblendet (return null) – keine leeren
 * Platzhalter-Boxen auf der Live-Website. Struktur ist vollständig
 * vorbereitet: sobald `testimonials` in src/lib/data/business.ts befüllt
 * wird (max. 3 echte Bewertungen), erscheint die Section automatisch.
 * TODO: echte Bewertungstexte/Namen mit Viktoria bestätigen und eintragen –
 * niemals selbst erfinden.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="text-center">
        <Signature className="block" color="gold">
          Stimmen aus dem Studio
        </Signature>
        <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Was Kundinnen und Kunden über Körpergfüh sagen.
        </h2>

        {/* Nur anzeigen, sobald googleRating tatsächlich bestätigt/eingetragen ist */}
        {googleRating && (
          <div className="mt-6 flex flex-col items-center gap-1">
            <span className="text-gold" aria-hidden>
              {"★".repeat(Math.round(googleRating.average))}
              {"☆".repeat(5 - Math.round(googleRating.average))}
            </span>
            <span className="font-sans text-sm text-petrol/70">
              {googleRating.average.toLocaleString("de-AT", {
                minimumFractionDigits: 1,
              })}{" "}
              bei Google ({googleRating.count} Bewertungen)
            </span>
          </div>
        )}
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <blockquote
            key={testimonial.name}
            className={`reveal reveal-d${(index % 4) + 1} border-t border-gold/30 pt-6`}
          >
            {testimonial.rating && (
              <p className="text-gold" aria-hidden>
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </p>
            )}
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/80">
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
