import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import {
  ElevatorCatalogBreadcumb,
  ElevatorCategoryHub,
} from "~/sections/Shop/ElevatorCatalog";

export const metadata = {
  title: "Elevator Categories | Altekmar",
  description:
    "Passenger, home, panoramic, hospital and freight elevators plus escalators supplied by Altekmar.",
};

export default function ElevatorCatalogPage() {
  return (
    <div>
      <HeaderOne />
      <ElevatorCatalogBreadcumb />
      <ElevatorCategoryHub />
      <FooterTwo />
      <Scroll />
    </div>
  );
}