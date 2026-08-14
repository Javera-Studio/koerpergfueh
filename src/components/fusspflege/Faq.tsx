"use client";

import { useState } from "react";
import { fusspflegeFaqs } from "@/lib/data/fusspflege";

export function FusspflegeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="font-sans text-xs font-medium tracking-[0.2em] text-mint-deep">
          GUT ZU WISSEN
        </p>
        <h2 className="mt-4 font-display text-4xl leading-snug text-petrol sm:text-5xl">
          Vielleicht fragst du dich gerade …
        </h2>

        <div className="mt-12 flex flex-col">
          {fusspflegeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-petrol/15">
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
                    className="shrink-0 font-sans text-2xl text-mint-deep"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
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
    </section>
  );
}
