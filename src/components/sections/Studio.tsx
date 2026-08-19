import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Signature } from "@/components/ui/Signature";

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-left"
            rectTone="greige"
            aspect="aspect-[4/5]"
            className="lg:mt-6"
            parallax
            image={{
              src: "/images/studio1.jpe",
              alt: "Empfangsbereich des Körpergfüh-Studios in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-right"
            rectTone="mint-pale"
            aspect="aspect-[4/5]"
            image={{
              src: "/images/studio2.jpe",
              alt: "Blick in den Behandlungsbereich bei Körpergfüh in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-left"
            rectTone="mint"
            aspect="aspect-[4/5]"
            className="lg:mt-6"
            image={{
              src: "/images/studio3.jpe",
              alt: "Persönliche Atmosphäre im Körpergfüh-Studio in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-right"
            rectTone="greige"
            aspect="aspect-[4/5]"
            image={{
              src: "/images/studio4.jpe",
              alt: "Detailansicht des Körpergfüh-Studios in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
        </div>
      </div>
    </section>
  );
}
