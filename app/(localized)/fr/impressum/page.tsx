import { ImpressumContent } from "@/src/components/legal/ImpressumContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "impressum");

export default function FrenchImpressumPage() {
  return <ImpressumContent />;
}