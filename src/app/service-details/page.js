import BreadcumbTen from "~/sections/Service-Details/BreadcumbTen";
import Faq from "~/sections/Service-Details/Faq";
import ServiceDetails from "~/sections/Service-Details/ServiceDetails";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Scroll from "~/sections/Common/Scroll";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
export default function ServiceDetailsPage() {
    return (
        <div className="altekmar-inner-page" style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <BreadcumbTen />
            <ServiceDetails />
            <Faq />
            <CorporateFooter />
            <Scroll />
        </div>
    );
}