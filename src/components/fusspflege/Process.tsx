import { treatmentSteps } from "@/lib/data/fusspflege";

export function FusspflegeProcess() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
        DEIN TERMIN BEI KÖRPERGFÜH
      </p>
      <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Was dich bei mir erwartet.
      </h2>

      <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
        {treatmentSteps.map((step, index) => (
          <div key={step.number} className={`reveal reveal-d${(index % 4) + 1}`}>
            <p className="font-display text-4xl text-mint-deep">
              {step.number}
            </p>
            <h3 className="mt-3 font-display text-2xl text-petrol">
              {step.title}
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/75">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
