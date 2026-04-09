"use client";

import { ReactNode } from "react";

import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  disclaimer: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  intro,
  disclaimer,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main className="py-16 sm:py-20">
        <section className="mx-auto max-w-4xl px-6">
          <div className="rounded-4xl border border-littoral/10 bg-white p-8 shadow-xl shadow-littoral/5 sm:p-12">
            <p className="inline-flex rounded-full bg-savane px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ouest ring-1 ring-littoral/10">
              {eyebrow}
            </p>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] text-littoral sm:text-5xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-littoral/70 sm:text-lg">
              {intro}
            </p>

            <div className="mt-8 rounded-3xl bg-savane px-5 py-4 text-sm leading-7 text-littoral/70 ring-1 ring-littoral/10">
              {disclaimer}
            </div>

            <div className="mt-12 space-y-10">{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}