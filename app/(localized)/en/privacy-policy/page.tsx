import { PrivacyPolicyContent } from "@/src/components/legal/PrivacyPolicyContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "privacy");

export default function EnglishPrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}