import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores panorámicos",
  description:
    "Elevadores panorámicos y de cristal integrados a la arquitectura de edificios residenciales y comerciales.",
  path: "/shop/elevators/observation",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb categorySlug="observation" />
      <ElevatorCategoryListing categorySlug="observation" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
