import BreadcumbSix from "~/sections/Contact/BreadcumbSix";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactAreaTwo from "~/sections/Contact/ContactAreaTwo";
import ContactMap from "~/sections/Contact/ContactMap";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
export default function ContactPage() {
  return (
    <div className="altekmar-inner-page" style={{overflow: "hidden"}}>
      <HeaderFour />
      <BreadcumbSix />
      <ContactArea />
      <ContactAreaTwo />
      <ContactMap />
      <FooterThree />
      <Scroll />
    </div>
  );
}
