export const site = {
  name: "Independent Appliance Care",
  shortName: "IAC",
  tagline: "Independent multi-brand repair across Bangalore",
  description:
    "Independent multi-brand washing machine and refrigerator repair & service across Bangalore. Same-day doorstep service, transparent pricing, and 90-day warranty.",
  url: "https://www.independentappliancecare.services",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  phoneE164: "+919876543210",
  whatsapp: "919876543210",
  email: "care@independentappliancecare.services",
  city: "Bangalore",
  region: "KA",
  country: "IN",
  postalCode: "560001",
  inspectionFee: "₹199",
  warranty: "90-day",
} as const;

export const brands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Bosch",
  "IFB",
  "Haier",
  "Godrej",
  "Panasonic",
  "Voltas",
  "Electrolux",
  "Hitachi",
  "Onida",
] as const;

export const locations = [
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "HSR Layout",
  "Jayanagar",
  "JP Nagar",
  "Electronic City",
  "Marathahalli",
  "Hebbal",
  "Yelahanka",
  "Banashankari",
  "Malleshwaram",
  "BTM Layout",
  "Sarjapur",
  "Rajajinagar",
  "Basavanagudi",
  "Bellandur",
  "Bommanahalli",
  "RT Nagar",
  "Kengeri",
] as const;

export const seoKeywords = [
  "washing machine repair Bangalore",
  "refrigerator repair Bangalore",
  "fridge repair Bangalore",
  "washing machine service near me",
  "refrigerator service Bangalore",
  "multi brand appliance repair Bangalore",
  "independent appliance care",
  "front load washing machine repair Bangalore",
  "top load washing machine repair Bangalore",
  "double door fridge repair Bangalore",
  "doorstep appliance repair Bangalore",
  "same day washing machine repair Bangalore",
  ...locations.map((area) => `washing machine repair ${area}`),
  ...locations.map((area) => `refrigerator repair ${area}`),
];

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hi, I need appliance repair service in Bangalore. Please help.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
