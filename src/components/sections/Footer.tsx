import Image from "next/image";
import Link from "next/link";
import { business, navigation, legalLinks } from "@/lib/data/business";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

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
        <div className="grid gap-10 text-center lg:grid-cols-3 lg:gap-10">
          {/* Marke */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-display text-xl text-petrol">
              Körpergfüh by Viki
            </p>
            <p className="max-w-xs font-sans text-sm text-petrol/70">
              {business.tagline}
            </p>
            {business.socials.length > 0 && (
              <div className="mt-1 flex items-center justify-center gap-4">
                {business.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-petrol/50 transition-colors duration-300 hover:text-gold"
                  >
                    {social.label === "Instagram" ? (
                      <InstagramIcon className="h-4 w-4" />
                    ) : (
                      <FacebookIcon className="h-4 w-4" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
              KONTAKT
            </p>
            <div className="mt-1 flex flex-col items-center gap-1 font-sans text-sm text-petrol/80">
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
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold">
              ENTDECKEN
            </p>
            <nav className="mt-1 flex flex-col items-center gap-2 font-sans text-sm text-petrol/80">
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

        <div className="mt-12 grid grid-cols-1 items-center gap-4 border-t border-mint-pale pt-6 font-sans text-xs text-petrol/60 sm:grid-cols-3">
          <p className="text-center sm:justify-self-start sm:text-left">
            © {year} {business.name}
          </p>

          {/* Sehr dezente Designer-Signatur, keine Werbung – geringes
              Gewicht, gedämpfte Farbe, minimaler Hover-Effekt. */}
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-petrol/40 sm:justify-self-center">
            Webdesign by
            <a
              href="https://javera-studio.at"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-petrol/50 transition-colors duration-300 hover:text-petrol/80"
            >
              <Image
                src="/images/javera-logo.png"
                alt="JAVERA STUDIO"
                width={32}
                height={32}
                className="rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="tracking-[0.08em]">JAVERA STUDIO</span>
            </a>
          </p>

          <nav className="flex items-center justify-center gap-2 sm:justify-self-end">
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
