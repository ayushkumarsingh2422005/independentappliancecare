import Image from "next/image";
import { Reveal } from "./Reveal";

const washingIssues = [
  "Not spinning or draining",
  "Water leakage",
  "Error codes & PCB faults",
  "Motor / drum problems",
  "Door lock & seal issues",
];

const fridgeIssues = [
  "Not cooling / gas refill",
  "Compressor & fan faults",
  "Ice buildup & defrost",
  "Door gasket replacement",
  "Noise & electrical issues",
];

export function Services() {
  return (
    <section id="services" className="section-wash py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            What we fix
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Expert care for the appliances you use every day
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Doorstep diagnosis and repair for washing machines and refrigerators
            of every major brand — front load, top load, single door, double
            door, and more.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={80}>
            <article id="washing-machine">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/images/washing-machine.jpg"
                  alt="Front-load washing machine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-2xl font-semibold text-white">
                  Washing machine
                </span>
              </div>
              <h3 className="text-xl font-semibold text-ink">
                Repair & service
              </h3>
              <p className="mt-2 text-muted">
                Front load, top load, fully automatic & semi-automatic — we
                handle spin failures, drainage, leaks, and control board faults
                at your home.
              </p>
              <ul className="mt-5 space-y-2">
                {washingIssues.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article id="refrigerator">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/images/refrigerator.jpg"
                  alt="Modern refrigerator in a kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-2xl font-semibold text-white">
                  Refrigerator
                </span>
              </div>
              <h3 className="text-xl font-semibold text-ink">
                Repair & service
              </h3>
              <p className="mt-2 text-muted">
                Single door, double door, side-by-side & French door units —
                cooling restoration, gas charging, and compressor work with
                genuine parts.
              </p>
              <ul className="mt-5 space-y-2">
                {fridgeIssues.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
