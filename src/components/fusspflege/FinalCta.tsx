import Link from "next/link";
import { business } from "@/lib/data/business";

export function FusspflegeFinalCta() {
  return (
    <section className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Deine Füße tragen dich jeden Tag. Zeit, ihnen etwas zurückzugeben.
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
          Ob du regelmäßig zur Fußpflege kommen möchtest, dich etwas an
          deinen Füßen stört oder du besondere Bedürfnisse hast – du musst
          nicht selbst wissen, welche Behandlung die richtige für dich ist.
        </p>
        <p className="mt-4 font-sans text-lg leading-relaxed text-petrol/80">
          Melde dich einfach bei mir. Gemeinsam schauen wir, was deine Füße
          brauchen.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/#kontakt"
            className="rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            Termin anfragen
          </Link>
          <a
            href={business.phoneHref}
            className="font-sans text-sm font-medium text-mint-deep hover:underline"
          >
            {business.phone}
          </a>
        </div>

        <Link
          href="/haarentfernung"
          className="group mt-10 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-mint-deep transition-colors hover:text-petrol"
        >
          <span className="border-b border-transparent transition-colors group-hover:border-current">
            Auch dauerhafte Haarentfernung entdecken
          </span>
          <span
            aria-hidden
            className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <div className="mt-6 font-sans text-sm text-petrol/70">
          <p className="font-medium text-petrol">{business.name}</p>
          <p>{business.address.street}</p>
          <p>
            {business.address.zip} {business.address.city}
          </p>
        </div>
      </div>
    </section>
  );
}
