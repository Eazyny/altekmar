import CorporateLanding from "~/sections/Home-2/CorporateLanding";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";

export default function HomeTwo() {
  return (
    <div className="altekmar-home-page altekmar-corporate-page">
      <HeaderFour />
      <CorporateLanding />
      <CorporateFooter />
    </div>
  );
}
