import { business, services } from "@/lib/data/business";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: `https://${business.domain}/images/logo.png`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.zip,
      addressLocality: business.address.city,
      addressCountry: business.address.country,
    },
    url: `https://${business.domain}`,
    priceRange: "€€",
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
