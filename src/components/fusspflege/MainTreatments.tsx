import { business } from "@/lib/data/business";
import { mainTreatments } from "@/lib/data/fusspflege";
import { WhatsAppIcon } from "@/components/ui/WhatsAppFloatingButton";

export function FusspflegeMainTreatments() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      {/* CSS Subgrid statt geschätzter min-heights: die äußere Grid definiert
          4 Zeilen (Titel+Claim / Beschreibung / Bulletpoints / Preis), jede
          Karte spannt via grid-rows-subgrid alle 4 Zeilen auf. Dadurch
          übernimmt jede Zeile automatisch die Höhe ihres größten Inhalts
          über alle drei Karten hinweg – Bulletpoints und Preis beginnen
          zwangsläufig auf derselben Höhe, robust auch bei künftigen
          Textänderungen. Nur ab lg aktiv, auf Mobile stapeln sich die
          Karten mit natürlicher Höhe. Kein Button mehr pro Karte – dafür
          ein gemeinsamer WhatsApp-CTA unterhalb aller drei Karten. */}
      <div className="grid gap-y-10 gap-x-8 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:items-start lg:gap-y-8">
        {mainTreatments.map((treatment) => (
          <div
            key={treatment.title}
            className="rounded-sm border border-mint-pale bg-cream p-8 lg:grid lg:grid-rows-subgrid lg:row-span-4 lg:gap-0"
          >
            <div>
              <h3 className="font-display text-3xl text-petrol">
                {treatment.title}
              </h3>
              <p className="mt-1.5 font-sans text-sm font-medium text-mint-deep">
                {treatment.subtitle}
              </p>
            </div>

            <p className="mt-4 font-sans text-sm leading-relaxed text-petrol/75 lg:mt-0 lg:self-start">
              {treatment.description}
            </p>

            {treatment.includes.length > 0 && (
              <ul className="mt-10 flex flex-col gap-2 lg:mt-0 lg:self-start lg:pt-4">
                {treatment.includes.map((item, index) => (
                  <li
                    key={item}
                    className={`reveal reveal-d${(index % 4) + 1} flex items-start gap-3 font-sans text-sm text-petrol/80`}
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Gold-Linie + Preis gemeinsam als eine Subgrid-Zeile, damit
                beide über alle Karten hinweg auf derselben Höhe beginnen. */}
            <div className="mt-9 py-5 lg:mt-0 lg:self-start lg:py-6">
              <div className="h-px w-10 bg-gold/50" />
              <p className="mt-3 font-display text-4xl text-petrol">
                {treatment.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gemeinsamer CTA-Bereich statt drei einzelner Buttons pro Karte. */}
      <div className="mt-14 text-center lg:mt-16">
        <p className="font-sans text-lg text-petrol/80">
          Du weißt schon, welche Behandlung zu dir passt?
        </p>
        <a
          href={business.whatsappHrefTermin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Über WhatsApp Termin anfragen
        </a>
      </div>
    </section>
  );
}
