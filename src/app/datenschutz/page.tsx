import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Körpergfüh by Viki.",
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
      <h1 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Datenschutz
      </h1>
      <p className="mt-8 font-sans text-base leading-relaxed text-petrol/80">
        Die vollständige Datenschutzerklärung (u.a. zu Kontaktformular,
        Cookies und ggf. eingebundenen Diensten) wird vor Go-Live final
        ausgearbeitet und ergänzt.
      </p>
    </section>
  );
}
