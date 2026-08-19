import Link from "next/link";
import { business, navigation, legalLinks } from "@/lib/data/business";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/40 bg-mint-pale/30">
      {/* Botanisches Wasserzeichen (pflanze.png) – groß, unten rechts,
          angeschnitten, hinter dem Inhalt, überdeckt keinen Text. */}
      <BotanicalWatermark
        className="-bottom-16 -right-12 hidden h-[420px] w-[280px] lg:block"
        opacity={0.14}
        rotate={-4}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-10">
          {/* Marke */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-xl text-petrol">
              Körpergfüh by Viki
            </p>
            <p className="max-w-xs font-sans text-sm text-petrol/70">
              {business.tagline}
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
              KONTAKT
            </p>
            <div className="mt-1 flex flex-col gap-1 font-sans text-sm text-petrol/80">
              <p>{business.address.street}</p>
              <p>
                {business.address.zip} {business.address.city}
              </p>
            </div>
            <a
              href={business.phoneHref}
              className="mt-2 font-sans text-sm text-petrol/80 hover:text-mint-deep"
            >
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="font-sans text-sm text-petrol/80 hover:text-mint-deep"
            >
              {business.email}
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
              ENTDECKEN
            </p>
            <nav className="mt-1 flex flex-col gap-2 font-sans text-sm text-petrol/80">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit hover:text-mint-deep hover:underline hover:decoration-gold hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-mint-pale pt-6 font-sans text-xs text-petrol/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <nav className="flex items-center gap-2">
            {legalLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden>·</span>}
                <Link href={link.href} className="hover:text-mint-deep">
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
