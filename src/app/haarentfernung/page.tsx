import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { haarentfernungFaqs } from "@/lib/data/haarentfernung";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { HaarentfernungHero } from "@/components/haarentfernung/Hero";
import { HaarentfernungPainpoints } from "@/components/haarentfernung/Painpoints";
import { HaarentfernungSolution } from "@/components/haarentfernung/Solution";
import { HaarentfernungPricing } from "@/components/haarentfernung/Pricing";
import { HaarentfernungNinePlusOne } from "@/components/haarentfernung/NinePlusOne";
import { HaarentfernungPackages } from "@/components/haarentfernung/Packages";
import { HaarentfernungPersonalCare } from "@/components/haarentfernung/PersonalCare";
import { HaarentfernungProcess } from "@/components/haarentfernung/Process";
import { HaarentfernungFaq } from "@/components/haarentfernung/Faq";
import { HaarentfernungPunctuality } from "@/components/haarentfernung/Punctuality";
import { HaarentfernungCancellationPolicy } from "@/components/haarentfernung/CancellationPolicy";
import { HaarentfernungFinalCta } from "@/components/haarentfernung/FinalCta";

export const metadata: Metadata = {
  title: { absolute: "Dauerhafte Haarentfernung in Lambach | Körpergfüh by Viki" },
  description:
    "Dauerhafte Haarentfernung in Lambach bei Körpergfüh by Viki. Entdecke Behandlungen für Gesicht, Achseln, Beine, Intimbereich und weitere Körperzonen.",
  alternates: {
    canonical: `https://${business.domain}/haarentfernung`,
  },
  openGraph: {
    title: "Dauerhafte Haarentfernung in Lambach | Körpergfüh by Viki",
    description:
      "Dauerhafte Haarentfernung in Lambach bei Körpergfüh by Viki. Entdecke Behandlungen für Gesicht, Achseln, Beine, Intimbereich und weitere Körperzonen.",
    url: `https://${business.domain}/haarentfernung`,
    locale: "de_AT",
    type: "website",
  },
};

export default function HaarentfernungPage() {
  return (
    <>
      <FaqJsonLd faqs={haarentfernungFaqs} />
      <LocalBusinessJsonLd />
      <HaarentfernungHero />
      <HaarentfernungPainpoints />
      <HaarentfernungSolution />
      <HaarentfernungPricing />
      <HaarentfernungNinePlusOne />
      <HaarentfernungPackages />
      <HaarentfernungPersonalCare />
      <HaarentfernungProcess />
      <HaarentfernungFaq />
      <HaarentfernungPunctuality />
      <HaarentfernungCancellationPolicy />
      <HaarentfernungFinalCta />
    </>
  );
}
