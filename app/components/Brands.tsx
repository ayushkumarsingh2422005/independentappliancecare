import { brands } from "../lib/site";
import { Reveal } from "./Reveal";

export function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section id="brands" className="overflow-hidden bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Multi-brand
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            We service all major brands
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Independent technicians trained across models and capacities. Brand
            names are for reference only — we are not an authorised service
            centre of any manufacturer.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent md:w-28" />
        <div className="marquee-track flex w-max gap-4 px-4">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold tracking-wide text-ink-soft"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
