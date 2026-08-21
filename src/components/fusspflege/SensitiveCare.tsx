import { business } from "@/lib/data/business";
import { sensitiveCare } from "@/lib/data/fusspflege";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

/**
 * Eigene, ruhige Section für Kundinnen und Kunden mit besonderen/sensiblen
 * Bedürfnissen (u.a. onkologisch-kosmetische Fußpflege) – bewusst deutlich
 * sichtbarer als eine reine Zeile zwischen den normalen Leistungen. Vermittelt
 * Sorgfalt und persönliche Betreuung, keine medizinischen Heilversprechen.
 */
export function FusspflegeSensitiveCare() {
  return (
    <section className="relative overflow-hidden bg-greige/30 py-24 lg:py-32">
      <BotanicalWatermark
        className="-bottom-16 -right-16 hidden h-[300px] w-[200px] lg:block"
        opacity={0.08}
        rotate={-3}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal font-sans text-xs font-medium tracking-[0.2em] text-gold">
            {sensitiveCare.eyebrow}
          </p>
          <h2 className="reveal reveal-d1 mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            {sensitiveCare.heading}
          </h2>
          <p className="reveal reveal-d2 mt-6 font-sans text-lg leading-relaxed text-petrol/80">
            {sensitiveCare.text}
          </p>

          {/* Optisch hervorgehobener zweiter Textblock statt einer weiteren
              Fließtext-Zeile – feine goldene Linie statt Card/Icon-Optik. */}
          <div className="reveal reveal-d3 mt-10 border-l-2 border-gold/50 bg-cream/60 px-6 py-6 text-left sm:px-8 sm:py-7">
            <p className="font-display text-xl leading-relaxed text-petrol sm:text-2xl">
              {sensitiveCare.highlight}
            </p>
          </div>

          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-d4 mt-10 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            {sensitiveCare.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
