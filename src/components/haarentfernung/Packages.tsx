import { packages } from "@/lib/data/haarentfernung";

export function HaarentfernungPackages() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
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

      <ul className="mt-10 flex flex-col gap-3">
        {packages.map((pkg) => (
          <li
            key={pkg.label}
            className="flex items-baseline justify-between gap-4 border-b border-mint-pale pb-3 font-sans text-base text-petrol"
          >
            <span>{pkg.label}</span>
            <span className="whitespace-nowrap text-petrol/70">
              {pkg.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
