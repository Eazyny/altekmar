import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryListing,
} from "~/sections/Shop/ElevatorCatalog";

export const metadata = {
  title: "observation | Altekmar",
};

export default function CategoryPage() {
  return (
    <div>
      <HeaderOne />
      <ElevatorCatalogBreadcumb categorySlug="observation" />
      <ElevatorCategoryListing categorySlug="observation" />
      <FooterTwo />
      <Scroll />
    </div>
  );
}