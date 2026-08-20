import Link from "next/link";
import {
  nailAndProblemServices,
  careAndExtraServices,
  mobileFootcare,
} from "@/lib/data/fusspflege";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

// Sehr feines Haus-mit-Herz-Icon (kein gefülltes Icon, keine medizinische
// Symbolik), nur für den Mobile-Fußpflege-Akzent verwendet.
function HomeHeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6 15 16 6 26 15" />
      <path d="M9 13v13h14V13" />
      <path d="M16 19.4c-1-1.6-3.3-1.3-3.3.5 0 1.7 3.3 3.7 3.3 3.7s3.3-2 3.3-3.7c0-1.8-2.3-2.1-3.3-.5Z" />
    </svg>
  );
}

export function FusspflegeMoreServices() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
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

      <div className="relative mt-16 overflow-hidden border border-gold/30 bg-greige/45 px-8 py-10 sm:px-10">
        {/* Botanisches Wasserzeichen – nur am Rand, sehr dezent, nie hinter
            dem Text. */}
        <BotanicalWatermark
          className="-bottom-10 -right-10 hidden h-[180px] w-[120px] lg:block"
          opacity={0.08}
          rotate={-4}
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2.5">
              <HomeHeartIcon className="h-5 w-5 shrink-0 text-gold" />
              <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
                AUCH BEI DIR ZU HAUSE
              </p>
            </div>
            <h3 className="mt-3 font-display text-2xl text-petrol sm:text-3xl">
              Mobile Fußpflege
            </h3>
            <p className="mt-4 font-display text-xl text-petrol">
              Du kannst nicht oder nur schwer ins Studio kommen?
            </p>
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/80">
              Ich biete auch mobile Fußpflege ab {mobileFootcare.priceFrom} an.
              Ob ein Termin bei dir zu Hause möglich ist, klären wir am besten
              direkt miteinander.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end lg:gap-5 lg:text-right">
            <p className="font-display text-3xl text-petrol sm:text-4xl">
              <span className="align-top text-base font-sans text-petrol/60">
                ab{" "}
              </span>
              {mobileFootcare.priceFrom}
            </p>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream lg:w-auto"
            >
              Mobile Fußpflege anfragen
              <span
                aria-hidden
                className="text-gold motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
