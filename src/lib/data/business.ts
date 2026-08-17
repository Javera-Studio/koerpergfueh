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
  // Öffnungszeiten liegen aktuell nicht eindeutig bestätigt vor.
  openingHours: null as null | { day: string; hours: string }[], // TO_CONFIRM: Öffnungszeiten mit Kundin abstimmen
  socials: [] as { label: string; href: string }[], // Keine bestätigten Profile bekannt – bewusst leer
} as const;

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

export const qualifications = [
  "Ausgebildete Fußpflegerin",
  "Onkologisch-kosmetische Zusatzausbildung",
  "Medizinischer & pflegerischer Hintergrund",
] as const;

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
