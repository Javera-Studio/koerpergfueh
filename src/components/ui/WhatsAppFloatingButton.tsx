import { business } from "@/lib/data/business";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M9 24.5 6.5 27l2.6-3.4a10.5 10.5 0 1 1 3.4 2.3L9 24.5Z" />
      <path d="M12.2 12.6c0 4.3 3.4 7.7 7.7 7.7.6 0 1.1-.4 1.2-1l.3-1.3c.1-.5-.1-1-.5-1.3l-1.8-1.2c-.4-.3-1-.2-1.3.1l-.6.7c-1.3-.6-2.4-1.7-3.1-3l.7-.6c.3-.3.4-.9.1-1.3l-1.2-1.8c-.3-.4-.8-.6-1.3-.5l-1.3.3c-.6.1-1 .6-1 1.2Z" />
    </svg>
  );
}

/**
 * Global sichtbarer, dezenter WhatsApp-Kontaktbutton (unten rechts, fixed
 * position), auf allen Seiten in RootLayout gemountet. Bewusst in
 * Marken-Mint statt kräftigem WhatsApp-Grün, feines Outline-Icon statt
 * offiziellem Logo. Tooltip nur per CSS (kein Client-JS nötig).
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Über WhatsApp anfragen"
      className="group fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-mint-deep text-cream shadow-[0_4px_16px_rgba(31,58,52,0.25)] transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-petrol px-3 py-1.5 font-sans text-xs font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Über WhatsApp anfragen
      </span>
    </a>
  );
}
