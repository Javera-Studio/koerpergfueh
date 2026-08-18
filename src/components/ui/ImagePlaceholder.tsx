import Image from "next/image";

type Offset = "top-right" | "top-left" | "none";

type RealImage = {
  src: string;
  alt: string;
  /** Above-the-fold/LCP-Bild: preloaden (ersetzt das veraltete `priority`-Prop ab Next.js 16). */
  preload?: boolean;
  /** Responsive sizes-Attribut, an das tatsächliche Layout des Bildbereichs angepasst. */
  sizes?: string;
  /** Tailwind object-position-Klasse (z.B. "object-[25%_30%]"), falls das
   * Hauptmotiv beim Zuschnitt sonst verloren ginge. Default: object-center. */
  objectPosition?: string;
};

/**
 * Hochwertiger Bild-Platzhalter mit dem wiederkehrenden Gestaltungselement:
 * ein leicht versetztes Mint-Rechteck hinter dem eigentlichen Bildbereich.
 * Sobald ein echtes Foto vorliegt, per `image`-Prop einsetzen – ersetzt den
 * Platzhalter-Text 1:1 durch ein responsives, optimiertes next/image.
 */
export function ImagePlaceholder({
  label,
  offset = "none",
  rectTone = "mint-pale",
  className = "",
  aspect = "aspect-[4/5]",
  parallax = false,
  hoverZoom = false,
  reveal = true,
  image,
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
  /** Sehr dezenter Hover-Zoom (scale ~1.03) auf Desktop, z.B. bei
   * klickbaren Leistungsbildern. Erfordert `group` auf einem Vorfahren
   * (z.B. dem umschließenden Link). Respektiert prefers-reduced-motion. */
  hoverZoom?: boolean;
  /** Bild blendet beim Scrollen von unten sanft ein (Standard: an). */
  reveal?: boolean;
  /** Echtes Foto statt Platzhaltertext. */
  image?: RealImage;
}) {
  const rectColor = rectTone === "mint" ? "bg-mint" : "bg-mint-pale";
  const revealClass = reveal ? "reveal" : "";

  const content = image ? (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      preload={image.preload}
      sizes={image.sizes ?? "(min-width: 1024px) 480px, 90vw"}
      className={`object-cover ${image.objectPosition ?? ""} ${
        hoverZoom
          ? "motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
          : ""
      }`}
    />
  ) : (
    <span className="px-4 text-center font-sans text-xs uppercase tracking-wide text-petrol/50">
      {label}
    </span>
  );

  if (offset === "none") {
    return (
      <div
        className={`relative ${aspect} ${rectColor} ${revealClass} flex items-center justify-center overflow-hidden rounded-sm ${className}`}
      >
        {content}
      </div>
    );
  }

  const rectPos =
    offset === "top-right"
      ? "-right-4 -top-4 lg:-right-6 lg:-top-6"
      : "-left-4 -top-4 lg:-left-6 lg:-top-6";

  return (
    <div className={`relative ${revealClass} ${className}`}>
      <div className={`absolute ${rectPos} h-full w-full ${rectColor} rounded-sm`} />
      <div
        className={`relative ${aspect} flex items-center justify-center overflow-hidden rounded-sm bg-cream ring-1 ring-mint-pale ${
          parallax ? "parallax-photo" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
}
