export const siteConfig = {
  name: "DTSfuture",
  editorName: "Samuel DJOMMOU THENGHO",
  founderRole: "Founder & Product Builder",
  projectLabel: "Privates Projekt",
  projectNature: "Persönliche, nicht-kommerzielle Website",
  title: "DTSfuture - Technology Studio",
  description:
    "DTSfuture is an independent technology studio based in Germany, building ambitious digital products for the German and international market with uncompromising engineering discipline.",
  url: "https://www.dtsfuture.com",
  domain: "dtsfuture.com",
  email: "contact@dtsfuture.com",
  pressEmail: "contact@dtsfuture.com",
  phone: "+4915124862693",
  phoneDisplay: "+49 1512 4862693",
  address: {
    streetAddress: "Berwiesen 8",
    postalCode: "73312",
    addressLocality: "Geislingen",
    addressCountry: "DE",
    addressCountryLabel: "Deutschland",
  },
  addressLine: "Berwiesen 8, 73312 Geislingen, Deutschland",
  infrastructure: {
    hostingProvider: "Vercel",
    hostingUrl: "https://vercel.com",
    hostingDescriptionDe: "Webanwendung, die über die Vercel-Cloud-Plattform bereitgestellt und ausgeliefert wird.",
    hostingDescriptionEn: "Web application deployed and served through the Vercel cloud platform.",
    domainProvider: "Hostinger",
    domainUrl: "https://www.hostinger.com",
    domainDescriptionDe:
      "Der Domainname dtsfuture.com wurde über Hostinger erworben und sein DNS zeigt auf die Vercel-Infrastruktur.",
    domainDescriptionEn:
      "The dtsfuture.com domain name was purchased through Hostinger and its DNS points to the Vercel infrastructure.",
  },
  pressFacts: {
    foundingYear: "2026",
    focusMarkets: "Germany, Europe and international digital products",
    flagshipProducts: ["Bolo237", "Carlite"],
  },
} as const;

export const siteContactLinks = {
  email: `mailto:${siteConfig.email}`,
  phone: `tel:${siteConfig.phone}`,
  press: `mailto:${siteConfig.pressEmail}?subject=${encodeURIComponent("Press inquiry - DTSfuture")}`,
} as const;

export function formatAddress(countryLabel: string) {
  return `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.addressLocality}, ${countryLabel}`;
}

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      description: `${siteConfig.description} ${siteConfig.projectNature}.`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      founder: {
        "@type": "Person",
        name: siteConfig.editorName,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        postalCode: siteConfig.address.postalCode,
        addressLocality: siteConfig.address.addressLocality,
        addressCountry: siteConfig.address.addressCountry,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          email: siteConfig.email,
          telephone: siteConfig.phone,
          availableLanguage: ["de", "en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "press inquiries",
          email: siteConfig.pressEmail,
          telephone: siteConfig.phone,
          availableLanguage: ["de", "en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: ["de", "en"],
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
} as const;