import Link from "next/link";
import {
  nailAndProblemServices,
  careAndExtraServices,
  mobileFootcare,
} from "@/lib/data/fusspflege";

export function FusspflegeMoreServices() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <h2 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Manchmal braucht es etwas mehr.
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
        Neben der klassischen Fußpflege biete ich weitere gezielte
        Behandlungen und Ergänzungen an.
      </p>

      <div className="mt-16 grid gap-14 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl text-petrol">
            Nägel &amp; Problemstellen
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {nailAndProblemServices.map((service, index) => (
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

        <div>
          <h3 className="font-display text-2xl text-petrol">
            Pflege &amp; Extras
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {careAndExtraServices.map((service, index) => (
              <li
                key={service.label}
                className={`reveal reveal-d${(index % 4) + 1} flex items-baseline justify-between gap-4 border-b border-mint-pale pb-3 font-sans text-base text-petrol`}
              >
                <span>
                  {service.label}
                  {service.note && (
                    <span className="block text-sm text-petrol/60">
                      {service.note}
                    </span>
                  )}
                </span>
                <span className="whitespace-nowrap text-petrol/70">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-sm bg-mint-pale/40 p-8">
        <h3 className="font-display text-2xl text-petrol">
          Mobile Fußpflege
        </h3>
        <p className="mt-3 font-sans text-base font-medium text-petrol">
          Du kannst nicht oder nur schwer ins Studio kommen?
        </p>
        <p className="mt-2 font-sans text-base leading-relaxed text-petrol/80">
          Ich biete auch mobile Fußpflege ab {mobileFootcare.priceFrom} an.
          Ob ein Termin bei dir zu Hause möglich ist, klären wir am besten
          direkt miteinander.
        </p>
        <Link
          href="/#kontakt"
          className="mt-6 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
        >
          Mobile Fußpflege anfragen
        </Link>
      </div>
    </section>
  );
}
