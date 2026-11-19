export const site = {
  name: "Independent Appliance Care",
  shortName: "IAC",
  tagline: "Independent multi-brand repair across Bangalore",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "care@independentappliancecare.in",
  city: "Bangalore",
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

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hi, I need appliance repair service in Bangalore. Please help.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
