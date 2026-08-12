import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { ServiceHub } from "~/sections/Services/CorporateServices";
import Scroll from "~/sections/Common/Scroll";

export default function ServicesPage() {
  return (
    <div>
      <HeaderFour />
      <ServiceHub />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
