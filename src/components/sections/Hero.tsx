import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-sm bg-mint-pale lg:mx-10 lg:mt-6">
      {/* Bild-Platzhalter: später durch echtes Atmosphäre-Bild von Viktoria/Studio ersetzen */}
      <div className="flex h-[78vh] min-h-[520px] items-end bg-[linear-gradient(180deg,rgba(31,58,52,0.05)_0%,rgba(31,58,52,0.55)_100%)]">
        <div className="w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-cream/90">
            KÖRPERGFÜH · LAMBACH
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-cream sm:text-6xl lg:text-7xl">
            Zeit, dich wohlzufühlen.
          </h1>
          <p className="mt-5 max-w-lg font-sans text-lg text-cream/95">
            Professionelle Fußpflege &amp; dauerhafte Haarentfernung in Lambach.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="#leistungen"
              className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-cream"
            >
              Behandlungen entdecken
            </Link>
            <span className="font-sans text-sm text-cream/80">
              Persönlich. Fachkundig. Mit Gefühl.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
