import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryHub,
} from "~/sections/Shop/ElevatorCatalog";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Elevadores y movilidad vertical",
  description:
    "Elevadores de pasajeros, residenciales, panorámicos, hospitalarios y de carga coordinados según cada proyecto.",
  path: "/shop/elevators",
  image:
    "/main-assets/img/elevators/gots/passenger/800kg-mirror-finish-passenger-elevator-stainless-steel-lift/01-passenger-elevator-5b1aeaaf.jpg",
});

export default function ElevatorCatalogPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb />
      <ElevatorCategoryHub />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
