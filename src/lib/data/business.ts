// Zentrale Unternehmensdaten – Körpergfüh by Viki
// Alle Kontakt-, Adress- und Öffnungszeiten-Angaben ausschließlich hier pflegen.

export const business = {
  name: "Körpergfüh by Viki",
  owner: "Viktoria Ollinger",
  legalForm: "Einzelunternehmen", // TO_CONFIRM: Rechtsform für Impressum
  tagline: "Fußpflege & dauerhafte Haarentfernung in Lambach",
  address: {
    street: "Bahnhofstraße 9",
    zip: "4650",
    city: "Lambach",
    country: "AT",
  },
  phone: "0676 388 46 71",
  phoneHref: "tel:+436763884671",
  email: "ollingerv@gmail.com",
  emailHref: "mailto:ollingerv@gmail.com",
  domain: "koerpergfuel.at",
  socials: [] as { label: string; href: string }[], // Keine bestätigten Profile bekannt – bewusst leer
} as const;

// Telefonische Erreichbarkeit, von Viktoria bestätigt. Montag bewusst ohne
// Uhrzeit ("keine Zeit eintragen") – keine Zeit erfinden, bis bestätigt.
export const openingHours: { day: string; hours: string }[] = [
  { day: "Montag", hours: "" },
  { day: "Dienstag", hours: "08:00 – 18:00 Uhr" },
  { day: "Mittwoch", hours: "08:00 – 18:00 Uhr" },
  { day: "Donnerstag", hours: "08:00 – 18:00 Uhr" },
  { day: "Freitag", hours: "08:00 – 18:00 Uhr" },
  { day: "Samstag", hours: "nach Vereinbarung" },
];

export const services = [
  {
    slug: "fusspflege",
    title: "Fußpflege",
    shortTitle: "Professionelle Fußpflege",
    href: "/fusspflege",
    description:
      "Wenn Druckstellen, Hornhaut oder andere Beschwerden deinen Alltag beeinträchtigen – oder du deinen Füßen einfach professionelle Pflege gönnen möchtest.",
    cta: "Fußpflege entdecken",
  },
  {
    slug: "haarentfernung",
    title: "Dauerhafte Haarentfernung",
    shortTitle: "Dauerhafte Haarentfernung",
    href: "/haarentfernung",
    description:
      "Wenn Rasieren, Stoppeln und der ständige Aufwand dich nerven und du dir langfristig glattere Haut wünschst.",
    cta: "Haarentfernung entdecken",
  },
] as const;

export const painpoints = [
  {
    title: "Ständiges Rasieren und gereizte Haut?",
    text: "Du wünschst dir glatte Haut, ohne ständig zum Rasierer greifen zu müssen.",
  },
  {
    title: "Druckstellen, Hornhaut oder schmerzende Füße?",
    text: "Deine Füße begleiten dich jeden Tag – und manchmal brauchen sie professionelle Unterstützung.",
  },
  {
    title: "Du möchtest dich einfach wieder gepflegt und wohl fühlen?",
    text: "Manchmal geht es nicht um ein „Problem“, sondern darum, sich selbst etwas Gutes zu tun.",
  },
  {
    title: "Besondere Bedürfnisse an deine Fußpflege?",
    text: "Gerade bei sensiblen Situationen ist fachliches Wissen genauso wichtig wie ein einfühlsamer Umgang.",
  },
] as const;

// Verwendet in der (kürzeren) Fußpflege-Trust-Section – bewusst NICHT
// verändern, auch wenn expertiseHighlights unten leicht abweichend
// formuliert ist. Beide Texte sind jeweils final freigegeben.
export const qualifications = [
  "Ausgebildete Fußpflegerin",
  "Onkologisch-kosmetische Zusatzausbildung",
  "Medizinischer & pflegerischer Hintergrund",
] as const;

// Reduzierte Expertise-Leiste für die große Über-mich-Section auf der
// Startseite (About.tsx). Final freigegebener Wortlaut, nicht verändern.
export const expertiseHighlights = [
  "Ausgebildete Fußpflegerin",
  "Onkologisch-kosmetische Zusatzausbildung",
  "Medizinisches & pflegerisches Fachwissen",
  "Individuelle Betreuung",
] as const;

