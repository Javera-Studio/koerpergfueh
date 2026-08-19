import { painpoints } from "@/lib/data/business";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";
import { PainpointIcon } from "@/components/ui/PainpointIcon";

export function Painpoints() {
  return (
    <section className="relative overflow-hidden">
      {/* Botanisches Wasserzeichen (pflanze.png) – groß, am Rand angeschnitten,
          nur Desktop, sehr niedrige Opacity. */}
      <BotanicalWatermark
        className="-bottom-20 -right-20 hidden h-[390px] w-[260px] lg:block lg:h-[570px] lg:w-[380px]"
        opacity={0.14}
        rotate={-6}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <h2 className="reveal max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Kommt dir das bekannt vor?
        </h2>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {painpoints.map((point, index) => (
            <div
              key={point.title}
              className={`reveal reveal-d${(index % 4) + 1} border-t border-mint-pale pt-6`}
            >
              <PainpointIcon name={point.icon} className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-display text-2xl text-petrol">
                {point.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-petrol/75">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-20 text-center font-display text-3xl text-gold">
          Genau dafür ist Körpergfüh da.
        </p>
      </div>
    </section>
  );
}
