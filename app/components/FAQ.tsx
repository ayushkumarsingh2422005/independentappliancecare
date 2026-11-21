"use client";

import { useState } from "react";
import { faqs } from "../lib/faqs";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
          >
            Questions before you book
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-base font-semibold text-ink md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 text-teal transition ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-muted md:text-base">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
