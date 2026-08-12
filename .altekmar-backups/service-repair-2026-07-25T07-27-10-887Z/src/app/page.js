import CorporateLanding from "~/sections/Home-2/CorporateLanding";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Scroll from "~/sections/Common/Scroll";

export default function HomeTwo() {
  return (
    <div className="altekmar-home-page altekmar-corporate-page">
      <HeaderFour />
      <CorporateLanding />
      <FooterThree />
      <Scroll />
    </div>
  );
}
