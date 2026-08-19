type IconName = "razor" | "foot" | "sparkle" | "shield";

/**
 * Elegante, organische Fineline-Icons (Champagnergold) für die Painpoints-
 * Section. Bewusst kein Icon-Set/keine Bibliothek – vier handgezeichnete
 * Outline-Pfade im selben Stil (dünne Linien, keine Flächen, keine Kreise/
 * Kästen), damit sie wie ein zusammengehöriges Set wirken.
 *
 * Motive:
 * - razor: klassischer Safety-Razor (Kopf + Griff), kein elektrischer Rasierer
 * - foot: Fuß von der Seite, klar als Fuß erkennbar
 * - sparkle: kleiner Zweig mit Blättern (botanische Website-Sprache)
 * - shield: zwei behutsam geöffnete Hände mit kleinem Herz dazwischen
 */
export function PainpointIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "razor":
      // Klassischer Safety-Razor: Kopf (Guard + Klingenbalken) und Griff.
      return (
        <svg {...common} className={className}>
          <path d="M9 8h14" />
          <path d="M8 11.5h16" />
          <path d="M9 8v3.5M23 8v3.5" />
          <path d="M16 11.5V26" />
          <path d="M13.5 26h5" />
        </svg>
      );
    case "foot":
      // Fuß von der Seite: Ferse links, Rist/Knöchel oben, Zehen rechts.
      return (
        <svg {...common} className={className}>
          <path d="M8.5 21.5c-2 0-3.3-1.4-3.3-3.1 0-1.3.8-2.3 1.9-2.8-.3-1-.4-2-.1-3 .5-2 2-3.2 2-5.6 0-2 1.6-3.3 3.5-3.3 1.5 0 2.7 1 3 2.4.7-.4 1.5-.6 2.3-.6 3 0 5.4 2.6 5.4 6.3 0 2.3-.8 3.6-.8 5.9 0 2.9 2 4.3 2 6.8 0 2.6-2.4 4-5.6 4-3.6 0-7.2-1.2-9.3-2.9Z" />
        </svg>
      );
    case "sparkle":
      // Kleiner Zweig mit Blättern, angelehnt an die botanischen Linien der Website.
      return (
        <svg {...common} className={className}>
          <path d="M16 27V8" />
          <path d="M16 12.5c-1.7-2.2-4.4-2.6-6-1" />
          <path d="M16 17.5c1.9-2 4.7-2 6.3-.2" />
          <path d="M16 22.5c-1.7-2-4.2-2-5.5-.3" />
        </svg>
      );
    case "shield":
      // Zwei geöffnete Hände mit kleinem Herz dazwischen.
      return (
        <svg {...common} className={className}>
          <path d="M4.5 22c0-4.4 3.3-7.7 7.7-7.7" />
          <path d="M27.5 22c0-4.4-3.3-7.7-7.7-7.7" />
          <path d="M7.3 15.2v-2.7M9.7 14.4v-3M12.1 15.2v-2.5" />
          <path d="M24.7 15.2v-2.7M22.3 14.4v-3M19.9 15.2v-2.5" />
          <path d="M16 14.2c-1.2-2-4-1.7-4 .8 0 2 4 4.4 4 4.4s4-2.4 4-4.4c0-2.5-2.8-2.8-4-.8Z" />
        </svg>
      );
  }
}
