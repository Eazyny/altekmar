import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import ElevatorCategoryCatalog from "~/sections/Shop/ElevatorCatalog/PassengerElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores de carga",
  description:
    "Elevadores de carga para almacenes, comercios e instalaciones industriales, configurados según capacidad y recorrido.",
  path: "/shop/elevators/freight",
});

export default function CategoryPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCategoryCatalog categorySlug="freight" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
