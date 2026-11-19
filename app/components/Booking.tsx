"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappUrl } from "../lib/site";
import { Reveal } from "./Reveal";

export function Booking() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const appliance = String(data.get("appliance") || "").trim();
    const area = String(data.get("area") || "").trim();
    const issue = String(data.get("issue") || "").trim();

    const message = [
      "Service booking request:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Appliance: ${appliance}`,
      `Area: ${area}`,
      `Issue: ${issue}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-b from-paper-deep to-paper py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Book a visit
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Get your appliance fixed today
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Share a few details and we&apos;ll confirm your slot on WhatsApp.
            Prefer to talk? Call us anytime.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 text-lg font-semibold text-ink transition hover:text-teal"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">
                ☎
              </span>
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-base font-medium text-muted transition hover:text-teal"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm text-white">
                @
              </span>
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-ink/5 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-teal/30 transition focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Phone
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-teal/30 transition focus:ring-2"
                  placeholder="10-digit mobile"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Appliance
                </span>
                <select
                  name="appliance"
                  required
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-teal/30 transition focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Washing machine</option>
                  <option>Refrigerator</option>
                </select>
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Area in Bangalore
                </span>
                <input
                  name="area"
                  required
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-teal/30 transition focus:ring-2"
                  placeholder="e.g. HSR Layout"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Issue
                </span>
                <textarea
                  name="issue"
                  required
                  rows={3}
                  className="w-full resize-y rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-teal/30 transition focus:ring-2"
                  placeholder="Not cooling, not spinning, leaking…"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-bold text-white transition hover:bg-steel"
            >
              Send on WhatsApp
            </button>

            {status === "sent" ? (
              <p className="mt-3 text-center text-sm text-teal">
                Opening WhatsApp with your request…
              </p>
            ) : (
              <p className="mt-3 text-center text-xs text-muted">
                Inspection from {site.inspectionFee} · {site.warranty} warranty
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
