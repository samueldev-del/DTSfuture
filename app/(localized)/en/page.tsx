import { HomePage } from "@/src/components/pages/HomePage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "home");

export default function EnglishHomePage() {
  return <HomePage />;
}