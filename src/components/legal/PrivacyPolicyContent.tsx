"use client";

import { LegalPageLayout } from "@/src/components/ui/LegalPageLayout";
import { formatAddress, siteConfig, siteContactLinks } from "@/src/config/site";
import { useLocale } from "@/src/i18n/locale-provider";

export function PrivacyPolicyContent() {
  const { copy } = useLocale();
  const localizedAddress = formatAddress(copy.common.country);

  return (
    <LegalPageLayout
      eyebrow={copy.legal.privacy.eyebrow}
      title={copy.legal.privacy.title}
      intro={copy.legal.privacy.intro}
      disclaimer={copy.legal.privacy.disclaimer}
    >
      {copy.legal.privacy.sections.map((section) => (
        <section key={section.title}>
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
            {section.title}
          </h2>
          <p className="mt-3 text-base leading-8 text-littoral/70">{section.text}</p>
        </section>
      ))}

      <section>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-littoral">
          {copy.legal.privacy.contactHeading}
        </h2>
        <p className="mt-3 text-base leading-8 text-littoral/70">
          {copy.legal.privacy.contactLead}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.email}>
            {siteConfig.email}
          </a>
          , {copy.legal.privacy.contactPhoneLead}{" "}
          <a className="font-semibold text-ouest transition-all duration-300 ease-in-out hover:text-littoral" href={siteContactLinks.phone}>
            {siteConfig.phoneDisplay}
          </a>
          , {copy.legal.privacy.contactAddressLead} {localizedAddress}.
        </p>
      </section>
    </LegalPageLayout>
  );
}