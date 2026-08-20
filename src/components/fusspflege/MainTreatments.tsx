import Link from "next/link";
import { mainTreatments } from "@/lib/data/fusspflege";

export function FusspflegeMainTreatments() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      {/* CSS Subgrid statt geschätzter min-heights: die äußere Grid definiert
          5 Zeilen (Titel+Claim / Beschreibung / Bulletpoints / Preis /
          Button), jede Karte spannt via grid-rows-subgrid alle 5 Zeilen auf.
          Dadurch übernimmt jede Zeile automatisch die Höhe ihres größten
          Inhalts über alle drei Karten hinweg – Bulletpoints, Preis und
          Button beginnen zwangsläufig auf derselben Höhe, robust auch bei
          künftigen Textänderungen. Nur ab lg aktiv, auf Mobile stapeln sich
          die Karten mit natürlicher Höhe. */}
      <div className="grid gap-y-10 gap-x-8 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto_auto] lg:items-start lg:gap-y-8">
        {mainTreatments.map((treatment) => (
          <div
            key={treatment.title}
            className="rounded-sm border border-mint-pale bg-cream p-8 lg:grid lg:grid-rows-subgrid lg:row-span-5 lg:gap-0"
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
              <ul className="mt-8 flex flex-col gap-2 lg:mt-0 lg:self-start">
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
            <div className="mt-9 lg:mt-0 lg:self-start">
              <div className="h-px w-10 bg-gold/50" />
              <p className="mt-3 font-display text-4xl text-petrol">
                {treatment.price}
              </p>
            </div>

            <Link
              href="/#kontakt"
              className="mt-5 block rounded-full bg-mint px-6 py-3 text-center font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream lg:mt-0 lg:self-start"
            >
              {treatment.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
