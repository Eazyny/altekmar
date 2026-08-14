import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import PassengerElevatorCatalog from "~/sections/Shop/ElevatorCatalog/PassengerElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores de pasajeros",
  description:
    "Modelos de elevadores de pasajeros configurables para edificios residenciales, comerciales e institucionales.",
  path: "/shop/elevators/passenger",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <PassengerElevatorCatalog />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
