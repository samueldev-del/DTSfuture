"use client";

import { MapPin, Star, Hammer } from "lucide-react";

export function SchmidtsZaunbauNordPreview() {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-3 sm:py-6 lg:py-2">
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-12 h-60 rounded-full bg-ouest/12 blur-3xl transition-all duration-500 ease-out group-hover:bg-ouest/18"
      />
      <div
        aria-hidden="true"
        className="absolute left-12 top-8 h-32 w-32 rounded-full bg-foret/12 blur-3xl transition-all duration-500 ease-out group-hover:scale-110"
      />

      <div className="relative w-[calc(100%-0.75rem)] max-w-136">
        <div className="showcase-shine overflow-hidden rounded-[1.9rem] border border-littoral/10 bg-white p-2.5 shadow-[0_36px_100px_-40px_rgba(26,23,21,0.45)] ring-1 ring-littoral/10 transition-all duration-700 ease-out group-hover:-translate-y-2 sm:rounded-[2.2rem] sm:p-3">
          <div className="flex items-center gap-2 px-2 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ouest/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-foret/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-littoral/25" />
            <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-savane px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-littoral/45 ring-1 ring-littoral/10">
              schmidtszaunbaunord.com
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.65rem] bg-savane/60 ring-1 ring-littoral/10">
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-littoral text-white shadow-sm">
                  <Hammer className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-base font-bold tracking-tight text-littoral">Schmidts Zaunbau Nord</p>
                  <p className="text-xs text-littoral/55">Ihr Fachbetrieb in Hamburg</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white px-4 py-4 ring-1 ring-littoral/8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-littoral/40">Projekte</p>
                  <p className="mt-1 font-display text-2xl font-bold text-littoral">2.000+</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 ring-1 ring-littoral/8">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <p className="font-display text-2xl font-bold text-littoral">4,8</p>
                  </div>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-littoral/40">Google</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {["Zaunbau", "Tore", "Gabionen", "Hamburg"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-littoral/55 ring-1 ring-littoral/8">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-littoral/50">
                <MapPin className="h-3.5 w-3.5" />
                <span>Schinkelstraße 13, 22303 Hamburg</span>
              </div>

              <div className="mt-5 rounded-xl bg-ouest px-4 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-ouest/20">
                Kostenloses Angebot anfordern
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:pl-3">
          {["20+ Jahre Erfahrung", "Meisterbetrieb", "Norddeutschland"].map((badge) => (
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
