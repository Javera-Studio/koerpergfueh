import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

// Hinweis: Das bisherige großflächige Bild+Overlay-Konzept (#EAE4E3 über
// einem full-bleed Foto) wurde hier bewusst entfernt, um strukturell mit
// dem Fußpflege-Hero konsistent zu sein (Text links, Bild rechts,
// versetztes Rechteck). Die Idee bleibt für eine mögliche spätere
// atmosphärische Bild-Section auf dieser Seite im Hinterkopf, sofern dafür
// eine passende, bereits vorgegebene Section existiert – aktuell nicht der
// Fall, daher hier nicht umgesetzt.
export function HaarentfernungHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 lg:px-10 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h1 className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            DAUERHAFTE HAARENTFERNUNG IN LAMBACH
          </h1>
          <p className="mt-4 font-display text-4xl leading-tight text-petrol sm:text-5xl lg:text-6xl">
            Glatte Haut. Ohne ständig daran denken zu müssen.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
            Rasieren, Stoppeln und immer wieder von vorne anfangen?
            Dauerhafte Haarentfernung kann dir dabei helfen, unerwünschte
            Haare langfristig zu reduzieren – und dir im Alltag etwas
            zurückzugeben, das oft unterschätzt wird: Zeit und ein
            unkomplizierteres Hautgefühl.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
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

        <ImagePlaceholder
          label="Bild: Dauerhafte Haarentfernung im Studio"
          offset="top-right"
          rectTone="mint"
          aspect="aspect-[4/3]"
          className="mx-auto max-w-[480px] lg:mx-0"
          image={{
            src: "/images/haarentfernung-hero.jpg",
            alt: "Dauerhafte Haarentfernung am Bein bei Körpergfüh by Viki in Lambach",
            preload: true,
            sizes: "(min-width: 1024px) 480px, 90vw",
            objectPosition: "object-[50%_35%]",
          }}
        />
      </div>
    </section>
  );
}
