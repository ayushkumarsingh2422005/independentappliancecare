import { site, whatsappUrl } from "../lib/site";
import { Reveal } from "./Reveal";

export function Booking() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-b from-paper-deep to-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Contact us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Call or WhatsApp to book
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            No forms needed — reach us directly and we&apos;ll schedule a
            doorstep visit across Bangalore.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-bold text-white transition hover:bg-steel"
            >
              Call {site.phone}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white transition hover:bg-[#1ebe57]"
            >
              WhatsApp {site.phone}
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Inspection from {site.inspectionFee} · {site.warranty} warranty
          </p>
        </Reveal>
      </div>
    </section>
  );
}
