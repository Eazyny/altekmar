import CorporateAbout from "~/sections/About/CorporateAbout";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Scroll from "~/sections/Common/Scroll";
import { createPageMetadata } from "~/lib/seo";

export const metadata = createPageMetadata({
  title: "Nosotros",
  description:
    "Conoce cómo Altekmar coordina equipos, instalación y soporte para sistemas esenciales en República Dominicana.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeaderFour />
      <CorporateAbout />
      <Scroll />
    </>
  );
}
