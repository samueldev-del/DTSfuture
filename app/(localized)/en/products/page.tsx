import { ProductsPage } from "@/src/components/pages/ProductsPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "products");

export default function EnglishProductsPage() {
  return <ProductsPage />;
}