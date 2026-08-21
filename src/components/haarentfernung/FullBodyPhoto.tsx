import Image from "next/image";

/**
 * Zweite große, full-bleed Bild-Section vor "Mehrere Bereiche
 * kombinieren" – technisch/gestalterisch identisch zu
 * AtmospherePhoto.tsx aufgebaut (gleiche Höhen, gleiches dezentes
 * Overlay, gleiches Zitat-Muster unten links).
 */
export function HaarentfernungFullBodyPhoto() {
  return (
    <section className="reveal relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[480px]">
      <Image
        src="/images/ganz.png"
        alt="Glatte, gepflegte Haut nach einer Ganzkörper-Haarentfernung"
        fill
        sizes="100vw"
        className="object-cover object-[75%_50%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#F5F0E8]/15" />

      <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-8 lg:bottom-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="font-signature text-2xl text-petrol sm:text-3xl">
            Rundum glatt. Rundum du.
          </span>
          <div className="mt-2 h-px w-10 bg-gold/70" />
        </div>
      </div>
    </section>
  );
}
