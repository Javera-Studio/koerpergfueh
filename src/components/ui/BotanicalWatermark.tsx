import Image from "next/image";

/**
 * Wiederkehrendes dekoratives Wasserzeichen aus pflanze.png. Ausschließlich
 * diese Bilddatei verwenden – keine eigene Nachbildung per CSS/SVG.
 *
 * Sehr sparsam einsetzen (wenige, bewusste Stellen pro Seite), nie über
 * Fließtext, immer mit `className` positioniert (absolute inset-*) und mit
 * eigener Größe pro Breakpoint. `object-contain` verhindert Verzerrung
 * unabhängig vom genauen Seitenverhältnis der Box.
 */
export function BotanicalWatermark({
  className = "",
  opacity = 0.06,
  flip = false,
  rotate = 0,
}: {
  /** Tailwind-Klassen für Größe (w- bzw. h-Utilities) und Position (absolute inset-Utilities), inkl. Responsive-Varianten. */
  className?: string;
  /** Richtwert 0.04–0.10 – bei großen Elementen eher 0.04–0.06, bei kleinen bis 0.10. */
  opacity?: number;
  /** Horizontal spiegeln, damit sich das Motiv nicht identisch wiederholt. */
  flip?: boolean;
  /** Leichte Rotation in Grad. */
  rotate?: number;
}) {
  const transform = [flip ? "scaleX(-1)" : "", rotate ? `rotate(${rotate}deg)` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ opacity, transform: transform || undefined }}
    >
      <Image
        src="/images/pflanze.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 480px, 320px"
        className="object-contain"
      />
    </div>
  );
}
