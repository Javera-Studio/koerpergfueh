import { pricingGroups } from "@/lib/data/haarentfernung";

export function HaarentfernungPricing() {
  return (
    <section id="preise" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
        TRANSPARENT &amp; ÜBERSICHTLICH
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Deine Behandlung. Deine Bereiche. Klare Preise.
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
        Du kannst einzelne Bereiche behandeln lassen oder mehrere Zonen
        miteinander kombinieren. Für regelmäßige Behandlungen gibt es
        außerdem ein 9+1-Angebot.
      </p>

      <div className="mt-14 flex flex-col gap-14">
        {pricingGroups.map((group, index) => (
          <div key={group.title} className={`reveal reveal-d${(index % 4) + 1}`}>
            <h3 className="font-display text-2xl text-petrol">{group.title}</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse font-sans text-base">
                <thead>
                  <tr className="border-b border-mint-pale text-left text-sm text-petrol/60">
                    <th className="py-3 font-normal">Zone</th>
                    <th className="py-3 font-normal">Einzelbehandlung</th>
                    <th className="py-3 font-normal">9 + 1 Angebot</th>
                  </tr>
                </thead>
                <tbody>
                  {group.zones.map((zone) => (
                    <tr key={zone.zone} className="border-b border-mint-pale/60">
                      <td className="py-3 text-petrol">{zone.zone}</td>
                      <td className="py-3 text-petrol/80">{zone.single}</td>
                      <td className="py-3 text-petrol/80">{zone.ninePlusOne}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
