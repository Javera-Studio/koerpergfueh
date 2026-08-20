import {
  expertiseHighlights,
  viktoriaIntro,
  carinaIntro,
} from "@/lib/data/business";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Signature } from "@/components/ui/Signature";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

// Sehr feines, minimalistisches Blüten-Icon (handgezeichnet, kein
// Icon-Set), für alle vier Expertise-Highlights identisch verwendet.
function FlowerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 12c0-2.4 1.4-4 3-4.6-.6 1.6-.6 3.2 0 4.6" />
      <path d="M12 12c0-2.4-1.4-4-3-4.6.6 1.6.6 3.2 0 4.6" />
      <path d="M12 12c2.4 0 4 1.4 4.6 3-1.6.6-3.2.6-4.6 0" />
      <path d="M12 12c-2.4 0-4 1.4-4.6 3 1.6.6 3.2.6 4.6 0" />
      <circle cx="12" cy="12" r="1.1" />
      <path d="M12 13.2v6" />
    </svg>
  );
}

export function About() {
  const [firstParagraph, ...restParagraphs] = viktoriaIntro.paragraphs;
  const closingParagraph = restParagraphs[restParagraphs.length - 1];
  const middleParagraphs = restParagraphs.slice(0, -1);

  return (
    <section
      id="ueber-mich"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Botanisches Signature-Element: einzige animierte Vorkommen auf der
          gesamten Website. Bewusst klein, vollständig innerhalb dieser
          Section (kein Bleed über den Rand), sehr niedrige Opacity –
          Wasserzeichen-Wirkung statt dominanter Grafik. Nur ab lg sichtbar,
          in der Weißraum-Ecke über dem Content, ausreichend Abstand zu Text. */}
      <svg
        aria-hidden
        className="botanical-draw pointer-events-none absolute right-8 top-8 hidden h-28 w-14 text-mint-deep opacity-10 lg:block"
        viewBox="0 0 56 160"
        fill="none"
      >
        <path d="M28 4 C 26 50, 30 110, 28 156" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 24 C 20 20, 12 22, 8 30" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 48 C 36 44, 44 46, 48 54" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 74 C 20 70, 12 72, 8 80" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 100 C 36 96, 44 98, 48 106" stroke="currentColor" strokeWidth="1.25" />
        <path d="M28 126 C 20 122, 13 124, 9 131" stroke="currentColor" strokeWidth="1.25" />
      </svg>

      {/* Botanisches Wasserzeichen (pflanze.png) – groß und zurückhaltend im
          Hintergrund, unten links, bleedet über den Rand. Bewusst weit
          entfernt vom kleinen animierten Linien-Zweig oben rechts. */}
      <BotanicalWatermark
        className="-bottom-24 -left-24 hidden h-[620px] w-[413px] lg:block"
        opacity={0.12}
        rotate={-3}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Viktoria – zentraler Vertrauensbereich */}
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <ImagePlaceholder
              label="Portrait: Viktoria"
              offset="top-right"
              rectTone="greige"
              aspect="aspect-[4/5]"
              className="mx-auto max-w-[580px] lg:mx-0"
              parallax
              image={{
                src: "/images/victoria1.jpg",
                alt: "Viktoria Ollinger, Inhaberin von Körpergfüh, in ihrem Studio in Lambach",
                sizes: "(min-width: 1024px) 580px, 90vw",
              }}
            />

            {/* Zitat direkt unter dem Bild inszeniert: viel Weißraum, größere
                Serifenschrift, dezentes goldenes Anführungszeichen statt
                Bewertungs-Optik. */}
            <div className="mx-auto mt-10 max-w-[580px] lg:mx-0">
              <p className="font-sans text-lg leading-relaxed text-petrol/80">
                {closingParagraph}
              </p>
              <div className="relative mt-16 max-w-md">
                <span
                  aria-hidden
                  className="absolute -left-2 -top-6 font-display text-6xl leading-none text-gold/50"
                >
                  &rdquo;
                </span>
                <p className="relative font-display text-3xl leading-snug text-mint-deep sm:text-4xl">
                  {viktoriaIntro.highlight}
                </p>
              </div>
            </div>
          </div>

          <div>
            <Signature className="block">
              {viktoriaIntro.eyebrowSignature}
            </Signature>
            <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
              {viktoriaIntro.heading}
            </h2>

            <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
              {firstParagraph}
            </p>

            {/* Expertise als ruhiges 2x2-Grid: Fineline-Blüte + Text statt
                Checkliste mit Trennlinien. */}
            <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 min-[700px]:grid-cols-2">
              {expertiseHighlights.map((item, index) => (
                <li
                  key={item}
                  className={`reveal reveal-d${(index % 4) + 1} flex items-center gap-3`}
                >
                  <FlowerIcon className="h-[19px] w-[19px] shrink-0 text-gold" />
                  <span className="font-sans text-base text-petrol">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-5 font-sans text-lg leading-relaxed text-petrol/80">
              {middleParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Carina – kompakter, sympathischer Team-Bereich, klar untergeordnet */}
        <div className="mt-20 lg:mt-24">
          <div className="mx-auto h-px w-16 bg-gold/40 lg:mx-0" />
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[10rem_1fr] lg:gap-12">
            <ImagePlaceholder
              label="Portrait: Carina"
              aspect="aspect-[4/5]"
              className="mx-auto w-32 sm:w-40 lg:mx-0 lg:w-full"
              image={{
                src: "/images/carina.jpg",
                alt: "Carina, Praktikantin in der Fußpflege bei Körpergfüh",
                sizes: "160px",
              }}
            />

            <div className="text-center lg:text-left">
              <Signature className="block">
                {carinaIntro.eyebrowSignature}
              </Signature>
              <h3 className="mt-2 font-display text-2xl text-petrol sm:text-3xl">
                {carinaIntro.heading}
              </h3>
              <p className="mx-auto mt-3 max-w-xl font-sans text-base leading-relaxed text-petrol/75 lg:mx-0">
                {carinaIntro.paragraphs[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
