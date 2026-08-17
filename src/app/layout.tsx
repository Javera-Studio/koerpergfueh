import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { business } from "@/lib/data/business";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Signature-Schrift: dezenter, handschriftlicher Markenakzent angelehnt an
// den Logo-Schriftzug. Ausschließlich für kurze, gezielte Akzente einsetzen
// (siehe src/components/ui/Signature.tsx) – niemals für Fließtext,
// Navigation, Buttons, Preise oder FAQs.
const signature = Mrs_Saint_Delafield({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${business.domain}`),
  title: {
    default: "Körpergfüh by Viki – Fußpflege & dauerhafte Haarentfernung in Lambach",
    template: "%s – Körpergfüh by Viki",
  },
  description:
    "Professionelle Fußpflege und dauerhafte Haarentfernung in Lambach. Persönlich, fachkundig und mit Gefühl – bei Körpergfüh by Viki.",
  openGraph: {
    title: "Körpergfüh by Viki – Fußpflege & dauerhafte Haarentfernung in Lambach",
    description:
      "Professionelle Fußpflege und dauerhafte Haarentfernung in Lambach. Persönlich, fachkundig und mit Gefühl.",
    url: `https://${business.domain}`,
    siteName: "Körpergfüh by Viki",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable} ${signature.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-petrol">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
