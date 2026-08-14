import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { DivisionShowcase } from "~/sections/Shop/DivisionShowcase";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Sistemas de seguridad y control de acceso",
  description:
    "Alarmas, sensores, control de acceso e intercomunicación integrados para residencias, comercios e instituciones.",
  path: "/shop/security-systems",
});

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
