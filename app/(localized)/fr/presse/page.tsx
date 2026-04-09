import { PressContent } from "@/src/components/legal/PressContent";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "press");

export default function FrenchPressPage() {
  return <PressContent />;
}