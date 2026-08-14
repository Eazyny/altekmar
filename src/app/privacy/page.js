import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import LegalPage from "~/sections/Legal/LegalPage";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Consulta cómo Altekmar Group, SRL recopila, utiliza y protege la información enviada a través de este sitio web.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="altekmar-inner-page">
      <HeaderFour />
      <LegalPage type="privacy" />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
