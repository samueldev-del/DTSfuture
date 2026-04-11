import { SchmidtsZaunbauProjectPage } from "@/src/components/pages/SchmidtsZaunbauProjectPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "schmidtsZaunbau");

export default function EnglishSchmidtsZaunbauProjectPage() {
  return <SchmidtsZaunbauProjectPage />;
}
