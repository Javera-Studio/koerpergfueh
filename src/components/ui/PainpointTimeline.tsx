"use client";

import { useEffect, useRef, useState } from "react";

type TimelinePoint = {
  title: string;
  text: string;
};

/**
 * Ruhige, vertikale Timeline für die Painpoint-Bereiche von /fusspflege und
 * /haarentfernung: eine dünne Gold-Linie "zeichnet" sich beim Scrollen von
 * oben nach unten, jeder Punkt blendet danach gestaffelt ein (siehe
 * .timeline-* Klassen in globals.css). Löst genau einmal aus
 * (IntersectionObserver, kein Re-Trigger), respektiert
 * prefers-reduced-motion (sofort vollständig sichtbar) und bleibt ohne JS
 * regulär sichtbar (Hidden-Startzustand ist an die globale
 * .js-reveal-ready-Klasse gekoppelt, siehe RevealObserver.tsx).
 */
export function PainpointTimeline({
  points,
}: {
  points: readonly TimelinePoint[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      (typeof IntersectionObserver === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nur einmal beim Mount einrichten, mit dem initialen `visible`-Wert
  }, []);

  return (
    <div
      ref={rootRef}
      className={`timeline-root relative mt-14 max-w-2xl ${visible ? "timeline-visible" : ""}`}
    >
      <div
        aria-hidden
        className="timeline-line absolute left-[3px] top-1 bottom-1 w-[1.5px] origin-top bg-gold"
      />
      <ol className="flex flex-col gap-12 sm:gap-14">
        {points.map((point, index) => (
          <li key={point.title} className="relative pl-9">
            <span
              aria-hidden
              className={`timeline-marker timeline-marker-${index} absolute left-[3px] top-2 h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-gold bg-cream`}
            />
            <h3
              className={`timeline-text timeline-text-${index} font-display text-2xl text-petrol`}
            >
              {point.title}
            </h3>
            <p
              className={`timeline-text timeline-text-${index} mt-3 font-sans text-base leading-relaxed text-petrol/75`}
            >
              {point.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
