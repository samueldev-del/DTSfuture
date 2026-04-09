"use client";

import Link from "next/link";

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
} satisfies {
  produits: Array<ExternalFooterLink | InternalFooterLink>;
  legal: InternalFooterLink[];
};

export function Footer() {
  const { copy, locale } = useLocale();
  const localizedAddress = formatAddress(copy.common.country);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(localizedAddress)}`;

  return (
    <footer className="border-t border-littoral/8 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={getLocalizedPath(locale, "home", "accueil")} aria-label={copy.common.homeAriaLabel}>
              <Logo height={28} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-littoral/50">
              {copy.footer.brandBlurb}
            </p>
          </div>

          {/* Produits */}
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

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-littoral/40">
              {copy.footer.contactHeading}
            </h3>
            <div className="mt-4 space-y-3 text-sm text-littoral/60">
              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-littoral"
              >
                {siteConfig.domain}
              </a>
              <a
                href={siteContactLinks.email}
                className="block transition-colors hover:text-littoral"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteContactLinks.phone}
                className="block transition-colors hover:text-littoral"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block leading-6 transition-colors hover:text-littoral"
              >
                {localizedAddress}
              </a>
            </div>
          </div>

          {/* Légal */}
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
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-littoral/8 pt-8 sm:flex-row">
          <p className="text-sm text-littoral/40">
            &copy; {new Date().getFullYear()} DTSfuture. {copy.common.allRightsReserved}
          </p>
          <p className="text-sm text-littoral/40">
            {copy.common.footerBottomLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
