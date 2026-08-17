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
- **E-Mail:** ollingerv@gmail.com (`mailto:ollingerv@gmail.com`), von Viktoria
  bestätigt, in `src/lib/data/business.ts` hinterlegt und in Kontakt-Section
  + Impressum sichtbar. Tatsächlicher Formular-Versand an diese Adresse ist
  technisch noch nicht angebunden (siehe TODO in `src/app/actions/contact.ts`).
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
  - `--color-hero-overlay` (#eae4e3) – warmes Rosé-Greige, ausschließlich als
    Overlay über dem großen bilddominanten Hero-Bild (Startseite). Ca.
    65–78 % Deckkraft, nach unten zur Textzone hin stärker deckend für
    Lesbarkeit (siehe `src/components/sections/Hero.tsx`). Zusammen mit
    Körpergfüh-Mint und dunklem Petrol zentraler Bestandteil der visuellen
    Identität – kein reines Weiß/Grau/Grün als Hero-Overlay verwenden.
  - `--color-mist` (#eaeaea) – sekundäre neutrale Fläche aus der bisherigen
    Körpergfüh-Website, bewusst erhalten. Einsatz für ruhige Sections, FAQs,
    Preisbereiche oder Hintergrundelemente (z.B. Onkologie-Bereich und FAQ
    auf `/fusspflege`), nicht als dominante Grundfarbe.
  - **Sobald die Original-Logodatei (Vektor/hochauflösend) vorliegt: Farbwerte
    exakt gegen das Original abgleichen und diese Tokens ggf. feinjustieren.**
- **Typografie Headlines:** Cormorant Garamond (`--font-cormorant`)
- **Typografie Fließtext/Nav/Buttons:** DM Sans (`--font-dm-sans`) – bewusst
  abweichend vom globalen Default (Inter), da im Konzept explizit vorgegeben.
- **Signature-Schrift:** Mrs Saint Delafield (`--font-signature`), angelehnt
  an den handschriftlichen Logo-Schriftzug. Ausschließlich über die
  `Signature`-Komponente (`src/components/ui/Signature.tsx`) einsetzen, nur
  für kurze dekorative Akzente (einzelne Wörter/kurzer Satz, z.B. oberhalb
  einer Cormorant-Garamond-Headline) – niemals für Fließtext, Navigation,
  Buttons, Preise oder FAQs. Wenige bewusste Akzente, nicht in jeder
  Section. Aktuell eingesetzt in `About.tsx` ("Schön, dass du da bist") und
  `Studio.tsx` ("Mit viel Gefühl").
- **Logo vorhanden?** Ja – `public/images/logo.png` (Wasserzeichen-Vorschau).
  Muss ggf. gegen Original/Vektorversion getauscht werden.

## Gestaltungselement „versetztes Bild"

Wiederkehrendes Element: ein Mint- oder Mint-Pale-Rechteck liegt leicht
versetzt hinter ausgewählten Fotos (Viktoria-Portrait, Studio-Bilder).
Implementiert in `src/components/ui/ImagePlaceholder.tsx` über die Prop
`offset` (`top-left` / `top-right` / `none`). Nicht bei jedem Bild einsetzen.

## Motion-Konzept

Bewusst wenige, gezielte Momente statt durchgängiger Bewegung – Ziel sind
ca. 3–4 wahrnehmbare interaktive Momente auf der gesamten Website, nicht pro
Section. Ausschließlich CSS, keine Animationsbibliothek hinzugefügt.
Scroll-gebundene Effekte laufen über die native CSS-Scroll-Driven-Animations-
API (`animation-timeline: view()`), gated über `@supports` – Browser ohne
Unterstützung zeigen Inhalte sofort vollständig sichtbar (kein Layout Shift,
kein Risiko dauerhaft unsichtbarer Inhalte). Alle Effekte sind zusätzlich in
`@media (prefers-reduced-motion: no-preference)` gekapselt. Definiert in
`src/app/globals.css`, Klassen `.reveal` / `.reveal-d1`–`.reveal-d4` /
`.parallax-photo` / `.oncology-bg-reveal` / `.botanical-draw` /
`.hero-intro-1`–`.hero-intro-3`.

Die vier bewussten Momente:

1. **Painpoints (gestaffeltes Reveal).** Die vier Painpoint-Items (Startseite
   & `/fusspflege`) blenden beim Scrollen leicht zeitversetzt ein
   (`.reveal .reveal-d1`–`.reveal-d4`), unterstützt die Lesereihenfolge.
2. **Versetzte Bildflächen als Signature-Element (minimaler Parallax).** Das
   Foto bewegt sich beim Scrollen wenige Pixel relativ zum feststehenden
   Hintergrundrechteck (`ImagePlaceholder`-Prop `parallax`). Bewusst nur an
   ausgewählten Stellen: Viktoria-Portrait (`About.tsx`, Fußpflege
   `Trust.tsx`) und ein Studiofoto (`Studio.tsx`). Nicht bei jedem Bild.
3. **Onkologisch-kosmetische Fußpflege (ruhiges Ankommen).** Die Section
   (`FusspflegeOncology`) blendet Text und Karte gestaffelt ein, der
   Hintergrund geht beim Erreichen weich zu `--color-mist` über
   (`.oncology-bg-reveal`) – signalisiert bewusst „hier beginnt ein
   sensibler Bereich", ohne dramatische Effekte.
4. **Botanisches Signature-Element (Line-Draw).** Genau eine Stelle auf der
   gesamten Website: die dekorative botanische Linie in `About.tsx`
   (`#ueber-mich`) zeichnet sich beim Scrollen langsam nach
   (`.botanical-draw`). Rein dekorativ, bleedet in die Ecke aus, überlagert
   keinen Text. Das gleiche Motiv in `Studio.tsx` bleibt bewusst statisch
   (nicht animiert), um die Regel „nur eine animierte Stelle" einzuhalten.

Ergänzend, ohne als eigener „Moment" zu zählen:

- **Hero-Ladesequenz:** Eyebrow → Headline → Sub/CTA erscheinen beim ersten
  Laden kurz zeitversetzt (`.hero-intro-1`–`.hero-intro-3`, ~500ms,
  zeitbasiert statt scroll-gebunden). Kein Bild-Reveal, kein Layout Shift.
- **FAQ-Accordion:** Öffnen/Schließen läuft über eine CSS
  `grid-template-rows`-Transition (`src/components/fusspflege/Faq.tsx`),
  keine Sprünge mehr durch Mount/Unmount des Antworttexts.

Bewusst NICHT umgesetzt: Expand/Collapse für die Preislisten unter „Weitere
Behandlungen & Preise" – die Listen sind kurz genug, dass Aufklappen die
Informationsarchitektur nicht verbessern würde und Preise stattdessen
unnötig verstecken würde.

Bei neuen Sections: neue Motion nur ergänzen, wenn sie Aufmerksamkeit führt,
Inhalte verständlicher macht, Orientierung verbessert, Hierarchien
unterstützt oder einen kleinen Markenmoment schafft – nicht als Selbstzweck.

## Leistungen / Seitenstruktur

- [x] Home (vollständig nach Konzept umgesetzt)
- [x] `/fusspflege` (vollständig nach Konzept umgesetzt, siehe unten)
- [x] `/haarentfernung` (vollständig nach Konzept umgesetzt, siehe unten –
  Technologie-/Fachinformations-Bereich bewusst noch nicht öffentlich
  sichtbar, siehe TODOs in `src/lib/data/haarentfernung.ts`)
- [ ] Preise (im aktuellen Konzept nicht vorgesehen – ggf. später ergänzen)
- [x] Über uns (Anchor `#ueber-mich` auf der Startseite, keine eigene Seite)
- [x] Kontakt (Anchor `#kontakt` auf der Startseite, keine eigene Seite)
- [x] Impressum (Platzhalter, rechtliche Details vor Go-Live final klären)
- [x] Datenschutz (Platzhalter, vor Go-Live final ausarbeiten)

Die globale Sitelinks-Vorgabe (eigene URL je Hauptleistung, sprechende URLs)
ist für beide Kernleistungen erfüllt.

## `/haarentfernung` – Datenstruktur & offene Punkte

Zonen, Einzelpreise, 9+1-Preise, Paketpreise, Aktionszeitraum, FAQs,
Pünktlichkeits- und Stornoregel liegen zentral in
`src/lib/data/haarentfernung.ts`. Zwei interne TODOs (als Kommentare, nicht
öffentlich sichtbar) sind dort dokumentiert und müssen vor Ausbau ergänzt
werden:
1. Lasergerät/Technologie mit Viktoria bestätigen (Hersteller, Gerätename,
   Wellenlänge, Eignung für Hauttypen/Haarfarben, Kühlung, Intervalle) –
   erst danach einen Technologie-/Fachinformations-Bereich ergänzen.
2. Liste weiterer FAQ-Fragen (Anzahl Behandlungen, Abstände, Vorbereitung,
   Schmerzhaftigkeit etc.), die erst nach Bestätigung durch Viktoria
   öffentlich beantwortet werden dürfen.

## Wichtige Content-Regel für dieses Projekt

Keine Fakten erfinden – insbesondere keine Aussagen zu medizinischen
Wirkungen, Anzahl Behandlungen, Schmerzfreiheit, Lasertechnologie,
Hauttyp-Eignung, Ergebnissen, Zertifizierungen, Berufserfahrung, Bewertungen,
Öffnungszeiten, Social-Media-Kanälen oder Terminbuchungssystemen. Fehlende
oder unbestätigte Informationen immer als klar gekennzeichneten Platzhalter
eintragen (z.B. `TO_CONFIRM: ...`).

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
   **Offen:** tatsächlicher E-Mail-Versand an `business.email`
   (ollingerv@gmail.com, z.B. via Resend) noch nicht angebunden – TODO im
   Code markiert, aktuell wird nur validiert.
9. [ ] Cookie-Consent-Banner – noch nicht eingebunden, da aktuell kein
   Tracking/Analytics im Projekt vorgesehen. Vor Einbindung von GA4/Meta-Pixel
   zwingend nachrüsten (harte DSGVO-Vorgabe).
10. [ ] Vercel-Projekt verknüpfen, Domain konfigurieren

## Vor Übergabe an die Kundin (projektspezifisch, zusätzlich zur globalen Checkliste)

- [x] Echte Bilder von Viktoria, Carina & Studio eingesetzt (victoria1.jpg,
  carina.jpg, studio1–5.jpe) – nur einzelne `ImagePlaceholder`-Stellen
  (z.B. weitere Studiofotos, Fußpflege/Haarentfernung-Trust-Bilder) noch offen
- [x] Logodatei aktualisiert (`public/images/logo.png`, transparent)
- [x] E-Mail-Adresse bestätigt und eingetragen (ollingerv@gmail.com)
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
