import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../../globals.css";

import { DocumentShell } from "@/src/components/layout/DocumentShell";
import { PwaInstallPrompt } from "@/src/components/pwa/PwaInstallPrompt";
import { siteConfig } from "@/src/config/site";
import { LocaleProvider } from "@/src/i18n/locale-provider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  manifest: "/manifest.webmanifest",
  applicationName: siteConfig.name,
  creator: siteConfig.editorName,
  publisher: siteConfig.editorName,
  authors: [{ name: siteConfig.editorName, url: siteConfig.url }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/pwa/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/pwa/apple-touch-icon.png" }],
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F8F6F0",
};

export default function FrenchLocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DocumentShell lang="fr">
      <LocaleProvider locale="fr">
        {children}
        <PwaInstallPrompt />
      </LocaleProvider>
    </DocumentShell>
  );
}