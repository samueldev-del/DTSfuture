"use client";

import { Download, Mail, Newspaper, Phone } from "lucide-react";

import { LegalPageLayout } from "@/src/components/ui/LegalPageLayout";
import { siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

const pressAssets = [
  {
    key: "wordmark",
    href: "/press/dtsfuture-wordmark-dark.svg",
  },
  {
    key: "mark",
    href: "/press/dtsfuture-mark-color.svg",
  },
] as const;

export function PressContent() {
  const { copy, locale } = useLocale();
  const pressCopy = copy.legal.press;
  const focusMarket =
    locale === "fr"
      ? "Cameroun et produits numériques transfrontaliers"
      : siteConfig.pressFacts.focusMarkets;

  return (
    <LegalPageLayout
      eyebrow={pressCopy.eyebrow}
      title={pressCopy.title}
      intro={pressCopy.intro}
      disclaimer={pressCopy.disclaimer}
    >
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {pressCopy.headings.boilerplate}
        </h2>
        <div className="mt-5 rounded-3xl border border-littoral/10 bg-savane p-6 ring-1 ring-littoral/6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ouest/10 text-ouest">
              <Newspaper className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-littoral/45">
              DTSfuture boilerplate
            </p>
          </div>
          <p className="mt-4 text-base leading-8 text-littoral/72">{pressCopy.boilerplate}</p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {pressCopy.headings.facts}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 ring-1 ring-littoral/10">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-littoral/45">
              {pressCopy.facts.foundedLabel}
            </dt>
            <dd className="mt-2 text-base font-medium text-littoral">
              {siteConfig.pressFacts.foundingYear}
            </dd>
          </div>
          <div className="rounded-3xl bg-white p-5 ring-1 ring-littoral/10">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-littoral/45">
              {pressCopy.facts.marketLabel}
            </dt>
            <dd className="mt-2 text-base font-medium text-littoral">{focusMarket}</dd>
          </div>
          <div className="rounded-3xl bg-white p-5 ring-1 ring-littoral/10">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-littoral/45">
              {pressCopy.facts.productsLabel}
            </dt>
            <dd className="mt-2 text-base font-medium text-littoral">
              {siteConfig.pressFacts.flagshipProducts.join(" · ")}
            </dd>
          </div>
          <div className="rounded-3xl bg-white p-5 ring-1 ring-littoral/10">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-littoral/45">
              {pressCopy.facts.languagesLabel}
            </dt>
            <dd className="mt-2 text-base font-medium text-littoral">
              {pressCopy.facts.languagesValue}
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {pressCopy.headings.assets}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">{pressCopy.assetsDescription}</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pressAssets.map((asset) => {
            const assetCopy = pressCopy.downloads[asset.key];
            return (
              <a
                key={asset.key}
                href={asset.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-savane p-5 ring-1 ring-littoral/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-littoral/18"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-littoral">{assetCopy.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-littoral/60">{assetCopy.description}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-foret shadow-sm ring-1 ring-littoral/10 transition-transform duration-300 group-hover:scale-105">
                    <Download className="h-4 w-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {pressCopy.headings.contact}
        </h2>
        <div className="mt-6 rounded-3xl bg-littoral px-6 py-6 text-savane shadow-xl shadow-littoral/10">
          <p className="text-base leading-8 text-savane/78">
            {pressCopy.contactLead}{" "}
            <a className="font-semibold text-white transition-opacity hover:opacity-80" href={siteContactLinks.press}>
              {siteConfig.pressEmail}
            </a>
            .
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-savane/55">
                {pressCopy.contactRoleLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-white">{pressCopy.contactRoleValue}</p>
            </div>
            <a href={siteContactLinks.press} className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-savane/55">
                <Mail className="h-4 w-4" />
                Email
              </div>
              <p className="mt-2 text-sm text-white">{siteConfig.pressEmail}</p>
            </a>
            <a href={siteContactLinks.phone} className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-savane/55">
                <Phone className="h-4 w-4" />
                Phone
              </div>
              <p className="mt-2 text-sm text-white">{siteConfig.phoneDisplay}</p>
            </a>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}