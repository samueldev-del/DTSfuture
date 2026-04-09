import { ProductsPage } from "@/src/components/pages/ProductsPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "products");

export default function FrenchProductsPage() {
  return <ProductsPage />;
}