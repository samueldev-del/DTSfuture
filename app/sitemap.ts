import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";
import { supportedLocales } from "@/src/i18n/messages";
import {
  getAbsoluteLocalizedUrl,
  type RouteKey,
} from "@/src/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localizedRoutes: Array<{
    route: RouteKey;
    changeFrequency: "monthly" | "yearly";
    priority: number;
  }> = [
    { route: "home", changeFrequency: "monthly", priority: 1 },
    { route: "products", changeFrequency: "monthly", priority: 0.8 },
    { route: "bolo237", changeFrequency: "monthly", priority: 0.7 },
    { route: "press", changeFrequency: "monthly", priority: 0.6 },
    { route: "impressum", changeFrequency: "yearly", priority: 0.4 },
    { route: "privacy", changeFrequency: "yearly", priority: 0.4 },
  ];

  return localizedRoutes.flatMap(({ route, changeFrequency, priority }) =>
    supportedLocales.map((locale) => ({
      url: getAbsoluteLocalizedUrl(siteConfig.url, locale, route),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: getAbsoluteLocalizedUrl(siteConfig.url, "fr", route),
          en: getAbsoluteLocalizedUrl(siteConfig.url, "en", route),
        },
      },
    })),
  );
}