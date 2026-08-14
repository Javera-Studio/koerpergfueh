import { painpoints } from "@/lib/data/business";

export function Painpoints() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <h2 className="max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Kommt dir das bekannt vor?
      </h2>

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
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

      <p className="mt-20 text-center font-display text-3xl text-mint-deep">
        Genau dafür ist Körpergfüh da.
      </p>
    </section>
  );
}
