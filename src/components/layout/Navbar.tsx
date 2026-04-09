"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LanguageToggle } from "@/src/components/ui/LanguageToggle";
import { Logo } from "@/src/components/ui/Logo";
import { siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";
import { getLocalizedPath, getRouteFromPathname } from "@/src/i18n/routing";

const sectionLinks = [
  { href: "/#adn", id: "adn", labelKey: "dna" },
  { href: "/#histoire", id: "histoire", labelKey: "story" },
] as const;

type HomeSectionId = "accueil" | (typeof sectionLinks)[number]["id"];

export function Navbar() {
  const pathname = usePathname();
  const { copy, locale } = useLocale();
  const [activeSection, setActiveSection] = useState<HomeSectionId>("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homePath = getLocalizedPath(locale, "home");
  const currentRoute = getRouteFromPathname(pathname);
  const productsActive = currentRoute === "products" || currentRoute === "bolo237";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== homePath) return;

    const sectionIds: HomeSectionId[] = [
      "accueil",
      ...sectionLinks.map((link) => link.id),
    ];
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as HomeSectionId);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.35, 0.5, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [homePath, pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-littoral/10 bg-savane/85 shadow-sm shadow-littoral/5 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo */}
        <Link
          href={getLocalizedPath(locale, "home", "accueil")}
          aria-label={copy.common.homeAriaLabel}
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <Logo height={32} className="hidden sm:block" />
          <Logo variant="mark" height={32} className="sm:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label={copy.common.primaryNavAriaLabel}
          className="hidden items-center gap-1 text-sm font-medium text-littoral/70 md:flex"
        >
          <Link
            href={getLocalizedPath(locale, "products")}
            className={[
              "rounded-full px-4 py-2 transition-all duration-300",
              productsActive
                ? "bg-ouest/10 text-ouest"
                : "hover:bg-littoral/5 hover:text-littoral",
            ].join(" ")}
          >
            {copy.common.productsMenu}
          </Link>

          {sectionLinks.map((item) => {
            const isActive = pathname === homePath && activeSection === item.id;
            return (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, "home", item.id)}
                className={[
                  "rounded-full px-4 py-2 transition-all duration-300",
                  isActive
                    ? "bg-ouest/10 text-ouest"
                    : "hover:bg-littoral/5 hover:text-littoral",
                ].join(" ")}
              >
                {copy.common[item.labelKey]}
              </Link>
            );
          })}

          <LanguageToggle className="ml-3" />

          <a
            href={siteContactLinks.email}
            className="ml-4 inline-flex items-center rounded-full bg-littoral px-5 py-2.5 text-sm font-semibold text-savane transition-all duration-300 hover:bg-littoral/85"
          >
            {copy.common.contact}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-littoral/10 md:hidden"
          aria-label={mobileOpen ? copy.common.closeMenu : copy.common.openMenu}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-18 z-40 bg-savane/98 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 px-6 pt-8">
            <LanguageToggle className="mb-4 w-fit" />
            <Link
              href={getLocalizedPath(locale, "products")}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-5 py-4 text-lg font-medium text-littoral transition-colors hover:bg-littoral/5"
            >
              {copy.common.productsMenu}
            </Link>
            {sectionLinks.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, "home", item.id)}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-5 py-4 text-lg font-medium text-littoral transition-colors hover:bg-littoral/5"
              >
                {copy.common[item.labelKey]}
              </Link>
            ))}
            <a
              href={siteContactLinks.email}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ouest px-6 py-4 text-base font-semibold text-white"
            >
              {copy.common.contactUs}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
