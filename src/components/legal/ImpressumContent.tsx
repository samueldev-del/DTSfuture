"use client";

import type { ReactNode } from "react";

import { LegalPageLayout } from "@/src/components/ui/LegalPageLayout";
import { formatAddress, siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

function DetailList({ items }: { items: Array<{ label: string; value: ReactNode }> }) {
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl bg-savane p-5 ring-1 ring-littoral/10">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-littoral/45">
            {item.label}
          </dt>
          <dd className="mt-2 text-base font-medium text-littoral">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ImpressumContent() {
  const { copy, locale } = useLocale();
  const localizedAddress = formatAddress(copy.common.country);

  const publisherDetails = [
    { label: copy.legal.impressum.details.projectName, value: siteConfig.name },
    { label: copy.legal.impressum.details.siteEditor, value: siteConfig.editorName },
    {
      label: copy.legal.impressum.details.siteNature,
      value: locale === "fr" ? siteConfig.projectNature : "Personal non-commercial website",
    },
    { label: copy.legal.impressum.details.address, value: localizedAddress },
    {
      label: copy.legal.impressum.details.email,
      value: (
        <a className="transition-colors hover:text-ouest" href={siteContactLinks.email}>
          {siteConfig.email}
        </a>
      ),
    },
    {
      label: copy.legal.impressum.details.phone,
      value: (
        <a className="transition-colors hover:text-ouest" href={siteContactLinks.phone}>
          {siteConfig.phoneDisplay}
        </a>
      ),
    },
    {
      label: copy.legal.impressum.details.website,
      value: (
        <a
          className="transition-colors hover:text-ouest"
          href={siteConfig.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.domain}
        </a>
      ),
    },
  ];

  const hostingDetails = [
    {
      label: copy.legal.impressum.details.host,
      value: (
        <a
          className="transition-colors hover:text-ouest"
          href={siteConfig.infrastructure.hostingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.infrastructure.hostingProvider}
        </a>
      ),
    },
    {
      label: copy.legal.impressum.details.hostAddress,
      value:
        locale === "fr"
          ? siteConfig.infrastructure.hostingDescriptionFr
          : siteConfig.infrastructure.hostingDescriptionEn,
    },
    {
      label: copy.legal.impressum.details.hostContact,
      value: (
        <span>
          <a
            className="transition-colors hover:text-ouest"
            href={siteConfig.infrastructure.domainUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.infrastructure.domainProvider}
          </a>{" "}
          ·{" "}
          {locale === "fr"
            ? siteConfig.infrastructure.domainDescriptionFr
            : siteConfig.infrastructure.domainDescriptionEn}
        </span>
      ),
    },
  ];

  return (
    <LegalPageLayout
      eyebrow={copy.legal.impressum.eyebrow}
      title={copy.legal.impressum.title}
      intro={copy.legal.impressum.intro}
      disclaimer={copy.legal.impressum.disclaimer}
    >
      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.editor}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.editorText}
        </p>
        <div className="mt-6">
          <DetailList items={publisherDetails} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.publication}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.publicationLead} {siteConfig.editorName}. {copy.legal.impressum.publicationBetween}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.email}>
            {siteConfig.email}
          </a>{" "}
          {copy.legal.impressum.publicationPhoneLead}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.phone}>
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.hosting}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.hostingText}
        </p>
        <div className="mt-6">
          <DetailList items={hostingDetails} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.legalScope}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.legalScopeText}
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.intellectualProperty}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.intellectualPropertyText}
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.impressum.headings.contact}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.impressum.contactLead}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.email}>
            {siteConfig.email}
          </a>
          , {copy.legal.impressum.contactPhoneLead}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.phone}>
            {siteConfig.phoneDisplay}
          </a>
          , {copy.legal.impressum.contactAddressLead} {localizedAddress}.
        </p>
      </section>
    </LegalPageLayout>
  );
}