import { qualifications } from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Signature } from "@/components/ui/Signature";

export function About() {
  return (
    <section
      id="ueber-mich"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Botanisches Signature-Element: einzige animierte Vorkommen auf der
          gesamten Website. Bewusst klein, vollständig innerhalb dieser
          Section (kein Bleed über den Rand), sehr niedrige Opacity –
          Wasserzeichen-Wirkung statt dominanter Grafik. Nur ab lg sichtbar,
          in der Weißraum-Ecke über dem Content, ausreichend Abstand zu Text. */}
      <svg
        aria-hidden
        className="botanical-draw pointer-events-none absolute right-8 top-8 hidden h-28 w-14 text-mint-deep opacity-10 lg:block"
        viewBox="0 0 56 160"
        fill="none"
      >
        <path d="M28 4 C 26 50, 30 110, 28 156" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 24 C 20 20, 12 22, 8 30" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 48 C 36 44, 44 46, 48 54" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 74 C 20 70, 12 72, 8 80" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 100 C 36 96, 44 98, 48 106" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 126 C 20 122, 13 124, 9 131" stroke="currentColor" strokeWidth="1.25" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ImagePlaceholder
          label="Portrait: Viktoria"
          offset="top-right"
          rectTone="mint"
          aspect="aspect-[4/5]"
          className="mx-auto max-w-sm lg:mx-0"
          parallax
        />

        <div>
          <Signature className="block">Schön, dass du da bist</Signature>
          <p className="mt-3 font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            PERSÖNLICH FÜR DICH DA
          </p>
          <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            Hallo, ich bin Viktoria.
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
            Bei Körpergfüh geht es für mich um mehr als eine Behandlung. Mir ist
            wichtig, dass du dich gut aufgehoben fühlst und deine individuellen
            Bedürfnisse im Mittelpunkt stehen.
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            {qualifications.map((qualification) => (
              <li key={qualification} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-deep" />
                <span className="font-sans text-base text-petrol">
                  {qualification}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
