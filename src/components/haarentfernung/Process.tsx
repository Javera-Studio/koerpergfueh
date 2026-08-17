const steps = [
  {
    number: "01",
    title: "Deine Wünsche besprechen",
    text: "Zu Beginn schauen wir gemeinsam, welche Bereiche du behandeln lassen möchtest und welche Fragen du dazu hast.",
  },
  {
    number: "02",
    title: "Deine Behandlung",
    text: "Die ausgewählten Bereiche werden bei deinem Termin behandelt. Mir ist dabei wichtig, dass du dich gut aufgehoben fühlst und jederzeit Fragen stellen kannst.",
  },
  {
    number: "03",
    title: "Gemeinsam weitermachen",
    text: "Dauerhafte Haarentfernung ist keine einmalige Behandlung. Deine weiteren Termine planen wir passend zu deiner Behandlung.",
  },
] as const;

export function HaarentfernungProcess() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
        DEIN TERMIN
      </p>
      <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
        So startet deine Behandlung bei Körpergfüh.
      </h2>

      <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
        {steps.map((step) => (
          <div key={step.number}>
            <p className="font-display text-4xl text-mint-deep">{step.number}</p>
            <h3 className="mt-3 font-display text-2xl text-petrol">
              {step.title}
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/75">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
