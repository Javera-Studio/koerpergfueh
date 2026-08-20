import { manicureServices } from "@/lib/data/fusspflege";

export function FusspflegeManicure() {
  return (
    <section className="bg-mint-pale/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            AUCH FÜR DEINE HÄNDE
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-petrol sm:text-4xl">
            Gepflegt bis in die Fingerspitzen.
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
            Neben der Fußpflege kannst du bei mir auch deinen Händen eine
            kleine Auszeit gönnen.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {manicureServices.map((service, index) => (
              <li
                key={service.label}
                className={`reveal reveal-d${(index % 4) + 1} flex items-baseline justify-between gap-4 border-b border-mint-pale pb-3 font-sans text-base text-petrol`}
              >
                <span>{service.label}</span>
                <span className="whitespace-nowrap text-petrol/70">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
