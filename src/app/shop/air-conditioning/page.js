import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { DivisionShowcase } from "~/sections/Shop/DivisionShowcase";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Aire acondicionado y climatización",
  description:
    "Climatización residencial y comercial con selección de equipos, instalación profesional, ventilación y soporte técnico.",
  path: "/shop/air-conditioning",
});

export default function ServiceCategoryPage() {
  return (
    <div>
      <HeaderFour />
      <DivisionShowcase division="air-conditioning" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
