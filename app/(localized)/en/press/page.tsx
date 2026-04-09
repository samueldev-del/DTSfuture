import { PressContent } from "@/src/components/legal/PressContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "press");

export default function EnglishPressPage() {
  return <PressContent />;
}