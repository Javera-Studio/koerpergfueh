import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Körpergfüh by Viki.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10 lg:py-32">
      <h1 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Impressum
      </h1>
      <p className="mt-6 font-sans text-base leading-relaxed text-petrol/80">
        Informationen gemäß den für den Webauftritt geltenden gesetzlichen
        Informationspflichten.
      </p>

      <div className="mt-6 h-px w-12 bg-mint" />

      <div className="mt-10 flex flex-col gap-2 font-sans text-base leading-relaxed text-petrol">
        <p className="font-medium">Körpergfüh</p>
        <p>{business.owner}</p>
        <p>{business.address.street}</p>
        <p>
          {business.address.zip} {business.address.city}
        </p>
        <p>Österreich</p>
      </div>

      <dl className="mt-10 flex flex-col gap-6 font-sans text-base leading-relaxed text-petrol">
        <div>
          <dt className="text-sm text-petrol/60">Unternehmensgegenstand</dt>
          <dd className="mt-1">Fußpflege</dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">GISA</dt>
          <dd className="mt-1">35497875</dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">Telefon</dt>
          <dd className="mt-1">
            <a
              href={business.phoneHref}
              className="text-mint-deep hover:underline"
            >
              {business.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">E-Mail</dt>
          <dd className="mt-1">
            <a
              href={business.emailHref}
              className="text-mint-deep hover:underline"
            >
              {business.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">Mitglied bei</dt>
          <dd className="mt-1">
            Wirtschaftskammer Österreich / zuständige Landesinnung
          </dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">
            Aufsichtsbehörde / Gewerbebehörde
          </dt>
          <dd className="mt-1">Bezirkshauptmannschaft Wels-Land</dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">Berufsbezeichnung</dt>
          <dd className="mt-1">Fußpflege</dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">Verleihungsstaat</dt>
          <dd className="mt-1">Österreich</dd>
        </div>
        <div>
          <dt className="text-sm text-petrol/60">Berufsrecht</dt>
          <dd className="mt-1">
            Gewerbeordnung, einsehbar im{" "}
            <a
              href="https://www.ris.bka.gv.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint-deep hover:underline"
            >
              Rechtsinformationssystem des Bundes (RIS)
            </a>
            .
          </dd>
        </div>
      </dl>

      <h2 className="mt-16 font-display text-2xl text-petrol">
        Kontaktdaten der für den Datenschutz verantwortlichen Person
      </h2>
      <div className="mt-4 flex flex-col gap-2 font-sans text-base leading-relaxed text-petrol">
        <p>{business.owner}</p>
        <p>{business.address.street}</p>
        <p>
          {business.address.zip} {business.address.city}
        </p>
        <p>Österreich</p>
        <p>
          E-Mail:{" "}
          <a
            href={business.emailHref}
            className="text-mint-deep hover:underline"
          >
            {business.email}
          </a>
        </p>
      </div>

      <h2 className="mt-16 font-display text-2xl text-petrol">
        Haftung für Inhalte
      </h2>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
        erstellt und werden laufend gepflegt. Eine Gewähr für die
        Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
        Informationen kann dennoch nicht übernommen werden.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Sollten rechtswidrige oder problematische Inhalte auffallen, bitten
        wir um Kontaktaufnahme. Entsprechende Inhalte werden nach Prüfung
        gegebenenfalls entfernt.
      </p>

      <h2 className="mt-16 font-display text-2xl text-petrol">
        Haftung für Links
      </h2>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Diese Website kann Links zu externen Websites Dritter enthalten. Auf
        deren Inhalte besteht kein Einfluss. Für die Inhalte der verlinkten
        Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Sollten rechtswidrige Inhalte auf verlinkten Seiten bekannt werden,
        werden entsprechende Links nach Prüfung entfernt.
      </p>

      <h2 className="mt-16 font-display text-2xl text-petrol">
        Urheberrecht
      </h2>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder,
        Fotografien und Grafiken unterliegen dem jeweiligen Urheberrecht.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-petrol/80">
        Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
        Verwendung außerhalb der gesetzlichen Grenzen bedarf der Zustimmung
        des jeweiligen Rechteinhabers.
      </p>

      <h2 className="mt-16 font-display text-2xl text-petrol">
        Bildnachweis
      </h2>
      <div className="mt-4 flex flex-col gap-4 font-sans text-base leading-relaxed text-petrol/80">
        <p>
          Eigene Bilder: Viktoria Ollinger
        </p>
        <p>
          Zusätzlich verwendete lizenzierte Bilder/Grafiken: Canva Pro bzw.
          jeweilige lizenzierte Medienquellen, sofern auf der Website
          eingesetzt.
        </p>
      </div>
    </section>
  );
}
