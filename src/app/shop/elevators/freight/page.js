import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores de carga",
  description:
    "Elevadores de carga para almacenes, comercios e instalaciones industriales, configurados según capacidad y recorrido.",
  path: "/shop/elevators/freight",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb categorySlug="freight" />
      <ElevatorCategoryListing categorySlug="freight" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
