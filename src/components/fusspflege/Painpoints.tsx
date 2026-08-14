const painpoints = [
  {
    title: "Hornhaut, die immer wiederkommt.",
    text: "Raue oder stark beanspruchte Stellen, die sich einfach nicht mehr gepflegt anfühlen.",
  },
  {
    title: "Druckstellen oder Hühneraugen.",
    text: "Wenn Schuhe plötzlich unangenehm werden oder jeder Schritt an derselben Stelle drückt.",
  },
  {
    title: "Ein Nagel, der Probleme macht.",
    text: "Eingewachsene, verdickte oder veränderte Nägel können mehr als nur optisch störend sein.",
  },
  {
    title: "Füße, die besondere Aufmerksamkeit brauchen.",
    text: "Manche Lebenssituationen erfordern besonders viel Sorgfalt und einen fachkundigen Blick.",
  },
] as const;

export function FusspflegePainpoints() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <h2 className="max-w-xl font-display text-4xl leading-snug text-petrol sm:text-5xl">
        Wenn jeder Schritt daran erinnert, dass etwas nicht stimmt.
      </h2>
      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-petrol/80">
        Unsere Füße leisten jeden Tag unglaublich viel. Trotzdem schenken wir
        ihnen oft erst dann Aufmerksamkeit, wenn etwas unangenehm wird.
      </p>

      <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {painpoints.map((point) => (
          <div key={point.title} className="border-t border-mint-pale pt-6">
            <h3 className="font-display text-2xl text-petrol">{point.title}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-petrol/75">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-mint-pale pt-10">
        <h3 className="font-display text-2xl text-petrol">
          Oder vielleicht gibt es gar kein konkretes Problem.
        </h3>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-petrol/75">
          Vielleicht möchtest du einfach wieder das Gefühl haben, dass deine
          Füße gepflegt, leicht und gut versorgt sind.
        </p>
      </div>
    </section>
  );
}
