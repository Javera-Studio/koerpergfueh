import Image from "next/image";
import { business } from "@/lib/data/business";
import { oncologyCare } from "@/lib/data/fusspflege";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

/**
 * Einzige, zusammengeführte Section zur onkologisch-kosmetischen Fußpflege
 * (ersetzt die vormals getrennten Sections "Mit besonderer Sorgfalt" und
 * "Onkologisch-kosmetische Fußpflege" – keine inhaltliche Überschneidung
 * mehr). Bewusst aus einem Guss: Intro -> großes atmosphärisches Bild ->
 * ruhiger zweispaltiger Leistungs-/Preisbereich. Keine medizinischen
 * Heilversprechen, nur Kompetenz/Sorgfalt/persönliche Betreuung.
 */
export function FusspflegeOncology() {
  return (
    <section className="oncology-bg-reveal bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            {oncologyCare.eyebrow}
          </p>
          <h2 className="reveal reveal-d1 mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            {oncologyCare.heading}
          </h2>
          <div className="reveal reveal-d2 mt-6 flex flex-col gap-5 font-sans text-lg leading-relaxed text-petrol/80">
            {oncologyCare.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Breite, atmosphärische Bildfläche – emotionaler Mittelpunkt der
          Section, kein Card- oder Bild-neben-Text-Layout. */}
      <div className="reveal relative my-12 h-[280px] overflow-hidden sm:h-[340px] lg:my-16 lg:h-[480px]">
        <Image
          src="/images/fuss2.png"
          alt="Achtsame Fußpflege-Behandlung – besondere Sorgfalt für empfindliche Haut"
          fill
          sizes="100vw"
          className="object-cover object-[50%_50%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#F5F0E8]/15" />

        <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-8 lg:bottom-10">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <span className="font-display text-xl text-petrol sm:text-2xl">
              {oncologyCare.imageQuote}
            </span>
            <div className="mt-2 h-px w-10 bg-gold/70" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Links: was zur Betreuung gehört */}
          <div className="reveal reveal-d1">
            <h3 className="font-display text-2xl text-petrol">
              {oncologyCare.includesHeading}
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {oncologyCare.includes.map((item, index) => (
                <li
                  key={item}
                  className={`reveal reveal-d${(index % 4) + 1} flex items-center gap-3`}
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-gold" />
                  <span className="font-sans text-base text-petrol/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechts: Preis + persönliche Frage vorab */}
          <div className="reveal reveal-d2">
            <p className="font-sans text-sm text-petrol/60">
              {oncologyCare.treatmentTitle}
            </p>
            <p className="mt-1 font-display text-4xl text-petrol">
              {oncologyCare.price}
            </p>

            <p className="mt-6 font-sans text-base leading-relaxed text-petrol/80">
              {oncologyCare.questionText}
            </p>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              {oncologyCare.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
