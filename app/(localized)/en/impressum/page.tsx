import { ImpressumContent } from "@/src/components/legal/ImpressumContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "impressum");

export default function EnglishImpressumPage() {
  return <ImpressumContent />;
}