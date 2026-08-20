import Image from "next/image";
import Link from "next/link";
import { business, navigation, legalLinks } from "@/lib/data/business";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";
import { Signature } from "@/components/ui/Signature";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/30 bg-cream">
      {/* Botanisches Wasserzeichen (pflanze.png) – bewusst groß und am Rand
          angeschnitten, wirkt wie ein Hintergrund-Wasserzeichen statt eines
          angeklebten Elements. Sehr geringe Deckkraft, überlagert keinen
          Text (liegt im DOM vor dem Content, Content zeichnet darüber). */}
      <BotanicalWatermark
        className="-bottom-28 -right-24 hidden h-[560px] w-[380px] lg:block"
        opacity={0.09}
        rotate={-4}
      />
      <BotanicalWatermark
        className="-left-16 -top-10 hidden h-[220px] w-[150px] lg:block"
        opacity={0.05}
        flip
        rotate={6}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-14">
        <Signature className="block text-center !text-xl sm:!text-2xl" color="gold">
          Schön, dass du da bist.
        </Signature>

        <div className="mt-8 grid gap-8 text-center lg:mt-10 lg:grid-cols-3">
          {/* Marke */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Körpergfüh by Viki Logo"
              width={200}
              height={200}
              className="h-10 w-auto object-contain"
            />
            <p className="max-w-xs font-sans text-sm text-petrol/70">
              {business.tagline}
            </p>
            {business.socials.length > 0 && (
              <div className="mt-1 flex items-center justify-center gap-5">
                {business.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gold/70 transition-colors duration-300 hover:text-gold"
                  >
                    {social.label === "Instagram" ? (
                      <InstagramIcon className="h-5 w-5" />
                    ) : (
                      <FacebookIcon className="h-5 w-5" />
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
                  className="w-fit transition-colors duration-300 hover:text-mint-deep hover:underline hover:decoration-gold hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-4 border-t border-gold/25 pt-6 font-sans text-xs text-petrol/60 sm:grid-cols-3">
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
