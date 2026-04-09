import { HomePage } from "@/src/components/pages/HomePage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "home");

export default function FrenchHomePage() {
  return <HomePage />;
}