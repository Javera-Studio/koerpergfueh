import { business, socialTeaser } from "@/lib/data/business";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

/**
 * Sehr dezente Teaser-Section für die Social-Media-Kanäle, zwischen Studio
 * und Testimonials. Bewusst leise: kein Feed, keine Grafik-Karten, nur
 * kurzer Text + zwei Fine-Line-Icons im gleichen Gold-Akzent-Stil wie der
 * Rest der Website.
 */
export function Social() {
  if (business.socials.length === 0) return null;

  return (
    <section className="border-y border-mint-pale/60 bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10">
        <h2 className="reveal font-display text-2xl text-petrol sm:text-3xl">
          {socialTeaser.heading}
        </h2>
        <p className="reveal reveal-d1 mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-petrol/70">
          {socialTeaser.text}
        </p>

        <div className="reveal reveal-d2 mt-6 flex items-center justify-center gap-6">
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
                <InstagramIcon className="h-5 w-5" />
              ) : (
                <FacebookIcon className="h-5 w-5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
