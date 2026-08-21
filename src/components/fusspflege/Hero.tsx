import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function FusspflegeHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 lg:px-10 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h1 className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            FUSSPFLEGE IN LAMBACH
          </h1>
          <p className="mt-4 font-display text-4xl leading-tight text-petrol sm:text-5xl lg:text-6xl">
            Weil deine Füße dich jeden Tag durchs Leben tragen.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
            Ob regelmäßige Pflege, unangenehme Druckstellen oder besondere
            Bedürfnisse – bei Körpergfüh bekommen deine Füße die
            Aufmerksamkeit, die sie verdienen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#kontakt"
              className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
            >
              Termin vereinbaren
            </Link>
            <Link
              href="#leistungen"
              className="rounded-full px-7 py-3 font-sans text-sm font-medium text-petrol underline decoration-mint-deep decoration-2 underline-offset-4 hover:text-mint-deep"
            >
              Behandlungen &amp; Preise ansehen
            </Link>
          </div>
        </div>

        <ImagePlaceholder
          label="Bild: Fußpflege-Behandlung im Studio"
          offset="top-right"
          rectTone="mint"
          aspect="aspect-[4/3]"
          className="mx-auto max-w-[576px] lg:mx-0"
          image={{
            src: "/images/fusspflege-hero.jpg",
            alt: "Fußpflege-Behandlung bei Körpergfüh by Viki in Lambach",
            preload: true,
            sizes: "(min-width: 1024px) 576px, 90vw",
          }}
        />
      </div>
    </section>
  );
}
