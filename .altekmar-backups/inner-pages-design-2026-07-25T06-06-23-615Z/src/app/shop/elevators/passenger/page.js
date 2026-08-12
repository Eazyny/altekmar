import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";

export const metadata = {
  title: "passenger | Altekmar",
};

export default function CategoryPage() {
  return (
    <div>
      <HeaderOne />
      <ElevatorCatalogBreadcumb categorySlug="passenger" />
      <ElevatorCategoryListing categorySlug="passenger" />
      <FooterTwo />
      <Scroll />
    </div>
  );
}