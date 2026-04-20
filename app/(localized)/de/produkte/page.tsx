import { ProductsPage } from "@/src/components/pages/ProductsPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("de", "products");

export default function GermanProductsPage() {
  return <ProductsPage />;
}
