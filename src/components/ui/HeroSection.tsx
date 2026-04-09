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
        <div className="float-drift absolute left-1/2 top-16 h-112 w-md -translate-x-104 rounded-full bg-ouest/15 blur-[120px]" />
        <div className="float-drift-reverse absolute right-1/2 top-12 h-104 w-104 translate-x-96 rounded-full bg-foret/15 blur-[120px]" />
        <div className="absolute left-1/2 top-44 h-72 w-xl -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
        <div className="hero-surface-grid absolute inset-x-0 top-0 h-152" />
        <div className="hero-surface-noise absolute inset-x-0 top-0 h-152" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center sm:pt-28">
        {/* Badge */}
        <div className="entrance-fade inline-flex items-center gap-3 rounded-full border border-foret/10 bg-foret/10 px-4 py-2 text-sm font-semibold text-foret shadow-sm shadow-foret/10 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foret/75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-foret" />
          </span>
          <span className="text-balance">{copy.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="entrance-fade entrance-fade-delay-1 text-balance mt-10 max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-[-0.06em] text-littoral sm:text-6xl lg:text-7xl">
          {copy.hero.titleLead}{" "}
          <span className="text-ouest">{copy.hero.titleAccent}</span>
        </h1>

        {/* Subheadline */}
        <p className="entrance-fade entrance-fade-delay-2 mt-8 max-w-2xl text-lg leading-8 text-littoral/65 sm:text-xl sm:leading-9">
          {copy.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="entrance-fade entrance-fade-delay-3 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#produits"
            className="group inline-flex items-center gap-3 rounded-full bg-ouest px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/25 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-ouest/90 hover:shadow-xl hover:shadow-ouest/35"
          >
            {copy.hero.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={siteContactLinks.email}
            className="inline-flex items-center gap-2 rounded-full border border-littoral/15 bg-white/60 px-8 py-4 text-sm font-semibold text-littoral backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-littoral/25 hover:shadow-lg hover:shadow-littoral/5"
          >
            {copy.hero.secondaryCta}
          </a>
        </div>

        {/* Stats bar */}
        <div className="entrance-fade entrance-fade-delay-3 mt-20 w-full max-w-2xl">
          <div className="flex items-center justify-center divide-x divide-littoral/10 rounded-2xl border border-littoral/10 bg-white/70 px-2 py-5 shadow-sm backdrop-blur-sm">
            {copy.hero.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Cpu;
              return (
                <div key={stat.label} className="flex flex-1 flex-col items-center gap-1 px-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-ouest/60" />
                    <span className="font-display text-2xl font-bold tracking-tight text-littoral sm:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-littoral/50 sm:text-sm">
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
