"use client";

import { ArrowRight, MapPin, Cpu, Users } from "lucide-react";

import { siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

const statIcons = [Cpu, MapPin, Users] as const;

export function HeroSection() {
  const { copy } = useLocale();

  return (
    <section id="accueil" className="relative isolate overflow-hidden">
      {/* Background effects */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="float-drift absolute left-1/2 top-8 h-[36rem] w-[36rem] -translate-x-[28rem] rounded-full bg-ouest/14 blur-[140px]" />
        <div className="float-drift-reverse absolute right-1/2 top-4 h-[32rem] w-[32rem] translate-x-[24rem] rounded-full bg-foret/13 blur-[140px]" />
        <div className="float-drift absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-savane blur-3xl" />
        <div className="absolute left-1/2 top-60 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-white/50 blur-[80px]" />
        <div className="hero-surface-grid absolute inset-x-0 top-0 h-[44rem]" />
        <div className="hero-surface-noise absolute inset-x-0 top-0 h-[44rem]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center sm:pt-28">
        {/* Badge */}
        <div className="entrance-fade inline-flex items-center gap-3 rounded-full border border-foret/20 bg-white/90 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-foret shadow-sm shadow-foret/8 backdrop-blur-sm ring-1 ring-foret/8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foret/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foret" />
          </span>
          <span>{copy.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="entrance-fade entrance-fade-delay-1 text-balance mt-10 max-w-4xl font-display text-5xl font-bold leading-[1.06] tracking-[-0.055em] text-littoral sm:text-6xl lg:text-[4.75rem]">
          {copy.hero.titleLead}{" "}
          <span className="text-ouest">{copy.hero.titleAccent}</span>
        </h1>

        {/* Subheadline */}
        <p className="entrance-fade entrance-fade-delay-2 mt-8 max-w-xl text-lg leading-8 text-littoral/58 sm:text-xl sm:leading-9">
          {copy.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="entrance-fade entrance-fade-delay-3 mt-12 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#produits"
            className="group inline-flex items-center gap-3 rounded-full bg-ouest px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(192,57,43,0.45)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-ouest/90 hover:shadow-[0_12px_40px_-8px_rgba(192,57,43,0.55)]"
          >
            {copy.hero.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={siteContactLinks.email}
            className="inline-flex items-center gap-2 rounded-full border border-littoral/12 bg-white/75 px-8 py-4 text-sm font-semibold text-littoral shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-littoral/20 hover:bg-white/90 hover:shadow-md"
          >
            {copy.hero.secondaryCta}
          </a>
        </div>

        {/* Stats bar */}
        <div className="entrance-fade entrance-fade-delay-3 mt-20 w-full max-w-2xl">
          <div className="flex items-center justify-center divide-x divide-littoral/8 rounded-[1.4rem] border border-littoral/10 bg-white/90 px-2 py-5 shadow-[0_8px_40px_-16px_rgba(26,23,21,0.12)] backdrop-blur-md">
            {copy.hero.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Cpu;
              return (
                <div key={stat.label} className="flex flex-1 flex-col items-center gap-1.5 px-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-ouest/55" />
                    <span className="font-display text-2xl font-bold tracking-tight text-littoral sm:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-littoral/42">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
