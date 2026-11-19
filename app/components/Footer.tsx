import { brands, site, whatsappUrl } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Independent multi-brand washing machine & refrigerator repair and
            service across Bangalore.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-bright">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp booking
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-bright">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-white">
                Locations
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-white">
                Book a visit
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            Independent service provider. Brands ({brands.slice(0, 6).join(", ")}
            , etc.) are mentioned for reference only and are not affiliated with
            us.
          </p>
        </div>
      </div>
    </footer>
  );
}
