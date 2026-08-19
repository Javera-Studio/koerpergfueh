"use client";

import { useEffect } from "react";

/**
 * Aktiviert das .reveal-Von-unten-Einblenden zuverlässig per
 * IntersectionObserver, statt sich allein auf die native CSS
 * Scroll-Driven-Animations-API zu verlassen (animation-timeline: view()
 * wird nicht in allen Browsern unterstützt). Einmal in RootLayout gemountet,
 * beobachtet globale .reveal-Elemente und schaltet .reveal-visible, sobald
 * sie in den Viewport scrollen. Respektiert prefers-reduced-motion über CSS
 * (siehe globals.css) – bei Reduced Motion bleibt alles regulär sichtbar.
 */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal-ready");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.reveal-visible)")
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // Neu gerenderte/geöffnete Inhalte (z.B. nach Client-Navigation)
    // ebenfalls erfassen.
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
