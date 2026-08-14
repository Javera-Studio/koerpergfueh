import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-sm bg-mint-pale lg:mx-10 lg:mt-6">
      {/* Bild-Platzhalter: später durch echtes Atmosphäre-Bild von Viktoria/Studio ersetzen */}
      <div className="relative flex h-[78vh] min-h-[520px] items-end">
        {/* Hero-Overlay: warmes Rosé-Greige (#EAE4E3), nach unten zur Textzone hin
            stärker deckend für Lesbarkeit – zentrales Element der visuellen Identität
            zusammen mit Körpergfüh-Mint und dunklem Petrol. */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,228,227,0.65)_0%,rgba(234,228,227,0.68)_45%,rgba(234,228,227,0.78)_100%)]" />

        <div className="relative w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-petrol/80">
            KÖRPERGFÜH · LAMBACH
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-petrol sm:text-6xl lg:text-7xl">
            Zeit, dich wohlzufühlen.
          </h1>
          <p className="mt-5 max-w-lg font-sans text-lg text-petrol/90">
            Professionelle Fußpflege &amp; dauerhafte Haarentfernung in Lambach.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="#leistungen"
              className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              Behandlungen entdecken
            </Link>
            <span className="font-sans text-sm text-petrol/70">
              Persönlich. Fachkundig. Mit Gefühl.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
