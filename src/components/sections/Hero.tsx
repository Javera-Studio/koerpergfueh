import Image from "next/image";
import Link from "next/link";

// Hero-Foto: gezielt ausgewählt mit freier beiger Fläche links (für den
// Text) und Beinen/Füßen rechts. Bewusst KEIN Overlay – das Foto bleibt in
// seinen Originalfarben sichtbar. Austausch: einfach src unten ersetzen.
export function Hero() {
  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-sm lg:mx-10 lg:mt-6">
      <div className="lg:relative lg:min-h-[640px]">
        {/* Bild: auf Mobile eigener oberer Bereich (fester Ausschnitt), auf
            Desktop volle Fläche im Hintergrund. */}
        <div className="relative h-[300px] sm:h-[360px] lg:absolute lg:inset-0 lg:h-auto">
          <Image
            src="/images/herobild.png"
            alt="Gepflegte Beine und Füße – dauerhafte Haarentfernung und Fußpflege bei Körpergfüh in Lambach"
            fill
            preload
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>

        {/* Text: auf Mobile darunter auf Off-White, auf Desktop links über
            der freien Bildfläche, vertikal mittig. Bewusst nicht die ganze
            Fläche füllen. */}
        <div className="bg-cream px-6 py-10 sm:px-10 sm:py-12 lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[56%] lg:items-center lg:bg-transparent lg:px-16 lg:py-0">
          <div>
            <div className="hero-intro-1 flex items-center gap-3">
              <p className="font-sans text-xs font-medium tracking-[0.2em] text-petrol/80">
                KÖRPERGFÜH · LAMBACH
              </p>
            </div>
            <div className="hero-intro-1 mt-2 h-px w-10 bg-gold" />

            <h1 className="hero-intro-2 mt-5 max-w-md font-display text-4xl leading-tight text-petrol sm:text-5xl lg:text-6xl">
              Gepflegte Füße.
              <br />
              Glatte Haut.
              <br />
              Und Zeit, dich wohlzufühlen.
            </h1>
            <p className="hero-intro-3 mt-5 max-w-sm font-sans text-base text-petrol/80 sm:text-lg">
              Professionelle Fußpflege &amp; dauerhafte Haarentfernung in
              Lambach.
            </p>
            <div className="hero-intro-3 mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="#leistungen"
                className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-semibold text-petrol shadow-[inset_0_0_0_1px_rgba(31,58,52,0.12)] transition-colors hover:bg-mint-deep hover:text-cream"
              >
                Behandlungen entdecken
              </Link>
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-petrol/80 transition-colors hover:text-petrol"
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
    </section>
  );
}
