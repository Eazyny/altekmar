import { notFound, redirect } from "next/navigation";
import catalog from "~/data/gots-elevator-catalog.json";

export function generateStaticParams() {
  const passenger = catalog.categories.find(
    (category) => category.slug === "passenger",
  );

  return (passenger?.products || []).map((product) => ({
    slug: product.id,
  }));
}

export default function LegacyPassengerProductPage({ params }) {
  const passenger = catalog.categories.find(
    (category) => category.slug === "passenger",
  );

  const product = passenger?.products.find(
    (item) => item.id === params.slug,
  );

  if (!product) {
    notFound();
  }

  redirect(`/shop/elevators/passenger/${product.id}`);
}