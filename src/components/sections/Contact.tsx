import { business } from "@/lib/data/business";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <section id="kontakt" className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
              Du bist dir noch nicht sicher, welche Behandlung zu dir passt?
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
              Melde dich gerne bei mir. Gemeinsam schauen wir, was für deine
              Bedürfnisse sinnvoll ist.
            </p>

            <div className="mt-10 font-sans text-base text-petrol">
              <p className="font-medium">{business.owner}</p>
              <p className="mt-1 text-petrol/80">{business.address.street}</p>
              <p className="text-petrol/80">
                {business.address.zip} {business.address.city}
              </p>
              <a
                href={business.phoneHref}
                className="mt-3 inline-block font-medium text-mint-deep hover:underline"
              >
                {business.phone}
              </a>
            </div>

            {business.openingHours ? (
              <div className="mt-8 font-sans text-sm text-petrol/80">
                {business.openingHours.map((entry) => (
                  <p key={entry.day}>
                    {entry.day}: {entry.hours}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-8 font-sans text-sm italic text-petrol/50">
                Öffnungszeiten werden in Kürze ergänzt.
              </p>
            )}

            {/* Platz für Karte/Standort – nach Freigabe einbetten */}
            <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-sm bg-mint-pale">
              <span className="font-sans text-xs uppercase tracking-wide text-petrol/50">
                Karte / Standort
              </span>
            </div>
          </div>

          <div className="rounded-sm bg-cream p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
