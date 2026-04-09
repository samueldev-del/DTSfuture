import type { ReactNode } from "react";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { siteStructuredData } from "@/src/config/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export function DocumentShell({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <html
      lang={lang}
      className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-savane font-sans text-littoral selection:bg-ouest selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}