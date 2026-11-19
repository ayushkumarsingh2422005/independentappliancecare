import Image from "next/image";
import { site } from "../lib/site";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Independent multi-brand",
    body: "We are not tied to one manufacturer. One team for Samsung, LG, Whirlpool, Bosch, IFB, Haier, and more.",
  },
  {
    title: "Transparent pricing",
    body: `Inspection from ${site.inspectionFee}. You approve the full repair cost before any work begins — no surprise bills.`,
  },
  {
    title: "Same-day doorstep",
    body: "Trained technicians across Bangalore with tools and common spares ready for most on-site repairs.",
  },
  {
    title: `${site.warranty} warranty`,
    body: "Service warranty on labour and parts we replace. If the same issue returns, we make it right.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/6]">
            <Image
              src="/images/technician.jpg"
              alt="Certified technician at work"
              fill
              className="object-cover animate-float"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl font-semibold">
                Bangalore&apos;s trusted independent partner
              </p>
              <p className="mt-1 text-sm text-white/70">
                Genuine parts · In-house technicians · Doorstep service
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Fast, honest repair — without brand lock-in
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              When your fridge stops cooling or your washer fails mid-cycle, you
              need a reliable local team — not a runaround. We diagnose at your
              door, explain the fix, and get your appliance running again.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 70}>
                <div>
                  <h3 className="text-lg font-semibold text-teal-bright">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
