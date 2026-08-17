// Zentrale Zonen-, Preis- und FAQ-Daten für die Haarentfernung-Seite.
// Preisänderungen ausschließlich hier vornehmen, nicht in den Komponenten.

export const bodyAreaGroups = [
  {
    title: "Gesicht & Hals",
    zones: ["Oberlippe", "Kinn", "Gesicht", "Hals", "Nacken"],
  },
  {
    title: "Oberkörper",
    zones: ["Brust", "Rücken", "Bauchlinie"],
  },
  {
    title: "Arme & Achseln",
    zones: ["Oberarme", "Unterarme", "Achseln"],
  },
  {
    title: "Beine",
    zones: ["Oberschenkel", "Unterschenkel"],
  },
  {
    title: "Intim & Bikini",
    zones: ["Intim", "Bikinizone"],
  },
] as const;

export const pricingGroups = [
  {
    title: "Gesicht & Hals",
    zones: [
      { zone: "Oberlippe", single: "30 €", ninePlusOne: "270 €" },
      { zone: "Kinn", single: "30 €", ninePlusOne: "270 €" },
      { zone: "Gesicht", single: "65 €", ninePlusOne: "585 €" },
      { zone: "Hals", single: "40 €", ninePlusOne: "360 €" },
      { zone: "Nacken", single: "35 €", ninePlusOne: "315 €" },
    ],
  },
  {
    title: "Oberkörper",
    zones: [
      { zone: "Brust", single: "65 €", ninePlusOne: "585 €" },
      { zone: "Rücken", single: "75 €", ninePlusOne: "675 €" },
      { zone: "Bauchlinie", single: "30 €", ninePlusOne: "270 €" },
    ],
  },
  {
    title: "Arme & Achseln",
    zones: [
      { zone: "Oberarme", single: "60 €", ninePlusOne: "540 €" },
      { zone: "Unterarme", single: "60 €", ninePlusOne: "540 €" },
      { zone: "Achseln", single: "55 €", ninePlusOne: "495 €" },
    ],
  },
  {
    title: "Beine",
    zones: [
      { zone: "Oberschenkel", single: "85 €", ninePlusOne: "765 €" },
      { zone: "Unterschenkel", single: "85 €", ninePlusOne: "765 €" },
    ],
  },
  {
    title: "Intim & Bikini",
    zones: [
      { zone: "Intim", single: "95 €", ninePlusOne: "855 €" },
      { zone: "Bikinizone", single: "60 €", ninePlusOne: "540 €" },
    ],
  },
] as const;

export const ninePlusOneOffer = {
  validFrom: "01.12.2025",
  validTo: "31.12.2026",
} as const;

export const packages = [
  { label: "Achseln & Intim", price: "140 €" },
  { label: "Arme komplett & Achseln", price: "140 €" },
  { label: "Arme komplett & Achseln & Intim", price: "200 €" },
  { label: "Beine komplett & Oberlippe", price: "150 €" },
  { label: "Beine komplett & Achseln", price: "190 €" },
  { label: "Beine komplett & Achseln & Intim & Po", price: "285 €" },
  { label: "Unterschenkel & Achseln & Intim", price: "230 €" },
  { label: "Ganzkörper", price: "350 €" },
] as const;

export const haarentfernungFaqs = [
  {
    question: "Welche Bereiche kann ich behandeln lassen?",
    answer:
      "Bei Körpergfüh biete ich dauerhafte Haarentfernung für verschiedene Bereiche im Gesicht und am Körper an – darunter Oberlippe, Kinn, Gesicht, Hals, Nacken, Brust, Rücken, Bauchlinie, Arme, Achseln, Beine sowie Intim- und Bikinizone.",
  },
  {
    question: "Kann ich mehrere Bereiche miteinander kombinieren?",
    answer:
      "Ja. Neben einzelnen Zonen gibt es verschiedene Paketpreise für häufig kombinierte Bereiche. Die aktuellen Pakete und Preise findest du direkt auf dieser Seite.",
  },
  {
    question: "Gibt es ein Abo?",
    answer:
      "Ja. Aktuell gibt es ein 9+1-Angebot: Du bezahlst neun Behandlungen einer Zone und erhältst die zehnte Behandlung kostenlos dazu. Die Aktion gilt bei Kauf eines Abos vom 01.12.2025 bis 31.12.2026.",
  },
  {
    question: "Kann ich vor meinem ersten Termin Fragen stellen?",
    answer:
      "Natürlich. Wenn du dir bei einer Zone oder der Behandlung unsicher bist, melde dich gerne vorab bei mir.",
  },
] as const;

// Diese Fragen sind bewusst NICHT öffentlich beantwortet, solange die
// notwendigen Informationen zu Gerät und Behandlungsvorgaben nicht von
// Viktoria bestätigt sind. Nicht rendern, keine Antworten erfinden.
// TODO (intern, nicht öffentlich anzeigen):
// - Wie viele Behandlungen brauche ich?
// - In welchen Abständen finden die Termine statt?
// - Muss ich mich vorher rasieren?
// - Darf ich vorher oder danach in die Sonne?
// - Ist die Behandlung schmerzhaft?
// - Für welche Haarfarben ist die Behandlung geeignet?
// - Für welche Hauttypen ist die Behandlung geeignet?

// TODO (intern, nicht öffentlich anzeigen):
// Lasergerät/Technologie mit Viktoria bestätigen und Fachbereich
// anschließend ergänzen (Hersteller, Gerätename, Wellenlänge, Eignung für
// Hauttypen/Haarfarben, Kühlung, Behandlungsempfehlungen, -intervalle).

export const punctualityPolicy = {
  lateThresholdMinutes: 5,
} as const;

export const cancellationPolicy = {
  lateCancellationFeePercent: 50,
  lateCancellationWindowHours: 24,
  noShowFeePercent: 70,
} as const;
