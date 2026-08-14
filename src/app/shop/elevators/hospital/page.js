import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores hospitalarios",
  description:
    "Elevadores hospitalarios diseñados para pacientes, personal, camillas y operación continua en centros de salud.",
  path: "/shop/elevators/hospital",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb categorySlug="hospital" />
      <ElevatorCategoryListing categorySlug="hospital" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
