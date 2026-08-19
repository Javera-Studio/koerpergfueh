import type { MetadataRoute } from "next";
import { business } from "@/lib/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;

  // Impressum & Datenschutz bewusst nicht gelistet: beide tragen
  // robots: { index: false } (siehe jeweilige page.tsx). Eine Sitemap soll
  // nur indexierbare URLs enthalten, sonst entsteht ein widersprüchliches
  // Signal an Google.
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/fusspflege`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/haarentfernung`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
