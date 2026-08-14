import Link from "next/link";
import { services } from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Services() {
  return (
    <section id="leistungen" className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Zwei Wege zu deinem Körpergfüh.
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {services.map((service) => (
            <Link key={service.slug} href={service.href} className="group block">
              <ImagePlaceholder
                label={`Bild: ${service.title}`}
                aspect="aspect-[5/4]"
                className="w-full"
              />
              <h3 className="mt-6 font-display text-3xl text-petrol">
                {service.shortTitle}
              </h3>
              <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-petrol/75">
                {service.description}
              </p>
              <span className="mt-4 inline-block font-sans text-sm font-medium text-mint-deep group-hover:underline">
                {service.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
