# Körpergfüh by Viki – Projekt-CLAUDE.md

Dieses Repo folgt den globalen JAVERA-Studio-Standards (siehe Abschnitt weiter
unten) plus den projektspezifischen Details in diesem Abschnitt. Bei Konflikt
gilt: projektspezifische Angaben hier überschreiben die globalen Defaults.

## Projekt-Infos

- **Kunde:** Viktoria Ollinger – Körpergfüh by Viki
- **Branche/Spezialisierung:** Fußpflege & dauerhafte Haarentfernung
- **Adresse (Schema.org):** Bahnhofstraße 9, 4650 Lambach, Österreich
- **Domain:** koerpergfuel.at
- **Telefon:** 0676 388 46 71 (`tel:+436763884671`)
- **E-Mail:** noch nicht final bestätigt – zentraler Platzhalter `EMAIL_TO_CONFIRM`
  in `src/lib/data/business.ts`. Auf der bestehenden Website sind
  unterschiedliche Adressen angegeben – vor Go-Live mit Kundin klären.
- **Öffnungszeiten:** aktuell nicht eindeutig bestätigt, `business.openingHours`
  ist bewusst `null`. Keine Zeiten erfinden – erst nach Freigabe eintragen.
- **Social-Media:** keine bestätigten Profile bekannt, `business.socials` ist
  bewusst leer.

## Sprachregel – verbindlich für das gesamte Projekt

Körpergfüh ist Viktorias persönliches Studio. Überall, wo Viktoria über ihre
Arbeit, Betreuung, Philosophie, Qualifikation oder den Kontakt spricht, wird
konsequent die **Ich-Perspektive** verwendet ("Ich nehme mir Zeit …", nicht
"Viktoria nimmt sich Zeit …"). Kundinnen und Kunden werden durchgehend mit
**„du"** angesprochen. Sachliche Bereiche (Preise, Leistungslisten, FAQs,
Terminregelungen) dürfen neutral formuliert sein. Gilt für alle bestehenden
und künftigen Seiten – bei neuen Texten immer gegenprüfen, ob unabsichtlich
in die dritte Person gerutscht wird.

## Branding

