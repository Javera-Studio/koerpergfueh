import { qualifications } from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function FusspflegeTrust() {
  return (
    <section className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ImagePlaceholder
            label="Portrait: Viktoria"
            offset="top-left"
            rectTone="mint"
            aspect="aspect-[4/5]"
            className="mx-auto max-w-sm lg:mx-0 lg:order-2"
          />

          <div className="lg:order-1">
            <h2 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
              Bei deinen Füßen zählt nicht nur die Behandlung. Sondern auch,
              wem du sie anvertraust.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
              Mir ist wichtig, dass du dich bei mir nicht nur professionell
              behandelt, sondern auch persönlich gut aufgehoben fühlst.
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-petrol/80">
              Durch meinen medizinischen und pflegerischen Hintergrund und
              meine onkologisch-kosmetische Zusatzausbildung bringe ich
              zusätzliches Fachwissen mit, das besonders dann wertvoll ist,
              wenn deine Füße besondere Aufmerksamkeit benötigen.
            </p>

            <p className="mt-8 font-display text-2xl leading-snug text-mint-deep">
              Ich möchte nicht einfach behandeln. Ich möchte hinschauen,
              zuhören und die Fußpflege an dich und deine Bedürfnisse
              anpassen.
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
