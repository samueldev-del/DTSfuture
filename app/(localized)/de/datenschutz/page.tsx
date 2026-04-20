import { PrivacyPolicyContent } from "@/src/components/legal/PrivacyPolicyContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("de", "privacy");

export default function GermanPrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
