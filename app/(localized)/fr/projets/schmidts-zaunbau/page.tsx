import { SchmidtsZaunbauProjectPage } from "@/src/components/pages/SchmidtsZaunbauProjectPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "schmidtsZaunbau");

export default function FrenchSchmidtsZaunbauProjectPage() {
  return <SchmidtsZaunbauProjectPage />;
}
