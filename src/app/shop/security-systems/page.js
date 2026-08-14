import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { DivisionShowcase } from "~/sections/Shop/DivisionShowcase";
import Scroll from "~/sections/Common/Scroll";

export default function ServiceCategoryPage() {
  return (
    <div>
      <HeaderFour />
      <DivisionShowcase division="security-systems" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
