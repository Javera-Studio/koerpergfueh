import Image from "next/image";
import Link from "next/link";

export function HaarentfernungHero() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-sm bg-mint-pale lg:mx-10 lg:mt-6">
      <div className="relative flex h-[78vh] min-h-[520px] items-end">
        <Image
          src="/images/haarentfernung-hero.jpg"
          alt="Dauerhafte Haarentfernung am Bein bei Körpergfüh by Viki in Lambach"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[25%_30%] lg:object-[center_25%]"
        />
        {/* Hero-Overlay: warmes Rosé-Greige (#EAE4E3). Da das Foto bereits
            sehr hell ist, bewusst niedrigere Deckkraft (~55–65%) als beim
            Fußpflege-Hero, damit die Behandlung erkennbar bleibt. */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,228,227,0.55)_0%,rgba(234,228,227,0.6)_45%,rgba(234,228,227,0.68)_100%)]" />

        <div className="relative w-full px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="hero-intro-1 font-sans text-xs font-medium tracking-[0.2em] text-petrol/80">
            DAUERHAFTE HAARENTFERNUNG IN LAMBACH
          </p>
          <h1 className="hero-intro-2 mt-4 max-w-2xl font-display text-5xl leading-tight text-petrol sm:text-6xl lg:text-7xl">
            Glatte Haut. Ohne ständig daran denken zu müssen.
          </h1>
          <p className="hero-intro-3 mt-5 max-w-lg font-sans text-lg text-petrol/90">
            Rasieren, Stoppeln und immer wieder von vorne anfangen?
            Dauerhafte Haarentfernung kann dir dabei helfen, unerwünschte
            Haare langfristig zu reduzieren – und dir im Alltag etwas
            zurückzugeben, das oft unterschätzt wird: Zeit und ein
            unkomplizierteres Hautgefühl.
          </p>
          <div className="hero-intro-3 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#painpoints"
              className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              Behandlung entdecken
            </Link>
            <Link
              href="#preise"
              className="rounded-full px-7 py-3 font-sans text-sm font-medium text-petrol underline decoration-mint-deep decoration-2 underline-offset-4 hover:text-mint-deep"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
