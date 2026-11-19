"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "../lib/site";

export function QuoteForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const area = String(data.get("area") || "").trim();
    const appliance = String(data.get("appliance") || "").trim();

    const message = [
      "Free quote request:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Location: ${area}`,
      `Appliance: ${appliance}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <form
      id="quote"
      onSubmit={onSubmit}
      className={`rounded-2xl bg-white p-6 shadow-[0_12px_40px_rgba(15,45,80,0.12)] sm:p-8 ${className}`}
    >
      <h2 className="text-center text-2xl font-bold tracking-tight text-[#0b1c2c] sm:text-[1.65rem]">
        Request a Free Quote
      </h2>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-[#4b5c6b]">
        <span className="flex text-[#f5a623]" aria-label="4.3 out of 5 stars">
          ★★★★☆
        </span>
        <span>(4.3/5) based on 77 customer reviews.</span>
      </div>

      <div className="mt-6 space-y-3.5">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-lg border border-[#d5dee6] bg-white px-4 py-3.5 text-sm text-[#0b1c2c] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#1e4a7a] focus:ring-2 focus:ring-[#1e4a7a]/20"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className="w-full rounded-lg border border-[#d5dee6] bg-white px-4 py-3.5 text-sm text-[#0b1c2c] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#1e4a7a] focus:ring-2 focus:ring-[#1e4a7a]/20"
        />
        <input
          name="area"
          required
          placeholder="Location / Area"
          className="w-full rounded-lg border border-[#d5dee6] bg-white px-4 py-3.5 text-sm text-[#0b1c2c] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#1e4a7a] focus:ring-2 focus:ring-[#1e4a7a]/20"
        />
        <select
          name="appliance"
          required
          defaultValue=""
          className="w-full rounded-lg border border-[#d5dee6] bg-white px-4 py-3.5 text-sm text-[#0b1c2c] outline-none transition focus:border-[#1e4a7a] focus:ring-2 focus:ring-[#1e4a7a]/20"
        >
          <option value="" disabled>
            - Select Appliance Type -
          </option>
          <option>Refrigerator</option>
          <option>Washing Machine</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-[#1a3a66] py-3.5 text-base font-semibold text-white transition hover:bg-[#143054]"
      >
        Get a Free Quote
      </button>

      {status === "sent" ? (
        <p className="mt-3 text-center text-sm text-[#1a8f4a]">
          Opening WhatsApp with your request…
        </p>
      ) : null}
    </form>
  );
}
