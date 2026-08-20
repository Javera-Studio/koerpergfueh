import Image from "next/image";
import Link from "next/link";

// Hero-Foto: vollflächiger Hintergrund (bis zum Browserrand), Beine rechts
// sichtbar, links freie Fläche für den Text. Kräftiges warmes Creme-/
// Beige-Overlay (#F5F0E8) neutralisiert den Orange-/Peach-Ton des Fotos
// zugunsten der Off-White/Beige-Markenwelt – links ~82% Deckkraft
// (Textlesbarkeit), nach rechts weich auf ~40% reduziert (Beine bleiben
// natürlich & kontrastreich sichtbar, kein milchiger Look). Austausch:
// einfach src unten ersetzen.
// Der Hintergrund ist bewusst full-bleed (kein weißer Rand seitlich), der
// Content-Block darüber bleibt aber auf dieselbe max-w-6xl-Breite/
// Ausrichtung wie die übrigen Sections begrenzt. Die Buttons sitzen bewusst
// als eigener, unten fixierter Block nah am unteren Bildrand statt direkt
// unter dem Fließtext.
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[640px] items-center lg:min-h-[760px]">
        <Image
          src="/images/herobild.png"
          alt="Gepflegte Beine und Füße – dauerhafte Haarentfernung und Fußpflege bei Körpergfüh in Lambach"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[right_bottom]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(245,240,232,0.82)_0%,rgba(245,240,232,0.65)_35%,rgba(245,240,232,0.5)_60%,rgba(245,240,232,0.4)_100%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="w-full pt-14 lg:w-[56%] lg:py-0">
            <p className="hero-intro-1 font-sans text-xs font-medium tracking-[0.2em] text-gold">
              KÖRPERGFÜH · LAMBACH
            </p>
            <div className="hero-intro-1 mt-3 h-px w-10 bg-gold" />

            <h1 className="hero-intro-2 mt-5 max-w-md font-display text-4xl leading-tight text-petrol sm:text-5xl lg:text-[3.25rem]">
              Gepflegte Füße.
              <br />
              Glatte Haut.
              <br />
              Und Zeit,
              <br />
              dich wohlzufühlen.
            </h1>
            <p className="hero-intro-3 mt-5 max-w-sm font-sans text-base text-petrol/80 sm:text-lg">
              Professionelle Fußpflege &amp; dauerhafte Haarentfernung in
              Lambach.
            </p>
          </div>
        </div>

        {/* Buttons: eigener Block, nah am unteren Bildrand statt direkt
            unter dem Fließtext. */}
        <div className="absolute inset-x-0 bottom-10 lg:bottom-14">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="w-full lg:w-[56%]">
              <div className="hero-intro-3 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="#leistungen"
                  className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-semibold text-petrol shadow-[inset_0_0_0_1px_rgba(31,58,52,0.12)] transition-colors hover:bg-mint-deep hover:text-cream"
                >
                  Behandlungen entdecken
                </Link>
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-1.5 border-b border-gold pb-0.5 font-sans text-sm font-medium text-petrol transition-colors hover:text-mint-deep"
                >
                  Termin anfragen
                  <span
                    aria-hidden
                    className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
