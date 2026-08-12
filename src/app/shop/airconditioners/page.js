import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { ServiceDivisionPage } from "~/sections/Services/CorporateServices";
import Scroll from "~/sections/Common/Scroll";

export default function ServiceCategoryPage() {
  return (
    <div>
      <HeaderFour />
      <ServiceDivisionPage division="air-conditioning" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
