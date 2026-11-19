import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "./lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Washing Machine & Refrigerator Repair in Bangalore`,
  description:
    "Independent multi-brand washing machine and refrigerator repair & service across Bangalore. Same-day doorstep service, transparent pricing, 90-day warranty.",
  keywords: [
    "washing machine repair Bangalore",
    "refrigerator repair Bangalore",
    "multi brand appliance service",
    "fridge repair near me",
    "independent appliance care",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">{children}</body>
    </html>
  );
}
