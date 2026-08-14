import type { MetadataRoute } from "next";
import { business } from "@/lib/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;

  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/fusspflege`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/haarentfernung`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
