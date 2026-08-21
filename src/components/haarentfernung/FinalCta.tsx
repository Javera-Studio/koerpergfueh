import Link from "next/link";
import { business } from "@/lib/data/business";
import { WhatsAppIcon } from "@/components/ui/WhatsAppFloatingButton";

export function HaarentfernungFinalCta() {
  return (
    <section className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
          DEIN TERMIN BEI KÖRPERGFÜH
        </p>
        <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Vielleicht ist es Zeit, weniger ans Rasieren zu denken.
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
          Du möchtest einen bestimmten Bereich behandeln lassen oder bist
          dir noch nicht sicher, welche Möglichkeit zu dir passt?
        </p>
        <p className="mt-4 font-sans text-lg leading-relaxed text-petrol/80">
          Melde dich einfach bei mir. Ich beantworte dir gerne deine
          Fragen und wir schauen gemeinsam, womit du starten möchtest.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Per WhatsApp schreiben
          </a>
        </div>

        <Link
          href="/fusspflege"
          className="group mt-10 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-mint-deep transition-colors hover:text-petrol"
        >
          <span className="border-b border-transparent transition-colors group-hover:border-current">
            Auch professionelle Fußpflege entdecken
          </span>
          <span
            aria-hidden
            className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