// Wortgetreu freigegebener Text für die Über-mich-Section (About.tsx).
// Keine Umformulierungen, Kürzungen oder Ergänzungen ohne Rücksprache.
export const viktoriaIntro = {
  eyebrowSignature: "Persönlich für dich da",
  heading: "Hallo, ich bin Viktoria.",
  paragraphs: [
    "Fußgesundheit bedeutet für mich mehr als gepflegte Füße. Es geht darum, Beschwerden ernst zu nehmen, genau hinzusehen und eine Behandlung zu wählen, bei der du dich fachlich und menschlich gut aufgehoben fühlst.",
    "Als ausgebildete Fußpflegerin mit onkologisch-kosmetischer Zusatzausbildung sowie medizinischem und pflegerischem Fachwissen verbinde ich professionelle Fußpflege mit einem besonders achtsamen Blick auf die individuellen Bedürfnisse meiner Kundinnen und Kunden.",
    "Gerade wenn Füße Beschwerden verursachen, sich Nägel oder Haut verändern oder aufgrund einer Erkrankung besondere Aufmerksamkeit notwendig ist, braucht es Sorgfalt, Erfahrung und Vertrauen. Deshalb nehme ich mir Zeit, deine Situation anzusehen und die Behandlung individuell darauf abzustimmen.",
    "Neben der klassischen und medizinischen Fußpflege begleite ich auch Menschen während einer onkologischen Therapie. Durch meine entsprechende Zusatzausbildung kenne ich die besonderen Anforderungen, die beispielsweise eine Chemotherapie an Haut und Nägel stellen kann.",
    "Mein Anspruch ist, dass du mein Studio nicht nur mit gepflegten Füßen verlässt, sondern auch mit dem Gefühl:",
  ],
  highlight: "Hier wurde ich gesehen, ernst genommen und gut betreut.",
} as const;

// Wortgetreu freigegebener Text für den Carina-Bereich (About.tsx). Keine
// Qualifikationen, Tätigkeiten oder Erfahrungen ergänzen, die hier nicht
// ausdrücklich genannt sind.
export const carinaIntro = {
  eyebrowSignature: "Unterstützung im Studio",
  heading: "Hallo, ich bin Carina.",
  paragraphs: [
    "Ich absolviere derzeit mein Praktikum in der Fußpflege bei Körpergfüh und darf Viktoria im Studio begleiten und von ihrer Arbeit lernen.",
    "Ich freue mich darauf, praktische Erfahrung zu sammeln und die Kundinnen und Kunden von Körpergfüh während meiner Ausbildung kennenzulernen.",
  ],
} as const;

// Sehr kurze, wortgetreu freigegebene Team-Notiz für die dezente Carina-
// Erwähnung neben dem gemeinsamen Viktoria-&-Carina-Foto auf /fusspflege
// (FusspflegeTrust.tsx). Bewusst eigener, knapperer Wortlaut als
// carinaIntro oben – nicht zusammenlegen, beide sind einzeln freigegeben.
export const carinaTeamNote = {
  name: "Carina",
  role: "Praktikantin in der Fußpflege",
  text: "Carina absolviert derzeit ihr Praktikum in der Fußpflege bei Körpergfüh und sammelt hier praktische Erfahrung.",
} as const;

// Keine echten Bewertungen freigegeben. Struktur vorbereitet, Frontend blendet
// die Section aus, solange dieses Array leer ist (siehe Testimonials-Komponente).
export const testimonials: {
  name: string;
  text: string;
  rating?: number;
}[] = [];

export const navigation = [
  { label: "Fußpflege", href: "/fusspflege" },
  { label: "Dauerhafte Haarentfernung", href: "/haarentfernung" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

export const footerLinks = [
  { label: "Fußpflege", href: "/fusspflege" },
  { label: "Dauerhafte Haarentfernung", href: "/haarentfernung" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
