"use client";

import Image from "next/image";

import { useLocale } from "@/src/i18n/locale-provider";

export function Bolo237Preview() {
  const { copy } = useLocale();

  return (
    <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-6 lg:py-2">
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-12 h-60 rounded-full bg-ouest/12 blur-3xl transition-all duration-500 ease-out group-hover:bg-ouest/18"
      />
      <div
        aria-hidden="true"
        className="absolute left-12 top-8 h-32 w-32 rounded-full bg-foret/12 blur-3xl transition-all duration-500 ease-out group-hover:scale-110"
      />

      <div className="showcase-float absolute -left-3 bottom-8 hidden w-44 sm:block">
        <div className="overflow-hidden rounded-[1.75rem] border border-littoral/10 bg-white/95 shadow-xl shadow-littoral/10 ring-1 ring-littoral/10 backdrop-blur transition-all duration-500 ease-out group-hover:-rotate-2 group-hover:shadow-ouest/15">
          <Image
            src="/bolo237/og-image.png"
            alt={copy.bolo237Preview.brandAlt}
            width={1200}
            height={630}
            className="h-auto w-full"
            sizes="176px"
          />
        </div>
      </div>

      <div className="showcase-float-delay absolute -right-1 top-3 hidden w-28 sm:block lg:right-4">
        <div className="rounded-4xl border border-littoral/10 bg-white/90 p-3 shadow-xl shadow-littoral/10 ring-1 ring-littoral/10 backdrop-blur transition-all duration-500 ease-out group-hover:rotate-3 group-hover:shadow-ouest/15">
          <Image
            src="/bolo237/icon-512.png"
            alt={copy.bolo237Preview.iconAlt}
            width={88}
            height={88}
            className="h-auto w-full rounded-[1.35rem]"
            sizes="112px"
          />
        </div>
      </div>

      <div className="relative w-full max-w-136">
        <div className="showcase-shine overflow-hidden rounded-[2.2rem] border border-littoral/10 bg-white p-3 shadow-[0_36px_100px_-40px_rgba(26,23,21,0.45)] ring-1 ring-littoral/10 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_48px_120px_-48px_rgba(192,57,43,0.4)]">
          <div className="flex items-center gap-2 px-2 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ouest/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-foret/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-littoral/25" />
            <span className="ml-2 rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/45 ring-1 ring-littoral/10">
              www.bolo237.com
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.65rem] ring-1 ring-littoral/10">
            <Image
              src="/bolo237/homepage-shot.png"
              alt={copy.bolo237Preview.homepageAlt}
              width={1440}
              height={1440}
              className="h-auto w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1"
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 92vw"
            />
          </div>
        </div>

        <div className="showcase-float-delay absolute -right-5 bottom-7 w-40 sm:w-48 lg:-right-10">
          <div className="rotate-[8deg] rounded-[2.35rem] bg-littoral p-2 shadow-[0_28px_70px_-34px_rgba(26,23,21,0.62)] transition-all duration-700 ease-out group-hover:rotate-[4deg] group-hover:-translate-y-2">
            <div className="rounded-[1.75rem] bg-white p-2.5">
              <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-littoral/10" />
              <div className="overflow-hidden rounded-[1.35rem] ring-1 ring-littoral/10">
                <Image
                  src="/bolo237/homepage-shot.png"
                  alt={copy.bolo237Preview.mobileAlt}
                  width={1440}
                  height={1440}
                  className="aspect-9/16 w-full object-cover object-top-left transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 640px) 192px, 160px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pl-1 sm:pl-3">
          {copy.bolo237Preview.imageBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-littoral/55 ring-1 ring-littoral/10 backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}