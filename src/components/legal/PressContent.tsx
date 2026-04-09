"use client";

import { ArrowUpRight, Download, FileArchive, Globe, Mail, Newspaper, Phone, Sparkles } from "lucide-react";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { Logo } from "@/src/components/ui/Logo";
import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

const pressAssets = [
  {
    key: "kit",
    href: "/press/dtsfuture-media-kit.zip",
  },
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
  const quickFacts = [
    { label: pressCopy.facts.foundedLabel, value: siteConfig.pressFacts.foundingYear },
    { label: pressCopy.facts.marketLabel, value: focusMarket },
    { label: pressCopy.facts.productsLabel, value: siteConfig.pressFacts.flagshipProducts.join(" · ") },
    { label: pressCopy.facts.languagesLabel, value: pressCopy.facts.languagesValue },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden py-18 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-6 h-96 w-96 -translate-x-[28rem] rounded-full bg-ouest/12 blur-[110px]" />
            <div className="absolute right-1/2 top-12 h-88 w-88 translate-x-[24rem] rounded-full bg-foret/12 blur-[110px]" />
            <div className="hero-surface-grid absolute inset-x-0 top-0 h-80 opacity-45" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
              <RevealOnScroll>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-littoral/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ouest shadow-sm backdrop-blur-sm">
                    <Sparkles className="h-4 w-4" />
                    {pressCopy.eyebrow}
                  </div>
                  <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold tracking-[-0.05em] text-littoral sm:text-5xl lg:text-6xl">
                    {pressCopy.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-littoral/65">
                    {pressCopy.intro}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-littoral/55">
                    {pressCopy.disclaimer}
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href="/press/dtsfuture-media-kit.zip"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-ouest px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/20 transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                    >
                      <FileArchive className="h-4 w-4" />
                      {pressCopy.downloadKitCta}
                    </a>
                    <a
                      href={siteContactLinks.press}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-littoral/12 bg-white/80 px-7 py-4 text-sm font-semibold text-littoral shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                    >
                      <Mail className="h-4 w-4 text-ouest" />
                      {pressCopy.contactCta}
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {pressCopy.includedItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-littoral/58 ring-1 ring-littoral/8 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <div className="rounded-[2.25rem] border border-littoral/10 bg-white p-7 shadow-[0_36px_100px_-58px_rgba(26,23,21,0.42)]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-foret/10 p-3 text-foret">
                      <Newspaper className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-littoral/40">
                        {pressCopy.quickFactsTitle}
                      </p>
                      <p className="mt-1 text-sm text-littoral/55">{pressCopy.contactRoleValue}</p>
                    </div>
                  </div>

                  <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {quickFacts.map((fact) => (
                      <div key={fact.label} className="rounded-2xl bg-savane/85 px-4 py-4 ring-1 ring-littoral/8">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-littoral/42">
                          {fact.label}
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-littoral">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <a
                      href={siteContactLinks.press}
                      className="rounded-2xl bg-littoral px-4 py-4 text-sm text-savane transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-savane/55">
                        <Mail className="h-4 w-4" />
                        Email
                      </div>
                      <p className="mt-2 break-all font-medium text-white">{siteConfig.pressEmail}</p>
                    </a>
                    <a
                      href={siteContactLinks.phone}
                      className="rounded-2xl bg-white px-4 py-4 text-sm text-littoral ring-1 ring-littoral/8 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-littoral/42">
                        <Phone className="h-4 w-4 text-ouest" />
                        Phone
                      </div>
                      <p className="mt-2 font-medium">{siteConfig.phoneDisplay}</p>
                    </a>
                    <a
                      href={siteConfig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-white px-4 py-4 text-sm text-littoral ring-1 ring-littoral/8 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-littoral/42">
                        <Globe className="h-4 w-4 text-ouest" />
                        Web
                      </div>
                      <p className="mt-2 font-medium">{siteConfig.domain}</p>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.06fr_0.94fr]">
              <RevealOnScroll>
                <article className="rounded-[2.1rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)] sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">
                    {pressCopy.headings.boilerplate}
                  </p>
                  <p className="mt-5 text-base leading-8 text-littoral/72">{pressCopy.boilerplate}</p>
                </article>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <article className="rounded-[2.1rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)] sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foret">
                    {pressCopy.topicsHeading}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {pressCopy.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-savane px-4 py-2 text-sm font-medium text-littoral/65 ring-1 ring-littoral/8"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <RevealOnScroll>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">
                    {pressCopy.brandPreviewHeading}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-8 text-littoral/62">
                    {pressCopy.brandPreviewDescription}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="rounded-[2rem] border border-littoral/10 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.32)]">
                      <div className="rounded-[1.6rem] bg-savane px-5 py-8 ring-1 ring-littoral/8">
                        <Logo height={42} />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-littoral">{pressCopy.downloads.wordmark.title}</p>
                      <p className="mt-2 text-sm leading-7 text-littoral/58">{pressCopy.downloads.wordmark.description}</p>
                    </div>

                    <div className="rounded-[2rem] border border-littoral/10 bg-littoral p-6 text-savane shadow-[0_24px_70px_-48px_rgba(26,23,21,0.55)]">
                      <div className="flex items-center justify-center rounded-[1.6rem] bg-white px-5 py-6 ring-1 ring-black/4">
                        <Logo variant="mark" height={76} />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-white">{pressCopy.downloads.mark.title}</p>
                      <p className="mt-2 text-sm leading-7 text-savane/68">{pressCopy.downloads.mark.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foret">
                    {pressCopy.headings.assets}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-8 text-littoral/62">
                    {pressCopy.assetsDescription}
                  </p>
                  <div className="mt-8 space-y-4">
                    {pressAssets.map((asset) => {
                      const assetCopy = pressCopy.downloads[asset.key];
                      const Icon = asset.key === "kit" ? FileArchive : Download;

                      return (
                        <a
                          key={asset.key}
                          href={asset.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-[2rem] border border-littoral/10 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_-54px_rgba(192,57,43,0.36)]"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ouest/10 text-ouest ring-1 ring-ouest/10 transition-transform duration-300 group-hover:scale-105">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-4">
                                <h3 className="font-display text-xl font-semibold text-littoral">{assetCopy.title}</h3>
                                <ArrowUpRight className="h-5 w-5 text-littoral/25 transition-all duration-300 group-hover:text-ouest group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </div>
                              <p className="mt-3 text-sm leading-7 text-littoral/60">{assetCopy.description}</p>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-[2.4rem] bg-littoral px-8 py-10 text-savane shadow-[0_42px_120px_-62px_rgba(26,23,21,0.75)] sm:px-10 sm:py-12">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-ouest/18 blur-[90px]" />
                <div aria-hidden="true" className="absolute -bottom-16 left-16 h-36 w-36 rounded-full bg-foret/18 blur-[90px]" />
                <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-savane/54">
                      {pressCopy.headings.contact}
                    </p>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-savane/74">
                      {pressCopy.contactLead}{" "}
                      <a className="font-semibold text-white transition-opacity hover:opacity-80" href={siteContactLinks.press}>
                        {siteConfig.pressEmail}
                      </a>
                      .
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/6 px-4 py-4 ring-1 ring-white/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-savane/52">
                        {pressCopy.contactRoleLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white">{pressCopy.contactRoleValue}</p>
                    </div>
                    <div className="rounded-2xl bg-white/6 px-4 py-4 ring-1 ring-white/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-savane/52">
                        Website
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white">{siteConfig.domain}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}