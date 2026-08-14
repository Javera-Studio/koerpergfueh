import { qualifications } from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function About() {
  return (
    <section id="ueber-mich" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ImagePlaceholder
          label="Portrait: Viktoria"
          offset="top-right"
          rectTone="mint"
          aspect="aspect-[4/5]"
          className="mx-auto max-w-sm lg:mx-0"
        />

        <div>
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
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
    </section>
  );
}
