import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-sm bg-mint-pale lg:mx-10 lg:mt-6">
      <div className="relative flex min-h-[max(78vh,520px)] items-end">
        <Image
          src="/images/herostart.png"
          alt="Empfangsbereich des Körpergfüh-Studios in Lambach"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        {/* Hero-Overlay: warmes Off-White/Creme, ausschließlich horizontal von
            links (hinter dem Text, stark deckend) nach rechts (nahezu
            transparent) – damit der goldene Empfangstresen, die Pflanze und
            die Studioeinrichtung rechts deutlich sichtbar bleiben. Kein
            gleichmäßiges Overlay mehr über dem gesamten Bild. */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,240,0.88)_0%,rgba(248,246,240,0.55)_35%,rgba(248,246,240,0.18)_60%,rgba(248,246,240,0.07)_100%)]" />

        <div className="relative w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="hero-intro-1 font-sans text-xs font-medium tracking-[0.2em] text-petrol/80">
            KÖRPERGFÜH · LAMBACH
          </p>
          <h1 className="hero-intro-2 mt-4 max-w-2xl font-display text-5xl leading-tight text-petrol sm:text-6xl lg:text-7xl">
            Zeit, dich wohlzufühlen.
          </h1>
          <p className="hero-intro-3 mt-5 max-w-lg font-sans text-lg text-petrol/90">
            Professionelle Fußpflege &amp; dauerhafte Haarentfernung in Lambach.
          </p>
          <p className="hero-intro-3 mt-2 max-w-lg font-sans text-sm text-petrol/60">
            Persönlich. Fachkundig. Mit Gefühl.
          </p>
          <div className="hero-intro-3 mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="#leistungen"
              className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              Behandlungen entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
