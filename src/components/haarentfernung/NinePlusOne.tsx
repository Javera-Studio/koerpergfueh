import { ninePlusOneOffer } from "@/lib/data/haarentfernung";

export function HaarentfernungNinePlusOne() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="rounded-sm bg-mint-pale/60 p-10 lg:p-14">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
            9 + 1 ANGEBOT
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-petrol sm:text-4xl">
            Zehn Behandlungen. Eine davon geht auf mich.
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
            Wenn du dich für ein 9+1-Abo entscheidest, bezahlst du neun
            Behandlungen und erhältst die zehnte Behandlung der gewählten
            Zone kostenlos dazu.
          </p>
          <p className="mt-6 font-sans text-sm text-petrol/60">
            Aktion gültig bei Kauf eines Abos vom {ninePlusOneOffer.validFrom}{" "}
            bis {ninePlusOneOffer.validTo}.
          </p>
        </div>
      </div>
    </section>
  );
}
