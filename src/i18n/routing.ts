import { isLocale, type Locale, supportedLocales } from "@/src/i18n/messages";

export const defaultLocale: Locale = "fr";
export const localeCookieName = "dtsfuture-locale";

export type RouteKey = "home" | "products" | "bolo237" | "schmidtsZaunbau" | "storyPage" | "impressum" | "privacy" | "press";

const routeSegments: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "", en: "" },
  products: { fr: "projets", en: "products" },
  bolo237: { fr: "projets/bolo237", en: "products/bolo237" },
  schmidtsZaunbau: { fr: "projets/schmidts-zaunbau", en: "products/schmidts-zaunbau" },
  storyPage: { fr: "notre-histoire", en: "our-story" },
  impressum: { fr: "impressum", en: "impressum" },
  privacy: {
    fr: "politique-de-confidentialite",
    en: "privacy-policy",
  },
  press: {
    fr: "presse",
    en: "press",
  },
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getLocalizedPath(locale: Locale, route: RouteKey, hash?: string) {
  const routeSegment = routeSegments[route][locale];
  const basePath = routeSegment
    ? `/${locale}/${routeSegment}`
    : `/${locale}`;

  if (!hash) {
    return basePath;
  }

  return `${basePath}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function getAbsoluteLocalizedUrl(origin: string, locale: Locale, route: RouteKey) {
  return `${origin}${getLocalizedPath(locale, route)}`;
}

export function getRouteFromPathname(pathname: string): RouteKey {
  const normalizedPath = normalizePathname(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "home";
  }

  const pathSegments = isLocale(segments[0]) ? segments.slice(1) : segments;
  const routeSegment = pathSegments.join("/");

  if (!routeSegment) {
    return "home";
  }

  const matchedRoute = (Object.entries(routeSegments) as Array<
    [RouteKey, Record<Locale, string>]
  >).find(
    ([route, localizedSegments]) =>
      route !== "home" && Object.values(localizedSegments).includes(routeSegment),
  );

  if (matchedRoute) {
    return matchedRoute[0];
  }

  return "home";
}

export function getLocalizedSegment(locale: Locale, route: RouteKey) {
  return routeSegments[route][locale];
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  return getLocalizedPath(targetLocale, getRouteFromPathname(pathname));
}

export function resolveLocalePreference({
  cookieLocale,
  acceptLanguage,
}: {
  cookieLocale?: string;
  acceptLanguage?: string | null;
}): Locale {
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const preferences = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  if (preferences.some((entry) => entry?.startsWith("fr"))) {
    return "fr";
  }

  if (preferences.some((entry) => entry?.startsWith("en"))) {
    return "en";
  }

  return defaultLocale;
}

export function getLocaleParams() {
  return supportedLocales.map((locale) => ({ locale }));
}