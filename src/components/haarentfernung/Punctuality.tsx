import { punctualityPolicy, cancellationPolicy } from "@/lib/data/haarentfernung";

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9.5v7l5 3" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="5" y="8" width="22" height="19" rx="2" />
      <path d="M10.5 5v6M21.5 5v6" />
      <path d="M5 14h22" />
    </svg>
  );
}

/**
 * "Gut zu wissen" – zusammengeführte Pünktlichkeits- und Storno-Hinweise als
 * eine ruhige, zweispaltige Editorial-Section statt zwei separater
 * Hinweisboxen. Inhalte/Regelungen unverändert, nur neu strukturiert.
 */
export function HaarentfernungPunctuality() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <p className="reveal font-sans text-xs font-medium tracking-[0.2em] text-gold">
            GUT ZU WISSEN
          </p>
          <h2 className="reveal reveal-d1 mx-auto mt-3 max-w-xl font-display text-3xl leading-snug text-petrol sm:text-4xl">
            Damit genug Zeit für
            <br />
            deine Behandlung bleibt.
          </h2>
        </div>

        <div className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Feine vertikale Gold-Linie zwischen den Spalten, nur ab lg –
              zeichnet sich beim Scrollen von oben nach unten auf. */}
          <div
            aria-hidden
            className="terminline-gold reveal absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/35 lg:block"
          />

          {/* Pünktlichkeit */}
          <div className="reveal reveal-d2">
            <ClockIcon className="h-6 w-6 text-gold" />
            <p className="mt-3 font-sans text-xs font-medium tracking-[0.2em] text-gold">
              PÜNKTLICHKEIT
            </p>
            <h3 className="mt-2 font-display text-xl text-petrol sm:text-2xl">
              Bitte komm pünktlich zu deinem vereinbarten Termin.
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-petrol/75">
              Bei einer Verspätung ab {punctualityPolicy.lateThresholdMinutes}{" "}
              Minuten kann der Termin nicht mehr wie geplant stattfinden und
              muss auf einen anderen Zeitpunkt verschoben werden.
            </p>
          </div>

          {/* Terminabsage – auf Mobile durch feine horizontale Gold-Linie
              von der linken Spalte getrennt statt der vertikalen Linie. */}
          <div className="reveal reveal-d3 border-t border-gold/25 pt-8 lg:border-t-0 lg:pt-0">
            <CalendarIcon className="h-6 w-6 text-gold" />
            <p className="mt-3 font-sans text-xs font-medium tracking-[0.2em] text-gold">
              FALLS ETWAS DAZWISCHENKOMMT
            </p>
            <h3 className="mt-2 font-display text-xl text-petrol sm:text-2xl">
              Gib mir bitte möglichst früh Bescheid.
            </h3>

            <div className="mt-5 flex flex-col divide-y divide-gold/20 border-t border-gold/20">
              <div className="flex items-center justify-between gap-4 py-3.5">
                <span className="font-sans text-sm text-petrol/75">
                  Weniger als {cancellationPolicy.lateCancellationWindowHours}{" "}
                  Stunden vorher
                </span>
                <span className="font-display text-2xl text-petrol">
                  {cancellationPolicy.lateCancellationFeePercent} %
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 py-3.5">
                <span className="font-sans text-sm text-petrol/75">
                  Unentschuldigter bzw. versäumter Termin
                </span>
                <span className="font-display text-2xl text-petrol">
                  {cancellationPolicy.noShowFeePercent} %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
