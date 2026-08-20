import { punctualityPolicy } from "@/lib/data/haarentfernung";

export function HaarentfernungPunctuality() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
      <div className="max-w-2xl rounded-sm border border-mint-pale border-l-2 border-l-gold p-8">
        <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
          GUT ZU WISSEN
        </p>
        <h3 className="mt-3 font-display text-xl text-petrol">
          Damit genug Zeit für deine Behandlung bleibt.
        </h3>
        <div className="mt-4 flex flex-col gap-3 font-sans text-sm leading-relaxed text-petrol/75">
          <p>Bitte komm pünktlich zu deinem vereinbarten Termin.</p>
          <p>
            Bei einer Verspätung ab {punctualityPolicy.lateThresholdMinutes}{" "}
            Minuten kann der Termin nicht mehr wie geplant stattfinden und
            muss auf einen anderen Zeitpunkt verschoben werden.
          </p>
        </div>
      </div>
    </section>
  );
}
