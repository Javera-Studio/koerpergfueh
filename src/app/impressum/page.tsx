import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Körpergfüh by Viki.",
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
      <h1 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Impressum
      </h1>
      <div className="mt-8 font-sans text-base leading-relaxed text-petrol/80">
        <p>{business.owner}</p>
        <p>{business.name}</p>
        <p>{business.address.street}</p>
        <p>
          {business.address.zip} {business.address.city}
        </p>
        <p className="mt-4">
          Telefon:{" "}
          <a href={business.phoneHref} className="text-mint-deep hover:underline">
            {business.phone}
          </a>
        </p>
        <p>E-Mail: {business.email}</p>
        <p className="mt-6 text-sm italic text-petrol/50">
          Weitere Pflichtangaben (Rechtsform, Gewerbebehörde, Mitgliedschaften,
          anwendbare Rechtsvorschriften) werden nach Bestätigung durch die
          Kundin ergänzt.
        </p>
      </div>
    </section>
  );
}
