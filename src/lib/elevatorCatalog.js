import catalog from "~/data/gots-elevator-catalog.json";

const legacyProductIds = {
  "moving-walks-indoor-outdoor-mini-escalator":
    "rg12-panoramic-glass-elevator",
};

export const elevatorCategories = catalog.categories
  .filter((category) => category.slug !== "escalators")
  .map((category) => ({
    ...category,
    products: category.products.map((product) => ({
      ...product,
      id: legacyProductIds[product.id] || product.id,
    })),
  }));

const liveElevatorCatalog = {
  ...catalog,
  categories: elevatorCategories,
};

export default liveElevatorCatalog;
