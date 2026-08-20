import { cancellationPolicy } from "@/lib/data/haarentfernung";

export function HaarentfernungCancellationPolicy() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
      <div className="max-w-2xl rounded-sm border border-mint-pale border-l-2 border-l-gold p-8">
        <h3 className="font-display text-xl text-petrol">
          Falls einmal etwas dazwischenkommt
        </h3>
        <div className="mt-4 flex flex-col gap-3 font-sans text-sm leading-relaxed text-petrol/75">
          <p>
            Wenn du deinen Termin nicht wahrnehmen kannst, gib mir bitte
            möglichst früh Bescheid.
          </p>
          <p>
            Bei Absagen weniger als {cancellationPolicy.lateCancellationWindowHours}{" "}
            Stunden vor der Behandlung werden {cancellationPolicy.lateCancellationFeePercent} %
            des Behandlungspreises verrechnet.
          </p>
          <p>
            Unentschuldigte bzw. versäumte Termine werden mit{" "}
            {cancellationPolicy.noShowFeePercent} % des Behandlungspreises
            verrechnet.
          </p>
        </div>
      </div>
    </section>
  );
}
