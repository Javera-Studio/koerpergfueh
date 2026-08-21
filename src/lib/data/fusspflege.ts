// Zentrale Leistungs-, Preis- und FAQ-Daten für die Fußpflege-Seite.
// Preisänderungen ausschließlich hier vornehmen, nicht in den Komponenten.

export const acceptingNewCustomers = true; // Neukundenstatus zentral steuerbar

// Wortgetreu freigegebener Text für die "Mit besonderer Sorgfalt"-Section
// (SensitiveCare.tsx). Bewusst keine medizinischen Aussagen/Heilversprechen
// ergänzen oder Behandlungen als während einer Krebstherapie geeignet
// darstellen – vermittelt Sorgfalt/Erfahrung, keine medizinische Sicherheit.
export const sensitiveCare = {
  eyebrow: "MIT BESONDERER SORGFALT",
  heading: "Wenn deine Füße besondere Aufmerksamkeit brauchen.",
  text: "Gerade in sensiblen Lebensphasen darf Fußpflege mehr sein als reine Pflege. Mir ist wichtig, mir Zeit zu nehmen, genau hinzusehen und die Behandlung behutsam an deine persönliche Situation anzupassen.",
  highlight:
    "Auch während oder nach einer onkologischen Erkrankung können sich die Bedürfnisse von Haut, Nägeln und Füßen verändern. Ein besonders sorgfältiger und einfühlsamer Umgang ist mir deshalb wichtig.",
  cta: "Persönlich anfragen",
} as const;

export const mainTreatments = [
  {
    title: "Basisfußpflege",
    subtitle: "Zeit für gepflegte Füße.",
    description:
      "Die richtige Wahl für regelmäßige professionelle Pflege und ein rundum gepflegtes Fußgefühl.",
    includes: [
      "Fußbad",
      "Hornhaut entfernen",
      "Nägel kürzen",
      "Nagelhaut entfernen",
      "Nägel feilen",
    ],
    price: "55 €",
    cta: "Termin anfragen",
  },
  {
    title: "Medizinische Fußpflege",
    subtitle: "Wenn deine Füße mehr Aufmerksamkeit brauchen.",
    description:
      "Für Füße, die besondere Aufmerksamkeit brauchen. Bei stärkeren Verhornungen, Problemnägeln oder anderen Beschwerden wird die Behandlung individuell an deine Bedürfnisse angepasst.",
    includes: [
      "Fußbad",
      "Hornhaut & Rhagaden behandeln",
      "Problem- & Holznägel behandeln",
      "Pilznägel fachgerecht versorgen",
      "Nägel feilen",
    ],
    price: "61 €",
    cta: "Termin anfragen",
  },
  {
    title: "Wellness-Fußpflege",
    subtitle: "Pflege darf sich auch einfach gut anfühlen.",
    description:
      "Professionelle Fußpflege kombiniert mit einer kleinen Auszeit für dich und deine Füße.",
    includes: ["Professionelle Fußpflege", "Peeling", "Fußmassage"],
    price: "85 €",
    cta: "Termin anfragen",
  },
] as const;

export const oncologyTreatment = {
  title: "Onkologisch-kosmetische Fußpflege",
  includes: [
    "individuelle Begutachtung",
    "Fußinspektion",
    "Anamnese",
    "Verlaufsdokumentation",
    "individuell abgestimmte Fußpflege",
  ],
  price: "74 €",
} as const;

export const nailAndProblemServices = [
  { label: "Eingewachsener Nagel", price: "20 € je" },
  { label: "Hühnerauge entfernen", price: "20 € je" },
  { label: "3TO Metall-Nagelspange", price: "110 € je" },
  { label: "Spange nachsetzen / Klebespange", price: "39 € je" },
  { label: "Nagelprothetik", price: "33 € je" },
  { label: "Orthese", price: "29 € je" },
  { label: "Tamponade", price: "4 €" },
  { label: "Lack / Nagelprothetik entfernen", price: "4 € je" },
] as const;

export const careAndExtraServices: {
  label: string;
  note?: string;
  price: string;
}[] = [
  { label: "Kleine Fußpflege", note: "Fußbad & Nägel kürzen", price: "42 €" },
  { label: "Lack / Hybrid-Lack", price: "13 €" },
  { label: "UV-Lack", price: "19 €" },
];

export const mobileFootcare = {
  priceFrom: "65 €",
} as const;

export const manicureServices = [
  { label: "Maniküre", price: "40 €" },
  { label: "Maniküre mit Lack", price: "53 €" },
  { label: "Maniküre Deluxé", price: "64 €" },
  { label: "Wellness-Kombi Hand & Fuß", price: "90 €" },
] as const;

export const treatmentSteps = [
  {
    number: "01",
    title: "Ankommen & kennenlernen",
    text: "Zu Beginn nehme ich mir Zeit für deine Füße und deine individuellen Bedürfnisse. Gibt es Beschwerden oder Besonderheiten, können wir diese vor der Behandlung in Ruhe besprechen.",
  },
  {
    number: "02",
    title: "Individuell behandeln",
    text: "Deine Fußpflege richtet sich nach der gewählten Behandlung und danach, was deine Füße aktuell benötigen.",
  },
  {
    number: "03",
    title: "Gepflegt nach Hause",
    text: "Nach deiner Behandlung sollst du nicht nur mit gepflegten Füßen nach Hause gehen, sondern dich auch gut betreut gefühlt haben. Bei Bedarf gebe ich dir Hinweise für die weitere Pflege mit.",
  },
] as const;

export const fusspflegeFaqs = [
  {
    question: "Was kostet eine Fußpflege bei Körpergfüh?",
    answer:
      "Die Basisfußpflege kostet 55 €. Je nachdem, was deine Füße benötigen und welche Behandlung du möchtest, stehen weitere Leistungen zur Verfügung. Alle Preise findest du transparent auf dieser Seite.",
  },
  {
    question: "Was ist bei der Basisfußpflege dabei?",
    answer:
      "Die Basisfußpflege beinhaltet ein Fußbad, das Entfernen von Hornhaut und Nagelhaut sowie das Kürzen und Feilen der Nägel.",
  },
  {
    question: "Kann ich auch mit einem eingewachsenen Nagel oder Hühnerauge kommen?",
    answer:
      "Ja. Sowohl die Behandlung eines eingewachsenen Nagels als auch das Entfernen eines Hühnerauges biete ich bei Körpergfüh an. Wenn du dir bei deinem konkreten Problem unsicher bist, melde dich gerne vorab bei mir.",
  },
  {
    question: "Bietest du auch onkologisch-kosmetische Fußpflege an?",
    answer:
      "Ja. Ich bin zertifizierte onkologische Fußpflegerin und verfüge über eine entsprechende Zusatzausbildung. Die onkologisch-kosmetische Fußpflege kostet aktuell 74 €.",
  },
  {
    question: "Gibt es auch mobile Fußpflege?",
    answer:
      "Ja. Mobile Fußpflege biete ich ab 65 € an. Ob ein Termin bei dir zu Hause möglich ist, klären wir am besten direkt miteinander.",
  },
  {
    question: "Nimmst du aktuell neue Kundinnen und Kunden auf?",
    answer: acceptingNewCustomers
      ? "Ja – aktuell nehme ich wieder Neukundinnen und Neukunden auf."
      : "Aktuell nehme ich leider keine neuen Kundinnen und Kunden auf.",
  },
] as const;

export const cancellationPolicy = {
  lateCancellationFeePercent: 50,
  lateCancellationWindowHours: 24,
  noShowFeePercent: 70,
} as const;
