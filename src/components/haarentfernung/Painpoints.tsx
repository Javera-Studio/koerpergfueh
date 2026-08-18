import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

const painpoints = [
  {
    title: "Stoppeln, die schneller zurück sind, als dir lieb ist.",
    text: "Gerade erst rasiert und kurze Zeit später fühlt sich die Haut schon wieder anders an.",
  },
  {
    title: "Rasieren gehört ständig zur Routine.",
    text: "Beine, Achseln, Bikinizone oder Gesicht – immer wieder daran denken, Zeit dafür einplanen und von vorne beginnen.",
  },
  {
    title: "Deine Haut reagiert empfindlich.",
    text: "Rasieren kann für manche Haut unangenehm sein und das gewünschte glatte Hautgefühl hält oft nicht lange an.",
  },
  {
    title: "Spontan sein? Erst einmal ans Rasieren denken.",
    text: "Sommer, Schwimmbad, Urlaub oder einfach das Lieblingsoutfit – manchmal möchtest du dir darüber einfach keine Gedanken machen müssen.",
  },
] as const;

export function HaarentfernungPainpoints() {
  return (
    <section id="painpoints" className="relative overflow-hidden">
      {/* Botanisches Wasserzeichen (pflanze.png) – kleiner als bei den
          anderen Seiten, gespiegelt, rechts, nur Desktop. */}
      <BotanicalWatermark
        className="-bottom-10 -right-10 hidden h-[240px] w-[160px] lg:block lg:h-[330px] lg:w-[220px]"
        opacity={0.08}
        flip
        rotate={-5}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
        KENNST DU DAS?
      </p>
      <h2 className="mt-4 max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Kaum rasiert – und schon wieder da.
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
        Für viele gehört Haarentfernung einfach zum Alltag. Und genau
        deshalb merkt man oft gar nicht mehr, wie viel Zeit und
        Aufmerksamkeit sie eigentlich beansprucht.
      </p>

      <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {painpoints.map((point, index) => (
          <div
            key={point.title}
            className={`reveal reveal-d${(index % 4) + 1} border-t border-mint-pale pt-6`}
          >
            <h3 className="font-display text-2xl text-petrol">{point.title}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/75">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-16 max-w-2xl border-t border-mint-pale pt-10 font-display text-2xl leading-snug text-mint-deep">
        Vielleicht wünschst du dir deshalb nicht einfach nur weniger Haare.
        Sondern weniger Aufwand damit.
      </p>
      </div>
    </section>
  );
}
