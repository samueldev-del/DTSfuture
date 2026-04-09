import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../globals.css";

import { DocumentShell } from "@/src/components/layout/DocumentShell";
import { siteConfig } from "@/src/config/site";
import { LocaleProvider } from "@/src/i18n/locale-provider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  applicationName: siteConfig.name,
  creator: siteConfig.editorName,
  publisher: siteConfig.editorName,
  authors: [{ name: siteConfig.editorName, url: siteConfig.url }],
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EnglishLocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DocumentShell lang="en">
      <LocaleProvider locale="en">{children}</LocaleProvider>
    </DocumentShell>
  );
}