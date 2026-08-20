import Link from "next/link";

export function HaarentfernungSolution() {
  return (
    <section className="bg-mint-pale/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
            MEHR LEICHTIGKEIT IM ALLTAG
          </p>
          <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
            Weniger Haarentfernung. Mehr Zeit für anderes.
          </h2>
          <div className="mt-8 flex flex-col gap-5 font-sans text-lg leading-relaxed text-petrol/80">
            <p>
              Bei Körpergfüh biete ich dir dauerhafte Haarentfernung für
              verschiedene Bereiche von Gesicht und Körper an.
            </p>
            <p>
              Mir ist wichtig, dass die Behandlung unkompliziert bleibt und du
              dich bei mir gut aufgehoben fühlst. Deshalb nehme ich mir Zeit
              für deine Fragen und bespreche mit dir, welche Bereiche du
              behandeln lassen möchtest.
            </p>
            <p>
              Mein Ziel ist nicht, dir große Versprechen zu machen. Ich
              möchte dir eine professionelle Möglichkeit bieten,
              unerwünschten Haarwuchs langfristig zu reduzieren und den
              regelmäßigen Aufwand rund ums Rasieren zu verringern.
            </p>
          </div>

          <Link
            href="#preise"
            className="mt-8 inline-block rounded-full bg-mint px-7 py-3 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
          >
            Preise &amp; Bereiche ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
