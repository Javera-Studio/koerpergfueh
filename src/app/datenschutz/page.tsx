import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Körpergfüh by Viki.",
  robots: { index: false, follow: true },
};

// TODO vor Go-Live: E-Mail-Adresse mit Viktoria final bestätigen. Aktuell
// zentral in src/lib/data/business.ts hinterlegt (ollingerv@gmail.com).
// Alternativ im Raum steht koerpergfueh.23@gmail.com – auf der Website darf
// nur EINE Adresse verwendet werden, sobald final geklärt hier + in
// business.ts konsistent anpassen.

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-14">
      <h2 className="font-display text-2xl text-petrol">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 font-sans text-base leading-relaxed text-petrol/80">
        {children}
      </div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10 lg:py-32">
      <h1 className="font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-6 font-sans text-base leading-relaxed text-petrol/80">
        Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese
        Datenschutzerklärung erklärt in verständlicher Form, welche Daten bei
        der Nutzung dieser Website verarbeitet werden, wofür sie verwendet
        werden und welche Rechte dir dabei zustehen.
      </p>

      <div className="mt-6 h-px w-12 bg-mint" />

      <Section title="1. Verantwortliche">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          Körpergfüh
          <br />
          {business.owner}
          <br />
          {business.address.street}
          <br />
          {business.address.zip} {business.address.city}
          <br />
          Österreich
        </p>
        <p>
          Telefon:{" "}
          <a
            href={business.phoneHref}
            className="text-mint-deep hover:underline"
          >
            {business.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a
            href={business.emailHref}
            className="text-mint-deep hover:underline"
          >
            {business.email}
          </a>
        </p>
      </Section>

      <Section title="2. Allgemeines zur Datenverarbeitung">
        <p>
          Personenbezogene Daten sind alle Informationen, die sich auf eine
          identifizierte oder identifizierbare natürliche Person beziehen –
          zum Beispiel Name, E-Mail-Adresse oder IP-Adresse.
        </p>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies für den
          Betrieb dieser Website, die Kommunikation mit dir und die auf
          dieser Website angebotenen Funktionen notwendig ist. Die
          Verarbeitung erfolgt im Einklang mit der
          Datenschutz-Grundverordnung (DSGVO) und dem österreichischen
          Datenschutzgesetz (DSG).
        </p>
      </Section>

      <Section title="3. Hosting">
        <p>
          Diese Website wird bei Vercel Inc. (bzw. der jeweiligen
          europäischen Vercel-Gesellschaft) gehostet. Beim Aufruf dieser
          Website werden durch den Hosting-Anbieter automatisch technische
          Zugriffsdaten verarbeitet, die dein Browser übermittelt, unter
          anderem:
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>Browsertyp und -version</li>
          <li>
            Betriebssystem bzw. Geräteinformationen, soweit vom Browser
            übertragen
          </li>
        </ul>
        <p>
          Diese Verarbeitung ist technisch notwendig, um die Website
          zuverlässig und sicher ausliefern zu können. Eine konkrete
          Speicherdauer dieser Zugriffsdaten durch den Hosting-Anbieter
          können wir an dieser Stelle nicht verbindlich angeben.
        </p>
      </Section>

      <Section title="4. Kontaktformular">
        <p>
          Wenn du das Kontaktformular auf dieser Website nutzt, werden die
          von dir eingegebenen Daten – Name, E-Mail-Adresse und Nachricht –
          verarbeitet, um deine Anfrage zu bearbeiten und dir antworten zu
          können.
        </p>
        <p>
          Die Übermittlung erfolgt technisch über eine serverseitige
          Funktion, die auf unserer Vercel-Infrastruktur ausgeführt wird.
          Der automatische Versand der Formulardaten per E-Mail an uns ist
          aktuell noch in technischer Vorbereitung; sobald diese Anbindung
          eingerichtet ist, werden die eingegebenen Daten zur Bearbeitung
          deiner Anfrage per E-Mail an uns weitergeleitet.
        </p>
        <p>
          Zusätzlich enthält das Formular ein für dich nicht sichtbares Feld
          zur Spam-Erkennung (Honeypot). Dieses Feld dient ausschließlich der
          Abwehr automatisierter Formularübermittlungen und wird nicht zur
          Auswertung deiner Person verwendet.
        </p>
      </Section>

      <Section title="5. Kontaktaufnahme per Telefon und E-Mail">
        <p>
          Wenn du per Telefon oder E-Mail Kontakt mit uns aufnimmst, werden
          die dabei von dir übermittelten personenbezogenen Daten (z. B.
          Name, Kontaktdaten, Inhalt deiner Nachricht) verarbeitet, um deine
          Anfrage zu bearbeiten und zu beantworten.
        </p>
      </Section>

      <Section title="6. Google Maps">
        <p>
          Auf dieser Website ist eine Karte des Kartendienstes Google Maps
          eingebunden, um dir unseren Standort anzuzeigen. Beim Aufruf der
          entsprechenden Seite wird automatisch eine Verbindung zu Servern
          von Google hergestellt und die Karteninhalte werden direkt von
          Google geladen. Dabei kann Google unter anderem deine IP-Adresse
          verarbeiten.
        </p>
        <p>
          Anbieter ist Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland. Informationen zur Datenverarbeitung durch Google
          findest du in der Datenschutzerklärung von Google.
        </p>
      </Section>

      <Section title="7. Schriftarten">
        <p>
          Die auf dieser Website verwendeten Schriftarten (u. a. Cormorant
          Garamond, DM Sans sowie eine dekorative Signature-Schrift) werden
          technisch über next/font eingebunden. Dabei werden die
          Schriftdateien beim Bau der Website lokal eingebettet und direkt
          von unserem eigenen Server bzw. Hosting-Anbieter ausgeliefert. Bei
          deinem Website-Besuch findet dadurch keine gesonderte Verbindung
          zu Google-Servern zum Laden der Schriftarten statt.
        </p>
      </Section>

      <Section title="8. Cookies und Speichertechnologien">
        <p>
          Diese Website setzt aktuell keine Cookies und keine vergleichbaren
          Speichertechnologien (z. B. Local Storage oder Session Storage) für
          Analyse-, Marketing- oder Tracking-Zwecke ein.
        </p>
      </Section>

      <Section title="9. Analyse- und Tracking-Dienste">
        <p>
          Aktuell sind auf dieser Website keine Analyse- oder Tracking-Dienste
          (z. B. Google Analytics, Meta Pixel oder vergleichbare Dienste)
          eingebunden. Sollte sich das zukünftig ändern, wird diese
          Datenschutzerklärung entsprechend angepasst und – sofern
          erforderlich – eine Einwilligungsmöglichkeit ergänzt.
        </p>
      </Section>

      <Section title="10. Externe Links">
        <p>
          Diese Website kann Links zu externen Websites Dritter enthalten.
          Wenn du einen solchen Link anklickst, verlassen wir keine
          Kontrolle mehr über die dortige Datenverarbeitung – es gelten
          dann die Datenschutzbestimmungen der jeweiligen Anbieter.
        </p>
      </Section>

      <Section title="11. Deine Rechte">
        <p>
          Dir stehen im Rahmen der DSGVO insbesondere folgende Rechte in
          Bezug auf deine personenbezogenen Daten zu:
        </p>
        <ul className="ml-5 flex list-disc flex-col gap-1">
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit, soweit anwendbar</li>
          <li>Widerspruchsrecht gegen die Verarbeitung</li>
          <li>
            Recht auf Widerruf einer erteilten Einwilligung, sofern die
            Verarbeitung auf einer Einwilligung beruht
          </li>
        </ul>
        <p>
          Außerdem hast du das Recht, dich bei einer
          Datenschutzaufsichtsbehörde zu beschweren. In Österreich ist dies
          die österreichische Datenschutzbehörde.
        </p>
      </Section>

      <Section title="12. Datensicherheit">
        <p>
          Diese Website wird verschlüsselt über HTTPS/TLS übertragen. Trotz
          technischer und organisatorischer Sicherheitsmaßnahmen kann eine
          vollständig lückenlose Sicherheit bei der Datenübertragung im
          Internet nicht garantiert werden.
        </p>
      </Section>

      <Section title="13. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
          sich diese Website, eingesetzte Dienste oder die rechtlichen
          Rahmenbedingungen ändern.
        </p>
      </Section>
    </section>
  );
}
