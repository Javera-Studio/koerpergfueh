import {
  testimonials,
  googleRating,
  googleReviewsUrl,
} from "@/lib/data/business";
import { Signature } from "@/components/ui/Signature";

const cardTones = {
  petrol: "bg-petrol text-cream",
  mint: "bg-mint-pale text-petrol",
  greige: "bg-greige text-petrol",
  cream: "bg-cream text-petrol ring-1 ring-petrol/10",
} as const;

function Stars({ rating, dark }: { rating: number; dark?: boolean }) {
  return (
    <p
      className={`text-sm ${dark ? "text-gold/90" : "text-gold"}`}
      aria-hidden
    >
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </p>
  );
}

function QuoteMark({ dark }: { dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`font-display text-4xl leading-none ${dark ? "text-gold/40" : "text-gold/30"}`}
    >
      “
    </span>
  );
}

/**
 * Echte Google-Bewertungen (siehe business.ts – Inhalte nicht erfinden oder
 * sinnverändern). Editoriales, asymmetrisches Grid statt gleichförmiger
 * Karten: eine große Featured-Karte + wechselnde kleinere Karten, Gold
 * ausschließlich als Akzent (Sterne, Anführungszeichen, feine Linien).
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const rest = testimonials.filter((t) => t !== featured);
  const [secondaryA, secondaryB, ...others] = rest;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="text-center">
        <Signature className="block" color="gold">
          Was Kundinnen sagen
        </Signature>
        <h2 className="mt-4 font-display text-3xl leading-snug text-petrol sm:text-4xl">
          5 Sterne für Körpergfüh.
        </h2>
        <div className="mt-5 flex flex-col items-center gap-1">
          <Stars rating={Math.round(googleRating.average)} />
          <span className="font-sans text-xs text-petrol/70">
            {googleRating.average.toLocaleString("de-AT", {
              minimumFractionDigits: 1,
            })}{" "}
            von 5 Sternen auf Google
          </span>
          <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-petrol/40">
            Google Bewertungen
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-6 lg:items-start">
        {/* Featured: große Karte links, dunkles Petrol als bewusster Anker */}
        <blockquote
          className={`reveal reveal-d1 relative flex flex-col justify-between rounded-xl p-5 sm:p-6 lg:col-span-3 ${cardTones.petrol}`}
        >
          <div>
            <QuoteMark dark />
            <Stars rating={featured.rating ?? 5} dark />
            <p className="mt-3 whitespace-pre-line font-display text-base leading-relaxed text-cream sm:text-lg">
              {featured.text}
            </p>
          </div>
          <footer className="mt-5 border-t border-cream/20 pt-3 font-sans text-xs font-medium text-cream/90">
            {featured.name}
          </footer>
        </blockquote>

        <div className="flex flex-col gap-5 lg:col-span-3">
          {secondaryA && (
            <blockquote
              className={`reveal reveal-d2 relative flex flex-col justify-between rounded-xl p-5 ${cardTones.mint}`}
            >
              <div>
                <QuoteMark />
                <Stars rating={secondaryA.rating ?? 5} />
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-petrol/85">
                  {secondaryA.text}
                </p>
              </div>
              <footer className="mt-4 font-sans text-xs font-medium text-petrol">
                {secondaryA.name}
              </footer>
            </blockquote>
          )}

          {secondaryB && (
            <blockquote
              className={`reveal reveal-d3 relative flex flex-col justify-between rounded-xl p-5 ${cardTones.cream}`}
            >
              <div>
                <QuoteMark />
                <Stars rating={secondaryB.rating ?? 5} />
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-petrol/85">
                  {secondaryB.text}
                </p>
              </div>
              <footer className="mt-4 font-sans text-xs font-medium text-petrol">
                {secondaryB.name}
              </footer>
            </blockquote>
          )}
        </div>
      </div>

      {others.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((testimonial, index) => {
            const tone =
              index % 2 === 0 ? cardTones.greige : cardTones.mint;
            return (
              <blockquote
                key={testimonial.name}
                className={`reveal reveal-d${((index + 3) % 4) + 1} relative flex flex-col justify-between rounded-xl p-5 ${tone}`}
              >
                <div>
                  <QuoteMark />
                  <Stars rating={testimonial.rating ?? 5} />
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-petrol/85">
                    {testimonial.text}
                  </p>
                </div>
                <footer className="mt-4 font-sans text-xs font-medium text-petrol">
                  {testimonial.name}
                </footer>
              </blockquote>
            );
          })}
        </div>
      )}

      <div className="mt-14 text-center">
        {googleReviewsUrl ? (
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 border-b border-gold pb-0.5 font-sans text-sm font-medium text-petrol transition-colors hover:text-mint-deep"
          >
            Alle Bewertungen auf Google ansehen
            <span
              aria-hidden
              className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ) : (
          // TODO: googleReviewsUrl in business.ts eintragen, sobald das
          // korrekte Google-Unternehmensprofil bestätigt ist – keine URL
          // erfinden. Bis dahin bewusst nicht-klickbarer Platzhalter.
          <span
            aria-disabled
            className="inline-flex cursor-default items-center gap-1.5 border-b border-dashed border-gold/50 pb-0.5 font-sans text-sm font-medium text-petrol/50"
          >
            Alle Bewertungen auf Google ansehen →
          </span>
        )}
      </div>
    </section>
  );
}
