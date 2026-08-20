import Link from "next/link";
import { mainTreatments } from "@/lib/data/fusspflege";

export function FusspflegeMainTreatments() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      {/* items-start statt Grid-Default (stretch): die Karten wachsen aus
          ihrem eigenen Inhalt. Die Angleichung auf Desktop entsteht nicht
          über Card-Stretching, sondern über zwei fest definierte
          Mindesthöhen (Beschreibung + Leistungsliste), damit Bulletpoints,
          Gold-Linie, Preis und Button bei allen drei Karten auf derselben
          Höhe beginnen – nur ab lg, auf Mobile wächst jede Karte frei mit
          ihrem Inhalt. */}
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-8">
        {mainTreatments.map((treatment) => (
          <div
            key={treatment.title}
            className="rounded-sm border border-mint-pale bg-cream p-8"
          >
            <h3 className="font-display text-3xl text-petrol">
              {treatment.title}
            </h3>
            <p className="mt-1.5 font-sans text-sm font-medium text-mint-deep">
              {treatment.subtitle}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-petrol/75 lg:min-h-28">
              {treatment.description}
            </p>

            {treatment.includes.length > 0 && (
              <ul className="mt-8 flex flex-col gap-2 lg:min-h-48">
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

            {/* Preis folgt mit natürlichem, bewusstem Abstand nach der
                Leistungsliste statt an den unteren Kartenrand gezogen zu
                werden. Feine Gold-Linie als dezenter Premium-Akzent direkt
                darüber. */}
            <div className="mt-9 h-px w-10 bg-gold/50" />
            <p className="mt-3 font-display text-4xl text-petrol">
              {treatment.price}
            </p>
            <Link
              href="/#kontakt"
              className="mt-5 block rounded-full bg-mint px-6 py-3 text-center font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              {treatment.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
