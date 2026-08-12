import { notFound } from "next/navigation";
import catalog from "~/data/gots-elevator-catalog.json";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import ElevatorBreadcumb from "~/sections/Shop-Details/ElevatorBreadcumb";
import ElevatorDetails from "~/sections/Shop-Details/ElevatorDetails";

const CATEGORY_SLUG = "observation";

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

  return {
    title: (product.title?.en || product.title?.es) + " | Altekmar",
    description:
      product.description?.en ||
      product.description?.es ||
      "GOTS product supplied by Altekmar.",
  };
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
    <div>
      <HeaderOne />
      <ElevatorBreadcumb product={product} category={category} />
      <ElevatorDetails
        product={product}
        category={category}
        relatedProducts={relatedProducts}
      />
      <FooterTwo />
      <Scroll />
    </div>
  );
}