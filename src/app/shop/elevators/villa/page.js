import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import ElevatorCategoryCatalog from "~/sections/Shop/ElevatorCatalog/PassengerElevatorCatalog";
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
      <ElevatorCategoryCatalog categorySlug="villa" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
