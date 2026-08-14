import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import ElevatorCategoryCatalog from "~/sections/Shop/ElevatorCatalog/PassengerElevatorCatalog";
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
      <ElevatorCategoryCatalog categorySlug="observation" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
