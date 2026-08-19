import { business, services, openingHours } from "@/lib/data/business";

const dayOfWeekMap: Record<string, string> = {
  Montag: "https://schema.org/Monday",
  Dienstag: "https://schema.org/Tuesday",
  Mittwoch: "https://schema.org/Wednesday",
  Donnerstag: "https://schema.org/Thursday",
  Freitag: "https://schema.org/Friday",
  Samstag: "https://schema.org/Saturday",
  Sonntag: "https://schema.org/Sunday",
};

// Nur Einträge mit einer klaren "HH:MM – HH:MM Uhr"-Zeitspanne lassen sich
// schema-konform abbilden. "nach Vereinbarung" oder leere Einträge (Montag,
// noch nicht bestätigt) bewusst auslassen statt eine Uhrzeit zu erfinden.
const timeRangePattern = /^(\d{2}:\d{2})\s*–\s*(\d{2}:\d{2})/;

const openingHoursSpecification = openingHours
  .map((entry) => {
    const match = entry.hours.match(timeRangePattern);
    if (!match) return null;
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayOfWeekMap[entry.day],
      opens: match[1],
      closes: match[2],
    };
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: `https://${business.domain}/images/logo.png`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.zip,
      addressLocality: business.address.city,
      addressCountry: business.address.country,
    },
    url: `https://${business.domain}`,
    priceRange: "€€",
    ...(openingHoursSpecification.length > 0 && { openingHoursSpecification }),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `https://${business.domain}${service.href}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
