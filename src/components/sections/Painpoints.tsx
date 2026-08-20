import Image from "next/image";
import { painpoints } from "@/lib/data/business";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

export function Painpoints() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f2]">
      {/* Botanisches Wasserzeichen (pflanze.png) – groß, am Rand angeschnitten,
          nur Desktop, sehr niedrige Opacity. */}
      <BotanicalWatermark
        className="-bottom-20 -right-20 hidden h-[390px] w-[260px] lg:block lg:h-[570px] lg:w-[380px]"
        opacity={0.14}
        rotate={-6}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <h2 className="reveal max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Kommt dir das bekannt vor?
        </h2>

        <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2">
          {painpoints.map((point, index) => (
            <div
              key={point.titleEmphasis}
              className={`reveal reveal-d${(index % 4) + 1} flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-7 sm:text-left`}
            >
              <div className="relative h-40 w-40 shrink-0 sm:h-44 sm:w-44">
                <Image
                  src={point.image.src}
                  alt={point.image.alt}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl leading-snug text-petrol">
                  {point.titleStart}{" "}
                  <em className="italic text-mint-deep">
                    {point.titleEmphasis}
                  </em>
                </h3>
                <div className="relative mx-auto mt-4 h-px w-16 bg-gold/50 sm:mx-0">
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold"
                  />
                </div>
                <p className="mt-4 font-sans text-base leading-relaxed text-petrol/75">
                  {point.text}
                </p>
              </div>
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
