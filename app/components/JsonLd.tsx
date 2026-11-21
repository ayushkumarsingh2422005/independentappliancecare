import { faqs } from "../lib/faqs";
import { brands, locations, site } from "../lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo.png`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
        alternateName: "Bangalore",
      },
      ...locations.map((name) => ({
        "@type": "Place",
        name: `${name}, Bangalore`,
      })),
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: site.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: [`https://wa.me/${site.whatsapp}`],
    knowsAbout: [
      "Washing machine repair",
      "Refrigerator repair",
      "Multi-brand appliance service",
      ...brands.map((b) => `${b} appliance repair`),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance repair services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Washing Machine Repair & Service",
            description:
              "Doorstep repair for front load, top load, fully automatic and semi-automatic washing machines across Bangalore.",
            areaServed: "Bangalore",
            provider: { "@id": `${site.url}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refrigerator Repair & Service",
            description:
              "Doorstep repair for single door, double door, side-by-side and French door refrigerators across Bangalore.",
            areaServed: "Bangalore",
            provider: { "@id": `${site.url}/#business` },
          },
        },
      ],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
