const iconCommon = {
  viewBox: "0 0 32 32",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Fine-Line-Icons im Stil der restlichen Website (kein Icon-Set, dünne
 * Outline-Pfade), wiederverwendet in der Social-Teaser-Section und im
 * Footer. */
export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconCommon} className={className}>
      <rect x="5" y="5" width="22" height="22" rx="7" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="23" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconCommon} className={className}>
      <path d="M20 6h-3a4.5 4.5 0 0 0-4.5 4.5V14H9v4h3.5v10H17V18h3.3l.7-4H17v-3.2c0-1 .4-1.8 1.8-1.8H21V6.1c-.4-.05-1.6-.1-3-.1Z" />
    </svg>
  );
}
