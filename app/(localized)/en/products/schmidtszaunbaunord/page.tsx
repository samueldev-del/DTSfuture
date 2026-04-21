import { SchmidtsZaunbauNordProjectPage } from "@/src/components/pages/SchmidtsZaunbauNordProjectPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "schmidtszaunbaunord");

export default function EnglishSchmidtsZaunbauNordProjectPage() {
  return <SchmidtsZaunbauNordProjectPage />;
}
