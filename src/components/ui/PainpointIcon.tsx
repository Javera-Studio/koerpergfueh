type IconName = "razor" | "foot" | "sparkle" | "shield";

/**
 * Sehr reduzierte Fine-Line-Icons (Champagnergold) für die Painpoints-
 * Section. Bewusst kein Icon-Set/keine Bibliothek – vier handgezeichnete,
 * einfache Outline-Pfade, die zur ruhigen Editorial-Optik passen.
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
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "razor":
      return (
        <svg {...common} className={className}>
          <path d="M16 4v6" />
          <rect x="9" y="10" width="14" height="7" rx="2" />
          <path d="M13 12.5v2M16 12.5v2M19 12.5v2" />
          <path d="M16 17v11" />
        </svg>
      );
    case "foot":
      return (
        <svg {...common} className={className}>
          <path d="M13 5.5c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .9.6 1.4 1.4 1.9.9-.9 1.9-1.4 2.9-1.4 1.9 0 3.1 1.7 3.1 3.8 0 1.8-.7 2.7-.7 4.5 0 2.7 1.7 4 1.7 6.8 0 2.7-2.3 5-5.6 5-4.2 0-7.4-2.8-7.4-7.4 0-2.7.9-4 .9-6.3 0-1.8-.9-2.5-.9-6.4 0-.2 0-.4.1-.5Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common} className={className}>
          <path d="M16 5c0 5.5 1.5 7 7 7-5.5 0-7 1.5-7 7 0-5.5-1.5-7-7-7 5.5 0 7-1.5 7-7Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} className={className}>
          <path d="M16 4.5 24.5 8v6.5c0 6-3.6 9.8-8.5 11-4.9-1.2-8.5-5-8.5-11V8L16 4.5Z" />
          <path d="M12.3 16.2l2.7 2.7 4.7-5.4" />
        </svg>
      );
  }
}
