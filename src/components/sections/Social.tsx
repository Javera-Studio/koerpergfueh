import { business, socialTeaser } from "@/lib/data/business";

const iconCommon = {
  viewBox: "0 0 32 32",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconCommon} className={className}>
      <rect x="5" y="5" width="22" height="22" rx="7" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="23" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconCommon} className={className}>
      <path d="M20 6h-3a4.5 4.5 0 0 0-4.5 4.5V14H9v4h3.5v10H17V18h3.3l.7-4H17v-3.2c0-1 .4-1.8 1.8-1.8H21V6.1c-.4-.05-1.6-.1-3-.1Z" />
    </svg>
  );
}

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
