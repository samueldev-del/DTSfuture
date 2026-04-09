import { PrivacyPolicyContent } from "@/src/components/legal/PrivacyPolicyContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "privacy");

export default function FrenchPrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}