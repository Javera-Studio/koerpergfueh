// Zentrale Unternehmensdaten – Körpergfüh by Viki
// Alle Kontakt-, Adress- und Öffnungszeiten-Angaben ausschließlich hier pflegen.

export const business = {
  name: "Körpergfüh by Viki",
  owner: "Viktoria Ollinger",
  legalForm: "Einzelunternehmen", // TO_CONFIRM: Rechtsform für Impressum
  tagline: "Fußpflege & dauerhafte Haarentfernung in Lambach",
  address: {
    street: "Marktplatz 2",
    zip: "4650",
    city: "Lambach",
    country: "AT",
  },
  phone: "0676 388 46 71",
  phoneHref: "tel:+436763884671",
  email: "koerpergfueh.23@gmail.com",
  emailHref: "mailto:koerpergfueh.23@gmail.com",
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

// `titleEmphasis` ist der letzte Teil der Überschrift, der kursiv gesetzt
// wird (siehe Bulletpoints-Vorlage). `image` referenziert die von Viktoria
// bereitgestellten Bilder (bullet1–4.png), die bereits eine eigene
// dekorative Rahmung/Form enthalten – keine zusätzliche Maske im Code nötig.
export const painpoints = [
  {
    titleStart: "Rasieren gehört ständig zu deiner",
    titleEmphasis: "Routine?",
    text: "Du wünschst dir glatte Haut, ohne immer wieder zum Rasierer greifen zu müssen.",
    image: { src: "/images/bullet1.png", alt: "Weiche Feder" },
  },
  {
    titleStart: "Druckstellen, Hornhaut oder Nägel machen",
    titleEmphasis: "Probleme?",
    text: "Manchmal erinnern dich deine Füße bei jedem Schritt daran, dass sie Aufmerksamkeit brauchen.",
    image: { src: "/images/bullet2.png", alt: "Spiegel und Vase mit Trockenblumen" },
  },
  {
    titleStart: "Du willst deinen Füßen einfach etwas",
    titleEmphasis: "Gutes tun?",
    text: "Nicht immer braucht es ein Problem. Manchmal möchtest du dich einfach wieder gepflegt fühlen.",
    image: { src: "/images/bullet3.png", alt: "Schale mit Wasser und Eukalyptuszweig" },
  },
  {
    titleStart: "Deine Füße brauchen besondere",
    titleEmphasis: "Aufmerksamkeit?",
    text: "Gerade bei sensiblen Situationen sind Fachwissen, Sorgfalt und ein einfühlsamer Umgang besonders wichtig.",
    image: { src: "/images/bullet4.png", alt: "Handgezeichnete Blattranke" },
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

// Echte Google-Bewertungen, wortgetreu übernommen (keine Inhalte erfinden
// oder sinnverändernd kürzen). `featured: true` markiert die große
// Highlight-Karte in der Testimonials-Section.
export const testimonials: {
  name: string;
  text: string;
  rating?: number;
  featured?: boolean;
}[] = [
  {
    name: "Leonie Hofstätter",
    rating: 5,
    featured: true,
    text: "Ich kann Vicky wirklich von Herzen weiterempfehlen. Sie arbeitet extrem sauber und sehr genau, besonders bei der Fußpflege merkt man sofort, wie professionell sie ist. Man fühlt sich bestens aufgehoben und weiß, dass sie ihre Arbeit mit viel Sorgfalt macht.\n\nAuch bei den Laserbehandlungen bin ich total begeistert. Schon nach den ersten Behandlungen habe ich deutlich einen Unterschied gemerkt und genau das wünscht man sich ja. Es ist einfach toll, wenn nicht nur die Atmosphäre passt, sondern auch das Ergebnis überzeugt.\n\nDazu ist sie ein unglaublich herzlicher und lustiger Mensch. Man kann mit ihr super quatschen und verbringt die Zeit dort wirklich gerne. Ich freue mich jedes Mal auf meinen Termin und komme immer wieder gerne. Absolute Empfehlung.",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Immer wieder gerne!!! Sowohl bei der professionellen medizinischen Fußpflege als auch bei der dauerhaften Haarentfernung bin ich nach jeder Behandlung sehr zufrieden. Schnell, sympathisch und kompetent. Das neue Studio in Lambach ist hell und einladend. Ich freue mich immer schon auf die nächste Behandlung – weiter so!",
  },
  {
    name: "Nadine",
    rating: 5,
    text: "Ich war zur Fußpflege hier und bin absolut begeistert! Schon beim Betreten habe ich mich wohlgefühlt – alles ist sauber und angenehm gestaltet. Die Behandlung selbst war sehr professionell und gleichzeitig total entspannend. Meine Füße fühlen sich wie neu an – gepflegt, glatt und schmerzfrei. Viktoria war freundlich, aufmerksam und hat mir auch hilfreiche Tipps zur Fußpflege für zuhause gegeben. Ich komme definitiv wieder und kann diesen Ort jedem empfehlen, der seinen Füßen etwas Gutes tun will!",
  },
  {
    name: "Sandra Samhaber",
    rating: 5,
    text: "TOP!! Ich kann sie nur jedem weiter empfehlen. Ich bin begeistert && es wird so sehr auf die Wünsche und Bedürfnisse eingegangen! [...] Ein Mensch mit Liebe zum Beruf und die weiß was sie tut!!",
  },
  {
    name: "Olivia M.",
    rating: 5,
    text: "Schönes, gepflegtes Studio in harmonischer Atmosphäre zum Wohlfühlen! Viktoria bietet als sehr freundliche und hilfsbereite Mensch kompetente Beratung und top Behandlungen zu einem fairen Angebot! 5/5",
  },
  {
    name: "Carina",
    rating: 5,
    text: "Danke für deine tolle Arbeit liebe Viktoria 🥰 man fühlt sich sehr wohl bei euch im Salon und die Betreuung sowie das Ergebnis einfach top! Dankeschön",
  },
];

// Nur der Durchschnitt (5,0) ist über alle sechs Bewertungen hinweg
// bestätigt. TODO: Gesamtanzahl der Google-Bewertungen von Viktoria
// bestätigen lassen, bevor `count` hier eingetragen wird – keine Zahl
// erfinden. Die Section zeigt bis dahin bewusst keine Bewertungsanzahl an.
export const googleRating: { average: number; count: number | null } = {
  average: 5.0,
  count: null,
};

// TODO: Korrekte URL zum Google-Unternehmensprofil von Viktoria bestätigen
// lassen und hier eintragen. Bis dahin bewusst kein Link/keine erfundene
// URL – die Testimonials-Section zeigt den CTA erst, sobald dieser Wert
// gesetzt ist.
export const googleReviewsUrl: string | null = null;

export const navigation = [
  { label: "Fußpflege", href: "/fusspflege" },
  { label: "Dauerhafte Haarentfernung", href: "/haarentfernung" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

// Rein rechtliche Links für die untere Footerzeile. Die Seitennavigation im
// Footer verwendet bewusst dieselbe `navigation`-Liste wie der Header, damit
// beide konsistent bleiben und Impressum/Datenschutz nicht doppelt auftauchen.
export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
