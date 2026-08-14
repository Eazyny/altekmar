import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { DivisionShowcase } from "~/sections/Shop/DivisionShowcase";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Cámaras y videovigilancia",
  description:
    "Sistemas de cámaras, grabación y monitoreo remoto para residencias, comercios, almacenes y perímetros.",
  path: "/shop/cameras-surveillance",
});

export default function ServiceCategoryPage() {
  return (
    <div>
      <HeaderFour />
      <DivisionShowcase division="cameras-surveillance" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
