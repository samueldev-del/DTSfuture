"use client";

import { useEffect } from "react";

export function PwaRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (typeof window === "undefined" || !window.isSecureContext || !("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    }).catch(() => {
      // Ignore registration failures silently in production.
    });
  }, []);

  return null;
}