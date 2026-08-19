import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { Hero } from "@/components/sections/Hero";
import { Painpoints } from "@/components/sections/Painpoints";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Studio } from "@/components/sections/Studio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Availability } from "@/components/sections/Availability";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export const metadata: Metadata = {
  alternates: {
    canonical: `https://${business.domain}/`,
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Painpoints />
      <Services />
      <About />
      <Studio />
      <Testimonials />
      <Contact />
      <Availability />
    </>
  );
}
