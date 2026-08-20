import { packages } from "@/lib/data/haarentfernung";

const leftPackages = packages.slice(0, 4);
const rightPackages = packages.slice(4);

export function HaarentfernungPackages() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
          MEHRERE BEREICHE KOMBINIEREN
        </p>
        <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Wenn du gleich mehrere Bereiche behandeln möchtest.
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-petrol/80">
          Für häufig kombinierte Körperbereiche gibt es eigene Paketpreise.
          So kannst du mehrere Zonen innerhalb deiner Behandlung miteinander
          verbinden.
        </p>
      </div>

      {/* Zwei ausgewogene Preisblöcke statt einer langen Liste, damit auf
          Desktop keine große leere Fläche rechts entsteht. */}
      <div className="relative mt-14 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/25 lg:block"
        />

        <ul className="flex flex-col">
          {leftPackages.map((pkg, index) => (
            <li
              key={pkg.label}
              className={`reveal reveal-d${(index % 4) + 1} flex items-baseline justify-between gap-4 border-b border-mint-pale/60 py-3.5 font-sans text-base text-petrol`}
            >
              <span>{pkg.label}</span>
              <span className="whitespace-nowrap text-right text-petrol/70">
                {pkg.price}
              </span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col">
          {rightPackages.map((pkg, index) => {
            const isHighlighted = pkg.label === "Ganzkörper";
            return (
              <li
                key={pkg.label}
                className={`reveal reveal-d${(index % 4) + 1} flex items-baseline justify-between gap-4 border-b border-mint-pale/60 py-3.5 font-sans text-base text-petrol ${
                  isHighlighted ? "font-medium" : ""
                }`}
              >
                <span>{pkg.label}</span>
                <span
                  className={`whitespace-nowrap text-right ${
                    isHighlighted ? "font-medium text-gold" : "text-petrol/70"
                  }`}
                >
                  {pkg.price}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
