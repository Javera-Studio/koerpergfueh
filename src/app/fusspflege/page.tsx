import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fußpflege in Lambach",
  description:
    "Professionelle Fußpflege bei Körpergfüh by Viki in Lambach – Detailseite folgt in Kürze.",
};

export default function FusspflegePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
      <h1 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Fußpflege
      </h1>
      <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
        Die ausführliche Leistungsseite zur Fußpflege wird in Kürze ergänzt.
        Wende dich gerne direkt an Viktoria, wenn du jetzt schon Fragen hast.
      </p>
      <Link
        href="/#kontakt"
        className="mt-8 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol hover:bg-mint-deep hover:text-cream"
      >
        Kontakt aufnehmen
      </Link>
    </section>
  );
}
