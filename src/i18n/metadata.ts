import type { Metadata } from "next";

import { siteConfig } from "@/src/config/site";
import { messages, type Locale } from "@/src/i18n/messages";
import {
  getAbsoluteLocalizedUrl,
  type RouteKey,
} from "@/src/i18n/routing";

const openGraphLocales = {
  de: "de_DE",
  en: "en_US",
} as const;

function getLocalizedMeta(locale: Locale, route: RouteKey) {
  const meta = messages[locale].meta;

  switch (route) {
    case "impressum":
      return {
        title: meta.impressumTitle,
        description: meta.impressumDescription,
      };
    case "press":
      return {
        title: meta.pressTitle,
        description: meta.pressDescription,
      };
    case "products":
      return {
        title: meta.productsTitle,
        description: meta.productsDescription,
      };
    case "bolo237":
      return {
        title: meta.bolo237Title,
        description: meta.bolo237Description,
      };
    case "storyPage":
      return {
        title: meta.storyTitle,
        description: meta.storyDescription,
      };
    case "privacy":
      return {
        title: meta.privacyTitle,
        description: meta.privacyDescription,
      };
    default:
      return {
        title: meta.homeTitle,
        description: meta.homeDescription,
      };
  }
}

export function buildLocaleMetadata(locale: Locale, route: RouteKey): Metadata {
  const localizedMeta = getLocalizedMeta(locale, route);
  const canonicalUrl = getAbsoluteLocalizedUrl(siteConfig.url, locale, route);

  return {
    title: localizedMeta.title,
    description: localizedMeta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: getAbsoluteLocalizedUrl(siteConfig.url, "de", route),
        en: getAbsoluteLocalizedUrl(siteConfig.url, "en", route),
      },
    },
    openGraph: {
      title: localizedMeta.title,
      description: localizedMeta.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      alternateLocale:
        locale === "de"
          ? [openGraphLocales.en]
          : [openGraphLocales.de],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: localizedMeta.title,
      description: localizedMeta.description,
    },
  };
}
