import { locations } from "../lib/site";
import { Reveal } from "./Reveal";

export function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-gradient-to-br from-steel via-ink-soft to-ink py-20 text-white md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-teal-bright/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Coverage
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Service available all over Bangalore
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            From Koramangala to Whitefield, Electronic City to Hebbal — we
            schedule doorstep visits across the city. Tell us your locality when
            you book.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 flex flex-wrap gap-2.5 md:gap-3">
            {locations.map((area) => (
              <li
                key={area}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm"
              >
                {area}
              </li>
            ))}
            <li className="rounded-full border border-teal-bright/40 bg-teal-bright/15 px-4 py-2 text-sm font-semibold text-teal-bright">
              + your area too
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
