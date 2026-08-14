import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import ElevatorCategoryCatalog from "~/sections/Shop/ElevatorCatalog/PassengerElevatorCatalog";
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
      <ElevatorCategoryCatalog categorySlug="hospital" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
