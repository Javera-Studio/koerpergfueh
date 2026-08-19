import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Signature } from "@/components/ui/Signature";

export function Studio() {
  return (
    <section className="relative overflow-hidden bg-mint-pale py-24 lg:py-32">
      {/* dezentes botanisches Element, angelehnt an das Logo – rein dekorativ */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-mint opacity-30"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10 C 120 60, 120 140, 100 190"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M100 40 C 130 55, 150 70, 160 60" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 80 C 70 95, 50 110, 40 100" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 120 C 130 135, 150 150, 160 140" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Signature className="block">Mit viel Gefühl</Signature>
          <h2 className="mt-3 font-display text-4xl leading-snug text-petrol sm:text-5xl">
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
            rectTone="mint"
            aspect="aspect-[4/5]"
            parallax
            image={{
              src: "/images/studio1.jpe",
              alt: "Einblick in das Körpergfüh-Studio in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-right"
            rectTone="mint"
            aspect="aspect-[4/5]"
            image={{
              src: "/images/studio2.jpe",
              alt: "Einblick in das Körpergfüh-Studio in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-left"
            rectTone="mint"
            aspect="aspect-[4/5]"
            image={{
              src: "/images/studio3.jpe",
              alt: "Einblick in das Körpergfüh-Studio in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
          <ImagePlaceholder
            label="Studio-Foto"
            offset="top-right"
            rectTone="mint"
            aspect="aspect-[4/5]"
            image={{
              src: "/images/studio4.jpe",
              alt: "Einblick in das Körpergfüh-Studio in Lambach",
              sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw",
            }}
          />
        </div>
      </div>
    </section>
  );
}
