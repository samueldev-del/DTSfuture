"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  FileArchive,
  Globe,
  Mail,
  MapPin,
  Newspaper,
  Phone,
} from "lucide-react";

import { Logo } from "@/src/components/ui/Logo";
import { formatAddress, siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath, type RouteKey } from "@/src/i18n/routing";

type InternalFooterLink = {
  label: string;
  route: RouteKey;
  hash?: string;
  external: false;
};

type ExternalFooterLink = {
  label: string;
  href: string;
  external: true;
};

const navigation = {
  produits: [
    { label: "Bolo237", href: "https://www.bolo237.com", external: true },
    { label: "Carlite", route: "home", hash: "produits", external: false },
    { label: "lab", route: "home", hash: "produits", external: false },
  ],
  legal: [
    { label: "impressum", route: "impressum", external: false },
    { label: "privacy", route: "privacy", external: false },
  ],
  pressAssets: [
    {
      label: "kit",
      href: "/press/dtsfuture-media-kit.zip",
      external: true,
    },
    {
      label: "wordmark",
      href: "/press/dtsfuture-wordmark-dark.svg",
      external: true,
    },
    {
      label: "mark",
      href: "/press/dtsfuture-mark-color.svg",
      external: true,
    },
  ],
} satisfies {
  produits: Array<ExternalFooterLink | InternalFooterLink>;
  legal: InternalFooterLink[];
  pressAssets: ExternalFooterLink[];
};

export function Footer() {
  const { copy, locale } = useLocale();
  const localizedAddress = formatAddress(copy.common.country);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(localizedAddress)}`;

  return (
    <footer className="border-t border-littoral/8 bg-[radial-gradient(circle_at_top_left,rgba(192,57,43,0.06),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8f6f0_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr_1fr]">
          <div className="rounded-[2rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)]">
            <Link
              href={getLocalizedPath(locale, "home", "accueil")}
              aria-label={copy.common.homeAriaLabel}
              className="inline-flex transition-opacity hover:opacity-85"
            >
              <Logo height={30} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-littoral/62">
              {copy.footer.brandBlurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {navigation.produits.map((item) => (
                <Link
                  key={item.label}
                  href={item.external ? item.href : getLocalizedPath(locale, item.route, item.hash)}
                  className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/58 ring-1 ring-littoral/8 transition-colors hover:text-littoral"
                >
                  {item.label === "lab" ? copy.footer.labLink : item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-littoral/40">
              {copy.footer.contactHeading}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-savane/70 px-4 py-3 text-sm text-littoral/65 ring-1 ring-littoral/8 transition-all hover:-translate-y-0.5 hover:text-littoral"
              >
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-ouest" />
                <span>{siteConfig.domain}</span>
              </a>
              <a
                href={siteContactLinks.email}
                className="flex items-start gap-3 rounded-2xl bg-savane/70 px-4 py-3 text-sm text-littoral/65 ring-1 ring-littoral/8 transition-all hover:-translate-y-0.5 hover:text-littoral"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ouest" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteContactLinks.phone}
                className="flex items-start gap-3 rounded-2xl bg-savane/70 px-4 py-3 text-sm text-littoral/65 ring-1 ring-littoral/8 transition-all hover:-translate-y-0.5 hover:text-littoral"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ouest" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-savane/70 px-4 py-3 text-sm leading-6 text-littoral/65 ring-1 ring-littoral/8 transition-all hover:-translate-y-0.5 hover:text-littoral"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-ouest" />
                <span>{localizedAddress}</span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-littoral p-7 text-savane shadow-[0_32px_100px_-56px_rgba(26,23,21,0.7)]">
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-ouest/18 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-16 right-10 h-32 w-32 rounded-full bg-foret/18 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-savane/78 ring-1 ring-white/10">
                <Newspaper className="h-3.5 w-3.5 text-ouest" />
                {copy.footer.press.heading}
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-savane/72">
                {copy.footer.press.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getLocalizedPath(locale, "press")}
                  className="inline-flex items-center gap-2 rounded-full bg-ouest px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                >
                  {copy.footer.press.pageLink}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={siteContactLinks.press}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-sm font-semibold text-savane transition-all hover:-translate-y-0.5 hover:bg-white/12"
                >
                  {copy.footer.press.contactLink}
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {navigation.pressAssets.map((item) => {
                  const Icon = item.label === "kit" ? FileArchive : Download;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-savane/78 transition-all hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-ouest" />
                        <span className="font-medium">
                          {copy.footer.press.assetLabels[item.label as keyof typeof copy.footer.press.assetLabels]}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-littoral/8 pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-littoral/40">
              {copy.footer.productsHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.produits.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-littoral/60 transition-colors hover:text-littoral"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={getLocalizedPath(locale, item.route, item.hash)}
                      className="text-sm text-littoral/60 transition-colors hover:text-littoral"
                    >
                      {item.label === "lab" ? copy.footer.labLink : item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-littoral/40">
              {copy.footer.legalHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={getLocalizedPath(locale, item.route)}
                    className="text-sm text-littoral/60 transition-colors hover:text-littoral"
                  >
                    {copy.footer.legalLinks[item.label as keyof typeof copy.footer.legalLinks]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-end rounded-2xl bg-white px-5 py-4 text-sm leading-7 text-littoral/55 ring-1 ring-littoral/8 lg:max-w-xs">
            {copy.common.footerBottomLine}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-littoral/8 pt-8 sm:flex-row">
          <p className="text-sm text-littoral/40">
            &copy; {new Date().getFullYear()} DTSfuture. {copy.common.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
