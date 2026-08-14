import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import LegalPage from "~/sections/Legal/LegalPage";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Términos de uso",
  description:
    "Consulta los términos aplicables a la información, equipos, cotizaciones y servicios presentados en el sitio de Altekmar.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <LegalPage type="terms" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
