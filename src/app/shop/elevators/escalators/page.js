import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Escaleras y pasillos móviles",
  description:
    "Escaleras mecánicas y pasillos móviles para centros comerciales, aeropuertos y proyectos de alto tránsito.",
  path: "/shop/elevators/escalators",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb categorySlug="escalators" />
      <ElevatorCategoryListing categorySlug="escalators" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
