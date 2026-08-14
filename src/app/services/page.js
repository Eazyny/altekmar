import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { ServiceHub } from "~/sections/Services/CorporateServices";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Servicios y divisiones",
  description:
    "Explora las divisiones de Altekmar: movilidad vertical, energía de respaldo, climatización, seguridad y videovigilancia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <HeaderFour />
      <ServiceHub />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
