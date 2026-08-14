type Offset = "top-right" | "top-left" | "none";

/**
 * Hochwertiger Bild-Platzhalter mit dem wiederkehrenden Gestaltungselement:
 * ein leicht versetztes Mint-Rechteck hinter dem eigentlichen Bildbereich.
 * Später wird der Platzhalter 1:1 durch <Image> ersetzt.
 */
export function ImagePlaceholder({
  label,
  offset = "none",
  rectTone = "mint-pale",
  className = "",
  aspect = "aspect-[4/5]",
  parallax = false,
}: {
  label: string;
  offset?: Offset;
  rectTone?: "mint" | "mint-pale";
  className?: string;
  aspect?: string;
  /** Signature-Element: minimale Eigenbewegung des Fotos relativ zum
   * versetzten Hintergrundrechteck beim Scrollen. Nur an ausgewählten
   * Stellen einsetzen (Viktoria-Portrait, einzelne Studiofotos), nicht
   * bei jedem Bild. */
  parallax?: boolean;
}) {
  const rectColor = rectTone === "mint" ? "bg-mint" : "bg-mint-pale";

  if (offset === "none") {
    return (
      <div
        className={`${aspect} ${rectColor} flex items-center justify-center rounded-sm ${className}`}
      >
        <span className="px-4 text-center font-sans text-xs uppercase tracking-wide text-petrol/50">
          {label}
        </span>
      </div>
    );
  }

  const rectPos =
    offset === "top-right"
      ? "-right-4 -top-4 lg:-right-6 lg:-top-6"
      : "-left-4 -top-4 lg:-left-6 lg:-top-6";

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute ${rectPos} h-full w-full ${rectColor} rounded-sm`} />
      <div
        className={`relative ${aspect} flex items-center justify-center rounded-sm bg-cream ring-1 ring-mint-pale ${
          parallax ? "parallax-photo" : ""
        }`}
      >
        <span className="px-4 text-center font-sans text-xs uppercase tracking-wide text-petrol/50">
          {label}
        </span>
      </div>
    </div>
  );
}
