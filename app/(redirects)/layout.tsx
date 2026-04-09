import type { Metadata } from "next";
import "../globals.css";

import { DocumentShell } from "@/src/components/layout/DocumentShell";
import { siteConfig } from "@/src/config/site";

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
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocumentShell lang="fr">{children}</DocumentShell>;
}