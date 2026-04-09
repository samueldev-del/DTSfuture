"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Database,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { Bolo237Preview } from "@/src/components/ui/Bolo237Preview";
import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { productLinks, getProductShowcaseContent } from "@/src/content/products";
import { siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath } from "@/src/i18n/routing";

const sectionIcons = [ShieldCheck, Smartphone, Workflow] as const;
const processIcons = [BadgeCheck, Workflow, ServerCog, Rocket] as const;
const stackIcons = [Globe, ServerCog, LayoutDashboard, Rocket, MessageCircle, Database] as const;

export function Bolo237ProjectPage() {
  const { locale } = useLocale();
  const content = getProductShowcaseContent(locale).bolo237;

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

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
              <RevealOnScroll>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-littoral/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ouest shadow-sm backdrop-blur-sm">
                    <BadgeCheck className="h-4 w-4" />
                    {content.eyebrow}
                  </div>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.45rem] border border-ouest/12 bg-white p-2 shadow-sm shadow-ouest/10 ring-1 ring-littoral/8">
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
                        <h1 className="font-display text-3xl font-bold tracking-[-0.05em] text-littoral sm:text-5xl lg:text-6xl">
                          {content.title}
                        </h1>
                        <span className="rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/48 ring-1 ring-littoral/10">
                          www.bolo237.com
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ouest/75 sm:text-base">
                        {content.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-littoral/65">{content.intro}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-littoral/55">{content.note}</p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={productLinks.bolo237Live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-ouest px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/20 transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                    >
                      {content.ctas.live}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      href={getLocalizedPath(locale, "products")}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-littoral/12 bg-white/80 px-7 py-4 text-sm font-semibold text-littoral shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                    >
                      {content.ctas.back}
                    </Link>
                    <a
                      href={siteContactLinks.email}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-littoral/12 bg-white/80 px-7 py-4 text-sm font-semibold text-littoral shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                    >
                      {content.ctas.contact}
                    </a>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {content.quickFacts.map((fact) => (
                      <div key={fact.label} className="rounded-2xl bg-white/85 px-4 py-4 text-sm text-littoral ring-1 ring-littoral/8 shadow-sm backdrop-blur-sm">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-littoral/42">{fact.label}</p>
                        <p className="mt-2 leading-6 text-littoral/70">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <div className="group rounded-[2.3rem] border border-littoral/10 bg-white/70 p-4 shadow-[0_30px_90px_-54px_rgba(26,23,21,0.32)] backdrop-blur-sm">
                  <Bolo237Preview />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <RevealOnScroll>
                <article className="rounded-[2rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.3)] sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">{content.challenge.title}</p>
                  <p className="mt-4 text-base leading-8 text-littoral/64">{content.challenge.description}</p>
                  <div className="mt-6 space-y-4">
                    {content.challenge.items.map((item, index) => {
                      const Icon = sectionIcons[index];

                      return (
                        <div key={item.title} className="rounded-2xl bg-savane/80 px-5 py-5 ring-1 ring-littoral/8">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ouest/10 text-ouest">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h2 className="font-display text-xl font-semibold text-littoral">{item.title}</h2>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-littoral/60">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120}>
                <article className="rounded-[2rem] border border-littoral/10 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.3)] sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foret">{content.solution.title}</p>
                  <p className="mt-4 text-base leading-8 text-littoral/64">{content.solution.description}</p>
                  <div className="mt-6 space-y-4">
                    {content.solution.items.map((item, index) => {
                      const Icon = processIcons[index];

                      return (
                        <div key={item.title} className="rounded-2xl bg-white px-5 py-5 ring-1 ring-littoral/8">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-foret/10 text-foret">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h2 className="font-display text-xl font-semibold text-littoral">{item.title}</h2>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-littoral/60">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="rounded-[2.2rem] border border-littoral/10 bg-littoral px-8 py-10 text-savane shadow-[0_34px_100px_-56px_rgba(26,23,21,0.65)] sm:px-10 sm:py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-savane/54">{content.process.title}</p>
                    <p className="mt-4 text-base leading-8 text-savane/72">{content.process.description}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {content.process.items.map((item, index) => {
                      const Icon = processIcons[index];

                      return (
                        <div key={item.title} className="rounded-2xl bg-white/6 px-5 py-5 ring-1 ring-white/10">
                          <div className="flex items-center gap-3 text-white">
                            <Icon className="h-5 w-5 text-ouest" />
                            <h2 className="font-display text-lg font-semibold">{item.title}</h2>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-savane/68">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">{content.stack.title}</p>
                <p className="mt-4 text-lg leading-8 text-littoral/64">{content.stack.description}</p>
                <p className="mt-4 text-sm leading-7 text-littoral/54">{content.stack.note}</p>
              </div>
            </RevealOnScroll>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.stack.items.map((item, index) => {
                const Icon = stackIcons[index];

                return (
                  <RevealOnScroll key={item.title} delayMs={80 + index * 80}>
                    <article className="rounded-[1.9rem] border border-littoral/10 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.25)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ouest/10 text-ouest">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-5 font-display text-xl font-semibold text-littoral">{item.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-littoral/60">{item.description}</p>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealOnScroll>
              <div className="rounded-[2.2rem] border border-littoral/10 bg-white p-8 shadow-[0_24px_70px_-48px_rgba(26,23,21,0.28)] sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-foret">{content.proof.title}</p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-littoral/64">{content.proof.description}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {content.proof.items.map((item) => (
                    <div key={item} className="rounded-2xl bg-savane/80 px-5 py-5 text-sm leading-7 text-littoral/62 ring-1 ring-littoral/8">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={siteContactLinks.email}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-ouest px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/20 transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
                  >
                    {content.ctas.contact}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={getLocalizedPath(locale, "products")}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-littoral/12 bg-white px-7 py-4 text-sm font-semibold text-littoral transition-all hover:-translate-y-0.5 hover:border-littoral/20"
                  >
                    {content.ctas.back}
                  </Link>
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