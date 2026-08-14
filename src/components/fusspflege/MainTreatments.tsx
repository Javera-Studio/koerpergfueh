import Link from "next/link";
import { mainTreatments } from "@/lib/data/fusspflege";

export function FusspflegeMainTreatments() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {mainTreatments.map((treatment) => (
          <div
            key={treatment.title}
            className="flex flex-col rounded-sm border border-mint-pale bg-cream p-8"
          >
            <h3 className="font-display text-3xl text-petrol">
              {treatment.title}
            </h3>
            <p className="mt-2 font-sans text-base font-medium text-mint-deep">
              {treatment.subtitle}
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-petrol/75">
              {treatment.description}
            </p>

            {treatment.includes.length > 0 && (
              <ul className="mt-6 flex flex-col gap-2">
                {treatment.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-sm text-petrol/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-1 flex-col justify-end gap-6">
              <p className="font-display text-3xl text-petrol">
                {treatment.price}
              </p>
              <Link
                href="/#kontakt"
                className="rounded-full bg-mint px-6 py-3 text-center font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream"
              >
                {treatment.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
