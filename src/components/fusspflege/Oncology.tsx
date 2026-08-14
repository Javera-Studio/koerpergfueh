import Link from "next/link";
import { oncologyTreatment } from "@/lib/data/fusspflege";

export function FusspflegeOncology() {
  return (
    <section className="oncology-bg-reveal bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="reveal font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
          BESONDERE ACHTSAMKEIT · BESONDERE BEDÜRFNISSE
        </p>
        <h2 className="reveal reveal-d1 mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          In einer herausfordernden Zeit darfst du dich besonders gut
          aufgehoben fühlen.
        </h2>
        <p className="reveal reveal-d2 mt-3 font-display text-2xl text-mint-deep">
          Onkologisch-kosmetische Fußpflege
        </p>

        <div className="reveal reveal-d3 mt-8 flex flex-col gap-5 font-sans text-lg leading-relaxed text-petrol/80">
          <p>
            Als zertifizierte onkologische Fußpflegerin weiß ich, dass eine
            Krebserkrankung und insbesondere eine Chemotherapie auch Haut und
            Nägel verändern können. Empfindliche Haut, Rötungen oder
            Veränderungen an den Nägeln können in dieser Zeit zusätzliche
            Aufmerksamkeit erforderlich machen.
          </p>
          <p>
            Gerade in einer solchen Lebensphase ist mir wichtig, dir mit
            Ruhe, Fachwissen und viel Einfühlungsvermögen zu begegnen.
          </p>
          <p>
            Ich nehme mir Zeit, deine aktuelle Situation anzusehen und die
            Fußpflege individuell darauf abzustimmen. Dabei sollst du dich
            bei mir nicht nur fachlich gut betreut, sondern auch menschlich
            gut aufgehoben fühlen.
          </p>
        </div>

        <div className="reveal reveal-d4 mt-12 rounded-sm bg-cream p-8">
          <h3 className="font-display text-2xl text-petrol">
            Was zu dieser besonderen Betreuung gehört
          </h3>
          <ul className="mt-5 flex flex-col gap-2">
            {oncologyTreatment.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-base text-petrol/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint-deep" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-mint-pale pt-6">
            <p className="font-sans text-sm text-petrol/70">
              {oncologyTreatment.title}
            </p>
            <p className="mt-1 font-display text-3xl text-petrol">
              {oncologyTreatment.price}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-sans text-base text-petrol/80">
            Du bist dir unsicher oder möchtest vor deinem ersten Termin etwas
            mit mir besprechen?
          </p>
          <p className="mt-2 font-sans text-base text-petrol/80">
            Dann melde dich gerne bei mir. Manche Fragen lassen sich am
            besten persönlich klären.
          </p>
          <Link
            href="/#kontakt"
            className="mt-6 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            Frage vorab stellen
          </Link>
        </div>
      </div>
    </section>
  );
}
