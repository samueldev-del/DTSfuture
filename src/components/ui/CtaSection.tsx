"use client";

import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";

import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { formatAddress, siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

export function CtaSection() {
  const { copy } = useLocale();
  const localizedAddress = formatAddress(copy.common.country);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-[2.8rem] bg-littoral px-8 py-16 text-center shadow-[0_40px_120px_-40px_rgba(26,23,21,0.55)] sm:px-16 sm:py-24">
            {/* Background decoration */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="hero-surface-grid absolute inset-0 opacity-20" />
              <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-ouest/22 blur-[120px]" />
              <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-foret/22 blur-[120px]" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-sm">
                <Mail className="h-7 w-7 text-savane/90" />
              </div>

              <h2 className="mt-8 font-display text-3xl font-bold tracking-[-0.045em] text-savane sm:text-4xl lg:text-5xl">
                {copy.cta.titleLead}
                <br />
                <span className="text-ouest">{copy.cta.titleAccent}</span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-savane/55">
                {copy.cta.description}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={siteContactLinks.email}
                  className="group inline-flex items-center gap-3 rounded-full bg-ouest px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(192,57,43,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ouest/90 hover:shadow-[0_12px_40px_-8px_rgba(192,57,43,0.65)]"
                >
                  {siteConfig.email}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={siteContactLinks.phone}
                  className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/8 px-8 py-4 text-sm font-semibold text-savane backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/12"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-savane/65 sm:flex-row sm:flex-wrap sm:gap-5">
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-savane"
                >
                  <Globe className="h-4 w-4" />
                  {siteConfig.domain}
                </a>
                <span className="inline-flex items-center gap-2 text-center">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {localizedAddress}
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
