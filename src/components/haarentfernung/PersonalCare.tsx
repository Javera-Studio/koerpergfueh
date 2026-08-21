import { business } from "@/lib/data/business";

/**
 * Bewusst ohne Bild: Sobald ein echtes Foto von Viktoria für diesen Bereich
 * vorliegt, hier nach dem Vorbild von About.tsx / fusspflege/Trust.tsx mit
 * ImagePlaceholder (offset + parallax) ergänzen. Kein erfundener
 * Personen-Platzhalter bis dahin.
 */
export function HaarentfernungPersonalCare() {
  return (
    <section className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            BEI KÖRPERGFÜH
          </p>
          <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            Eine Behandlung, bei der du dich wohlfühlen darfst.
          </h2>
          <div className="mt-8 flex flex-col gap-5 font-sans text-lg leading-relaxed text-petrol/80">
            <p>
              Gerade bei einer Behandlung am eigenen Körper ist mir wichtig,
              dass du dich bei mir wohlfühlst und deine Fragen offen stellen
              kannst.
            </p>
            <p>
              Du entscheidest, welche Bereiche du behandeln lassen möchtest.
              Ich begleite dich persönlich durch deine Termine und möchte,
              dass du weißt, was dich erwartet.
            </p>
            <p>
              Wenn du vor deinem ersten Termin unsicher bist oder etwas
              wissen möchtest, melde dich einfach bei mir.
            </p>
          </div>

          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            Frage vorab stellen
          </a>
        </div>
      </div>
    </section>
  );
}
