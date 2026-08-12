import BreadcumbFive from "~/sections/Checkout/BreadcumbFive";
import CheckoutArea from "~/sections/Checkout/CheckoutArea";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
export default function CheckoutPage() {
  return (
    <>
      <HeaderFour />
      <BreadcumbFive />
      <CheckoutArea />
      <CorporateFooter />
      <Scroll />
    </>
  );
}
