"use client";

import { useState } from "react";
import { site } from "../lib/site";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do you provide same-day service?",
    a: "Yes. Same-day doorstep service is available across Bangalore based on technician availability in your area — especially for bookings made earlier in the day.",
  },
  {
    q: "What are the service charges?",
    a: `A nominal inspection fee of ${site.inspectionFee} applies. Final repair cost depends on the issue and spare parts needed, and is shared before any work starts.`,
  },
  {
    q: "Do you provide warranty on repairs?",
    a: `Yes. We provide a ${site.warranty} service warranty on repairs carried out by our technicians, covering labour and parts we supply.`,
  },
  {
    q: "Are you an authorised brand service centre?",
    a: "No. We are an independent multi-brand service provider. Brand names on this site are only to indicate the appliances we repair — we are not affiliated with or authorised by those manufacturers.",
  },
  {
    q: "Which areas in Bangalore do you cover?",
    a: "We serve localities across Bangalore including Koramangala, Indiranagar, Whitefield, HSR, Jayanagar, Electronic City, Hebbal, Marathahalli, and many more. Share your pin code when booking.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
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
