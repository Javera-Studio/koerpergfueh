import Image from "next/image";

/**
 * Großformatige, full-bleed Bild-Section als visueller Ruhepunkt zwischen
 * der Painpoint-Timeline und den textlastigeren/preisintensiven Sections.
 * Technisch/gestalterisch bewusst identisch zu
 * fusspflege/AtmospherePhoto.tsx aufgebaut, damit beide Leistungsseiten
 * visuell zusammengehören. Bewusst ohne Card/Rahmen/Schatten, ohne Text
 * und ohne Button auf dem Bild.
 */
export function HaarentfernungAtmospherePhoto() {
  return (
    <section className="reveal relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[480px]">
      <Image
        src="/images/haarentfernung.png"
        alt="Gepflegte, glatte Beine nach einer dauerhaften Haarentfernung"
        fill
        sizes="100vw"
        className="object-cover object-[50%_50%]"
      />
      {/* Sehr dezentes warmes Creme-Overlay, damit das Bild nicht zu kühl
          gegen die Körpergfüh-Farbwelt wirkt – verfälscht die Hauttöne
          nicht. */}
      <div className="pointer-events-none absolute inset-0 bg-[#F5F0E8]/15" />
    </section>
  );
}
