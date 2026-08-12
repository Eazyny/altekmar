import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
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
    <div className="altekmar-inner-page">
      <HeaderFour />
      <ElevatorCatalogBreadcumb />
      <ElevatorCategoryHub />
      <FooterThree />
      <Scroll />
    </div>
  );
}