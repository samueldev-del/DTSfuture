"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocale } from "@/src/i18n/locale-provider";
import { switchLocalePath } from "@/src/i18n/routing";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { locale, supportedLocales, copy } = useLocale();

  return (
    <div
      aria-label={copy.common.languageSwitcherLabel}
      className={[
        "inline-flex items-center rounded-full border border-littoral/10 bg-white/80 p-1 backdrop-blur-sm",
        className,
      ].join(" ")}
      role="group"
    >
      {supportedLocales.map((language) => {
        const isActive = locale === language;

        return (
          <Link
            key={language}
            href={switchLocalePath(pathname, language)}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300",
              isActive
                ? "bg-littoral text-savane shadow-sm"
                : "text-littoral/60 hover:text-littoral",
            ].join(" ")}
          >
            {copy.common.languageShort[language]}
          </Link>
        );
      })}
    </div>
  );
}