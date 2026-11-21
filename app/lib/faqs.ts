import { site } from "./site";

export const faqs = [
  {
    q: "Do you provide same-day service?",
    a: "Yes. Same-day doorstep service is available across Bangalore based on technician availability in your area — especially for bookings made earlier in the day.",
  },
  {
    q: "What are the service charges?",
    a: `A nominal inspection fee of ${site.inspectionFee} applies. Final repair cost depends on the issue and spare parts needed, and is shared before any work starts.`,
  },
  {
    q: "Do you provide warranty on repairs?",
    a: `Yes. We provide a ${site.warranty} service warranty on repairs carried out by our technicians, covering labour and parts we supply.`,
  },
  {
    q: "Are you an authorised brand service centre?",
    a: "No. We are an independent multi-brand service provider. Brand names on this site are only to indicate the appliances we repair — we are not affiliated with or authorised by those manufacturers.",
  },
  {
    q: "Which areas in Bangalore do you cover?",
    a: "We serve localities across Bangalore including Koramangala, Indiranagar, Whitefield, HSR, Jayanagar, Electronic City, Hebbal, Marathahalli, and many more. Share your pin code when booking.",
  },
] as const;
