import BreadcumbFour from "~/sections/Cart/BreadcumbFour";
import CartArea from "~/sections/Cart/CartArea";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
export default function CartPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <BreadcumbFour />
      <CartArea />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
