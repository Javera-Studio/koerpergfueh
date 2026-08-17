import type { Metadata } from "next";
import {
  Mrs_Saint_Delafield,
  Allura,
  Sacramento,
  Italianno,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Schriftvergleich (intern)",
  robots: { index: false, follow: false },
};

/**
 * Interne, nicht verlinkte Vergleichsseite zur Auswahl der Signature-Schrift.
 * Nicht in der Navigation verlinkt, kein SEO-Eintrag. Nach der Entscheidung
 * wieder entfernen bzw. durch die finale Signature-Komponente ersetzen.
 */

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const sampleText = "Schön, dass du da bist";

const fonts = [
  { name: "Mrs Saint Delafield", className: mrsSaintDelafield.className },
  { name: "Allura", className: allura.className },
  { name: "Sacramento", className: sacramento.className },
  { name: "Italianno", className: italianno.className },
];

export default function SchriftvergleichPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f0] px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-16 text-center font-sans text-sm uppercase tracking-[0.2em] text-[#1f3a34]/60">
          Signature-Schrift · interner Vergleich
        </p>

        <div className="flex flex-col gap-16">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="flex flex-col items-center gap-4 border-b border-[#e6f1ea] pb-16 last:border-b-0"
            >
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-[#1f3a34]/50">
                {font.name}
              </p>
              <p
                className={`${font.className} text-5xl leading-none text-[#5c9c82]`}
              >
                {sampleText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
