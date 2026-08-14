import CorporateContact from "~/sections/Contact/CorporateContact";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";
import { ContactStructuredData } from "~/seo/StructuredData";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Solicita una evaluación para elevadores, generadores, climatización, seguridad o videovigilancia con Altekmar.",
  path: "/contact",
});
export default function ContactPage() {
  return (
    <div className="altekmar-inner-page" style={{ overflow: "hidden" }}>
      <ContactStructuredData />
      <HeaderFour />
      <CorporateContact />
      <CorporateFooter />
      <Scroll />
    </div>
  );
}