- **Farben:** aus dem bestehenden Logo (`public/images/logo.png`) abgeleitet,
  als CSS-Variablen in `src/app/globals.css` definiert:
  - `--color-cream` (#f8f6f0) – primärer Seitenhintergrund, warmes Off-White
  - `--color-mint-pale` (#e6f1ea) – sehr helles Mint für ruhige Flächen
  - `--color-mint` (#7fb8a0) – Körpergfüh-Mint, primäre Akzentfarbe
  - `--color-mint-deep` (#5c9c82) – kräftigeres Mint für Hover-Zustände
  - `--color-petrol` (#1f3a34) – dunkles Petrol/Grün für Headlines & Nav
  - `--color-gold` (#c8a86b) – warmer Goldton, nur sehr sparsam als Akzent
  - `--color-mist` (#eaeaea) – sekundäre neutrale Fläche aus der bisherigen
    Körpergfüh-Website, bewusst erhalten. Einsatz für ruhige Sections, FAQs,
    Preisbereiche oder Hintergrundelemente (z.B. Onkologie-Bereich und FAQ
    auf `/fusspflege`), nicht als dominante Grundfarbe.
  - **Sobald die Original-Logodatei (Vektor/hochauflösend) vorliegt: Farbwerte
    exakt gegen das Original abgleichen und diese Tokens ggf. feinjustieren.**
- **Typografie Headlines:** Cormorant Garamond (`--font-cormorant`)
- **Typografie Fließtext/Nav/Buttons:** DM Sans (`--font-dm-sans`) – bewusst
  abweichend vom globalen Default (Inter), da im Konzept explizit vorgegeben.
- **Logo vorhanden?** Ja – `public/images/logo.png` (Wasserzeichen-Vorschau).
  Muss ggf. gegen Original/Vektorversion getauscht werden.

## Gestaltungselement „versetztes Bild"

Wiederkehrendes Element: ein Mint- oder Mint-Pale-Rechteck liegt leicht
versetzt hinter ausgewählten Fotos (Viktoria-Portrait, Studio-Bilder).
Implementiert in `src/components/ui/ImagePlaceholder.tsx` über die Prop
`offset` (`top-left` / `top-right` / `none`). Nicht bei jedem Bild einsetzen.

## Leistungen / Seitenstruktur

- [x] Home (vollständig nach Konzept umgesetzt)
- [x] `/fusspflege` (vollständig nach Konzept umgesetzt, siehe unten)
- [ ] `/haarentfernung` (aktuell Platzhalter – volle Leistungsseite folgt,
  analog zu `/fusspflege` aufbauen)
- [ ] Preise (im aktuellen Konzept nicht vorgesehen – ggf. später ergänzen)
- [x] Über uns (Anchor `#ueber-mich` auf der Startseite, keine eigene Seite)
- [x] Kontakt (Anchor `#kontakt` auf der Startseite, keine eigene Seite)
- [x] Impressum (Platzhalter, rechtliche Details vor Go-Live final klären)
- [x] Datenschutz (Platzhalter, vor Go-Live final ausarbeiten)

Die globale Sitelinks-Vorgabe (eigene URL je Hauptleistung, sprechende URLs)
ist damit für die beiden Kernleistungen erfüllt. `/fusspflege` und
`/haarentfernung` müssen vor Go-Live zu vollwertigen Leistungsseiten
ausgebaut werden (Ablauf, Vorteile, FAQ, CTA) – siehe globale Vorgabe zu
„keine dünnen Seiten".

## Wichtige Content-Regel für dieses Projekt

Keine Fakten erfinden – insbesondere keine Aussagen zu medizinischen
Wirkungen, Anzahl Behandlungen, Schmerzfreiheit, Lasertechnologie,
Hauttyp-Eignung, Ergebnissen, Zertifizierungen, Berufserfahrung, Bewertungen,
Öffnungszeiten, Social-Media-Kanälen oder Terminbuchungssystemen. Fehlende
oder unbestätigte Informationen immer als klar gekennzeichneten Platzhalter
eintragen (z.B. `EMAIL_TO_CONFIRM`, `TO_CONFIRM: ...`).

Bestätigte Qualifikationen von Viktoria (ausschließlich diese verwenden):
- Ausgebildete Fußpflegerin
- Onkologisch-kosmetische Zusatzausbildung
- Medizinischer & pflegerischer Hintergrund

Testimonials: `src/lib/data/business.ts` → `testimonials` ist bewusst leer.
Die Komponente `Testimonials.tsx` rendert `null`, solange das Array leer ist.
Keine Bewertungen, Namen oder Sterne erfinden – erst nach echter Freigabe
befüllen.

## `/fusspflege` – Datenstruktur & Inhalte

Alle Leistungen, Preise, FAQs, Neukundenstatus und Stornoregelung liegen
zentral in `src/lib/data/fusspflege.ts` (Preisänderungen ausschließlich dort
vornehmen). Texte auf der Seite sind wortgetreu aus der Kundenvorgabe
übernommen – keine Umformulierungen ohne Rücksprache. Keine Heilversprechen
im Onkologie-Bereich ergänzen (keine Aussagen zu Komplikationsvermeidung,
Krankheitsbehandlung, garantierter Linderung, Schädigungsvermeidung oder
Ersatz einer medizinischen Behandlung).

## Setup-Status

1. [x] `create-next-app` (Next.js 16, TypeScript, Tailwind, App Router, `src/`)
2. [ ] shadcn/ui – nicht eingerichtet, aktuell nicht benötigt
3. [x] Tailwind/Design-Tokens mit Kunden-Farbpalette + Fonts befüllt
4. [x] `next/font/google` für Cormorant Garamond + DM Sans eingerichtet
5. [x] `app/layout.tsx` mit Basis-Metadata (Title-Template, Description, OG)
6. [x] `app/sitemap.ts` + `app/robots.ts` angelegt
7. [x] JSON-LD `BeautySalon`-Komponente (`src/components/seo/LocalBusinessJsonLd.tsx`)
   mit echten Kundendaten befüllt
8. [x] Kontaktformular: Server Action (`src/app/actions/contact.ts`) + Honeypot.
   **Offen:** tatsächlicher E-Mail-Versand (z.B. Resend) noch nicht
   angebunden – TODO im Code markiert, wartet auf `EMAIL_TO_CONFIRM`.
9. [ ] Cookie-Consent-Banner – noch nicht eingebunden, da aktuell kein
   Tracking/Analytics im Projekt vorgesehen. Vor Einbindung von GA4/Meta-Pixel
   zwingend nachrüsten (harte DSGVO-Vorgabe).
10. [ ] Vercel-Projekt verknüpfen, Domain konfigurieren

## Vor Übergabe an die Kundin (projektspezifisch, zusätzlich zur globalen Checkliste)

- [ ] Echte Bilder von Viktoria & Studio einsetzen (ersetzen `ImagePlaceholder`)
- [ ] Original-Logodatei einholen, Farbwerte final abgleichen
- [ ] `EMAIL_TO_CONFIRM` durch finale E-Mail-Adresse ersetzen
- [ ] Öffnungszeiten mit Kundin bestätigen und eintragen
- [ ] `/fusspflege` und `/haarentfernung` zu vollständigen Leistungsseiten ausbauen
- [ ] Rechtsform & Pflichtangaben Impressum final klären
- [ ] Datenschutzerklärung final ausarbeiten (Formular, ggf. künftige Cookies)
- [ ] E-Mail-Versand für Kontaktformular anbinden

---

# JAVERA Studio – Globale Standards für Claude Code

Diese Standards gelten für alle JAVERA-Studio-Projekte (siehe auch
`~/.claude/CLAUDE.md`). Bei Widerspruch zum projektspezifischen Abschnitt oben
gilt der projektspezifische Abschnitt.

## Kontext

JAVERA Studio (javera-studio.at) baut Websites, Branding und Marketing-Material
exklusiv für Beauty-Professionals in Wien/Österreich. Kleinunternehmerin, kein
Vorsteuerabzug.

## Tech-Stack – Default für jedes neue Projekt

- **Next.js 14+ mit App Router**, TypeScript, Tailwind CSS
- **Deployment:** Vercel
- Server Components sind der Default. `'use client'` nur dort, wo echte
  Interaktivität gebraucht wird (Formulare, Menüs, Slider/Marquee,
  Tab-Filter, Animationen mit State)
- Niemals eine reine CSR-Seite ohne SSR/SSG ausliefern – das ist eine harte
  Regel, kein Nice-to-have

## Google Sitelinks & SEO-Struktur (Pflicht für Premium-Websites)

Jede Premium-Website muss so aufgebaut werden, dass Google die Seitenstruktur
eindeutig versteht. Niemals ausschließlich einen One-Pager. Wichtigste Seiten
im Hauptmenü sichtbar, ausschließlich sprechende URLs, aktive interne
Verlinkung von der Startseite auf die wichtigsten Seiten.

**Schema Markup (JSON-LD):** mindestens `LocalBusiness`, `BeautySalon` oder
`MedicalBusiness`, `FAQPage` (wenn FAQ vorhanden), `Review` (wenn Bewertungen
vorhanden), `Service`.

**Sitemap & Robots:** `app/sitemap.ts` + `app/robots.ts` Pflicht.

**Meta-Daten:** jede Seite individueller SEO-Titel, Meta-Description, genau
eine H1, OpenGraph-Daten. Keine doppelten Titel zwischen Seiten.

**Leistungsseiten:** jede Hauptleistung vollwertige eigene Seite (Überschrift,
Nutzenbeschreibung, Ablauf, Vorteile, FAQ, CTA). Kein thin content.

## Nie vergessen – Technische Baseline

- `generateMetadata()` pro Seite – kein React Helmet
- `next/image` für alle Bilder, mit Alt-Texten und `priority` auf
  Above-the-Fold-Bildern (LCP)
- `next/font/google` statt CSS-Imports für Custom Fonts
- Cookie-Consent-Banner-Komponente (DSGVO-Pflicht AT/EU), sobald
  Tracking/Analytics eingebunden wird
- Tracking-Scripts (GA4, Meta-Pixel) ausschließlich über `next/script`

## Sicherheit

- Keine API-Keys/Secrets im Client-Bundle (kein `NEXT_PUBLIC_` für rein
  serverseitige Dinge)
- Formulare: serverseitige Verarbeitung (Server Action/API-Route) plus
  einfacher Spam-Schutz (Honeypot und/oder Rate-Limiting)
- Security-Header in `next.config.ts` dokumentieren (CSP, X-Frame-Options etc.)

## Code-Qualität / häufige Migrations-Fallstricke

- Kein `window`/`document`-Zugriff außerhalb von `useEffect` in
  Client-Komponenten
- Vor jedem Build-Abschluss: Browser-Konsole auf Hydration-Warnings prüfen
- `npm run build` und `npx tsc --noEmit` müssen fehlerfrei durchlaufen
- Kein `console.error`/`console.log` im produktiven Code
- Datenobjekte (Preise, Leistungen, Texte) in `lib/data/*.ts` auslagern

## Design-System Default (überschreibbar pro Projekt)

- Stil: Luxury Minimal, feminin, warme Töne
- Typografie: Cormorant Garamond (Headlines) + Inter (Fließtext), außer
  Kundenprojekt verlangt explizit andere Fonts (hier: DM Sans statt Inter)
- Referenz-Farbpalette: wird pro Projekt durch die Kundenpalette ersetzt

## Vor Go-Live – Pflicht-Checkliste

- [ ] Lighthouse-Audit gefahren
- [ ] Keine Hydration-Mismatch-Warnings in der Konsole
- [ ] Sitemap erreichbar, robots.txt korrekt, bei Google Search Console eingereicht
- [ ] Schema.org JSON-LD validiert
- [ ] Mehrseitige Architektur statt One-Pager, alle Kernseiten im Hauptmenü sichtbar
- [ ] Sprechende URLs, keine doppelten Meta-Titel
- [ ] Alle Formulare getestet, inkl. Spam-Schutz
- [ ] Mobile-Ansicht manuell geprüft
- [ ] Cookie-Consent funktioniert, kein Tracking vor Zustimmung
- [ ] Rollback-Plan vorhanden

## Git / Workflow

- Aussagekräftige Commit-Messages, niemals über zwei Zeilen splitten
- Migrationen/größere Umbauten auf eigenem Branch, `main` bleibt unberührt bis
  alles getestet ist
