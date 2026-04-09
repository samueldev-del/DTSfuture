"use client";

import { Download, Share2, Smartphone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useLocale } from "@/src/i18n/locale-provider";

const dismissStorageKey = "dtsfuture-pwa-dismissed-at";
const dismissCooldownMs = 7 * 24 * 60 * 60 * 1000;

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

type NavigatorWithStandalone = Navigator & {
  standalone?: boolean;
};

function hasRecentDismissal() {
  const value = window.localStorage.getItem(dismissStorageKey);

  if (!value) {
    return false;
  }

  const dismissedAt = Number(value);

  return Number.isFinite(dismissedAt) && Date.now() - dismissedAt < dismissCooldownMs;
}

function isStandaloneMode() {
  const navigatorWithStandalone = window.navigator as NavigatorWithStandalone;

  return window.matchMedia("(display-mode: standalone)").matches || navigatorWithStandalone.standalone === true;
}

function isIosDevice() {
  const { userAgent, platform, maxTouchPoints } = window.navigator;

  return /iPad|iPhone|iPod/.test(userAgent) || (platform === "MacIntel" && maxTouchPoints > 1);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

export function PwaInstallPrompt() {
  const { copy } = useLocale();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isIosFallback, setIsIosFallback] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const [showIosSteps, setShowIosSteps] = useState(false);

  useEffect(() => {
    const updateEnvironment = () => {
      const standalone = isStandaloneMode();

      setIsMobile(isMobileViewport());
      setIsStandalone(standalone);
      setIsIosFallback(isIosDevice() && !standalone);
    };

    const viewportQuery = window.matchMedia("(max-width: 767px)");
    const onViewportChange = () => updateEnvironment();
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      updateEnvironment();
    };
    const onAppInstalled = () => {
      setDeferredPrompt(null);
      setShowIosSteps(false);
      setIsDismissed(true);
    };

    const initialSyncFrame = window.requestAnimationFrame(() => {
      updateEnvironment();
      setIsDismissed(hasRecentDismissal());
    });

    if (typeof viewportQuery.addEventListener === "function") {
      viewportQuery.addEventListener("change", onViewportChange);
    } else {
      viewportQuery.addListener(onViewportChange);
    }

    window.addEventListener("resize", updateEnvironment);
    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.cancelAnimationFrame(initialSyncFrame);

      if (typeof viewportQuery.removeEventListener === "function") {
        viewportQuery.removeEventListener("change", onViewportChange);
      } else {
        viewportQuery.removeListener(onViewportChange);
      }

      window.removeEventListener("resize", updateEnvironment);
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  function dismissPrompt() {
    window.localStorage.setItem(dismissStorageKey, String(Date.now()));
    setIsDismissed(true);
    setShowIosSteps(false);
  }

  async function handlePrimaryAction() {
    if (deferredPrompt) {
      await deferredPrompt.prompt();

      const result = await deferredPrompt.userChoice;

      setDeferredPrompt(null);

      if (result.outcome === "accepted") {
        setIsDismissed(true);
        setShowIosSteps(false);
        return;
      }

      dismissPrompt();
      return;
    }

    setShowIosSteps((current) => !current);
  }

  const shouldRender = isMobile && !isStandalone && !isDismissed && (deferredPrompt !== null || isIosFallback);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-70 md:hidden">
      <div className="rounded-[1.8rem] border border-littoral/10 bg-white/95 p-5 shadow-[0_28px_80px_-42px_rgba(26,23,21,0.45)] backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ouest/10 text-ouest shadow-sm shadow-ouest/10">
            <Smartphone className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ouest">{copy.pwa.badge}</p>
                <h2 className="mt-2 font-display text-lg font-bold tracking-[-0.03em] text-littoral">{copy.pwa.title}</h2>
              </div>

              <button
                type="button"
                onClick={dismissPrompt}
                aria-label={copy.pwa.closeAriaLabel}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-littoral/10 bg-savane text-littoral/60 transition-colors hover:text-littoral"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-littoral/62">
              {deferredPrompt ? copy.pwa.description : copy.pwa.iosDescription}
            </p>

            {showIosSteps && !deferredPrompt ? (
              <div className="mt-4 rounded-3xl bg-savane px-4 py-4 ring-1 ring-littoral/8">
                <div className="flex items-center gap-2 text-sm font-semibold text-littoral">
                  <Share2 className="h-4 w-4 text-ouest" />
                  {copy.pwa.iosStepsTitle}
                </div>

                <div className="mt-3 space-y-2">
                  {copy.pwa.iosSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3 text-sm leading-6 text-littoral/62">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-littoral ring-1 ring-littoral/10">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handlePrimaryAction}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ouest px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ouest/20 transition-all hover:-translate-y-0.5 hover:bg-ouest/90"
              >
                {deferredPrompt ? copy.pwa.installCta : copy.pwa.iosCta}
                {deferredPrompt ? <Download className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              </button>

              <button
                type="button"
                onClick={dismissPrompt}
                className="inline-flex items-center justify-center rounded-full border border-littoral/12 bg-white px-5 py-3 text-sm font-semibold text-littoral transition-all hover:-translate-y-0.5 hover:border-littoral/20"
              >
                {copy.pwa.dismissCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}