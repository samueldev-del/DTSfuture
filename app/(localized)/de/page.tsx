import { HomePage } from "@/src/components/pages/HomePage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("de", "home");

export default function GermanHomePage() {
  return <HomePage />;
}
