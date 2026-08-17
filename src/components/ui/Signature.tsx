/**
 * Signature-Schrift (Mrs Saint Delafield) – dezenter, handschriftlicher
 * Markenakzent angelehnt an den Körpergfüh-Logo-Schriftzug.
 *
 * Nur für kurze, gezielte Akzente einsetzen (einzelne Wörter oder ein
 * kurzer Satz), z.B. oberhalb einer großen Cormorant-Garamond-Headline.
 * Niemals für Fließtext, Navigation, Buttons, Preise, FAQs oder andere
 * wichtige Informationen. Sparsam einsetzen – wenige bewusste Akzente pro
 * Seite, nicht mehrere direkt hintereinander, ausreichend Weißraum drumherum.
 */
export function Signature({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-signature text-3xl leading-none text-mint-deep sm:text-4xl ${className}`}
    >
      {children}
    </span>
  );
}
