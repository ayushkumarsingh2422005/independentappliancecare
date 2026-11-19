import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Book a visit",
    body: "Call, WhatsApp, or send the form with your appliance issue and area.",
  },
  {
    n: "02",
    title: "On-site diagnosis",
    body: "Our technician inspects the machine at your home and finds the fault.",
  },
  {
    n: "03",
    title: "You approve cost",
    body: "We share the full repair quote. Work starts only after your okay.",
  },
  {
    n: "04",
    title: "Repair & test",
    body: "Parts fitted, appliance tested in front of you, warranty shared.",
  },
];

export function Process() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Four simple steps to a working appliance
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <li>
                <span className="font-display text-4xl font-semibold text-teal/30">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
