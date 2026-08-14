import CorporateContact from "~/sections/Contact/CorporateContact";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
export default function ContactPage() {
  return (
    <div className="altekmar-inner-page" style={{ overflow: "hidden" }}>
      <HeaderFour />
      <CorporateContact />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
