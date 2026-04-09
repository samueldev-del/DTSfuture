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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-littoral px-8 py-16 text-center sm:px-16 sm:py-24">
            {/* Background decoration */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-ouest/20 blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-foret/20 blur-[100px]" />
            </div>

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <Mail className="h-8 w-8 text-savane" />
              </div>

              <h2 className="mt-8 font-display text-3xl font-bold tracking-[-0.04em] text-savane sm:text-4xl lg:text-5xl">
                {copy.cta.titleLead}
                <br />
                <span className="text-ouest">{copy.cta.titleAccent}</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-savane/60">
                {copy.cta.description}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteContactLinks.email}
                  className="group inline-flex items-center gap-3 rounded-full bg-ouest px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-ouest/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ouest/90 hover:shadow-xl"
                >
                  {siteConfig.email}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={siteContactLinks.phone}
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-savane backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/14"
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
