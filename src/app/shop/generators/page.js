import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { ServiceDivisionPage } from "~/sections/Services/CorporateServices";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Generadores y respaldo eléctrico",
  description:
    "Generadores y soluciones de respaldo eléctrico para continuidad operativa residencial, comercial e institucional.",
  path: "/shop/generators",
  image: "/main-assets/img/ac_generator.png",
});

export default function ServiceCategoryPage() {
  return (
    <div>
      <HeaderFour />
      <ServiceDivisionPage division="generators" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
