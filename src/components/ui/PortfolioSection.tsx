"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Car, FlaskConical } from "lucide-react";

import { Bolo237Preview } from "@/src/components/ui/Bolo237Preview";
import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath } from "@/src/i18n/routing";

const featuredProduct = {
  name: "Bolo237",
  route: "bolo237" as const,
};

export function PortfolioSection() {
  const { copy, locale } = useLocale();

  return (
    <section id="produits" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ouest">
              {copy.portfolio.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-littoral sm:text-4xl lg:text-5xl">
              {copy.portfolio.titleLead}{" "}
              <span className="text-ouest">{copy.portfolio.titleAccent}</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-littoral/60">
              {copy.portfolio.description}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <article className="group relative overflow-hidden rounded-4xl border border-ouest/15 bg-white p-8 shadow-lg shadow-ouest/5 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_38px_110px_-52px_rgba(192,57,43,0.62)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,57,43,0.08),transparent_46%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-foret/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foret">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foret/75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-foret" />
                  </span>
                  {copy.common.live}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] border border-ouest/12 bg-ouest/8 p-1.5 shadow-sm shadow-ouest/10">
                    <Image
                      src="/bolo237/icon-512.png"
                      alt="Bolo237 app icon"
                      width={64}
                      height={64}
                      className="h-full w-full rounded-[0.8rem]"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-littoral sm:text-4xl">
                        {featuredProduct.name}
                      </h3>
                      <span className="rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/48 ring-1 ring-littoral/10">
                        www.bolo237.com
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-ouest/75 sm:text-base">
                      {copy.portfolio.featuredTagline}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-base leading-8 text-littoral/65 sm:text-lg">
                  {copy.portfolio.featuredDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {copy.portfolio.featuredTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/50 ring-1 ring-littoral/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-savane px-5 py-5 ring-1 ring-littoral/10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ouest">
                    {copy.common.productProof}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-littoral/60 sm:text-base">
                    {copy.portfolio.proofDescription}
                  </p>
                </div>

                <Link
                  href={getLocalizedPath(locale, featuredProduct.route)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ouest transition-all duration-300 hover:gap-3 hover:text-ouest/80"
                >
                  {copy.portfolio.exploreCta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <Bolo237Preview />
            </div>
          </article>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <RevealOnScroll delayMs={180} className="h-full">
            <Link href={getLocalizedPath(locale, "schmidtszaunbaunord")} className="block h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-littoral/12 bg-white p-8 shadow-lg shadow-littoral/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-littoral/15 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,23,21,0.04),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-36 items-center overflow-hidden rounded-xl bg-savane/60 px-3 ring-1 ring-littoral/8">
                      <Image
                        src="/portfolio/schmidtszaunbau/logo-wide.png"
                        alt="Schmidts Zaunbau Nord logo"
                        width={1440}
                        height={304}
                        className="h-auto w-full object-contain"
                        sizes="144px"
                      />
                    </div>
                    <span className="shrink-0 rounded-full bg-foret/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foret">
                      {copy.common.live}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.04em] text-littoral sm:text-3xl">
                    Schmidts Zaunbau Nord
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ouest/70">{copy.portfolio.schmidtsTagline}</p>
                  <p className="mt-4 flex-1 text-base leading-7 text-littoral/65">
                    {copy.portfolio.schmidtsDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {copy.portfolio.schmidtsTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/50 ring-1 ring-littoral/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ouest transition-all duration-300 group-hover:gap-3">
                    {copy.portfolio.schmidtsExploreCta}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delayMs={260} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foret/15 bg-white p-8 shadow-lg shadow-foret/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-foret/15 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(35,75,44,0.06),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foret/10 text-foret shadow-sm shadow-foret/10">
                    <Car className="h-7 w-7" />
                  </div>

                  <span className="rounded-full bg-littoral/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-littoral/50">
                    {copy.common.comingSoon}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.04em] text-littoral sm:text-3xl">
                  Carlite
                </h3>
                <p className="mt-1 text-sm font-semibold text-foret/70">{copy.portfolio.carliteTagline}</p>
                <p className="mt-4 flex-1 text-base leading-7 text-littoral/65">
                  {copy.portfolio.carliteDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {copy.portfolio.carliteTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-savane px-3 py-1.5 text-xs font-semibold text-littoral/50 ring-1 ring-littoral/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delayMs={340}>
            <div className="h-full rounded-3xl border border-dashed border-littoral/15 bg-white/50 p-8 text-center backdrop-blur-sm sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-littoral/5">
                <FlaskConical className="h-7 w-7 text-littoral/40" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-littoral sm:text-2xl">
                {copy.portfolio.labTitle}
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-littoral/55">
                {copy.portfolio.labDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
