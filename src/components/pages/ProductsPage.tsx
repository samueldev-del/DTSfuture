"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Car, FlaskConical, Layers3 } from "lucide-react";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { productLinks, getProductShowcaseContent } from "@/src/content/products";
import { siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath } from "@/src/i18n/routing";

export function ProductsPage() {
  const { locale } = useLocale();
  const content = getProductShowcaseContent(locale).hub;

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden py-18 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-[30rem] rounded-full bg-ouest/12 blur-[110px]" />
            <div className="absolute right-1/2 top-8 h-88 w-88 translate-x-[24rem] rounded-full bg-foret/12 blur-[110px]" />
            <div className="hero-surface-grid absolute inset-x-0 top-0 h-80 opacity-45" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
              <RevealOnScroll>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-littoral/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ouest shadow-sm backdrop-blur-sm">
                    <Layers3 className="h-4 w-4" />
                    {content.eyebrow}
                  </div>
                  <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold tracking-[-0.05em] text-littoral sm:text-5xl lg:text-6xl">
                    {content.titleLead} <span className="text-ouest">{content.titleAccent}</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-littoral/65">{content.description}</p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <Link
                      href={getLocalizedPath(locale, "bolo237")}
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-ouest px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/20 transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                    >
                      {content.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={siteContactLinks.email}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-littoral/12 bg-white/80 px-7 py-4 text-sm font-semibold text-littoral shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                    >
                      {content.secondaryCta}
                    </a>
                  </div>

                  <div className="mt-10 rounded-[2rem] border border-littoral/10 bg-white/85 p-6 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.35)] backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-littoral/42">{content.proofTitle}</p>
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {content.proofItems.map((item) => (
                        <div key={item} className="rounded-2xl bg-savane/80 px-4 py-4 text-sm leading-7 text-littoral/64 ring-1 ring-littoral/8">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <article className="group relative overflow-hidden rounded-[2.3rem] border border-ouest/15 bg-white p-6 shadow-[0_34px_100px_-54px_rgba(26,23,21,0.32)] sm:p-8">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,57,43,0.08),transparent_46%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-foret/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foret">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foret/75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-foret" />
                        </span>
                        {content.featured.status}
                      </div>
                      <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border border-ouest/12 bg-ouest/8 p-2 shadow-sm shadow-ouest/10">
                          <Image
                            src="/bolo237/icon-512.png"
                            alt="Bolo237 app icon"
                            width={64}
                            height={64}
                            className="h-12 w-12 rounded-[1.1rem]"
                            sizes="64px"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-littoral sm:text-4xl">
                              {content.featured.name}
                            </h2>
                            <span className="rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/48 ring-1 ring-littoral/10">
                              www.bolo237.com
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-ouest/75 sm:text-base">{content.featured.tagline}</p>
                        </div>
                      </div>

                      <p className="mt-5 text-base leading-8 text-littoral/65">{content.featured.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {content.featured.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/50 ring-1 ring-littoral/8">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                          href={getLocalizedPath(locale, "bolo237")}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-littoral px-5 py-3 text-sm font-semibold text-savane transition-all hover:-translate-y-0.5 hover:bg-littoral/90"
                        >
                          {content.featured.detailCta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href={productLinks.bolo237Live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-littoral/12 bg-white px-5 py-3 text-sm font-semibold text-littoral transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                        >
                          {content.featured.liveCta}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="relative">
                      <div aria-hidden="true" className="absolute inset-x-8 top-6 h-48 rounded-full bg-ouest/12 blur-3xl" />
                      <div className="relative overflow-hidden rounded-[2rem] border border-littoral/10 bg-white p-3 shadow-[0_26px_70px_-40px_rgba(26,23,21,0.25)]">
                        <div className="flex items-center gap-2 px-2 pb-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-ouest/75" />
                          <span className="h-2.5 w-2.5 rounded-full bg-foret/75" />
                          <span className="h-2.5 w-2.5 rounded-full bg-littoral/25" />
                          <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/45 ring-1 ring-littoral/10">
                            <Image
                              src="/bolo237/icon-512.png"
                              alt="Bolo237 app icon"
                              width={16}
                              height={16}
                              className="h-4 w-4 rounded-lg"
                              sizes="16px"
                            />
                            www.bolo237.com
                          </span>
                        </div>
                        <div className="overflow-hidden rounded-[1.6rem] ring-1 ring-littoral/10">
                          <Image
                            src="/bolo237/homepage-shot.png"
                            alt="Bolo237 homepage"
                            width={1440}
                            height={1440}
                            className="h-auto w-full object-cover"
                            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 92vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="pipeline" className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foret">{content.pipelineTitle}</p>
                <p className="mt-4 text-lg leading-8 text-littoral/62">{content.pipelineDescription}</p>
              </div>
            </RevealOnScroll>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {content.roadmapCards.map((card, index) => {
                const Icon = index === 0 ? Car : FlaskConical;

                return (
                  <RevealOnScroll key={card.name} delayMs={100 + index * 120}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-littoral/10 bg-white p-8 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_-54px_rgba(26,23,21,0.3)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foret/10 text-foret shadow-sm shadow-foret/10">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-littoral/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-littoral/50">
                          {card.status}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.04em] text-littoral sm:text-3xl">{card.name}</h3>
                      <p className="mt-4 flex-1 text-base leading-7 text-littoral/64">{card.summary}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/50 ring-1 ring-littoral/8">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}