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
    accentFrom: "from-ouest/35",
    accentVia: "via-ouest/10",
  },
  {
    key: "europeanStandards",
    icon: Shield,
    iconColor: "text-foret",
    iconBg: "bg-foret/10",
    accentFrom: "from-foret/35",
    accentVia: "via-foret/10",
  },
  {
    key: "modernEngineering",
    icon: Code,
    iconColor: "text-littoral",
    iconBg: "bg-littoral/8",
    accentFrom: "from-littoral/25",
    accentVia: "via-littoral/8",
  },
  {
    key: "performanceFirst",
    icon: Zap,
    iconColor: "text-ouest",
    iconBg: "bg-ouest/10",
    accentFrom: "from-ouest/35",
    accentVia: "via-ouest/10",
  },
  {
    key: "socialImpact",
    icon: HeartHandshake,
    iconColor: "text-foret",
    iconBg: "bg-foret/10",
    accentFrom: "from-foret/35",
    accentVia: "via-foret/10",
  },
  {
    key: "solidInfrastructure",
    icon: Server,
    iconColor: "text-littoral",
    iconBg: "bg-littoral/8",
    accentFrom: "from-littoral/25",
    accentVia: "via-littoral/8",
  },
] as const;

export function AdnSection() {
  const { copy } = useLocale();

  return (
    <section id="adn" className="border-y border-littoral/8 bg-gradient-to-b from-white via-white to-savane/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-foret">
              {copy.adn.eyebrow}
            </p>
            <h2 className="text-balance mt-5 font-display text-3xl font-bold tracking-[-0.045em] text-littoral sm:text-4xl lg:text-5xl">
              {copy.adn.titleLead}{" "}
              <span className="text-foret">{copy.adn.titleAccent}</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-littoral/58">
              {copy.adn.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            const content = copy.adn.items[value.key];
            return (
              <RevealOnScroll key={value.key} delayMs={index * 80} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-littoral/8 bg-white p-7 shadow-[0_2px_16px_-6px_rgba(26,23,21,0.08)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-littoral/14 hover:shadow-[0_20px_60px_-20px_rgba(26,23,21,0.14)]">
                  {/* Gradient accent line top */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${value.accentFrom} ${value.accentVia} to-transparent`} />
                  {/* Number watermark */}
                  <span className="pointer-events-none absolute right-5 top-3 select-none font-display text-8xl font-bold leading-none text-littoral/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${value.iconBg} transition-all duration-500 group-hover:scale-110 group-hover:shadow-sm`}>
                    <Icon className={`h-5.5 w-5.5 ${value.iconColor}`} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.02em] text-littoral">
                    {content.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-littoral/58">
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
