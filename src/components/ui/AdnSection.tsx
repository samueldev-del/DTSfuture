"use client";

import { Globe, Shield, Code, Zap, HeartHandshake, Server } from "lucide-react";

import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { useLocale } from "@/src/i18n/locale-provider";

const values = [
  {
    key: "localInsight",
    icon: Globe,
    iconColor: "text-ouest",
    iconBg: "bg-ouest/10",
  },
  {
    key: "europeanStandards",
    icon: Shield,
    iconColor: "text-foret",
    iconBg: "bg-foret/10",
  },
  {
    key: "modernEngineering",
    icon: Code,
    iconColor: "text-littoral",
    iconBg: "bg-littoral/10",
  },
  {
    key: "performanceFirst",
    icon: Zap,
    iconColor: "text-ouest",
    iconBg: "bg-ouest/10",
  },
  {
    key: "socialImpact",
    icon: HeartHandshake,
    iconColor: "text-foret",
    iconBg: "bg-foret/10",
  },
  {
    key: "solidInfrastructure",
    icon: Server,
    iconColor: "text-littoral",
    iconBg: "bg-littoral/10",
  },
] as const;

export function AdnSection() {
  const { copy } = useLocale();

  return (
    <section id="adn" className="border-y border-littoral/8 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foret">
              {copy.adn.eyebrow}
            </p>
            <h2 className="text-balance mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-littoral sm:text-4xl lg:text-5xl">
              {copy.adn.titleLead}{" "}
              <span className="text-foret">{copy.adn.titleAccent}</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-littoral/60">
              {copy.adn.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            const content = copy.adn.items[value.key];
            return (
              <RevealOnScroll key={value.key} delayMs={index * 100} className="h-full">
                <article className="group h-full rounded-2xl border border-littoral/8 bg-savane/60 p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-littoral/15 hover:bg-savane hover:shadow-lg hover:shadow-littoral/5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.iconBg} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className={`h-6 w-6 ${value.iconColor}`} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-littoral">
                    {content.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-littoral/60">
                    {content.description}
                  </p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
