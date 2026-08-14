import { notFound } from "next/navigation";
import catalog from "~/data/gots-elevator-catalog.json";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import ElevatorBreadcumb from "~/sections/Shop-Details/ElevatorBreadcumb";
import ElevatorDetails from "~/sections/Shop-Details/ElevatorDetails";
import { productMetadata } from "~/lib/seo";
import { ProductStructuredData } from "~/seo/StructuredData";

const CATEGORY_SLUG = "hospital";

export function generateStaticParams() {
  const category = catalog.categories.find(
    (item) => item.slug === CATEGORY_SLUG,
  );

  return (category?.products || []).map((product) => ({
    slug: product.id,
  }));
}

export function generateMetadata({ params }) {
  const category = catalog.categories.find(
    (item) => item.slug === CATEGORY_SLUG,
  );
  const product = category?.products.find(
    (item) => item.id === params.slug,
  );

  if (!product) {
    return { title: "Product Not Found | Altekmar" };
  }

  return productMetadata(product, category);
}

export default function ProductPage({ params }) {
  const category = catalog.categories.find(
    (item) => item.slug === CATEGORY_SLUG,
  );

  if (!category) {
    notFound();
  }

  const productIndex = category.products.findIndex(
    (item) => item.id === params.slug,
  );

  if (productIndex === -1) {
    notFound();
  }

  const product = category.products[productIndex];
  const relatedProducts = category.products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="altekmar-inner-page">
      <ProductStructuredData product={product} category={category} />
      <HeaderFour />
      <ElevatorBreadcumb product={product} category={category} />
      <ElevatorDetails
        product={product}
        category={category}
        relatedProducts={relatedProducts}
      />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
