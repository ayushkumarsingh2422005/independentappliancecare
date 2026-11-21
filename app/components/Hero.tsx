import { site, whatsappUrl } from "../lib/site";
import { ContactCard } from "./ContactCard";

const benefits = [
  "Best price from others | ISO Verified Company",
  "Guaranteed Satisfaction or Free re-service",
  "Professional Experts | In-house technicians",
  "Independent multi-brand service across Bangalore",
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#dceef8]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.9), transparent 40%), radial-gradient(circle at 88% 70%, rgba(120,180,220,0.35), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        <div className="animate-rise">
          <h1 className="font-display text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[#0b1c2c] sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            Refrigerator &amp; Washing Machine Repair Service In{" "}
            <span className="text-[#0b1c2c]">{site.name}</span>
          </h1>

          <p className="mt-4 text-base font-medium text-[#2f6f9f] sm:text-lg">
            Call {site.name} for a flexible deal, Give home a new feel.
          </p>

          <div
            className="mt-5 flex text-xl text-[#f5a623]"
            aria-label="5 star rated"
          >
            ★★★★★
          </div>

          <ul className="mt-5 space-y-3">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] font-medium leading-snug text-[#1a2b3a] sm:text-base"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-[11px] font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1a3a66] px-5 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#143054]"
            >
              Call {site.phone}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3.5 text-base font-bold text-white shadow-md shadow-[#25D366]/30 transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="animate-rise-delay-1">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
