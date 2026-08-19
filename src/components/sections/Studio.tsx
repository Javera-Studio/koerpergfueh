import Image from "next/image";
import { Signature } from "@/components/ui/Signature";

// Vier vorhandene Studiofotos, unverändert. Bewusst hier statt in
// business.ts gepflegt, da rein layoutbezogen (Reihenfolge/Alt-Texte an
// diese eine Galerie gebunden).
const studioPhotos = [
  {
    src: "/images/studio1.jpe",
    alt: "Empfangsbereich des Körpergfüh-Studios in Lambach",
  },
  {
    src: "/images/studio2.jpe",
    alt: "Blick in den Behandlungsbereich bei Körpergfüh in Lambach",
  },
  {
    src: "/images/studio3.jpe",
    alt: "Persönliche Atmosphäre im Körpergfüh-Studio in Lambach",
  },
  {
    src: "/images/studio4.jpe",
    alt: "Detailansicht des Körpergfüh-Studios in Lambach",
  },
] as const;

export function Studio() {
  return (
    <section className="relative overflow-hidden bg-greige/40 py-24 lg:py-32">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Signature className="reveal block" color="gold">
            Mit viel Gefühl
          </Signature>
          <h2 className="reveal reveal-d1 mt-3 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            Ein Ort, an dem du dich gut aufgehoben fühlen darfst.
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
            Eine persönliche Atmosphäre, individuelle Betreuung und Zeit für
            deine Bedürfnisse – damit du dich vom ersten Moment an wohlfühlen
            kannst.
          </p>
        </div>

        {/* Einheitliche Galerie: gleiche Größe, gleiche Grundlinie, gleicher
            Radius, gleicher Abstand. Wechselndes, aber konsistentes
            Hintergrundrechteck (Mint-hell / Beige) statt vier
            unterschiedlicher Flächen. Einzige Interaktion: sehr sanfter
            Hover-Zoom aufs Foto, Rechteck wandert dabei minimal gegenläufig. */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {studioPhotos.map((photo, index) => (
            <div key={photo.src} className="reveal group relative">
              <div
                className={`absolute -left-5 -top-5 h-full w-full rounded-sm motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:translate-x-1.5 motion-safe:group-hover:translate-y-1.5 lg:-left-6 lg:-top-6 ${
                  index % 2 === 0 ? "bg-mint-pale" : "bg-greige"
                }`}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream ring-1 ring-mint-pale/50">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
