import BreadcumbNine from "~/sections/Service/BreadcumbNine";
import Client from "~/sections/Service/Client";
import Contact from "~/sections/Service/Contact";
import Process from "~/sections/Service/Process";
import Service from "~/sections/Service/Service";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import TestimonialTwo from "~/sections/Common/TestimonialTwo";
import Scroll from "~/sections/Common/Scroll";
export default function ServicePage() {
    return (
        <div className="altekmar-inner-page" style={{overflow: 'hidden'}}>
            <HeaderFour />
            <BreadcumbNine />
            <Service />
            <Process />
            <TestimonialTwo />
            <Client />
            <Contact />
            <FooterThree />
            <Scroll />
        </div>
    );
}