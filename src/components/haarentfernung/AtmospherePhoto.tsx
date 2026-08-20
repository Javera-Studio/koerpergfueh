import Image from "next/image";

/**
 * Großformatige, full-bleed Bild-Section als visueller Ruhepunkt zwischen
 * der Painpoint-Timeline und den textlastigeren/preisintensiven Sections.
 * Technisch/gestalterisch bewusst identisch zu
 * fusspflege/AtmospherePhoto.tsx aufgebaut, damit beide Leistungsseiten
 * visuell zusammengehören. Bewusst ohne Card/Rahmen/Schatten und ohne
 * Button auf dem Bild – nur ein dezentes Script-Zitat unten links, im
 * gleichen Stil wie "Zeit für deine Füße." auf /fusspflege.
 */
export function HaarentfernungAtmospherePhoto() {
  return (
    <section className="reveal relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[480px]">
      <Image
        src="/images/haarentfernung.png"
        alt="Gepflegte, glatte Beine nach einer dauerhaften Haarentfernung"
        fill
        sizes="100vw"
        className="object-cover object-[50%_80%]"
      />
      {/* Sehr dezentes warmes Creme-Overlay, damit das Bild nicht zu kühl
          gegen die Körpergfüh-Farbwelt wirkt – verfälscht die Hauttöne
          nicht. */}
      <div className="pointer-events-none absolute inset-0 bg-[#F5F0E8]/15" />

      <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-8 lg:bottom-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="font-signature text-2xl text-petrol sm:text-3xl">
            Ein bisschen weniger Routine. Ein bisschen mehr Freiheit.
          </span>
          <div className="mt-2 h-px w-10 bg-gold/70" />
        </div>
      </div>
    </section>
  );
}
