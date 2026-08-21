import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { fusspflegeFaqs } from "@/lib/data/fusspflege";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { FusspflegeHero } from "@/components/fusspflege/Hero";
import { FusspflegePainpoints } from "@/components/fusspflege/Painpoints";
import { FusspflegeAtmospherePhoto } from "@/components/fusspflege/AtmospherePhoto";
import { FusspflegeTransition } from "@/components/fusspflege/Transition";
import { FusspflegeMainTreatments } from "@/components/fusspflege/MainTreatments";
import { FusspflegeSensitiveCare } from "@/components/fusspflege/SensitiveCare";
import { FusspflegeOncology } from "@/components/fusspflege/Oncology";
import { FusspflegeMoreServices } from "@/components/fusspflege/MoreServices";
import { FusspflegeManicure } from "@/components/fusspflege/Manicure";
import { FusspflegeProcess } from "@/components/fusspflege/Process";
import { FusspflegeTrust } from "@/components/fusspflege/Trust";
import { FusspflegeFaq } from "@/components/fusspflege/Faq";
import { FusspflegeFinalCta } from "@/components/fusspflege/FinalCta";

export const metadata: Metadata = {
  title: { absolute: "Fußpflege in Lambach | Körpergfüh by Viki" },
  description:
    "Professionelle Fußpflege in Lambach bei Körpergfüh by Viki – von regelmäßiger Pflege bis zur onkologisch-kosmetischen Fußpflege. Persönlich und individuell betreut.",
  alternates: {
    canonical: `https://${business.domain}/fusspflege`,
  },
  openGraph: {
    title: "Fußpflege in Lambach | Körpergfüh by Viki",
    description:
      "Professionelle Fußpflege in Lambach bei Körpergfüh by Viki – von regelmäßiger Pflege bis zur onkologisch-kosmetischen Fußpflege. Persönlich und individuell betreut.",
    url: `https://${business.domain}/fusspflege`,
    locale: "de_AT",
    type: "website",
  },
};

export default function FusspflegePage() {
  return (
    <>
      <FaqJsonLd faqs={fusspflegeFaqs} />
      <LocalBusinessJsonLd />
      <FusspflegeHero />
      <FusspflegePainpoints />
      <FusspflegeAtmospherePhoto />
      <FusspflegeTransition />
      <FusspflegeMainTreatments />
      <FusspflegeSensitiveCare />
      <FusspflegeOncology />
      <FusspflegeMoreServices />
      <FusspflegeManicure />
      <FusspflegeProcess />
      <FusspflegeTrust />
      <FusspflegeFaq />
      <FusspflegeFinalCta />
    </>
  );
}
