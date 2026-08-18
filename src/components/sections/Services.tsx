import Link from "next/link";
import { services } from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const serviceImages: Record<
  (typeof services)[number]["slug"],
  { src: string; alt: string; objectPosition?: string }
> = {
  fusspflege: {
    src: "/images/fusspflege-hero.jpg",
    alt: "Fußpflege-Behandlung bei Körpergfüh by Viki in Lambach",
  },
  haarentfernung: {
    src: "/images/haarentfernung-hero.jpg",
    alt: "Dauerhafte Haarentfernung am Bein bei Körpergfüh by Viki in Lambach",
    objectPosition: "object-[25%_30%]",
  },
};

export function Services() {
  return (
    <section id="leistungen" className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="reveal max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Zwei Wege zu deinem Körpergfüh.
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={service.href}
              className={`reveal reveal-d${index + 1} group block`}
            >
              <ImagePlaceholder
                label={`Bild: ${service.title}`}
                aspect="aspect-[5/4]"
                className="w-full"
                hoverZoom
                image={{
                  ...serviceImages[service.slug],
                  sizes: "(min-width: 1024px) 560px, 90vw",
                }}
              />
              <h3 className="mt-6 font-display text-3xl text-petrol">
                {service.shortTitle}
              </h3>
              <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-petrol/75">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-medium text-mint-deep group-hover:underline">
                {service.cta}
                <span
                  aria-hidden
                  className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
