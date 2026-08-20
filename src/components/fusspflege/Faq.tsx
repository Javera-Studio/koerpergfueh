"use client";

import { useState } from "react";
import { fusspflegeFaqs, cancellationPolicy } from "@/lib/data/fusspflege";
import { BotanicalWatermark } from "@/components/ui/BotanicalWatermark";
import { Signature } from "@/components/ui/Signature";

// Sehr feines Kalender-mit-Uhr-Icon (kein gefülltes Icon), nur für die
// Termin-Hinweis-Card verwendet.
function CalendarClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="4" y="9" width="17" height="17" rx="2" />
      <path d="M8.5 5.5v6.5M16.5 5.5v6.5" />
      <path d="M4 14.5h17" />
      <circle cx="23" cy="23" r="6.2" />
      <path d="M23 20v3.2l2.2 1.4" />
    </svg>
  );
}

const scheduleRules = [
  {
    label: (hours: number) => `BIS ${hours} STUNDEN VORHER`,
    text: "rechtzeitig Bescheid geben",
  },
  {
    label: (hours: number) => `WENIGER ALS ${hours} STUNDEN`,
    percent: (p: typeof cancellationPolicy) => p.lateCancellationFeePercent,
  },
  {
    label: () => "NICHT ERSCHIENEN",
    percent: (p: typeof cancellationPolicy) => p.noShowFeePercent,
  },
] as const;

export function FusspflegeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      {/* Botanisches Wasserzeichen (pflanze.png) – nur am äußersten Rand,
          sehr dezent, liegt nie hinter dem Content (DOM-Reihenfolge). */}
      <BotanicalWatermark
        className="-bottom-16 -right-14 hidden h-[320px] w-[210px] lg:block"
        opacity={0.08}
        rotate={6}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Signature className="reveal block" color="mint-deep">
          Vor deinem Termin
        </Signature>
        <h2 className="reveal reveal-d1 mt-3 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Gut zu wissen.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-14">
          {/* FAQ-Accordion – kein Kartenhintergrund, liegt direkt auf der
              Section-Fläche. */}
          <div className="lg:col-span-3">
            <div className="flex flex-col border-t border-mint-pale/60">
              {fusspflegeFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`reveal reveal-d${(index % 4) + 1} border-b border-mint-pale/60`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="font-display text-xl text-petrol sm:text-2xl">
                        {faq.question}
                      </span>
                      <span
                        className="shrink-0 font-sans text-2xl text-gold transition-transform duration-300 ease-out"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 font-sans text-base leading-relaxed text-petrol/80">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Termin-Hinweis – kompakte, ruhige Info-Card statt großer
              separater Box. */}
          <div className="reveal reveal-d2 lg:col-span-2">
            <div className="relative bg-greige/45 py-9 pl-7 pr-7">
              <span
                aria-hidden
                className="terminline-gold reveal absolute left-0 top-0 h-full w-px origin-top bg-gold"
              />
              <CalendarClockIcon className="h-6 w-6 text-gold" />
              <p className="mt-4 font-sans text-xs font-medium tracking-[0.2em] text-gold">
                TERMIN-HINWEIS
              </p>
              <h3 className="mt-2 font-display text-2xl text-petrol">
                Damit genug Zeit für alle bleibt.
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-petrol/75">
                Falls du einen vereinbarten Termin nicht wahrnehmen kannst,
                gib mir bitte möglichst früh Bescheid.
              </p>

              <div className="mt-6 flex flex-col divide-y divide-gold/20 border-t border-gold/20">
                {scheduleRules.map((rule) => (
                  <div
                    key={rule.label(cancellationPolicy.lateCancellationWindowHours)}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-petrol/55">
                      {rule.label(cancellationPolicy.lateCancellationWindowHours)}
                    </span>
                    {"percent" in rule ? (
                      <span className="font-display text-2xl text-petrol">
                        {rule.percent(cancellationPolicy)} %
                      </span>
                    ) : (
                      <span className="font-sans text-sm text-petrol/80">
                        {rule.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
