export const siteConfig = {
  name: "DTSfuture",
  editorName: "Samuel DJOMMOU THENGHO",
  founderRole: "Founder & Product Builder",
  projectLabel: "Projet privé",
  projectNature: "Site web personnel et non commercial",
  title: "DTSfuture - Studio Technologique",
  description:
    "DTSfuture conçoit des produits numériques ambitieux pour le Cameroun, avec une exécution rigoureuse et une obsession pour l'utilité réelle.",
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
    addressCountryLabel: "Allemagne",
  },
  addressLine: "Berwiesen 8, 73312 Geislingen, Allemagne",
  infrastructure: {
    hostingProvider: "Vercel",
    hostingUrl: "https://vercel.com",
    hostingDescriptionFr: "Application web déployée et servie via la plateforme cloud Vercel.",
    hostingDescriptionEn: "Web application deployed and served through the Vercel cloud platform.",
    domainProvider: "Hostinger",
    domainUrl: "https://www.hostinger.com",
    domainDescriptionFr:
      "Le nom de domaine dtsfuture.com a été acheté chez Hostinger et son DNS pointe vers l'infrastructure Vercel.",
    domainDescriptionEn:
      "The dtsfuture.com domain name was purchased through Hostinger and its DNS points to the Vercel infrastructure.",
  },
  pressFacts: {
    foundingYear: "2026",
    focusMarkets: "Cameroon and cross-border African digital products",
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
          availableLanguage: ["fr", "en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "press inquiries",
          email: siteConfig.pressEmail,
          telephone: siteConfig.phone,
          availableLanguage: ["fr", "en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: ["fr", "en"],
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
} as const;