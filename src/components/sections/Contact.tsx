import { business } from "@/lib/data/business";
import { ContactForm } from "@/components/ui/ContactForm";
import { Signature } from "@/components/ui/Signature";

export function Contact() {
  return (
    <section id="kontakt" className="bg-greige/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="reveal block text-center font-signature text-xl text-gold sm:text-2xl">
          Schön, dass du da bist.
        </p>

        <div className="mt-10 grid gap-16 lg:mt-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <Signature className="reveal block" color="gold">
              Ich bin gerne für dich da.
            </Signature>
            <h2 className="reveal reveal-d1 mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
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
                className="mt-3 block font-medium text-mint-deep transition-colors hover:text-gold"
              >
                {business.phone}
              </a>
              <a
                href={business.emailHref}
                className="mt-1 block font-medium text-mint-deep transition-colors hover:text-gold"
              >
                {business.email}
              </a>
            </div>
          </div>

          <div className="rounded-sm bg-cream p-8 ring-1 ring-mint-pale lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
