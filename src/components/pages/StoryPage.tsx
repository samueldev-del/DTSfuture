"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath } from "@/src/i18n/routing";

export function StoryPage() {
  const { copy, locale } = useLocale();
  const story = copy.storyPage;
  const cameroonLabel = locale === "de" ? "Feldperspektive" : "Field perspective";
  const germanyLabel = locale === "de" ? "Studio-Standort" : "Studio location";
  const cameroonSummary =
    locale === "de"
      ? "Eine seltene Sensibilität für echte Reibung, fragiles Vertrauen und reale Nutzungsbedingungen – getragen aus Kamerun."
      : "A rare sensitivity to real friction, fragile trust, and real-world usage conditions — carried from Cameroon.";
  const germanySummary =
    locale === "de"
      ? "Deutsche Ingenieurskultur. Kompromisslose Strenge. Produkte, die Bestand haben – aus Deutschland für die Welt."
      : "German engineering culture. Uncompromising rigor. Products built to last — from Germany to the world.";

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden py-18 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-4 h-96 w-96 -translate-x-120 rounded-full bg-ouest/12 blur-[110px]" />
            <div className="absolute right-1/2 top-12 h-88 w-88 translate-x-88 rounded-full bg-foret/12 blur-[110px]" />
            <div className="hero-surface-grid absolute inset-x-0 top-0 h-80 opacity-45" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
              <RevealOnScroll>
                <div>
                  <p className="inline-flex rounded-full border border-littoral/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ouest shadow-sm backdrop-blur-sm">
                    {story.eyebrow}
                  </p>
                  <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold tracking-[-0.05em] text-littoral sm:text-5xl lg:text-6xl">
                    {story.titleLead} <span className="text-ouest">{story.titleAccent}</span>
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-littoral/65">
                    {story.intro}
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <div className="rounded-[2.2rem] border border-littoral/10 bg-littoral px-7 py-8 text-savane shadow-[0_34px_100px_-56px_rgba(26,23,21,0.72)] sm:px-8 sm:py-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-savane/50">
                    DTSfuture
                  </p>
                  <p className="mt-5 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-3xl">
                    {story.quote}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/8 px-4 py-4 ring-1 ring-white/10">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-savane/50">
                          {cameroonLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/88">
                          {cameroonSummary}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/8 px-4 py-4 ring-1 ring-white/10">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-savane/50">
                          {germanyLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/88">
                          {germanySummary}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {story.chapters.map((chapter, index) => (
                <RevealOnScroll key={chapter.label} delayMs={index * 120}>
                  <article className="h-full rounded-4xl border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.32)] sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">
                      {chapter.label}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
                      {chapter.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-littoral/66">
                      {chapter.text}
                    </p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="rounded-[2.3rem] border border-littoral/10 bg-white p-8 shadow-[0_28px_80px_-50px_rgba(26,23,21,0.34)] sm:p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-foret">
                      {story.bridgeTitle}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-littoral/66">
                      {story.bridgeText}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-littoral/42">
                      {story.pillarsTitle}
                    </p>
                    <div className="mt-5 space-y-3">
                      {story.pillars.map((pillar) => (
                        <div key={pillar} className="rounded-2xl bg-savane/85 px-5 py-5 text-sm leading-7 text-littoral/68 ring-1 ring-littoral/8">
                          {pillar}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-[2.4rem] bg-littoral px-8 py-10 text-savane shadow-[0_42px_120px_-62px_rgba(26,23,21,0.75)] sm:px-10 sm:py-12">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-ouest/18 blur-[90px]" />
                <div aria-hidden="true" className="absolute -bottom-16 left-16 h-36 w-36 rounded-full bg-foret/18 blur-[90px]" />
                <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-savane/52">
                      DTSfuture
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                      {story.closingTitle}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-savane/74 sm:text-lg">
                      {story.closingText}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                    <a
                      href={siteContactLinks.email}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ouest px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                    >
                      {story.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      href={getLocalizedPath(locale, "products")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-4 text-sm font-semibold text-savane transition-all hover:-translate-y-0.5 hover:bg-white/12"
                    >
                      {story.secondaryCta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
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