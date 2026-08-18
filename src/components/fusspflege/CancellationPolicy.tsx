import { cancellationPolicy } from "@/lib/data/fusspflege";

export function FusspflegeCancellationPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
      <div className="rounded-sm border border-mint-pale border-l-2 border-l-gold p-8">
        <h3 className="font-display text-xl text-petrol">
          Damit genug Zeit für jede Kundin und jeden Kunden bleibt
        </h3>
        <div className="mt-4 flex flex-col gap-3 font-sans text-sm leading-relaxed text-petrol/75">
          <p>
            Falls du einen vereinbarten Termin nicht wahrnehmen kannst, gib
            mir bitte möglichst früh Bescheid.
          </p>
          <p>
            Bei Absagen weniger als {cancellationPolicy.lateCancellationWindowHours}{" "}
            Stunden vor dem Termin werden {cancellationPolicy.lateCancellationFeePercent} % des
            Behandlungspreises verrechnet.
          </p>
          <p>
            Bei unentschuldigten bzw. versäumten Terminen werden{" "}
            {cancellationPolicy.noShowFeePercent} % des Behandlungspreises
            verrechnet.
          </p>
        </div>
      </div>
    </section>
  );
}
