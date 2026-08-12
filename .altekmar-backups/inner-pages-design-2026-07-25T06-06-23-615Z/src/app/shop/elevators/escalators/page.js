import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";

export const metadata = {
  title: "escalators | Altekmar",
};

export default function CategoryPage() {
  return (
    <div>
      <HeaderOne />
      <ElevatorCatalogBreadcumb categorySlug="escalators" />
      <ElevatorCategoryListing categorySlug="escalators" />
      <FooterTwo />
      <Scroll />
    </div>
  );
}