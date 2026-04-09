"use client";

import { ArrowUpRight } from "lucide-react";

import { RevealOnScroll } from "@/src/components/ui/RevealOnScroll";
import { useLocale } from "@/src/i18n/locale-provider";

export function StorySection() {
  const { copy } = useLocale();

  return (
    <section id="histoire" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left - heading */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ouest">
                {copy.story.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] text-littoral sm:text-4xl lg:text-5xl">
                {copy.story.titleLead}{" "}
                <span className="text-ouest">{copy.story.titleAccent}</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-littoral/60">
                {copy.story.description}
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-littoral/10 bg-white px-5 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ouest/10">
                  <ArrowUpRight className="h-5 w-5 text-ouest" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-littoral">{copy.story.calloutTitle}</p>
                  <p className="text-xs text-littoral/50">{copy.story.calloutText}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-linear-to-b from-ouest/30 via-foret/30 to-transparent lg:left-6"
            />

            {copy.story.milestones.map((milestone, index) => (
              <RevealOnScroll key={milestone.label} delayMs={index * 150}>
                <div className="relative flex gap-6 pl-2 lg:gap-8 lg:pl-3">
                  {/* Dot */}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-littoral shadow-md shadow-littoral/20 lg:h-10 lg:w-10">
                    <span className="text-xs font-bold text-savane lg:text-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-littoral/8 bg-white p-6 shadow-sm transition-all duration-500 hover:border-littoral/15 hover:shadow-md sm:p-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-ouest">
                      {milestone.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-littoral">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-littoral/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
