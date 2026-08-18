import { business, openingHours } from "@/lib/data/business";
import { Signature } from "@/components/ui/Signature";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

const mapQuery = encodeURIComponent(
  `${business.name}, ${business.address.street}, ${business.address.zip} ${business.address.city}`
);

export function Availability() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Botanisches Wasserzeichen (pflanze.png) – sehr dezent, am Rand,
          stört weder Öffnungszeiten noch Karte. */}
      <BotanicalWatermark
        className="-top-10 -left-10 hidden h-[240px] w-[160px] lg:block lg:h-[330px] lg:w-[220px]"
        opacity={0.06}
        rotate={6}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-stretch lg:gap-24">
          <div>
            <Signature className="block">Körpergfüh</Signature>
            <h2 className="mt-3 font-display text-3xl leading-snug text-petrol sm:text-4xl">
              Telefonische Erreichbarkeit
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />

            <ul className="mt-8 flex flex-col">
              {openingHours.map((entry) => (
                <li
                  key={entry.day}
                  className="flex items-baseline justify-between gap-4 border-b border-mint-pale py-3 font-sans text-base text-petrol first:border-t"
                >
                  <span>{entry.day}</span>
                  <span className="text-petrol/70">{entry.hours || "–"}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-sans text-sm text-petrol/60">
              Außerhalb dieser Zeiten erreichst du mich am besten über das
              Kontaktformular oder per E-Mail.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="min-h-[320px] flex-1 overflow-hidden rounded-sm ring-1 ring-mint-pale">
              <iframe
                title={`Standort von ${business.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block self-start font-sans text-sm font-medium text-mint-deep hover:underline"
            >
              Route planen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
