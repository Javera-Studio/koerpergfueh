import { bodyAreaGroups } from "@/lib/data/haarentfernung";

export function HaarentfernungBodyAreas() {
  return (
    <section id="bereiche" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
        VON KOPF BIS FUSS
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Welche Bereiche möchtest du nicht mehr ständig rasieren?
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
        Dauerhafte Haarentfernung ist bei Körpergfüh für zahlreiche
        Bereiche von Gesicht und Körper möglich. Du entscheidest, was zu
        dir und deinem Alltag passt.
      </p>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {bodyAreaGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-2xl text-petrol">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.zones.map((zone, index) => (
                <li
                  key={zone}
                  className={`reveal reveal-d${(index % 4) + 1} flex items-start gap-3 font-sans text-base text-petrol/80`}
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint-deep" />
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
