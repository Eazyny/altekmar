import CorporateLanding from "~/sections/Home-2/CorporateLanding";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Soluciones integradas para edificios",
  description:
    "Elevadores, generadores, climatización y sistemas de seguridad coordinados por Altekmar en República Dominicana.",
  path: "/",
  image: "/main-assets/img/corporate/integrated-building-systems.webp",
});

export default function HomeTwo() {
  return (
    <div className="altekmar-home-page altekmar-corporate-page">
      <HeaderFour />
      <CorporateLanding />
      <CorporateFooter />
    </div>
  );
}
