import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores residenciales y para villas",
  description:
    "Elevadores compactos y personalizables para viviendas privadas, villas y proyectos residenciales.",
  path: "/shop/elevators/villa",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb categorySlug="villa" />
      <ElevatorCategoryListing categorySlug="villa" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
