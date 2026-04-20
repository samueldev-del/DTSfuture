import { PressContent } from "@/src/components/legal/PressContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("de", "press");

export default function GermanPressPage() {
  return <PressContent />;
}
