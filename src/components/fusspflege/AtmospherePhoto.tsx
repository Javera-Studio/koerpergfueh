import Image from "next/image";

/**
 * Großformatige, full-bleed Bild-Section als visueller Ruhepunkt zwischen
 * der Painpoint-Timeline und den weiteren Leistungsinhalten. Bewusst ohne
 * Card/Rahmen/Schatten – nur ein ruhiges, breites Foto mit sehr dezentem
 * Creme-Overlay und leichter Entsättigung, damit das warme Rosa nicht zu
 * dominant gegen die Körpergfüh-Farbwelt wirkt.
 */
export function FusspflegeAtmospherePhoto() {
  return (
    <section className="reveal relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[480px]">
      <Image
        src="/images/fuss.png"
        alt="Gepflegte Füße und Hände mit Rosenblättern bei einer Fußpflege-Behandlung"
        fill
        sizes="100vw"
        className="object-cover object-[50%_42%] saturate-[85%]"
      />
      {/* Sehr dezentes warmes Creme-Overlay – kein starkes Weiß, Rosa bleibt
          sichtbar, wirkt nur weniger dominant. */}
      <div className="pointer-events-none absolute inset-0 bg-[#F5F0E8]/15" />

      <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-8 lg:bottom-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="font-signature text-2xl text-petrol sm:text-3xl">
            Zeit für deine Füße.
          </span>
          <div className="mt-2 h-px w-10 bg-gold/70" />
        </div>
      </div>
    </section>
  );
}
